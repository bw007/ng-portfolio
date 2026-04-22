import { isPlatformBrowser } from "@angular/common";
import { AfterViewInit, Directive, ElementRef, inject, input, PLATFORM_ID } from "@angular/core";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

@Directive({
  selector: 'span[scrambleText]',
})
export class ScrambleTextDirective implements AfterViewInit {
  readonly text = input<string>('{original}');
  readonly chars = input<string>('upperCase');
  readonly duration = input<number>(2);
  readonly delay = input<number>(0);
  readonly revealDelay = input<number>(0);
  readonly speed = input<number>(1);
  readonly delimiter = input<string>('');

  private readonly el = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.to(this.el.nativeElement, {
        duration: this.duration(),
        delay: this.delay(),
        scrambleText: {
          tweenLength: false,
          text: this.text(),
          chars: this.chars(),
          revealDelay: this.revealDelay(),
          speed: this.speed(),
          delimiter: this.delimiter(),
        }
      });
    }
  }
}