import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { SuperheroForm } from "./components/SuperheroForm";
import { SuperheroList } from "./components/SuperheroList";
import { SuperheroDetail } from "./components/SuperheroDetail";
import { Button, ButtonGroup } from "@mui/material";
import WrapperComponent from "./WrapperComponent";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Authenticated from "./components/Authenticated";

function App() {
  return (
    <div>
      Testing conflict
      <NavBar />
      Another conflict
      <Routes>
        <Route path="/" element={
          <Authenticated>
            <SuperheroList />
          </Authenticated>
        } />
        <Route path="/detail/:id" element={<SuperheroDetail />} />
        <Route
          path="/add-superhero"
          element={
            <Authenticated>
              <SuperheroForm />
            </Authenticated>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
