import {
  CollectionReference,
  DocumentSnapshot,
  Timestamp,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore'

import { AuthenticatedUserResponseDTO } from '@/domain/dtos/auth/response/authenticated_user'
import { firebaseFirestore } from '@/infra/firebase'
import { ModelQuery } from '@/domain/model-querying'
import { BaseModel } from '@/domain/models/base'

export abstract class GenericFirebaseRepository<
  CreateDTO,
  ListDTO,
  Model extends BaseModel,
> {
  protected readonly col: CollectionReference

  constructor(protected readonly collectionName: string) {
    this.col = collection(firebaseFirestore, this.collectionName)
  }

  private convertDocToData(doc: DocumentSnapshot): ListDTO {
    const data = doc.data()

    if (!data) {
      throw new Error('Document data is undefined')
    }

    const { createdAt, updatedAt, deletedAt, ...rest } = data

    return {
      ...rest,
      id: doc.id,
      createdAt: createdAt?.toDate(),
      updatedAt: updatedAt?.toDate(),
      deletedAt: deletedAt?.toDate(),
    } as ListDTO
  }

  public async create(
    data: CreateDTO,
    user: AuthenticatedUserResponseDTO,
  ): Promise<void> {
    await addDoc(this.col, {
      ...data,
      user_id: user.id,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
      deletedAt: null,
    })
  }

  public async list(
    modelQuery?: ModelQuery<Model>,
    userId?: string,
  ): Promise<ListDTO[]> {
    const conditions = [where('deletedAt', '==', null)]

    if (userId) {
      conditions.push(where('user_id', '==', userId))
    }

    if (modelQuery) {
      if (modelQuery.id) {
        const docRef = doc(this.col, modelQuery.id)
        const docData = this.convertDocToData(
          (await getDoc(docRef)) as DocumentSnapshot,
        )
        return [docData]
      }

      for (const [key, value] of Object.entries(modelQuery)) {
        conditions.push(where(key, '==', value))
      }
    }

    const q = query(this.col, ...conditions)
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => this.convertDocToData(doc))
  }

  public async get(
    modelQuery?: ModelQuery<Model>,
    userId?: string,
  ): Promise<ListDTO> {
    const list = await this.list(modelQuery, userId)
    if (list.length === 0) {
      throw new Error('Document not found')
    }
    return list[0]
  }

  public async update(
    id: string,
    data: CreateDTO,
    user: AuthenticatedUserResponseDTO,
  ): Promise<void> {
    const docRef = doc(this.col, id)
    console.log(user)
    await updateDoc(docRef, { ...data, updatedAt: Timestamp.now() })
  }

  public async delete(id: string): Promise<void> {
    const docRef = doc(this.col, id)
    await updateDoc(docRef, { deletedAt: Timestamp.now() })
  }
}
