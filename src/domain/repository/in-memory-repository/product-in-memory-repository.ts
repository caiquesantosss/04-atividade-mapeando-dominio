import Product from '../../entities/product'
import { ProductRepository } from '../product-repository'

export default class InMemoryProductRepository implements ProductRepository {
  products: Product[] = []

  async create(product: Product): Promise<{ product: Product }> {
    this.products.push(product)

    return { product }
  }
  async findById(id: string): Promise<{ product: Product } | null> {
    const index = this.products.findIndex((item) => item.id.value === id)
    const product = this.products[index]

    if (!product) return null

    return { product }
  }

  async updateStock(product: Product): Promise<{ product: Product }> {
    const index = this.products.findIndex(
      (item) => item.id.value === product.id.value
    )
    if (index !== -1) {
      this.products[index] = product
    } else {
      throw new Error('Product not found')
    }

    return { product }
  }
}
