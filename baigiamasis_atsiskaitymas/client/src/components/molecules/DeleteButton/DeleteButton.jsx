import React from 'react';
import Button from '../../atoms/Button';

const DeleteButton = ({ userId, handleDelete }) => {
  return (
    <Button
      text='Delete'
      color='info'
      action={() => handleDelete(userId)}
    ></Button>
  );
};

export default DeleteButton;
