import { useContext, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/homeComponents/homeScreen";
import Profile from "./components/profileComponents/profileScreen";
import Create from "./components/newPostCompnent/newPost"
import Auth from "./components/auth";
import SearchContainer from "./components/homeComponents/searchContainer";

import AuthContext from "./components/store/authContext";

function App() {
  // const [count, setCount] = useState(0);
  const authCtx = useContext(AuthContext)

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/auth" element={!authCtx.token ? <Auth/> : <Navigate to="/"/>}/>
          <Route path="/create" element={authCtx.token ? <Create /> : <Navigate to="/auth"/>}/>
          <Route path="/profile" element={authCtx.token ? <Profile /> : <Navigate to="/auth"/>}/>
          <Route path="/search" element={authCtx.token ? <SearchContainer/> : <Navigate to="/auth"/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
