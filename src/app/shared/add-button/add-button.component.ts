import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-add-button',
    templateUrl: './add-button.component.html',
    styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent implements OnInit {

    @Output() addButtonClickEmitter = new EventEmitter();

    constructor() { }

    ngOnInit(): void
    {
    }

    onAddButtonClick()
    {
        this.addButtonClickEmitter.emit();
    }
}
