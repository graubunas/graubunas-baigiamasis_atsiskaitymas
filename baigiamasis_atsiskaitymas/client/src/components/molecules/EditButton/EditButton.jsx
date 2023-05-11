import React from 'react';
import Button from '../../atoms/Button';
import Modal from '../Modal';
import EditUserForm from '../../organisms/EditUserForm';

const EditButton = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button text='Edit' color='info' action={handleOpenModal} />
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <EditUserForm />
        </Modal>
      )}
    </>
  );
};

export default EditButton;
