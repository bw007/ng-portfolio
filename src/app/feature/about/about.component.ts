import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  skills = [
    {
      name: 'Angular',
      category: 'Google',
      badges: ['Frontend', 'Signals'],
      description: 'Excels at building scalable, enterprise-level web applications and dynamic interfaces.'
    },
    {
      name: 'TypeScript',
      category: 'Microsoft',
      badges: ['Strong Typing', 'OOP'],
      description: 'Strong reasoning, static typing, and structural understanding for complex tasks.'
    },
    {
      name: 'Tailwind CSS',
      category: 'Styling',
      badges: ['Utility-First', 'Design'],
      description: 'A speedy and economical styling framework that excels at rapid UI development.'
    },
    {
      name: 'RxJS',
      category: 'Reactive',
      badges: ['Streams', 'Async'],
      description: 'Reactive models that deliver enhanced performance for asynchronous data streams.'
    }
  ];
}
