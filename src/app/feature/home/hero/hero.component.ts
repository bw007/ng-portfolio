import { Component } from '@angular/core';
import { ScrambleTextDirective } from "@shared/directives/scramble-text.directive";
import { ButtonComponent } from "@shared/ui/button.component";

@Component({
  selector: 'app-hero',
  imports: [ScrambleTextDirective, ButtonComponent],
  templateUrl: './hero.component.html',
})
export class HeroComponent {}
