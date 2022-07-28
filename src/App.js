import{

  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";


function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/messenger/login" element = {<Login />} />
        <Route path = "/messenger/register" element = {<Register />} />
      </Routes>
      </BrowserRouter>,
      
    </div>
  );
}

export default App;
