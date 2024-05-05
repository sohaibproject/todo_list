import React from 'react';
import { TextInput } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const TodoSearchInput: React.FC<TodoSearchInputProps> = React.memo(({ searchText, handelSearch }) => {
  return (
    <TextInput type='text' className='rounded-lg' placeholder='Search' value={searchText} onChange={(e) => handelSearch(e.target.value)} leftSection={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
  );
});

export default TodoSearchInput;
