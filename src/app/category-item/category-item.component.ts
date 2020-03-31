import { Component, OnInit, Input } from '@angular/core';
import {TodoCategoryModel, TodoModel} from '../../models/Todo';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  @Input() category: TodoCategoryModel;

  newTodoTitle: string;
  newTodoDescription: string;
  isNewTodoAddProcessing = false;

  constructor() { }

  ngOnInit() {
  }

  createTodo() {
    if (this.newTodoTitle) {
      const todo = new TodoModel(-1, this.newTodoTitle, this.newTodoDescription);
      this.category.todos.push(todo);
      this.newTodoTitle = null;
      this.newTodoDescription = null;
      this.isNewTodoAddProcessing = false;
    }
  }

}
