import { Component,Input,Output,EventEmitter,Injectable } from '@angular/core';


@Component({
  selector: 'app-text-btn',
  imports: [],
  templateUrl: './text-btn.html',
  styleUrl: './text-btn.css'
})
@Injectable()
export class TextBtn {
  @Input() label: string;
  @Output() onClick = new EventEmitter<any>();

  onClickButton(event){
    this.onClick.emit(event);
  }

}
