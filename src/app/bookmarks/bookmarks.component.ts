import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../models/bookmark';
@Component({
    selector: 'app-bookmarks',
    templateUrl: './bookmarks.component.html',
    styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

    bookmarks: Bookmark[];

    constructor() { }

    ngOnInit(): void
    {
        this.bookmarks = new Array<Bookmark>();
    }

    onAddClicked()
    {
        this.bookmarks.push(new Bookmark('google.com', 'Google'));
    }
}
