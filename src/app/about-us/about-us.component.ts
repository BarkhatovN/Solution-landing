import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'solution-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsComponent {
  imageUrls: string[] = [
    'assets/images/about-us/about1.png',
    'assets/images/about-us/about2.png',
    'assets/images/about-us/about3.png',
    'assets/images/about-us/about4.png',
    'assets/images/about-us/about5.png',
    'assets/images/about-us/about6.png',
  ];
}
