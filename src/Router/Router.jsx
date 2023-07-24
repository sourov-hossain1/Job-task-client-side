import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import College from "../Pages/College/College";
import Admission from "../Pages/Admission/Admission"
import Input from "../Pages/Input/Input";
import MyCollege from "../Pages/MyCollege/MyCollege"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children : [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/college',
                element: <College></College>
            },
            {
                path: '/admission',
                element: <Admission></Admission>
            },
            {
                path: '/input',
                element: <Input></Input>
            },
            {
                path: '/mycollege',
                element: <MyCollege></MyCollege>
            }
        ]
    },
]);
export default router;