let salon={
    name:"The Fashion Pet",
    phone:"2813308004",
    address:{
        Street:"Palm",
        number:"262-k",
        zip:"92058"
    },
    pets:[]
}
    function Pet(n,a,g){
        this.name=n;
        this.age=a;
        this.gender=g;
    }



function getE(id){
    return document.getElementById(id);
}

let inputName=getE("txtName");
let inputAge=getE("txtAge");
let inputGender=getE("txtGender");


function register(){
    let newPet= new Pet(inputName.value,inputAge.value,inputGender.value);
    salon.pets.push(newPet);
    dispalyPetNames();
    inputName.value="";
    inputAge.value="";
    inputGender.value="";

}

function init(){

    let pet1=new Pet("Scooby",60,"Male");
    let pet2=new Pet("Scrappy",20,"Male");
    let pet3=new Pet("Birdy",10,"Male");
    salon.pets.push(pet1,pet2,pet3);

    dispalyPetNames();
    displayFooterInfo();
}
window.onload=init;


