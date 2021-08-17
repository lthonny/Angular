import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { QuillModule } from "ngx-quill";
import { ErrorPageComponent } from "./components/error-page/error-page.component";


@NgModule({
  declarations: [
    ErrorPageComponent
  ],
  imports: [
    HttpClientModule,
    QuillModule.forRoot()
  ],
  exports: [
    HttpClientModule,
    QuillModule,
    ErrorPageComponent
  ]
})
export class SharedModule { }
