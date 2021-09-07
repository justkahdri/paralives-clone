import React from "react";
import Image from "next/image";
import home from "@styles/pages/home.module.scss";
import logo from "@images/banner.png";

const Home = () => {
  return (
    <main className={home.banner}>
      <Image alt="Paralives logo" src={logo} />
      <h1>Let&apos;s get this party started.</h1>
    </main>
  );
};

export default Home;
