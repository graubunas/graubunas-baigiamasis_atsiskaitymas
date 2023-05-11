import { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '../../atoms/Pagination';
import DeleteButton from '../../molecules/DeleteButton';
import EditButton from '../../molecules/EditButton';
import {
  StyledUserInfo,
  StyledHeading,
  StyledListContainer,
  StyledButtonContainer,
} from './styles';

const UserList = ({ usersPerPage = 10 }) => {
  const [users, setUsers] = useState([]);
  const [usersData, setUsersData] = useState(users);
  const [displayUsers, setDisplayUsers] = useState(1);

  useEffect(() => {
    getUsers(users);
  }, [users]);

  const getUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/users`);
      setUsers(response.data);
    } catch (error) {
      console.log('Error getting users', error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/users/${userId}`
      );

      if (response.status === 200) {
        console.log(`User deleted: ${userId}`, response.data);
      }
      getUsers();
    } catch (error) {
      console.log('Error deleting user: ', error);
    }
  };

  // Pagination
  useEffect(() => {
    setUsersData(users);
  }, [users]);

  const lastUser = displayUsers * usersPerPage;
  const firstUser = lastUser - usersPerPage;
  const usersOnPage = usersData.slice(firstUser, lastUser);
  // Pagination

  return (
    <div>
      <StyledHeading>Event Nr. 1 (2023-05-11) Participants</StyledHeading>
      <Pagination
        usersData={usersData}
        usersPerPage={usersPerPage}
        setCurrentPage={setDisplayUsers}
      />
      <StyledListContainer>
        {usersOnPage.map((x, i) => (
          <StyledUserInfo key={x._id}>
            <StyledButtonContainer>
              <DeleteButton userId={x._id} handleDelete={handleDelete} />
              <EditButton userId={x._id} />
              {/* <Button text='Edit' color='info' userId={x._id} /> */}
            </StyledButtonContainer>
            <div>
              {firstUser + i + 1}. {x.name} {x.lastName}
            </div>
            <div>{x.email}</div>
            <div>{x.age}</div>
          </StyledUserInfo>
        ))}
      </StyledListContainer>
    </div>
  );
};

export default UserList;
