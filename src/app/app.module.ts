import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookmarkDialogComponent } from './bookmarks/bookmark-dialog/bookmark-dialog.component';
import { BookmarkItemComponent } from './bookmarks/bookmark-item/bookmark-item.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { NoteItemComponent } from './notes/note-item/note-item.component';
import { NotesComponent } from './notes/notes.component';
import { AddButtonComponent } from './shared/add-button/add-button.component';
import { AddDialogComponent } from './shared/add-dialog/add-dialog.component';
import { TabsComponent } from './tabs/tabs.component';
import { TodoItemComponent } from './todos/todo-item/todo-item.component';
import { TodosComponent } from './todos/todos.component';



@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    BookmarksComponent,
    BookmarkItemComponent,
    TodosComponent,
    NotesComponent,
    TodoItemComponent,
    NoteItemComponent,
    AddButtonComponent,
    AddDialogComponent,
    BookmarkDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    NgScrollbarModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddDialogComponent, BookmarkDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
