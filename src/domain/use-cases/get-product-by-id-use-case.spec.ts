import { afterAll, beforeAll, describe, vi, it, expect } from 'vitest'
import InMemoryProductRepository from '../repository/in-memory-repository/product-in-memory-repository'
import GetProductByIdUseCase from './get-product-by-id.use-case'
import { ProductRepository } from '../repository/product-repository'
import Product from '../entities/product'
import Stock from '../entities/values-object/stock'

let productRepository: ProductRepository
let sut: GetProductByIdUseCase

beforeAll(() => {
  productRepository = new InMemoryProductRepository()
  sut = new GetProductByIdUseCase(productRepository)

  vi.useFakeTimers()
})

afterAll(() => {
  vi.useRealTimers()
})

describe('Get product by id use case', () => {
  it('should get a product by id', async () => {
    const { product: ProductCreated } = await productRepository.create(
      Product.create({
        title: 'Product 1',
        description: 'Product 1 description',
        price: 10,
        stock: new Stock(1, 10),
        size: '10x10',
        color: 'green',
      })
    )

    const { product } = await sut.execute({
      productId: ProductCreated.id.value,
    })

    expect(product).toEqual(product)
    expect(product).toEqual(
      expect.objectContaining({
        _id: expect.objectContaining({ _value: expect.any(String) }),
        title: 'Product 1',
      })
    )
  })
})
