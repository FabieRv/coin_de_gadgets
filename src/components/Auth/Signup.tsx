import { useState } from "react"
import Container from "../common/Container"

function Signup() {
  const [isLoginMode, setIsLoginMode] = useState(false)
  return (
    <div className="bg-zinc-100">
      <Container className="flex justify-center w-full h-full">
        <div className="grid place-items-center w-[530px] bg-transparent rounded-3xl shadow-2xl  p-4">
          <div className="flex justify-center mb-4">
            <h2 className=" text-3xl text-center ">
              {isLoginMode ? "Login" : "Signup"}
            </h2>
          </div>
          <div className="relative flex  m-4 w-[200px] border border-[#50B4B4] rounded-full">
            {/* Bouton Login */}
            <button
              className={`w-1/2 text-lg font-medium transition-all z-10 ${
                isLoginMode ? "text-white" : "text-black"
              }`}
              onClick={() => {
                setIsLoginMode(true)
              }}
            >
              Login
            </button>
            {/* Bouton Signup */}
            <button
              onClick={() => setIsLoginMode(false)}
              className={`w-1/2 text-lg font-medium transition-all z-10 ${
                !isLoginMode ? "text-white" : "text-black"
              }`}
            >
              Signup
            </button>

            <div
              // MODIFICATION ICI : Remplacement du dégradé par la couleur unie
              className={`absolute top-0 h-full w-1/2 rounded-full bg-[#50B4B4] ${
                isLoginMode ? "left-0" : "left-1/2"
              }`}
            ></div>
          </div>
          <div>
            <form className="space-y-4">
              {!isLoginMode && (
                <input
                  placeholder="Name"
                  required
                  className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-100"
                />
              )}
              <input
                type="email"
                placeholder="Email Adress"
                required
                className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-100"
              />
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-100"
              />
              {!isLoginMode && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-100"
                />
              )}
              {isLoginMode && (
                <div className="text-right">
                  <p className="text-blue-600 hover:underline">
                    Forgot Password
                  </p>
                </div>
              )}
              <button className="w-full p-3  from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium opacity-90 transition">
                {isLoginMode ? "Login" : "Signup"}
              </button>

              {/*switch text*/}
              <div className="flex justify-center gap-2">
                <p className="text-center text-gray-600">
                  {isLoginMode
                    ? "Don't have an  account"
                    : "Already have acount"}
                </p>
                <a
                  href="#"
                  onClick={() => setIsLoginMode(!isLoginMode)}
                  className="text-blue-700"
                >
                  {isLoginMode ? "Singup " : "Login"}
                </a>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Signup
