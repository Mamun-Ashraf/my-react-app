import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Registration from "../pages/Registration";
import PrivateRoute from "./private/PrivateRoute";
import AllProducts from "../pages/AllProducts";
import ManageAllProducts from "../pages/dashboard/ManageAllProducts";
import AddProduct from "../pages/dashboard/AddProduct";
import EditProduct from "../pages/dashboard/EditProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/allProducts",
        element: <AllProducts />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "manageProducts",
        element: <ManageAllProducts />,
      },
      {
        path: "addProduct",
        element: <AddProduct />,
      },
      {
        path: "editProduct/:id",
        element: <EditProduct />,
      },
    ],
  },
]);
