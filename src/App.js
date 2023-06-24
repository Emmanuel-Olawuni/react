import Home from "./routes/home/home.components";
import { Route, Routes } from "react-router-dom";
import NavBar from "./routes/navigations/navigations.home";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<NavBar />} >
        <Route  index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>


    </Routes >
  )

}

export default App