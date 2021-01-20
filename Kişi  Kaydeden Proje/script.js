let isimInput = document.getElementById("isim");
let numaraInput = document.getElementById("number");
let kaydetBtn =document.querySelector("#kaydet");
let eklenecekDiv=document.getElementById("div5");
let silBtn =document.querySelector("#sil");
let id=0;
let kisiler=[];
let storage=new Storage()
eventListeners();

function eventListeners() {
    document.addEventListener("DOMContentLoaded",function(){
        let persons=storage.GetPersonStorage();
        storage.loadAllpersons(persons);
    });
}

function Persons(id,isim,numara) {
    this.id=id,
    this.numara=numara,
    this.isim=isim
}

kaydetBtn.addEventListener("click",function(e){
    let isim=isimInput.value;
    let numara=numaraInput.value;
    id++;
    const newperson=new Persons(id,isim,numara);
    kisiKaydet(isim,numara,id);
    storage.addKisiToStorage(newperson);
    e.preventDefault();
})


silBtn.addEventListener("click",function(e){
    numara=numaraInput.value;
         
    var c=confirm("Silmek istediğinize emin misiniz?")
    if (c==true) {
        kisiSil(numara);
    }else
    {}
    e.preventDefault();
})


function kisiKaydet(isim,numara,id) {
    html=`<div class="div2" id="${id}"> <p class="yazi"> ID = ${id}<br>İSİM = ${isim}<br>NUMARA = ${numara}</p></div>`;
    eklenecekDiv.innerHTML += html;    
    alert("kişi eklendi");
}
function kisiSil(numara){
    let sil=document.getElementById(`${numara}`);
    eklenecekDiv.removeChild(sil);
    
}