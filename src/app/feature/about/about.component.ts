import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
})
export class AboutComponent {

  skills = [
    { name: 'Angular', category: 'Framework', icon: 'angular.svg', color: '#dd0031' },
    { name: 'RxJS', category: 'Framework', icon: 'rxjs.svg', color: '#b7178c' },
    { name: 'TypeScript',category: 'Language', icon: 'typescript.svg', color: '#3178c6' },
    { name: 'JavaScript',category: 'Language', icon: 'javascript.svg', color: '#f7df1e' },
    { name: 'Taiga UI',category: 'UI Library', icon: 'taiga.svg', color: '#526cfe' },
    { name: 'Angular Material', category: 'UI Library', icon: 'angular-material.svg', color: '#dd0031' },
    { name: 'Tailwind CSS',category: 'Styling', icon: 'tailwind.svg', color: '#06b6d4' },
    { name: 'SCSS',category: 'Styling', icon: 'scss.svg', color: '#cc6699' },
    { name: 'HTML5',category: 'Styling', icon: 'html-5.svg', color: '#e34f26' },
    { name: 'CSS3',category: 'Styling', icon: 'css.svg', color: '#1572b6' },
    { name: 'Git',category: 'Tools', icon: 'git.svg', color: '#f05032' },
    { name: 'PrimeNG',category: 'UI Library', icon: 'primeng.svg', color: '#007bff' }
  ];

  categories = ['All', 'Framework', 'Language', 'UI Library', 'Styling', 'Tools'];
  activeCategory = 'All';

  get filteredSkills() {
    return this.activeCategory === 'All'
      ? this.skills
      : this.skills.filter(s => s.category === this.activeCategory);
  }

}
