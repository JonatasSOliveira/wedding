import {
  CollectionReference,
  DocumentSnapshot,
  Timestamp,
  addDoc,
  collection,
  getDocs,
  query,
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

    const { created_at, updated_at, deleted_at, ...rest } = data

    return {
      ...rest,
      id: doc.id,
      created_at: created_at?.toDate(),
      updated_at: updated_at?.toDate(),
      deleted_at: deleted_at?.toDate(),
    } as ListDTO
  }

  public async create(
    data: CreateDTO,
    user: AuthenticatedUserResponseDTO,
  ): Promise<void> {
    await addDoc(this.col, {
      ...data,
      user_id: user.id,
      created_at: Timestamp.now(),
      updated_at: Timestamp.now(),
      deleted_at: null,
    })
  }

  public async list(
    userId: string,
    modelQuery?: ModelQuery<Model>,
  ): Promise<ListDTO[]> {
    const conditions = [
      where('user_id', '==', userId),
      where('deleted_at', '==', null),
    ]

    if (modelQuery) {
      for (const [key, value] of Object.entries(modelQuery)) {
        conditions.push(where(key, '==', value))
      }
    }

    const q = query(this.col, ...conditions)
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => this.convertDocToData(doc))
  }
}
