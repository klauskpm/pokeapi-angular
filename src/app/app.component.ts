import { Component } from '@angular/core';
import {PokemonApiService} from "./rest-api/services/api/poke-api/pokemon-api/pokemon-api.service";
import {GenerationApiService} from "./rest-api/services/api/poke-api/generation-api/generation-api.service";
import {Generation} from "./rest-api/models/generation";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers: []
})
export class AppComponent {
  title = 'app works!';

  constructor(api: GenerationApiService) {
      const onSuccess = (data: Generation) => {
          console.log(data.getMainRegion());

      };

      api.getGenerationById(5)
          .subscribe(onSuccess);
  }
}
