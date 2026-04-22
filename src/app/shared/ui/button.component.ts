import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  template: `
    <button
      [ngClass]="getSeverityClass()"
      [class.rounded-full!]="rounded()"
      [class.rounded-lg!]="!rounded()"
      class="text-white cursor-pointer font-semibold text-sm py-3 px-6 flex items-center gap-2 active:opacity-75 hover:opacity-85 transition-colors"
    >
      <ng-content select="[slot=left]" />
      {{ label() }}
      <ng-content select="[slot=right]" />
    </button>
  `,
})
export class ButtonComponent {
  readonly label = input<string>();
  readonly rounded = input<boolean>(false);
  readonly severity = input<'success' | 'info' | 'warning' | 'danger' | 'angular'>('info');

  getSeverityClass(): string {
    switch (this.severity()) {
      case 'success': return 'bg-green-500';
      case 'danger': return 'bg-red-500';
      case 'warning': return 'bg-orange-500';
      case 'info': return 'bg-blue-500';
      case 'angular': return 'bg-angular-modern';
      default: return 'bg-gray-500';
    }
  }
}