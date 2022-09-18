import "../sass/App.scss";
import Hero from './Hero'
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
      <div className="container">
       <nav className="nav">
          <div className="logo">
            <a href="/">Raju</a>
          </div>
          <ul className="links">
            <li>
              <a href="/work">Work</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>

        <Hero/>
      </div>
    </>
  );
}

export default App;
