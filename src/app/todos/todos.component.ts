import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Todo } from '../models/todo';
import { AddDialogComponent } from './../shared/add-dialog/add-dialog.component';
@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

    todos: Todo[];

    constructor(private dialog: MatDialog) { }

    ngOnInit(): void
    {
        this.todos = new Array<Todo>();
    }

    openDialog() {
        const dialogConfig = new MatDialogConfig();
        
        dialogConfig.autoFocus = true;
        dialogConfig.hasBackdrop = true;

        dialogConfig.data = {
            id: 1,
            title: 'Angular For Beginners'
        };
    
        const dialogRef = this.dialog.open(AddDialogComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(
            data => console.log("Dialog output:", data)
        );    
    }

    onAddClicked()
    {
        this.todos.push(new Todo('Do 15 min meditaion', false));
    }
}
