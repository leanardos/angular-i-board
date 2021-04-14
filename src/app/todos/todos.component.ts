import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

    todos: Todo[];

    constructor() { }

    ngOnInit(): void
    {
        this.todos = new Array<Todo>();
    }

    onAddClicked()
    {
        this.todos.push(new Todo('Do 15 min meditaion', false));
    }
}
