const placesData = [
   {
      id: 1,
      place: "poznan",
      location: "Wielkopolskie",
      image: ["/Polind/images/city_01.jpg", "/Polind/images/poznan1.jpg", "/Polind/images/poznan2.jpg"],
      description: ["Private walking tour in Poznan led by licensed guide", " Sightseeing only top attractions of Poznan with incredible legends", "Tickets to entry Weapon Museum in Citadel Park (in 5-hours version)", "Pick up from the hotel (only hotels in Poznan Old Town) ", "Tour program adapted to the preferences of the group", "Tips about local restaurants, patisserie, pubs"],
      duration: "2-5 hours",
      priceForAdult: 55,
      priceForKids: 15,
      priceForStudents: 25,
      guide: "Peter Marcovich",
      details: ["Confirmation will be received at time of booking ", "Wheelchair accessible ", "Stroller accessible", "Near public transportation ", "Infants must sit on laps ", "Transportation is wheelchair accessible", "Surfaces are wheelchair accessible", "Most travelers can participate", "This is a private tour / activity.Only your group will participate"],
      hotels: [
         {
            title: "Lorem ipsum dolor",
            price: 80,
            image: "/Polind/images/hotel1.jpg",
            street: "Royal Street 7",
            phoneNumber: "48 (22) 341 09 77"
         },
         {
            title: "Consectetur adipiscing elit",
            price: 25,
            image: "/Polind/images/hotel2.jpg",
            street: "Ketconi Street 23",
            phoneNumber: "48 (22) 895 00 34"
         }
      ]
   },
   {
      id: 2,
      place: "warsaw",
      location: "Mazowieckie",
      image: ["/Polind/images/city_02.jpg", "/Polind/images/warsaw1.jpg", "/Polind/images/warsaw2.jpg",],
      description: ["Private walking tour in Warsaw led by licensed guide", "Tour program adapted to the preferences of the group", "Tips about local restaurants, patisserie, pubs"],
      duration: "3-4 hours",
      priceForAdult: 65,
      priceForKids: 35,
      priceForStudents: 40,
      guide: "Anna Tychen",
      details: ["Confirmation will be received at time of booking", " Wheelchair accessible ", "Stroller accessible", "Near public transportation ", "Infants must sit on laps ", "Transportation is wheelchair accessible", "Surfaces are wheelchair accessible", "Most travelers can participate", "This is a private tour / activity.Only your group will participate"],
      hotels: [
         {
            title: "Lorem ipsum dolor",
            price: 20,
            image: "/Polind/images/hotel3.jpg",
            street: "Royal Street 1",
            phoneNumber: "48 (22) 765 09 90"
         },
         {
            title: "Consectetur adipiscing elit",
            price: 35,
            image: "/Polind/images/hotel4.jpg",
            street: "Ellopat Street 96",
            phoneNumber: "48 (22) 800 55 68"
         }
      ]

   },
   {
      id: 3,
      place: "zakopane",
      location: "Malopolskie",
      image: ["/Polind/images/city_03.jpg", "/Polind/images/zakop1.jpg", "/Polind/images/zakop2.jpg"],
      description: ["Private walking tour in Zakopane led by licensed guide", "Tour program adapted to the preferences of the group", "Tips about local restaurants, patisserie, pubs"],
      duration: "2-3 hours",
      priceForAdult: 35,
      priceForKids: 10,
      priceForStudents: 17,
      guide: "Anna Tychen",
      details: ["Confirmation will be received at time of booking", " Wheelchair accessible ", "Stroller accessible", "Near public transportation ", "Infants must sit on laps ", "Transportation is wheelchair accessible", "Surfaces are wheelchair accessible", "Most travelers can participate", "This is a private tour / activity.Only your group will participate"],
      hotels: [
         {
            title: "Viverra tellus in hac ",
            price: 10,
            image: "/Polind/images/hotel5.jpg",
            street: "Ellopat Street 11",
            phoneNumber: "48 (22) 690 09 68"
         },
         {
            title: "Habitant morbi tristique",
            price: 25,
            image: "/Polind/images/hotel6.jpg",
            street: "Nalenty Street 37",
            phoneNumber: "48 (22) 710 06 68"
         }
      ]

   },
   {
      id: 4,
      place: "wroclaw",
      location: "Dolnoslaskie",
      image: ["/Polind/images/city_06.jpg", "/Polind/images/wroclaw1.jpg", "/Polind/images/wroclaw2.jpg"],
      description: ["Private walking tour in Wroclow led by licensed guide", "Tour program adapted to the preferences of the group", "Tips about local restaurants, patisserie, pubs"],
      duration: "2-5 hours",
      priceForAdult: 46,
      priceForKids: 25,
      priceForStudents: 25,
      guide: "Like Yardovit",
      details: ["Confirmation will be received at time of booking ", "Wheelchair accessible ", "Stroller accessible", "Near public transportation ", "Infants must sit on laps ", "Transportation is wheelchair accessible", "Surfaces are wheelchair accessible", "Most travelers can participate", "This is a private tour / activity.Only your group will participate"],
      hotels: [
         {
            title: "Elementum nibh tellus",
            price: 10,
            image: "/Polind/images/hotel7.jpg",
            street: "Eloni Street 5",
            phoneNumber: "48 (22) 674 06 68"
         },
         {
            title: "Tellus mauris a diam",
            price: 25,
            image: "/Polind/images/hotel8.jpg",
            street: "Tickiyt Street 19",
            phoneNumber: "48 (22) 713 90 60"
         },
         {
            title: "In nulla posuere sollicitudin",
            price: 25,
            image: "/Polind/images/hotel21.jpg",
            street: "Kaeryni Street 41",
            phoneNumber: "48 (22) 533 06 98"
         }
      ]
   },
   {
      id: 5,
      place: "carpacz",
      location: "Dolnoslaskie",
      image: ["/Polind/images/place_04.jpg", "/Polind/images/carpacz1.jpeg", "/Polind/images/carpacz2.jpg"],
      description: ["Private walking tour in Carpacs led by licensed guide", "Tour program adapted to the preferences of the group", "Tips about local restaurants, patisserie, pubs"],
      duration: "4-6 hours",
      priceForAdult: 60,
      priceForKids: 35,
      priceForStudents: 35,
      guide: "Peter Marcovich",
      details: ["Confirmation will be received at time of booking ", "Wheelchair accessible ", "Stroller accessible", "Near public transportation ", "Infants must sit on laps ", "Transportation is wheelchair accessible", "Surfaces are wheelchair accessible", "Most travelers can participate", "This is a private tour / activity.Only your group will participate"],
      hotels: [
         {
            title: "Id eu nisl nunc mi",
            price: 20,
            image: "/Polind/images/hotel8.jpg",
            street: "Kattonm Street 41",
            phoneNumber: "48 (22) 373 06 60"
         },
         {
            title: "Amet aliquam id diam maecenas",
            price: 35,
            image: "/Polind/images/hotel9.jpg",
            street: "Sandierz Street 1",
            phoneNumber: "48 (22) 383 45 80"
         },
         {
            title: "In nulla posuere sollicitudin",
            price: 45,
            image: "/Polind/images/hotel10.jpg",
            street: "Atindi Street 12",
            phoneNumber: "48 (22) 998 96 00"
         }
      ]
   },
   {
      id: 6,
      place: "sandomierz",
      location: "Swietokrzyskie",
      image: ["/Polind/images/santomierz.jpg", "/Polind/images/sandomierz1.jpg", "/Polind/images/sandomierz2.jpg"],
      description: ["Private walking tour in Sandomierz led by licensed guide", "Tour program adapted to the preferences of the group", "Tips about local restaurants, patisserie, pubs"],
      duration: "2-3 hours",
      priceForAdult: 30,
      priceForKids: 10,
      priceForStudents: 15,
      guide: "Like Yardovit",
      details: ["Confirmation will be received at time of booking ", "Wheelchair accessible ", "Stroller accessible", "Near public transportation ", "Infants must sit on laps ", "Transportation is wheelchair accessible", "Surfaces are wheelchair accessible", "Most travelers can participate", "This is a private tour / activity.Only your group will participate"],
      hotels: [
         {
            title: "Auctor augue mauris",
            price: 20,
            image: "/Polind/images/hotel10.jpg",
            street: "Atindi Street 12",
            phoneNumber: "48 (22) 883 96 00"
         },
         {
            title: "Tincidunt vitae semper",
            price: 35,
            image: "/Polind/images/hotel11.jpg",
            street: "Hanticon Street 72",
            phoneNumber: "48 (22) 643 06 05"
         },
         {
            title: "Vitae semper",
            price: 40,
            image: "/Polind/images/hotel19.jpg",
            street: "Rayonldi Street 3",
            phoneNumber: "48 (22) 883 06 55"
         }
      ]
   },
   {
      id: 7,
      place: "dolina Olczyska",
      location: "Malopolskie",
      image: ["/Polind/images/dolyna1.jpg", "/Polind/images/dolyna2.jpg", "/Polind/images/dolyna3.jpg"],
      description: ["Private walking tour in Dolina Olczyska led by licensed guide", "Tour program adapted to the preferences of the group", "Tips about local restaurants, patisserie, pubs"],
      duration: "2-3 hours",
      priceForAdult: 55,
      priceForKids: 25,
      priceForStudents: 20,
      guide: "Peter Marcovich",
      details: ["Confirmation will be received at time of booking", " Wheelchair accessible ", "Stroller accessible", "Near public transportation ", "Infants must sit on laps ", "Transportation is wheelchair accessible", "Surfaces are wheelchair accessible", "Most travelers can participate", "This is a private tour / activity.Only your group will participate"],
      hotels: [
         {
            title: "Sed pulvinar proin gravida hendrerit",
            price: 28,
            image: "/Polind/images/hotel12.jpg",
            street: "Rayonldi Street 3",
            phoneNumber: "48 (22) 883 06 55"
         },
         {
            title: "Tincidunt vitae semper",
            price: 35,
            image: "/Polind/images/hotel13.jpg",
            street: "Metchit Street 120",
            phoneNumber: "48 (22) 199 73 55"
         }
      ]
   },
   {
      id: 8,
      place: "kozy",
      location: "Slaskie",
      image: ["/Polind/images/kozy1.jpg", "/Polind/images/kozy2.jpg", "/Polind/images/kozy3.jpg"],
      description: ["Private walking tour in Kozy led by licensed guide", "Tour program adapted to the preferences of the group", "Tips about local restaurants, patisserie, pubs"],
      duration: "2 hours",
      priceForAdult: 40,
      priceForKids: 15,
      priceForStudents: 18,
      guide: "Yan Mekatch",
      details: ["Confirmation will be received at time of booking", " Wheelchair accessible ", "Stroller accessible", "Near public transportation ", "Infants must sit on laps ", "Transportation is wheelchair accessible", "Surfaces are wheelchair accessible", "Most travelers can participate", "This is a private tour / activity.Only your group will participate"],
      hotels: [
         {
            title: "Sed pulvinar",
            price: 38,
            image: "/Polind/images/hotel14.jpg",
            street: "Betcki Street 32",
            phoneNumber: "48 (22) 123 06 55"
         },
         {
            title: "Tincidunt vitae semper",
            price: 35,
            image: "/Polind/images/hotel20.jpg",
            street: "Nittin Street 4",
            phoneNumber: "48 (22) 100 06 44"
         }
      ]
   },
   {
      id: 9,
      place: "krakiv",
      location: "Krakiv",
      image: ["/Polind/images/city_04.jpg", "/Polind/images/krakow1.jpg", "/Polind/images/krakow2.jpg"],
      description: ["Private walking tour in Krakiv led by licensed guide", "Tour program adapted to the preferences of the group", "Tips about local restaurants, patisserie, pubs"],
      duration: "4 hours",
      priceForAdult: 50,
      priceForKids: 28,
      priceForStudents: 28,
      guide: "Peter Marcovich",
      details: ["Confirmation will be received at time of booking ", "Wheelchair accessible ", "Stroller accessible", "Near public transportation ", "Infants must sit on laps ", "Transportation is wheelchair accessible", "Surfaces are wheelchair accessible", "Most travelers can participate", "This is a private tour / activity.Only your group will participate"],
      hotels: [
         {
            title: "Molestie at elementum",
            price: 25,
            image: "/Polind/images/hotel15.jpg",
            street: "Bracka Street 40",
            phoneNumber: "48 (22) 613 06 03"
         }
      ]
   },
   {
      id: 10,
      place: "torun",
      location: "Torun",
      image: ["/Polind/images/city_05.jpg", "/Polind/images/torun1.jpg", "/Polind/images/torun2.jpg"],
      description: ["Private walking tour in Torun led by licensed guide", " Sightseeing only top attractions of Torun with incredible legends", "Tour program adapted to the preferences of the group", "Tips about local restaurants, patisserie, pubs"],
      duration: "3 hours",
      priceForAdult: 65,
      priceForKids: 35,
      priceForStudents: 35,
      guide: "Yan Mekatch",
      details: ["Confirmation will be received at time of booking", " Wheelchair accessible ", "Stroller accessible", "Near public transportation ", "Infants must sit on laps ", "Transportation is wheelchair accessible", "Surfaces are wheelchair accessible", "Most travelers can participate", "This is a private tour / activity.Only your group will participate"],
      hotels: [
         {
            title: "Molestie at elementum",
            price: 25,
            image: "/Polind/images/hotel16.jpg",
            street: "Sienna Street 6",
            phoneNumber: "48 (22) 653 90 03"
         }
      ]
   },
   {
      id: 11,
      place: "sopot",
      location: "Pomorskie",
      image: ["/Polind/images/sopot1.jpg", "/Polind/images/sopot2.jpg", "/Polind/images/sopot3.jpg"],
      description: ["Private walking tour in Sopot led by licensed guide", " Sightseeing only top attractions  with incredible legends", "Tickets to entry  Museum in Citadel Park (in 5-hours version)", "Pick up from the hotel (only hotels in Sopot Old Town) ", "Tour program adapted to the preferences of the group", "Tips about local restaurants, patisserie, pubs"],
      duration: "3 hours",
      priceForAdult: 75,
      priceForKids: 45,
      priceForStudents: 35,
      guide: "Like Yardovit",
      details: ["Confirmation will be received at time of booking ", "Wheelchair accessible ", "Stroller accessible", "Near public transportation ", "Infants must sit on laps ", "Transportation is wheelchair accessible", "Surfaces are wheelchair accessible", "Most travelers can participate", "This is a private tour / activity.Only your group will participate"],
      hotels: [
         {
            title: "Egestas tellus rutrum",
            price: 40,
            image: "/Polind/images/hotel17.jpg",
            street: "Royal Road 45",
            phoneNumber: "48 (22) 743 95 67"
         },
         {
            title: "Consectetur adipiscing",
            price: 35,
            image: "/Polind/images/hotel18.jpg",
            street: "Kanonicza Street 76",
            phoneNumber: "48 (22) 043 90 43"
         },
      ]
   },
];