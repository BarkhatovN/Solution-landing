import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'solution-brand-title',
  templateUrl: './brand-title.component.html',
  styleUrls: ['./brand-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandTitleComponent {
  scrollTo(anchorId: string): void {
    document.getElementById(anchorId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
