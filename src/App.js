import Experience from './Pages/Experience';
import Home from './Pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Projects from './Pages/Projects';
import UnderMaintenance from './Pages/UnderMaintenance';

function App() {
return (
<>
<BrowserRouter>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/services' element={<UnderMaintenance/>}/>
<Route path='/experience' element={<Experience/>}/>
<Route path='/projects' element={<Projects/>}/>
<Route path='/education' element={<UnderMaintenance/>}/>
</Routes>
</BrowserRouter>
</>
);
}

export default App;