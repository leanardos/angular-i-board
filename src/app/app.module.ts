import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookmarkItemComponent } from './bookmarks/bookmark-item/bookmark-item.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { NoteItemComponent } from './notes/note-item/note-item.component';
import { NotesComponent } from './notes/notes.component';
import { AddButtonComponent } from './shared/add-button/add-button.component';
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
    AddButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
