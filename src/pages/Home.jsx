import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <h4 style={{ fontSize: "48px", marginBottom: "20px" }}>Click on Koinx link below</h4>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/koinx" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Koinx
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
