import NavBar from '../../layout/navBar';
import Welcome from './components/Welcome';
import TodoForm from './components/TodoForm';
import TodoSearchInput from './components/TodoSearchInput';
import TodoWrapper from './components/TodoWrapper';
import useTodo from './hooks/useTodo';

const TodoPage = () => {
  const { setSearchText, searchText, handleAddTodo, newTodo, filteredTodos, setNewTodo, handleDeleteTodo, handleEditTodo } = useTodo();
  return (
    <div className='bg-[#f1f1f1] dark:bg-gray-900 w-full h-screen'>
      <NavBar />
      <Welcome />
      <section className=' bg-[#0563bb] rounded-lg w-auto lg:w-[550px] h-[530px] overflow-y-auto p-3  mx-auto '>
        <div className='flex justify-center gap-4 mb-4 '>
          <TodoSearchInput handelSearch={setSearchText} searchText={searchText} />
          <button className='bg-green-500 text-white rounded-md px-4 py-1' onClick={() => setNewTodo(!newTodo)}>
            New
          </button>
        </div>
        {newTodo && <TodoForm handleAdd={handleAddTodo} handleShow={setNewTodo} />}
        <TodoWrapper filteredTodos={filteredTodos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />
      </section>
    </div>
  );
};

export default TodoPage;
