//* Manipulating Complex Objects

//? Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.

const myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
];

myMusic.push({
  artist: "Shon",
  title: "My Journey In My Way",
  release_year: 2024,
  formats: ["app", "CD", "E-Magazine"],
});
