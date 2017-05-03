import {Model} from "../../ng-rapi/models/model";

export interface RegionResponse {
    name: string;
    url: string;
}

export class Region extends Model {
    private _name: string;
    private _url: string;

    constructor(data: RegionResponse) {
        super(data);

        let {name, url} = data;

        this.name = name;
        this.url = url;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }
}
