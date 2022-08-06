import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private elementRef: ElementRef) {
    //console.log('directiva');
    //this.elementRef.nativeElement.style.backgroundColor = 'yelow';
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    
  }

  @HostListener('mouseenter') mouseEntra(){
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave') mouseSale(){
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

}
