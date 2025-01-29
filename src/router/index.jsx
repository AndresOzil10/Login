import { createBrowserRouter } from "react-router";
import NotFound from "../Screens/NotFound";
import Login from "../Screens/Login";

export const router = createBrowserRouter([
    {
        path:'/Login',
        element: <Login />,
        errorElement: <NotFound />
    },

]) 