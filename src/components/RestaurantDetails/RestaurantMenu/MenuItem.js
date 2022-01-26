import React from "react";
import { Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

const MenuItem = ({ name }) => {
  return (
    <div>
      <Nav.Link as={HashLink} to={`/restaurantdetails#${name}`}>
        {name}
      </Nav.Link>
    </div>
  );
};

export default MenuItem;
