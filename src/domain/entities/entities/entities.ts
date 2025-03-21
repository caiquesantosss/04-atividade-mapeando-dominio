import { randomUUID } from 'node:crypto'
import { UniqueEntityId } from './unique-entity'

export class Entity<Props> {
    private _id: UniqueEntityId
    private props: Props

    get id() {
        return this._id
    }

    protected constructor(props: Props, id?: UniqueEntityId) {
        this.props = props
        this._id = id ?? new UniqueEntityId()
    }
}
