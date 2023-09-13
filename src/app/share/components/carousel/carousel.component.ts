import {
  AfterViewInit,
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
export class CarouselComponent implements AfterViewInit {
  @Input() imageUrls: string[] = [];

  @Input() breakpoints: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  } = {
      0: { slidesPerView: 1 },
        576: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
    };

  @ViewChild('swiper') swiperRef?: ElementRef<{ swiper: Swiper, initialize: () => void }>;

  ngAfterViewInit(): void {
    const swiperParams: SwiperOptions = {
      lazyPreloadPrevNext: 1,
      spaceBetween: 28
    };

    Object.assign(this.swiperRef!.nativeElement, swiperParams);

    this.swiperRef!.nativeElement.initialize();
  }

  next() {
    this.swiperRef?.nativeElement.swiper.slideNext();
  }

  prev() {
    this.swiperRef?.nativeElement.swiper.slidePrev();
  }
}
