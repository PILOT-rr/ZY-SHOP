import { FaMobileAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
  FaLocationArrow,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-900">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              ZY-Shop
            </a>
            <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
              Since <b>2013</b>, we have been providing you with the best{" "}
              <b>quality</b>.
            </p>
            <p className="text-gray-500 mt-4">
              We are not <b>alone</b>, but we are the <b>best</b>.
            </p>
            <a
              href=""
              target="_blank"
              className="flex bg-primary/90 text-white py-2 px-6 mt-4 text-sm rounded-full items-center  hover:text-black"
              style={{
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                maxWidth: "280px",
              }}
            >
              <span>Visit My WhatsApp Channel</span>
              <FaWhatsapp className="text-3xl  duration-200 ml-2" />
            </a>
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 ">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto ">
              <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>
                    {" "}
                    <a href="https://www.google.com/maps/@34.0265932,-4.9783366,17.43z?entry=ttu">
                      Fes, Maroc
                    </a>
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+212601727109</p>
                </div>

                {/* Social links */}
                <div className="flex items-end gap-3 mt-6 ">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="#">
                    <FaGithub className="text-3xl hover:text-primary duration-200" />
                  </a>
                </div>
              </div>
            </div>

            <div className="py-8 px-4 col-span-2 sm:col-auto ">
              <h1 className="text-xl font-bold sm:text-left mb-3">Mail</h1>
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex items-end gap-3 mt-4">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="border border-gray-300 rounded px-3 py-2  text-black focus:outline-none focus:border-primary"
                      style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}
                    />
                    <button className="bg-primary text-white px-4 py-2 rounded hover:text-black transition-colors duration-300">
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center py-4  bg-gray-200 dark:bg-white/10 dark:text-white  text-black">
        All rights reserved by <b>ZY-SHOP</b> &copy;{new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Footer;
