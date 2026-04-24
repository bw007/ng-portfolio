import { Component } from '@angular/core';
import { IconComponent } from "@app/shared/ui/icon/icon.component";

@Component({
  selector: 'app-projects',
  imports: [IconComponent],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Tech Blog',
      description: 'A platform for writing and reading articles about the tech world. Built with Angular, featuring authentication, rich text editor, and a clean reading experience.',
      tags: ['Angular', 'RxJS', 'Taiga UI', 'TailwindCSS', 'Supabase', 'REST API'],
      github: 'https://github.com/bw007/thech-blog',
      demo: 'https://ng-blog.netlify.app/',
      image: 'projects/blog.jpg'
    },
    {
      title: 'Insurance CRM',
      description: 'A dashboard for insurance agents to manage client data and send SMS notifications. Built with Angular and focused on clean data management.',
      tags: ['Angular', 'RxJS', 'PrimeNG', 'TailwindCSS', 'Rest API'],
      github: 'https://github.com/bw007',
      demo: 'https://insurance-board.netlify.app/',
      image: 'projects/insurance.jpg'
    }
  ];
}
