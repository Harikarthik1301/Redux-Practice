import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header'
import Auth from  "./components/Auth"
import { useSelector } from 'react-redux';
import UserProfile from "./components/UserProfile";


function App() {

  const isauth = useSelector(state => state.Auth.isAuthenticated)
  return (
    <Fragment>
      <Header />
      {!isauth && <Auth />}
      {isauth && <UserProfile/>}
      {isauth && <Counter />}     
    </Fragment> 
  );
}

export default App;
