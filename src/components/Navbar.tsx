import Image from "next/image";
import logo from "../../public/navbar-images/header-logo.png";
import search from "../../public/navbar-images/search-icon.png";
import country from "../../public/navbar-images/united kingdom.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="flex mx-10 py-3 items-center justify-between">
          <Image src={logo} alt="logo"></Image>
          <div className="flex">
            <ul className="flex font-semibold list-none">
              <li className="px-10 text-primary border-r border-r-black">
                <Link href="/">HOME</Link>
              </li>
              <li className="px-10 border-r border-r-black">
                <Link href="/">INTRODUCE</Link>
              </li>
              <li className="px-10 border-r border-r-black">
                <Link href="/">PRODUCTS</Link>
              </li>
              <li className="px-10 border-r border-r-black">
                <Link href="/">NEWS</Link>
              </li>
              <li className="px-10 border-r border-r-black">
                <Link href="/">CONTACT</Link>
              </li>
              <li className="px-10">
                <Link href="/">DOCUMENTS</Link>
              </li>
            </ul>
            <Image className="mx-2" src={search} alt="search-icon"></Image>
            <Image
              className="py-3 ml-4 mr-1"
              src={country}
              alt="country-flag"
            ></Image>
            <select name="language-selector">
              <option selected value="english">
                English
              </option>
              <option value="hindi">Hindi</option>
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
