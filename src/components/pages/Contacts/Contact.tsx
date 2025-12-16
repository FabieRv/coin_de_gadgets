import Button from "../../common/Button"
import Container from "../../common/Container"
import { FaRunning, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

function Contact() {
  const iconStyle = "text-white text-3xl"
  const infoBlockClasses =
    "flex flex-col items-center text-center p-6 space-y-3"

  return (
    <div className="relative ">
      <div className="absolute w-full h-[200px] left-0 bottom-0 bg-[#145aaf]"></div>
      <Container>
        {" "}
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl font-bold text-gray-800">Contactez-nous</h1>
          <p className="text-lg text-gray-700 text-center px-4  font-lato">
            Des questions ou des remarques?
          </p>
          <p className="text-lg text-gray-700 text-center px-4  font-lato">
            {" "}
            Écrivez-nous simplement un message !
          </p>
        </div>
        <form className="max-w-xl mx-auto space-y-4 mt-4">
          <div className="flex flex-col md:flex-row justify-between gap-4 ">
            <div className="flex flex-col w-full md:w-1/2 gap-2 mt-2">
              {/* Input Name */}
              <label htmlFor="">name</label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="p-3 bg-gray-100 rounded-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#50b4b4]"
              />
            </div>
            {/* Input email*/}
            <div className="flex flex-col w-full md:w-1/2 gap-2 mt-2">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Enter a valid email address"
                className="p-3 bg-gray-100 rounded-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#50b4b4]"
              />
            </div>
          </div>

          {/* Bouton Soumettre */}
          <div className="flex justify-center">
            <Button
              label="  SOUMETTRE"
              className="w-full md:w-full py-3 text-lg font-semibold "
            ></Button>
          </div>
        </form>
        <div className="bg-gray-100 mt-12 py-10">
          <div className="flex flex-col md:flex-row justify-evenly items-start">
            <div className={infoBlockClasses}>
              <div className="bg-primary p-4 rounded-full">
                <FaRunning className={iconStyle} />
              </div>
              <h2 className="text-xl font-bold uppercase font-Montser text-gray-800">
                À PROPOS DU CLUB
              </h2>
              <div className="text-gray-600">
                <p>Vente de produits</p>
                <p>Reduction livraison +50%</p>
              </div>
            </div>

            {/* Bloc 2: TÉLÉPHONE (FIXE) */}
            <div className={infoBlockClasses}>
              <div className="bg-primary p-4 rounded-full">
                <FaPhone className={iconStyle} />
              </div>
              <h2 className="text-xl font-bold uppercase font-Montser text-gray-800">
                TÉLÉPHONE (FIXE)
              </h2>
              <div className="text-gray-600">
                <p>+264 35 2657 8987</p>
                <p>+ 2 262 3336</p>
              </div>
            </div>

            {/* Bloc 3: EMPLACEMENT DE NOTRE BUREAU */}
            <div className={infoBlockClasses}>
              <div className="bg-primary p-4 rounded-full">
                <FaMapMarkerAlt className={iconStyle} />
              </div>
              <h2 className="text-xl font-bold uppercase font-Montser text-gray-800">
                ADRESSE DE NOTRE BUREAU
              </h2>
              <div className="text-gray-600 text-sm">
                <p>Gadgets online</p>
                <p>Sabotsy Namehana local</p>
                <p>Antananarivo, 101</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Contact
