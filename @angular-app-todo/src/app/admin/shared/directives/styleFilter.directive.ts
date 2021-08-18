import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: '[filterStyle]'
})
export class StyleFilter {

  constructor(private el: ElementRef, private r: Renderer2) {
    console.log(el);
  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    this.r.setStyle(this.el.nativeElement, 'background', '#4257b2');
  }

  // @HostListener('focus', ['$event.target']) onFocus(event: Event) {
  //   this.r.setStyle(this.el.nativeElement, 'background', '#28a745');
  //       console.log('focus');
  // }

  @HostListener('focusout', ['$event.target']) onFocusOut(event: Event) {
    this.r.setStyle(this.el.nativeElement, 'background', null);
    // console.log(this.r.setStyle)
    // console.log('focusout', this.el.nativeElement);
  }
}