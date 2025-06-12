import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router";
import V1 from "./components/V1";
import V0 from "./components/V0";
import FooterV0 from "./components/FooterV0";
import FooterV1 from "./components/FooterV1";
import Navbar from "./components/Navbar";
import About from "./components/About";
const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        
        <V0/>
       
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
