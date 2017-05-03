import {Model} from "./model";

export interface VersionResponse {
    name: string;
    url: string;
}

export class Version extends Model {
    private _name: string;
    private _url: string;

    constructor(data: VersionResponse) {
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
