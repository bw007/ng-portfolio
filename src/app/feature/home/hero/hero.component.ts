import { Component } from '@angular/core';
import { ButtonComponent } from "@shared/ui/button/button.component";
import { IconComponent } from "@shared/ui/icon/icon.component";
import { IconName } from '@shared/ui/icon/icon.types';

@Component({
  selector: 'app-hero',
  imports: [ButtonComponent, IconComponent],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  readonly socialLinks: { name: string; href: string; icon: IconName }[] = [
    { name: 'Email', href: 'mailto:[EMAIL_ADDRESS]', icon: 'mail' },
    { name: 'Telegram', href: 'https://t.me/l_hasanov', icon: 'send' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/lazizbek-hasanov-600374311/', icon: 'linkedin' },
    { name: 'GitHub', href: 'https://github.com/bw007', icon: 'github' },
  ];
}
