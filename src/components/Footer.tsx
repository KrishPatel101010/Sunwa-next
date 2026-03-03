import Image from "next/image";
import Link from "next/link";
import Giới_thiệu from "../../public/footer-images/founders-names-images/Giới thiệu.png";
import Liên_hệ from "../../public/footer-images/founders-names-images/Liên hệ.png";
import Sản_phẩm from "../../public/footer-images/founders-names-images/Sản phẩm.png";
import Tin_tức from "../../public/footer-images/founders-names-images/Tin tức.png";
import Trang_chủ from "../../public/footer-images/founders-names-images/Trang chủ.png";
import tài_liệu from "../../public/footer-images/founders-names-images/tài liệu.png";
import facebook from "../../public/footer-images/socials-images/Facebook.png";
import flickr from "../../public/footer-images/socials-images/Flickr.png";
import twitter from "../../public/footer-images/socials-images/Twitter.png";
import youtube from "../../public/footer-images/socials-images/Youtube.png";
import logo from "../../public/navbar-images/header-logo.png";

const companies = [
  { name: "Taiyo Cabletec" },
  { name: "Nichikon" },
  { name: "Nichikon" },
  { name: "Stanley" },
  { name: "Pro-face" },
  { name: "Pro-face" },
];

const categories = [
  "Robot cables",
  "Equipment cables",
  "General-purpose cables",
  "Others",
];

const policies = [
  { label: "Privacy Policy", href: "/" },
  { label: "Warranty Policy", href: "/" },
  { label: "Shipping / Installation Policy", href: "/" },
  { label: "Return / Refund Policy", href: "/" },
];

const socialLinks = [
  { src: youtube, alt: "youtube-logo", href: "/" },
  { src: facebook, alt: "facebook-logo", href: "/" },
  { src: flickr, alt: "flickr-logo", href: "/" },
  { src: twitter, alt: "twitter-logo", href: "/" },
];

const founders = [
  { src: Trang_chủ, alt: "Trang chủ" },
  { src: Giới_thiệu, alt: "Giới thiệu" },
  { src: Sản_phẩm, alt: "Sản phẩm" },
  { src: Tin_tức, alt: "Tin tức" },
  { src: Liên_hệ, alt: "Liên hệ" },
  { src: tài_liệu, alt: "tài liệu" },
];

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col mx-10 lg:flex-row gap-10 lg:mx-20">
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
          <div className="my-5">
            <Image src={logo} alt="logo"></Image>
          </div>
        </div>
        <div className="flex flex-2 flex-col">
          <span className="text-lg pb-2 font-semibold text-gray-600 border-b-2 border-b-gray-200">
            PRODUCTS
          </span>
          <div className="grid grid-cols-3 gap-2 mt-3 grid-rows-2">
            {companies.map((company, index) => (
              <ul key={index} className="flex flex-col list-disc pl-5">
                <li className="font-bold">{company.name}</li>

                {categories.map((item, idx) => (
                  <li key={idx} className="text-gray-400 list-none ml-4">
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <span className="text-lg pb-2 font-semibold text-gray-600 border-b-2 border-b-gray-200">
            POLICY
          </span>
          <div className="flex flex-1 justify-between flex-col">
            <div className="flex flex-col gap-2 mt-3 text-gray-400">
              {policies.map((policy, index) => (
                <Link key={index} href={policy.href}>
                  {policy.label}
                </Link>
              ))}
            </div>
            <div className="flex gap-2 pb-5">
              {socialLinks.map((social) => (
                <Link key={social.alt} href={social.href}>
                  <Image src={social.src} alt={social.alt} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-10 lg:h-7 bg-gray-200 flex justify-between items-center px-5 lg:px-20">
        <div className="text-sm text-gray-600">
          <span>© Copyright 2022 - Sunwa.com.vn - Designed by Webico</span>
        </div>
        <div className="lg:flex hidden gap-7">
          {founders.map((founder) => (
            <div key={founder.alt}>
              <Image src={founder.src} alt={founder.alt} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
