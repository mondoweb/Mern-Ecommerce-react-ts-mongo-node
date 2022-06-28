import React from "react";
import "./styles/styleCard.css"

const ProdottoCard = () =>  {
  return ( 
<div> 
  <h3 style={{textAlign:"center" , color: "red"}}> ID Prodotto </h3> 

    <div className="tx-pd  plus"  >  

<div class="cards">
  <div class="card content">
    <div class="card-content">
      <div class="card-img">
        <img src="http://loudandproud.it/site/wp-content/uploads/2019/02/eddie-van-halen-shoes-2.jpg"  alt=""/>
        
      </div>
      <div class="card-label">Sneakers    <b> € 45.00 </b></div>
      <div class="card-title">
        Le tue fantastiche Scarpe 
      </div>
    </div>
  </div>
  <div class="card content">
    <div class="card-content">
      <div class="card-img">
     
       <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh8lAPh-RPQprxdC54HfwZW7ZRrs2RVNQCMpsVvm8KwNrBd6T3vNweYUr8_ErC3dojREI&usqp=CAU"  alt=""/> 
       
      </div>
      <div class="card-label">
        Comode
      </div>
      <div class="card-title">
         The Future foot
      </div>
    </div>
  </div>
  <div class="card content">
    <div class="card-content">
      <div class="card-img">
      
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgec3roHt1RNtm3cXVAj8KFcaltrJr0SnlRNb3weF0UW4SJkE6zK4W0zCGWbiJVfflqI0&usqp=CAU" alt="ee" /> 
        
      </div>
      <div class="card-label">
        Style unico
      </div>
      <div class="card-title">
       Modello mid-2020
      </div>
    </div>
  </div>
  <div class="card form">
    <div class="form-title"> Vai Carrello </div>
  </div>
</div>

    </div>
    </div>
  );
}

export default ProdottoCard;
