import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import { NavLink, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const navigation = [
    { label: "Go to Home", href: "/" },
    { label: "TV Shows", },
    { label: "Movies", },
  ];

  useEffect(() => {
    const handleSearch = setTimeout(() => {
      if (searchInput) {
        navigate(`/search?q=${searchInput}`);
      }
    }, 200); 

    return () => clearTimeout(handleSearch);
  }, [searchInput, navigate]);

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };

  return (
    <header className="flex items-center justify-between fixed top-0 w-full h-16 bg-header bg-opacity-75 p-4">
      <div className="flex items-center">
        <img src={logo} alt="logo" width={100} />
      </div>
      <div className="flex flex-1 justify-center items-center md:ml-auto md:mr-auto">
        <BsSearch className="text-white mr-2" />
        <div className="border border-white rounded-full">
          <input
            type="text"
            placeholder="Search for movies and TV shows"
            className="bg-transparent border-none text-white outline-none placeholder-white px-4 py-1 rounded-full"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
        </div>
      </div>
      
      <div className="flex items-center ml-4 md:ml-auto">
        {navigation.map((nav, index) => (
          <NavLink
            key={index}
            to={nav.href}
            className="text-white hover:text-neutral-300 ml-4 md:ml-0 px-2 hidden md:inline-block"
          >
            {nav.label}
          </NavLink>
        ))}
        <div
          className={`px-5 cursor-pointer ${isClicked ? "scale-90" : ""}`}
          onClick={handleClick}
        >
          <img
            src={profile}
            alt="profile"
            width={30}
            height={20}
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
        <div className="flex items-center ml-4">
          <FiShoppingCart className="text-white mr-2" />
        </div>
      </div>
    </header>
  );
};

export default Header;
