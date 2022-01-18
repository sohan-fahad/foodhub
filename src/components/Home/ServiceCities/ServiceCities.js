import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useServer from "../../../Hooks/useServer";
import ServiceCity from "../ServiceCity/ServiceCity";
import "./ServiceCities.css";

const ServiceCities = () => {
  const [cities, setCities] = useState([]);
  const { server } = useServer();

  useEffect(() => {
    fetch(server + "/fakeDB/main/citiesDB")
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, []);
  return (
    <div className="ServicesCities">
      <div className="container">
        <h1>Coverage Area</h1>
        <p>You prepare the food, we handle the rest</p>
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
