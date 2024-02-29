import React from "react";
import { data } from "./data";
import "../App.css";

const ClassSection = () => {
  return (
    <div className="HeroPart">
      <h3>Classes</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur,
        laboriosam explicabo magnam voluptate nobis ab iste ullam.
      </p>
      <div className="HeroSection">
        {data?.map((elem) => {
          return (
            <div key={elem.ID}>
              <div>
                <img
                  src="https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU"
                  alt="ADD PIC"
                ></img>
              </div>
              <div>
                <h3>{elem.Name}</h3>
                <p>{elem.ShortDesc.substring(0, 150)}...</p>
                <button>View</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClassSection;
