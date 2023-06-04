"use client";
import { useRef } from "react";
import Image from "next/image";
import header from "./index.module.scss";
import logo from "@public/rongqi-logo_1x.png";
import dynamic from "next/dynamic";
import React from "react";

const Menus = () => {
  const menus = [
    {
      name: "Home",
      link: "/",
      id: "home",
    },
    {
      name: "Home1",
      link: "/",
      id: "home2",
    },
  ];

  return (
    <>
      <menu className={header.menus}>
        {menus.map((item, index) => (
          <div key={item.id} tabIndex={index} className={header["menu"]}>
            {item.name}
            <i className={header["menu-icon"]}></i>
          </div>
        ))}
      </menu>
    </>
  );
};

const Search = () => {
  return (
    <>
      <input className={header.search} placeholder="请输入搜索内容" />
    </>
  );
};

const Login = () => {
  return (
    <>
      <button className={header.login}>登录/注册</button>
    </>
  );
};

const Header = () => {
  const Me = dynamic(() => import("@icon-park/react").then((i) => i.Me), {
    ssr: true,
  });
  const headerRef = useRef(null);
  function handleClick() {
    console.log("this", headerRef);
  }
  return (
    <>
      <header className={header.container} ref={headerRef}>
        <div className={header["logo-box"]} onClick={handleClick}>
          <Image src={logo} alt="contianer-logo" />
        </div>
        <div className={header["menu-box"]}>
          <Menus />
        </div>
        <div className={header["search-box"]}>
          <Search />
        </div>
        <div className={header["control-box"]}>
          <Login />
          {/* <Me theme="outline" size="24" fill="#333" /> */}
        </div>
      </header>
    </>
  );
};

export default Header;
