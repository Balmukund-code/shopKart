import React, { useEffect, useState } from "react";
import "./Main.css";


const url = "https://fakestoreapi.com/products";

export default function Main() {
  const [results, setResults] = useState([]);

  useEffect(() => {

    async function getData() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setResults(data);
      } catch (error) {
        console.log(error)
      }

    }
    getData();
    // console.log(results, "results");
  });
  return (

    <div className="container">
      <div className="new-products">
        <ul className="heading">
          <li>New products</li>
          <div className="line4">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M11 0L12.789 9.21102L22 11L12.789 12.789L11 22L9.21102 12.789L0 11L9.21102 9.21102L11 0Z" fill="black" />
            </svg>
          </div>
        </ul>
        <ul className="silde-btn">
          <li><svg xmlns="http://www.w3.org/2000/svg" width="56" height="6" viewBox="0 0 56 6" fill="none">
            <path d="M55 3.5H55.5V2.5H55V3.5ZM0 3L5 5.88675V0.113249L0 3ZM55 2.5L4.5 2.5V3.5L55 3.5V2.5Z" fill="#161615" />
          </svg></li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="56" height="6" viewBox="0 0 56 6" fill="none">
            <path d="M1 2.5H0.5L0.5 3.5H1L1 2.5ZM56 3L51 0.113249V5.88675L56 3ZM1 3.5L51.5 3.5V2.5L1 2.5L1 3.5Z" fill="#161615" />
          </svg></li>
        </ul>
      </div>
      <div className="list-product">
        <ul className="list-name">
          <li>Apparel</li>
          <li>Accessories</li>
          <li>Best sellers</li>
          <li>50% off</li>
        </ul>
        <ul className="list-items">
          {results.map((item) => (
            <div key={item.id}>
              <div className="item-box">
                <img className="item-photo" src={item.image} alt="Balmukund"></img>

                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                  <rect width="45" height="45" fill="#161615" />
                  <path d="M28.9959 29.1648C28.9995 24.0427 28.9811 19.5589 29 15C23.8819 15.0036 19.3859 15.0186 14.8347 15.0041C14.8291 16.3618 14.8272 17.4011 14.8221 18.7218C17.5043 18.7288 20.315 18.7218 22.6435 18.7221L14.3068 27.0585C13.8958 27.4698 13.8981 28.2202 14.3117 28.6341L15.3657 29.688C15.7796 30.1019 16.5303 30.1043 16.9414 29.6932L25.278 21.3568C25.2744 23.9613 25.2817 26.5655 25.2703 29.17C26.5249 29.1631 27.8909 29.1692 28.9959 29.1648Z" fill="white" />
                </svg>

              </div>
              <div className="item-disc">

                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h3>{item.price}<span>$</span></h3>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
