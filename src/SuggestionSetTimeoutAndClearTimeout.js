import {useState} from "react";

function getFruits(query) {
  const fruits = [
    "Apple",
    "Apricot",
    "Avocado 🥑",
    "Banana",
    "Bilberry",
    "Blackberry",
    "Blackcurrant",
    "Blueberry",
    "Boysenberry",
    "Currant",
    "Cherry",
    "Coconut",
    "Cranberry",
    "Cucumber",
    "Custard apple",
    "Damson",
    "Date",
    "Dragonfruit",
    "Durian",
    "Elderberry",
    "Feijoa",
    "Fig",
    "Gooseberry",
    "Grape",
    "Raisin",
    "Grapefruit",
    "Guava",
    "Honeyberry",
    "Huckleberry",
    "Jabuticaba",
    "Jackfruit",
    "Jambul",
    "Juniper berry",
    "Kiwifruit",
    "Kumquat",
    "Lemon",
    "Lime",
    "Loquat",
    "Longan",
    "Lychee",
    "Mango",
    "Mangosteen",
    "Marionberry",
    "Melon",
    "Cantaloupe",
    "Honeydew",
    "Watermelon",
    "Miracle fruit",
    "Mulberry",
    "Nectarine",
    "Nance",
    "Olive",
    "Orange",
    "Clementine",
    "Mandarine",
    "Tangerine",
    "Papaya",
    "Passionfruit",
    "Peach",
    "Pear",
    "Persimmon",
    "Plantain",
    "Plum",
    "Pineapple",
    "Pomegranate",
    "Pomelo",
    "Quince",
    "Raspberry",
    "Salmonberry",
    "Rambutan",
    "Redcurrant",
    "Salak",
    "Satsuma",
    "Soursop",
    "Star fruit",
    "Strawberry",
    "Tamarillo",
    "Tamarind",
    "Yuzu"
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        fruits.filter((fruit) =>{
          return fruit.toLowerCase().includes(query.toLowerCase())
        }
      )
      );
    }, Math.random() * 1000);
  });
}

export default function SuggestFruit() {
  const [filteredFruit, setFilteredFruit] = useState([]);
  var timeId;
  function filterFruit(e)
  {
    var query = e.target.value;
    if(timeId !== undefined)
    {
      console.log("cleared function");
      clearTimeout(timeId)
    }
    timeId = setTimeout(() => {
      console.log("query", query);
        getFruits(query).then((data) => {
          console.log(data);
          setFilteredFruit(data);
        })
    }, 2000)
  }
  return (
    <div className="App">
      <input onChange = {filterFruit}/>
      {
        filteredFruit.length === 0
        ?
      <div> Show suggestions here</div>
      :
      <div>
      {
        filteredFruit.map((x, index) => {
          return <p key = {index}>{x}</p>
      })}
      </div>
      }
    </div>
  );
}
