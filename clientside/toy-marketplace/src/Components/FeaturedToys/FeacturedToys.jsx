/* eslint-disable no-unused-vars */
import React from "react";
import LazyLoad from "react-lazy-load";

const FeaturedToys = () => {
  return (
    <div>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <h3 className="font-semibold text-4xl text-center my-6 text-[#130f40]">
          Featured Toys
        </h3>
      </div>
      <div
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="2500"
        className="grid lg:grid-cols-3 gap-6 lg:ms-12"
      >
        <div>
          <div className="card  h-5/6 w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-12">
              <LazyLoad>
                <img
                  src="../Assests/Sheriff_Woody.png"
                  alt="Woody!"
                  className="rounded-xl"
                />
              </LazyLoad>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl">Woody!</h2>
              <p>
                Sheriff Woody Pride is a fictional pull-string cowboy doll who
                appears in the Disney–Pixar Toy Story franchise. In the films,
                Woody is the main protagonist, alongside Buzz Lightyear. He is
                primarily voiced by Tom Hanks, who voices him in the Toy Story
                films, short films, and TV specials.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card h-5/6  w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-12">
              <LazyLoad>
                <img
                  src="../Assests/Minnie_Mouse_Duckipedia.png"
                  alt="Minni!"
                  className="rounded-xl my-12"
                />
              </LazyLoad>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl">Minnie Mouse!</h2>
              <p>
                Minnie Mouse is an American cartoon character created by The
                Walt Disney Company. As the longtime sweetheart of Mickey Mouse,
                she is an anthropomorphic mouse with white gloves, a bow,
                polka-dotted dress, white bloomers and low-heeled shoes
                occasionally with ribbons on them.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card h-5/6  w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-12">
              <LazyLoad>
                <img
                  src="../Assests/Buzz_Lightyear.png"
                  alt="Buzz!"
                  className="rounded-xl"
                />
              </LazyLoad>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl">Buzz Lightyear!</h2>
              <p>
                Buzz Lightyear is one of the main characters in Disney/Pixar's
                Toy Story franchise, voiced by Tim Allen. He is a superhero toy
                action figure based on the in-universe media franchise
                consisting of a blockbuster feature film and animated series,
                Space Ranger.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card h-5/6 w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-12">
              <LazyLoad>
                <img
                  src="../Assests/images.jpg"
                  alt="Mrs. Potato Head"
                  className="rounded-xl"
                />
              </LazyLoad>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl">Mrs. Potato Head!</h2>
              <p>
                Mrs. Potato Head is a supporting character in the 1999 Golden
                Globe winning Disney/Pixar movie Toy Story 2, one of the main
                characters in it's 2010 Oscar winning sequel Toy Story 3, and a
                minor character in it's 2019 sequel Toy Story 4.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card h-5/6 w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-12">
              <LazyLoad>
                <img
                  src="../Assests/hb_princess_princessportal2022_688_5e7abaa6.jpeg"
                  alt="Disney Princess"
                  className="rounded-xl"
                />
              </LazyLoad>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl">Disney Princess!</h2>
              <p>
                Disney Princess, also called the Princess Line, is a media
                franchise and toy line owned by the Walt Disney Company. Created
                by Disney Consumer Products chairman Andy Mooney, the franchise
                features a lineup of female protagonists who have appeared in
                various Disney franchises.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card h-5/6 w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-12">
              <LazyLoad>
                <img
                  src="../Assests/LotsOHugginBear.webp"
                  alt="Lotso"
                  className="rounded-xl h-fit"
                />
              </LazyLoad>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl">Lotso!</h2>
              <p>Lots-o'-Huggin' Bear, aka Lotso, is a stuffed plush toy.</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedToys;
