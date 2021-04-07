import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookmarkItemComponent } from './bookmarks/bookmark-item/bookmark-item.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { NotesComponent } from './notes/notes.component';
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
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
