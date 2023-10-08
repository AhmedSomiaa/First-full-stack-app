import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import TopBar from './components/topBar/TopBar.jsx';
import Homepage from './pages/homepage/Homepage.jsx';
import SingleRecipe from "./pages/single-recipe/SingleRecipe.jsx"
import AddPage from "./pages/addpage/AddPage.jsx"
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';

const Layout = () => {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/recipe/:id",
        element: <SingleRecipe />,
      },
      {
        path: "/addPage",
        element: <AddPage />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
