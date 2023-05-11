import { useState } from 'react';
import Form from '../../molecules/Form';
import axios from 'axios';

const RegistrationForm = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [registration, setRegistration] = useState({
    name: '',
    lastName: '',
    email: '',
    age: '',
  });

  const inputs = [
    {
      type: 'text',
      label: 'Name',
      placeholder: 'Enter your name...',
      value: registration.name,
      setValue: (value) =>
        setRegistration((prev) => ({ ...prev, name: value })),
      required: true,
      fromErrorMessage: 'Required',
    },
    {
      type: 'text',
      label: 'Last name',
      placeholder: 'Enter your last name...',
      value: registration.lastName,
      setValue: (value) =>
        setRegistration((prev) => ({ ...prev, lastName: value })),
      required: false,
      fromErrorMessage: 'Required',
    },
    {
      type: 'email',
      label: 'Email',
      placeholder: 'Enter your email...',
      value: registration.email,
      setValue: (value) =>
        setRegistration((prev) => ({ ...prev, email: value })),
      required: true,
      fromErrorMessage: 'Required',
    },
    {
      type: 'number',
      label: 'Age',
      placeholder: 'Enter your age...',
      value: Number(registration.age),
      setValue: (value) => setRegistration((prev) => ({ ...prev, age: value })),
      required: true,
      fromErrorMessage:
        Number(registration.age) < 0 ? 'Age must be more than 0' : 'Required',
    },
  ];

  const handleSubmit = async () => {
    // 1. Sending data to API
    let num = Number(registration.age);
    if (num < 0) {
      setErrorMessage('Age must be more than 0');
      setTimeout(() => {
        setErrorMessage('');
        setRegistration({ name: '', lastName: '', email: '', age: '' });
      }, 2000);
    } else {
      try {
        const response = await axios.post('http://localhost:5000/users', {
          name: registration.name,
          lastName: registration.lastName,
          email: registration.email,
          age: registration.age,
        });

        console.log(response);
        setSuccessMessage('User registrated successfully!');
        setTimeout(() => {
          setSuccessMessage('');
          setRegistration({ name: '', lastName: '', email: '', age: '' });
        }, 2000);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setErrorMessage('This participant is already registered');
          setTimeout(() => {
            setErrorMessage('');
            setRegistration({ name: '', lastName: '', email: '', age: '' });
          }, 2000);
        }
      }
    }
  };

  if (successMessage) {
    return <p>{successMessage}</p>;
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  return <Form inputs={inputs} handleSubmit={handleSubmit} />;
};

export default RegistrationForm;
