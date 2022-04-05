import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  const todo = res.data as ToDo;
  const { id, title, completed } = todo;
  logToDo(id, title, completed);
});

const logToDo = (id: number, title: string, completed: boolean) => {
  console.log(
    `The ToDo with ID: ${id}
          Has title of: ${title}
          Is it completed? ${completed}`
  );
};
