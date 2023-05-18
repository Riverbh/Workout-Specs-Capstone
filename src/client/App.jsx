import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/homeComponents/homeScreen";
import Profile from "./components/profileComponents/profileScreen";
import Create from "./components/profileComponents/newPostCompnent/newPost"
import Goals from "./components/goalsComponents/goalsScreen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/profile/create" element={<Create />}/>
          <Route path="/goals" element={<Goals />}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
