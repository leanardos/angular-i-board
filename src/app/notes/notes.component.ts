import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note-model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notesList: Note[];

  constructor() { }

  ngOnInit(): void {
  }

  
  onAddClicked($event)
  {
    console.log($event);
  }

}
