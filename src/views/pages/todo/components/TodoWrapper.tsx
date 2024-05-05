import { memo } from 'react';
import TodoItem from './TodoItem';
import EmptyList from '../../../../assets/emptyList.svg';

const TodoWrapper: React.FC<TodoWrapperProps> = memo(({ filteredTodos, handleDeleteTodo, handleEditTodo }) => {
  return (
    <div className='w-auto  lg:w-[500px] h-[450px] mx-auto overflow-y-auto'>
      {filteredTodos.length === 0 ? (
        <div className='bg-white rounded-xl h-[450px] flex items-center justify-center '>
          {' '}
          <img src={EmptyList} className='w-[200px]' />
        </div>
      ) : (
        filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} onDelete={() => handleDeleteTodo(todo.id)} onEdit={(newTask) => handleEditTodo(todo.id, newTask)} />)
      )}
    </div>
  );
});

export default TodoWrapper;
