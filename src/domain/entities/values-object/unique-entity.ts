import { randomUUID } from 'node:crypto'

export default class UniqueEntityId {
    
    private _value: string

    constructor(id?: string) {
        this._value = id ?? randomUUID()
    }

    get values() {
        return this._value
    }

}