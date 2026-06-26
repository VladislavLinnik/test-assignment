import { Directive, ElementRef, inject, OnDestroy, OnInit, output } from '@angular/core';

@Directive({
  selector: '[appSentinel]',
})
export class SentinelDirective implements OnInit, OnDestroy {
  readonly reached = output<void>();

  private observer!: IntersectionObserver;
  private readonly el = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) this.reached.emit();
      },
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
