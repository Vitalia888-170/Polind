document.addEventListener("DOMContentLoaded", () => {

   function createGuideCard(guide) {
      let container = document.querySelector(".guide-list");
      let guideCard = document.createElement("div");
      guideCard.className = "guide-card";
      let img = document.createElement("img");
      img.src = `${guide.photo}`;
      let name = document.createElement("h4");
      name.textContent = `${guide.fullName}`;
      let toursCount = document.createElement("p");
      toursCount.textContent = `Total tours : ${guide.countTours}`;
      let tours = document.createElement("ul");
      guide.tours.forEach(tour => {
         let item = document.createElement('li');
         item.textContent = `${tour}`;
         tours.append(item);
      });
      guideCard.append(img);
      guideCard.append(name);
      guideCard.append(toursCount);
      guideCard.append(tours);
      container.append(guideCard);
   }

   function setGuideCard() {
      guideData.forEach(guide => {
         createGuideCard(guide)
      });

   }
   setGuideCard();
})