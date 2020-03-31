import { Component, OnInit, Input } from '@angular/core';
import {TodoModel} from '../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


  @Input() todo: TodoModel;

  constructor() { }

  ngOnInit() {
  }

}
