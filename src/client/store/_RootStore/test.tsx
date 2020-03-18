interface Todo {
    title: string;
    description: string;
}
interface Todo2 {
    titlee: string;
    descriptionf: string;
}

/* function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
} */

const todo1: Partial<Todo> & Pick<Todo, "title"> = {
    title: "organize desk",
    description: "clear clutter"
};

/* const todo2 = updateTodo(todo1, {
  description: "throw out trash"
}); */