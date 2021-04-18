import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
  styleUrls: ['./todo-dialog.component.scss']
})
export class TodoDialogComponent implements OnInit {

    todo: Todo;

    constructor(private dialogRef: MatDialogRef<TodoDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Todo)
    {
        this.todo = data;
    }

    ngOnInit(): void
    {
    }

    save()
    {
        this.dialogRef.close(this.todo);
    }

    close()
    {
        this.dialogRef.close();
    }
}
