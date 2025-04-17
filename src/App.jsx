import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router";
import V1 from "./components/V1";
import V0 from "./components/V0";
import FooterV0 from "./components/FooterV0";
import FooterV1 from "./components/FooterV1";
const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <V1/>
       
      </div>
        
    },
    {
      path:"/version0",
      element:
        <div>
          <V0/>
        </div>
    },
  ]
)




function App() {
  return (
    <RouterProvider router={router} />
  )

}

export default App;
