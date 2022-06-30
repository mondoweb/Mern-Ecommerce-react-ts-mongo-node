import React from "react";
import { card_main } from "../assets/js/card_arr";
//  import ProdottoCard from "../prodotto/ProdottoCard";

 
import "./styles/product.css";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h2 className="tx-pd" style={{ paddingBottom:"80px"}}> Prodotti </h2>

      <div class="involucro">
        <h2>
          <strong>
            Prodotti <span> {/* ( 4 )  */} </span>
          </strong>
        </h2>

        <div class="cardsOne">


        {card_main.map((el) => (
        <Link   to="/ProdottoCard"   key={el.title}>
          <figure  class="cardPlus" >
            <img src={el.img} alt={el.title} />

            <figcaption> 
            <b>{el.title}</b> 
            <p>{el.description}</p>
            <b>€ {el.price}</b>
            </figcaption>
          </figure>

        </Link>

))}


</div>
      </div>

      {/* <ProdottoCard />  */}
    </div>
  );
};

export default Products;
