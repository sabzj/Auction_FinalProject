//

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "../../hooks/userLogin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Call the useLogin custom hook to handle the login process
  const { login, error, loading, success } = useLogin(
    "https://new-auction-api.onrender.com/api/users/login "
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };
    // Call the login function from the useLogin hook
    // to send the user's credentials to the server
    login(email, password, "/");
    console.log(email, password);
  };

  // }

  // return (
  //   <div className="w-full">
  //     <form
  //       className="max-w-lg p-12 m-auto rounded-xl bg-white"
  //       onSubmit={handleSubmit}
  //     >
  //       {error && (
  //         <div className="text-center mb-2">
  //           {" "}
  //           <h1 className="text-red-600 text-2xl">
  //             Wrong Login information
  //           </h1>{" "}
  //         </div>
  //       )}
  //       <div className="text-center mb-14">
  //         <h1 className="text-gray-900 text-4xl">Sign in</h1>
  //       </div>

  //       <div className="mb-6">
  //         <label
  //           htmfor="email"
  //           className="block mb-2 text-sm font-medium text-gray-900 "
  //         >
  //           email
  //         </label>
  //         <input
  //           onChange={(e) => setUserName(e.target.value)}
  //           type="useremail"
  //           id="useremail"
  //           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
  //           placeholder="tunahangediz"
  //           required
  //         />
  //       </div>
  //       <div className="mb-6">
  //         <label
  //           htmfor="password"
  //           className="block mb-2 text-sm font-medium text-gray-900 "
  //         >
  //           password
  //         </label>
  //         <input
  //           onChange={(e) => setPassword(e.target.value)}
  //           type="password"
  //           id="password"
  //           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
  //           required
  //           placeholder="********"
  //         />
  //       </div>
  //       <button
  //         type="submit"
  //         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
  //       >
  //         Submit
  //       </button>
  //       <p className="text-gray-500 mt-6">
  //         You don't have an account{" "}
  //         <Link className="text-blue-500 hover:text-blue-700" to="/register">
  //           Register
  //         </Link>
  //       </p>
  //     </form>
  //   </div>
  // );

  //   return (
  //     <div
  //       className="bg-image"
  //       style={{
  //         backgroundImage: "url(https://i.postimg.cc/13pssvxG/bg-image.png)",
  //       }}
  //     >
  //       <div className="backdrop" style={{ backdropFilter: "blur(2px)" }}>
  //         <div className="h-screen w-full flex justify-center items-center bg-gradient-to-tr from-blue-900 to-blue-500">
  //           <div className="bg-image w-full sm:w-1/2 md:w-9/12 lg:w-1/2 mx-3 md:mx-5 lg:mx-0 shadow-md flex flex-col md:flex-row items-center rounded z-10 overflow-hidden bg-center bg-cover bg-blue-600">
  //             <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-opacity-25 bg-blue-600 backdrop">
  //               <h1 className="text-3xl md:text-4xl font-extrabold text-white my-2 md:my-0">
  //                 HartDev
  //               </h1>
  //               <p className="mb-2 text-white hidden md:block font-mono">
  //                 search a new somethings
  //               </p>
  //             </div>
  //             <div className="w-full md:w-1/2 flex flex-col items-center bg-white py-5 md:py-8 px-4">
  //               <h3 className="mb-4 font-bold text-3xl flex items-center text-blue-500">
  //                 LOGIN
  //               </h3>
  //               <form
  //                 action="#"
  //                 className="px-3 flex flex-col justify-center items-center w-full gap-3"
  //                 onSubmit={handleSubmit}
  //               >
  //                 <input
  //                   type="email"
  //                   placeholder="email.."
  //                   className="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
  //                 />
  //                 <input
  //                   type="password"
  //                   placeholder="password.."
  //                   className="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
  //                 />
  //                 <button className="flex justify-center items-center bg-blue-500 hover:bg-blue-600 text-white focus:outline-none focus:ring rounded px-3 py-1">
  //                   <svg
  //                     className="w-5 h-5 inline"
  //                     fill="none"
  //                     stroke="currentColor"
  //                     viewBox="0 0 24 24"
  //                     xmlns="http://www.w3.org/2000/svg"
  //                   >
  //                     <path
  //                       strokeLinecap="round"
  //                       strokeLinejoin="round"
  //                       strokeWidth="2"
  //                       d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
  //                     ></path>
  //                   </svg>
  //                   <p className="ml-1 text-lg">Login</p>
  //                 </button>
  //               </form>
  //               <p className="text-gray-700 text-sm mt-2">
  //                 don't have an account?
  //                 <a
  //                   href="#"
  //                   className="text-green-500 hover:text-green-600 mt-3 focus:outline-none font-bold underline"
  //                 >
  //                   register
  //                 </a>
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div
      className="bg-image"
      style={{
        backgroundImage: "url(https://i.postimg.cc/13pssvxG/bg-image.png)",
      }}
    >
      <div className="backdrop" style={{ backdropFilter: "blur(2px)" }}>
        <div className="h-screen w-full flex justify-center items-center bg-gradient-to-tr from-blue-900 to-blue-500">
          <div className="bg-image w-full sm:w-1/2 md:w-9/12 lg:w-1/2 mx-3 md:mx-5 lg:mx-0 shadow-md flex flex-col md:flex-row items-center rounded z-10 overflow-hidden bg-center bg-cover bg-blue-600">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-opacity-25 bg-blue-600 backdrop">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white my-2 md:my-0">
                HartDev
              </h1>
              <p className="mb-2 text-white hidden md:block font-mono">
                search a new somethings
              </p>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center bg-white py-5 md:py-8 px-4">
              <h3 className="mb-4 font-bold text-3xl flex items-center text-blue-500">
                LOGIN
              </h3>
              <form
                action="#"
                className="px-3 flex flex-col justify-center items-center w-full gap-3"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
                />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-4 py-2 w-full rounded border border-gray-300 text-base placeholder-gray-500 placeholder-opacity-50 shadow-sm focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={() => {
                    login(email, password, "/");
                    // !error && navigate("/");
                  }}
                  className="flex justify-center items-center bg-blue-500 hover:bg-blue-600 text-white focus:outline-none focus:ring rounded px-3 py-1"
                >
                  <svg
                    className="w-5 h-5 inline"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    ></path>
                  </svg>
                  <p className="ml-1 text-lg">Login</p>
                </button>
              </form>
              <p className="text-gray-700 text-sm mt-2">
                Don't have an account?
                <Link
                  to="/register"
                  className="text-green-500 hover:text-green-600 mt-3 focus:outline-none font-bold underline"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
