import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { YaReadyEvent } from 'angular8-yandex-maps';

@Component({
  selector: 'solution-yandex-map',
  templateUrl: './yandex-map.component.html',
  styleUrls: ['./yandex-map.component.scss']
})
export class YandexMapComponent {

  constructor(private readonly clipboard: Clipboard) {}

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
    // event.target.behaviors.disable('scrollZoom');
    // event.target.behaviors.disable('drag');
    // event.target.behaviors.disable('dblClickZoom');
    // event.target.behaviors.disable('multiTouch');
    // event.target.behaviors.disable('rightMouseButtonMagnifier');
    // event.target.behaviors.disable('leftMouseButtonMagnifier');
  }

  copyAddress(str: string) {
    this.clipboard.copy(str)
  }
}
