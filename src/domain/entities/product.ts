import Entity from '../../core/entities/entities'
import { Optional } from '../../core/types/optinal'
import Stock from './values-object/stock'
import UniqueEntityId from './values-object/unique-entity'

interface ProductProps {
  title: string
  description: string
  size: string
  color: string
  price: number
  stock: Stock
  createdAt: Date
  updatedAt?: Date
}

export type StockProps = {
  amount: number
  minAmount?: number
}

export type ProductCreateProps = Omit<
  Optional<ProductProps, 'createdAt'>,
  'stock' & {
    stock: StockProps
  }
>

export default class Product extends Entity<ProductProps> {
  get title() {
    return this.props.title
  }

  get description() {
    return this.props.description
  }

  get size() {
    return this.props.size
  }

  get color() {
    return this.props.color
  }

  get price() {
    return this.props.price
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  get id() {
    return this._id
  }

  get stock() {
    this.props.stock = new Stock(
      this.props.stock.data.amout,
      this.props.stock.data.minAmount, 
      (instace?: Product) => this.touch(instace), this
    )
    return this.props.stock
}

  protected touch(instace?: Product) {
    if (instace) {
      instace.props.updatedAt = new Date()
    } else {
      this.props.updatedAt = new Date()
    }
  }

  set price(price: number) {
    this.props.price = price
    this.touch()
  }

  set title(title: string) {
    this.props.title = title
    this.touch()
  }

  set color(color: string) {
    this.props.color = color
    this.touch()
  }

  set size(size: string) {
    this.props.size = size
    this.touch()
  }

  static create(
    props: Optional<ProductProps, 'createdAt' | 'updatedAt'>,
    id?: string
  ) {
    const product = new Product(
      {
        ...props,
        stock: new Stock(
          props.stock.data.amout > 1 ? props.stock.data.amout : 1,
          props.stock.data.minAmount
        ),
        createdAt: new Date(),
      },
      id
    )

    return product
  }
}
