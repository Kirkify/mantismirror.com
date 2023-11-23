import { Component, inject, OnInit } from '@angular/core';
import {FormControl, NonNullableFormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
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

  private success = inject(ActivatedRoute).snapshot.queryParams['success'];
  private snackBar = inject(MatSnackBar);

  ngOnInit() {
    if (this.success) {
      this.snackBar.open('Message sent successfully', undefined, { duration: 3000 });
    }
  }
}
