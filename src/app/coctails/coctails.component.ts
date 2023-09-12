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
    'assets/images/coctails/coctail1.webp',
    'assets/images/coctails/coctail2.webp',
    'assets/images/coctails/coctail3.webp',
    'assets/images/coctails/coctail4.webp',
    'assets/images/coctails/coctail5.webp',
    'assets/images/coctails/coctail6.webp',
    'assets/images/coctails/coctail7.webp',
    'assets/images/coctails/coctail8.webp',
    'assets/images/coctails/coctail9.webp',
    'assets/images/coctails/coctail10.webp',
    'assets/images/coctails/coctail11.webp',
    'assets/images/coctails/coctail12.webp',
    'assets/images/coctails/coctail13.webp',
    'assets/images/coctails/coctail14.webp',
    'assets/images/coctails/coctail15.webp',
    'assets/images/coctails/coctail16.webp',
    'assets/images/coctails/coctail17.webp',
    'assets/images/coctails/coctail18.webp',
    'assets/images/coctails/coctail19.webp',
    'assets/images/coctails/coctail20.webp',
    'assets/images/coctails/coctail21.webp',
    'assets/images/coctails/coctail22.webp',
    'assets/images/coctails/coctail23.webp',
    'assets/images/coctails/coctail24.webp',
    'assets/images/coctails/coctail25.webp',
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
