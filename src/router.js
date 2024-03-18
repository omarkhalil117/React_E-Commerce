import { Outlet, createBrowserRouter } from "react-router-dom";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import NotFound from './Pages/NotFound';
import Login from "./Pages/Login";

function Layout() {
    return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
    );
}

function WithoutLayout() {
    return(
    <>
    <Outlet/>
    </>
    );
}


const router = createBrowserRouter([
    {
        element: <Layout/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: '/products',
                element: <Products/>
            },
            {
                path: '/products/:id',
                element: <ProductDetails/>
            }
        ]
    },
    {
        element: <WithoutLayout/>,
        children: [
            {
                path: "/login",
                element: <Login/>,
            }
        ]
    }
])

export default router;