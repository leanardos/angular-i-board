import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Todo } from '../models/todo';
import { TodoDialogComponent } from './todo-dialog/todo-dialog.component';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

    todos: Todo[];
    newTodo: Todo;

    constructor(private dialog: MatDialog) { }

    ngOnInit(): void
    {
        this.todos = new Array<Todo>();
    }

    openDialog()
    {
        const dialogRef = this.dialog.open(TodoDialogComponent, {
            width: '250px',
            data: {
                text: this.newTodo?.text
            }
        });

        dialogRef.afterClosed()
            .subscribe(data =>
            {
                if (data)
                {
                    this.todos.push(new Todo(data.text, false));
                }
            });    
    }
}
