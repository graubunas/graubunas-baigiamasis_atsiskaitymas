import React from 'react';
import Button from '../Button';
import { StyledContainer } from './styles';

const Pagination = ({ usersData, usersPerPage, setCurrentPage }) => {
  const totalPages = Math.ceil(usersData.length / usersPerPage);

  const getPagination = () => {
    return Array.from({ length: totalPages }, (_, i) => (
      <Button
        key={i + 1}
        action={() => setCurrentPage(i + 1)}
        color='info'
        text={i + 1}
      />
    ));
  };

  return <StyledContainer>{getPagination()}</StyledContainer>;
};

export default Pagination;
