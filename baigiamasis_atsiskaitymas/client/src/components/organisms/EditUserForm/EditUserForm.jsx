import { useState } from 'react';
import EditForm from '../../molecules/EditForm';
import axios from 'axios';

const EditUserForm = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [registration, setRegistration] = useState({
    name: '',
    lastName: '',
    email: '',
    age: '',
  });

  const inputs1 = [
    {
      type: 'text',
      label: 'Name',
      placeholder: 'Enter your name...',
      value: registration.name,
      setValue: (value) =>
        setRegistration((prev) => ({ ...prev, name: value })),
      required: true,
      errorMessage: 'Required',
    },
    {
      type: 'text',
      label: 'Last name',
      placeholder: 'Enter your last name...',
      value: registration.lastName,
      setValue: (value) =>
        setRegistration((prev) => ({ ...prev, lastName: value })),
      required: false,
      errorMessage: 'Required',
    },
    {
      type: 'email',
      label: 'Email',
      placeholder: 'Enter your email...',
      value: registration.email,
      setValue: (value) =>
        setRegistration((prev) => ({ ...prev, email: value })),
      required: true,
      errorMessage: 'Required',
    },
    {
      type: 'number',
      label: 'Age',
      placeholder: 'Enter your age...',
      value: registration.age,
      setValue: (value) => setRegistration((prev) => ({ ...prev, age: value })),
      required: true,
      errorMessage: 'Required',
    },
  ];

  const handleEdit = async (userId) => {
    // 1. Sending data to API
    try {
      const response = await axios.put(
        `http://localhost:5000/users/${userId}`,
        {
          name: registration.name,
          lastName: registration.lastName,
          email: registration.email,
          age: registration.age,
        }
      );
      console.log(response);
      console.log('submited');
    } catch (error) {
      console.log(error);
    }

    // 2. If request was successfull, reset form
    setSuccessMessage('User updated successfully!');
    setTimeout(() => {
      setSuccessMessage('');
      setRegistration({ name: '', lastName: '', email: '', age: '' });
    }, 2000);
  };

  if (successMessage) {
    return <p>{successMessage}</p>;
  }

  return <EditForm inputs1={inputs1} handleEdit={handleEdit} />;
};

export default EditUserForm;
