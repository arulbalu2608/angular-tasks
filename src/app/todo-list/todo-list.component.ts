import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {

  constructor(public todoService: TodoService) {
  }

  addContent = (): void => {
    this.todoService.addContent()
  }

  editContent = (id: string): void => {
    this.todoService.editContent(id)
  }

  deleteContent = (id: string): void => {
    this.todoService.deleteContent(id)
  }

}
