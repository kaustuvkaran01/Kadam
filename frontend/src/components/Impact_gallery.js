import React from 'react';

import styled from 'styled-components';

import image1 from './images/impact_gallery/1.png';
import image2 from './images/impact_gallery/2.png';
import image3 from './images/impact_gallery/3.png';
import image4 from './images/impact_gallery/4.png';
import image5 from './images/impact_gallery/5.png';
import image6 from './images/impact_gallery/6.png';
import image7 from './images/impact_gallery/7.png';

import image8 from './images/impact_gallery/8.png';

export default function ImpactGallery(){
    return(
        <ImpactGalleryContainer>
        <section id="main">
  <div class="gallery">
    <div><img id="image1" class="gallery-img" src={image1}/></div>
    <div><img id="image2" class="gallery-img" src={image2}/></div>
    <div><img id="image3"  src={image3}/></div>
    <div><img id="image4" class="gallery-img" src={image4}/></div>
    <div><img id="image5" class="gallery-img" src={image5}/></div>
    <div><img id="image6" class="gallery-img" src={image6}/></div>
    <div><img id="image7" class="gallery-img" src={image7}/></div>
    <div><img id="image8" class="gallery-img" src={image8}/></div>
  
  </div>
</section>
</ImpactGalleryContainer>
    );

}

const ImpactGalleryContainer = styled.div`




.gallery { 
  max-width: 900px;
  // padding: .5vw;
  font-size: 0;
  border: 2px solid whitesmoke;
  display: -ms-flexbox;
  -ms-flex-wrap: wrap;
  -ms-flex-direction: row;
  -webkit-flex-flow: row wrap; 
  flex-flow: row wrap; 
  display: -webkit-box;
  display: flex;
  margin: 0 auto;
}
.gallery div { 
  -webkit-box-flex: auto;
  -ms-flex: auto;
  flex: auto; 
  // width: 200px;
  // margin: .5vw; 
}
// .gallery div img { 
//   width: 100%; 
//   height: auto; 
// }
.gallery-img{
  height:10rem;
}
#image3{
  height:20rem;
}
@media screen and (max-width: 400px) {
  .gallery div { margin: 0; }
  .gallery { padding: 0; }
  
}

`;