/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../Hooks/useTitle";

const ToyDetails = () => {
  useTitle("Toy Details");
  const toys = useLoaderData();
  console.log(toys);
  return (
    <div>
      <Header />
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th className="text-2xl font-bold border-2  text-center p-2">
                ID
              </th>
              <th className="text-2xl font-bold border-2  text-center p-2">
                Toy Name
              </th>
              <th className="text-2xl font-bold border-2  text-center p-2">
                Seller Name
              </th>
              <th className="text-2xl font-bold border-2  text-center p-2">
                Seller Email
              </th>
              <th className="text-2xl font-bold border-2  text-center p-2">
                Price{" "}
              </th>
              <th className="text-2xl font-bold border-2  text-center p-2">
                Rating
              </th>
              <th className="text-2xl font-bold border-2  text-center p-2">
                Available Quantity
              </th>
            </tr>
          </thead>
          {toys.map((toy) => {
            return (
              <tbody key={toy._id}>
                <tr>
                  <td className="text-2xl font-semibold border-2  text-center p-2 text-slate-800">
                    {toy._id}
                  </td>
                  <td className="text-2xl font-semibold border-2  text-center p-2 text-slate-800">
                    {toy.toyname}
                  </td>
                  <td className="text-2xl font-semibold border-2  text-center p-2 text-slate-800">
                    {toy.seller}
                  </td>
                  <td className="text-2xl font-semibold border-2  text-center p-2 text-slate-800">
                    {toy.email}
                  </td>
                  <td className="text-2xl font-semibold border-2  text-center p-2 text-slate-800">
                    {toy.price}
                  </td>
                  <td className="text-2xl font-semibold border-2  text-center p-2 text-slate-800">
                    {toy.rating}
                  </td>
                  <td className="text-2xl font-semibold border-2  text-center p-2 text-slate-800">
                    {toy.quantity}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default ToyDetails;
