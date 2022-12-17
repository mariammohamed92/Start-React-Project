
import './App.css';
import Master from './Master/Master';
import Contact from './About/About';
import Portfolio from './Contact/Contact';
import Home from './Home/Home';
import About from './Portfolio/Portfolio';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
const myRoutes = createBrowserRouter([
  {
    path: '/', element: <Master />, children: [
      { index: true, element: <Home/> },

      { path: 'about', element: <About/> },
      { path: 'contact', element: <Contact/> },
      { path: 'portfolio', element: <Portfolio/> },
      { path: '*', element: <NotFound /> }

    ]
  }
])

function App() {
  return (
    <div className="App">
        <RouterProvider router={myRoutes} />
    </div>
  );
}

export default App;
