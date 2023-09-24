import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Projects from "../components/projects";

const Home = () => (
  <div className="text-sans">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="w-full text-gray-900">
      <h1 className="m-0 w-full pt-20 leading-tight text-5xl text-center font-bold">
        Welcome to my Portfolio!
      </h1>
      <p className="text-center my-4 text-m">
        To start, I'll show you some projects below.
      </p>

      <div className="max-w-4xl mx-auto pt-20 py-auto pb-8 flex flex-row justify-around">
        <a
          href="https://finace.vercel.app/"
          className="pt-4 px-5 pb-6 w-64 text-left no-underline text-gray-800 border border-gray-400 hover:border-blue-500"
        >
          <h3 className="m-0 text-blue-500 text-lg font-bold">
            Project 01 &rarr;
          </h3>
          <p className="m-0 pt-3 py-0 pb-0 text-sm text-gray-900">
            Our main goal is to provide users with reliable, educational and
            relevant financial information to help them make informed financial
            decisions and achieve financial stability.
          </p>
        </a>
        <a
          href="#"
          className="pt-4 px-5 pb-6 w-64 text-left no-underline text-gray-800 border border-gray-400 hover:border-blue-500"
        >
          <h3 className="m-0 text-blue-500 text-lg font-bold">
            Project 02 &rarr;
          </h3>
          <p className="m-0 pt-3 py-0 pb-0 text-sm text-gray-900">
            Facilitate collaboration between members to carry out projects,
            events or initiatives that benefit Data in the Clous community as a
            whole.
          </p>
        </a>
        <a
          href="https://github.com/JohnnTech"
          className="pt-4 px-5 pb-6 w-64 text-left no-underline text-gray-800 border border-gray-400 hover:border-blue-500"
        >
          <h3 className="m-0 text-blue-500 text-lg font-bold">
            Other Projects &rarr;
          </h3>
          <p className="m-0 pt-3 py-0 pb-0 text-sm text-gray-900">
            Find other projects on GitHub.
          </p>
        </a>
      </div>
    </div>
  </div>
);

export default Home;
