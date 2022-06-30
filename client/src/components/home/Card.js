import React from "react";
import { card_main } from "../../assets/js/card_arr";
import "./styles/card.css";

import { Link } from "react-router-dom";

const Card = () => {
  // const images =  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQtszPTZ2mLKwjE4Fjepc_0boBcArOsFQozw&usqp=CAU" ;

  return (
    <div class="scrolling-wrapper">
      {card_main.map((el) => (
        <Link to="/products"  class="cardAll" key={el.title}>
          <img src={el.img} alt={el.title} />
          <div class="container-card">
             <p> € {el.price }</p>
            <h4>
              <b>{el.title}</b>
            </h4>
            <p>{el.description}</p>

          </div>
        </Link>

        

      ))}
    </div>
  );
};

export default Card;
