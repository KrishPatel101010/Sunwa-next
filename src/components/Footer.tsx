import Image from "next/image";
import Link from "next/link";
import founder2 from "../../public/footer-images/founders-names-images/Giới thiệu.png";
import founder5 from "../../public/footer-images/founders-names-images/Liên hệ.png";
import founder3 from "../../public/footer-images/founders-names-images/Sản phẩm.png";
import founder4 from "../../public/footer-images/founders-names-images/Tin tức.png";
import founder1 from "../../public/footer-images/founders-names-images/Trang chủ.png";
import founder6 from "../../public/footer-images/founders-names-images/tài liệu.png";
import facebook from "../../public/footer-images/socials-images/Facebook.png";
import flickr from "../../public/footer-images/socials-images/Flickr.png";
import twitter from "../../public/footer-images/socials-images/Twitter.png";
import youtube from "../../public/footer-images/socials-images/Youtube.png";
import logo from "../../public/navbar-images/header-logo.png";
// import list from "../../public/footer-images/list-style.png";

const Footer = () => {
  return (
    <footer>
      <div className="flex gap-10 mx-20">
        <div className="flex flex-1 flex-col gap-2">
          <span className="text-lg pb-2 font-semibold text-gray-600 border-b-2 border-b-gray-200">
            SUN-WA TECHNOS (VIETNAM) CO., LTD
          </span>
          <ul className="list-disc mt-3">
            <li className="font-bold">
              HA NOI
              <p className="text-gray-400 font-normal text-sm">
                12Ath floor, B Tower, Handiresco Building, 521 Kim Ma, Ba Dinh,
                Hanoi, Vietnam <br /> <b>+ Tel:</b> 024.38566688
              </p>
            </li>
          </ul>
          <ul className="list-disc">
            <li className="font-bold">
              HO CHI MINH
              <p className="text-gray-400 font-normal text-sm">
                25th Floor, Lim Tower,9-11 Ton Duc Thang Str., Ben Nghe Ward,1St
                Dist., Ho Chi Minh City, Viet Nam <br /> <b>+ Tel:</b>{" "}
                024.38566688
              </p>
            </li>
          </ul>
          <div>
            <Image src={logo} alt="logo"></Image>
          </div>
        </div>
        <div className="flex flex-2 flex-col">
          <span className="text-lg pb-2 font-semibold text-gray-600 border-b-2 border-b-gray-200">
            PRODUCTS
          </span>
          <div className="grid grid-cols-3 gap-2 mt-3 grid-rows-2">
            <ul className="flex flex-col list-disc">
              <li className="font-bold">Taiyo Cabletec</li>
              <div className="flex flex-col text-gray-400">
                <span>Robot cables</span>
                <span>Equipment cables</span>
                <span>General-purpose cables</span>
                <span>Others</span>
              </div>
            </ul>
            <ul className="flex flex-col list-disc">
              <li className="font-bold">Nichikon</li>
              <div className="flex flex-col text-gray-400">
                <span>Robot cables</span>
                <span>Equipment cables</span>
                <span>General-purpose cables</span>
                <span>Others</span>
              </div>
            </ul>
            <ul className="flex flex-col list-disc">
              <li className="font-bold">Nichikon</li>
              <div className="flex flex-col text-gray-400">
                <span>Robot cables</span>
                <span>Equipment cables</span>
                <span>General-purpose cables</span>
                <span>Others</span>
              </div>
            </ul>
            <ul className="flex flex-col list-disc">
              <li className="font-bold">Stanley</li>
              <div className="flex flex-col text-gray-400">
                <span>Robot cables</span>
                <span>Equipment cables</span>
                <span>General-purpose cables</span>
                <span>Others</span>
              </div>
            </ul>
            <ul className="flex flex-col list-disc">
              <li className="font-bold">Pro-face</li>
              <div className="flex flex-col text-gray-400">
                <span>Robot cables</span>
                <span>Equipment cables</span>
                <span>General-purpose cables</span>
                <span>Others</span>
              </div>
            </ul>
            <ul className="flex flex-col list-disc">
              <li className="font-bold">Pro-face</li>
              <div className="flex flex-col text-gray-400">
                <span>Robot cables</span>
                <span>Equipment cables</span>
                <span>General-purpose cables</span>
                <span>Others</span>
              </div>
            </ul>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <span className="text-lg pb-2 font-semibold text-gray-600 border-b-2 border-b-gray-200">
            POLICY
          </span>
          <div className="flex flex-1 justify-between flex-col">
            <div className="flex flex-col gap-2 mt-3 text-gray-400 ">
              <Link href={"/"}>Privacy Policy</Link>
              <Link href={"/"}>Warranty Policy</Link>
              <Link href={"/"}>Shipping / Installation Policy</Link>
              <Link href={"/"}>Return / Refund Policy</Link>
            </div>
            <div className="flex gap-2 pb-5">
              <Link href={"/"}>
                <Image src={youtube} alt="youtube-logo" />
              </Link>
              <Link href={"/"}>
                <Image src={facebook} alt="facebook-logo" />
              </Link>
              <Link href={"/"}>
                <Image src={flickr} alt="flickr-logo" />
              </Link>
              <Link href={"/"}>
                <Image src={twitter} alt="twitter-logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-7 bg-gray-200 flex justify-between items-center px-20">
        <div className="text-sm text-gray-600">
          <span>© Copyright 2022 - Sunwa.com.vn - Designed by Webico</span>
        </div>
        <div className="flex  gap-7">
          <div>
            <Image src={founder1} alt="fouder1"></Image>
          </div>

          <div>
            <Image src={founder2} alt="fouder2"></Image>
          </div>

          <div>
            <Image src={founder3} alt="fouder3"></Image>
          </div>

          <div>
            <Image src={founder4} alt="fouder4"></Image>
          </div>

          <div>
            <Image src={founder5} alt="fouder5"></Image>
          </div>

          <div>
            <Image src={founder6} alt="fouder6"></Image>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
