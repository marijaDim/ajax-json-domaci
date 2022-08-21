// zadatak 1-4
//Kreirati JSON koji cuva podatke o korisnicima: id, ime i prezime.
// Napisati asinh. zahtev za dohvatanje podataka iz fajla korisnici.json.
// Ispisati u konzoli rezultat asinh. zahteva, ukoliko je uspesno preuzet sadrzaj fajla.
// Prikazati dobijene korisnike iz JSON fajla u formi tabele u okviru bloka id="korisnici"


// const xhr= new XMLHttpRequest();

// xhr.addEventListener("readystatechange",function(){
//     if(xhr.readyState==4 && xhr.status==200){
//         ispisi(xhr.responseText);
//     }
// })

// xhr.open("GET","korisnici.json");
// xhr.send();



// function ispisi(response){
//     let data=JSON.parse(response);
//     console.log(data)
//     let print="";

//     data.forEach(element => {
      
//     print+=`<table border="1px solid black"><tr>
//       <th>${element.id}</th>
//       <th>${element.imeIprezime}</th>
//     </tr></table>`
// });
//   document.getElementById("korisnici").innerHTML= print;
// }


//asynk,await

async function dohvatiKorisnike() {
  try {
      const data = await fetch(`korisnici.json`).then(result => {
              return result.json();
          
          throw new Error(result.statusText);
      });
      console.log(data);
      prikaziKorisnike(data);
  }
  catch (err) {
      console.log(err);
  }
}

dohvatiKorisnike();

function prikaziKorisnike(data){
  let print="";

    data.forEach(element => {
      
    print+=`<table border="1px solid black"><tr>
      <th>${element.id}</th>
      <th>${element.imeIprezime}</th>
    </tr></table>`
});
  document.getElementById("korisnici").innerHTML= print;
}
//zadatak 5 i 6
//Kreirati asinh. zahtev ka nepostojećem fajla asinh..json i prikazati u konzoli greske koje nastaju.
//Prikazati u konzoli status i tekst neuspešnog asinh. zahteva.

// const xhr1= new XMLHttpRequest();

// xhr1.addEventListener("readystatechange",function(){
//     if(xhr1.readyState==4 && xhr1.status==200){
//         console.log(xhr1.responseText);
//     }else{
//       console.log (xhr1.statusText);
//     }
// })

// xhr1.open("GET","asinh..json");
// xhr1.send();



//asynk-await


async function dohvatiKorisnike2() {
  try {
      const data = await fetch(`asinh..json`).then(result => {
              return result.json();
          throw new Error(result.statusText);
      });
      console.log(data);
      prikaziKorisnike(data);
  }
  catch (err) {
      console.log(err);
  }
}

dohvatiKorisnike2();
// //zadatak broj 7
// //Kreirati asinh. zahtev ka fajlu kategorije.json i prikazati dobijene kategorije u okviru dropdown liste sa id="kategorije".


// const request1= new XMLHttpRequest();

// request1.addEventListener("readystatechange",function(){
//     if(request1.readyState==4 && request1.status==200){
//         show(request1.responseText);
//     }
// })

// request1.open("GET","kategorije.json");
// request1.send();



// function show(response){
//     let data=JSON.parse(response);
//     console.log(data);
//     let print="<option value="0">Izaberite</option>";

//     data.forEach(element => {
      
//     print+=`<option class="lista" value="${element.id}">${element.naziv}</option>`

// });
//   document.getElementById("kategorije").innerHTML= print;
// }


//asynk-await


async function dobijeneKategorije(){

  try{
    const data=await fetch("kategorije.json").then(result=>{
      return result.json();
      throw new Error(result.statusText);
    })
    console.log(data);
    prikaziKategorije(data);
  }
  catch(err){
    console.log(err);
  }
}

dobijeneKategorije();

function prikaziKategorije(data){
  let print=`<option value="0">Izaberite</option>`;

    data.forEach(element => {
      
    print+=`<option class="lista" value="${element.id}">${element.naziv}</option>`

});
  document.getElementById("kategorije").innerHTML= print;

}

// //zadatak broj 8
// //Kreirati asinh. zahtev ka fajlu proizvodi.json i prikazati proizvodi u okviru bloka id="proizvodi" u skladu sa priloženim šablonom.

// const request2= new XMLHttpRequest();

// request2.addEventListener("readystatechange",function(){
//     if(request2.readyState==4 && request2.status==200){
//         prikazi(request2.responseText);
//     }
// })

// request2.open("GET","proizvodi.json");
// request2.send();



// function prikazi(response){
//     let data=JSON.parse(response);
//     console.log(data);
//     let print="";

//     data.forEach(element => {
      
//     print+=`<div class="proizvod">
//     <h3>${element.naziv}</h3>
//     <img src=${element.slika}>
//     <p class="proizvod-opis">
//       <span class="cena">Cena:${element.cena} RSD </span>
//       <span class="kategorija">Kategorija:${element.kategorija.naziv} </span>
//     </p>
//   </div>`

// });
//   document.getElementById("proizvodi").innerHTML= print;
// }

//asynk-await

async function dohvatiProzivode(){
  try{
    const data=await fetch("proizvodi.json").then(result=>{
      return result.json();
      throw new Error(result.statusText);
    })
      prikaziProzivode(data);
  }
  catch(err){
    console.log(err);
  }
}
dohvatiProzivode();
function prikaziProzivode(data){
  let print="";

    data.forEach(element => {
      
    print+=`<div class="proizvod">
    <h3>${element.naziv}</h3>
    <img src=${element.slika}>
    <p class="proizvod-opis">
      <span class="cena">Cena:${element.cena} RSD </span>
      <span class="kategorija">Kategorija:${element.kategorija.naziv} </span>
    </p>
  </div>`

});
  document.getElementById("proizvodi").innerHTML= print;
}

// // zadatak 9,10,11
// // Klikom na taster sa id="btnPrikazi", prikazati samo proizode koji pripadaju kategoriji koja je izabrana iz dropdown liste.
// // Klikom na link " Sortiraj po nazivu " sortirati prozivode po nazivu u rastucem redosledu. (Dohvatiti ponovo proizvode iz JSON fajla)
// // Klikom na link " Sortiraj po ceni " sortirati prozivode po ceni u opadajucem redosledu. (Sortirati DOM)

let dugme=document.getElementById("btnPrikazi");
dugme.addEventListener("click",prikaziIzKategorije);

async function prikaziIzKategorije(){
  try{
    var data=await fetch("proizvodi.json").then(result=>{
      return result.json();
      throw new Error(result.statusText);
    });
  
    if(kategorije.value != 0){
      data=data.filter(element=> element.kategorija.id==kategorije.value);
      prikaziProzivode(data);
    }
  }
  catch(err){
    console.log(err);
  }
}


document.getElementById("sort-naziv").addEventListener("click",sortirajNaziv);

async function sortirajNaziv(){
  try{
    var data=await fetch("proizvodi.json").then(result=>{
      return result.json();
      throw new Error(result.statusText);
    })
    if(kategorije.value != 0){
      data=data.filter(element=> element.kategorija.id==kategorije.value);
      data=data.sort(function(a,b){
        if(a.naziv>b.naziv) return 1;
        if(a.naziv<b.naziv) return -1;
        if(a.naziv==b.naziv) return 0;
      })
      prikaziProzivode(data);
  }else{
    data=data.sort(function(a,b){
      if(a.naziv>b.naziv) return 1;
      if(a.naziv<b.naziv) return -1;
      if(a.naziv==b.naziv) return 0;
    })
    prikaziProzivode(data);
  }
  }catch(err){
    console.log(err);
  }
}

  let sviProizvodi=document.querySelectorAll(".proizvod");
  console.log(sviProizvodi)
document.getElementById("sort-cena").addEventListener("click",sortirajCena);



async function sortirajCena(){
  try{
    var data=await fetch("proizvodi.json").then(result=>{
      return result.json();
      throw new Error(result.statusText);
    });
    if(kategorije.value != 0){
      data=data.filter(element=> element.kategorija.id==kategorije.value);
      data=data.sort(function(a,b){
        if(a.cena<b.cena) return 1;
        if(a.cena>b.cena) return -1;
        if(a.cena==b.cena) return 0;
      })
      prikaziProzivode(data);
  }else{
    data=data.sort(function(a,b){
      if(a.cena<b.cena) return 1;
      if(a.cena>b.cena) return -1;
      if(a.cena==b.cena) return 0;
    })
    prikaziProzivode(data);
  }
  }
  catch(err){
    console.log(err);
  }
}