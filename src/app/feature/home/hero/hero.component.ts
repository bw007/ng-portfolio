import { Component } from '@angular/core';
import { ScrambleTextDirective } from "@app/shared/directives/scramble-text.directive";

@Component({
  selector: 'app-hero',
  imports: [ScrambleTextDirective],
  templateUrl: './hero.component.html',
})
export class HeroComponent {}
