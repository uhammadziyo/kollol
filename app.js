let btn = document.getElementById(`btn`);


fetch(`https://randomuser.me/api/`)
.then((res) => res.json())
.then((data) => {
    let myData = data.results[0];

    let rasm = document.getElementById(`rasm`);
    let name = document.getElementById(`name`);
    let city = document.getElementById(`city`)
    rasm.src = myData.picture.large;
    name.innerHTML = `Name` + myData.name.first + myData.name.last
})

btn.addEventListener('click', () =>{
    getData()

});

function getData(){
    fetch("https://randomuser.me/api/")
    .then((res)=>res.json())
    .then((data)=>getUser(data));
}
getData()
function getUser(user){
    let myData = user.results[0];
    let rasm = document.getElementById("rasm")
    let name =document.getElementById("name")
    let city= document.getElementById("city")
    let phone = document.getElementById("tell")
    rasm.src=myData.picture.large;
    name.innerHTML= "Name: "+myData.name.first + " " + myData.name.last;
    city.innerHTML = "City: " + myData.location.country; 
    tell.innerHTML = "Tell: " + myData.phone;
    console.log(myData.phone)
}

// fetch(`https://randomuser.me/api/`)
// .then((res) => res.json())
// .then((data) => {
//     let myData = data.results[0];
//     console.log(myData)

//     let rasm = document.getElementById(`rasm`);
//     let name = document.getElementById(`name`);
//     let tel = document.getElementById(`tel`);
//     let city = document.getElementById(`city`);

//     rasm.src = myData.picture.large;
//     name.innerHTML = `Name` + myData.name.first + myData.name.last
//     city.innerHTML = `tel` + myData.city.state + myData.city.country
// })



