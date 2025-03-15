import  Product from '../product'

export default class Stock {
  protected minAmout: number
  protected amount: number
  protected touch: (instace?: Product) => void
  protected parent?: Product

  constructor(
    amount: number, 
    minAmout: number, 
    touch?: (instace?: Product) => void, parent?: Product
  ) {
    this.minAmout = minAmout ?? 1
    this.amount = amount ?? 0
    this.parent = parent
    this.touch = touch ?? ((instace?: Product) => {})
  }

  get data() {
    return {
      amout: this.amount,
      minAmount: this.minAmout,
    }
  }

  get isLowStock() {
    return this.amount < this.minAmout
  }

  updateStock(quantity: number) {
    this.amount += quantity

    if (this.amount < 0) {
        throw new Error("Estoque não pode ser negativo!")
    }
}

}
