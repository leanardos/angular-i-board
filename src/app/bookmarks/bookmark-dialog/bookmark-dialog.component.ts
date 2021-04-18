import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Bookmark } from 'src/app/models/bookmark';

@Component({
    selector: 'app-bookmark-dialog',
    templateUrl: './bookmark-dialog.component.html',
    styleUrls: ['./bookmark-dialog.component.scss']
})
export class BookmarkDialogComponent implements OnInit {

    bookmark: Bookmark;

    constructor(private dialogRef: MatDialogRef<BookmarkDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Bookmark)
    {
        this.bookmark = data;
    }

    ngOnInit()
    {
    }

    save()
    {
        this.dialogRef.close(this.bookmark);
    }

    close()
    {
        this.dialogRef.close();
    }
}
