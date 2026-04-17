import {ChangeDetectionStrategy, Component} from '@angular/core';
import { LayoutComponent } from './layout/layout.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [LayoutComponent],
  template: `<app-layout />`
})
export class App {}
