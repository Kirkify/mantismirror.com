import {Component, inject} from '@angular/core';
import {FormControl, NonNullableFormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  private _http = inject(HttpClient);
  private _fb = inject(NonNullableFormBuilder);
  formGroup = this._fb.group({
    email: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email
      ]
    }),
    name: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
      ]
    }),
    message: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
      ]
    }),
  })

  submit() {

    if (this.formGroup.invalid) {
      return;
    }

    this._http.post('https://mailthis.to/paolomessina613@gmail.com', {
      email: 'test@test.co',
      message: 'Test Message',
      _subject: 'Testing Service',
      _after: 'https://mantismirror.com/contact-us',
      _honeypot: '',
      _confirmation: 'Your message was sent successfully.'
    }, { responseType: 'text' }).subscribe(res => {
      location.href = 'https://mailthis.to/confirm'
    })
  }
}
