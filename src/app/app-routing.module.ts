import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home' , pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'todo', component: TodoListComponent},
  { path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }