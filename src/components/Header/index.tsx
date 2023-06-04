"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import Image from "next/image";
import header from "./index.module.scss";
import logo from "@public/rongqi-logo_1x.png";
import dynamic from "next/dynamic";

// 菜单
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

// 搜索框
const Search = () => {
  return (
    <>
      <input className={header.search} placeholder="请输入搜索内容" />
    </>
  );
};

// 登录按钮
const Login = (props: any) => {
  return (
    <>
      <button className={header.login} onClick={() => props.onLink()}>
        登录/注册
      </button>
    </>
  );
};

const Header = () => {
  const router = useRouter();
  const headerRef = useRef(null);
  const handleClick = () => {
    console.log("this", headerRef);
  };

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
          <Login onLink={() => router.push("/login")} />
          {/* <Me theme="outline" size="24" fill="#333" /> */}
        </div>
      </header>
    </>
  );
};

export default Header;
