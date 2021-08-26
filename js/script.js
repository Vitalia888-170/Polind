const placesData = [
      {
            place: "poznan",
            location: "Wielkopolskie",
            image: "/Polind/images/city_01.jpg",
      },
      {
            place: "warsaw",
            location: "Mazowieckie",
            image: "/Polind/images/city_02.jpg",

      },
      {
            place: "zakopane",
            location: "Malopolskie",
            image: "/Polind/images/city_03.jpg",

      },
      {
            place: "wroclaw",
            location: "Dolnoslaskie",
            image: "/Polind/images/city_06.jpg",

      },
      {
            place: "carpacz",
            location: "Dolnoslaskie",
            image: "/Polind/images/place_04.jpg",
      },
      {
            place: "sandomierz",
            location: "Swietokrzyskie",
            image: "/Polind/images/santomierz.jpg",
      },
      {
            place: "dolina Olczyska",
            location: "Malopolskie",
            image: "/Polind/images/forest_05.png",
      },
      {
            place: "kozy",
            location: "Slaskie",
            image: "/Polind/images/forest_06.png",
      },
      {
            place: "krakiv",
            location: "Krakiv",
            image: "/Polind/images/city_04.jpg",
      },
      {
            place: "torun",
            location: "Torun",
            image: "/Polind/images/city_05.jpg",
      },
      {
            place: "sopot",
            location: "Pomorskie",
            image: "/Polind/images/place_04.png",
      },
];
document.addEventListener("DOMContentLoaded", () => {
      function createTravelsList() {
            let container = document.querySelector(".choose-place");
            placesData.forEach(item => {
                  let fragment = document.createDocumentFragment();
                  let travelContent = document.createElement('div');
                  travelContent.className = "place__items";
                  let place = document.createElement('p');
                  place.textContent = `${item.location}`;
                  let city = document.createElement('h6');
                  city.textContent = `${item.place}`;
                  let cityBtn = document.createElement('button');
                  cityBtn.className = "place__view";
                  let link = document.createElement('a');
                  link.href = "#";
                  link.textContent = "View offers";
                  let img = document.createElement('img');
                  img.src = `${item.image}`;
                  cityBtn.append(link);
                  travelContent.append(city);
                  travelContent.append(place);
                  travelContent.append(img);
                  travelContent.append(cityBtn);
                  fragment.append(travelContent);
                  container.append(fragment);
            })
      }
      createTravelsList();

      function filterTravelTour(title) {
            let cityBlocks = document.querySelectorAll('.place__items');
            cityBlocks.forEach(block => {
                  let cityName = block.firstElementChild.textContent.toLowerCase();
                  if (cityName.search(title) === -1) {
                        block.classList.add("hide")
                  } else {
                        block.classList.remove("hide")
                  }
            })
      }
      function searchTravelTour() {
            let input = document.querySelector('form input');
            input.addEventListener("input", (e) => {
                  filterTravelTour(e.target.value.trim());
            })
      }

      searchTravelTour();
});

