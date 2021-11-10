import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { useDispatch, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

const initialState = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
