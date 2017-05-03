import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {RestApiService} from "../rest-api.service";
import {Model} from "../../../models/model";

@Injectable()
export class PokeApiService<T extends Model, I> extends RestApiService<T, I> {

    constructor(http: Http) {
        super(http, 'http://pokeapi.co/api/v2');
    }
}
