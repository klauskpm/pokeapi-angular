import {Injectable} from '@angular/core';
import {PokeApiService} from "../poke-api.service";
import {Pokemon, PokemonResponse} from "../../models/pokemon";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";

@Injectable()
export class PokemonApiService extends PokeApiService<Pokemon, PokemonResponse> {
    private _path: string = '/pokemon/';

    constructor(http: Http) {
        super(http);
        this.model = Pokemon;
    }

    getPokemon(id: number): Observable<Pokemon> {
        return this.get(`${this._path}${id}`);
    }
}
