import {Model} from "../../rest-api/models/model";

export interface PokemonResponse {
    id: number;
    name: String;
    weight: number;
    height: number;
}

export class Pokemon extends Model {
    private _id: number;
    private _name: String;
    private _weight: number;
    private _height: number;

    constructor(data: PokemonResponse) {
        super(data);
        let {id, name, weight, height} = data;

        this.id = id;
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get name(): String {
        return this._name;
    }

    set name(name: String) {
        this._name = name;
    }

    get weight(): number {
        return this._weight;
    }

    set weight(weight: number) {
        this._weight = weight;
    }

    get height(): number {
        return this._height;
    }

    set height(height: number) {
        this._height = height;
    }
}
