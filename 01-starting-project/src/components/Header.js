import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { AuthActions } from '../store';

const Header = () => {

  const isauth = useSelector(state => state.Auth.isAuthenticated) ;
  const dispatch = useDispatch();

  const logoutHandler = (event) =>{
    event.preventDefault();
    dispatch(AuthActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
   { isauth &&  <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
