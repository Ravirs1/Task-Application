import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  allItems = [];


  constructor() { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.allItems = JSON.parse(localStorage.getItem('tasks')) || [];
  }

  addItem(description) {
    console.log(description)
    if(description.length >= 1) {
    this.allItems.unshift({
      description
    });
    localStorage.setItem('tasks', JSON.stringify(this.allItems));
  }
}

removeItem(index) {
  this.allItems.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(this.allItems));
}

updateItem(item, index) {
  this.allItems[index] = item;
  console.log(this.allItems[index], item)
  localStorage.setItem('tasks', JSON.stringify(this.allItems));
}
}
