import {Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';
import { HttpService } from '../services/app.htttp.service';


@Directive({
  selector: '[checkProductUniqueId]'
})
export class ProductUniqueCheckDirective {
   constructor(private ele: ElementRef, private renderer: Renderer2, private httpService: HttpService){
   }

   // define input property for the directive that will accept data
   // from HTML element using Property Binding
   // IMP** --> This property must map with directive selector
   // e.g. <div [setColor]="<value>"></div>

   @Input('checkProductUniqueId') checkProductUniqueId: number;

   private checkProductid(id: number): void {
    this.httpService.getById(id).subscribe((data) => {
      this.renderer.setStyle(this.ele.nativeElement,
        'borderColor',
        'initial');
   }, (error) => {
    this.renderer.setStyle(this.ele.nativeElement,
      'borderColor',
      'Red');
     console.log(`error in response ${error}`);
   });
   }

   // host events inside the directive those will cause the
   // directive to be executed / activated and its logic to execute

   @HostListener('blur')
   onmouseenter(): void {
     this.checkProductid(this.checkProductUniqueId);
   }


}
