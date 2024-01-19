const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  for (let i = 0; i < data.length; i++) {    // i = data 
    if (data[i].profession == "developer") {      // यह चेक करेगा की profession प्रॉपर्टी  मे developer है या नहीं 
      console.log(data[i].name);     // agar ye profession === "developer" sahi hai to hum print karwa denge 
    }
  }
}


// 2. Add Data
function addData() {
  const name = prompt("Enter name:");   // hum prompt ka use karke yahan par name input lenge
  const age = parseInt(prompt("Enter age:"));   // or yahan par age input lenge  and parseInt means hame number me input lena hai 
  const profession = prompt("Enter profession:");  //  or yahan par profession

  const newUser = { name, age, profession };    // yahan par ek new object create karke data array me push karwa denge 
  data.push(newUser);
}


// 3. Remove Admins
function removeAdmin() {    // yahan par hum all data ko ramove kar denge array me se || filter karke jinka property profession eqal hai admin ke  
  const updatedData = data.filter(item => item.profession !== "admin");
  return updatedData;
}

// is function me print nhi ho raha tha isliye new function banakar console karwa diya 
function jeet() {
  console.log("Data after removal:", removeAdmin());
}



// 4. Concatenate Array
function concatenateArray() {
  const dummyArray = [               // yahan par hum ek dummy array lenge 
    { name: "Satish", age: 22, profession: "developer" },
    { name: "Jeet", age: 21, profession: "admin" },
  ];

  const result = data.concat(dummyArray);   // data name ke array me dummyArray ko jod denge 
  console.log("Concated Array:", result);   // console me print karwa denge
}


// 5. Average Age
function averageAge() {
  let sum = 0;            // ek variable lenge sum name ka 
  for (let i = 0; i < data.length; i++) {    // i = 0  ( i is value of array)
    sum += data[i].age;     // yahan par sum me age ko plus karwa denge
  }
  const average = sum / data.length;   // ek naya variable lekar sum me data name ke array ko devide karwa denge 
  console.log("Average Age:", average);
}


// 6. Age Check
function checkAgeAbove25() {
  for (let i = 0; i < data.length; i++) {   // yahan par hum ek for loop lekar check karenge ki array me koi user 25 age se bada hai usko print karwa denge 
    if (data[i].age > 25) {   // age is grater then 25 to console log 
      console.log(data[i])
    }
  }
}

// 7. Unique Professions
function uniqueProfessions() {

}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log("age in ascending order:", data);
}

// 9. Update Profession
function updateJohnsProfession() {
  const john = data.find(item => item.name.toLowerCase() == "john");
  if (john) {
    john.profession = "manager";
  }
  console.log(data)
}


// 10. Profession Count
function getTotalProfessions() {
  const developerCount = data.filter(item => item.profession == "developer").length;
  const adminCount = data.filter(item => item.profession == "admin").length;
  console.log("Developer Count:", developerCount);
  console.log("Admin Count:", adminCount);
}
