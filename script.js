$(function () {
    //beolvas("receptek.json",megjelenit);
    //megjelenit();

    const aszinkron = new Aszinkron();
    aszinkron.beolvas("receptek.json", megjelenit);

    //ezek töltődnek a html beöltödése után
    //console.log("valami");
    //$(".tartalom").html("<div>Ez a első div</div>");
    //$(".tartalom").append("<div>Ez a második div</div>");
    //$(".tartalom").empty();
    let miVanBenne = $(".tartalom").text();
    //console.log(miVanBenne);
    //inline stílus hozzáadása
    $(".tartalom div").css("border", "1px solid gray");
});

function megjelenit(tomb) {
    let szuloElem = $(".tartalom");
    let sablonElem = $(".recept"); //erről készítünk másolatot és hozzátesszük a szülőelemhez

    tomb.forEach(function (recept/* , index */) {
        let htmlElem = sablonElem.clone();
        szuloElem.append(htmlElem);
        /* const aktRecept =  */new Recept(recept, htmlElem);

        /* //$(".tartalom").append(`<div><p>${recept.nev}</p></div>`);
        //$(".tartalom").append(`<div><p>${recept.leiras}</p></div>`);
        //$(".tartalom").append(`<div><p>${recept.hozzavalok}</p></div>`);
    
        $(".tartalom").append("<div></div>");
        /* $(".tartalom div").eq(index).append(`<h3>${recept.nev}</h3>`);
        $(".tartalom div").eq(index).append(`<p>${recept.leiras}</p>`);
        $(".tartalom div").eq(index).append(`<p>${recept.hozzavalok.join()}</p>`);
        for (const key in recept){
            $(".tartalom div").eq(index).append(`<p>${recept[key]}</p>`);
            //$(".tartalom div").eq(index).addClass("kiemel")
        } */
    });
    /* $(".tartalom div").on("click", function(){
        $(this).toggleClass("kiemel");
    }) */
    sablonElem.remove();
}