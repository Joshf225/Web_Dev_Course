// axios.get("https://swapi.dev/api/people/1")
// .then(res => {
//   console.log("RESPONSE: ", res)
// })
// .catch(e => {
//   console.log("ERROR! ,",e)

// })
const getStareWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}`);
  console.log(res.data);
} catch(e){
    console.log("ERROR!",e)
  }
} 

const jokes = document.querySelector("#jokes");
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  getDadJoke();
})
const getDadJoke = async () => {
  const config = { headers: {Accept: "application/json"} };
  const res = await axios.get("https://icanhazdadjoke.com/",config);
  // console.log(res.data.joke);
  const newLI = document.createElement("LI");
  newLI.append(res.data.joke);
  jokes.append(newLI);
}


