import {ChangeDetectionStrategy, Component} from '@angular/core';

import { HeroComponent } from './layout/hero/hero.component';
import { ScrollRevealDirective } from './shared/directives/gsap-scroll-trigger.directive';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [HeroComponent, ScrollRevealDirective],
  templateUrl: './app.html'
})
export class App {
  techStack = [
    { name: 'Angular', icon: '🅰️' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'RxJS', icon: '⚡' },
    { name: 'TailwindCSS', icon: '🌊' },
    { name: 'GSAP', icon: '🎬' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Signals', icon: '📡' },
    { name: 'Vitest', icon: '🧪' }
  ];

  projects = [
    {
      title: 'Enterprise Dashboard Platform',
      description: 'A structural, data-heavy analytics dashboard built with Angular Signals and clean architecture.',
      tags: ['Angular', 'NgRx', 'Tailwind']
    },
    {
      title: 'Real-Time Financial Grid',
      description: 'High-performance web socket data grid supporting millions of updates per minute without jank.',
      tags: ['WebSockets', 'RxJS', 'd3']
    },
    {
      title: 'Design System Library',
      description: 'A robust component library utilizing modern Angular strictly typed forms and standalone components.',
      tags: ['Storybook', 'A11y', 'Tailwind']
    }
  ];
}
