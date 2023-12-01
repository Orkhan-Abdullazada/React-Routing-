import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";
// import Navbar from "./layout/site/Navbar/Navbar";
const routes = createBrowserRouter(Routes)

function App() {
    return ( 
        <RouterProvider router = { routes } />
       
    );
}

export default App;