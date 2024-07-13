import { createBrowserRouter , Navigate } from "react-router-dom";
import App from "../App"

import SearchPage from "../pages/SearchPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
           
            {
                path:"search",
                element:<SearchPage/>
            },
            {
                path: "*", 
                element: <Navigate to="/" replace /> 
            },
        ]
    }
])

export default router; 