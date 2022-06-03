import { Directive, OnDestroy, OnInit } from "@angular/core";

@Directive({
  selector: '[appFocusBack]'
})
export class FocusBackDirective implements OnInit, OnDestroy{

  private lastFocusElement: Element;

  ngOnInit(): void {
    this.lastFocusElement = document.activeElement;
  }

  ngOnDestroy(): void {
    if(this.lastFocusElement){
      (this.lastFocusElement as HTMLElement).focus();
    }
  }

}
