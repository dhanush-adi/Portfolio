import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router";
import V1 from "./components/V1";
import V0 from "./components/V0";
import V0ProjectPage from "./Pages/V0ProjectPage";
import FooterV0 from "./components/FooterV0";
import FooterV1 from "./components/FooterV1";
import Navbar from "./components/Navbar";
import About from "./components/About";
import V0Navbar from "./components/V0Navbar";

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div> 
         <V0Navbar/>
        <V0/>
      </div>
        
    },
    {
      path:"/projects",
      element:
      <div>
        <V0Navbar/>
        <V0ProjectPage/>
      </div>
    },

    {
      path:"/version1",
      element:
        <div>
          <Navbar/>
          <V1/>
        </div>
    },

    {
      path:"/about",
      element:
      <div>
        <Navbar/>
        <About/>
      </div>
    }

  ]
)




function App() {
  return (
    <RouterProvider router={router} />
  )

}

export default App;
