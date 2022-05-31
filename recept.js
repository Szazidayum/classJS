//ez az osztáy felel egyetlen recept megjelenítéséért

class Recept{
    constructor(adat,elem){
        //inicializálja az adattagokat
        this.elem = elem; //a HTML elem, ahova a recept adatai kerülnek
        this.adat = adat; //név, leírás, hozzávalók
        console.log(this.adat);
        //megfogjuk azokat a HTML elemeket, amibe az egyes adatok kerülnek
        this.nevElem = this.elem.children("h3");
        this.leirasElem = this.elem.children(".leiras");
        this.hozzavalokElem = this.elem.children(".hozzavalok");
        this.beallit(this.adat);
    }

    beallit(adat){
        this.nevElem.text(adat.nev);
        this.leirasElem.text(adat.leiras);
        this.hozzavalokElem.text(adat.hozzavalok);
    }
}