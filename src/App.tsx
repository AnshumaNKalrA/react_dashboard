import Mend from "./pages/mend/Mend"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import "./styles/global.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Checkmarx from "./pages/checkmarx/Checkmarx";
import Datatheorem from "./pages/datatheorem/Datatheorem";

const queryClient = new QueryClient();

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
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
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
        {
          path: "/checkmarx",
          element: <Checkmarx />,
        },
        {
          path: "/mend",
          element: <Mend />
        },
        {
          path: "/datatheorem",
          element: <Datatheorem />
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
