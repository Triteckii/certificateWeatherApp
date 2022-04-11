import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonType, BUTTON_TYPES_ENUM } from '@enum//button-type.enum';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  form!: FormGroup;
  submit: ButtonType;

  @Output() addZipCode: EventEmitter<string> = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
    this.submit = BUTTON_TYPES_ENUM.SUBMIT;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      zipCode: [
        null,
        {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(5),
          ],
        },
      ],
    });
  }

  onSubmit(): void {
    this.addZipCode.emit(this.form.value.zipCode)
  }
}
