import { Component, OnInit } from '@angular/core';
import {TodoCategoryModel, TodoModel} from '../../models/Todo';

@Component({
  selector: 'app-category-component',
  templateUrl: './category-component.component.html',
  styleUrls: ['./category-component.component.css']
})
export class CategoryComponentComponent implements OnInit {
  categories: TodoCategoryModel[];

  ngOnInit(): void {
    this.categories = [
      new TodoCategoryModel(1, 'Сделать сегодня', [
        new TodoModel(1, 'Сделать кексы',  'Обязательно добавить сахару'),
        new TodoModel(2, 'Сделать уброку',  'Обязательно помыть кухню'),
      ]),
      new TodoCategoryModel(2, 'Сделать завтра', [
        new TodoModel(3, 'Сделать кексы',  'Обязательно добавить сахару'),
        new TodoModel(4, 'Сделать уброку',  'Обязательно помыть кухню'),
        new TodoModel(5, 'Пойти покурить',  'Обязательно покурить')
      ]),
      new TodoCategoryModel(3, 'Сделать в выходные', [
        new TodoModel(6, 'Сделать кексы',  'Обязательно добавить сахару'),
        new TodoModel(7, 'Сделать уброку',  'Обязательно помыть кухню'),
        new TodoModel(8, 'Сделать кексы',  'Обязательно добавить сахару'),
        new TodoModel(9, 'Сделать уброку',  'Обязательно помыть кухню'),
        new TodoModel(10, 'Сделать кексы',  'Обязательно добавить сахару'),
        new TodoModel(11, 'Сделать уброку',  'Обязательно помыть кухню'),
        new TodoModel(12, 'Сделать кексы',  'Обязательно добавить сахару'),
        new TodoModel(13, 'Сделать уброку',  'Обязательно помыть кухню'),
      ]),
    ];

  }
}
