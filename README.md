# Muhammad Wasif Iftikhar — iOS Game Portfolio

**Ready-to-upload GitHub Pages website (one-page portfolio + separate editable Privacy Policy page).**

## 1. Website chalana / GitHub par publish karna

1. ZIP **extract** karo. ZIP ko direct GitHub repository mein upload **nahi** karna.
2. Naya GitHub repository banao, e.g. `wasif-ios-games`.
3. Repository root mein extract ki hui **saari files aur `assets` folder** upload karo. File names aur folders ko same rakho.
4. GitHub → **Settings → Pages → Build and deployment** → Source: **Deploy from a branch** → Branch: `main` → Folder: `/ (root)` → **Save**.
5. Website address usually `https://YOUR-USERNAME.github.io/wasif-ios-games/` hoga. Agar repository ka naam exact `YOUR-USERNAME.github.io` ho to website `https://YOUR-USERNAME.github.io/` par hogi.
6. Changes ke baad browser par hard refresh (`Ctrl+Shift+R` / Mac: `Cmd+Shift+R`).

Is website ko kisi backend, React, npm ya build step ki zaroorat nahi hai.

## 2. Files ka kaam

| File | Kis kaam ki hai |
|---|---|
| `index.html` | Main one-page website. *Normally edit nahi karni.* |
| `content.js` | **MAIN EDITING FILE:** developer name, slogan, games add/remove, links, category, logo, social links, email. |
| `style.css` | Colors, layout, fonts aur design. |
| `script.js` | Interactive functions — filters, detail popup, optional App Store artwork loading. |
| `privacy.html` | Privacy Policy ka page. |
| `privacy-content.js` | Privacy Policy content — **draft template**, real details bharna zaroori hai. |
| `assets/logo.svg` | Editable placeholder logo; replace later with **valid SVG** logo. |
| `assets/covers/*.svg` | Original abstract covers. Yeh **actual game screenshots nahi hain**. |
| `assets/games/` | Apne real icons aur screenshots yahan add kar sakte ho. |

## 3. Punchline / tagline / name change

`content.js` kholo aur yeh keys edit karo:

```js
  developerName: "Muhammad Wasif Iftikhar",
  headline: "Every genre.\nA new adventure.",
  tagline: "Different worlds. One way to play.",
  heroDescription: "Your intro goes here",
```

`headline` mein `\n` next line banata hai.

## 4. Game add karna

`content.js` ke `games: [ ... ]` mein last game ke baad comma de kar yeh object add karo:

```js
{
  id: "1234567890",                   // Apple App ID (number, quotes mein)
  title: "Your New iOS Game",
  category: "Action",               // Action, Racing, Simulation
  description: "Short game intro",
  image: "assets/games/new-game.jpg", // Local cover file, ya https URL
  screenshots: [
    "assets/games/new-game-screen1.jpg",
    "assets/games/new-game-screen2.jpg"
  ],
  link: "https://apps.apple.com/in/app/id1234567890",
  featured: false
}
```

Game **delete** karni ho to us game ka complete `{ ... }` object comma ke saath sahi tarah remove karo. `featured: true` jis game ke saamne hoga woh hero mein appear hogi; ideally sirf **ek** featured rakho.

**Tip:** game title, image aur links add/remove karte waqt quotes aur commas preserve karna — warna JavaScript parse error de sakti hai.

## 5. Real App Store screenshots / icons

Website mein **11 games ke verified App Store listing links** aur original, abstract local cover images hain.

`autoAppleArtwork: true` hai. Browser se Apple iTunes Lookup API accessible ho to website **official icons** aur **App Store screenshots** automatically fetch karke dikhayegi (App Store details popup mein). Apple API ke country rules / browser network restrictions ki wajah se yeh **guaranteed nahi** hai. Agar request fail ho to locally bundled decorative covers dikhengi, website blank nahi hogi.

Sab se reliable tareeqa: apne original screenshots `assets/games/` mein upload karo, aur game ke `image` aur `screenshots` paths `content.js` mein set karo. Manually set screenshots automatic fetched screenshots se priority rakhti hain.

Example:

```js
image: "assets/games/bike-cover.jpg",
screenshots: ["assets/games/bike-1.jpg", "assets/games/bike-2.jpg"],
```

## 6. Logo replace karna (important)

`assets/logo.svg` ko apne **real valid SVG file** ke saath replace karo, bilkul same naam se. SVG file ke andar valid `<svg ...>` XML code hona chahiye. **PNG/JPG file ko `.svg` rename mat karna** — logo blank ho jayega.

Agar PNG logo use karna ho: `assets/logo.png` upload karo aur `content.js` mein `logo: "assets/logo.png"` set karo. Favicon aur Privacy Policy ke logo ke liye `index.html` / `privacy.html` mein `assets/logo.svg` ko bhi `assets/logo.png` kar do, aur favicon ka type `image/png` karo.

## 7. Contact email add karna

Abhi email **jaan-boojh kar blank** hai, kyun ke tumne Wasif ka contact email nahi diya. Specular Games ka email yahan copy nahi kiya gaya.

`content.js` mein:

```js
email: "your-email@example.com",
```

Iske baad contact section mein email button automatically show hoga.

## 8. Social links add karna

```js
socials: [
  { label: "YouTube", url: "https://youtube.com/@yourchannel" },
  { label: "Instagram", url: "https://instagram.com/yourprofile" },
  { label: "Facebook", url: "https://facebook.com/yourpage" }
],
```

Empty list rakho to koi blank link display nahi hogi.

## 9. Privacy Policy IMPORTANT

`privacy-content.js` mein **editable draft** diya hai. Yeh final legal policy nahi hai. Publishing se pehle developer ki actual advertising SDKs, Apple ATT consent handling, Firebase/analytics use, collected data, retention, children policy, contact email aur region-specific rights verify kar ke correct text add karo.

**Specular Games ke ad networks ko Wasif ki apps ke saath automatically assume mat karna.** Jab details available hon, `privacy-content.js` update karte hi privacy page par content automatically change ho jayega.

App Store Connect mein privacy policy URL add karne se pehle tamam draft placeholders remove karo. App Store privacy disclosures ko actual SDK collection/handling ke saath consistent rakho.

## 10. Styling / colors

`style.css` mein top par `:root` ke colors hain: `--bg`, `--blue`, `--violet`, `--peach` etc. Apni branding ke hisaab se easily change kar sakte ho.

## 11. Troubleshooting

- Header/footer show ho lekin games add nahi ho rahi? Browser console check karo ke `content.js` mein comma ya quote ka error to nahi. **Is website ka initial HTML fallback content phir bhi visible rehta hai.**
- Images broken? File names case-sensitive hain (`Game1.png` aur `game1.png` different!).
- Logo blank? Raw `assets/logo.svg` open karke check karo ke browser SVG render kar raha ho.
- GitHub par folder galat upload hua? `index.html`, `style.css`, `content.js`, `script.js` repo ke **root** mein hone chahiye.
- iTunes API images nahi aa rahi? Bundled local covers use karo ya manually assets upload karo.
- Kisi game ka App Store link region mein available nahi? `content.js` mein us game's `link` update ya remove kar do.

Enjoy building! 🎮
