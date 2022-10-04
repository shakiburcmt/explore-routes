import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Main from './layout/Main';
import Contact from './components/Contact/Contact';
import PersonDetails from './components/PersonDetails/PersonDetails';
import Posts from './components/Posts/Posts';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        { path: '/contact', element: <Contact></Contact> },
        {
          path: '/about',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <About></About>
        },
        {
          path: '/person/:personId',
          loader: async ({ params }) => {
            // console.log(params.personId)
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.personId}`)
          },
          element: <PersonDetails></PersonDetails>
        }
      ]
    },
    { path: '/products', element: <Products></Products> },
    {
      path: '/posts',
      loader: async () => {
        return fetch('https://jsonplaceholder.typicode.com/posts')
      },
      element: <Posts></Posts>
    },
    { path: '*', element: <div>OOPS! 404 Not Found</div> }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
