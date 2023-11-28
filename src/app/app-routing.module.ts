import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicsComponent } from './basics/basics.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FakeProductComponent } from './fake-product/fake-product.component';


const routes: Routes = [
  {
    path: "",
    component: BasicsComponent,
  },
  {
    path: "todo",
    component: TodoListComponent,
  },
  {
    path: "fake-product",
    component: FakeProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingModules = [BasicsComponent, TodoListComponent, FakeProductComponent]
