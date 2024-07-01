const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// SPREAD OPERATOR 

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // Depth ati hai yahan
console.log(real_another_array);



console.log(Array.isArray("Laiba"))
console.log(Array.from("Laiba"))
console.log(Array.from({name: "laiba"})) // interesting yahan batana parta hai key mai krna hai ya value mai

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));