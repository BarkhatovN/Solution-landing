import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import {
  LangChangeEvent,
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { register as swiperRegister } from 'swiper/element/bundle';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Lang } from './share/models/lang';
import { BrandTitleComponent } from './brand-title/brand-title.component';
import { CarouselComponent } from './share/components/carousel/carousel.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CoctailsComponent } from './coctails/coctails.component';
import { HookahsComponent } from './hookahs/hookahs.component';
import { MenuComponent } from './menu/menu.component';
import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';
import { YandexMapComponent } from './yandex-map/yandex-map.component';
import { ReplaySubject, map, startWith } from 'rxjs';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const mapConfigSubject = new ReplaySubject<YaConfig>(1);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BrandTitleComponent,
    CarouselComponent,
    AboutUsComponent,
    CoctailsComponent,
    HookahsComponent,
    MenuComponent,
    YandexMapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    AngularYandexMapsModule.forRoot(mapConfigSubject)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(translate: TranslateService) {
    translate.setDefaultLang(Lang.EN);

    const storedLang = localStorage.getItem('lang');
    const userLang = storedLang
      ? storedLang
      : navigator.language === 'ru-RU'
      ? Lang.RU
      : Lang.EN;

    translate.use(userLang);

    swiperRegister();

    translate.onLangChange.pipe(
      map((event: LangChangeEvent) => event.lang),
      startWith(userLang)
    ).subscribe((language) => {
      mapConfigSubject.next({
        apikey: '33d8a0b6-7058-4ce7-b658-43533ce76ec0',
        lang: language === Lang.RU ? 'ru_RU' : 'en_US',
      });
    });
  }
}
