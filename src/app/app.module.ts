import {NgModule} from '@angular/core';

/** Modules **/
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RestApiModule} from "./rest-api/rest-api.module";

/** Components **/
import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RestApiModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
