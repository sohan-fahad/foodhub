import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useServer from "../../../Hooks/useServer";
import ServiceCity from "../ServiceCity/ServiceCity";
import "./ServiceCities.css";

const ServiceCities = () => {
  const [cities, setCities] = useState([]);
  const { server } = useServer();

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/sohan-fahad/fakeDB/main/fakeCities")
      .then((res) => res.json())
      .then((data) => {
        setCities(data)
      });
  }, [!cities]);

  return (
    <div className="ServicesCities">
      <div className="container">
        <div className="ServicesCities_title">
          <h3>Cuisines</h3>
          <p>You Favorite Cuisines</p>
        </div>
        <div className="row g-4">
          {cities.map((city) => (
            <ServiceCity key={city?.id} city={city}></ServiceCity>
          ))}
        </div>
        <div className="service_city_btn_container">
          <Link to="/" className="city_more_btn">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCities;
