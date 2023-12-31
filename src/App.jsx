import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Main from "./Layout/Main";
import Shop from "./components/Shop/Shop";
import About from "./components/About/About";
import OrderReview from "./components/OrderReview/OrderReview";
import SingUp from "./components/SingUpLogin/SingUp/SingUp";
import Login from "./components/SingUpLogin/Login/Login";
import Contract from "./components/Contract/Contract";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/shop",
          element: <Shop></Shop>,
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/Order-Review",
          element: <OrderReview></OrderReview>
        },
        {
          path: "/Sing-Up",
          element: <SingUp></SingUp>
        },
        {
          path: "/Login",
          element: <Login></Login>
        },
        {
          path: "/Contract",
          element: <Contract></Contract>
        }
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  )
}

export default App;
