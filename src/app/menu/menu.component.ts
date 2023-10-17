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
    'assets/images/menu/Instagram story - 3.webp',
    'assets/images/menu/Instagram story - 4.webp',
    'assets/images/menu/Instagram story - 5.webp',
    'assets/images/menu/Instagram story - 6.webp',
    'assets/images/menu/Instagram story - 7.webp',
    'assets/images/menu/Instagram story - 8.webp',
    'assets/images/menu/Instagram story - 9.webp',
    'assets/images/menu/Instagram story - 10.webp',
  ];

  breakpoints: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  } = {
      0: { slidesPerView: 1 },
      900: { slidesPerView: 2 },
      1200: { slidesPerView: 3 },
    };
}
