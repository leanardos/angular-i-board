import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Note } from '../models/note-model';

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesComponent implements OnInit {

    notes: Note[];

    constructor() { }

    ngOnInit(): void
    {
        this.notes = new Array<Note>();
    }

    onAddClicked()
    {
        this.notes.push(new Note("asd"))
        console.log(this.notes)
    }

}
