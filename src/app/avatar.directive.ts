import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAvatar]'
})
export class AvatarDirective {

  @Input() appAvatar: string | null = 'assets/avatars/_default.jpg';
  constructor(private el: ElementRef) {
    this.el.nativeElement.src = this.appAvatar
  }

}
