import { ContainerComp } from 'components/ContainerComp/ContainerComp';
import { UserCard } from 'components/UserCard/UserCard';
import { useEffect, useState } from 'react';
import { getAllUsers,} from 'service/Api';
import { UserBlock, UserBtn, UserTitle, UserWraper } from './Users.styled';

export const Users = () => {
  const [usersList, setUsersList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getAllUsers(page).then(response => {
      setUsersList(prevUsers => [...prevUsers, ...response.users]);
      setTotalPages(response.total_pages);
    });
  }, [page]);

  const handleClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <ContainerComp>
      <UserWraper id="usersBlock">
        <UserTitle>Working with GET request</UserTitle>
        <UserBlock>
          {usersList.map(item => (
            <UserCard user={item} key={item.id} />
          ))}
        </UserBlock>
        {page < totalPages && (
          <UserBtn type="button" onClick={handleClick}>
            Load more
          </UserBtn>
        )}
      </UserWraper>
    </ContainerComp>
  );
};
