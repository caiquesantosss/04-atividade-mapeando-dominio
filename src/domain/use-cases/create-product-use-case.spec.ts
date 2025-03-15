import Product from '../entities/product'
import CreateProductUseCase from './create-product-use-case'
import { ProductRepository } from '../repository/product-repository'

import { afterAll, beforeAll, describe, expect, it, test, vi } from 'vitest'
import Stock from '../entities/values-object/stock'
import InMemoryProductRepository from '../repository/in-memory-repository/product-in-memory-repository'

let productRepository: ProductRepository
let sut: CreateProductUseCase

beforeAll(() => {
  productRepository = new InMemoryProductRepository()
  sut = new CreateProductUseCase(productRepository)

  vi.useFakeTimers()
})

afterAll(() => {
  vi.useRealTimers()
})

describe('Create product use case', () => {
  it('should create a new product', async () => {
    const { product } = await sut.execute({
      title: 'Product 1',
      description: 'Product 1 description',
      price: 10,
      stock: new Stock(1, 10),
      size: '10x10',
      color: 'green',
    })

    expect(product).toBeInstanceOf(Product)
    expect(product).toEqual(
      expect.objectContaining({
        _id: expect.objectContaining({ _value: expect.any(String) }),
        title: 'Product 1',
      })
    )
  })
})
