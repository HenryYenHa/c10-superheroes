import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const NavBar = () => {
  const { logout, user } = useAuth();
  console.log(user);
  return (
    <nav style={{ backgroundColor: "orange" }}>
      <ButtonGroup
        variant="standard"
        aria-label="outlined primary button group"
      >
        <Link to="/">
          <Button>Home</Button>
        </Link>
        {/* {user ? (good case): (kick them out case)} */}
        {user && (
          <>
            <Link to="/add-superhero">
              <Button>Add Superhero</Button>
            </Link>
            <Button onClick={logout}>Logout</Button>
          </>
        )}
        {!user && (
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        )}
      </ButtonGroup>
    </nav>
  );
};

export default NavBar;
