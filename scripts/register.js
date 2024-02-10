let salon={
    name:"Tail Wagging Spa that",
    phone:"2813308004",
    address:{
        Street:"Tail Wagging Lane",
        number:"4646",
        zip:"92058"
    },
    pets:[]
}
    function Pet(n,a,g,b,s,t){
        this.name=n;
        this.age=a;
        this.gender=g;
        this.breed=b;
        this.service=s;
        this.type=t;
    }



function getE(id){
    return document.getElementById(id);
}

let inputName=getE("txtName");
let inputAge=getE("txtAge");
let inputGender=getE("txtGender");
let inputBreed=getE("txtBreed");
let inputService=getE("txtService");
let inputType=getE("txtType");



function register(){
    let newPet= new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value);
    salon.pets.push(newPet);
    displayPetCards();
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.vaule="";
    inputType.vaule="";

}

function init(){

    let pet1=new Pet("Scooby",60,"Male", "","","");
    let pet2=new Pet("Scrappy",20,"Male", "","","");
    let pet3=new Pet("Birdy",10,"Male", "","","");
    salon.pets.push(pet1,pet2,pet3);

    displayPetCards();
    displayFooterInfo();
}
window.onload=init;


