// fetch("https://swapi.dev/api/people/1")
// .then(res => {
//   console.log("Resolved", res)
//   return res.json()
// })
// .then((data) => {
//   console.log(data);
//   return fetch("https://swapi.dev/api/people/1");
// })
// .then((res) => {
//   console.log("SECOND REQUEST RESOLVED!!");
//   return res.json();
// })
// .then((data) => {
//   console.log(data);
// })
// .catch((e) => {
//   console.log("ERROR", e);
// })

const loadStarWarsPeople = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/peole/1");
  const data = await res.json();
  console.log(data);} catch (e){
    console.log("ERROR", e);
  }
}

loadStarWarsPeople();