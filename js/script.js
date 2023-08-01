var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 25,
    autoplay: true,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      // el: ".swiper-pagination", 
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
        1050: {
            slidesPerView: 4,
      },
    },
  });



/*Fetching data from json api*/
const divEl = document.querySelector('.card-wrapper');

fetch("./products.json")
.then(res => res.json())


.then(products => {
   products.forEach(product => {
    divEl.insertAdjacentHTML('beforeend',`
    <div class="card swiper-slide" data-swiper-autoplay="1000">
                        <div class="image-content">
                            <span class="overlay"></span>

                            <div class="card-image">
                                <img src="${product.image}" alt="" class="card-img">
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">${product.name}</h2>
                            <p class="description">${product.shippingCharges}</p>
                            <h2 class="name">₹ ${product.price}</h2>
                            <button class="button">Buy</button>
                        </div>
                    </div>
    `);
   });
});
