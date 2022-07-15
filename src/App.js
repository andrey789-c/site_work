import Isroutes from "./routes";
import {useSelector} from 'react-redux'
import Nav from "./components/Nav";


function App() {
  const isAuth = useSelector(state => state.AuthReducer)

  return (
    <div>
      {isAuth ? <Nav /> : ''}
      <Isroutes />
    </div>
  );
}

export default App;
