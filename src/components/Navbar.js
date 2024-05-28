// Navbar.js
import React, { startTransition } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (isAuthenticated) {
      logout();
    } else {
        startTransition(() => navigate("/signin"));
      }
  };

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-red-600">
        <Link to="/">
          <img src="./download.png" alt="Reliance Digital HeadTag" className="h-10" />
        </Link>
        <button
          onClick={handleAuthAction}
          className="bg-[#F43F5E] text-black px-4 py-2 rounded"
        >
          {isAuthenticated ? "Log Out" : "Login"}
        </button>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;


































// import React, { useState } from "react";
// import { Link, Outlet, useNavigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

// const Navbar = () => {
//   const { isAuthenticated, login, logout } = useAuth();
//   const navigate = useNavigate();
  
//   // State to store the cart items
//   const [cartItems, setCartItems] = useState([]);

//   const handleAuthAction = () => {
//     if (isAuthenticated) {
//       logout();
//     } else {
//       navigate("/signin");
//     }
//   };

//   // Function to add an item to the cart
//   const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };

//   return (
//     <>
//       <div className="flex justify-between items-center p-4 bg-red-600">
//         <Link to="/">
//           <img src="./download.png" alt="Reliance Digital HeadTag" className="h-10" />
//         </Link>
//         <button
//           onClick={handleAuthAction}
//           className="bg-[#F43F5E] text-black px-4 py-2 rounded"
//         >
//           {isAuthenticated ? "Log Out" : "Login"}
//         </button>
//       </div>
//       {/* Render cart items */}
//       <div className="bg-gray-200 p-4">
//         <h3 className="text-lg font-semibold mb-2">Shopping Cart</h3>
//         <ul>
//           {cartItems.map((item, index) => (
//             <li key={index}>{item.name}</li> {/* Assuming 'name' property exists on product */}
//           ))}
//         </ul>
//       </div>
//       <Outlet addToCart={addToCart} />
//     </>
//   );
// };

// export default Navbar;

