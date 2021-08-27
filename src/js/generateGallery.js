console.log('Файл подключен')
import photoArray from "../db/photo.js"
console.log(photoArray)
import refs from "./js/refs.js"
const { list } = refs;

const result = photoArray.map((photoObject) => {
    // console.log(photoObject.author);

    const { title, image, description, category, seria, author: { name, country, city } } = photoObject;
    // console.log(photoObject);

    const createItemByString = function () {
   return `
    <li>
    <h3>${title}</h3>
    <img src="${image}" alt="${description}" />
    <p>${description}</p>
    <p><span>${category}</span>:<span>${seria}</span></p>
    <div>
      <h4>author:</h4>
      <p>${name}</p>
      <p>country: <span>${country}</span>- city: <span>${city}</span></p>
    </div>
    </li>
    `;
};
    const item = createItemByString();
    console.log(item);
    return item;
    
});


//==================================================================//====================//====================
const User = {
    name: "user",
    age: '20',
    skills: "JS",

}

const jsonUser = JSON.stringify(User)
const newUser = JSON.parse(jsonUser)




const addResult = result.join("")
// console.log(result);

console.log(list);

list.insertAdjacentHTML("beforeend", addResult);


localStorage.setItem("name", "user")
console.log(localStorage)


localStorage.getItem("user")

localStorage.removeItem('name')

localStorage.clear()

//===============================

