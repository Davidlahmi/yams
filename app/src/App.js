import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./views/Home"
import Signin from "./views/Signin"
import Signup from "./views/Signup"
import Game from "./views/Game"
import Winner from "./views/Winner"
import Header from "./views/Header"
import User from "./views/User"

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/game" element={<Game />} />
          <Route path="/winners" element={<Winner />} />
          <Route path="/userpage" element={<User />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App