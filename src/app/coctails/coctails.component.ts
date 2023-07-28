import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'solution-coctails',
  templateUrl: './coctails.component.html',
  styleUrls: ['./coctails.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoctailsComponent {
  imageUrls: string[] = [
    'assets/images/coctails/coctail1.png',
    'assets/images/coctails/coctail2.png',
    'assets/images/coctails/coctail3.jpg',
    'assets/images/coctails/coctail4.jpg',
    'assets/images/coctails/coctail5.jpg',
    'assets/images/coctails/coctail6.jpg',
    'assets/images/coctails/coctail7.jpg',
  ];

  breakpoints: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  } = {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 3 },
    992: { slidesPerView: 5 },
  };
}
