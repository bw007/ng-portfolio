import { Component, computed, input, output } from '@angular/core';
import { NgClass } from '@angular/common';
import { IconComponent } from "../icon/icon.component";
import type { ButtonSeverity, ButtonSize, ButtonType } from './button.types';
import type { IconName } from '../icon/icon.types';

@Component({
  selector: 'app-button',
  imports: [NgClass, IconComponent],
  template: `
    <button
      [ngClass]="getClasses()"
      [style]="getAngularStyle()"
      [class.rounded-full!]="rounded()"
      [disabled]="disabled()"
      [type]="type()"
      (click)="onClick.emit($event)"
      class="text-white w-full leading-none! cursor-pointer font-semibold flex items-center
            justify-center active:opacity-75 hover:opacity-85 transition-colors
            disabled:opacity-35 disabled:cursor-not-allowed"
    >
      @if (iconLeft()) {
      <app-icon [name]="iconLeft()!" [size]="iconSize()" />
      }
      <ng-content select="[slot=left]" />
      {{ label() }}
      <ng-content select="[slot=right]" />
      @if (loading()) {
      <app-icon class="animate-spin" name="loader" [size]="iconSize()" />
      }
      @if (!loading() && iconRight()) {
      <app-icon [name]="iconRight()!" [size]="iconSize()" />
      }
    </button>
  `,
})
export class ButtonComponent {
  readonly label = input<string>();
  readonly rounded = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly type = input<ButtonType>('button');
  readonly size = input<ButtonSize>('medium');
  readonly severity = input<ButtonSeverity>('info');
  readonly iconLeft = input<IconName>();
  readonly iconRight = input<IconName>();
  readonly icon = input<boolean>(false);
  readonly loading = input<boolean>(false);

  readonly onClick = output<MouseEvent>();

  readonly iconSize = computed(() => {
    switch (this.size()) {
      case 'small': return 14;
      case 'large': return 18;
      default: return 16;
    }
  });

  getClasses(): Record<string, boolean> {
    return {
      'text-xs py-1.5 px-3.5 h-8 gap-1.5 rounded-md': this.size() === 'small',
      'text-sm py-2.5 px-5 h-10 gap-2 rounded-lg!': this.size() === 'medium',
      'text-base py-3 px-7 h-12 gap-2.5 rounded-lg': this.size() === 'large',
      'w-8! h-8!': this.icon() && this.size() === 'small',
      'w-10! h-10!': this.icon() && this.size() === 'medium',
      'w-12! h-12!': this.icon() && this.size() === 'large',
      'bg-blue-500 text-white': this.severity() === 'info',
      'bg-emerald-500 text-white': this.severity() === 'success',
      'bg-amber-500 text-white': this.severity() === 'warning',
      'bg-red-500 text-white': this.severity() === 'danger',
      'bg-transparent text-white': this.severity() === 'text'
    };
  }

  getAngularStyle(): Record<string, string> {
    if (this.severity() === 'angular') {
      return {
        background: 'linear-gradient(135deg, var(--color-angular-red), var(--color-angular-pink))',
        color: 'white',
      };
    }
    return {};
  }
}