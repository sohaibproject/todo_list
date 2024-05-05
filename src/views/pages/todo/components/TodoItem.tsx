import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons';

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onEdit }) => {
  const [editing, setEditing] = useState(false);

  return (
    <div className='mb-3'>
      {editing ? (
        <TodoForm task={todo.task} handleEdit={onEdit} handleShow={setEditing} />
      ) : (
        <div className='flex bg-white justify-between p-3 rounded-md'>
          <span>{todo.task}</span>
          <div className='inline-block space-x-4 '>
            <FontAwesomeIcon icon={faPen} className='cursor-pointer text-blue-500' onClick={() => setEditing(true)} />
            <FontAwesomeIcon icon={faTrashCan} className='cursor-pointer text-red-500' onClick={onDelete} />
          </div>
        </div>
      )}
    </div>
  );
};
export default TodoItem;
