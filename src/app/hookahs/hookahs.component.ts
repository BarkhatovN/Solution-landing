import { ChangeDetectionStrategy, Component } from '@angular/core';

interface PricelistItem {
  name: string;
  price: string;
}

@Component({
  selector: 'solution-hookahs',
  templateUrl: './hookahs.component.html',
  styleUrls: ['./hookahs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HookahsComponent {
  hookahs: PricelistItem[] = [
    {
      name: 'HOOKAHS.ITEM3',
      price: '40 gel',
    },
    {
      name: 'HOOKAHS.ITEM4',
      price: '50 gel',
    },
    {
      name: 'HOOKAHS.ITEM1',
      price: '60 gel',
    },
    {
      name: 'HOOKAHS.ITEM2',
      price: '60 gel',
    },
  ];
}
