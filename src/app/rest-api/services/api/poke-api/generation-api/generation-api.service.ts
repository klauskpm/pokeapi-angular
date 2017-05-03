import {Injectable} from '@angular/core';
import {PokeApiService} from "../poke-api.service";
import {Generation, GenerationResponse} from "../../../../models/generation";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class GenerationApiService extends PokeApiService<Generation, GenerationResponse> {
    private _path = '/generation/';

    constructor(http: Http) {
        super(http);
        this.model = Generation;
    }

    getGenerationById(id: number): Observable<Generation> {
        return this.get(`${this._path}${id}`);
    }

    getGenerationByName(name: string): Observable<Generation> {
        return this.get(`${this._path}${name}`);
    }
}
