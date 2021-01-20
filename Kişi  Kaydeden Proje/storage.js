
function Storage() {
    
}
Storage.prototype.addKisiToStorage=function(newperson){
    let persons=this.GetPersonStorage();
    persons.push(newperson);

    localStorage.setItem("persons",JSON.stringify(persons));

}
Storage.prototype.GetPersonStorage=function(){
    let persons;
    if (localStorage.getItem("persons")===null) {
        persons=[];
    }else{
        persons=JSON.parse(localStorage.getItem("persons"));
    }
    return persons;
}
Storage.prototype.loadAllpersons=function(persons){
    let personList=document.getElementById("div5");
    persons.forEach(function(person) {
        personList.innerHTML+=`<div class="div2" id="${person.id}"> 
        <p class="yazi"> 
        ID = ${person.id}<br>İSİM = ${person.isim}<br>NUMARA = ${person.numara}
        </p>
        </div>`;
    });
}