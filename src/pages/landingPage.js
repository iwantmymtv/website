import landing1 from '../img/landing1.gif'
import landing2 from '../img/landing2.gif'
import landing3 from '../img/landing3.gif'
import landing4 from '../img/landing4.gif'

export const landingPage = `
<h1><span class="bb-sec-6 ">LANDING PAGE</span> </h1>

<p>A landing oldal egy weboldal olyan oldala, ahol általában egy űrlap segítségével információt szeretnénk begyűjteni a látogatótól. Ez az az oldal, ahová a látogató „landol”, miután rákattintott egy hirdetésre, egy e-mailben található linkre, egy Facebookon megosztott ajánlóra, vagy bármi másra. A landing oldalon a látogató általában egyéb tartalmak mellett egy űrlappal is találkozik, aminek kitöltésével igénybe tudja venni az ott felkínált lehetőséget. pl. feliratkozhat a hírlevélre, letölthet egy tanulmányt, ajánlatot kérhet, vagy vásárolhat. Miután a megfelelő adatokkal kitöltötte az űrlapot, a látogató az adataival együtt (pl. az ajánlatkérés adataival) bekerül a cég adatbázisába, vagy egyszerűbb esetben kap róla a cég egy e-mailt. - WIKIPEDIA
</p>
<div class="ws-h5">
  <ul>
    <li><h4 >Milyen technológiákkal dolgozom?</h4></li>
    <li><h6> -Backend(ha szükséges): Django,Firebase </h6></li>
    <li><h6> -Frontend:  React, Redux, VanilliaJS</h6></li>
    <li><h6> -UI/UX: Sass, CSS, Ant Design, Material Design,Bootstrap,Photoshop</h6></li>


    </ul>
  </div>
<h3><span >NÉHÁNY REFERENCIA:</span> </h3>
        </div>
        <section >
        <div id="landingCarousel" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="${landing1}" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${landing2}" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${landing3}" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
          <img src="${landing4}" class="d-block w-100" alt="...">
        </div>
         
        </div>
        <a class="carousel-control-prev" href="#landingCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a class="carousel-control-next color-primary" href="#landingCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
      </section>
`