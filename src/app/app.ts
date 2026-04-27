import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, PLATFORM_ID, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <div id="vanta-bg" class="fixed top-0 left-0 w-full h-full z-0"></div>
    <div class="relative z-10">
      <router-outlet />
    </div>
  `
})
export class App implements AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly wrapperRef = viewChild<ElementRef<HTMLDivElement>>('wrapper');
  private vanta: any;
  
  ngAfterViewInit(): void {
  if (isPlatformBrowser(this.platformId)) {
    this.loadScripts().then(() => {
      const el = document.getElementById('vanta-bg');
      if (!el) return;
      
      this.vanta = (window as any)['VANTA'].DOTS({
        el: el,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xff2740,
        showLines: false,
        backgroundColor: 0x0d0d0d,
      });
    });
  }
}

  private loadScripts(): Promise<void> {
    return new Promise((resolve) => {
      if ((window as any)['THREE']) {
        resolve();
        return;
      }

      const three = document.createElement('script');
      three.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
      three.onload = () => {
        const vanta = document.createElement('script');
        vanta.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js';
        vanta.onload = () => resolve();
        document.body.appendChild(vanta);
      };
      document.body.appendChild(three);
    });
  }

  ngOnDestroy(): void {
    this.vanta?.destroy();
  }
}
