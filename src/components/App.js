import "../sass/App.scss";
import Hero from "./Hero";
function App() {
  // const cursorRounded = document.querySelector(".cursor-outer");
  // const cursorPointed = document.querySelector(".cursor");
  // const moveCursor = (e) => {
  //   const mouseY = e.clientY;
  //   const mouseX = e.clientX;
  //   cursorRounded.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  //   cursorPointed.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  // };

  // window.addEventListener("mousemove", moveCursor);

  return (
    <>
      <div className=" w-full h-[300vh] relative">
        <nav className="nav w-full md:px-[7vw] px-[5vw]">
          <div className="logo">
            <a className="text-[4.4rem]" href="/">
              Raju
            </a>
          </div>
          <div>
            <span className="menu md:hidden space-y-2">
              <span class="block w-5 h-0.5 bg-gray-200"></span>
              <span class="block w-8 h-0.5 bg-gray-200"></span>
            </span>
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

        <Hero />
      </div>
    </>
  );
}

export default App;
