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
    getE(`pets`) .innerHTML="";
    let card="";
    for(let i=0;i<salon.pets.length;i++){
        let pet = salon.pets[i];
        card+=`
            <div class="petCard">
                <p>Name:${pet.name}</p>
                <p>Age:${pet.age}</p>
                <p>Gender:${pet.gender}</p>
                <p>Breed:${pet.breed}</p>
                <p>Service:${pet.service}</p>
                <p>Type:${pet.type}</p>
            </div>
        `;
        console.log(card);
    }
    getE(`pets`).innerHTML=card;

}
