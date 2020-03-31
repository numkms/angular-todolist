export class TodoModel {
    id: number;
    title: string;
    description: string;
    status: boolean;

    constructor(id: number, title: string, description: string, status: boolean = false) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
    }
}

export class TodoCategoryModel {
    id: number;
    title: string;
    todos: TodoModel[];

    constructor(id: number, title: string, todos: TodoModel[]) {
        this.id = id;
        this.title = title;
        this.todos = todos;
    }
}
