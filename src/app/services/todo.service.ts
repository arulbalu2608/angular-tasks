import { Injectable } from '@angular/core';
import { Todo } from '../shared/interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  content: string = '';

  todoList: Todo[] = []
  editId: string = ''

  addContent = (): void => {
    this.todoList = [...this.todoList, {
      id: this.editId !== '' ? this.editId : String(new Date()),
      content: this.content
    }]
    this.content = ''
    this.editId = ''
  }

  editContent = (id: string): void => {
    let editTodo = this.todoList.find((data: any) => data.id === id)
    if (editTodo) {
      this.editId = editTodo.id
      this.content = editTodo.content
      this.deleteContent(id)
    }
  }

  deleteContent = (id: string): void => {
    this.todoList = this.todoList.filter((data: any) => data.id !== id)
  }

}
