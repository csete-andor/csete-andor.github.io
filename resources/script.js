const lang_btn = document.getElementById("lang");
var curLang = "hu";

const title = document.getElementById("title");
const content = document.getElementById("content");
const cseteandor = document.getElementById("cseteandor");
const links = document.getElementById("links");



function changeLang(){
    fetch("resources/languagePack.json")
          .then((response) => response.json())
          .then((data) => {
            const hu = data.lang.hu;
            const en = data.lang.en;
          
    if(curLang === "en"){
        title.innerText = hu.title;
        content.innerHTML = hu.content+'<div id="contacts"><a href="mailto://info@cseteandor.hu">info@cseteandor.hu</a><br><a href="mailto://csete.andor@phwi.hu">csete.andor@phwi.hu</a></div>';
        cseteandor.innerText = hu.cseteandor;
        links.innerHTML = '<a href="https://cseteandor.hu/evesmunka/info" class="links">'+hu.links[0]+'</a><br><a href="https://cseteandor.hu/animal-facts" class="links">'+hu.links[1]+'</a><br><a href="https://cseteandor.hu/altimore" class="links">'+hu.links[2]+'</a><br><a href="https://cseteandor.hu/mystery" class="links">'+hu.links[3]+'</a><br>'
        
        curLang = "hu";
        lang_btn.innerHTML = "en";
    }
    else{
        title.innerText = en.title;
        content.innerHTML = en.content+'<div id="contacts"><a href="mailto://info@cseteandor.hu">info@cseteandor.hu</a><br><a href="mailto://csete.andor@phwi.hu">csete.andor@phwi.hu</a></div>';
        cseteandor.innerText = en.cseteandor;
        links.innerHTML = '<a href="https://cseteandor.hu/evesmunka/info" class="links">'+en.links[0]+'</a><br><a href="https://cseteandor.hu/animal-facts" class="links">'+en.links[1]+'</a><br><a href="https://cseteandor.hu/altimore" class="links">'+en.links[2]+'</a><br><a href="https://cseteandor.hu/mystery" class="links">'+en.links[3]+'</a><br>'
        
        curLang = "en";
        lang_btn.innerHTML = "hu";
    };
});
}