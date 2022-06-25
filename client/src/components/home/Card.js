import React from 'react'

import { card_main } from '../../assets/js/card_arr';


import "./styles/card.css"

function Card() {


  // const images =  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQtszPTZ2mLKwjE4Fjepc_0boBcArOsFQozw&usqp=CAU" ;


  return (



    <div class="scrolling-wrapper">


      {
        card_main.map(el => (

          <a href='#!' class="card" key={el.title}>
            <img src={el.img} alt={el.title} />
            <div class="container-card">
              <h4><b>{el.title}</b></h4>
              <p>{el.description}</p>
            </div>
          </a>

        ))
      }




    </div>




  )
}

export default Card;