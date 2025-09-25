import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class Footer implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    const footer = this.el.nativeElement.querySelector('#footer-random');
    const cantidad = 33;

    for (let i = 0; i < cantidad; i++) {
      const icono = this.renderer.createElement('i');
      this.renderer.addClass(icono, 'fa-solid');
      this.renderer.addClass(icono, 'fa-wine-bottle');
      this.renderer.addClass(icono, 'botella');

      icono.style.left = Math.random() * 100 + '%';
      const size = 15 + Math.random() * 30;
      icono.style.fontSize = size + 'px';

      this.renderer.appendChild(footer, icono);
    }
  }
}
