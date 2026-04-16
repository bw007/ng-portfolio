import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
})
export class TerminalComponent implements AfterViewInit, OnDestroy {
  @ViewChild('codeElement') codeElement!: ElementRef<HTMLElement>;
  @ViewChild('cursor') cursor!: ElementRef<HTMLElement>;

  private ctx!: gsap.Context;

  private codeSnippet = `{
  "name": "Frontend Architect",
  "skills": [
    "Angular",
    "TypeScript",
    "RxJS",
    "Tailwind CSS",
    "GSAP"
  ],
  "passion": "Building scalable, beautiful UIs"
}`;

  ngAfterViewInit() {
    this.ctx = gsap.context(() => {
      // Blinking cursor
      gsap.to(this.cursor.nativeElement, {
        opacity: 1,
        ease: 'steps(1)',
        repeat: -1,
        duration: 0.8
      });

      // Typing effect
      const textObj = { length: 0 };
      gsap.to(textObj, {
        length: this.codeSnippet.length,
        duration: 3,
        ease: 'none',
        delay: 0.5,
        onUpdate: () => {
          this.codeElement.nativeElement.textContent = this.codeSnippet.substring(0, Math.floor(textObj.length));
        }
      });
    });
  }

  ngOnDestroy() {
    if (this.ctx) {
      this.ctx.revert();
    }
  }
}
