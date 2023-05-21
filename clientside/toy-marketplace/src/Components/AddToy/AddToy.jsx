/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useTitle from "../Hooks/useTitle";

const MySwal = withReactContent(Swal);
const AddToy = () => {
  useTitle("Add toy");
  const handleSendDataToDB = (event) => {
    event.preventDefault();
    const form = event.target;
    const seller = form.seller.value;
    const toyname = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const email = form.email.value;
    const rating = form.rating.value;

    const data = {
      seller,
      toyname,
      category,
      price,
      quantity,
      details,
      email,
      rating,
    };

    console.log(data);
    fetch("https://toyman.vercel.app/toysData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          MySwal.fire({
            icon: "success",
            title: "Congrats!",
            text: "Your Toy Is Added",
          });
        }
        form.reset();
      });
  };
  return (
    <div>
      <Header />
      <form
        onSubmit={handleSendDataToDB}
        className="hero min-h-screen bg-base-200"
        encType="multipart/form-data"
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body ">
              <h2 className="text-center font-semibold text-2xl">Add Toy</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl font-semibold">
                    Seller
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Seller"
                  className="input input-bordered"
                  name="seller"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl font-semibold">
                    Seller Email
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Seller Email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl font-semibold">
                    Toy Photo
                  </span>
                </label>
                <input
                  type="file"
                  className="input input-bordered"
                  name="Photo"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl font-semibold">
                    Toy Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Toy Name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl font-semibold">
                    Category
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Category"
                  className="input input-bordered"
                  name="category"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl font-semibold">
                    Price
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  className="input input-bordered"
                  name="price"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl font-semibold">
                    Rating
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Rating"
                  className="input input-bordered"
                  name="rating"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl font-semibold">
                    Available Quantity
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Available Quantity"
                  className="input input-bordered"
                  name="quantity"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl font-semibold">
                    Details
                  </span>
                </label>
                <textarea name="details" id="" cols="30" rows="10"></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary font-bold text-2xl">
                  Add Toy
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default AddToy;
