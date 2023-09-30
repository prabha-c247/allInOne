import configureMockStore  from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import thunk from 'redux-thunk';
// import axiosMock from 'axios-mock-adapter';
// import axios from 'axios';
// import { getAllUsers } from '../../reducer/reducer';

// const initialState ={
//   allUsers:{
//     id: 1,
//     name: prabha,
//     username: prabha_1,
//   }
// };


const mockStore = configureMockStore();
// const store = mockStore(initialState);
// const mockedUsedNavigate = jest.fn();
// jest.mock('react-router-dom', () => ({
//   ...(jest.requireActual('react-router-dom')),
//   useNavigate: () => mockedUsedNavigate,
// }));

// const mockDispatch = jest.fn();
// jest.mock('react-redux', () => ({
//   useSelector: jest.fn(),
//   useDispatch: () => mockDispatch
// }));
// jest.mock('react-i18next', () => ({ 
//   useTranslation: () => {
//     return {
//       t: (str:unknown) => str,
//     };
//   },
// }));

// describe('Async Actions', () => {
//   let axiosMockInstance: axiosMock;
//   let store: MockStoreEnhanced<unknown, {}>;

//   beforeAll(() => {
//     axiosMockInstance = new axiosMock(axios);
//   });

//   beforeEach(() => {
//     store = mockStore({});
//   });

//   afterEach(() => {
//     axiosMockInstance.reset();
//   });

//   it('should fetch all users', async () => {
//     const mockData = [{ id: 1, name: 'User 1' }];
//     axiosMockInstance.onGet('https://jsonplaceholder.typicode.com/users').reply(200, mockData);

//     store.dispatch(getAllUsers());

//     store.getActions();
//   });
// });
