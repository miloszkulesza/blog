import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAddColor]',
  standalone: false
})
export class AddColor {

  constructor(private elementRef: ElementRef) { 
    elementRef.nativeElement.style.color = "#0000ff";
  }

}
