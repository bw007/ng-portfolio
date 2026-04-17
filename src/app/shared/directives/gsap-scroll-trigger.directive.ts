import {
  Directive,
  ElementRef,
  OnInit,
  OnDestroy,
  Input,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Directive({
  selector: '[appScrollReveal]',
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() delay: number = 0;
  @Input() direction: 'up' | 'down' | 'left' | 'right' | 'none' = 'up';

  private ctx!: gsap.Context;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    gsap.registerPlugin(ScrollTrigger);

    this.ctx = gsap.context(() => {
      let y = 0;
      let x = 0;

      if (this.direction === 'up') y = 50;
      if (this.direction === 'down') y = -50;
      if (this.direction === 'left') x = 50;
      if (this.direction === 'right') x = -50;

      gsap.fromTo(
        this.el.nativeElement,
        { y, x, opacity: 0 },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          delay: this.delay,
          scrollTrigger: {
            trigger: this.el.nativeElement,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        },
      );
    }, this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.ctx) {
      this.ctx.revert();
    }
  }
}
