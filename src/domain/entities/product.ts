import Entity from '../../core/entities/entities'
import { Optional } from '../../core/types/optinal'
import UniqueEntityId from './values-object/unique-entity'

interface ProductProps {
  productId: string
  title: string
  description: string
  size: string
  color: string
  price: number
  stock: string
  createdAt: Date
  updatedAt: Date
}

export class Product extends Entity<ProductProps> {
  get productId() {
    return this.props.productId
  }

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

  private touch() {
    this.props.updatedAt = new Date()
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
    id?: UniqueEntityId
  ) {
    const product = new Product(
      {
        ...props,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      id?.values
    )

    return product
  }
}
