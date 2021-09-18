document.addEventListener("DOMContentLoaded", () => {
      //create tours cards
      let modal = document.querySelector(".modal-container");
      let modalContent = modal.firstElementChild;
      let container = document.querySelector(".choose-place");
      function createTravelsList() {
            placesData.forEach(item => {
                  let travelContent = document.createElement('div');
                  travelContent.className = "place__items";
                  travelContent.setAttribute("data-id", item.id);
                  let place = document.createElement('p');
                  place.textContent = `${item.location}`;
                  let city = document.createElement('h6');
                  city.textContent = `${item.place}`;
                  let cityBtn = document.createElement('button');
                  cityBtn.className = "place__view";
                  cityBtn.textContent = "View offers";
                  let img = document.createElement('img');
                  img.src = `${item.image[0]}`;
                  travelContent.append(city);
                  travelContent.append(place);
                  travelContent.append(img);
                  travelContent.append(cityBtn);
                  container.append(travelContent);
            })
      }
      createTravelsList();

      let cityBlocks = document.querySelectorAll('.place__items');
      // search current tour
      function filterTravelTour(title) {
            cityBlocks.forEach(block => {
                  let cityName = block.firstElementChild.textContent.toLowerCase();
                  if (cityName.search(title) === -1) {
                        block.classList.add("hide");
                  } else {
                        block.classList.remove("hide")
                  }
            })
      }
      function searchTravelTour() {
            let input = document.querySelector("form input");
            input.addEventListener("input", (e) => {
                  filterTravelTour(e.target.value.trim());
            })
      }

      searchTravelTour();
      // open modal with tour details
      function openTourOffers() {
            let toursContainer = document.querySelector(".choose-place");
            toursContainer.addEventListener("click", (e) => {
                  if (e.target.tagName === "BUTTON") {
                        let tourId = e.target.parentElement.getAttribute("data-id");
                        document.body.classList.add("disabled");
                        modal.classList.remove("hide");
                        setChosenTour(Number(tourId));
                        slider();
                  }
            })
      }
      openTourOffers();

      function setChosenTour(id) {
            let tourData = placesData.find(tour => tour.id === id);
            createToursInform(tourData);

      }
      // create tour information based on data
      function createToursInform(tourData) {
            let sliderContainer = document.createElement('div');
            sliderContainer.className = "slider-container";
            let close = document.createElement('div');
            close.className = "modal-close";
            let arrow_right = `<i class="fa fa-arrow-right" aria-hidden="true"></i>`;
            let arrow_left = `<i class="fa fa-arrow-left" aria-hidden="true"></i>`;
            tourData.image.forEach((img, index) => {
                  let imageContainer = document.createElement('div');
                  imageContainer.className = "slide"
                  imageContainer.setAttribute("data-index", index);
                  let image = document.createElement('img');
                  image.src = `${img}`;
                  imageContainer.append(image);
                  sliderContainer.append(imageContainer);
            });
            sliderContainer.insertAdjacentHTML("afterbegin", arrow_left);
            sliderContainer.insertAdjacentHTML("beforeend", arrow_right);
            let contentContainer = document.createElement('div');
            contentContainer.className = "content-container active";
            let title = document.createElement('h4');
            title.textContent = `${tourData.place}`
            let subtitle1 = document.createElement('h6');
            subtitle1.textContent = "Tour description";
            let desc = document.createElement('p');
            desc.textContent = `${tourData.description}`
            let subtitle2 = document.createElement('h6');
            subtitle2.textContent = "Details";
            let details = document.createElement('p');
            details.textContent = `${tourData.details}`;
            let subtitle3 = document.createElement('h6');
            subtitle3.textContent = "Price";
            let priceAdult = document.createElement('span');
            priceAdult.textContent = `Adult: ${tourData.priceForAdult} $`;
            let priceKids = document.createElement('span');
            priceKids.textContent = `Kid: ${tourData.priceForKids} $`;
            let priceStudent = document.createElement('span');
            priceStudent.textContent = `Student: ${tourData.priceForStudents} $`;
            let subtitle4 = document.createElement('h6');
            subtitle4.textContent = "Guide";
            let buttonDetails = document.createElement('button');
            buttonDetails.className = "btn-navigation btn-details";
            buttonDetails.textContent = "Info";
            let buttonSlider = document.createElement('button');
            buttonSlider.className = "btn-navigation btn-slider";
            buttonSlider.textContent = "Photos";
            let guide = document.createElement('span');
            guide.textContent = `${tourData.guide}`;
            contentContainer.append(title);
            contentContainer.append(subtitle1);
            contentContainer.append(desc);
            contentContainer.append(subtitle2);
            contentContainer.append(details);
            contentContainer.append(subtitle3);
            contentContainer.append(priceAdult);
            contentContainer.append(priceKids);
            contentContainer.append(priceStudent);
            contentContainer.append(subtitle4);
            contentContainer.append(guide);
            modalContent.append(close);
            modalContent.append(buttonDetails);
            modalContent.append(buttonSlider);
            modalContent.append(sliderContainer);
            modalContent.append(contentContainer);
      }
      //slider
      function slider() {
            let slidesIndex = 1;

            showSlides(slidesIndex);
            function plusSlides(n) {
                  showSlides(slidesIndex += n)
            };

            function showSlides(n) {
                  let i;
                  let slides = document.getElementsByClassName("slide");

                  if (n > slides.length) {
                        slidesIndex = 1
                  };
                  if (n < 1) {
                        slidesIndex = slides.length
                  };

                  for (i = 0; i < slides.length; i++) {
                        slides[i].style.display = "none"
                  };
                  slides[slidesIndex - 1].style.display = "block"
            }

            modal.addEventListener("click", (e) => {
                  if (e.target.classList.contains("fa-arrow-right")) {
                        plusSlides(1)
                  }
                  if (e.target.classList.contains("fa-arrow-left")) {
                        plusSlides(-1);
                  }
                  if (e.target.classList.contains("modal-close")) {
                        document.body.classList.remove("disabled");
                        modal.classList.add("hide");
                        modalContent.innerHTML = '';
                  }
            });
      }

      function openCustomModal(index) {
            document.body.classList.add("disabled");
            modal.classList.remove("hide");
            createToursInform(placesData[index]);
            slider();
      }
      document.body.addEventListener("click", (e) => {
            if (e.target.classList.contains("place1")) {
                  openCustomModal(4);
            }
            if (e.target.classList.contains("place2")) {
                  openCustomModal(5);
            }
            if (e.target.classList.contains("place3")) {
                  openCustomModal(10);
            }
            if (e.target.classList.contains("btn-details")) {
                  document.querySelector(".slider-container").classList.remove("active");
                  document.querySelector(".content-container").classList.add("active");
            }
            if (e.target.classList.contains("btn-slider")) {
                  document.querySelector(".slider-container").classList.add("active");
                  document.querySelector(".content-container").classList.remove("active");
            }
      });
});




