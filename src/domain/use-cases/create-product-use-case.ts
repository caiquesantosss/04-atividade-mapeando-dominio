import Product, { ProductCreateProps } from '../entities/product'
import { ProductRepository } from '../repository/product-repository'

export interface CreateProductUseCaseRequest extends ProductCreateProps {}

export default class CreateProductUseCase {
  constructor(protected productRepository: ProductRepository) {}

  async execute(props: CreateProductUseCaseRequest) {
    const product = Product.create(props)

    await this.productRepository.create(product)

    return { product }
  }
}
