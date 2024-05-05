import { useCallback, useEffect, useMemo, useState } from 'react';

const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>(JSON.parse(localStorage.getItem('todos') || '[]'));
  const [newTodo, setNewTodo] = useState(false);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const handleAddTodo = useCallback(
    (task: string) => {
      setTodos([{ id: Date.now(), task }, ...todos]);
    },
    [todos]
  );

  const handleDeleteTodo = useCallback(
    (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const handleEditTodo = useCallback(
    (id: number, newTask: string) => {
      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, task: newTask } : todo)));
    },
    [todos]
  );

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => todo.task.toLowerCase().includes(searchText.toLowerCase()));
  }, [todos, searchText]);
  return { setSearchText, searchText, handleAddTodo, newTodo, filteredTodos, setNewTodo, handleDeleteTodo, handleEditTodo };
};

export default useTodo;
