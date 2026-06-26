import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  readonly appHighlight = input.required<string>();
  readonly searchTerm = input.required<string>();

  private readonly el = inject(ElementRef<HTMLElement>);

  constructor() {
    effect(() => {
      const text = this.appHighlight();
      const query = this.searchTerm().trim();
      const el = this.el.nativeElement;

      if (!query) {
        el.textContent = text;
        return;
      }

      const regex = new RegExp(`(${query.replace(/[+()]/g, '\\$&')})`, 'gi');
      el.innerHTML = text.replace(regex, '<mark>$1</mark>');
    });
  }
}
