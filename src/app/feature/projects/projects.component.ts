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
      description: 'A platform for writing and reading articles about the tech world.',
      tags: ['Angular', 'RxJS', 'Taiga UI', 'TailwindCSS', 'Supabase', 'REST API'],
      github: 'https://github.com/bw007/thech-blog',
      demo: 'https://ngblog-demo.netlify.app/',
      image: 'projects/blog.jpg'
    },
    {
      title: 'Insurance CRM',
      description: 'A dashboard for insurance agents to manage client data.',
      tags: ['Angular', 'RxJS', 'PrimeNG', 'TailwindCSS', 'Rest API'],
      github: 'https://github.com/bw007',
      demo: 'https://insurance-board.netlify.app/',
      image: 'projects/insurance.jpg'
    },
    {
      title: 'Vanguard Dev - Portfolio',
      description: 'The portfolio of a software development Team..',
      tags: ['Claude Code', 'Nuxt JS', 'TailwindCSS', 'GSAP'],
      github: 'https://github.com/bw007',
      demo: '#',
      image: 'projects/vanguard.png'
    },
    {
      title: 'RMAB',
      description: 'Respublika maxsus aloqa uzeli axborot portali',
      tags: ['Claude Code', 'Nuxt JS', 'Nuxt-UI', 'TailwindCSS'],
      github: '#',
      demo: 'https://rmab-dev.nozim-dev.uz',
      image: 'projects/rmab.png'
    },
    {
      title: 'Ahadmix Group',
      description: 'Ahadmix Group ADS agency projects (landing, admin and client panels)',
      tags: ['Vue JS', 'TailwindCSS', 'Ant Design', 'Rest API'],
      github: '#',
      demo: '#',
      image: 'projects/ahadmix.png'
    }
  ];
}
