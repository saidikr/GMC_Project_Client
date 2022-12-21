import HomePage from "../pages";
import AdminHomePage from "../pages/admin/AdminHomePage";
import AdminProductsPage from "../pages/admin/products/AdminProductsPage";
import CheckoutPage from "../pages/checkout";
import ContactPage from "../pages/contact";
import ShopPage from "../pages/shop";
import ShopDetailPage from "../pages/shopDetail";
import LoginPage from "../pages/auth/login";
import ShoppingCartPage from "../pages/shoppingCart";
import { AdminLayout } from "../layouts/adminLayout";
import { HomeLayout } from "../layouts/homeLayout";
import { CreateProduct } from "../pages/admin/products/CreateProduct";
import { EditProduct } from "../pages/admin/products/EditProduct";
import { Shoplayout } from "../layouts/homeLayout/shoplayout";





export const routes = [
  { id: 1, path: "/", element: HomeLayout, isPrivate: false, children: [
      { id: 1, path: "", element: HomePage },
      { id: 2, path: "checkout", element: CheckoutPage },
      { id: 3, path:"contact" , element: ContactPage},
      { id: 4 , path:"shop" , element: Shoplayout, children:[
      { id: 1, path: "", element: ShopPage },
      { id: 2, path: "mens", element: CheckoutPage },
      { id: 3, path:"womens" , element: ContactPage},
      ]},
      { id: 5 , path:"shopDetail/:id" , element: ShopDetailPage},
      { id: 6 , path:"shoppingCart" , element: ShoppingCartPage},
  ] },
  {
    id: 2,
    path: "auth/login",
    element: LoginPage,
    isPrivate: false,
    children: [],
  },
  {
    id: 3,
    path: "/admin",
    element: AdminLayout,
    isPrivate: true,
    children: [
      { id: 1, path: "", element: AdminHomePage },
      { id: 2, path: "products", element: AdminProductsPage },
      { id: 3, path:"product/create" , element: CreateProduct},
      { id: 4, path:"product/edit/:id" , element: EditProduct},
    ],
  },
];
