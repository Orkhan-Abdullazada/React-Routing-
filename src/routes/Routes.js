import SiteRoot from "../pages/site/SiteRoot";
import AdminRoot from "../pages/admin/AdminRoot";
import Home from "../pages/site/Home/Home";
import Products from "../pages/site/Products/Products";
import ProductsDetail from "../pages/site/ProductsDetail/ProductsDetail";
import Myproducts from "../pages/admin/myProducts/Myproducts";
import AddProducts from "../pages/admin/AddProducts/AddProducts";
import EditProducts from "../pages/admin/EditProducts/EditProducts";
import Card from '../pages/site/Card/Card';
import Favorites from "../pages/site/Favorites/Favorites";

const Routes = [
  {
    path: '/',
    element: <SiteRoot />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'card',
        element: <Card />
      },
      {
        path: 'favorites',
        element: <Favorites />
      },
      {
        path: ':id',
        element: <ProductsDetail />
      }
    ]
  },
  {
    path: '/admin',
    element: <AdminRoot />,
    children: [
      {
        path: '',
        element: <Myproducts />
      },
      {
        path: 'addproducts',
        element: <AddProducts />
      },
      {
        path: 'editproducts/:id',
        element: <EditProducts />
      }
    ]
  }
];

export default Routes;
