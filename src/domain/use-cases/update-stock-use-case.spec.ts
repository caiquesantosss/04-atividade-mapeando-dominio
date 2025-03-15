import { afterAll, beforeAll, describe, expect, vi, it } from 'vitest'
import InMemoryProductRepository from '../repository/in-memory-repository/product-in-memory-repository'
import UpdateStockUseCase from './update-stock-use-case'
import Stock from '../entities/values-object/stock'
import Product from '../entities/product'

let productRepository: InMemoryProductRepository
let sut: UpdateStockUseCase

beforeAll(() => {
  productRepository = new InMemoryProductRepository()
  sut = new UpdateStockUseCase(productRepository)

  vi.useFakeTimers()
})

afterAll(() => {
  vi.useRealTimers()
})

describe('Update stock use case', () => {
  it('should update stock', async () => {
    const { product: ProductCreated } = await productRepository.create(
      Product.create({
        title: 'Product 1',
        description: 'Product 1 description',
        price: 10,
        stock: new Stock(6, 10),
        size: '10x10',
        color: 'green',
      })
    )
    const newQuantity = 5
    await productRepository.updateStock(ProductCreated)

    await sut.execute({
        productId: ProductCreated.id.value,
        quantity: newQuantity
    })

    console.log(ProductCreated.stock.data.amout)

    const updateProduct = await productRepository.findById(ProductCreated.id.value)
    expect(updateProduct).toBeTruthy()
    expect(updateProduct?.product.stock.data.amout).toBe(11)
  })
})
