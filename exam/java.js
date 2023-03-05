const box = document.getElementById("box");
const numberOfPeople = document.getElementById("num-of-people");
const clearAll = document.getElementById("clear-all");

clearAll.addEventListener('click', () => {
console.log(1);
})



const data = [
    {
      id: 1,
      name: "Bertie Yates",
      age: 29,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    },
    {
      id: 2,
      name: "Hester Hogan",
      age: 32,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
    },
    {
      id: 3,
      name: "Larry Little",
      age: 36,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    },
    {
      id: 4,
      name: "Sean Walsh",
      age: 34,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    },
    {
      id: 5,
      name: "Lola Gardner",
      age: 29,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    },
  ];

  function displayPeople(people) {
    let peopleArr = people.map((item) => {
        const { img, name, age } = item 
        return `<article class="person">
                    <img src=${img}
                        alt="person image">
                    <div>
                        <h4>${name}</h4>
                        <p>${age} years</p>
                    </div>
                </article>`
    });
  }
  console.log(data);



    
    


