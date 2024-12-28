import { FirebaseAuthAdapter } from '@/adapters/firebase/auth'
import { AuthService } from './auth'
import { GuestService } from './guests'
import { FirebaseGuestAdapter } from '@/adapters/firebase/guest'
import { ProductService } from './product'
import { FirebaseProductAdapter } from '@/adapters/firebase/product'
import { ProductPaymentService } from './product-payment'
import { FirebaseProductPaymentAdapter } from '@/adapters/firebase/product-payment'
import { MercadoPagoService } from './mercado-pago'

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

  public static getProductPaymentService(): ProductPaymentService {
    return new ProductPaymentService(new FirebaseProductPaymentAdapter())
  }

  public static getMercadoPagoService(): MercadoPagoService {
    return new MercadoPagoService()
  }
}
