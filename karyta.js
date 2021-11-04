class Kartya{
    constructor(elem, adat, index){
        //létre hozunk változókat az új elemhez
        this.elem=elem;
        //változókat az elem egyes grafikus elméhez
        this.cim=this.elem.children("h3");//html DOM elem
        this.kep=this.elem.children("img");
        this.leiras=this.elem.children("p");
        this.adat=adat;
        this.adat.index = index;
        this.setAdatok(this.adat);
        // konkrét elemeknek értéket adunk
        /* this.cim.html(this.adat.cim);//az adat ami bele kerül
        this.kep.attr("src",this.adat.eleresiut);//az adat ami bele kerül
        this.leiras.html(this.adat.leiras);//az adat ami bele kerül
 */
        this.elem.on("click", ()=>{//kattintás esemény kezelő
            console.log(this);
            this.KattintasTrigger();
        });
       
    }
    setAdatok(ertekek){
        this.cim.html(ertekek.cim);//az adat ami bele kerül
        this.kep.attr("src",ertekek.eleresiut);//az adat ami bele kerül
        this.leiras.html(ertekek.leiras);//az adat ami bele kerül
    }


    KattintasTrigger(){
        let esemeny = new CustomEvent("kattintottKepEsemeny",{detail:this.adat});
        window.dispatchEvent(esemeny);
    }

    
}