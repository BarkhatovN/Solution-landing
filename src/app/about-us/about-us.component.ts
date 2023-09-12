import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'solution-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsComponent {
  imageUrls: string[] = [
    'assets/images/about-us/about1.webp',
    'assets/images/about-us/about2.webp',
    'assets/images/about-us/about3.webp',
    'assets/images/about-us/about4.webp',
    'assets/images/about-us/about5.webp',
    'assets/images/about-us/about6.webp',
    'assets/images/about-us/about7.webp',
    'assets/images/about-us/about8.webp',
    'assets/images/about-us/about9.webp',
    'assets/images/about-us/about10.webp',
    'assets/images/about-us/about11.webp',
    'assets/images/about-us/about12.webp',
    'assets/images/about-us/about13.webp',
  ];
}
