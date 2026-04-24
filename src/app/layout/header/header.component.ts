import { Component, DestroyRef, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from "@angular/router";
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ButtonComponent } from "@shared/ui/button/button.component";
import { IconComponent } from "@app/shared/ui/icon/icon.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [ButtonComponent, RouterLink, IconComponent],
})
export class HeaderComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly platformId = inject(PLATFORM_ID);

  isMobileMenuOpen = signal(false);
  currentLang = signal('en');
  languages = [{code: 'uz', title: 'O\'z'}, {code: 'en', title: 'En'}];

  setLang(lang: string) {
    this.currentLang.set(lang);
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setupNavigationSubscription();
    }
  };

  private setupNavigationSubscription() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => this.closeMenu());
  };

  toggleMenu() {
    this.isMobileMenuOpen.update(v => !v);
  };

  closeMenu() {
    this.isMobileMenuOpen.set(false);
  };
}
