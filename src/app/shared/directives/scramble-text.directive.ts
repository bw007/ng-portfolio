import { isPlatformBrowser } from "@angular/common";
import { AfterViewInit, Directive, ElementRef, inject, PLATFORM_ID } from "@angular/core";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin) 

@Directive({
  selector: '[scrambleText]',
})
export class ScrambleTextDirective implements AfterViewInit {
  readonly el = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.to(this.el.nativeElement, {
        scrambleText: {
          rightToLeft: true,
          text: this.el.nativeElement.dataset.text,
          chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
          speed: 0.3,
          revealDelay: 0.5
        },
      });
    }
  }
  
}