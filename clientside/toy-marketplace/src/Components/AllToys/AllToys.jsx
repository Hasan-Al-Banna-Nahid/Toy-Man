/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../Authentication/Provider/Provider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../Hooks/useTitle";

const AllToys = () => {
  useTitle("All Toys");
  const loadedToys = useLoaderData();
  const [toys, setToys] = useState(loadedToys);
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useContext(AuthContext);

  const handleUser = () => {
    if (!user) {
      toast.error("You have to login first");
    }
  };
  const handleSearch = (event) => {
    event.preventDefault();
    const filteredToys = toys.filter((toy) =>
      toy.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setToys(filteredToys);
  };

  return (
    <div>
      <Header />
      <div>
        <h2 className="text-center text-3xl font-bold">Search By Toy Name</h2>
        <form onChange={handleSearch} className="hero my-4 bg-base-200">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search by name"
                  className="input input-bordered"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full ">
          <thead>
            <tr>
              <th className="font-semibold text-3xl ms-6 border-2 p-4 text-center">
                ID
              </th>
              <th className="font-semibold text-3xl ms-6 border-2 p-4 text-center">
                Seller
              </th>
              <th className="font-semibold text-3xl ms-6 border-2 p-4 text-center">
                Toy Name
              </th>
              <th className="font-semibold text-3xl ms-6 border-2 p-4 text-center">
                Category
              </th>
              <th className="font-semibold text-3xl ms-6 border-2 p-4 text-center">
                Price
              </th>
              <th className="font-semibold text-3xl ms-6 border-2 p-4 text-center">
                Available Quantity
              </th>
              <th></th>
            </tr>
          </thead>
          {toys &&
            toys
              .filter((toy) =>
                toy.toyname.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((toy) => {
                return (
                  <tbody key={toy._id}>
                    <tr>
                      <td className="font-semibold text-2xl px-6 ms-6 border-2 p-4 text-center">
                        {toy._id}
                      </td>
                      <td className="font-semibold text-2xl px-6 ms-6 border-2 p-4 text-center">
                        {toy.seller}
                      </td>
                      <td className="font-semibold text-2xl px-6 ms-6 border-2 p-4 text-center">
                        {toy.toyname}
                      </td>
                      <td className="font-semibold text-2xl px-6 ms-6 border-2 p-4 text-center">
                        {toy.category}
                      </td>
                      <td className="font-semibold text-2xl px-6 ms-6 border-2 p-4 text-center">
                        {toy.price}
                      </td>
                      <td className="font-semibold text-2xl px-6 ms-6 border-2 p-4 text-center">
                        {toy.quantity}
                      </td>
                      <td>
                        <button className="btn-primary btn font-bold text-1xl">
                          <Link
                            onClick={handleUser}
                            to={`/toysDetails/${toy._id}`}
                          >
                            View Details
                          </Link>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
        </table>
      </div>

      <ToastContainer />
      <Footer />
    </div>
  );
};

export default AllToys;
