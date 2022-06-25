import "./styles/carouselFull.css";
import { CarouselComponent, CarouselItemsDirective, CarouselItemDirective } from "@syncfusion/ej2-react-navigations";

const CarouselFull = () => {

  return (
    <div className='control-container' >
      <CarouselComponent >
        <CarouselItemsDirective  >
          <CarouselItemDirective template='   <figure class="img-container">  
                                                  <img src=" https://cdn.pixabay.com/photo/2015/09/23/03/07/belt-952834__340.jpg" alt="cardinal" style="height:100%;width:100%;" /> 
                                                  <figcaption class="img-caption"> Cardinal </figcaption>
                                              </figure>  
                                                 '/>
          <CarouselItemDirective template='<figure class="img-container"><img src="https://cdn.pixabay.com/photo/2016/07/07/04/07/shoes-1501837__340.jpg" alt="kingfisher" style="height:100%;width:100%;" /><figcaption class="img-caption">Kingfisher</figcaption></figure>' />

          <CarouselItemDirective template='<figure class="img-container"><img src="https://i.pinimg.com/originals/4a/36/ec/4a36ec5e5e83c5e4478817514c658586.jpg" alt="keel-billed-toucan" style="height:100%;width:100%;" /><figcaption class="img-caption">Keel-billed-toucan</figcaption></figure>' />
          <CarouselItemDirective template='<figure class="img-container"><img src="https://www.dhresource.com/0x0/f2/albu/g6/M01/21/21/rBVaR1pAsUuAQUxSAAFC6J73or4045.jpg" alt="yellow-warbler" style="height:100%;width:100%;" /><figcaption class="img-caption">Yellow-warbler</figcaption></figure>' />
          <CarouselItemDirective template='<figure class="img-container"><img src="https://img.freepik.com/free-photo/women-heeled-shoes_1303-5875.jpg?t=st=1656076396~exp=1656076996~hmac=26af44ca206aa66e4f6fc7ee2a039ae837cad6caaf1cdc0d5e2b621cc1383c28&w=740" alt="bee-eater" style="height:100%;width:100%;" /><figcaption class="img-caption">Bee-eater</figcaption></figure>' />
        </CarouselItemsDirective>
      </CarouselComponent>


    </div>
  )
}

export default CarouselFull
