import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Air, RMS } from "./pages/AppLinks";
import {Home} from "./pages/Home";
import NewProject from "./pages/NewProject";
import Portal from "./pages/Portal";
import Admin from "./pages/Admin";
function App() {

  
return (
	<Router>
	<Sidebar />
	<Routes>
		<Route path='/links/Air' element={<Air/>} />
		<Route path='/links/RMS' element={<RMS/>} />
		<Route path='/' element={<Home/>} />
		<Route path='/portal' element={<Portal/>} />
		<Route path='/new' element={<NewProject/>} />
		<Route path='/admin' element={<Admin/>} />
	</Routes>
	</Router>
);
}

export default App;