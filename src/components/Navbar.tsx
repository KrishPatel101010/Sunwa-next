import Image from "next/image";
import Link from "next/link";
import cart from "../../public/navbar-images/cart.png";
import logo from "../../public/navbar-images/header-logo.png";
import home from "../../public/navbar-images/house.png";
import invoice from "../../public/navbar-images/invoice.png";
import menu from "../../public/navbar-images/menu.png";
import search from "../../public/navbar-images/search-icon.png";
import country from "../../public/navbar-images/united kingdom.png";

const Navbar = () => {
  return (
    <header>
      <nav className="border-b-3 border-b-gray-100 w-full overflow-hidden">
        {/* Upper Nav */}
        <div className="flex flex-col lg:flex-row mx-5 lg:mx-10 py-3 lg:items-center justify-between">
          <Image src={logo} alt="logo" className="flex self-center"></Image>
          <div className="flex">
            <ul className="flex flex-col lg:flex-row self-center font-semibold list-none">
              <li className="lg:px-10 text-primary lg:border-r border-r-black">
                <Link href="/">HOME</Link>
              </li>
              <li className="lg:px-10 lg:border-r border-r-black">
                <Link href="/">INTRODUCE</Link>
              </li>
              <li className="lg:px-10 lg:border-r border-r-black">
                <Link href="/">PRODUCTS</Link>
              </li>
              <li className="lg:px-10 lg:border-r border-r-black">
                <Link href="/">NEWS</Link>
              </li>
              <li className="lg:px-10 lg:border-r border-r-black">
                <Link href="/">CONTACT</Link>
              </li>
              <li className="lg:px-10">
                <Link href="/">DOCUMENTS</Link>
              </li>
            </ul>
            <Image
              src={search}
              alt="search-icon"
              className="hidden lg:inline"
            ></Image>
            <Image
              className="py-3 ml-4 mr-1 hidden lg:inline"
              src={country}
              alt="country-flag"
            ></Image>
            <select name="language-selector" className="hidden lg:inline">
              <option defaultValue="english" value="english">
                English
              </option>
              <option value="hindi">Hindi</option>
            </select>
          </div>
        </div>
        {/* Lower nav */}
        <div className="flex my-2 justify-between lg:mx-7">
          <div className="flex gap-2">
            <div className="flex self-center mx-3 py-3.5 px-3 lg:pr-40 bg-gray-100 font-bold text-gray-600">
              <Image className="mx-1" src={menu} alt="menu-icon"></Image>
              <span className="hidden lg:inline">CATEGORY</span>
            </div>
            <div className="lg:flex self-center hidden">
              <Image src={home} alt="home-icon"></Image>
              <span className="text-gray-500">Home</span>
            </div>
          </div>
          <div className="flex px-2 font-medium gap-5">
            <div className="flex gap-2 self-center">
              <Image src={invoice} alt="invoice-icon"></Image>
              <span className="self-center hidden lg:inline">
                Request a quote
              </span>
            </div>
            <div className="flex gap-2 self-center">
              <Image src={cart} alt="cart-icon"></Image>
              <span className="self-center hidden lg:inline">Cart</span>
            </div>
            <button type="button">Login</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
