import {
  CollectionReference,
  Timestamp,
  addDoc,
  collection,
} from 'firebase/firestore'

import { AuthenticatedUserResponseDTO } from '@/domain/dtos/auth/response/authenticated_user'
import { firebaseFirestore } from '@/infra/firebase'

export abstract class GenericFirebaseRepository<CreateDTO> {
  protected readonly col: CollectionReference

  constructor(protected readonly collectionName: string) {
    this.col = collection(firebaseFirestore, this.collectionName)
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
}
