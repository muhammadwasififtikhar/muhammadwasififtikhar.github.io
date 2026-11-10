/* ========================================================
  MUHAMMAD WASIF IFTIKHAR | WEBSITE CONTENT EDITOR
  Sab text, links, games, logo, email, social links YAHAN se edit karo.

  - New game? `games` array mein ek aur { ... } object add karo.
  - Remove game? Us game ka pura object delete karo.
  - Custom image? `image` mein assets/games/mygame.jpg likho.
  - Screenshots? `screenshots` mein image paths ki list daal do.
  - Apple automatic artwork? autoAppleArtwork ko true rakho.
    Apple API available ho to game icons/screenshots automatically
    aa jayenge; warna local cover files show hongi.
  - Contact email? email: "your@email.com" set karo.
  - Social links? socials list mein entry add karo.
  ======================================================== */

const SITE_CONFIG = {
  developerName: "Muhammad Wasif Iftikhar",
  brandShort: "MWI",
  logo: "assets/logo.svg",
  developerUrl: "https://apps.apple.com/in/developer/muhammad-wasif-iftikhar/id1176875868",
  eyebrow: "INDEPENDENT iOS GAME DEVELOPER",
  headline: "Every genre.\nA new adventure.",
  tagline: "Different worlds. One way to play.",
  heroDescription: "From intense action and shooting to racing and animal simulations — discover mobile games made for every kind of player.",
  aboutHeading: "Games in every direction.",
  aboutText: "Muhammad Wasif Iftikhar publishes a diverse collection of mobile games for iPhone and iPad, exploring action, shooting, racing, simulation and more. Discover the collection and find your next game on the App Store.",
  collectionIntro: "Explore action-packed challenges, driving adventures and playful simulations from across the catalog.",
  contactHeading: "Let's make something playable.",
  contactDescription: "For publishing inquiries, collaborations or questions, contact me directly by email.",
  email: "wasifgc2@yahoo.com",  // Editable contact address
  socials: [
    // { label: "YouTube", url: "https://youtube.com/@yourchannel" },
    // { label: "Instagram", url: "https://instagram.com/yourprofile" },
  ],
  autoAppleArtwork: true,
  appleCountry: "in", // country for Apple's iTunes lookup API; fallback covers work offline
  games: [
    {
      "id": "1616919440",
      "title": "Kitten Cat Craft :Smash Room",
      "category": "Simulation",
      "description": "Kitten adventures, playful room-smashing and lively missions.",
      "image": "assets/covers/kitten.svg",
      "screenshots": [],
      "link": "https://apps.apple.com/in/app/id1616919440",
      "featured": true
    },
    {
      "id": "1616513968",
      "title": "Dead Zombie : Call of Chainsaw",
      "category": "Action",
      "description": "Survive a city and factory overrun by zombies in a tense action game.",
      "image": "assets/covers/zombie.svg",
      "screenshots": [],
      "link": "https://apps.apple.com/in/app/id1616513968",
      "featured": false
    },
    {
      "id": "1615431826",
      "title": "Smash Supermarket:Destroy MAL",
      "category": "Action",
      "description": "Break, smash and chase high scores across an interactive supermarket.",
      "image": "assets/covers/smash.svg",
      "screenshots": [],
      "link": "https://apps.apple.com/in/app/id1615431826",
      "featured": false
    },
    {
      "id": "1296740231",
      "title": "Extreme Drift Drive",
      "category": "Racing",
      "description": "Practice stylish drifts and race against the clock.",
      "image": "assets/covers/drift.svg",
      "screenshots": [],
      "link": "https://apps.apple.com/in/app/id1296740231",
      "featured": false
    },
    {
      "id": "1243680584",
      "title": "Bike Highway Traffic Rider Game",
      "category": "Racing",
      "description": "Take on highways and traffic challenges on two wheels.",
      "image": "assets/covers/bike.svg",
      "screenshots": [],
      "link": "https://apps.apple.com/in/app/id1243680584",
      "featured": false
    },
    {
      "id": "1233995337",
      "title": "Survival of Man in Jungle",
      "category": "Action",
      "description": "Take on jungle rescue missions and survive dangerous encounters.",
      "image": "assets/covers/jungle.svg",
      "screenshots": [],
      "link": "https://apps.apple.com/in/app/id1233995337",
      "featured": false
    },
    {
      "id": "1238275118",
      "title": "Dragon Sniper War",
      "category": "Action",
      "description": "Enter a fantasy-inspired action adventure against dragons.",
      "image": "assets/covers/dragon.svg",
      "screenshots": [],
      "link": "https://apps.apple.com/in/app/id1238275118",
      "featured": false
    },
    {
      "id": "1234152151",
      "title": "Real Archery Jungle Animals",
      "category": "Action",
      "description": "Explore jungle archery challenges in a wild setting.",
      "image": "assets/covers/archery.svg",
      "screenshots": [],
      "link": "https://apps.apple.com/in/app/id1234152151",
      "featured": false
    },
    {
      "id": "1237518320",
      "title": "Cycle Race Highway 2017",
      "category": "Racing",
      "description": "Hit the road in a fast-paced cycling game.",
      "image": "assets/covers/cycle.svg",
      "screenshots": [],
      "link": "https://apps.apple.com/in/app/id1237518320",
      "featured": false
    },
    {
      "id": "1229137450",
      "title": "Real Archery Hero-A Bow And Arrow Game",
      "category": "Action",
      "description": "Put your bow skills to the test in archery gameplay.",
      "image": "assets/covers/bow.svg",
      "screenshots": [],
      "link": "https://apps.apple.com/in/app/id1229137450",
      "featured": false
    },
    {
      "id": "1229998120",
      "title": "Deer Safari-Sniper Jungle Animals Hunt",
      "category": "Action",
      "description": "Step into a jungle-themed sniper and animal encounter game.",
      "image": "assets/covers/deer.svg",
      "screenshots": [],
      "link": "https://apps.apple.com/in/app/id1229998120",
      "featured": false
    }
  ]
};
