interface Todo {
  id: number;
  task: string;
}

type CommonProps = {
  handleShow: React.Dispatch<React.SetStateAction<boolean>>;
};

type TodoFormProps =
  | (CommonProps & {
      task: string;
      handleEdit: (newTask: string) => void;
    })
  | (CommonProps & {
      handleAdd: (text: string) => void;
    });

interface TodoItemProps {
  todo: Todo;
  onDelete: () => void;
  onEdit: (newTask: string) => void;
}

interface TodoSearchInputProps {
  searchText: string;
  handelSearch: (search: string) => void;
}

interface TodoWrapperProps {
  filteredTodos: Todo[];
  handleDeleteTodo: (id: number) => void;
  handleEditTodo: (id: number, newTask: string) => void;
}
