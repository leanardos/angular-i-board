import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Bookmark } from '../models/bookmark';
import { BookmarkDialogComponent } from './bookmark-dialog/bookmark-dialog.component';
@Component({
    selector: 'app-bookmarks',
    templateUrl: './bookmarks.component.html',
    styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

    bookmarks: Bookmark[];
    newBookmark: Bookmark;
    constructor(private dialog: MatDialog) { }

    ngOnInit(): void
    {
        this.bookmarks = new Array<Bookmark>();
    }

    openDialog()
    {
        const dialogRef = this.dialog.open(BookmarkDialogComponent, {
            width: '250px',
            data: {
                name: this.newBookmark?.name, 
                url: this.newBookmark?.url
            }
          });

        dialogRef.afterClosed()
            .subscribe(data => 
            {
                if (data)
                {
                    this.bookmarks.push(data);
                }
            });    
    }
}
