import React from "react";

function MenuPage() {
  return (
    <div className="w-full h-full flex justify-evenly items-center flex-col ">
      <ul className=" ">
        <li className="text-3xl my-6 ">
          <a href="/work">Work</a>
        </li>
        <li className="text-3xl my-6 ">
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div>s</div>
    </div>
  );
}

export default MenuPage;
