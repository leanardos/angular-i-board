import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent implements OnInit {

    @Output() onClick = new EventEmitter();

    constructor() { }

    ngOnInit(): void
    {
    }

    onAddButtonClick()
    {
        this.onClick.emit();
    }
}