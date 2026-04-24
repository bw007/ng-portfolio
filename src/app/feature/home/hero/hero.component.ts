import { Component } from '@angular/core';
import { ButtonComponent } from "@shared/ui/button/button.component";
import { IconComponent } from "@shared/ui/icon/icon.component";
import { IconName } from '@shared/ui/icon/icon.types';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-hero',
  imports: [ButtonComponent, IconComponent, RouterLink],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  readonly socialLinks: { name: string; href: string; icon: IconName }[] = [
    { name: 'Telegram', href: 'https://t.me/hasanov_l', icon: 'send' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/lazizbek-hasanov-600374311/', icon: 'linkedin' },
    { name: 'GitHub', href: 'https://github.com/bw007', icon: 'github' },
  ];
}
