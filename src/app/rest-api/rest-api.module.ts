import {NgModule} from '@angular/core';

/** Modules **/
import {CommonModule} from '@angular/common';
import {HttpModule} from "@angular/http";

/** Providers **/
import {RestApiService} from "./services/api/rest-api.service";
import {PokeApiService} from "./services/api/poke-api/poke-api.service";
import {PokemonApiService} from "./services/api/poke-api/pokemon-api/pokemon-api.service";
import {GenerationApiService} from "./services/api/poke-api/generation-api/generation-api.service";


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpModule
    ],
    providers: [
        RestApiService,
        PokeApiService,
        PokemonApiService,
        GenerationApiService
    ]
})
export class RestApiModule {
}
