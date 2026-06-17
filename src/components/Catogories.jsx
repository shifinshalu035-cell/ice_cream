import chocolate from "../assets/chocolate.png";
import mango from "../assets/mago.png";
import strawberry from "../assets/strawberry.png";
import vanilla from "../assets/vanilla.png";
import bg from "../assets/bg.jpeg";

function Categories() {
  return (
    <div className="bg-[#F6F1E9] min-h-screen py-10">

    
      <section>
        <div className="p-6 md:p-12 lg:p-20 bg-purple-200 rounded-tl-4xl rounded-br-3xl relative overflow-hidden mx-4 md:mx-8">
          <img
            src={bg}
            alt="background"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />

          <p
            data-aos="zoom-in"
            className="relative text-center text-base md:text-lg lg:text-xl leading-relaxed"
          >
            Experience a new way to enjoy ice cream. Crafted with carefully
            selected ingredients, our ice cream contains beneficial prebiotics
            and probiotics that support digestive wellness. Free from added
            sugar and artificial flavors, it delivers pure taste and creamy
            goodness in every bite.
          </p>
        </div>
      </section>

      
      <h1 className="text-3xl md:text-4xl font-bold text-center mt-12">
        Categories
      </h1>

      
      <div className="max-w-7xl mx-auto mt-12 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

              <div
          className="rounded-xl p-5 text-center shadow-lg bg-white"
          data-aos="zoom-in"
        >
          <img
            src={chocolate}
            alt="Chocolate Ice Cream"
            className="w-full h-48 md:h-56 object-cover rounded-lg"
          />

          <p className="mt-4 text-xl font-semibold">
            Chocolate 🍫
          </p>

          <p className="mt-3 text-gray-700">
            Our Chocolate Flavour Ice Cream is a rich and creamy delight made
            for true chocolate lovers. Crafted with premium cocoa, it offers a
            smooth texture and deep chocolate taste in every scoop.
          </p>
        </div>

        
        <div
          className="rounded-xl p-5 text-center shadow-lg bg-white"
          data-aos="zoom-in"
        >
          <img
            src={mango}
            alt="Mango Ice Cream"
            className="w-full h-48 md:h-56 object-cover rounded-lg"
          />

          <p className="mt-4 text-xl font-semibold">
            Mango 🥭
          </p>

          <p className="mt-3 text-gray-700">
            Our Mango Flavour Ice Cream combines creamy texture with the sweet,
            tropical taste of ripe mangoes. Every scoop delivers a refreshing
            burst of fruity flavor.
          </p>
        </div>

        
        <div
          className="rounded-xl p-5 text-center shadow-lg bg-white"
          data-aos="zoom-in"
        >
          <img
            src={vanilla}
            alt="Vanilla Ice Cream"
            className="w-full h-48 md:h-56 object-cover rounded-lg"
          />

          <p className="mt-4 text-xl font-semibold">
            Vanilla 🍦
          </p>

          <p className="mt-3 text-gray-700">
            Our Vanilla Flavour Ice Cream is a timeless classic with a rich,
            creamy texture and smooth vanilla taste. Simple, delicious, and
            satisfying for every occasion.
          </p>
        </div>

        
        <div
          className="rounded-xl p-5 text-center shadow-lg bg-white"
          data-aos="zoom-in"
        >
          <img
            src={strawberry}
            alt="Strawberry Ice Cream"
            className="w-full h-48 md:h-56 object-cover rounded-lg"
          />

          <p className="mt-4 text-xl font-semibold">
            Strawberry 🍓
          </p>

          <p className="mt-3 text-gray-700">
            Our Strawberry Flavour Ice Cream combines creamy goodness with the
            sweet taste of fresh strawberries. Every scoop is refreshing,
            smooth, and full of fruity flavor.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Categories;