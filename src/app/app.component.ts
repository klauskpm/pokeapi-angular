import { Component } from '@angular/core';
import {GenerationApiService} from "./poke-api/services/generation-api/generation-api.service";
import {Generation} from "./poke-api/models/generation";


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
          console.log(data);
      };

      api.getGenerationById(5)
          .subscribe(onSuccess);
  }
}
