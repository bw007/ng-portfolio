import { Component } from "@angular/core";
import { HeroComponent } from "@app/feature/home/hero/hero.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
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

  features = [
    {
      title: 'Clean Architecture',
      description: 'Prioritizing clean, maintainable code structures to ensure long-term stability and easy feature additions.'
    },
    {
      title: 'Performance First',
      description: 'Applications are optimized for speed and efficiency, delivering seamless experiences even with heavy data.'
    },
    {
      title: 'Responsive Design',
      description: 'All layouts are built mobile-first, ensuring they look stunning and function perfectly on any device.'
    }
  ];
}