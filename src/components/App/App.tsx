import React, { useState } from "react";
import classes from "./App.module.scss";
import { Outlet, Link } from "react-router-dom";
import About from "@/pages/About/About";
import picPng from "@/assets/pic.png";
import picJpg from "@/assets/pic.jpg";
import PicSvg from "@/assets/home.svg";

export const App = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount((prev) => prev + 1);

  // if (__PLATFORM__ === "desktop") return <div>"desktop-platform"</div>;
  // if (__PLATFORM__ === "mobile") return <div>"mobile-platform"</div>;

  return (
    <div>
      <h1>PLATFORM={__PLATFORM__}</h1>
      <div>
        <img width={100} height={100} src={picPng} alt="" />
      </div>
      <div>
        <img width={200} height={100} src={picJpg} alt="" />
      </div>
      <div>
        <PicSvg width="100" height="100" color="green" />
      </div>

      <Link to={"/about"}>about</Link>
      <br />
      <Link to={"/shop"}>shop</Link>
      <br />
      <h1>{count}</h1>
      <button className={classes.button} onClick={increment}>
        +
      </button>
      <About />
      {/* <Outlet /> */}
    </div>
  );
};
