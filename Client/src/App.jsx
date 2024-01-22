import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/index.css";
import NavbarComponent from "./components/layout/Navbar";
import AllAuctions from "../src/Pages/AllAuctions";
import ViewDetails from "../src/components/layout/ViewCardPage";
import Header from "./components/layout/Header";
import Login from "./components/login/LogIn";
// import AuthContextProvider from "./context/authContext/authContexProvider";
import RegistrationForm from "./components/Register/RegistrationForm";
import ContactForm from "./components/layout/ContactForm";
import AuctionContextProvider from "./context/auctionContext/auctionContextProvider";
import CreateAuctionForm from "./components/layout/CreateAuctionForm";
import authContext from "./context/authContext/authContexProvider";

const App = ({ children }) => {
  //   const [cardData, setCardData] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get(
  //           "https://6582f1ce02f747c8367aaca4.mockapi.io/viewData"
  //         );
  //         setCardData(response.data);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  return (
    <BrowserRouter>
      <AuctionContextProvider />
      <authContext>
        <NavbarComponent />

        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/allauctions" element={<AllAuctions />} />
          <Route path="/view/:id" element={<ViewDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/send-email" element={<ContactForm />} />
          <Route path="/createAuction" element={<CreateAuctionForm />} />
        </Routes>
        {children}
      </authContext>
      <AuctionContextProvider />
    </BrowserRouter>
  );
};

export default App;

// import Nav from "./components/Nav";
// import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
// import { useContext, useEffect } from "react";
// import { authContext } from "./context/authContext/authContexProvider";
// import Home from "./pages/Home";
// import Login from "./components/Login/Login";
// import ProtectedRoute from "./components/ProtectedRoute";
// import Register from "./components/Register/Register";
// import { socket } from "./socket/socket";
// import BidProduct from "./components/Bid/BidProduct";

// function App() {
//   const { user, isAuthReady } = useContext(authContext);

//   return (
//     <div>
//       {isAuthReady && (
//         <>
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <ProtectedRoute user={user}>
//                   <Home />
//                 </ProtectedRoute>
//               }
//             />

//             <Route
//               path="/bid/:id"
//               element={
//                 <ProtectedRoute user={user}>
//                   <BidProduct socket={socket} />
//                 </ProtectedRoute>
//               }
//             />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//           </Routes>
//         </>
//       )}
//     </div>
//   );
// }

// export default App;
