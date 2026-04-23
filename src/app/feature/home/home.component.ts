import { Component } from "@angular/core";
import { HeroComponent } from "@app/feature/home/hero/hero.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
