import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { ScrollRevealDirective } from '@app/shared/directives/gsap-scroll-trigger.directive';
import gsap from 'gsap';

@Component({
  selector: 'app-hero',
  imports: [ScrollRevealDirective],
  templateUrl: './hero.component.html',
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('glitchText') glitchText!: ElementRef<HTMLElement>;
  private ctx!: gsap.Context;

  ngAfterViewInit() {
    this.ctx = gsap.context(() => {
      const el = this.glitchText.nativeElement;

      // Typical scanline/glitch effect using GSAP
      const tl = gsap.timeline({ repeat: -1, repeatDelay: Math.random() * 2 + 1 });

      tl.to(el, { x: 2, skewX: 5, duration: 0.1, ease: 'power1.inOut' })
        .to(el, { x: -2, skewX: -5, duration: 0.1, ease: 'power1.inOut' })
        .to(el, { x: 0, skewX: 0, opacity: 0.8, duration: 0.1 })
        .to(el, { opacity: 1, duration: 0.1 })
        .to(el, { scaleY: 1.1, duration: 0.05 })
        .to(el, { scaleY: 1, duration: 0.05 });
    });
  }

  ngOnDestroy() {
    if (this.ctx) {
      this.ctx.revert();
    }
  }
}
