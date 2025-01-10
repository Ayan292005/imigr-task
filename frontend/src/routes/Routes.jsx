
import Add from "../pages/add"
import Home from "../pages/home"
import Immigration from "../pages/immigr"
import UserRoot from "../pages/UserRoot"

const Routes = [
    {
        path: "/",
        element: <UserRoot />,
        children: [
            {
                path: "/",
                element: <Home/>,

            },
            {
                path: "/immigration",
                element: <Immigration/>,

            },
            {
                path: "/immigration/add",
                element: <Add />,
            }
        ]
    }
]
export default Routes