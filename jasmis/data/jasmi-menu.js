const menuItems = [
  { name: "Big J", price: 2.4 },
  { name: "Special J", price: 2.5 },
  { name: "Mega J", price: 2.9 },
  { name: "Triple J", price: 2.7 },
  { name: "Spicy Chickee Chicken", price: 2.3 },
]

//A function that returns the menuItems
const getAll = () => {
  return menuItems
}

//Include the function in the module's exports object
module.exports = { getAll }
