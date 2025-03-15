import Product from '../entities/product'
import { ProductRepository } from '../repository/product-repository'

interface UpdateStockUseCaseRequest {
    productId: string   
    quantity: number 
}

export default class UpdateStockUseCase {
    constructor(private productRepository: ProductRepository) {}

    async execute({ productId, quantity }: UpdateStockUseCaseRequest) {
        const product = await this.productRepository.findById(productId)  
        
        if (!product) throw new Error("Produto inválido")

        product.product.stock.updateStock(quantity)    

        if(product.product.stock.isLowStock) {
            throw new Error("Estoque baixo")
        }

        await this.productRepository.updateStock(product.product)

        return { product }
    }   
}