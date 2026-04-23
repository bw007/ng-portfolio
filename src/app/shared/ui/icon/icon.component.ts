import { Component, computed, input } from '@angular/core';
import { IconName } from './icon.types';

@Component({
  selector: 'app-icon',
  template: `
    <svg
      [attr.width]="size()"
      [attr.height]="size()"
      [attr.aria-label]="label()"
      [attr.role]="label() ? 'img' : 'presentation'"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <use [attr.href]="href()" />
    </svg>
  `,
  host: {
    '[style.display]': '"inline-flex"',
    '[style.alignItems]': '"center"',
  },
})
export class IconComponent {
  readonly name  = input.required<IconName>();
  readonly size  = input<number>(16);
  readonly label = input<string>();

  readonly href = computed(() => `/icons/sprite.svg#${this.name()}`);
}