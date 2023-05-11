import './App.css';
import SignUpForm from '../src/components/organisms/SignUpForm';
import UserList from './components/organisms/UserList';

function App() {
  return (
    <>
      <div className='app-container'>
        <SignUpForm />
        <UserList />
      </div>
    </>
  );
}

export default App;
