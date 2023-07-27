import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { map } from 'rxjs';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'solution-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {
  @Input() imageUrls: string[] = [];

  @ViewChild('swiper') swiperRef?: ElementRef<{ swiper: Swiper }>;

  readonly breakpoints: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  } = {
    576: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  };

  next() {
    this.swiperRef?.nativeElement.swiper.slideNext();
  }

  prev() {
    this.swiperRef?.nativeElement.swiper.slidePrev();
  }
}
