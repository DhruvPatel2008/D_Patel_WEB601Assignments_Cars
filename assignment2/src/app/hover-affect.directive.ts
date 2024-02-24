import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
  standalone: true
})
export class HoverAffectDirective {

  @Input() effect: string = "";

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    // Apply smooth transition for all changes
    this.el.nativeElement.style.transition = 'all 0.3s ease';

    this.el.nativeElement.style.color = 'white'; 
    this.el.nativeElement.style.textShadow = '1px 1px #888888'; 
    if (this.effect === 'underline') {
      this.el.nativeElement.style.textDecoration = 'underline';
      this.el.nativeElement.style.fontSize = '1.1em'; 
    } else {
      this.el.nativeElement.style.fontWeight = '800';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.textDecoration = 'none';
    this.el.nativeElement.style.fontWeight = '400';
    this.el.nativeElement.style.color = 'white'; 
    this.el.nativeElement.style.textShadow = 'none'; 
    this.el.nativeElement.style.fontSize = '1em'; 
  }
}
