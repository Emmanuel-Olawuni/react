import Home from "./routes/home/home.components";
import { Route, Routes } from "react-router-dom";
import NavBar from "./routes/navigations/navigations.home";
import SignIn from "./routes/sign-in/sign-in.component";
import Shop from "./routes/shop/shop.component";


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<NavBar />} >
        <Route  index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>


    </Routes >
  )

}

export default App