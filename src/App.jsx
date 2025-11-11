import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import HeikiBackground from "./components/HeikiBackground"

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div> 
         <Navbar/>
        <Home/>
      </div>
        
    }

  ]
)




function App() {
  return (
    <div className="min-h-screen bg-black relative">
      <HeikiBackground
        primaryColor="#ededed"
        backgroundColor = "#0a0a0a"
        
        pattern="grid"
        density="dense"
        opacity={0.2}
      />
      <div className="relative ">
        <RouterProvider router={router} />
      </div>
    </div>
    
  )

}

export default App;
