/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import Footer from "../Footer/Footer";
import { Link, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AuthContext } from "../Authentication/Provider/Provider";
import useTitle from "../Hooks/useTitle";

const MySwal = withReactContent(Swal);
const MyToy = () => {
  useTitle("My Toys");
  const loadedToys = useLoaderData();
  const [toys, setToys] = useState(loadedToys);
  const [selectedModalId, setSelectedModalId] = useState(null);

  const openModal = (id) => {
    setSelectedModalId(id);
  };

  const closeModal = () => {
    setSelectedModalId(null);
  };

  const handleUpdate = (event, id) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const updateData = {
      price,
      quantity,
      details,
    };
    fetch(`http://localhost:5000/toysData/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();
        closeModal(); // Close the modal
        MySwal.fire({
          icon: "success",
          title: "Good Job!",
          text: "Your Toy Data Is Updated!",
        });
      });
  };
  const handleDelete = (id) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toysData/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              MySwal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = toys.filter((toy) => toy._id !== id);
              setToys(remaining);
            }
          })
          .catch((error) => {
            console.error("Error deleting data:", error);
          });
      }
    });
  };

  return (
    <div>
      <Header />
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th className="text-2xl font-bold text-center p-2 border-2">
                ID
              </th>
              <th className="text-2xl font-bold text-center p-2 border-2">
                Toy Name
              </th>
              <th className="text-2xl font-bold text-center p-2border-2">
                Seller Name
              </th>
              <th className="text-2xl font-bold text-center p-2 border-2">
                Seller Email
              </th>
              <th className="text-2xl font-bold text-center p-2 border-2">
                Price{" "}
              </th>
              <th className="text-2xl font-bold text-center p-2 border-2">
                Rating
              </th>
              <th className="text-2xl font-bold text-center p-2 border-2">
                Available Quantity
              </th>
              <th className="text-lg font-bold text-center  border-2">Edit</th>
              <th className="text-lg font-bold text-center  border-2">
                Delete
              </th>
            </tr>
          </thead>
          {toys &&
            toys.map((toy) => {
              console.log(toy);
              return (
                <tbody key={toy._id} className="w-72">
                  <tr>
                    <td className="text-2xl font-semibold text-slate-800 text-center p-2 border-2">
                      {toy._id}
                    </td>
                    <td className="text-2xl font-semibold text-slate-800 text-center p-2 border-2">
                      {toy.toyname}
                    </td>
                    <td className="text-2xl font-semibold text-slate-800 text-center p-2 border-2">
                      {toy.seller}
                    </td>
                    <td className="text-2xl font-semibold text-slate-800 text-center p-2 border-2">
                      {toy.email}
                    </td>
                    <td className="text-2xl font-semibold text-slate-800 text-center p-2 border-2">
                      {toy.price}
                    </td>
                    <td className="text-2xl font-semibold text-slate-800 text-center p-2 border-2">
                      {toy.rating}
                    </td>
                    <td className="text-2xl font-semibold text-slate-800 text-center p-2 border-2">
                      {toy.quantity}
                    </td>
                    <td>
                      <label htmlFor="my-modal-3">
                        <button
                          onClick={() => {
                            openModal(toy._id);
                          }}
                          className="btn-primary btn font-bold bg-transparent text-2xl text-[#0c2461]"
                        >
                          <Link>
                            <FaEdit></FaEdit>
                          </Link>
                        </button>
                      </label>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(toy._id)}
                        className="btn-primary btn font-bold text-2xl bg-transparent text-[#b71540]"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </div>
      {/* Modal */}
      <input
        type="checkbox"
        id={`my-modal-${selectedModalId}`}
        className="modal-toggle"
        checked={selectedModalId !== null}
      />
      {selectedModalId !== null && (
        <>
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor={`my-modal-${selectedModalId}`}
                className="btn btn-sm btn-circle absolute right-2 top-2"
                onClick={closeModal}
              >
                ✕
              </label>
              <form
                onSubmit={(event) => handleUpdate(event, selectedModalId)}
                className="hero min-h-screen bg-base-200"
              >
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-3xl font-bold">
                            Price
                          </span>
                        </label>
                        <input
                          type="number"
                          placeholder="Price"
                          className="input input-bordered"
                          name="price"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-3xl font-bold">
                            Available Quantity
                          </span>
                        </label>
                        <input
                          type="number"
                          placeholder="Quantity"
                          className="input input-bordered"
                          name="quantity"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-3xl font-bold">
                            Details{" "}
                          </span>
                        </label>
                        <textarea
                          type="text"
                          placeholder="Details"
                          className="input input-bordered"
                          name="details"
                        />
                      </div>
                      <div className="form-control mt-6">
                        <button className="btn btn-primary" type="submit">
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
};

export default MyToy;
