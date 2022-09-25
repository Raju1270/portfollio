import { useState } from "react";
import "../sass/App.scss";
import Hero from "./Hero";
import MenuPage from "./MenuPage";
import Loadpage from "./Loadpage"
function App() {
  const [Menu, setMenu] = useState(false);  
  const [load,setLoad]=useState(false);
  function menuTransition() {
    setMenu(!Menu);
  }

  return (
    <>
   {/* <Loadpage/> */}
      <div  className="w-full h-[100vh] relative">
        <nav className="nav w-full md:px-[7vw] px-[5vw] md:pt-2">
          <div className="logo">
            <a className="text-[4.4rem]" href="/">
              Raju
            </a>
          </div>
          <div>
            <div className="menu md:hidden mt-[-10px] relative">
              <input
                onClick={menuTransition}
                className="absolute opacity-0 w-8 h-8 top-[-14px]"
                type="checkbox"
              />
              <div className="ham ">
                <span className="block w-5 h-0.5 my-2 bg-gray-200"></span>
                <span className="block w-8 h-0.5 my-2 bg-gray-200"></span>
              </div>
            </div>
            <ul className="links hidden md:flex  space-x-4">
              <li>
                <a href="/work">Work</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
         
        </nav>
        
        {Menu ? <MenuPage /> : <Hero />}
      </div>
    </>
  );
}

export default App;
