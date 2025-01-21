import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link, animateScroll as scroll } from "react-scroll";
import bg from '../assets/images/bg.jpeg'
const Header = () => {
  const [text] = useTypewriter({
    words: [" Furniture", " Comfort"],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div
      className="bg-[url('https://images.unsplash.com/photo-1616440537338-1d04df3987f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center min-h-[50vh] w-full font-figtree"
      style={{ backgroundImage: `url(${bg})` }}
      id="header"
    >
      <div className="flex w-full min-h-[50vh] items-center justify-center bg-gradient-to-t from-black/25 via-black/75 to-black/80">
        <div className="flex flex-col justify-center items-center py-40">
          <div className="flex items-center justify-center ">
            <p className="text-xl md:text-4xl font-extrabold font-signika text-white">
              Crafting Unforgettable
              <span className="text-xl md:text-4xl font-extrabold font-signika text-white">
                {text}
              </span>
              <Cursor />
            </p>
          </div>
          <div className="flex w-full items-center justify-center pt-4">
            <p className="text-center text-sm text-white font-normal">
              "A clutted furniture is a cluttered mind"
            </p>
          </div>
          <div className="flex items-center justify-end pt-2">
            <p className="text-end text-xs text-white font-normal">- unknown</p>
          </div>
          <div className="w-full flex items-center justify-center pt-8">
            <Link
              className="bg-[#2f2f2f] py-2 px-6 text-sm text-white font-semibold rounded hover:bg-[#faffff] hover:text-[#2f2f2f] ease-in-out duration-700 cursor-pointer"
              to="mice"
              smooth={true}
              offset={-60}
              duration={500}
            >
              Explore.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
