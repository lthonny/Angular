import { NgModule } from "@angular/core";
import { ContentComponent } from "./content/content.component";
import { FooterComponent } from "./footer/footer.component";
import { HomePageComponent } from "./home.component";

@NgModule({
  declarations: [
    HomePageComponent,
    ContentComponent,
    FooterComponent,
  ]
})
export class HomeModule { }