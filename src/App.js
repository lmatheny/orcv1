import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Air, RMS } from "./pages/AppLinks";
import {Home} from "./pages/Home";
import NewProject from "./pages/NewProject";
import Portal from "./pages/Portal";
import Admin from "./pages/Admin";

const App = ({ username }) => {

	
  
return (
	
	
	<Router>
	<Sidebar  username={username} />
	<Routes>
		<Route path='/links/Air' element={<Air/>} />
		<Route path='/links/RMS' element={<RMS/>} />
		<Route path='/' element={<Home username={username} />} />
		<Route path='/portal' element={<Portal/>} />
		<Route path='/new' element={<NewProject username={username}/>} />
		<Route path='/admin' element={<Admin username={username} />} />
	</Routes>
	</Router>
);
}


export default App;