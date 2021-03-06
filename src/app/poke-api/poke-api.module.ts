import {NgModule} from '@angular/core';

/** Modules **/
import {CommonModule} from '@angular/common';
import {NgRapiModule} from "../ng-rapi/ng-rapi.module";

/** Providers **/
import {GenerationApiService} from "./services/generation-api/generation-api.service";
import {PokemonApiService} from "./services/pokemon-api/pokemon-api.service";
import {PokeApiService} from "./services/poke-api.service";

@NgModule({
    imports: [
        CommonModule,
        NgRapiModule
    ],
    declarations: [],
    providers: [
        PokeApiService,
        PokemonApiService,
        GenerationApiService
    ]
})
export class PokeApiModule {
}
