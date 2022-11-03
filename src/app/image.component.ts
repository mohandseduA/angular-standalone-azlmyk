import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-image-component',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `<img src="{{url}}">`,
  styles: [
    `
    img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      object-fit: cover;
    }
  `,
  ],
})
export class ImageComponent {
  @Input() url: string | undefined;
}
