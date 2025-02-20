
// Part 1
let name = 'Slippers';
const id = Symbol('0001');
let price = 15.5;
let isSale = false;
let qty = 50;

console.log(typeof name)
console.log(typeof id)
console.log(typeof price)
console.log(typeof isSale)
console.log(typeof qty)

let inventory = [
    {
        name: "Slippers",
        id: Symbol('0001'),
        price: 15.5,
        isSale: false,
        qty: 50,
        details: {
            color: 'Blue',
            size: 45 
        }
    },
    {
        name: "Hats",
        id: Symbol('0002'),
        price: 50.00,
        isSale: false,
        qty: 50,
    },
    {
        name: "Shoes",
        id: Symbol('0003'),
        price: 99.05,
        isSale: true,
        qty: 99,
    }
]
// Part 2

const freezeObject = inventory[0]
Object.freeze(freezeObject);
freezeObject['name'] = 'Wristband'
console.log(freezeObject['name']) //to display if change object name is applied
freezeObject['isNewProduct'] = true
console.log(freezeObject['isNewProduct']) //to display if new object key was made
delete freezeObject['qty']; 
console.log(freezeObject['qty']) //to display if the deleted key is still visible
freezeObject['details']['color'] = 'Green'; // it is still change because the deepfreeze function is not applied
console.log(freezeObject)

//Because object.freeze is only freezing object itself not the nested object to prevent a total mutability and include the nested object to become freeze also
// in my case I use foreach that tracks all object inside of object and if there is object I add the object freeze on that object


deepfreeze(freezeObject) // ensuring the mutability of this nested object
freezeObject['details']['color'] = 'Yellow';
console.log(freezeObject) // to test if the color green is not applied or if deepfreeze function is working


function deepfreeze(obj){
    if (obj && typeof obj === "object") { 
        Object.freeze(obj); // freezing the object
        Object.getOwnPropertyNames(obj).forEach(prop => deepfreeze(obj[prop])); // recalling a function that checks if there still object or  not freeze obj
      }
    return obj;
}

// Part 3
const sealedObject = inventory[1];

sealedObject['price'] = 60.5
console.log(sealedObject['price']) //to display if change object name is applied
sealedObject['description'] = 'A high quality hats'
console.log(sealedObject['description']) //to display if new object key was made
delete sealedObject['qty']; 
console.log(freezeObject['qty']) //to display if the deleted key is still visible


// an object.freeze function is use to lock the object therefore any modification, deletion and adding is can not done on freezed objects, unlike
// an object.seal function is allows you to add modification and key adding on object but deletion on this object is can't be done  



// Part 5

//Const use this keyword to the variables that holds a not changeable value like sqls column id, registration date
// Object.freeze() is use if you want to have an object that you want only to refer but not change in entire web load, for example employee profile. 
// Object.seal() is you want to apply changes in an object for example employee's salary, dtr




