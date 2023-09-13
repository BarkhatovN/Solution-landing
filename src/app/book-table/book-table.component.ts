import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject, finalize, BehaviorSubject } from "rxjs";
import { BookTableService } from './book-table.service';

interface FormType {
  name: FormControl<string>;
  phone: FormControl<string>;
}

export interface ReserveData {
  name: string;
  phone: string;
}

@Component({
  selector: 'solution-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookTableComponent {
  form = new FormGroup<FormType>({
    // @ts-ignore
    name: new FormControl('', Validators.required),
    // @ts-ignore
    phone: new FormControl('', [Validators.required]),
  });

  requestSentSubject = new BehaviorSubject<boolean>(false);

  loadingSubject = new Subject<boolean>();

  constructor(private readonly bookTableService: BookTableService) {}

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.loadingSubject.next(true);

    const raw = this.form.getRawValue();
    this.bookTableService.sendReserveTableRequest({ ...raw, phone: '+995' + raw.phone })
      .pipe(finalize(() => this.loadingSubject.next(false)))
      .subscribe(() => this.requestSentSubject.next(true));
  }
}
