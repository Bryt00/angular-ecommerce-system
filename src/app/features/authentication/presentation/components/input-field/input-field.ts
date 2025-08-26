import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-field',
  imports: [],
  templateUrl: './input-field.html',
  styleUrl: './input-field.css'
})
export class InputField {
@Input() label:string;
@Input() placeholder:string;
}
