import blade from '../img/blade.jpg'
import cus1 from '../img/cus1.gif'
import cus2 from '../img/cus2.gif'
import cus3 from '../img/cus3.gif'

export const webshopPage = `
<div class="ws ">
  <div class="ws-mainText">
    <h1><span class="bb-sec-6 ">EGYEDI</span> </h1>
    <h1><span class="bb-sec-6">WEBSHOPOK</span> </h1>
  </div>
  <div class="ws-h5">
  <ul>
    <li><h4 >Miért válassz engem?</h4></li>
    <li><h6>-Ha meg akarod valósítani az elképzeléseided korlátok nélkül</h6></li>
    <li><h6>-Ha gyors, modern,korszerű megoldást szeretnél</h6></li>
    <li><h6>-Ha kevés terméked van</h6></li>
    <li><h6>-Ha sok terméked van</h6></li>
    <li><h6>-Ha az ötletedethez a wordpress vagy shopify nem alkalmas </h6></li>

  </ul>
  </div>  
  <div class="ws-h5">
  <ul>
    <li><h4 >Milyen technológiákkal dolgozom?</h4></li>
    <li><h6> -Backend: Django (python), DjangoREST(rest api-hoz), GraphQL </h6></li>
    <li><h6> -Frontend:  React, Redux, VanilliaJS, Django template, </h6></li>
    <li><h6> -UI/UX: Sass, CSS, Ant Design, Material Design,Bootstrap </h6></li>
    <li><h6> -Hosting: Nginx, VPS, AWS, Docker </h6></li>

    </ul>
  </div>
  
  <h3><span >NÉHÁNY REFERENCIA:</span> </h3>
  <section id="slider">
  <div id="webshopCarousel" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${cus1}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${cus2}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${cus3}" class="d-block w-100" alt="...">
    </div>
   
  </div>
  <a class="carousel-control-prev" href="#webshopCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  </a>
  <a class="carousel-control-next color-primary" href="#webshopCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
  </a>
</div>
</section>
  
</div>

`