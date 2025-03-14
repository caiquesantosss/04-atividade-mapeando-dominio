import  UniqueEntityId  from "../../domain/entities/values-object/unique-entity"

export default class Entity<Props> {
    protected _id: UniqueEntityId
    protected props: Props

    protected constructor(props: Props, id?: string) {
        this.props = props
        this._id = new UniqueEntityId(id)
    }
}