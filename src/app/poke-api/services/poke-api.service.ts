import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {NgRapiService} from "../../ng-rapi/services/ng-rapi/ng-rapi.service";
import {Model} from "../../ng-rapi/models/model";

@Injectable()
export class PokeApiService<T extends Model, I> extends NgRapiService<T, I> {

    constructor(http: Http) {
        super(http, 'http://pokeapi.co/api/v2');
    }
}
