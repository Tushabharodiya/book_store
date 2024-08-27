import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./toolkit/atoms/Atoms";
import Dashbord from "./toolkit/admin/pages/Dashbord";
import Manage from "./toolkit/admin/pages/Manage";
import Home from "./toolkit/user/pages/Home";
import Shop from "./toolkit/user/pages/Shop";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { get_book } from "./toolkit/user/api";
import Bookdetails from "./toolkit/user/pages/Bookdetails";
import Login from "./toolkit/component/Login";
import Register from "./toolkit/component/Register";

function App() {

  const [role, setRole] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_book());
  }, []);

  const location = useLocation();
  const hideNavbar = location.pathname === '/' || location.pathname === '/register';

  // const handleLoginSuccess = (userRole) => {
  //   setRole(userRole);
  // };
  // console.log(role);
  return (
    <>
      {!hideNavbar && <Navbar element={role} />}
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/:id" element={<Bookdetails />} />
        <Route path="/dashborad" element={<Dashbord />} />
        <Route path="/manage" element={<Manage />} />
      </Routes>

    </>
  );

  // let role = "user"
  // if (role == "admin") {
  //   return (
  //     <>
  //       <Navbar element={role} />
  //       <Routes>
  //         <Route path="/" element={<Dashbord />} />
  //         <Route path="/manage" element={<Manage />} />
  //       </Routes>
  //     </>
  //   );
  // } else if (role == "user") {
  //   return (
  //     <>
  //       <Navbar element={role} />
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/shop" element={<Shop />} />
  //         <Route path="/:id" element={<Bookdetails />} />
  //       </Routes>
  //     </>
  //   )
  // }

}


// let User = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />

//       </Routes>
//     </>
//   )
// }


export default App;
