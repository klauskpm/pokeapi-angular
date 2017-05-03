import {NgModule} from '@angular/core';

/** Modules **/
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

/** Components **/
import {AppComponent} from './app.component';
import {PokeApiModule} from "./poke-api/poke-api.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        PokeApiModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
