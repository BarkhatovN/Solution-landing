import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'solution-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  imageUrls: string[] = [
    'assets/images/menu/menu1.webp',
    'assets/images/menu/menu2.webp',
    'assets/images/menu/menu3.webp',
    'assets/images/menu/menu4.webp',
  ];

  breakpoints: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  } = {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  };
}
