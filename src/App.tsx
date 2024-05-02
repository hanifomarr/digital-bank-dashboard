import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Dashboard from "./pages/dashboard/dashboard";
import Transaction from "./pages/transaction/transaction";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Menu from "./components/menu/menu";

import "./styles/global.scss";
import Analytic from "./pages/analytic/analytic";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "analytic", element: <Analytic /> },
        { path: "transaction", element: <Transaction /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
