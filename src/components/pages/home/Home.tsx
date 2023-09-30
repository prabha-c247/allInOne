import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Table, Button, Container } from 'react-bootstrap';
//i18n language detector
import { Trans, useTranslation } from 'react-i18next';
//reducer
import { removeUser, getAllUsers, User } from '../../../reducer/reducer';
//store
import { RootState } from '../../../store/store';
//pageRoutes
import { EDIT_USER } from '../../../common/helpers/PageRoutes';


const Home: React.FC = () => {
  const {t} = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Data = useSelector((state: RootState) => state.users.allUsers);
  console.log(Data);

  useEffect(() => {
    dispatch(getAllUsers() as never); 

  }, [dispatch]);

  const handleDelete = async (userId: number) => {
    dispatch(removeUser(userId));
  };


  return (
    <>      
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>UserName</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((user: User, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                  <Button variant="info" onClick={() => navigate(`${EDIT_USER}/${user.id}`)}>
                    {t('editBtn')}
                  </Button>
                </td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(user.id)} data-testid="input-id">
                    <Trans i18nKey='delBtn'>Delete</Trans>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Home;
