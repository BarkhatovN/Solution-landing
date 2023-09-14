import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { YaReadyEvent } from 'angular8-yandex-maps';

enum UserAgent {
  DESKTOP,
  IOS,
  ANDROID
}

@Component({
  selector: 'solution-yandex-map',
  templateUrl: './yandex-map.component.html',
  styleUrls: ['./yandex-map.component.scss']
})
export class YandexMapComponent {

  userAgent: UserAgent = this.getMobileOperatingSystem();

  readonly UserAgent = UserAgent;

  constructor(private readonly clipboard: Clipboard) { }

  state: ymaps.IMapState = {
    controls: []
  };

  options: ymaps.IMapOptions = {
    // По правам бесплатного использования копирайты должны быть видны
    // copyrightLogoVisible: false,
    // copyrightProvidersVisible: false,
    // copyrightUaVisible: false,
    suppressMapOpenBlock: true // скрываем блок "Открыть в Я.Картах / Как добраться / Вызвать такси"
  };

  onMapReady(event: YaReadyEvent<ymaps.Map>) {
    event.target.behaviors.disable('scrollZoom');
    event.target.behaviors.disable('drag');
    event.target.behaviors.disable('dblClickZoom');
    event.target.behaviors.disable('multiTouch');
    event.target.behaviors.disable('rightMouseButtonMagnifier');
    event.target.behaviors.disable('leftMouseButtonMagnifier');
  }

  private getMobileOperatingSystem(): UserAgent {
    var userAgent = navigator.userAgent;

    if (!userAgent) {
      return UserAgent.DESKTOP;
    }

    if (/android/i.test(userAgent)) {
      return UserAgent.ANDROID;
    }

    if (/iPad|iPhone|iPod/.test(userAgent)) {
      return UserAgent.IOS;
    }

    return UserAgent.DESKTOP;
  }
}
