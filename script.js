$(function(){
    let aktIndex=0;
    //beleteszük az adatokat egy tömbe
    //const meret = 1;
    const kepAdat=[
        {
            cim:"1. kép címe",
            eleresiut:"kepek/kep1.jpg",
            leiras:"1.kép leírása"
        },
        {
            cim:"2. kép címe",
            eleresiut:"kepek/kep2.jpg",
            leiras:"2.kép leírása"
        },
        {
            cim:"3. kép címe",
            eleresiut:"kepek/kep3.jpg",
            leiras:"3.kép leírása"
        }
    ];
    // van egy sablon elemünk,
    // a sablonelemet klónozzuk,
    //hozzá csatoljuk a szülőelemhez
   
    //végig megyünk a tömbünkön és
    //a klónozott elemmel és
    // tömb adataival példányosítjuk a Kártyákat
    const galeriaSzuloElem=$("#galeria");
    let sablonElem=$(".kartya");
    //let ujElem = sablonElem.clone().appendTo(galeriaSzuloElem);
    //const ujKartya=new Kartya(ujElem, kepAdat[0]);


    /* for (let index = 0; index < kepAdat.length; index++) {
            let ujElem=sablonElem.clone().appendTo(galeriaSzuloElem);
            const ujKartya=new Kartya(ujElem, kepAdat[index]);
        
        
    } */
    kepAdat.forEach(function(elem, index){
        let ujElem=sablonElem.clone().appendTo(galeriaSzuloElem);
        const ujKartya=new Kartya(ujElem,elem, index);
    })

    
    const nagyKepSzuloElem=$("#fokep");
    let ujElem=sablonElem.clone().appendTo(nagyKepSzuloElem);
    const ujKartya=new Kartya(ujElem,kepAdat[aktIndex], aktIndex);
    

    sablonElem.remove();

    $(window).on("kattintottKepEsemeny", (esemeny)=>{
        console.log(esemeny.detail);
        //let kepID = esemeny.detail;
        //console.log(kepID);
        //$("#fokep").eq(1).empty();
        
       /*  $("#fokep h3").html(esemeny.detail.cim);
        $("#fokep img").attr("src", esemeny.detail.eleresiut );
        $("#fokep p").html(esemeny.detail.leiras);  */
        ujKartya.setAdatok(esemeny.detail);
        aktIndex=esemeny.detail.index;
        
    
    })
    $("#jobb").on("click",function(){
        aktIndex++;
        if(aktIndex>kepAdat.length-1){
            aktIndex=0;
        }
        ujKartya.setAdatok(kepAdat[aktIndex]);
    })
    $("#bal").on("click",function(){
        aktIndex--;
        if(aktIndex<0){
            
            aktIndex=kepAdat.length-1;
        }
        ujKartya.setAdatok(kepAdat[aktIndex]);
    })


    
});