class Aszinkron{
    constructor(){}

    //egy osztály tagfüggvénye elé nem kell a function
    beolvas(eleresiut, callback){
        fetch(eleresiut)
        .then(res => res.json())
        .then(data => {
            console.log(data.receptTomb);
            callback(data.receptTomb);
        })
        .catch(err => console.log(err));
    }
}