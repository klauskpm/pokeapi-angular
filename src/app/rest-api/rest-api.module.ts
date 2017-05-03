import {NgModule} from '@angular/core';

/** Modules **/
import {CommonModule} from '@angular/common';
import {HttpModule} from "@angular/http";

/** Providers **/
import {RestApiService} from "./services/rest-api/rest-api.service";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpModule
    ],
    providers: [
        RestApiService
    ]
})
export class RestApiModule {
}
