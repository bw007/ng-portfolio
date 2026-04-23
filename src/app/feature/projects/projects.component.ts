import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
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
