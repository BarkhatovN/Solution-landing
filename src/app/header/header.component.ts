import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Lang } from '../share/models/lang';

@Component({
  selector: 'solution-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly Lang = Lang;

  langButtonText: Lang;

  constructor(private readonly translateService: TranslateService) {
    this.langButtonText =
      (this.translateService.currentLang as Lang) === Lang.EN
        ? Lang.RU
        : Lang.EN;
  }

  toggleLang(): void {
    this.translateService.use(this.langButtonText);
    this.langButtonText = this.langButtonText === Lang.EN ? Lang.RU : Lang.EN;
  }
}
