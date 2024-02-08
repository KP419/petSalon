function dispalyPetNames(){
    document.getElementById('pets').innerHTML="";
    for( let i=0;i<salon.pets.length;i++){
        document.getElementById("pets").innerHTML+=`<p>${salon.pets[i].name}</p>`;
    }
    document.getElementById('totalPets').innerHTML=`Total=${salon.pets.length}`
}

function displayFooterInfo(){
    document.getElementById("info").innerHTML=`
    <p> Welcome to the ${salon.name} is located in ${salon.address.Street} ${salon.address.number} ${salon.address.zip}</p>
    `;
}

function displayPetCards(){

}
