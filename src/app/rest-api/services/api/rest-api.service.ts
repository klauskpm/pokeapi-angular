import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Model} from "../../models/model";

@Injectable()
export class RestApiService<T extends Model, I> {
    private _http: Http;
    private _baseUrl: string;
    protected model: typeof Model;

    constructor(http: Http, url: string) {
        this._http = http;
        this._baseUrl = url;
    }

    get(path: string): Observable<T> {
        return this._http.get(`${this._baseUrl}${path}`)
            .map(this._extractData())
    }

    private _extractData() {
        return (res: Response): T | Object => {
            let body = res.json();

            return body ? this.createModel(body) : {};
        }
    }

    createModel(data: I): T | I {

        return this.model ? this.model.create<T,I>(data) : data;
    }
}
