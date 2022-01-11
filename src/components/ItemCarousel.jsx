

export default function ItemCarousel( {casa} ){
    return(
        <>
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={casa.primary} class="d-block w-100 imgcarusel" alt="..."  />
                </div>
                <div class="carousel-item">
                  <img src={casa.secundary} class="d-block w-100 imgcarusel" alt="..."  />
                </div>
                <div class="carousel-item">
                  <img src={casa.third} class="d-block w-100 imgcarusel" alt="..."   />
                </div>
                <div class="carousel-item">
                  <img src={casa.four} class="d-block w-100 imgcarusel" alt="..."   />
                </div>
                <div class="carousel-item">
                  <img src={casa.five} class="d-block w-100 imgcarusel" alt="..."   />
                </div>
                <div class="carousel-item">
                  <img src={casa.six} class="d-block w-100 imgcarusel" alt="..."   />
                </div>
                <div class="carousel-item">
                  <img src={casa.seven} class="d-block w-100 imgcarusel" alt="..."   />
                </div>
                <div class="carousel-item">
                  <img src={casa.eight} class="d-block w-100 imgcarusel" alt="..."   />
                </div>
                <div class="carousel-item">
                  <img src={casa.nine} class="d-block w-100 imgcarusel" alt="..."   />
                </div>
                <div class="carousel-item">
                  <img src={casa.ten} class="d-block w-100 imgcarusel" alt="..."   />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        </>
    );
}