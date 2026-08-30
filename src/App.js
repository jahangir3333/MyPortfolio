import Experience from './Pages/Experience';
import Home from './Pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
return (
<>
<BrowserRouter>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/services' element={<Experience/>}/>
<Route path='/experience' element={<Experience/>}/>
<Route path='/projects' element={<Experience/>}/>
<Route path='/education' element={<Experience/>}/>
</Routes>
</BrowserRouter>
</>
);
}

export default App;