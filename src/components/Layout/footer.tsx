import { Link } from "react-router-dom"
import Button from "../common/Button"
import Container from "../common/Container"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

function Footer() {
  return (
    <div>
      <div className="bg-[#145aaf] text-white font-Montser">
        <Container
          tag="footer"
          className="flex flex-col lg:flex-row justify-between lg:py-10"
        >
          <div className="w-full">
            <h2 className="text-xl font-semibold">Subscribe Our Newsletter</h2>
            <form className="mt-6 w-full md:w-2/3 lg:w-1/2 flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="py-3 px-4 rounded  w-full bg-zinc-100 text-black"
              />

              <Button label="Submit" className="py-3 px-6 sm:w-auto w-full" />
            </form>
          </div>
        </Container>
      </div>

      <div className="bg-[#145aaf] text-white">
        <Container className=" font-Montser  lg:py-2!">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 pb-4">
            <div className="gap-4">
              <Link to={"/"}>
                <img
                  src="/public/images/logo-2.png"
                  alt="logo"
                  className="w-16 h-16 object-cover rounded border-b-blue-400 bg-[#cbe2e2] m-1"
                />
              </Link>
              <p className="items-center font-lato text-sm w-[250px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur molestias quisquam distinctio reiciendis facere id ex
                sint nihil.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Facebook
                  size={25}
                  className="bg-white text-black rounded-md"
                />
                <Twitter size={25} className="bg-white text-black rounded-md" />
                <Youtube size={25} className="bg-white text-black rounded-md" />
                <Instagram
                  size={25}
                  className="bg-white text-black rounded-md"
                />
              </div>
            </div>

            <div>
              <h1 className="font-semibold mb-2 text-2xl font-Montser">
                Pages
              </h1>
              <ul className="font-lato text-sm">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/product">Products</Link>
                </li>
                <li>
                  <Link to="/galery">Galery</Link>
                </li>
                <li>
                  <Link to="/fqa"> FQA</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-semibold mb-2 text-2xl font-Montser">
                Category
              </h1>
              <div className="font-lato! text-sm! gap-2!">
                <ul>
                  <li>
                    <Link to="/">Monitors</Link>
                  </li>
                  <li>
                    <Link to="/about">GPUs</Link>
                  </li>
                  <li>
                    <Link to="/product">Power Supply</Link>
                  </li>
                  <li>
                    <Link to="/galery">Lapttops</Link>
                  </li>
                  <li>
                    <Link to="/galery">Scooter</Link>
                  </li>
                  <li>
                    <Link to="/galery">Babilyss</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="font-lato">
              <h1 className="font-semibold mb-2 text-2xl font-Montser">
                Contact
              </h1>
              <p className="font-lato">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
              </p>
              <p className="font-lato">+261 32 08 785 89</p>
              <p className="font-lato">+261 34 08 785 89</p>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-[#50B4B4] p-2 ">
        <Container className="py-0! text-white  text-center">
          <p className="font-Montser">
            Copyright &copy;2025 <span className="font-bold ">Fabie Rav</span>{" "}
          </p>
        </Container>
      </div>
    </div>
  )
}

export default Footer
