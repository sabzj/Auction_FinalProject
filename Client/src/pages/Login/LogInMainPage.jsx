// import React, { useState } from "react";
// import "./LoginMainPage.css";
// import { ScaleLoader } from "react-spinners";
// import { useNavigate } from "react-router-dom";
// import { useUser } from "./UseUserManage";

// const LogInMainPage = () => {
//   const form = [
//     {
//       type: "text",
//       placeholder: "Username",
//       value: "",
//       error: false,
//     },
//     {
//       type: "password",
//       placeholder: "Password",
//       value: "",
//       error: false,
//     },
//   ];
//   const { user, setUser } = useUser();
//   const [inputValues, setInputValues] = useState(form);

//   const handleSubmit = () => {
//     const userMatch = user.find((u) => {
//       return (
//         u.username === inputValues[0].value &&
//         u.password === inputValues[1].value
//       );
//     });

//     if (userMatch) {
//       setUser(userMatch);
//     } else {
//       setUser({});
//       setInputValues([
//         { ...inputValues[0], error: true },
//         { ...inputValues[1], error: true },
//       ]);
//     }
//   };

//   let navigate = useNavigate();

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         handleSubmit();
//       }}
//     >
//       <div id="LoginPage">
//         {inputValues.map((value, index) => (
//           <div key={index}>
//             <input
//               type={value.type}
//               placeholder={value.placeholder}
//               value={value.value}
//               onChange={(e) =>
//                 setInputValues(
//                   inputValues.map((val, i) =>
//                     i === index
//                       ? { ...val, value: e.target.value, error: false }
//                       : val
//                   )
//                 )
//               }
//             />

//             {value.error && <p id="error">{value.error}</p>}
//           </div>
//         ))}
//         <button type="submit">LogIn</button>

//         {user.username && (
//           <div className="spinner">
//             Login successful
//             <div id="spinner-loading">
//               <ScaleLoader />{" "}
//             </div>
//             {setTimeout(() => {
//               navigate(`/`, { state: { user } });
//             }, 1000)}
//           </div>
//         )}
//       </div>
//     </form>
//   );
// };

// export default LogInMainPage;

// new blue card code//
import React, { useState } from "react";
import "./LogInMainPage.css";
import useAxios from "../../hooks/useAxios";
import { useNavigate } from "react-router-dom";

function SignInForm({ email, password }) {
  const [userEmail, setUserEmail] = useState("");
  const [userpassword, setuserPassword] = useState("");
  const [userFound, setUserFound] = useState([]);
  const { data } = useAxios(
    "https://65802fc36ae0629a3f548fbb.mockapi.io/auction/user"
  );

  const navigate = useNavigate();

  const signIn = () => {
    const userEmailValue = userEmail;
    const passwordValue = userpassword;

    const foundUser = data.find(
      (user) => user.email === userEmailValue && user.password === passwordValue
    );

    if (foundUser) {
      setUserFound(foundUser);
      navigate("/");
    }
  };
  const handleEmailChange = (event) => {
    setUserEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setuserPassword(event.target.value);
  };
  console.log(userFound);

  return (
    <div className="Card">
      <div className="email">
        <h4>PLease LogIn</h4>
        <label htmlFor="userEmail">Email:</label>
        <input
          type="text"
          value={userEmail}
          id="user-email"
          onChange={handleEmailChange}
        />
      </div>
      <div className="password">
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          value={userpassword}
          id="user-password"
          onChange={handlePasswordChange}
        />
      </div>
      <button className="button" onClick={signIn}>
        Sign In
      </button>
    </div>
  );
}

export default SignInForm;
