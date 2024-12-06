import { FirebaseAuthAdapter } from '@/adapters/firebase/auth'
import { AuthService } from './auth'
import { GuestService } from './guests'
import { FirebaseGuestAdapter } from '@/adapters/firebase/guest'
import { ProductService } from './product'
import { FirebaseProductAdapter } from '@/adapters/firebase/product'

export class ServicesContainer {
  public static getAuthService(): AuthService {
    return new AuthService(new FirebaseAuthAdapter())
  }

  public static getGuestService(): GuestService {
    return new GuestService(new FirebaseGuestAdapter())
  }

  public static getProductService(): ProductService {
    return new ProductService(new FirebaseProductAdapter())
  }
}
