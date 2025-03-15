import Product from '../entities/product'

export interface ProductRepository {
  create(props: Product): Promise<{ product: Product }>
  findById(id: string): Promise<{ product: Product } | null>
}
