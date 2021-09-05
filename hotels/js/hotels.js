document.addEventListener("DOMContentLoaded", () => {

   function createHotelCard(hotel, place) {
      let container = document.querySelector(".hotel-list");
      let hotelCard = document.createElement("div");
      hotelCard.className = "hotel-card";
      let img = document.createElement("img");
      img.src = `${hotel.image}`;
      let title = document.createElement("h4");
      title.textContent = `${hotel.title}`;
      let placeName = document.createElement("p");
      placeName.className = "hotel-location";
      placeName.textContent = `${hotel.street}, ${place}`;
      let phone = document.createElement("p");
      phone.className = "hotel-phone";
      phone.textContent = `${hotel.phoneNumber}`;
      let price = document.createElement("p");
      price.textContent = `Price : ${hotel.price} zl.`;
      let pointer = document.createElement("div");
      pointer.className = "copy-pointer hide";
      pointer.textContent = "Copied!";
      hotelCard.append(img);
      hotelCard.append(title);
      hotelCard.append(placeName);
      hotelCard.append(phone);
      hotelCard.append(price);
      hotelCard.append(pointer);
      container.append(hotelCard);
   }

   function setHotelCard() {
      placesData.forEach(item => {
         let place = item.place;
         item.hotels.forEach(hotel => {
            createHotelCard(hotel, place);
         })
      });

   }
   setHotelCard();
   let select = document.getElementById("place");
   function getPlaceList() {
      let cityList = placesData.map(item => item.place);
      let city = ["All", ...cityList];
      city.forEach(place => {
         let option = document.createElement("option");
         option.textContent = `${place}`;
         option.value = `${place}`;
         select.append(option);
      })

   }
   getPlaceList();
   function selectCity() {
      select.addEventListener("change", (e) => {
         let hotels = document.querySelectorAll(".hotel-card");
         hotels.forEach(item => {
            let location = item.children[2].textContent;
            if (e.target.value === "All") {
               item.classList.remove("hide");
            } else if (!location.includes(e.target.value)) {
               item.classList.add("hide");
            } else {
               item.classList.remove("hide");
            }
         });
      })
   }
   selectCity();

   let copy = document.querySelectorAll(".hotel-phone");

   for (const copied of copy) {
      copied.onclick = function () {
         document.execCommand("copy");
      };
      copied.addEventListener("copy", (e) => {
         e.preventDefault();
         if (e.clipboardData) {
            e.clipboardData.setData("text/plain", copied.textContent);
            let pointer = copied.closest(".hotel-card").children[5];
            pointer.classList.remove("hide");
            setTimeout(() => {
               pointer.classList.add("hide");
            }, 2000);
         };
      });
   }

});