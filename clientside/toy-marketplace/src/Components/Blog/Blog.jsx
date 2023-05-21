/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import useTitle from "../Hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div>
      <Header />
      <div className="flex lg:flex-col my-16">
        <div>
          <h2 className="font-semibold text-2xl text-center text-[#130f40]">
            1. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
          <p className="text-2xl font-medium my-2 text-center text-[#535c68]">
            <span className="underline">Access Token</span> : When a user logins
            in, the authorization server issues an access token, which is an
            artifact that client applications can use to make secure calls to an
            API server. When a client application needs to access protected
            resources on a server on behalf of a user, the access token lets the
            client signal to the server that it has received authorization by
            the user to perform certain tasks or access certain resources.
          </p>
          <p className="text-2xl font-medium my-2 text-center text-[#535c68]">
            {" "}
            <span className="underline">Refresh Token</span> : As mentioned, for
            security purposes, access tokens may be valid for a short amount of
            time. Once they expire, client applications can use a refresh token
            to "refresh" the access token. That is, a refresh token is a
            credential artifact that lets a client application get new access
            tokens without having to ask the user to log in again.
          </p>
          <p className="text-2xl font-medium my-2 text-center text-[#535c68]">
            <span className="underline">How to Store & Access them</span> : You
            can store the access token and refresh token in the server-side
            session. The application can use web sessions to communicate with
            the server. The token is then available for any requests originating
            from server-side code. This is also known as the backend for
            frontend (BFF) proxy.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-2xl my-4 text-center text-[#130f40]">
            2. Compare SQL and NoSQL databases?
          </h2>
          <p className="text-2xl font-medium my-2 text-center text-[#535c68]">
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable. SQL databases are table-based, while NoSQL
            databases are document, key-value, graph, or wide-column stores. SQL
            databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-2xl my-4 text-center text-[#130f40]">
            3. What Is ExpressJS & NestJS?
          </h2>
          <p className="text-2xl font-medium my-2 text-center text-[#535c68]">
            <span className="underline">ExpressJS</span>: Express.js, or simply
            Express, is a back end web application framework for building
            RESTful APIs with Node.js, released as free and open-source software
            under the MIT License. It is designed for building web applications
            and APIs. It has been called the de facto standard server framework
            for Node.js.
          </p>
          <p className="text-2xl font-medium my-2 text-center text-[#535c68]">
            <span className="underline">NestJS</span>: Nest. js is one of the
            fastest-growing Node. js frameworks for building efficient,
            scalable, and enterprise-grade backend applications using Node. js.
            It is known for producing highly testable, maintainable, and
            scalable applications using modern JavaScript and TypeScript.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-2xl my-4 text-center text-[#130f40]">
            4. What Is MongoDB Aggregate and How Does it work?
          </h2>
          <p className="text-2xl font-medium my-2 text-center text-[#535c68]">
            Aggregation is a way of processing a large number of documents in a
            collection by means of passing them through different stages. The
            stages make up what is known as a pipeline. The stages in a pipeline
            can filter, sort, group, reshape and modify documents that pass
            through the pipeline.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
