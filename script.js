// ################################################################################################################################################  Artits page varibale names
const mainpage = document.querySelector("#right");                   // main access using same variable name
const ZaynPage = document.querySelector("#Zayn");                   // ZAYN page
const DivinePage = document.querySelector("#Divine");               // DIVINE page
const EMINEMPage = document.querySelector("#Eminem");               // EMINEM page
const Justinpage = document.querySelector("#Justin");               // JUSTIN PAGE
const Aramaanpage = document.querySelector("#Aramaan");             // ARMAAN PAGE
const Arijitpage = document.querySelector("#Arijit");               // ARIJIT PAGE
const TaylorSwiftpage = document.querySelector("#TaylorSwift");     // TAYLOR SWIFT PAGE
const EDshreeranpage = document.querySelector("#EDshreeran");       // ED SHEEERAN PAGE
const DuaLipapage = document.querySelector("#DuaLipa");             // DUA LIPA PAGE
const BillieEillishpage = document.querySelector("#BillieEillish"); // BILLIE EILLISH PAGE
const Arianapage = document.querySelector("#Ariana");               // ARIANA PAGE
const Selenapage = document.querySelector("#Selena");               // SELENA GOMEZ
const Kaynepage = document.querySelector("#Kayne");                 // KAYNE WESTE PAGE
const DailyMix_1 = document.querySelector("#DailyMix1");
const DailyMix_2 = document.querySelector("#DailyMix2");
const DailyMix_3 = document.querySelector("#DailyMix3");
const DailyMix_4 = document.querySelector("#DailyMix4");
const DailyMix_5 = document.querySelector("#DailyMix5");
const Radio_1 = document.querySelector("#Radio_1");
const Radio_2 = document.querySelector("#Radio_2");
const Radio_3 = document.querySelector("#Radio_3");
const Radio_4 = document.querySelector("#Radio_4");
const Radio_5 = document.querySelector("#Radio_5");
const Hollywood = document.querySelector("#Hollywood");
const Bollywood = document.querySelector("#Bollywood");
const Sandalwood = document.querySelector("#Sandalwood");
const Japanese = document.querySelector("#Japanese");
const animal = document.querySelector("#Animal");
const kgf = document.querySelector("#Kgf");
const bajirao = document.querySelector("#Bajirao");
const kantara = document.querySelector("#Kantara");
const kabirsingh = document.querySelector("#Kabirsingh");
const Korea = document.querySelector("#Korea");
const EXCLUSIVES = document.querySelector("#EXCLUSIVES");
const POWER = document.querySelector("#POWER");
const CARDIO = document.querySelector("#CARDIO");
const BEATS = document.querySelector("#BEATS");
const SPIKES = document.querySelector("#SPIKES");
const MORNING = document.querySelector("#MORNING");
const EMOTIONAL = document.querySelector("#EMOTIONAL");
const HIPHOP = document.querySelector("#HIPHOP");
const DEVOTIONAL = document.querySelector("#DEVOTIONAL");
const PARTY = document.querySelector("#PARTY");
const mainSongInfo = document.querySelector("#mainsonginfo");
// artits buttons ###############################################################################################################################################  artits buttons

const ZaynAlbum = document.querySelectorAll(".ZAYN");                          // ZAYN BUTTON
const Divinealbum = document.querySelectorAll(".DIVINE");                      // DIVINE BUTTON
const EMINEMalbum = document.querySelectorAll(".EMINEM");                      // EMINEM BUTTON
const Justinalbum = document.querySelectorAll(".Justin");                      // JUSTIN BUTTON
const Armaanalbum = document.querySelectorAll(".armaan");                      // ARMAAN BUTTON
const Arijitalbum = document.querySelectorAll(".Arijit");                      // ARIJIT BUTTON
const TaylorSwiftalbum = document.querySelectorAll(".TaylorSwift");            // TAYLOR SWIFT BUTTON 
const EDshreeranalbum = document.querySelectorAll(".EDshreeran");              // ED SHEEERAN BUTTON
const DuaLipaalbum = document.querySelectorAll(".DuaLipa");                    // DUA LIPA BUTTON
const BillieEillishalbum = document.querySelectorAll(".BillieEillish");        // BILLIE EILLISH BUTTON
const Arianaalbum = document.querySelectorAll(".Ariana");                      // ARIANA BUTTON
const Selenaalbum = document.querySelectorAll(".Selena");                      // SELENA GOMEZ BUTTON
const Kaynealbum = document.querySelectorAll(".Kayne");                        // KAYNE WESTE BUTTON
const DailyMix_1_Album = document.querySelectorAll(".DailyMix1");
const DailyMix_2_Album = document.querySelectorAll(".DailyMix2");
const DailyMix_3_Album = document.querySelectorAll(".DailyMix3");
const DailyMix_4_Album = document.querySelectorAll(".DailyMix4");
const DailyMix_5_Album = document.querySelectorAll(".DailyMix5");
const Radio_1_Album = document.querySelectorAll(".radio1");
const Radio_2_Album = document.querySelectorAll(".radio2");
const Radio_3_Album = document.querySelectorAll(".radio3");
const Radio_4_Album = document.querySelectorAll(".radio4");
const Radio_5_Album = document.querySelectorAll(".radio5");
const hollywood_Album = document.querySelectorAll(".hollywood");
const bollywood_Album = document.querySelectorAll(".bollywood");
const Korea_Album = document.querySelectorAll(".CinemaofSouthKorea");
const Japanese_Album = document.querySelectorAll(".JapaneseCinema");
const Sandalwood_Album = document.querySelectorAll(".sandalwood");
const animal_Album = document.querySelectorAll(".animal");
const kgf_Album = document.querySelectorAll(".kgf");
const bajirao_Album = document.querySelectorAll(".bajirao");
const kantara_Album = document.querySelectorAll(".kantara");
const kabirsingh_Album = document.querySelectorAll(".kabirsingh");
const EXCLUSIVES_Album = document.querySelectorAll(".exercise");
const POWER_Album = document.querySelectorAll(".power");
const CARDIO_Album = document.querySelectorAll(".cardio");
const BEATS_Album = document.querySelectorAll(".gym");
const SPIKES_Album = document.querySelectorAll(".adrenaline");
const MORNING_Album = document.querySelectorAll(".morning");
const EMOTIONAL_Album = document.querySelectorAll(".emotional");
const HIPHOP_Album = document.querySelectorAll(".hiphop");
const DEVOTIONAL_Album = document.querySelectorAll(".devotinal");
const PARTY_Album = document.querySelectorAll(".party");
const SongInfoList = document.querySelectorAll(".songinfo");                   // Song Info List
const SongList = document.querySelectorAll(".SongPreview"); 
// ##############################################################  changing the right side part common variable  ######################################################################

let closepages = document.querySelectorAll(".change")

// ####################################################################### activating the back button ###################################################################################

const backhome = document.querySelectorAll(".backhome")
for (let x = 0; x < backhome.length; x++){
    backhome[x].addEventListener("click", ()=>{
        mainpage.style.display = "flex";
        // mainpage.scrollTop = 0;
        for (let x in closepages){
            closepages[x].style.display = "none";
        }
    })
}

const defaulthome = document.querySelectorAll(".defaulthome")
for (let x = 0; x < defaulthome.length; x++){
    defaulthome[x].addEventListener("click", ()=>{
        mainpage.style.display = "flex";
        mainpage.scrollTop = 0;
        for (let x in closepages){
            closepages[x].style.display = "none";
        }
    })
}
// #################################################################  navigating the pages on right part ############################################################################## 

// ZAYN page

for (let a = 0; a < ZaynAlbum.length; a++){
    ZaynAlbum[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "Zayn"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";  
            }
        }
    })
}

// DIVINE page

for (let a = 0; a < Divinealbum.length; a++){
    Divinealbum[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "Divine"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// EMINEM page

for (let a = 0; a < EMINEMalbum.length; a++){
    EMINEMalbum[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "Eminem"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// JUSTIN PAGE

for (let a = 0; a < Justinalbum.length; a++){
    Justinalbum[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "Justin"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// ARMAAN PAGE

for (let a = 0; a < Armaanalbum.length; a++){
    Armaanalbum[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "Aramaan"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// ARIJIT PAGE

for (let a = 0; a < Arijitalbum.length; a++){
    Arijitalbum[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "Arijit"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// TAYLOR SWIFT PAGE

for (let a = 0; a < TaylorSwiftalbum.length; a++){
    TaylorSwiftalbum[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "TaylorSwift"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// ED SHEEERAN PAGE

for (let a = 0; a < EDshreeranalbum.length; a++){
    EDshreeranalbum[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "EDshreeran"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// DUA LIPA PAGE

for (let a = 0; a < DuaLipaalbum.length; a++){
    DuaLipaalbum[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "DuaLipa"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// BILLIE EILLISH PAGE

for (let a = 0; a < BillieEillishalbum.length; a++){
    BillieEillishalbum[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "BillieEillish"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// ARIANA PAGE

for (let a = 0; a < Arianaalbum.length; a++){
    Arianaalbum[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "Ariana"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// SELENA GOMEZ

for (let a = 0; a < Selenaalbum.length; a++){
    Selenaalbum[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "Selena"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// KAYNE WESTE PAGE

for (let a = 0; a < Kaynealbum.length; a++){
    Kaynealbum[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "Kayne"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// DAILY MIX 1 PAGE

for (let a = 0; a < DailyMix_1_Album.length; a++){
    DailyMix_1_Album[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "DailyMix1"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// DAILY MIX 2 PAGE

for (let a = 0; a < DailyMix_2_Album.length; a++){
    DailyMix_2_Album[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "DailyMix2"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// DAILY MIX 3 PAGE

for (let a = 0; a < DailyMix_3_Album.length; a++){
    DailyMix_3_Album[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "DailyMix3"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// DAILY MIX 4 PAGE

for (let a = 0; a < DailyMix_4_Album.length; a++){
    DailyMix_4_Album[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "DailyMix4"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// DAILY MIX 5 PAGE

for (let a = 0; a < DailyMix_5_Album.length; a++){
    DailyMix_5_Album[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "DailyMix5"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// Radio 1 PAGE

for (let a = 0; a < Radio_1_Album.length; a++){
    Radio_1_Album[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "Radio_1"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// Radio 2 PAGE

for (let a = 0; a < Radio_2_Album.length; a++){
    Radio_2_Album[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "Radio_2"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// Radio 3 PAGE

for (let a = 0; a < Radio_3_Album.length; a++){
    Radio_3_Album[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "Radio_3"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// Radio 4 PAGE

for (let a = 0; a < Radio_4_Album.length; a++){
    Radio_4_Album[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "Radio_4"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// Radio 5 PAGE

for (let a = 0; a < Radio_5_Album.length; a++){
    Radio_5_Album[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "Radio_5"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// hollywood PAGE

for (let a = 0; a < hollywood_Album.length; a++){
    hollywood_Album[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "Hollywood"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// bollywood PAGE

for (let a = 0; a < bollywood_Album.length; a++){
    bollywood_Album[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "Bollywood"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// Korea PAGE

for (let a = 0; a < Korea_Album.length; a++){
    Korea_Album[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "Korea"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// Japanese PAGE

for (let a = 0; a < Japanese_Album.length; a++){
    Japanese_Album[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "Japanese"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// Sandalwood PAGE

for (let a = 0; a < Sandalwood_Album.length; a++){
    Sandalwood_Album[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "Sandalwood"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// animal PAGE

for (let a = 0; a < animal_Album.length; a++){
    animal_Album[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "Animal"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// bajirao PAGE

for (let a = 0; a < bajirao_Album.length; a++){
    bajirao_Album[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "Bajirao"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// kgf PAGE

for (let a = 0; a < kgf_Album.length; a++){
    kgf_Album[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "Kgf"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// kantara PAGE

for (let a = 0; a < kantara_Album.length; a++){
    kantara_Album[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "Kantara"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// kabirsingh PAGE

for (let a = 0; a < kabirsingh_Album.length; a++){
    kabirsingh_Album[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "Kabirsingh"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// EXCLUSIVES PAGE

for (let a = 0; a < EXCLUSIVES_Album.length; a++){
    EXCLUSIVES_Album[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "EXCLUSIVES"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// POWER PAGE

for (let a = 0; a < POWER_Album.length; a++){
    POWER_Album[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "POWER"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// CARDIO PAGE

for (let a = 0; a < CARDIO_Album.length; a++){
    CARDIO_Album[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "CARDIO"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// BEATS PAGE

for (let a = 0; a < BEATS_Album.length; a++){
    BEATS_Album[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "BEATS"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// SPIKES PAGE

for (let a = 0; a < SPIKES_Album.length; a++){
    SPIKES_Album[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "SPIKES"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// MORNING PAGE

for (let a = 0; a < MORNING_Album.length; a++){
    MORNING_Album[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "MORNING"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// EMOTIONAL PAGE

for (let a = 0; a < EMOTIONAL_Album.length; a++){
    EMOTIONAL_Album[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "EMOTIONAL"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// HIPHOP PAGE

for (let a = 0; a < HIPHOP_Album.length; a++){
    HIPHOP_Album[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "HIPHOP"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// DEVOTIONAL PAGE

for (let a = 0; a < DEVOTIONAL_Album.length; a++){
    DEVOTIONAL_Album[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "DEVOTIONAL"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}

// PARTY PAGE

for (let a = 0; a < PARTY_Album.length; a++){
    PARTY_Album[a].addEventListener("click", ()=>{
        for (let x in closepages){
            if (closepages[x].id == "PARTY"){
                closepages[x].style.display = "flex";
                closepages[x].scrollTop = 0;
                mainpage.style.display="none";
            } else {
                closepages[x].style.display = "none";
            }
        }
    })
}
//  ############################################################################ pop up on scroll ######################################################################################

// ZAYN page

const navbarofzayn = document.querySelector(".ZaynNavBar");
const PopOnBarforzayn = document.querySelector(".poponbarforzayn");
ZaynPage.addEventListener("scroll", ()=>{
    if (ZaynPage.scrollTop > 250) {
        navbarofzayn.style.background = "linear-gradient(to right, #b2bdbd 20%, rgb(87, 97, 97) 100%)";
        PopOnBarforzayn.innerHTML = "ZAYN MALIK";
    } else {
        navbarofzayn.style.background = "none";
        PopOnBarforzayn.innerHTML = "";
    }
})

// DIVINE page

const navbarofDivine = document.querySelector(".DivineNavBar")
const poponbarfordivine = document.querySelector(".poponbarfordivine")
DivinePage.addEventListener("scroll", ()=>{
    if (DivinePage.scrollTop > 250) {
        navbarofDivine.style.background = "linear-gradient(to right, #272929 20%, rgb(78, 83, 83) 100%)";
        poponbarfordivine.innerHTML = "DIVINE";
    } else {
        navbarofDivine.style.background = "none";
        poponbarfordivine.innerHTML = "";
    }
})

// EMINEM page

const navbarofEminem = document.querySelector(".EminemNavBar")
const poponbarforEminem = document.querySelector(".poponbarforEminem")
EMINEMPage.addEventListener("scroll", ()=>{
    if (EMINEMPage.scrollTop > 250) {
        navbarofEminem.style.background = "linear-gradient(to right, #649494 20%, rgb(70, 88, 88) 100%)";
        poponbarforEminem.innerHTML = "EMINEM";
    } else {
        navbarofEminem.style.background = "none";
        poponbarforEminem.innerHTML = "";
    }
})

// JUSTIN PAGE

const navbarofJustin = document.querySelector(".JustinNavBar");
const poponbarforJustin = document.querySelector(".poponbarforJustin");
Justinpage.addEventListener("scroll", ()=>{
    if (Justinpage.scrollTop > 250) {
        navbarofJustin.style.background = "linear-gradient(to right, #343535 20%, rgb(82, 87, 87) 100%)";
        poponbarforJustin.innerHTML = "JUSTIN BIEBER";
    } else {
        navbarofJustin.style.background = "none";
        poponbarforJustin.innerHTML = "";
    }
})

// ARMAAN PAGE

const navbarofarmaan = document.querySelector(".AramaanNavBar");
const poponbarforArmaan = document.querySelector(".poponbarforAramaan");
Aramaanpage.addEventListener("scroll", ()=>{
    if (Aramaanpage.scrollTop > 250) {
        navbarofarmaan.style.background = "linear-gradient(to right, #212222 20%, rgb(54, 63, 63) 100%)";
        poponbarforArmaan.innerHTML = "Armaan Malik";
    } else {
        navbarofarmaan.style.background = "none";
        poponbarforArmaan.innerHTML = "";
    }
})

// ARIJIT PAGE

const navbarofarijit = document.querySelector(".ArijitNavBar");
const poponbarforArijit = document.querySelector(".poponbarforArijit");
Arijitpage.addEventListener("scroll", ()=>{
    if (Arijitpage.scrollTop > 250) {
        navbarofarijit.style.background = "linear-gradient(to right, #3d4b4b 20%, rgb(112, 122, 122) 100%)";
        poponbarforArijit.innerHTML = "Arijit Singh";
    } else {
        navbarofarijit.style.background = "none";
        poponbarforArijit.innerHTML = "";
    }
})

// TAYLOR SWIFT PAGE

const navbarofTaylorSwift = document.querySelector(".TaylorSwiftNavBar");
const poponbarforTaylorSwift = document.querySelector(".poponbarforTaylorSwift");
TaylorSwiftpage.addEventListener("scroll", ()=>{
    if (TaylorSwiftpage.scrollTop > 250) {
        navbarofTaylorSwift.style.background = "linear-gradient(to right, #33cccc 20%, rgb(217, 224, 224) 100%)";
        poponbarforTaylorSwift.innerHTML = "Taylor Swift";
    } else {
        navbarofTaylorSwift.style.background = "none";
        poponbarforTaylorSwift.innerHTML = "";
    }
})

// ED SHEEERAN PAGE

const navbarofEDshreeran = document.querySelector(".EDshreeranNavBar");
const poponbarforEDshreeran = document.querySelector(".poponbarforEDshreeran");
EDshreeranpage.addEventListener("scroll", ()=>{
    if (EDshreeranpage.scrollTop > 250) {
        navbarofEDshreeran.style.background = "linear-gradient(to right, #0c6464 20%, rgb(98, 148, 148) 100%)";
        poponbarforEDshreeran.innerHTML = "Ed Sheeran";
    } else {
        navbarofEDshreeran.style.background = "none";
        poponbarforEDshreeran.innerHTML = "";
    }
})

// DUA LIPA PAGE

const navbarofDuaLipa = document.querySelector(".DuaLipaNavBar");
const poponbarforDuaLipa = document.querySelector(".poponbarforDuaLipa");
DuaLipapage.addEventListener("scroll", ()=>{
    if (DuaLipapage.scrollTop > 250) {
        navbarofDuaLipa.style.background = "linear-gradient(to right, #264747 20%, rgb(52, 65, 65) 100%)";
        poponbarforDuaLipa.innerHTML = "Dua Lipa";
    } else {
        navbarofDuaLipa.style.background = "none";
        poponbarforDuaLipa.innerHTML = "";
    }
})

// BILLIE EILLISH PAGE

const navbarofBillieEillish = document.querySelector(".BillieEillishNavBar");
const poponbarforBillieEillish = document.querySelector(".poponbarforBillieEillish");
BillieEillishpage.addEventListener("scroll", ()=>{
    if (BillieEillishpage.scrollTop > 250) {
        navbarofBillieEillish.style.background = "linear-gradient(to right, #7ed807 20%, rgb(168, 168, 94) 100%)";
        poponbarforBillieEillish.innerHTML = "Billie Eillish";
    } else {
        navbarofBillieEillish.style.background = "none";
        poponbarforBillieEillish.innerHTML = "";
    }
})

// ARIANA PAGE

const navbarofAriana = document.querySelector(".ArianaNavBar");
const poponbarforAriana = document.querySelector(".poponbarforAriana");
Arianapage.addEventListener("scroll", ()=>{
    if (Arianapage.scrollTop > 250) {
        navbarofAriana.style.background = "linear-gradient(to right, #697e79 20%, rgb(154, 170, 170) 100%)";
        poponbarforAriana.innerHTML = "Ariana Grande";
    } else {
        navbarofAriana.style.background = "none";
        poponbarforAriana.innerHTML = "";
    }
})

// SELENA GOMEZ

const navbarofSelena = document.querySelector(".SelenaNavBar");
const poponbarforSelena = document.querySelector(".poponbarforSelena");
Selenapage.addEventListener("scroll", ()=>{
    if (Selenapage.scrollTop > 250) {
        navbarofSelena.style.background = "linear-gradient(to right, #864646 20%, rgb(131, 78, 100) 100%)";
        poponbarforSelena.innerHTML = "Selena Gomez";
    } else {
        navbarofSelena.style.background = "none";
        poponbarforSelena.innerHTML = "";
    }
})

// KAYNE WESTE PAGE

const navbarofKayne = document.querySelector(".KayneNavBar");
const poponbarforKayne = document.querySelector(".poponbarforKayne");
Kaynepage.addEventListener("scroll", ()=>{
    if (Kaynepage.scrollTop > 250) {
        navbarofKayne.style.background = "linear-gradient(to right, #171818 30%, rgb(45, 48, 48) 100%)";
        poponbarforKayne.innerHTML = "Kanye West";
    } else {
        navbarofKayne.style.background = "none";
        poponbarforKayne.innerHTML = "";
    }
})

// DAILY MIX 1 PAGE

const navbarofDailyMix1 = document.querySelector(".DailyMix1NavBar");
const poponbarforDailyMix1 = document.querySelector(".poponbarforDailyMix1");
DailyMix_1.addEventListener("scroll", ()=>{
    if (DailyMix_1.scrollTop > 250) {
        navbarofDailyMix1.style.background = "linear-gradient(to right, rgb(31, 99, 126) 30%, rgb(15, 134, 150) 100%)";
        poponbarforDailyMix1.innerHTML = "DAILY MIX 1";
        DailyMix_1.style.background = "rgb(18, 18, 18)"
    } else {
        navbarofDailyMix1.style.background = "none";
        poponbarforDailyMix1.innerHTML = "";
        DailyMix_1.style.background = "linear-gradient(to bottom, #0f4447 1%, rgb(18, 18, 18) 100%)"
    }
})

// DAILY MIX 2 PAGE

const navbarofDailyMix2 = document.querySelector(".DailyMix2NavBar");
const poponbarforDailyMix2 = document.querySelector(".poponbarforDailyMix2");
DailyMix_2.addEventListener("scroll", ()=>{
    if (DailyMix_2.scrollTop > 250) {
        navbarofDailyMix2.style.background = "linear-gradient(to right, #58583d 30%, rgb(129, 95, 95) 100%)";
        poponbarforDailyMix2.innerHTML = "DAILY MIX 2";
        DailyMix_2.style.background = "rgb(18, 18, 18)"
    } else {
        navbarofDailyMix2.style.background = "none";
        poponbarforDailyMix2.innerHTML = "";
        DailyMix_2.style.background = "linear-gradient(to bottom, #350505 1%, rgb(18, 18, 18) 100%)"
    }
})

// DAILY MIX 3 PAGE

const navbarofDailyMix3 = document.querySelector(".DailyMix3NavBar");
const poponbarforDailyMix3 = document.querySelector(".poponbarforDailyMix3");
DailyMix_3.addEventListener("scroll", ()=>{
    if (DailyMix_3.scrollTop > 250) {
        navbarofDailyMix3.style.background = "linear-gradient(to right, #5a4557 30%, rgb(103, 131, 122) 100%)";
        poponbarforDailyMix3.innerHTML = "DAILY MIX 3";
        DailyMix_3.style.background = "rgb(18, 18, 18)"
    } else {
        navbarofDailyMix3.style.background = "none";
        poponbarforDailyMix3.innerHTML = "";
        DailyMix_3.style.background = "linear-gradient(to bottom, rgb(48, 70, 64) 1%, rgb(18, 18, 18) 100%)"
    }
})

// DAILY MIX 4 PAGE

const navbarofDailyMix4 = document.querySelector(".DailyMix4NavBar");
const poponbarforDailyMix4 = document.querySelector(".poponbarforDailyMix4");
DailyMix_4.addEventListener("scroll", ()=>{
    if (DailyMix_4.scrollTop > 250) {
        navbarofDailyMix4.style.background = "linear-gradient(to right, #664361 30%, rgb(88, 85, 88) 100%)";
        poponbarforDailyMix4.innerHTML = "DAILY MIX 4";
        DailyMix_4.style.background = "rgb(18, 18, 18)"
    } else {
        navbarofDailyMix4.style.background = "none";
        poponbarforDailyMix4.innerHTML = "";
        DailyMix_4.style.background = "linear-gradient(to bottom, #3b2938 1%, rgb(18, 18, 18) 100%)"
    }
})

// // DAILY MIX 5 PAGE

const navbarofDailyMix5 = document.querySelector(".DailyMix5NavBar");
const poponbarforDailyMix5 = document.querySelector(".poponbarforDailyMix5");
DailyMix_5.addEventListener("scroll", ()=>{
    if (DailyMix_5.scrollTop > 250) {
        navbarofDailyMix5.style.background = "linear-gradient(to right, #5ba119 30%, rgb(105, 133, 39) 100%)";
        poponbarforDailyMix5.innerHTML = "DAILY MIX 5";
        DailyMix_5.style.background = "rgb(18, 18, 18)"
    } else {
        navbarofDailyMix5.style.background = "none";
        poponbarforDailyMix5.innerHTML = "";
        DailyMix_5.style.background = "linear-gradient(to bottom, rgb(35, 53, 25) 1%, rgb(18, 18, 18) 100%)"
    }
})

// // Radio 1 PAGE

const navbarofRadio_1 = document.querySelector(".Radio_1NavBar");
const poponbarforRadio_1 = document.querySelector(".poponbarforRadio_1");
Radio_1.addEventListener("scroll", ()=>{
    if (Radio_1.scrollTop > 250) {
        navbarofRadio_1.style.background = "linear-gradient(to right, #257375 30%, rgb(6, 98, 121) 100%)";
        poponbarforRadio_1.innerHTML = "Diljit Dosanjh Radio";
        Radio_1.style.background = "rgb(18, 18, 18)"
    } else {
        navbarofRadio_1.style.background = "none";
        poponbarforRadio_1.innerHTML = "";
        Radio_1.style.background = "linear-gradient(to bottom, rgb(12, 46, 59)1%, rgb(18, 18, 18) 100%)";
    }
})

// // Radio 2 PAGE

const navbarofRadio_2 = document.querySelector(".Radio_2NavBar");
const poponbarforRadio_2 = document.querySelector(".poponbarforRadio_2");
Radio_2.addEventListener("scroll", ()=>{
    if (Radio_2.scrollTop > 250) {
        navbarofRadio_2.style.background = "linear-gradient(to right, #198188 30%, rgb(68, 68, 75) 100%)";
        poponbarforRadio_2.innerHTML = "Arijit Singh Radio";
        Radio_2.style.background = "rgb(18, 18, 18)"
    } else {
        navbarofRadio_2.style.background = "none";
        poponbarforRadio_2.innerHTML = "";
        Radio_2.style.background = "linear-gradient(to bottom, rgb(2, 48, 66)1%, rgb(18, 18, 18) 100%)";
    }
})

// // Radio 3 PAGE

const navbarofRadio_3 = document.querySelector(".Radio_3NavBar");
const poponbarforRadio_3 = document.querySelector(".poponbarforRadio_3");
Radio_3.addEventListener("scroll", ()=>{
    if (Radio_3.scrollTop > 250) {
        navbarofRadio_3.style.background = "linear-gradient(to right, #349467 30%, rgb(10, 124, 86) 100%)";
        poponbarforRadio_3.innerHTML = "BoyWithUke Radio";
        Radio_3.style.background = "rgb(18, 18, 18)"
    } else {
        navbarofRadio_3.style.background = "none";
        poponbarforRadio_3.innerHTML = "";
        Radio_3.style.background = "linear-gradient(to bottom, rgb(2, 63, 40)1%, rgb(18, 18, 18) 100%)";
    }
})

// // Radio 4 PAGE

const navbarofRadio_4 = document.querySelector(".Radio_4NavBar");
const poponbarforRadio_4 = document.querySelector(".poponbarforRadio_4");
Radio_4.addEventListener("scroll", ()=>{
    if (Radio_4.scrollTop > 250) {
        navbarofRadio_4.style.background = "linear-gradient(to right, #349467 30%, rgb(10, 124, 86) 100%)";
        poponbarforRadio_4.innerHTML = "Honey Singh Radio";
        Radio_4.style.background = "rgb(18, 18, 18)"
    } else {
        navbarofRadio_4.style.background = "none";
        poponbarforRadio_4.innerHTML = "";
        Radio_4.style.background = "linear-gradient(to bottom, rgb(2, 63, 40)1%, rgb(18, 18, 18) 100%)";
    }
})

// // Radio 5 PAGE

const navbarofRadio_5 = document.querySelector(".Radio_5NavBar");
const poponbarforRadio_5 = document.querySelector(".poponbarforRadio_5");
Radio_5.addEventListener("scroll", ()=>{
    if (Radio_5.scrollTop > 250) {
        navbarofRadio_5.style.background = "linear-gradient(to right, #329604 30%, rgb(143, 167, 38) 100%)";
        poponbarforRadio_5.innerHTML = "Shubh Radio";
        Radio_5.style.background = "rgb(18, 18, 18)"
    } else {
        navbarofRadio_5.style.background = "none";
        poponbarforRadio_5.innerHTML = "";
        Radio_5.style.background = "linear-gradient(to bottom, rgb(2, 51, 9) 1%, rgb(18, 18, 18) 100%)";
    }
})

// //Hollywood  PAGE

const HollywoodNavBar = document.querySelector(".HollywoodNavBar");
const poponbarforHollywood = document.querySelector(".poponbarforHollywood");
Hollywood.addEventListener("scroll", ()=>{
    if (Hollywood.scrollTop > 250) {
        HollywoodNavBar.style.background = "linear-gradient(to right, #990f0f 30%, rgb(139, 31, 31) 100%)";
        poponbarforHollywood.innerHTML = "Hollywood";
        Hollywood.style.background = "rgb(18, 18, 18)"
    } else {
        HollywoodNavBar.style.background = "none";
        poponbarforHollywood.innerHTML = "";
        Hollywood.style.background = "linear-gradient(to bottom, rgb(68, 5, 5) 1%, rgb(18, 18, 18) 100%)";
    }
})

// //Bollywood  PAGE

const BollywoodNavBar = document.querySelector(".BollywoodNavBar");
const poponbarforBollywood = document.querySelector(".poponbarforBollywood");
Bollywood.addEventListener("scroll", ()=>{
    if (Bollywood.scrollTop > 250) {
        BollywoodNavBar.style.background = "linear-gradient(to right, #5d9b9b 30%, rgb(133, 138, 136) 100%)";
        poponbarforBollywood.innerHTML = "Bollywood";
        Bollywood.style.background = "rgb(18, 18, 18)"
    } else {
        BollywoodNavBar.style.background = "none";
        poponbarforBollywood.innerHTML = "";
        Bollywood.style.background = "linear-gradient(to bottom, rgb(45, 49, 49) 1%, rgb(18, 18, 18) 100%)";
    }
})

// //Korea  PAGE

const KoreaNavBar = document.querySelector(".KoreaNavBar");
const poponbarforKorea = document.querySelector(".poponbarforKorea");
Korea.addEventListener("scroll", ()=>{
    if (Korea.scrollTop > 250) {
        KoreaNavBar.style.background = "linear-gradient(to right, #232423 30%, rgb(64, 66, 65) 100%)";
        poponbarforKorea.innerHTML = "Cinema of South Korea";
        Korea.style.background = "rgb(18, 18, 18)"
    } else {
        KoreaNavBar.style.background = "none";
        poponbarforKorea.innerHTML = "";
        Korea.style.background = "linear-gradient(to bottom, rgb(22, 24, 22) 1%, rgb(18, 18, 18) 100%)";
    }
})

// //Japanese  PAGE

const JapaneseNavBar = document.querySelector(".JapaneseNavBar");
const poponbarforJapanese = document.querySelector(".poponbarforJapanese");
Japanese.addEventListener("scroll", ()=>{
    if (Japanese.scrollTop > 250) {
        JapaneseNavBar.style.background = "linear-gradient(to right, #09664a 30%, rgb(24, 116, 80) 100%)";
        poponbarforJapanese.innerHTML = "Japanese Cinema";
        Japanese.style.background = "rgb(18, 18, 18)"
    } else {
        JapaneseNavBar.style.background = "none";
        poponbarforJapanese.innerHTML = "";
        Japanese.style.background = "linear-gradient(to bottom, rgb(44, 49, 47) 1%, rgb(18, 18, 18) 100%)";
    }
})

// //Sandalwood  PAGE

const SandalwoodNavBar = document.querySelector(".SandalwoodNavBar");
const poponbarforSandalwood = document.querySelector(".poponbarforSandalwood");
Sandalwood.addEventListener("scroll", ()=>{
    if (Sandalwood.scrollTop > 250) {
        SandalwoodNavBar.style.background = "linear-gradient(to right, #520404 30%, rgb(119, 29, 2) 100%)";
        poponbarforSandalwood.innerHTML = "Sandalwood";
        Sandalwood.style.background = "rgb(18, 18, 18)"
    } else {
        SandalwoodNavBar.style.background = "none";
        poponbarforSandalwood.innerHTML = "";
        Sandalwood.style.background = "linear-gradient(to bottom, rgb(58, 4, 4) 1%, rgb(18, 18, 18) 100%)";
    }
})

// //Animal  PAGE

const animalNavBar = document.querySelector(".animalNavBar");
const poponbarforanimal = document.querySelector(".poponbarforanimal");
animal.addEventListener("scroll", ()=>{
    if (animal.scrollTop > 250) {
        animalNavBar.style.background = "linear-gradient(to right, rgb(57, 70, 65) 30%, rgb(62, 109, 110) 100%)";
        poponbarforanimal.innerHTML = "ANIMAL Movie Songs";
        animal.style.background = "rgb(18, 18, 18)"
    } else {
        animalNavBar.style.background = "none";
        poponbarforanimal.innerHTML = "";
        animal.style.background = "linear-gradient(to bottom, rgb(41, 51, 47) 1%, rgb(18, 18, 18) 100%)";
    }
})

// //KGF  PAGE

const kgfNavBar = document.querySelector(".kgfNavBar");
const poponbarforkgf = document.querySelector(".poponbarforkgf");
kgf.addEventListener("scroll", ()=>{
    if (kgf.scrollTop > 250) {
        kgfNavBar.style.background = "linear-gradient(to right, #360d0d 30%, rgb(94, 2, 2) 100%)";
        poponbarforkgf.innerHTML = "KGF Movie Songs";
        kgf.style.background = "rgb(18, 18, 18)"
    } else {
        kgfNavBar.style.background = "none";
        poponbarforkgf.innerHTML = "";
        kgf.style.background = "linear-gradient(to bottom, rgb(37, 2, 2) 1%, rgb(18, 18, 18) 100%)";
    }
})

// //bajirao  PAGE

const bajiraoNavBar = document.querySelector(".bajiraoNavBar");
const poponbarforbajirao = document.querySelector(".poponbarforbajirao");
bajirao.addEventListener("scroll", ()=>{
    if (bajirao.scrollTop > 250) {
        bajiraoNavBar.style.background = "linear-gradient(to right, #352323 30%, rgb(73, 70, 69) 100%)";
        poponbarforbajirao.innerHTML = "Bajirao Movie Songs";
        bajirao.style.background = "rgb(18, 18, 18)"
    } else {
        bajiraoNavBar.style.background = "none";
        poponbarforbajirao.innerHTML = "";
        bajirao.style.background = "linear-gradient(to bottom, rgb(48, 38, 38) 1%, rgb(18, 18, 18) 100%)";
    }
})

// //kantara  PAGE

const kantaraNavBar = document.querySelector(".kantaraNavBar");
const poponbarforkantara = document.querySelector(".poponbarforkantara");
kantara.addEventListener("scroll", ()=>{
    if (kantara.scrollTop > 250) {
        kantaraNavBar.style.background = "linear-gradient(to right, #818f07 30%, rgb(84, 126, 5) 100%)";
        poponbarforkantara.innerHTML = "Kantara Movie Songs";
        kantara.style.background = "rgb(18, 18, 18)"
    } else {
        kantaraNavBar.style.background = "none";
        poponbarforkantara.innerHTML = "";
        kantara.style.background = "linear-gradient(to bottom, rgb(32, 32, 0) 1%, rgb(18, 18, 18) 100%)";
    }
})

// //kabirsingh  PAGE

const kabirsinghNavBar = document.querySelector(".kabirsinghNavBar");
const poponbarforkabirsingh = document.querySelector(".poponbarforkabirsingh");
kabirsingh.addEventListener("scroll", ()=>{
    if (kabirsingh.scrollTop > 250) {
        kabirsinghNavBar.style.background = "linear-gradient(to right, #b6b0b0 30%, rgb(55, 124, 113) 100%)";
        poponbarforkabirsingh.innerHTML = "KABIR SINGH Movie Songs";
        kabirsingh.style.background = "rgb(18, 18, 18)"
    } else {
        kabirsinghNavBar.style.background = "none";
        poponbarforkabirsingh.innerHTML = "";
        kabirsingh.style.background = "linear-gradient(to bottom, rgb(11, 78, 64) 1%, rgb(18, 18, 18) 100%)";
    }
})

// //EXCLUSIVES  PAGE

const EXCLUSIVESNavBar = document.querySelector(".EXCLUSIVESNavBar");
const poponbarforEXCLUSIVES = document.querySelector(".poponbarforEXCLUSIVES");
EXCLUSIVES.addEventListener("scroll", ()=>{
    if (EXCLUSIVES.scrollTop > 250) {
        EXCLUSIVESNavBar.style.background = "linear-gradient(to right, #b6b0b0 30%, rgb(55, 124, 113) 100%)";
        poponbarforEXCLUSIVES.innerHTML = "EXERCISE EXCLUSIVES";
        EXCLUSIVES.style.background = "rgb(18, 18, 18)"
    } else {
        EXCLUSIVESNavBar.style.background = "none";
        poponbarforEXCLUSIVES.innerHTML = "";
        EXCLUSIVES.style.background = "linear-gradient(to bottom, rgb(11, 78, 64) 1%, rgb(18, 18, 18) 100%)";
    }
})

// //POWER  PAGE

const POWERNavBar = document.querySelector(".POWERNavBar");
const poponbarforPOWER = document.querySelector(".poponbarforPOWER");
POWER.addEventListener("scroll", ()=>{
    if (POWER.scrollTop > 250) {
        POWERNavBar.style.background = "linear-gradient(to right, #b8bec0 30%, rgb(112, 101, 107) 100%)";
        poponbarforPOWER.innerHTML = "POWER WORKOUT";
        POWER.style.background = "rgb(18, 18, 18)"
    } else {
        POWERNavBar.style.background = "none";
        poponbarforPOWER.innerHTML = "";
        POWER.style.background = "linear-gradient(to bottom, rgb(74, 71, 75) 1%, rgb(18, 18, 18) 100%)";
    }
})

// //CARDIO  PAGE

const CARDIONavBar = document.querySelector(".CARDIONavBar");
const poponbarforCARDIO = document.querySelector(".poponbarforCARDIO");
CARDIO.addEventListener("scroll", ()=>{
    if (CARDIO.scrollTop > 250) {
        CARDIONavBar.style.background = "radial-gradient(rgb(203, 206, 14) 10%, rgb(106, 128, 9) 60%)";
        poponbarforCARDIO.innerHTML = "CARDIO BLAST";
        CARDIO.style.background = "rgb(18, 18, 18)"
    } else {
        CARDIONavBar.style.background = "none";
        poponbarforCARDIO.innerHTML = "";
        CARDIO.style.background = "linear-gradient(to bottom, rgb(38, 44, 1) 1%, rgb(18, 18, 18) 100%)";
    }
})

// //BEATS  PAGE

const BEATSNavBar = document.querySelector(".BEATSNavBar");
const poponbarforBEATS = document.querySelector(".poponbarforBEATS");
BEATS.addEventListener("scroll", ()=>{
    if (BEATS.scrollTop > 250) {
        BEATSNavBar.style.background = "radial-gradient(rgb(136, 158, 155) 30%,rgb(71, 116, 110) 60%)";
        poponbarforBEATS.innerHTML = "THE GYM BEATS";
        BEATS.style.background = "rgb(18, 18, 18)"
    } else {
        BEATSNavBar.style.background = "none";
        poponbarforBEATS.innerHTML = "";
        BEATS.style.background = "linear-gradient(to bottom, rgb(11, 78, 64) 1%, rgb(18, 18, 18) 100%)";
    }
})

// //SPIKES  PAGE

const SPIKESNavBar = document.querySelector(".SPIKESNavBar");
const poponbarforSPIKES = document.querySelector(".poponbarforSPIKES");
SPIKES.addEventListener("scroll", ()=>{
    if (SPIKES.scrollTop > 250) {
        SPIKESNavBar.style.background = "linear-gradient(to right, #2b142e 30%, rgb(38, 7, 51) 100%)";
        poponbarforSPIKES.innerHTML = "ADRENALINE SPIKES";
        SPIKES.style.background = "rgb(18, 18, 18)"
    } else {
        SPIKESNavBar.style.background = "none";
        poponbarforSPIKES.innerHTML = "";
        SPIKES.style.background = "linear-gradient(to bottom, rgb(22, 1, 27) 1%, rgb(18, 18, 18) 100%)";
    }
})

// //MORNING  PAGE

const MORNINGNavBar = document.querySelector(".MORNINGNavBar");
const poponbarforMORNING = document.querySelector(".poponbarforMORNING");
MORNING.addEventListener("scroll", ()=>{
    if (MORNING.scrollTop > 250) {
        MORNINGNavBar.style.background = "radial-gradient(rgb(110, 173, 129) 30%,rgb(12, 163, 87) 60%)";
        poponbarforMORNING.innerHTML = "MORNING MUSIC";
        MORNING.style.background = "rgb(18, 18, 18)"
    } else {
        MORNINGNavBar.style.background = "none";
        poponbarforMORNING.innerHTML = "";
        MORNING.style.background = "linear-gradient(to bottom, rgb(2, 58, 23) 1%, rgb(18, 18, 18) 100%)";
    }
})

// //EMOTIONAL  PAGE

const EMOTIONALNavBar = document.querySelector(".EMOTIONALNavBar");
const poponbarforEMOTIONAL = document.querySelector(".poponbarforEMOTIONAL");
EMOTIONAL.addEventListener("scroll", ()=>{
    if (EMOTIONAL.scrollTop > 250) {
        EMOTIONALNavBar.style.background = "linear-gradient(to right, #3f4443 30%, rgb(11, 133, 86) 100%)";
        poponbarforEMOTIONAL.innerHTML = "EMOTIONAL SONGS";
        EMOTIONAL.style.background = "rgb(18, 18, 18)"
    } else {
        EMOTIONALNavBar.style.background = "none";
        poponbarforEMOTIONAL.innerHTML = "";
        EMOTIONAL.style.background = "linear-gradient(to bottom, rgb(3, 68, 47) 1%, rgb(18, 18, 18) 100%)";
    }
})

// //HIPHOP  PAGE

const HIPHOPNavBar = document.querySelector(".HIPHOPNavBar");
const poponbarforHIPHOP = document.querySelector(".poponbarforHIPHOP");
HIPHOP.addEventListener("scroll", ()=>{
    if (HIPHOP.scrollTop > 250) {
        HIPHOPNavBar.style.background = "radial-gradient(rgb(231, 157, 19) 30%,rgb(146, 113, 2) 60%)";
        poponbarforHIPHOP.innerHTML = "HIPHOP MUSIC";
        HIPHOP.style.background = "rgb(18, 18, 18)"
    } else {
        HIPHOPNavBar.style.background = "none";
        poponbarforHIPHOP.innerHTML = "";
        HIPHOP.style.background = "linear-gradient(to bottom, rgb(53, 31, 2) 1%, rgb(18, 18, 18) 100%)";
    }
})

// //DEVOTIONAL  PAGE

const DEVOTIONALNavBar = document.querySelector(".DEVOTIONALNavBar");
const poponbarforDEVOTIONAL = document.querySelector(".poponbarforDEVOTIONAL");
DEVOTIONAL.addEventListener("scroll", ()=>{
    if (DEVOTIONAL.scrollTop > 250) {
        DEVOTIONALNavBar.style.background = "linear-gradient(to right, #b10245 30%, rgb(126, 4, 65) 100%)";
        poponbarforDEVOTIONAL.innerHTML = "DEVOTIONAL SONGS";
        DEVOTIONAL.style.background = "rgb(18, 18, 18)"
    } else {
        DEVOTIONALNavBar.style.background = "none";
        poponbarforDEVOTIONAL.innerHTML = "";
        DEVOTIONAL.style.background = "linear-gradient(to bottom, rgb(78, 2, 38) 1%, rgb(18, 18, 18) 100%)";
    }
})

// //PARTY  PAGE

const PARTYNavBar = document.querySelector(".PARTYNavBar");
const poponbarforPARTY = document.querySelector(".poponbarforPARTY");
PARTY.addEventListener("scroll", ()=>{
    if (PARTY.scrollTop > 250) {
        PARTYNavBar.style.background = "radial-gradient(rgb(65, 31, 105) 30%,rgb(43, 3, 83) 60%)";
        poponbarforPARTY.innerHTML = "PARTY SONGS";
        PARTY.style.background = "rgb(18, 18, 18)"
    } else {
        PARTYNavBar.style.background = "none";
        poponbarforPARTY.innerHTML = "";
        PARTY.style.background = "linear-gradient(to bottom, rgb(18, 1, 41) 1%, rgb(18, 18, 18) 100%)";
    }
})
// ############################################################# Magic Trick to pause the sings need to figure how it happended ##########################################################

let audio_;
let song; // Global variable
let progress = document.getElementById("progress"); // Global variable
let Ctrlicon = document.getElementById("Ctrlicon"); // Global variable
let currentTime = document.querySelector(".currentTime")
let songduration = document.querySelector(".songduration")

// #############################################################  song track properties  ######################################################################################################

// defalut song

song = audio_ = new Audio("zayn songs/trampoline.mp"); 
track();
userChoice();

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

// formatting time in min and seconds format

function formatTime(time){
    let min = Math.floor(time / 60);
    if (min < 10){
        min = `0${min}`;
    }
    let sec = Math.floor(time % 60);
    if (sec < 10){
        sec = `0${sec}`;
    }
    return `${min} : ${sec}`;
}


// Function to keep the song on track

function track(){
    if (song.play()){
        setInterval(()=>{
            progress.value = song.currentTime;
            progress.max = song.duration;
            currentTime.innerHTML = formatTime(song.currentTime);
            songduration.innerHTML = formatTime(song.duration);
            if (Math.floor(progress.value) == Math.floor(progress.max)){
                Ctrlicon.classList.remove("fa-circle-pause");
                Ctrlicon.classList.add("fa-circle-play");
            }
        },300)
    }
}


// user choice function, it will play the song from the user input over the song track

function userChoice(){
    progress.onchange = function(){
        song.play();
        song.currentTime = progress.value;
        Ctrlicon.classList.add("fa-circle-pause");
        Ctrlicon.classList.remove("fa-circle-play");
        
    }
}

// play and pause button animation on click

function playPause(){
    if (Ctrlicon.classList.contains("fa-circle-pause")){
        song.pause();
        Ctrlicon.classList.remove("fa-circle-pause");
        Ctrlicon.classList.add("fa-circle-play");
    } else{
        song.play();
        Ctrlicon.classList.add("fa-circle-pause");
        Ctrlicon.classList.remove("fa-circle-play");
    }
}

// To play the song after clicking, so need to click play button

function play(){
    Ctrlicon.classList.add("fa-circle-pause");
    Ctrlicon.classList.remove("fa-circle-play");
}


// play again song system
function playAgain(){
    song.currentTime = 0;
}


// #####################################################################################  Zayn Songs  #####################################################################################

// Trampoline song

const Trampoline = document.querySelectorAll(".Trampoline")
for (let x = 0; x < Trampoline.length; x++){
    Trampoline[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("zayn songs/trampoline.mp3");
        track();
        userChoice();
        play();
    })
}


// Dusk Till dawn song

const DuskTillDawn = document.querySelectorAll(".DuskTilldawn");
for (let x = 0; x < DuskTillDawn.length; x++){
    DuskTillDawn[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("zayn songs/DuskTillDawn.mp3");
        track();
        userChoice();
        play();
    })
}

// FOol FOr YoU song

const FOolFOrYoU = document.querySelectorAll(".FOolFOrYoU");
for (let x = 0; x < FOolFOrYoU.length; x++){
    FOolFOrYoU[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("zayn songs/Fool for you.mp3");
        track();
        userChoice();
        play();
    })
}

//I Dont Wanna Live Forever  song

const IDontWannaLiveForever = document.querySelectorAll(".IDontWannaLiveForever");
for (let x = 0; x < IDontWannaLiveForever.length; x++){
    IDontWannaLiveForever[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("zayn songs/I dont wan live forever.mp3");
        track();
        userChoice();
        play();
    })
}

// Let me  song

const LetMe = document.querySelectorAll(".LetMe");
for (let x = 0; x < LetMe.length; x++){
    LetMe[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("zayn songs/Let me.mp3");
        track();
        userChoice();
        play();
    })
}

// Night Changes song

const NightChanges = document.querySelectorAll(".NightChanges");
for (let x = 0; x < NightChanges.length; x++){
    NightChanges[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("zayn songs/Night Changes.mp3");
        track();
        userChoice();
        play();
    })
}

// PILLOW TALK song

const PILLOWTALK = document.querySelectorAll(".PILLOWTALK");
for (let x = 0; x < PILLOWTALK.length; x++){
    PILLOWTALK[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("zayn songs/Pillow talk.mp3");
        track();
        userChoice();
        play();
    })
}

// What I Am song

const WhatIAm = document.querySelectorAll(".WhatIAm");
for (let x = 0; x < WhatIAm.length; x++){
    WhatIAm[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("zayn songs/what i am.mp3");
        track();
        userChoice();
        play();
    })
}

// A Whole New World song

const AWholeNewWorld = document.querySelectorAll(".AWholeNewWorld");
for (let x = 0; x < AWholeNewWorld.length; x++){
    AWholeNewWorld[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("zayn songs/A whole new world.mp3");
        track();
        userChoice();
        play();
    })
}

// Entertainer song

const Entertainer = document.querySelectorAll(".Entertainer");
for (let x = 0; x < Entertainer.length; x++){
    Entertainer[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("zayn songs/Entertainer.mp3");
        track();
        userChoice();
        play();
    })
}
// ##################################################################  Divine songs ################################################################################

// 100 Million song

const Million_100 = document.querySelectorAll(".Million_100");
for (let x = 0; x < Million_100.length; x++){
    Million_100[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("Divine songs/100 million.mp3");
        track();
        userChoice();
        play();
    })
}

// bombay to panjab song

const BombayToPanjab = document.querySelectorAll(".BombayToPanjab");
for (let x = 0; x < BombayToPanjab.length; x++){
    BombayToPanjab[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("Divine songs/bombay to panjab.mp3");
        track();
        userChoice();
        play();
    })
}

// chal bombay song

const ChalBombay = document.querySelectorAll(".ChalBombay");
for (let x = 0; x < ChalBombay.length; x++){
    ChalBombay[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("Divine songs/chal bombay.mp3");
        track();
        userChoice();
        play();
    })
}

// kaam 25 song

const kaam25 = document.querySelectorAll(".kaam25");
for (let x = 0; x < kaam25.length; x++){
    kaam25[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("Divine songs/kaam 25.mp3");
        track();
        userChoice();
        play();
    })
}

// kohonoor song

const kohonoor = document.querySelectorAll(".kohonoor");
for (let x = 0; x < kohonoor.length; x++){
    kohonoor[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("Divine songs/kohonoor.mp3");
        track();
        userChoice();
        play();
    })
}

// mirchi song

const mirchi = document.querySelectorAll(".mirchi");
for (let x = 0; x < mirchi.length; x++){
    mirchi[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("Divine songs/mirchi.mp3");
        track();
        userChoice();
        play();
    })
}

// nothing last song

const nothinglast = document.querySelectorAll(".nothinglast");
for (let x = 0; x < nothinglast.length; x++){
    nothinglast[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("Divine songs/nothing last.mp3");
        track();
        userChoice();
        play();
    })
}

// one side song

const oneside = document.querySelectorAll(".oneside");
for (let x = 0; x < oneside.length; x++){
    oneside[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("Divine songs/one side.mp3");
        track();
        userChoice();
        play();
    })
}

// punya paap song

const punyapaap = document.querySelectorAll(".punyapaap");
for (let x = 0; x < punyapaap.length; x++){
    punyapaap[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("Divine songs/punya paap.mp3");
        track();
        userChoice();
        play();
    })
}

// teesri manzil song

const teesrimanzil = document.querySelectorAll(".teesrimanzil");
for (let x = 0; x < teesrimanzil.length; x++){
    teesrimanzil[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("Divine songs/teesri manzil.mp3");
        track();
        userChoice();
        play();
    })
}

// ##################################################################  eminem songs ################################################################################

const Godzila = document.querySelectorAll(".Godzila");
for (let x = 0; x < Godzila.length; x++){
    Godzila[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("eminem songs/Godzila.mp3");
        track();
        userChoice();
        play();
    })
}

const LoseYourself = document.querySelectorAll(".LoseYourself");
for (let x = 0; x < LoseYourself.length; x++){
    LoseYourself[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("eminem songs/lose yourself.mp3");
        track();
        userChoice();
        play();
    })
}

const LoveTheyouLie = document.querySelectorAll(".LoveTheyouLie");
for (let x = 0; x < LoveTheyouLie.length; x++){
    LoveTheyouLie[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("eminem songs/love the way you lie.mp3");
        track();
        userChoice();
        play();
    })
}

const MockingBird = document.querySelectorAll(".MockingBird");
for (let x = 0; x < MockingBird.length; x++){
    MockingBird[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("eminem songs/Mocking bird.mp3");
        track();
        userChoice();
        play();
    })
}

const monster = document.querySelectorAll(".monster");
for (let x = 0; x < monster.length; x++){
    monster[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("eminem songs/monster.mp3");
        track();
        userChoice();
        play();
    })
}

const NoLove = document.querySelectorAll(".NoLove");
for (let x = 0; x < NoLove.length; x++){
    NoLove[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("eminem songs/no love.mp3");
        track();
        userChoice();
        play();
    })
}

const NotAfraid = document.querySelectorAll(".NotAfraid");
for (let x = 0; x < NotAfraid.length; x++){
    NotAfraid[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("eminem songs/not afraid.mp3");
        track();
        userChoice();
        play();
    })
}

const Venom = document.querySelectorAll(".Venom");
for (let x = 0; x < Venom.length; x++){
    Venom[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("eminem songs/venom.mp3");
        track();
        userChoice();
        play();
    })
}

const WhenIamGone = document.querySelectorAll(".WhenIamGone");
for (let x = 0; x < WhenIamGone.length; x++){
    WhenIamGone[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("eminem songs/when i am gone.mp3");
        track();
        userChoice();
        play();
    })
}

const WithoutMe = document.querySelectorAll(".WithoutMe");
for (let x = 0; x < WithoutMe.length; x++){
    WithoutMe[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("eminem songs/without me.mp3");
        track();
        userChoice();
        play();
    })
}

// ##################################################################  Justin songs ################################################################################
const Peaches = document.querySelectorAll(".Peaches");
for (let x = 0; x < Peaches.length; x++){
    Peaches[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("justin songs/Peaches.mp3");
        track();
        userChoice();
        play();
    })
}

const Yummy = document.querySelectorAll(".Yummy");
for (let x = 0; x < Yummy.length; x++){
    Yummy[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("justin songs/yummy.mp3");
        track();
        userChoice();
        play();
    })
}

const Ghost = document.querySelectorAll(".Ghost");
for (let x = 0; x < Ghost.length; x++){
    Ghost[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("justin songs/Ghost.mp3");
        track();
        userChoice();
        play();
    })
}

const Baby = document.querySelectorAll(".Baby");
for (let x = 0; x < Baby.length; x++){
    Baby[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("justin songs/baby.mp3");
        track();
        userChoice();
        play();
    })
}

const Hours_justin = document.querySelectorAll(".Hours_justin");
for (let x = 0; x < Hours_justin.length; x++){
    Hours_justin[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("justin songs/10,000 hours.mp3");
        track();
        userChoice();
        play();
    })
}

const HoldOn = document.querySelectorAll(".HoldOn");
for (let x = 0; x < HoldOn.length; x++){
    HoldOn[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("eminem songs/without me.mp3");
        track();
        userChoice();
        play();
    })
}

const IDontCare = document.querySelectorAll(".IDontCare");
for (let x = 0; x < IDontCare.length; x++){
    IDontCare[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("justin songs/i dont care.mp3");
        track();
        userChoice();
        play();
    })
}

const Loveyourself = document.querySelectorAll(".Loveyourself");
for (let x = 0; x < Loveyourself.length; x++){
    Loveyourself[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("justin songs/love yourself.mp3");
        track();
        userChoice();
        play();
    })
}

const NeverSayNever = document.querySelectorAll(".NeverSayNever");
for (let x = 0; x < NeverSayNever.length; x++){
    NeverSayNever[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("justin songs/never say never.mp3");
        track();
        userChoice();
        play();
    })
}

const Stay = document.querySelectorAll(".Stay");
for (let x = 0; x < Stay.length; x++){
    Stay[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("justin songs/stay.mp3");
        track();
        userChoice();
        play();
    })
}

const Besabriyan = document.querySelectorAll(".Besabriyan");
for (let x = 0; x < Besabriyan.length; x++){
    Besabriyan[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("arman malik songs/besabriyan.mp3");
        track();
        userChoice();
        play();
    })
}

const Boldonazara = document.querySelectorAll(".Boldonazara");
for (let x = 0; x < Boldonazara.length; x++){
    Boldonazara[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("arman malik songs/bol do na zara.mp3");
        track();
        userChoice();
        play();
    })
}

const Buddusamann = document.querySelectorAll(".Buddusamann");
for (let x = 0; x < Buddusamann.length; x++){
    Buddusamann[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("arman malik songs/buddu sa mann.mp3");
        track();
        userChoice();
        play();
    })
}

const sabtera = document.querySelectorAll(".sabtera");
for (let x = 0; x < sabtera.length; x++){
    sabtera[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("arman malik songs/sab tera.mp3");
        track();
        userChoice();
        play();
    })
}

const Hamnahisudarenge = document.querySelectorAll(".Hamnahisudarenge");
for (let x = 0; x < Hamnahisudarenge.length; x++){
    Hamnahisudarenge[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("arman malik songs/ham nahi sudarenge.mp3");
        track();
        userChoice();
        play();
    })
}

const jabtak = document.querySelectorAll(".jabtak");
for (let x = 0; x < jabtak.length; x++){
    jabtak[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("arman malik songs/jab tak.mp3");
        track();
        userChoice();
        play();
    })
}

const Kauntuje = document.querySelectorAll(".Kauntuje");
for (let x = 0; x < Kauntuje.length; x++){
    Kauntuje[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("arman malik songs/kaun tuje.mp3");
        track();
        userChoice();
        play();
    })
}

const Mainrahoon = document.querySelectorAll(".Mainrahoon");
for (let x = 0; x < Mainrahoon.length; x++){
    Mainrahoon[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("arman malik songs/main na rahoon.mp3");
        track();
        userChoice();
        play();
    })
}

const Ondumalebillu = document.querySelectorAll(".Ondumalebillu");
for (let x = 0; x < Ondumalebillu.length; x++){
    Ondumalebillu[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("arman malik songs/ondu malebillu.mp3");
        track();
        userChoice();
        play();
    })
}

const PhelaPyar = document.querySelectorAll(".PhelaPyar");
for (let x = 0; x < PhelaPyar.length; x++){
    PhelaPyar[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("arman malik songs/phela pyra.mp3");
        track();
        userChoice();
        play();
    })
}

const agartumsatho = document.querySelectorAll(".agartumsatho");
for (let x = 0; x < agartumsatho.length; x++){
    agartumsatho[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("arjit singh songs/agra tum sat ho.mp3");
        track();
        userChoice();
        play();
    })
}

const Galtisaymistake = document.querySelectorAll(".Galtisaymistake");
for (let x = 0; x < Galtisaymistake.length; x++){
    Galtisaymistake[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("arjit singh songs/galti say mistake.mp3");
        track();
        userChoice();
        play();
    })
}

const Lambiyan = document.querySelectorAll(".Lambiyan");
for (let x = 0; x < Lambiyan.length; x++){
    Lambiyan[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("arjit singh songs/lambiyan se judayia.mp3");
        track();
        userChoice();
        play();
    })
}

const Leharadho = document.querySelectorAll(".Leharadho");
for (let x = 0; x < Leharadho.length; x++){
    Leharadho[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("arjit singh songs/leharadho.mp3");
        track();
        userChoice();
        play();
    })
}

const Mainteraboyfriend = document.querySelectorAll(".Mainteraboyfriend");
for (let x = 0; x < Mainteraboyfriend.length; x++){
    Mainteraboyfriend[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("arjit singh songs/main tera boyfriend.mp3");
        track();
        userChoice();
        play();
    })
}

const Satranga = document.querySelectorAll(".Satranga");
for (let x = 0; x < Satranga.length; x++){
    Satranga[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("arjit singh songs/satarnga.mp3");
        track();
        userChoice();
        play();
    })
}

const SurajaDubh = document.querySelectorAll(".SurajaDubh");
for (let x = 0; x < SurajaDubh.length; x++){
    SurajaDubh[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("arjit singh songs/suraja dubh hay.mp3");
        track();
        userChoice();
        play();
    })
}

const Terayarhumay = document.querySelectorAll(".Terayarhumay");
for (let x = 0; x < Terayarhumay.length; x++){
    Terayarhumay[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("arjit singh songs/tera yar hu may.mp3");
        track();
        userChoice();
        play();
    })
}

const Whatjumka = document.querySelectorAll(".Whatjumka");
for (let x = 0; x < Whatjumka.length; x++){
    Whatjumka[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("arjit singh songs/what jumka.mp3");
        track();
        userChoice();
        play();
    })
}

const Whodin = document.querySelectorAll(".Whodin");
for (let x = 0; x < Whodin.length; x++){
    Whodin[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("arjit singh songs/who din.mp3");
        track();
        userChoice();
        play();
    })
}

const BlankSpace = document.querySelectorAll(".BlankSpace");
for (let x = 0; x < BlankSpace.length; x++){
    BlankSpace[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("taylor swipt songs/blank space.mp3");
        track();
        userChoice();
        play();
    })
}

const Red = document.querySelectorAll(".Red");
for (let x = 0; x < Red.length; x++){
    Red[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("taylor swipt songs/red.mp3");
        track();
        userChoice();
        play();
    })
}

const LoveStory = document.querySelectorAll(".LoveStory");
for (let x = 0; x < LoveStory.length; x++){
    LoveStory[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("taylor swipt songs/love story.mp3");
        track();
        userChoice();
        play();
    })
}

const BacktoDecember = document.querySelectorAll(".BacktoDecember");
for (let x = 0; x < BacktoDecember.length; x++){
    BacktoDecember[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("taylor swipt songs/back to december.mp3");
        track();
        userChoice();
        play();
    })
}

const AntiHero = document.querySelectorAll(".AntiHero");
for (let x = 0; x < AntiHero.length; x++){
    AntiHero[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("taylor swipt songs/Anti hero.mp3");
        track();
        userChoice();
        play();
    })
}

const twentytwo = document.querySelectorAll(".twentytwo");
for (let x = 0; x < twentytwo.length; x++){
    twentytwo[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("taylor swipt songs/22.mp3");
        track();
        userChoice();
        play();
    })
}

const WildestDreams = document.querySelectorAll(".WildestDreams");
for (let x = 0; x < WildestDreams.length; x++){
    WildestDreams[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("taylor swipt songs/wildest dreams.mp3");
        track();
        userChoice();
        play();
    })
}

const YouBelongWithMe = document.querySelectorAll(".YouBelongWithMe");
for (let x = 0; x < YouBelongWithMe.length; x++){
    YouBelongWithMe[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("taylor swipt songs/you belong with me.mp3");
        track();
        userChoice();
        play();
    })
}

const SafeandSound = document.querySelectorAll(".SafeandSound");
for (let x = 0; x < SafeandSound.length; x++){
    SafeandSound[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("taylor swipt songs/safe and sound.mp3");
        track();
        userChoice();
        play();
    })
}

const Enchanted = document.querySelectorAll(".Enchanted");
for (let x = 0; x < Enchanted.length; x++){
    Enchanted[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("taylor swipt songs/enchanted.mp3");
        track();
        userChoice();
        play();
    })
}

const Badhabits = document.querySelectorAll(".Badhabits");
for (let x = 0; x < Badhabits.length; x++){
    Badhabits[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("ed sheeran song/Bad habits.mp3");
        track();
        userChoice();
        play();
    })
}

const Celestial = document.querySelectorAll(".Celestial");
for (let x = 0; x < Celestial.length; x++){
    Celestial[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("ed sheeran song/Celestial.mp3");
        track();
        userChoice();
        play();
    })
}

const Givemelove = document.querySelectorAll(".Givemelove");
for (let x = 0; x < Givemelove.length; x++){
    Givemelove[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("ed sheeran song/Give me love.mp3");
        track();
        userChoice();
        play();
    })
}

const Happier = document.querySelectorAll(".Happier");
for (let x = 0; x < Happier.length; x++){
    Happier[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("ed sheeran song/Happier.mp3");
        track();
        userChoice();
        play();
    })
}

const Perfect = document.querySelectorAll(".Perfect");
for (let x = 0; x < Perfect.length; x++){
    Perfect[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("ed sheeran song/Perfect.mp3");
        track();
        userChoice();
        play();
    })
}

const Peru = document.querySelectorAll(".Peru");
for (let x = 0; x < Peru.length; x++){
    Peru[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("ed sheeran song/Peru.mp3");
        track();
        userChoice();
        play();
    })
}

const Photography = document.querySelectorAll(".Photography");
for (let x = 0; x < Photography.length; x++){
    Photography[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("ed sheeran song/Photography.mp3");
        track();
        userChoice();
        play();
    })
}

const Shapeofyou = document.querySelectorAll(".Shapeofyou");
for (let x = 0; x < Shapeofyou.length; x++){
    Shapeofyou[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("ed sheeran song/Shape of you.mp3");
        track();
        userChoice();
        play();
    })
}

const Shivers = document.querySelectorAll(".Shivers");
for (let x = 0; x < Shivers.length; x++){
    Shivers[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("ed sheeran song/Shivers.mp3");
        track();
        userChoice();
        play();
    })
}

const Thinkingoutloud = document.querySelectorAll(".Thinkingoutloud");
for (let x = 0; x < Thinkingoutloud.length; x++){
    Thinkingoutloud[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("ed sheeran song/Thinking out loud.mp3");
        track();
        userChoice();
        play();
    })
}

const Onekiss = document.querySelectorAll(".Onekiss");
for (let x = 0; x < Onekiss.length; x++){
    Onekiss[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("dua lipa songs/One kiss.mp3");
        track();
        userChoice();
        play();
    })
}

const Breakmyheart = document.querySelectorAll(".Breakmyheart");
for (let x = 0; x < Breakmyheart.length; x++){
    Breakmyheart[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("dua lipa songs/Break my heart.mp3");
        track();
        userChoice();
        play();
    })
}

const Coldheatnow = document.querySelectorAll(".Coldheatnow");
for (let x = 0; x < Coldheatnow.length; x++){
    Coldheatnow[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("dua lipa songs/Cold heat now.mp3");
        track();
        userChoice();
        play();
    })
}

const Dancethenight = document.querySelectorAll(".Dancethenight");
for (let x = 0; x < Dancethenight.length; x++){
    Dancethenight[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("dua lipa songs/Dance the night.mp3");
        track();
        userChoice();
        play();
    })
}

const Dontstartnow = document.querySelectorAll(".Dontstartnow");
for (let x = 0; x < Dontstartnow.length; x++){
    Dontstartnow[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("dua lipa songs/Don't start now.mp3");
        track();
        userChoice();
        play();
    })
}

const Houdini = document.querySelectorAll(".Houdini");
for (let x = 0; x < Houdini.length; x++){
    Houdini[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("dua lipa songs/Houdini.mp3");
        track();
        userChoice();
        play();
    })
}

const Levitating = document.querySelectorAll(".Levitating");
for (let x = 0; x < Levitating.length; x++){
    Levitating[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("dua lipa songs/Levitating.mp3");
        track();
        userChoice();
        play();
    })
}

const Loveagain = document.querySelectorAll(".Loveagain");
for (let x = 0; x < Loveagain.length; x++){
    Loveagain[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("dua lipa songs/Love again.mp3");
        track();
        userChoice();
        play();
    })
}

const Newrules = document.querySelectorAll(".Newrules");
for (let x = 0; x < Newrules.length; x++){
    Newrules[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("dua lipa songs/New rules.mp3");
        track();
        userChoice();
        play();
    })
}

const Scaredtobealone = document.querySelectorAll(".Scaredtobealone");
for (let x = 0; x < Scaredtobealone.length; x++){
    Scaredtobealone[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("dua lipa songs/Scared to be alone.mp3");
        track();
        userChoice();
        play();
    })
}

const allthegoodgirls = document.querySelectorAll(".allthegoodgirls");
for (let x = 0; x < allthegoodgirls.length; x++){
    allthegoodgirls[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("billie songs/all the good girls go to hell.mp3");
        track();
        userChoice();
        play();
    })
}

const badguy = document.querySelectorAll(".badguy");
for (let x = 0; x < badguy.length; x++){
    badguy[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("billie songs/bad guy.mp3");
        track();
        userChoice();
        play();
    })
}

const buryafriend = document.querySelectorAll(".buryafriend");
for (let x = 0; x < buryafriend.length; x++){
    buryafriend[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("billie songs/bury a friend.mp3");
        track();
        userChoice();
        play();
    })
}

const COPYCAT = document.querySelectorAll(".COPYCAT");
for (let x = 0; x < COPYCAT.length; x++){
    COPYCAT[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("billie songs/COPYCAT.mp3");
        track();
        userChoice();
        play();
    })
}

const HappierThanEver = document.querySelectorAll(".HappierThanEver");
for (let x = 0; x < HappierThanEver.length; x++){
    HappierThanEver[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("billie songs/Happier Than Ever..mp3");
        track();
        userChoice();
        play();
    })
}

const hostage = document.querySelectorAll(".hostage");
for (let x = 0; x < hostage.length; x++){
    hostage[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("billie songs/Happier Than Ever..mp3");
        track();
        userChoice();
        play();
    })
}

const lovely = document.querySelectorAll(".lovely");
for (let x = 0; x < lovely.length; x++){
    lovely[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("billie songs/lovely.mp3");
        track();
        userChoice();
        play();
    })
}

const OceanEyes = document.querySelectorAll(".OceanEyes");
for (let x = 0; x < OceanEyes.length; x++){
    OceanEyes[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("billie songs/Ocean Eyes.mp3");
        track();
        userChoice();
        play();
    })
}

const whenthepartyisover = document.querySelectorAll(".whenthepartyisover");
for (let x = 0; x < whenthepartyisover.length; x++){
    whenthepartyisover[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("billie songs/when the party's over.mp3");
        track();
        userChoice();
        play();
    })
}

const youshouldseemeinacrown = document.querySelectorAll(".youshouldseemeinacrown");
for (let x = 0; x < youshouldseemeinacrown.length; x++){
    youshouldseemeinacrown[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("billie songs/you should see me in a crown.mp3");
        track();
        userChoice();
        play();
    })
}

const Sevenrings = document.querySelectorAll(".Sevenrings");
for (let x = 0; x < Sevenrings.length; x++){
    Sevenrings[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("ariana songs/7 rings.mp3");
        track();
        userChoice();
        play();
    })
}

const DangerousWoman = document.querySelectorAll(".DangerousWoman");
for (let x = 0; x < DangerousWoman.length; x++){
    DangerousWoman[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("ariana songs/Dangerous Woman.mp3");
        track();
        userChoice();
        play();
    })
}

const DieForYou = document.querySelectorAll(".DieForYou");
for (let x = 0; x < DieForYou.length; x++){
    DieForYou[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("ariana songs/Die For You.mp3");
        track();
        userChoice();
        play();
    })
}

const Everyday  = document.querySelectorAll(".Everyday");
for (let x = 0; x < Everyday .length; x++){
    Everyday [x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("ariana songs/Everyday.mp3");
        track();
        userChoice();
        play();
    })
}

const OneLastTime = document.querySelectorAll(".OneLastTime");
for (let x = 0; x < OneLastTime.length; x++){
    OneLastTime[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("ariana songs/One Last Time.mp3");
        track();
        userChoice();
        play();
    })
}

const positions = document.querySelectorAll(".positions");
for (let x = 0; x < positions.length; x++){
    positions[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("ariana songs/positions.mp3");
        track();
        userChoice();
        play();
    })
}

const SantaTellMe = document.querySelectorAll(".SantaTellMe");
for (let x = 0; x < SantaTellMe.length; x++){
    SantaTellMe[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("ariana songs/Santa Tell Me.mp3");
        track();
        userChoice();
        play();
    })
}

const SideToside = document.querySelectorAll(".SideToside");
for (let x = 0; x < SideToside.length; x++){
    SideToside[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("ariana songs/Side To Side.mp3");
        track();
        userChoice();
        play();
    })
}

const StuckwithU = document.querySelectorAll(".StuckwithU");
for (let x = 0; x < StuckwithU.length; x++){
    StuckwithU[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("ariana songs/Stuck with U.mp3");
        track();
        userChoice();
        play();
    })
}

const thankUnext = document.querySelectorAll(".thankUnext");
for (let x = 0; x < thankUnext.length; x++){
    thankUnext[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("ariana songs/thank u, next.mp3");
        track();
        userChoice();
        play();
    })
}

const ComeGetIt = document.querySelectorAll(".ComeGetIt");
for (let x = 0; x < ComeGetIt.length; x++){
    ComeGetIt[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("selena songs/Come & Get It.mp3");
        track();
        userChoice();
        play();
    })
}

const GoodForYou = document.querySelectorAll(".GoodForYou");
for (let x = 0; x < GoodForYou.length; x++){
    GoodForYou[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("selena songs/Good For You.mp3");
        track();
        userChoice();
        play();
    })
}

const HandsToMyself = document.querySelectorAll(".HandsToMyself");
for (let x = 0; x < HandsToMyself.length; x++){
    HandsToMyself[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("selena songs/Hands To Myself.mp3");
        track();
        userChoice();
        play();
    })
}

const Wolves = document.querySelectorAll(".Wolves");
for (let x = 0; x < Wolves.length; x++){
    Wolves[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("selena songs/Wolves.mp3");
        track();
        userChoice();
        play();
    })
}

const WhoSays = document.querySelectorAll(".WhoSays");
for (let x = 0; x < WhoSays.length; x++){
    WhoSays[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("selena songs/Who Says.mp3");
        track();
        userChoice();
        play();
    })
}

const TheHeartWant = document.querySelectorAll(".TheHeartWant");
for (let x = 0; x < TheHeartWant.length; x++){
    TheHeartWant[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("selena songs/The Heart Wants What It Wants.mp3");
        track();
        userChoice();
        play();
    })
}

const SlowDown = document.querySelectorAll(".SlowDown");
for (let x = 0; x < SlowDown.length; x++){
    SlowDown[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("selena songs/Slow Down.mp3");
        track();
        userChoice();
        play();
    })
}

const SameOldLove = document.querySelectorAll(".SameOldLove");
for (let x = 0; x < SameOldLove.length; x++){
    SameOldLove[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("selena songs/Same Old Love.mp3");
        track();
        userChoice();
        play();
    })
}

const Naturally = document.querySelectorAll(".Naturally");
for (let x = 0; x < Naturally.length; x++){
    Naturally[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("selena songs/Naturally.mp3");
        track();
        userChoice();
        play();
    })
}

const LoveYouLike = document.querySelectorAll(".LoveYouLike");
for (let x = 0; x < LoveYouLike.length; x++){
    LoveYouLike[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("selena songs/Love You Like.mp3");
        track();
        userChoice();
        play();
    })
}

const AllOfTheLights = document.querySelectorAll(".AllOfTheLights");
for (let x = 0; x < AllOfTheLights.length; x++){
    AllOfTheLights[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("kayne west songs/All Of The Lights.mp3");
        track();
        userChoice();
        play();
    })
}

const BoundTo = document.querySelectorAll(".BoundTo");
for (let x = 0; x < BoundTo.length; x++){
    BoundTo[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("kayne west songs/Bound 2.mp3");
        track();
        userChoice();
        play();
    })
}

const CantTellMeNothing = document.querySelectorAll(".CantTellMeNothing");
for (let x = 0; x < CantTellMeNothing.length; x++){
    CantTellMeNothing[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("kayne west songs/Can't Tell Me Nothing.mp3");
        track();
        userChoice();
        play();
    })
}

const ET = document.querySelectorAll(".ET");
for (let x = 0; x < ET.length; x++){
    ET[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("kayne west songs/E.T.mp3");
        track();
        userChoice();
        play();
    })
}

const FlashingLights = document.querySelectorAll(".FlashingLights");
for (let x = 0; x < FlashingLights.length; x++){
    FlashingLights[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("kayne west songs/Flashing Lights.mp3");
        track();
        userChoice();
        play();
    })
}

const Forever = document.querySelectorAll(".Forever");
for (let x = 0; x < Forever.length; x++){
    Forever[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("kayne west songs/Forever.mp3");
        track();
        userChoice();
        play();
    })
}

const GoldDigger = document.querySelectorAll(".GoldDigger");
for (let x = 0; x < GoldDigger.length; x++){
    GoldDigger[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("kayne west songs/Gold Digger.mp3");
        track();
        userChoice();
        play();
    })
}

const Runaway = document.querySelectorAll(".Runaway");
for (let x = 0; x < Runaway.length; x++){
    Runaway[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("kayne west songs/Runaway.mp3");
        track();
        userChoice();
        play();
    })
}

const Stronger = document.querySelectorAll(".Stronger");
for (let x = 0; x < Stronger.length; x++){
 Stronger[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("kayne west songs/Stronger.mp3");
        track();
        userChoice();
        play();
    })
}

const Heartless = document.querySelectorAll(".Heartless");
for (let x = 0; x < Heartless.length; x++){
 Heartless[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("kayne west songs/Heartless.mp3");
        track();
        userChoice();
        play();
    })
}

const OneDirection_YouandI = document.querySelectorAll(".OneDirection_YouandI");
for (let x = 0; x < OneDirection_YouandI.length; x++){
 OneDirection_YouandI[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("DailyMix 1 Songs/One Direction - You & I.mp3");
        track();
        userChoice();
        play();
    })
}

const OneDirection_WhatMakesYouBeautiful = document.querySelectorAll(".OneDirection_WhatMakesYouBeautiful");
for (let x = 0; x < OneDirection_WhatMakesYouBeautiful.length; x++){
 OneDirection_WhatMakesYouBeautiful[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("DailyMix 1 Songs/One Direction - What Makes You Beautiful (Official Video).mp3");
        track();
        userChoice();
        play();
    })
}

const OneDirection_WalkingintheWind = document.querySelectorAll(".OneDirection_WalkingintheWind");
for (let x = 0; x < OneDirection_WalkingintheWind.length; x++){
 OneDirection_WalkingintheWind[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("DailyMix 1 Songs/One Direction - Walking in the Wind (Audio).mp3");
        track();
        userChoice();
        play();
    })
}

const OneDirection_TheyDontKnowAboutUs = document.querySelectorAll(".OneDirection_TheyDontKnowAboutUs");
for (let x = 0; x < OneDirection_TheyDontKnowAboutUs.length; x++){
 OneDirection_TheyDontKnowAboutUs[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("DailyMix 1 Songs/One Direction - They Don't Know About Us (Audio).mp3");
        track();
        userChoice();
        play();
    })
}

const OneDirection_Strong = document.querySelectorAll(".OneDirection_Strong");
for (let x = 0; x < OneDirection_Strong.length; x++){
 OneDirection_Strong[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("DailyMix 1 Songs/One Direction - Strong (Audio).mp3");
        track();
        userChoice();
        play();
    })
}

const OneDirection_StoryofMyLife = document.querySelectorAll(".OneDirection_StoryofMyLife");
for (let x = 0; x < OneDirection_StoryofMyLife.length; x++){
 OneDirection_StoryofMyLife[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("DailyMix 1 Songs/One Direction - Story of My Life.mp3");
        track();
        userChoice();
        play();
    })
}

const OneDirection_StealMyGirl = document.querySelectorAll(".OneDirection_StealMyGirl");
for (let x = 0; x < OneDirection_StealMyGirl.length; x++){
 OneDirection_StealMyGirl[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("DailyMix 1 Songs/One Direction - Steal My Girl (Audio).mp3");
        track();
        userChoice();
        play();
    })
}

const OneDirection_Perfect = document.querySelectorAll(".OneDirection_Perfect");
for (let x = 0; x < OneDirection_Perfect.length; x++){
 OneDirection_Perfect[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("DailyMix 1 Songs/One Direction - Perfect (Official Video).mp3");
        track();
        userChoice();
        play();
    })
}

const OneDirection_OneWayOrAnother = document.querySelectorAll(".OneDirection_OneWayOrAnother");
for (let x = 0; x < OneDirection_OneWayOrAnother.length; x++){
 OneDirection_OneWayOrAnother[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("DailyMix 1 Songs/One Direction - One Way Or Another (Lyrics) (Teenage Kicks).mp3");
        track();
        userChoice();
        play();
    })
}

const OneDirection_OneThing = document.querySelectorAll(".OneDirection_OneThing");
for (let x = 0; x < OneDirection_OneThing.length; x++){
 OneDirection_OneThing[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("DailyMix 1 Songs/One Direction - One Thing.mp3");
        track();
        userChoice();
        play();
    })
}

const OneDirection_MoreThanThis = document.querySelectorAll(".OneDirection_MoreThanThis");
for (let x = 0; x < OneDirection_MoreThanThis.length; x++){
 OneDirection_MoreThanThis[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("DailyMix 1 Songs/One Direction - More Than This (Audio).mp3");
        track();
        userChoice();
        play();
    })
}

const OneDirection_MidnightMemories = document.querySelectorAll(".OneDirection_MidnightMemories");
for (let x = 0; x < OneDirection_MidnightMemories.length; x++){
 OneDirection_MidnightMemories[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("DailyMix 1 Songs/One Direction - Midnight Memories (Audio).mp3");
        track();
        userChoice();
        play();
    })
}

const OneDirection_LiveWhileWereYoung = document.querySelectorAll(".OneDirection_LiveWhileWereYoung");
for (let x = 0; x < OneDirection_LiveWhileWereYoung.length; x++){
 OneDirection_LiveWhileWereYoung[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("DailyMix 1 Songs/One Direction - Live While We're Young.mp3");
        track();
        userChoice();
        play();
    })
}

const OneDirection_LittleThings = document.querySelectorAll(".OneDirection_LittleThings");
for (let x = 0; x < OneDirection_LittleThings.length; x++){
 OneDirection_LittleThings[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("DailyMix 1 Songs/One Direction - Little Things.mp3");
        track();
        userChoice();
        play();
    })
}

const OneDirection_KissYou = document.querySelectorAll(".OneDirection_KissYou");
for (let x = 0; x < OneDirection_KissYou.length; x++){
 OneDirection_KissYou[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("DailyMix 1 Songs/One Direction - Kiss You (Lyric Video).mp3");
        track();
        userChoice();
        play();
    })
}

const OneDirection_History = document.querySelectorAll(".OneDirection_History");
for (let x = 0; x < OneDirection_History.length; x++){
 OneDirection_History[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("DailyMix 1 Songs/One Direction - History (Official Video).mp3");
        track();
        userChoice();
        play();
    })
}

const OneDirection_GottaBeYou = document.querySelectorAll(".OneDirection_GottaBeYou");
for (let x = 0; x < OneDirection_GottaBeYou.length; x++){
 OneDirection_GottaBeYou[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("DailyMix 1 Songs/One Direction - Gotta Be You.mp3");
        track();
        userChoice();
        play();
    })
}

const onedirection_bestsongever = document.querySelectorAll(".onedirection_bestsongever");
for (let x = 0; x < onedirection_bestsongever.length; x++){
 onedirection_bestsongever[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("DailyMix 1 Songs/one direction - best song ever  lyrics.mp3");
        track();
        userChoice();
        play();
    })
}

const OneDirection_18 = document.querySelectorAll(".OneDirection_18");
for (let x = 0; x < OneDirection_18.length; x++){
 OneDirection_18[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("DailyMix 1 Songs/One Direction - 18 (Audio).mp3");
        track();
        userChoice();
        play();
    })
}

const JVKE_thisiswhatheartbreak = document.querySelectorAll(".JVKE_thisiswhatheartbreak");
for (let x = 0; x < JVKE_thisiswhatheartbreak.length; x++){
    JVKE_thisiswhatheartbreak[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("Daily mix 2 songs/JVKE - this is what heartbreak feels like.mp3");
        track();
        userChoice();
        play();
    })
}

const JVKE_goldenhour = document.querySelectorAll(".JVKE_goldenhour");
for (let x = 0; x < JVKE_goldenhour.length; x++){
    JVKE_goldenhour[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("Daily mix 2 songs/JVKE - golden hour.mp3");
        track();
        userChoice();
        play();
    })
}

const CG5_GRIMACE = document.querySelectorAll(".CG5_GRIMACE");
for (let x = 0; x < CG5_GRIMACE.length; x++){
    CG5_GRIMACE[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("Daily mix 2 songs/CG5 - GRIMACE.mp3");
        track();
        userChoice();
        play();
    })
}

const CG5_SleepWell = document.querySelectorAll(".CG5_SleepWell");
for (let x = 0; x < CG5_SleepWell.length; x++){
    CG5_SleepWell[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("Daily mix 2 songs/CG5 - Sleep Well.mp3");
        track();
        userChoice();
        play();
    })
}

const Stellar_Daredevil = document.querySelectorAll(".Stellar_Daredevil");
for (let x = 0; x < Stellar_Daredevil.length; x++){
    Stellar_Daredevil[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("Daily mix 2 songs/Stellar - Daredevil.mp3");
        track();
        userChoice();
        play();
    })
}

const Stellar_ElDorado = document.querySelectorAll(".Stellar_ElDorado");
for (let x = 0; x < Stellar_ElDorado.length; x++){
    Stellar_ElDorado[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("Daily mix 2 songs/Stellar - El Dorado.mp3");
        track();
        userChoice();
        play();
    })
}

const Stellar_Ashes = document.querySelectorAll(".Stellar_Ashes");
for (let x = 0; x < Stellar_Ashes.length; x++){
    Stellar_Ashes[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("Daily mix 2 songs/Stellar - Ashes.mp3");
        track();
        userChoice();
        play();
    })
}

const AFI_MissMurder = document.querySelectorAll(".AFI_MissMurder");
for (let x = 0; x < AFI_MissMurder.length; x++){
    AFI_MissMurder[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("Daily mix 2 songs/AFI - Miss Murder.mp3");
        track();
        userChoice();
        play();
    })
}

const JayZ_NiasInParis = document.querySelectorAll(".JayZ_NiasInParis");
for (let x = 0; x < JayZ_NiasInParis.length; x++){
    JayZ_NiasInParis[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("Daily mix 2 songs/Jay-Z - Nias In Paris.mp3");
        track();
        userChoice();
        play();
    })
}

const JAYZ_EmpireStateOfMind = document.querySelectorAll(".JAYZ_EmpireStateOfMind");
for (let x = 0; x < JAYZ_EmpireStateOfMind.length; x++){
    JAYZ_EmpireStateOfMind[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("Daily mix 2 songs/JAY-Z - Empire State Of Mind.mp3");
        track();
        userChoice();
        play();
    })
}

const AlanWalker_Alone = document.querySelectorAll(".AlanWalker_Alone");
for (let x = 0; x < AlanWalker_Alone.length; x++){
    AlanWalker_Alone[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Alan Walker - Alone.mp3");
        track();
        userChoice();
        play();
    })
}

const AlanWalker_OnMyWay = document.querySelectorAll(".AlanWalker_OnMyWay");
for (let x = 0; x < AlanWalker_OnMyWay.length; x++){
    AlanWalker_OnMyWay[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Alan Walker - On My Way.mp3");
        track();
        userChoice();
        play();
    })
}

const AURORA_RunningWithTheWolves = document.querySelectorAll(".AURORA_RunningWithTheWolves");
for (let x = 0; x < AURORA_RunningWithTheWolves.length; x++){
    AURORA_RunningWithTheWolves[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/AURORA - Running With The Wolves.mp3");
        track();
        userChoice();
        play();
    })
}

const AURORA_Runaway = document.querySelectorAll(".AURORA_Runaway");
for (let x = 0; x < AURORA_Runaway.length; x++){
    AURORA_Runaway[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/AURORA - Runaway.mp3");
        track();
        userChoice();
        play();
    })
}


const Workout_FightBack = document.querySelectorAll(".Workout_FightBack");
for (let x = 0; x < Workout_FightBack.length; x++){
    Workout_FightBack[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/workout - Fight Back.mp3");
        track();
        userChoice();
        play();
    })
}

const Workout_BestofMe = document.querySelectorAll(".Workout_BestofMe");
for (let x = 0; x < Workout_BestofMe.length; x++){
    Workout_BestofMe[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/workout - Best of Me.mp3");
        track();
        userChoice();
        play();
    })
}

const Workout_RememberTheName = document.querySelectorAll(".Workout_RememberTheName");
for (let x = 0; x < Workout_RememberTheName.length; x++){
    Workout_RememberTheName[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/workout - Remember The Name.mp3");
        track();
        userChoice();
        play();
    })
}

const Workout_HallOfFame = document.querySelectorAll(".Workout_HallOfFame");
for (let x = 0; x < Workout_HallOfFame.length; x++){
    Workout_HallOfFame[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Workout - Hall Of Fame.mp3");
        track();
        userChoice();
        play();
    })
}

const Workout_GangstasParadise = document.querySelectorAll(".Workout_GangstasParadise");
for (let x = 0; x < Workout_GangstasParadise.length; x++){
    Workout_GangstasParadise[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Workout - Gangsta's Paradise.mp3");
        track();
        userChoice();
        play();
    })
}

const Workout_Centuries = document.querySelectorAll(".Workout_Centuries");
for (let x = 0; x < Workout_Centuries.length; x++){
    Workout_Centuries[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Workout - Centuries.mp3");
        track();
        userChoice();
        play();
    })
}

const Workout_Believer = document.querySelectorAll(".Workout_Believer");
for (let x = 0; x < Workout_Believer.length; x++){
    Workout_Believer[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Workout - Believer.mp3");
        track();
        userChoice();
        play();
    })
}

const Workout_Animals = document.querySelectorAll(".Workout_Animals");
for (let x = 0; x < Workout_Animals.length; x++){
    Workout_Animals[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/workout - Animals.mp3");
        track();
        userChoice();
        play();
    })
}

const Workout_Challa = document.querySelectorAll(".Workout_Challa");
for (let x = 0; x < Workout_Challa.length; x++){
    Workout_Challa[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Workout - Challa.mp3");
        track();
        userChoice();
        play();
    })
}

const Devotional_MereBholeNath = document.querySelectorAll(".Devotional_MereBholeNath");
for (let x = 0; x < Devotional_MereBholeNath.length; x++){
    Devotional_MereBholeNath[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Devotional - Mere Bhole Nath.mp3");
        track();
        userChoice();
        play();
    })
}

const Devotional_ShivTandav = document.querySelectorAll(".Devotional_ShivTandav");
for (let x = 0; x < Devotional_ShivTandav.length; x++){
    Devotional_ShivTandav[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Devotional - Shiv Tandav Bahubali.mp3");
        track();
        userChoice();
        play();
    })
}

const Devotional_BabamBam = document.querySelectorAll(".Devotional_BabamBam");
for (let x = 0; x < Devotional_BabamBam.length; x++){
    Devotional_BabamBam[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Devotional - Babam Bam Paradox.mp3");
        track();
        userChoice();
        play();
    })
}

const Devotional_RamSiyaRam = document.querySelectorAll(".Devotional_RamSiyaRam");
for (let x = 0; x < Devotional_RamSiyaRam.length; x++){
    Devotional_RamSiyaRam[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Devotional - Ram Siya Ram.mp3");
        track();
        userChoice();
        play();
    })
}

const Devotional_ShendurLaalChadhayo = document.querySelectorAll(".Devotional_ShendurLaalChadhayo");
for (let x = 0; x < Devotional_ShendurLaalChadhayo.length; x++){
    Devotional_ShendurLaalChadhayo[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Devotional - Shendur Laal Chadhayo.mp3");
        track();
        userChoice();
        play();
    })
}

const Devotional_KunFayaKun = document.querySelectorAll(".Devotional_KunFayaKun");
for (let x = 0; x < Devotional_KunFayaKun.length; x++){
    Devotional_KunFayaKun[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Devotional - Kun Faya Kun.mp3");
        track();
        userChoice();
        play();
    })
}

const Devotional_JaiShriRam = document.querySelectorAll(".Devotional_JaiShriRam");
for (let x = 0; x < Devotional_JaiShriRam.length; x++){
    Devotional_JaiShriRam[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Devotional - Jai Shri Ram.mp3");
        track();
        userChoice();
        play();
    })
}

const Devotional_NamNamo = document.querySelectorAll(".Devotional_NamNamo");
for (let x = 0; x < Devotional_NamNamo.length; x++){
    Devotional_NamNamo[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Devotional - Namo Namo.mp3");
        track();
        userChoice();
        play();
    })
}

const KabirSingh_MereSohneya = document.querySelectorAll(".KabirSingh_MereSohneya");
for (let x = 0; x < KabirSingh_MereSohneya.length; x++){
    KabirSingh_MereSohneya[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Kabir Singh - Mere Sohneya.mp3");
        track();
        userChoice();
        play();
    })
}

const KabirSingh_KaiseHua = document.querySelectorAll(".KabirSingh_KaiseHua");
for (let x = 0; x < KabirSingh_KaiseHua.length; x++){
    KabirSingh_KaiseHua[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Kabir Singh - Kaise Hua.mp3");
        track();
        userChoice();
        play();
    })
}

const KabirSingh_TujheKitnaChahneLage = document.querySelectorAll(".KabirSingh_TujheKitnaChahneLage");
for (let x = 0; x < KabirSingh_TujheKitnaChahneLage.length; x++){
    KabirSingh_TujheKitnaChahneLage[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Kabir Singh - Tujhe Kitna Chahne Lage.mp3");
        track();
        userChoice();
        play();
    })
}

const KabirSingh_Bekhayali = document.querySelectorAll(".KabirSingh_Bekhayali");
for (let x = 0; x < KabirSingh_Bekhayali.length; x++){
    KabirSingh_Bekhayali[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Kabir Singh - Bekhayali.mp3");
        track();
        userChoice();
        play();
    })
}

const KabirSingh_TeraBanJaunga = document.querySelectorAll(".KabirSingh_TeraBanJaunga");
for (let x = 0; x < KabirSingh_TeraBanJaunga.length; x++){
    KabirSingh_TeraBanJaunga[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Kabir Singh - Tera Ban Jaunga.mp3");
        track();
        userChoice();
        play();
    })
}

const Salaar_AakaashaGadiya = document.querySelectorAll(".Salaar_AakaashaGadiya");
for (let x = 0; x < Salaar_AakaashaGadiya.length; x++){
    Salaar_AakaashaGadiya[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Salaar - AakaashaGadiya.mp3");
        track();
        userChoice();
        play();
    })
}

const SojugadaSoojumallige = document.querySelectorAll(".SojugadaSoojumallige");
for (let x = 0; x < SojugadaSoojumallige.length; x++){
    SojugadaSoojumallige[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Sojugada Soojumallige.mp3");
        track();
        userChoice();
        play();
    })
}

const Kantara_Karma = document.querySelectorAll(".Kantara_Karma");
for (let x = 0; x < Kantara_Karma.length; x++){
    Kantara_Karma[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Kantara - Karma.mp3");
        track();
        userChoice();
        play();
    })
}

const Kantara_SingaraSiriye = document.querySelectorAll(".Kantara_SingaraSiriye");
for (let x = 0; x < Kantara_SingaraSiriye.length; x++){
    Kantara_SingaraSiriye[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Kantara - Singara Siriye.mp3");
        track();
        userChoice();
        play();
    })
}

const Kantara_VarahaRoopam = document.querySelectorAll(".Kantara_VarahaRoopam");
for (let x = 0; x < Kantara_VarahaRoopam.length; x++){
    Kantara_VarahaRoopam[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Kantara - Varaha Roopam.mp3");
        track();
        userChoice();
        play();
    })
}

const BajiraoMastani_Gajanana = document.querySelectorAll(".BajiraoMastani_Gajanana");
for (let x = 0; x < BajiraoMastani_Gajanana.length; x++){
    BajiraoMastani_Gajanana[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Bajirao Mastani - Gajanana.mp3");
        track();
        userChoice();
        play();
    })
}

const BajiraoMastani_MoheRangDoLaal = document.querySelectorAll(".BajiraoMastani_MoheRangDoLaal");
for (let x = 0; x < BajiraoMastani_MoheRangDoLaal.length; x++){
    BajiraoMastani_MoheRangDoLaal[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Bajirao Mastani - Mohe Rang Do Laal.mp3");
        track();
        userChoice();
        play();
    })
}

const BajiraoMastani_Aayat = document.querySelectorAll(".BajiraoMastani_Aayat");
for (let x = 0; x < BajiraoMastani_Aayat.length; x++){
    BajiraoMastani_Aayat[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Bajirao Mastani - Aayat.mp3");
        track();
        userChoice();
        play();
    })
}

const BajiraoMastani_Pinga = document.querySelectorAll(".BajiraoMastani_Pinga");
for (let x = 0; x < BajiraoMastani_Pinga.length; x++){
    BajiraoMastani_Pinga[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Bajirao Mastani - Pinga.mp3");
        track();
        userChoice();
        play();
    })
}

const BajiraoMastani_DeewaniMastani = document.querySelectorAll(".BajiraoMastani_DeewaniMastani");
for (let x = 0; x < BajiraoMastani_DeewaniMastani.length; x++){
    BajiraoMastani_DeewaniMastani[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Bajirao Mastani - Deewani Mastani.mp3");
        track();
        userChoice();
        play();
    })
}

const BajiraoMastani_Malhari = document.querySelectorAll(".BajiraoMastani_Malhari");
for (let x = 0; x < BajiraoMastani_Malhari.length; x++){
    BajiraoMastani_Malhari[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Bajirao Mastani - Malhari.mp3");
        track();
        userChoice();
        play();
    })
}

const KGF_Mehabooba = document.querySelectorAll(".KGF_Mehabooba");
for (let x = 0; x < KGF_Mehabooba.length; x++){
    KGF_Mehabooba[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/KGF - Mehabooba.mp3");
        track();
        userChoice();
        play();
    })
}

const KGF_SalaamRockyBhai = document.querySelectorAll(".KGF_SalaamRockyBhai");
for (let x = 0; x < KGF_SalaamRockyBhai.length; x++){
    KGF_SalaamRockyBhai[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/KGF - Salaam Rocky Bhai.mp3");
        track();
        userChoice();
        play();
    })
}

const KGF_GaganaNee = document.querySelectorAll(".KGF_GaganaNee");
for (let x = 0; x < KGF_GaganaNee.length; x++){
    KGF_GaganaNee[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/KGF - Gagana Nee.mp3");
        track();
        userChoice();
        play();
    })
}

const KGF_TheMonster = document.querySelectorAll(".KGF_TheMonster");
for (let x = 0; x < KGF_TheMonster.length; x++){
    KGF_TheMonster[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/KGF - The Monster.mp3");
        track();
        userChoice();
        play();
    })
}

const KGF_DheeraDheera = document.querySelectorAll(".KGF_DheeraDheera");
for (let x = 0; x < KGF_DheeraDheera.length; x++){
    KGF_DheeraDheera[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/KGF - Dheera Dheera.mp3");
        track();
        userChoice();
        play();
    })
}

const KGF_Sulthana = document.querySelectorAll(".KGF_Sulthana");
for (let x = 0; x < KGF_Sulthana.length; x++){
    KGF_Sulthana[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/KGF - Sulthana.mp3");
        track();
        userChoice();
        play();
    })
}

const KGF_Toofan = document.querySelectorAll(".KGF_Toofan");
for (let x = 0; x < KGF_Toofan.length; x++){
    KGF_Toofan[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/KGF - Toofan.mp3");
        track();
        userChoice();
        play();
    })
}

const ANIMAL_HuaMain = document.querySelectorAll(".ANIMAL_HuaMain");
for (let x = 0; x < ANIMAL_HuaMain.length; x++){
    ANIMAL_HuaMain[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/ANIMAL -  Hua Main.mp3");
        track();
        userChoice();
        play();
    })
}

const ANIMAL_SaariDuniyaJalaaDenge = document.querySelectorAll(".ANIMAL_SaariDuniyaJalaaDenge");
for (let x = 0; x < ANIMAL_SaariDuniyaJalaaDenge.length; x++){
    ANIMAL_SaariDuniyaJalaaDenge[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/ANIMAL - Saari Duniya Jalaa Denge.mp3");
        track();
        userChoice();
        play();
    })
}

const ANIMAL_ARJANVAILLY = document.querySelectorAll(".ANIMAL_ARJANVAILLY");
for (let x = 0; x < ANIMAL_ARJANVAILLY.length; x++){
    ANIMAL_ARJANVAILLY[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/ANIMAL - ARJAN VAILLY.mp3");
        track();
        userChoice();
        play();
    })
}

const ANIMAL_JamalKudu = document.querySelectorAll(".ANIMAL_JamalKudu");
for (let x = 0; x < ANIMAL_JamalKudu.length; x++){
    ANIMAL_JamalKudu[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/ANIMAL - Jamal Kudu.mp3");
        track();
        userChoice();
        play();
    })
}

const ANIMAL_PehleBhiMain = document.querySelectorAll(".ANIMAL_PehleBhiMain");
for (let x = 0; x < ANIMAL_PehleBhiMain.length; x++){
    ANIMAL_PehleBhiMain[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/ANIMAL - Pehle Bhi Main.mp3");
        track();
        userChoice();
        play();
    })
}

const KirikParty_HeWhoAreYou = document.querySelectorAll(".KirikParty_HeWhoAreYou");
for (let x = 0; x < KirikParty_HeWhoAreYou.length; x++){
    KirikParty_HeWhoAreYou[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Kirik Party - Hey Who Are You.mp3");
        track();
        userChoice();
        play();
    })
}

const KirikParty_LastBenchuParty = document.querySelectorAll(".KirikParty_LastBenchuParty");
for (let x = 0; x < KirikParty_LastBenchuParty.length; x++){
    KirikParty_LastBenchuParty[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Kirik Party - Last Benchu Party.mp3");
        track();
        userChoice();
        play();
    })
}

const KirikParty_NeechaSullu = document.querySelectorAll(".KirikParty_NeechaSullu");
for (let x = 0; x < KirikParty_NeechaSullu.length; x++){
    KirikParty_NeechaSullu[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Kirik Party - Neecha Sullu Sutho Naalige.mp3");
        track();
        userChoice();
        play();
    })
}

const KirikParty_Belageddu = document.querySelectorAll(".KirikParty_Belageddu");
for (let x = 0; x < KirikParty_Belageddu.length; x++){
    KirikParty_Belageddu[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Kirik Party - Belageddu.mp3");
        track();
        userChoice();
        play();
    })
}

const KirikParty_KaagadadaDoniyalli = document.querySelectorAll(".KirikParty_KaagadadaDoniyalli");
for (let x = 0; x < KirikParty_KaagadadaDoniyalli.length; x++){
    KirikParty_KaagadadaDoniyalli[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Kirik Party - Kaagadada Doniyalli.mp3");
        track();
        userChoice();
        play();
    })
}

const KirikParty_KatheyonduHelide = document.querySelectorAll(".KirikParty_KatheyonduHelide");
for (let x = 0; x < KirikParty_KatheyonduHelide.length; x++){
    KirikParty_KatheyonduHelide[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Kirik Party - Katheyondu Helide.mp3");
        track();
        userChoice();
        play();
    })
}

const Korea_BLACKPINK = document.querySelectorAll(".Korea_BLACKPINK");
for (let x = 0; x < Korea_BLACKPINK.length; x++){
    Korea_BLACKPINK[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Korea - BLACKPINK.mp3");
        track();
        userChoice();
        play();
    })
}

const Korea_DNA = document.querySelectorAll(".Korea_DNA");
for (let x = 0; x < Korea_DNA.length; x++){
    Korea_DNA[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Korea - DNA.mp3");
        track();
        userChoice();
        play();
    })
}

const Korea_MICDrop = document.querySelectorAll(".Korea_MICDrop");
for (let x = 0; x < Korea_MICDrop.length; x++){
    Korea_MICDrop[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Korea - MIC Drop.mp3");
        track();
        userChoice();
        play();
    })
}

const Korea_GENTLEMAN = document.querySelectorAll(".Korea_GENTLEMAN");
for (let x = 0; x < Korea_GENTLEMAN.length; x++){
    Korea_GENTLEMAN[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Korea - GENTLEMAN.mp3");
        track();
        userChoice();
        play();
    })
}

const Korea_BOOMBAYAH = document.querySelectorAll(".Korea_BOOMBAYAH");
for (let x = 0; x < Korea_BOOMBAYAH.length; x++){
    Korea_BOOMBAYAH[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Korea - BOOMBAYAH.mp3");
        track();
        userChoice();
        play();
    })
}

const Korea_BoyWithLuv = document.querySelectorAll(".Korea_BoyWithLuv");
for (let x = 0; x < Korea_BoyWithLuv.length; x++){
    Korea_BoyWithLuv[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Korea - Boy With Luv.mp3");
        track();
        userChoice();
        play();
    })
}

const Korea_Dynamite = document.querySelectorAll(".Korea_Dynamite");
for (let x = 0; x < Korea_Dynamite.length; x++){
    Korea_Dynamite[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Korea - Dynamite.mp3");
        track();
        userChoice();
        play();
    })
}

const Korea_KillThisLove = document.querySelectorAll(".Korea_KillThisLove");
for (let x = 0; x < Korea_KillThisLove.length; x++){
    Korea_KillThisLove[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Korea - Kill This Love.mp3");
        track();
        userChoice();
        play();
    })
}

const Korea_GANGNAMSTYLE = document.querySelectorAll(".Korea_GANGNAMSTYLE");
for (let x = 0; x < Korea_GANGNAMSTYLE.length; x++){
    Korea_GANGNAMSTYLE[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Korea - GANGNAM STYLE.mp3");
        track();
        userChoice();
        play();
    })
}

const Korea_DDUDUDDUDU = document.querySelectorAll(".Korea_DDUDUDDUDU");
for (let x = 0; x < Korea_DDUDUDDUDU.length; x++){
    Korea_DDUDUDDUDU[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Korea - DDU-DU DDU-DU.mp3");
        track();
        userChoice();
        play();
    })
}

const AP_MAJHAIL = document.querySelectorAll(".AP_MAJHAIL");
for (let x = 0; x < AP_MAJHAIL.length; x++){
    AP_MAJHAIL[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/AP - MAJHAIL.mp3");
        track();
        userChoice();
        play();
    })
}

const AP_SUMMERHIGH = document.querySelectorAll(".AP_SUMMERHIGH");
for (let x = 0; x < AP_SUMMERHIGH.length; x++){
    AP_SUMMERHIGH[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/AP - SUMMER HIGH.mp3");
        track();
        userChoice();
        play();
    })
}

const AP_BROWNMUNDE = document.querySelectorAll(".AP_BROWNMUNDE");
for (let x = 0; x < AP_BROWNMUNDE.length; x++){
    AP_BROWNMUNDE[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/AP - BROWN MUNDE.mp3");
        track();
        userChoice();
        play();
    })
}

const AP_DILNU = document.querySelectorAll(".AP_DILNU");
for (let x = 0; x < AP_DILNU.length; x++){
    AP_DILNU[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/AP - DIL NU.mp3");
        track();
        userChoice();
        play();
    })
}

const AP_TrueStories = document.querySelectorAll(".AP_TrueStories");
for (let x = 0; x < AP_TrueStories.length; x++){
    AP_TrueStories[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/AP - True Stories.mp3");
        track();
        userChoice();
        play();
    })
}

const AP_WithYou = document.querySelectorAll(".AP_WithYou");
for (let x = 0; x < AP_WithYou.length; x++){
    AP_WithYou[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/AP - With You.mp3");
        track();
        userChoice();
        play();
    })
}

const Shubh_WeRollin = document.querySelectorAll(".Shubh_WeRollin");
for (let x = 0; x < Shubh_WeRollin.length; x++){
    Shubh_WeRollin[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Shubh - We Rollin.mp3");
        track();
        userChoice();
        play();
    })
}

const Shubh_Baller = document.querySelectorAll(".Shubh_Baller");
for (let x = 0; x < Shubh_Baller.length; x++){
    Shubh_Baller[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Shubh - Baller.mp3");
        track();
        userChoice();
        play();
    })
}

const Shubh_StillRollin = document.querySelectorAll(".Shubh_StillRollin");
for (let x = 0; x < Shubh_StillRollin.length; x++){
    Shubh_StillRollin[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Shubh - Still Rollin.mp3");
        track();
        userChoice();
        play();
    })
}

const Shubh_SafetyOff = document.querySelectorAll(".Shubh_SafetyOff");
for (let x = 0; x < Shubh_SafetyOff.length; x++){
    Shubh_SafetyOff[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Shubh - Safety Off.mp3");
        track();
        userChoice();
        play();
    })
}

const Shubh_Cheques = document.querySelectorAll(".Shubh_Cheques");
for (let x = 0; x < Shubh_Cheques.length; x++){
    Shubh_Cheques[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Shubh - Cheques.mp3");
        track();
        userChoice();
        play();
    })
}

const Badshah_Paagal = document.querySelectorAll(".Badshah_Paagal");
for (let x = 0; x < Badshah_Paagal.length; x++){
    Badshah_Paagal[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Badshah - Paagal.mp3");
        track();
        userChoice();
        play();
    })
}

const Badshah_DJWaleyBabu = document.querySelectorAll(".Badshah_DJWaleyBabu");
for (let x = 0; x < Badshah_DJWaleyBabu.length; x++){
    Badshah_DJWaleyBabu[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Badshah - DJ Waley Babu.mp3");
        track();
        userChoice();
        play();
    })
}

const Badshah_AbhiTohParty = document.querySelectorAll(".Badshah_AbhiTohParty");
for (let x = 0; x < Badshah_AbhiTohParty.length; x++){
    Badshah_AbhiTohParty[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Badshah - Abhi Toh Party Shuru Hui Hai.mp3");
        track();
        userChoice();
        play();
    })
}

const Badshah_BadBoyBadGirl = document.querySelectorAll(".Badshah_BadBoyBadGirl");
for (let x = 0; x < Badshah_BadBoyBadGirl.length; x++){
    Badshah_BadBoyBadGirl[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Badshah - Bad Boy x Bad Girl.mp3");
        track();
        userChoice();
        play();
    })
}

const Badshah_OSajna = document.querySelectorAll(".Badshah_OSajna");
for (let x = 0; x < Badshah_OSajna.length; x++){
    Badshah_OSajna[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Badshah - O Sajna.mp3");
        track();
        userChoice();
        play();
    })
}

const Badshah_Heartless = document.querySelectorAll(".Badshah_Heartless");
for (let x = 0; x < Badshah_Heartless.length; x++){
    Badshah_Heartless[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Badshah - Heartless.mp3");
        track();
        userChoice();
        play();
    })
}

const Badshah_Mercy = document.querySelectorAll(".Badshah_Mercy");
for (let x = 0; x < Badshah_Mercy.length; x++){
    Badshah_Mercy[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Badshah - Mercy.mp3");
        track();
        userChoice();
        play();
    })
}

const YOYO_DheereDheere = document.querySelectorAll(".YOYO_DheereDheere");
for (let x = 0; x < YOYO_DheereDheere.length; x++){
    YOYO_DheereDheere[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/YO YO - Dheere Dheere.mp3");
        track();
        userChoice();
        play();
    })
}

const YOYO_ChaarBotalVodka = document.querySelectorAll(".YOYO_ChaarBotalVodka");
for (let x = 0; x < YOYO_ChaarBotalVodka.length; x++){
    YOYO_ChaarBotalVodka[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/YO YO - Chaar Botal Vodka.mp3");
        track();
        userChoice();
        play();
    })
}

const YOYO_PartyWithTheBhoothnath = document.querySelectorAll(".YOYO_PartyWithTheBhoothnath");
for (let x = 0; x < YOYO_PartyWithTheBhoothnath.length; x++){
    YOYO_PartyWithTheBhoothnath[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/YO YO - Party With The Bhoothnath.mp3");
        track();
        userChoice();
        play();
    })
}

const YOYO_DesiKalakaar = document.querySelectorAll(".YOYO_DesiKalakaar");
for (let x = 0; x < YOYO_DesiKalakaar.length; x++){
    YOYO_DesiKalakaar[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/YO YO - Desi Kalakaar.mp3");
        track();
        userChoice();
        play();
    })
}

const YOYO_LOVEDOSE = document.querySelectorAll(".YOYO_LOVEDOSE");
for (let x = 0; x < YOYO_LOVEDOSE.length; x++){
    YOYO_LOVEDOSE[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/YO YO - LOVE DOSE.mp3");
        track();
        userChoice();
        play();
    })
}

const YOYO_BlueEyes = document.querySelectorAll(".YOYO_BlueEyes");
for (let x = 0; x < YOYO_BlueEyes.length; x++){
    YOYO_BlueEyes[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/YO YO - Blue Eyes.mp3");
        track();
        userChoice();
        play();
    })
}

const Boy_deathbed = document.querySelectorAll(".Boy_deathbed");
for (let x = 0; x < Boy_deathbed.length; x++){
    Boy_deathbed[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Boy - death bed.mp3");
        track();
        userChoice();
        play();
    })
}

const BoyWithUke_SheSaidNo = document.querySelectorAll(".BoyWithUke_SheSaidNo");
for (let x = 0; x < BoyWithUke_SheSaidNo.length; x++){
    BoyWithUke_SheSaidNo[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/BoyWithUke - She Said No.mp3");
        track();
        userChoice();
        play();
    })
}

const BoyWithUke_TwoMoons = document.querySelectorAll(".BoyWithUke_TwoMoons");
for (let x = 0; x < BoyWithUke_TwoMoons.length; x++){
    BoyWithUke_TwoMoons[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/BoyWithUke - Two Moons.mp3");
        track();
        userChoice();
        play();
    })
}

const BoyWithUke_Toxic = document.querySelectorAll(".BoyWithUke_Toxic");
for (let x = 0; x < BoyWithUke_Toxic.length; x++){
    BoyWithUke_Toxic[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/BoyWithUke - Toxic.mp3");
        track();
        userChoice();
        play();
    })
}

const BoyWithUke_Understand = document.querySelectorAll(".BoyWithUke_Understand");
for (let x = 0; x < BoyWithUke_Understand.length; x++){
    BoyWithUke_Understand[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/BoyWithUke - Understand.mp3");
        track();
        userChoice();
        play();
    })
}

const Arijit_KyaMujhePyar = document.querySelectorAll(".Arijit_KyaMujhePyar");
for (let x = 0; x < Arijit_KyaMujhePyar.length; x++){
    Arijit_KyaMujhePyar[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Arijit - Kya Mujhe Pyar.mp3");
        track();
        userChoice();
        play();
    })
}

const Arijit_TaaronKeShehar = document.querySelectorAll(".Arijit_TaaronKeShehar");
for (let x = 0; x < Arijit_TaaronKeShehar.length; x++){
    Arijit_TaaronKeShehar[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Arijit - Taaron Ke Shehar.mp3");
        track();
        userChoice();
        play();
    })
}

const Arijit_DILKOKARRARAAYA = document.querySelectorAll(".Arijit_DILKOKARRARAAYA");
for (let x = 0; x < Arijit_DILKOKARRARAAYA.length; x++){
    Arijit_DILKOKARRARAAYA[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Arijit - DIL KO KARRAR AAYA.mp3");
        track();
        userChoice();
        play();
    })
}

const Diljit_BornToShine = document.querySelectorAll(".Diljit_BornToShine");
for (let x = 0; x < Diljit_BornToShine.length; x++){
    Diljit_BornToShine[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Diljit - Born To Shine.mp3");
        track();
        userChoice();
        play();
    })
}

const Diljit_AayaNaTu = document.querySelectorAll(".Dilijit_AayaNaTu");
for (let x = 0; x < Diljit_AayaNaTu.length; x++){
    Diljit_AayaNaTu[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Dilijit - Aaya Na Tu.mp3");
        track();
        userChoice();
        play();
    })
}

const Diljit_GHOST = document.querySelectorAll(".Diljit_GHOST");
for (let x = 0; x < Diljit_GHOST.length; x++){
    Diljit_GHOST[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Diljit - GHOST.mp3");
        track();
        userChoice();
        play();
    })
}

const Diljit_Lemonade = document.querySelectorAll(".Diljit_Lemonade");
for (let x = 0; x < Diljit_Lemonade.length; x++){
    Diljit_Lemonade[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Diljit - Lemonade.mp3");
        track();
        userChoice();
        play();
    })
}

const Diljit_HassHass = document.querySelectorAll(".Diljit_HassHass");
for (let x = 0; x < Diljit_HassHass.length; x++){
    Diljit_HassHass[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("all songs/Diljit - Hass Hass.mp3");
        track();
        userChoice();
        play();
    })
}

const podacast1 = document.querySelectorAll(".podacast1");
for (let x = 0; x < podacast1.length; x++){
    podacast1[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("podacsts all/GRIND IN SILENCE - Best Motivational Video (1).mp3");
        track();
        userChoice();
        play();
    })
}

const podacast2 = document.querySelectorAll(".podacast2");
for (let x = 0; x < podacast1.length; x++){
    podacast2[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("podacsts all/david goggins.mp3");
        track();
        userChoice();
        play();
    })
}

const podacast3 = document.querySelectorAll(".podacast3");
for (let x = 0; x < podacast1.length; x++){
    podacast3[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("podacsts all/Self Discipline - By Sandeep Maheshwari  Hindi (1).mp3");
        track();
        userChoice();
        play();
    })
}

const podacast4 = document.querySelectorAll(".podacast4");
for (let x = 0; x < podacast1.length; x++){
    podacast4[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("podacsts all/The Man with an Empty Face_ A Shiva Story (1).mp3");
        track();
        userChoice();
        play();
    })
}

const podacast5 = document.querySelectorAll(".podacast5");
for (let x = 0; x < podacast1.length; x++){
    podacast5[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("podacsts all/Balram couldve Ended Mahabharat in a Minute! - 5 Unknown Facts of Mahabharat ft. @single.handedly.mp3");
        track();
        userChoice();
        play();
    })
}

const BeerBiceps1 = document.querySelectorAll(".BeerBiceps1");
for (let x = 0; x < BeerBiceps1.length; x++){
    BeerBiceps1[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("podacsts all/Best Protein Sources For Indians - Gut Doctor Explains.mp3");
        track();
        userChoice();
        play();
    })
}

const BeerBiceps2 = document.querySelectorAll(".BeerBiceps2");
for (let x = 0; x < BeerBiceps2.length; x++){
    BeerBiceps2[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("podacsts all/My Love Story With Amaal - Dulquer Salmaan Opens Up.mp3");
        track();
        userChoice();
        play();
    })
}

const BeerBiceps3 = document.querySelectorAll(".BeerBiceps3");
for (let x = 0; x < BeerBiceps3.length; x++){
    BeerBiceps3[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("podacsts all/Yogi Ji as India's Next PM - J Sai Deepak Discusses BJP's Future.mp3");
        track();
        userChoice();
        play();
    })
}

const BeerBiceps4 = document.querySelectorAll(".BeerBiceps4");
for (let x = 0; x < BeerBiceps4.length; x++){
    BeerBiceps4[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("podacsts all/What Gen-Z Needs - R.Madhavan's Message For Parents & Teens.mp3");
        track();
        userChoice();
        play();
    })
}

const BeerBiceps5 = document.querySelectorAll(".BeerBiceps5");
for (let x = 0; x < BeerBiceps5.length; x++){
    BeerBiceps5[x].addEventListener("click", ()=>{
        if(audio_) audio_.pause();
        song = audio_ = new Audio("podacsts all/Shiva Or Vishnu - Who Is SUPREME God_ (1).mp3");
        track();
        userChoice();
        play();
    })
}

// ##################################################################  volume control system ################################################################################


let vol = document.getElementById("vol");
let volIcon = document.getElementById("volumeIcon");
song.volume = 0.9
vol.value = 100


vol.oninput = function(){
    song.volume = vol.value/100;
    console.log(vol.value)
    if (vol.value > 50){
        volIcon.classList.remove("fa-volume-low");
        volIcon.classList.remove("fa-volume-off");
        volIcon.classList.remove("fa-volume-xmark");
        volIcon.classList.add("fa-volume-high");
    } else if (vol.value <= 70 && vol.value >= 1) {
        volIcon.classList.remove("fa-volume-high");
        volIcon.classList.remove("fa-volume-off");
        volIcon.classList.remove("fa-volume-xmark");
        volIcon.classList.add("fa-volume-low");
    } else if (vol.value <= 0){
        volIcon.classList.remove("fa-volume-low");
        volIcon.classList.remove("fa-volume-high");
        volIcon.classList.remove("fa-volume-xmark");
        volIcon.classList.add("fa-volume-off");
    }
}

function mute(){
    if (volIcon.classList.contains("fa-volume-xmark")){
        song.volume = 0.4;
        vol.value = 40;
        volIcon.classList.remove("fa-volume-xmark");
        volIcon.classList.add("fa-volume-low");
    } else{
        song.volume = 0;
        vol.value = 0;
        volIcon.classList.remove("fa-volume-high");
        volIcon.classList.remove("fa-volume-low");
        volIcon.classList.remove("fa-volume-off");
        volIcon.classList.add("fa-volume-xmark");
    }
}

// ######################################################################### artits background change on click  ######################################################################### 

let activeAlbumlist = document.querySelectorAll(".activeAlbum");
activeAlbumlist.forEach(activebtn => {
    activebtn.addEventListener("click", ()=>{
        document.querySelector(".activeAlbumcolor")?.classList.remove("activeAlbumcolor")
        activebtn.classList.add("activeAlbumcolor")
    })
})


let ActiveSonglist = document.querySelectorAll(".SongPreview");
ActiveSonglist.forEach(activeSong => {
    activeSong.addEventListener("click", ()=>{
        document.querySelector(".ActiveSong")?.classList.remove("ActiveSong")
        activeSong.classList.add("ActiveSong")
    })
})

let activePlaylistlist = document.querySelectorAll(".activePlaylist");
activePlaylistlist.forEach(activebtn => {
    activebtn.addEventListener("click", ()=>{
        document.querySelector(".activePlaylistcolor")?.classList.remove("activePlaylistcolor")
        activebtn.classList.add("activePlaylistcolor")
    })
})

// ############################################ liked Artist system   ##################################################
let likesong = document.querySelector("#All");
likesong.addEventListener("click", ()=>{
    document.querySelector(".artits").style.display = "flex";
    document.querySelector(".likedartits").style.display = "none";
    document.querySelector(".likedsongAlbum").style.display = "none";
})

let yourArtist = document.querySelector("#likedArtistList");
yourArtist.addEventListener("click", ()=>{
    document.querySelector(".likedartits").style.display = "flex";
    document.querySelector(".artits").style.display = "none";
    document.querySelector(".likedsongAlbum").style.display = "none";
    
})

let likedAlbumlist = document.querySelectorAll(".likedAlbum");
likedAlbumlist.forEach(likedbtn => {
    likedbtn.addEventListener("click", ()=>{
        document.querySelector(".likedAlbumcolor")?.classList.remove("likedAlbumcolor")
        likedbtn.classList.add("likedAlbumcolor")
    })
})

// ############################################ liked song system   ##################################################

let likedSongList = document.querySelector("#likedSongList");
likedSongList.addEventListener("click", ()=>{
    document.querySelector(".artits").style.display = "none";
    document.querySelector(".likedartits").style.display = "none";
    document.querySelector(".likedsongAlbum").style.display = "flex";
})


//  Like button change system

let likeList = document.querySelectorAll(".like");
likeList.forEach(liked=>{
    liked.addEventListener("click", ()=>{
        if (liked.innerHTML == "Like"){
            liked.innerHTML = "Liked";
            liked.style.color = "white";
            liked.style.borderColor = "white";
        } else{
            liked.innerHTML = "Like";
            liked.style.borderColor = "gray";
        }
        
    })
})

// ################################################ Like button Activation system  #############################################################

// Trampoline song

let addingTrampoline = document.getElementById("likedTrampoline");
addingTrampoline.addEventListener("click", ()=>{
    if (document.getElementById("AddTrampoline").classList.contains("display")){
        document.getElementById("AddTrampoline").classList.remove("display");
    } else{
        document.getElementById("AddTrampoline").classList.add("display");
    }
})

// Dusk Till dawn song

let addingDuskTilldawn = document.getElementById("likedDuskTilldawn");
addingDuskTilldawn.addEventListener("click", ()=>{
    if (document.getElementById("AddDuskTilldawn").classList.contains("display")){
        document.getElementById("AddDuskTilldawn").classList.remove("display");
    } else{
        document.getElementById("AddDuskTilldawn").classList.add("display");
    }
})

// FOol FOr YoU song

let addingFOolFOrYoU = document.getElementById("likedFOolFOrYoU");
addingFOolFOrYoU.addEventListener("click", ()=>{
    if (document.getElementById("AddFOolFOrYoU").classList.contains("display")){
        document.getElementById("AddFOolFOrYoU").classList.remove("display");
    } else{
        document.getElementById("AddFOolFOrYoU").classList.add("display");
    }
})

// I Dont Wanna Live Forever song

let addingIDontWannaLiveForever = document.getElementById("likedIDontWannaLiveForever");
addingIDontWannaLiveForever.addEventListener("click", ()=>{
    if (document.getElementById("AddIDontWannaLiveForever").classList.contains("display")){
        document.getElementById("AddIDontWannaLiveForever").classList.remove("display");
    } else{
        document.getElementById("AddIDontWannaLiveForever").classList.add("display");
    }
})

// Let Me song

let addingLetMe = document.getElementById("likedLetMe");
addingLetMe.addEventListener("click", ()=>{
    if (document.getElementById("AddLetMe").classList.contains("display")){
        document.getElementById("AddLetMe").classList.remove("display");
    } else{
        document.getElementById("AddLetMe").classList.add("display");
    }
})

// Night Changes song

let addingNightChanges = document.getElementById("likedNightChanges");
addingNightChanges.addEventListener("click", ()=>{
    if (document.getElementById("AddNightChanges").classList.contains("display")){
        document.getElementById("AddNightChanges").classList.remove("display");
    } else{
        document.getElementById("AddNightChanges").classList.add("display");
    }
})

// PILLOWTALK song

let addingPILLOWTALK = document.getElementById("likedPILLOWTALK");
addingPILLOWTALK.addEventListener("click", ()=>{
    if (document.getElementById("AddPILLOWTALK").classList.contains("display")){
        document.getElementById("AddPILLOWTALK").classList.remove("display");
    } else{
        document.getElementById("AddPILLOWTALK").classList.add("display");
    }
})

// What I Am song

let addingWhatIAm = document.getElementById("likedWhatIAm");
addingWhatIAm.addEventListener("click", ()=>{
    if (document.getElementById("AddWhatIAm").classList.contains("display")){
        document.getElementById("AddWhatIAm").classList.remove("display");
    } else{
        document.getElementById("AddWhatIAm").classList.add("display");
    }
})

//  A Whole New World song

let addingAWholeNewWorld = document.getElementById("likedAWholeNewWorld");
addingAWholeNewWorld.addEventListener("click", ()=>{
    if (document.getElementById("AddAWholeNewWorld").classList.contains("display")){
        document.getElementById("AddAWholeNewWorld").classList.remove("display");
    } else{
        document.getElementById("AddAWholeNewWorld").classList.add("display");
    }
})

// Entertainer song

let addingEntertainer = document.getElementById("likedEntertainer");
addingEntertainer.addEventListener("click", ()=>{
    if (document.getElementById("AddEntertainer").classList.contains("display")){
        document.getElementById("AddEntertainer").classList.remove("display");
    } else{
        document.getElementById("AddEntertainer").classList.add("display");
    }
})


let Add100million = document.getElementById("likedmillion");
Add100million.addEventListener("click", ()=>{
    if (document.getElementById("Add100million").classList.contains("display")){
        document.getElementById("Add100million").classList.remove("display");
    } else{
        document.getElementById("Add100million").classList.add("display");
    }
})


let AddBombaytopanjab = document.getElementById("likedbombaytopanjab");
AddBombaytopanjab.addEventListener("click", ()=>{
    if (document.getElementById("AddBombaytopanjab").classList.contains("display")){
        document.getElementById("AddBombaytopanjab").classList.remove("display");
    } else{
        document.getElementById("AddBombaytopanjab").classList.add("display");
    }
})

let AddChalBombay = document.getElementById("likedchalbombay");
AddChalBombay.addEventListener("click", ()=>{
    if (document.getElementById("AddChalBombay").classList.contains("display")){
        document.getElementById("AddChalBombay").classList.remove("display");
    } else{
        document.getElementById("AddChalBombay").classList.add("display");
    }
})

let Addkaam25 = document.getElementById("likedKaam25");
Addkaam25.addEventListener("click", ()=>{
    if (document.getElementById("Addkaam25").classList.contains("display")){
        document.getElementById("Addkaam25").classList.remove("display");
    } else{
        document.getElementById("Addkaam25").classList.add("display");
    }
})

let Addkohonoor = document.getElementById("likedkohonoor");
Addkohonoor.addEventListener("click", ()=>{
    if (document.getElementById("Addkohonoor").classList.contains("display")){
        document.getElementById("Addkohonoor").classList.remove("display");
    } else{
        document.getElementById("Addkohonoor").classList.add("display");
    }
})

let Addmirchi = document.getElementById("likedmirchi");
Addmirchi.addEventListener("click", ()=>{
    if (document.getElementById("Addmirchi").classList.contains("display")){
        document.getElementById("Addmirchi").classList.remove("display");
    } else{
        document.getElementById("Addmirchi").classList.add("display");
    }
})

let Addnothinglast = document.getElementById("likednothinglast");
Addnothinglast.addEventListener("click", ()=>{
    if (document.getElementById("Addnothinglast").classList.contains("display")){
        document.getElementById("Addnothinglast").classList.remove("display");
    } else{
        document.getElementById("Addnothinglast").classList.add("display");
    }
})

let Addoneside = document.getElementById("likedoneside");
Addoneside.addEventListener("click", ()=>{
    if (document.getElementById("Addoneside").classList.contains("display")){
        document.getElementById("Addoneside").classList.remove("display");
    } else{
        document.getElementById("Addoneside").classList.add("display");
    }
})

let Addpunyapaap = document.getElementById("likedpunyapaap");
Addpunyapaap.addEventListener("click", ()=>{
    if (document.getElementById("Addpunyapaap").classList.contains("display")){
        document.getElementById("Addpunyapaap").classList.remove("display");
    } else{
        document.getElementById("Addpunyapaap").classList.add("display");
    }
})

let Addteesrimanzil = document.getElementById("likedteesrimanzil");
Addteesrimanzil.addEventListener("click", ()=>{
    if (document.getElementById("Addteesrimanzil").classList.contains("display")){
        document.getElementById("Addteesrimanzil").classList.remove("display");
    } else{
        document.getElementById("Addteesrimanzil").classList.add("display");
    }
})

let AddMockingBird = document.getElementById("likedMockingBird");
AddMockingBird.addEventListener("click", ()=>{
    if (document.getElementById("AddMockingBird").classList.contains("display")){
        document.getElementById("AddMockingBird").classList.remove("display");
    } else{
        document.getElementById("AddMockingBird").classList.add("display");
    }
})

let Addnotafraid = document.getElementById("likednotafraid");
Addnotafraid.addEventListener("click", ()=>{
    if (document.getElementById("Addnotafraid").classList.contains("display")){
        document.getElementById("Addnotafraid").classList.remove("display");
    } else{
        document.getElementById("Addnotafraid").classList.add("display");
    }
})

let Addgodzila = document.getElementById("likedgodzila");
Addgodzila.addEventListener("click", ()=>{
    if (document.getElementById("Addgodzila").classList.contains("display")){
        document.getElementById("Addgodzila").classList.remove("display");
    } else{
        document.getElementById("Addgodzila").classList.add("display");
    }
})

let Addloseyourself = document.getElementById("likedloseyourself");
Addloseyourself.addEventListener("click", ()=>{
    if (document.getElementById("Addloseyourself").classList.contains("display")){
        document.getElementById("Addloseyourself").classList.remove("display");
    } else{
        document.getElementById("Addloseyourself").classList.add("display");
    }
})

let Addlovethewaylie = document.getElementById("likedlovethewaylie");
Addlovethewaylie.addEventListener("click", ()=>{
    if (document.getElementById("Addlovethewaylie").classList.contains("display")){
        document.getElementById("Addlovethewaylie").classList.remove("display");
    } else{
        document.getElementById("Addlovethewaylie").classList.add("display");
    }
})

let Addmonster = document.getElementById("likedmonster");
Addmonster.addEventListener("click", ()=>{
    if (document.getElementById("Addmonster").classList.contains("display")){
        document.getElementById("Addmonster").classList.remove("display");
    } else{
        document.getElementById("Addmonster").classList.add("display");
    }
})

let Addnolove = document.getElementById("likednolove");
Addnolove.addEventListener("click", ()=>{
    if (document.getElementById("Addnolove").classList.contains("display")){
        document.getElementById("Addnolove").classList.remove("display");
    } else{
        document.getElementById("Addnolove").classList.add("display");
    }
})

let Addwheniamgone = document.getElementById("likedwheniamgone");
Addwheniamgone.addEventListener("click", ()=>{
    if (document.getElementById("Addwheniamgone").classList.contains("display")){
        document.getElementById("Addwheniamgone").classList.remove("display");
    } else{
        document.getElementById("Addwheniamgone").classList.add("display");
    }
})

let Addwithoutme = document.getElementById("likedwithoutme");
Addwithoutme.addEventListener("click", ()=>{
    if (document.getElementById("Addwithoutme").classList.contains("display")){
        document.getElementById("Addwithoutme").classList.remove("display");
    } else{
        document.getElementById("Addwithoutme").classList.add("display");
    }
})

let AddVenom = document.getElementById("likedVenom");
AddVenom.addEventListener("click", ()=>{
    if (document.getElementById("AddVenom").classList.contains("display")){
        document.getElementById("AddVenom").classList.remove("display");
    } else{
        document.getElementById("AddVenom").classList.add("display");
    }
})

let AddPeaches = document.getElementById("likedPeaches");
AddPeaches.addEventListener("click", ()=>{
    if (document.getElementById("AddPeaches").classList.contains("display")){
        document.getElementById("AddPeaches").classList.remove("display");
    } else{
        document.getElementById("AddPeaches").classList.add("display");
    }
})

let AddYummy = document.getElementById("likedYummy");
AddYummy.addEventListener("click", ()=>{
    if (document.getElementById("AddYummy").classList.contains("display")){
        document.getElementById("AddYummy").classList.remove("display");
    } else{
        document.getElementById("AddYummy").classList.add("display");
    }
})

let AddGhost = document.getElementById("likedGhost");
AddGhost.addEventListener("click", ()=>{
    if (document.getElementById("AddGhost").classList.contains("display")){
        document.getElementById("AddGhost").classList.remove("display");
    } else{
        document.getElementById("AddGhost").classList.add("display");
    }
})

let AddBaby = document.getElementById("likedBaby");
AddBaby.addEventListener("click", ()=>{
    if (document.getElementById("AddBaby").classList.contains("display")){
        document.getElementById("AddBaby").classList.remove("display");
    } else{
        document.getElementById("AddBaby").classList.add("display");
    }
})

let AddHours_justin = document.getElementById("likedHours_justin");
AddHours_justin.addEventListener("click", ()=>{
    if (document.getElementById("AddHours_justin").classList.contains("display")){
        document.getElementById("AddHours_justin").classList.remove("display");
    } else{
        document.getElementById("AddHours_justin").classList.add("display");
    }
})

let AddHoldOn = document.getElementById("likedHoldOn");
AddHoldOn.addEventListener("click", ()=>{
    if (document.getElementById("AddHoldOn").classList.contains("display")){
        document.getElementById("AddHoldOn").classList.remove("display");
    } else{
        document.getElementById("AddHoldOn").classList.add("display");
    }
})

let AddIDontCare = document.getElementById("likedIDontCare");
AddIDontCare.addEventListener("click", ()=>{
    if (document.getElementById("AddIDontCare").classList.contains("display")){
        document.getElementById("AddIDontCare").classList.remove("display");
    } else{
        document.getElementById("AddIDontCare").classList.add("display");
    }
})

let AddLoveyourself = document.getElementById("likedLoveyourself");
AddLoveyourself.addEventListener("click", ()=>{
    if (document.getElementById("AddLoveyourself").classList.contains("display")){
        document.getElementById("AddLoveyourself").classList.remove("display");
    } else{
        document.getElementById("AddLoveyourself").classList.add("display");
    }
})

let AddNeverSayNever = document.getElementById("likedNeverSayNever");
AddNeverSayNever.addEventListener("click", ()=>{
    if (document.getElementById("AddNeverSayNever").classList.contains("display")){
        document.getElementById("AddNeverSayNever").classList.remove("display");
    } else{
        document.getElementById("AddNeverSayNever").classList.add("display");
    }
})

let AddStay = document.getElementById("likedStay");
AddStay.addEventListener("click", ()=>{
    if (document.getElementById("AddStay").classList.contains("display")){
        document.getElementById("AddStay").classList.remove("display");
    } else{
        document.getElementById("AddStay").classList.add("display");
    }
})

let AddBesabriyan = document.getElementById("likedBesabriyan");
AddBesabriyan.addEventListener("click", ()=>{
    if (document.getElementById("AddBesabriyan").classList.contains("display")){
        document.getElementById("AddBesabriyan").classList.remove("display");
    } else{
        document.getElementById("AddBesabriyan").classList.add("display");
    }
})

let AddBoldonazara = document.getElementById("likedBoldonazara");
AddBoldonazara.addEventListener("click", ()=>{
    if (document.getElementById("AddBoldonazara").classList.contains("display")){
        document.getElementById("AddBoldonazara").classList.remove("display");
    } else{
        document.getElementById("AddBoldonazara").classList.add("display");
    }
})

let AddBuddusamann = document.getElementById("likedBuddusamann");
AddBuddusamann.addEventListener("click", ()=>{
    if (document.getElementById("AddBuddusamann").classList.contains("display")){
        document.getElementById("AddBuddusamann").classList.remove("display");
    } else{
        document.getElementById("AddBuddusamann").classList.add("display");
    }
})

let Addsabtera = document.getElementById("likedsabtera");
Addsabtera.addEventListener("click", ()=>{
    if (document.getElementById("Addsabtera").classList.contains("display")){
        document.getElementById("Addsabtera").classList.remove("display");
    } else{
        document.getElementById("Addsabtera").classList.add("display");
    }
})

let AddHamnahisudarenge = document.getElementById("likedHamnahisudarenge");
AddHamnahisudarenge.addEventListener("click", ()=>{
    if (document.getElementById("AddHamnahisudarenge").classList.contains("display")){
        document.getElementById("AddHamnahisudarenge").classList.remove("display");
    } else{
        document.getElementById("AddHamnahisudarenge").classList.add("display");
    }
})

let Addjabtak = document.getElementById("likedjabtak");
Addjabtak.addEventListener("click", ()=>{
    if (document.getElementById("Addjabtak").classList.contains("display")){
        document.getElementById("Addjabtak").classList.remove("display");
    } else{
        document.getElementById("Addjabtak").classList.add("display");
    }
})

let AddKauntuje = document.getElementById("likedKauntuje");
AddKauntuje.addEventListener("click", ()=>{
    if (document.getElementById("AddKauntuje").classList.contains("display")){
        document.getElementById("AddKauntuje").classList.remove("display");
    } else{
        document.getElementById("AddKauntuje").classList.add("display");
    }
})

let AddMainrahoon = document.getElementById("likedMainrahoon");
AddMainrahoon.addEventListener("click", ()=>{
    if (document.getElementById("AddMainrahoon").classList.contains("display")){
        document.getElementById("AddMainrahoon").classList.remove("display");
    } else{
        document.getElementById("AddMainrahoon").classList.add("display");
    }
})

let AddOndumalebillu = document.getElementById("likedOndumalebillu");
AddOndumalebillu.addEventListener("click", ()=>{
    if (document.getElementById("AddOndumalebillu").classList.contains("display")){
        document.getElementById("AddOndumalebillu").classList.remove("display");
    } else{
        document.getElementById("AddOndumalebillu").classList.add("display");
    }
})

let AddPhelaPyar = document.getElementById("likedPhelaPyar");
AddPhelaPyar.addEventListener("click", ()=>{
    if (document.getElementById("AddPhelaPyar").classList.contains("display")){
        document.getElementById("AddPhelaPyar").classList.remove("display");
    } else{
        document.getElementById("AddPhelaPyar").classList.add("display");
    }
})

let Addagartumsatho = document.getElementById("likedagartumsatho");
Addagartumsatho.addEventListener("click", ()=>{
    if (document.getElementById("Addagartumsatho").classList.contains("display")){
        document.getElementById("Addagartumsatho").classList.remove("display");
    } else{
        document.getElementById("Addagartumsatho").classList.add("display");
    }
})

let AddGaltisaymistake = document.getElementById("likedGaltisaymistake");
AddGaltisaymistake.addEventListener("click", ()=>{
    if (document.getElementById("AddGaltisaymistake").classList.contains("display")){
        document.getElementById("AddGaltisaymistake").classList.remove("display");
    } else{
        document.getElementById("AddGaltisaymistake").classList.add("display");
    }
})

let AddLambiyan = document.getElementById("likedLambiyan");
AddLambiyan.addEventListener("click", ()=>{
    if (document.getElementById("AddLambiyan").classList.contains("display")){
        document.getElementById("AddLambiyan").classList.remove("display");
    } else{
        document.getElementById("AddLambiyan").classList.add("display");
    }
})

let AddLeharadho = document.getElementById("likedLeharadho");
AddLeharadho.addEventListener("click", ()=>{
    if (document.getElementById("AddLeharadho").classList.contains("display")){
        document.getElementById("AddLeharadho").classList.remove("display");
    } else{
        document.getElementById("AddLeharadho").classList.add("display");
    }
})

let AddMainteraboyfriend = document.getElementById("likedMainteraboyfriend");
AddMainteraboyfriend.addEventListener("click", ()=>{
    if (document.getElementById("AddMainteraboyfriend").classList.contains("display")){
        document.getElementById("AddMainteraboyfriend").classList.remove("display");
    } else{
        document.getElementById("AddMainteraboyfriend").classList.add("display");
    }
})

let AddSatranga = document.getElementById("likedSatranga");
AddSatranga.addEventListener("click", ()=>{
    if (document.getElementById("AddSatranga").classList.contains("display")){
        document.getElementById("AddSatranga").classList.remove("display");
    } else{
        document.getElementById("AddSatranga").classList.add("display");
    }
})

let AddSurajaDubh = document.getElementById("likedSurajaDubh");
AddSurajaDubh.addEventListener("click", ()=>{
    if (document.getElementById("AddSurajaDubh").classList.contains("display")){
        document.getElementById("AddSurajaDubh").classList.remove("display");
    } else{
        document.getElementById("AddSurajaDubh").classList.add("display");
    }
})

let AddTerayarhumay = document.getElementById("likedTerayarhumay");
AddTerayarhumay.addEventListener("click", ()=>{
    if (document.getElementById("AddTerayarhumay").classList.contains("display")){
        document.getElementById("AddTerayarhumay").classList.remove("display");
    } else{
        document.getElementById("AddTerayarhumay").classList.add("display");
    }
})

let AddWhatjumka = document.getElementById("likedWhatjumka");
AddWhatjumka.addEventListener("click", ()=>{
    if (document.getElementById("AddWhatjumka").classList.contains("display")){
        document.getElementById("AddWhatjumka").classList.remove("display");
    } else{
        document.getElementById("AddWhatjumka").classList.add("display");
    }
})

let AddWhodin = document.getElementById("likedWhodin");
AddWhodin.addEventListener("click", ()=>{
    if (document.getElementById("AddWhodin").classList.contains("display")){
        document.getElementById("AddWhodin").classList.remove("display");
    } else{
        document.getElementById("AddWhodin").classList.add("display");
    }
})

let AddBlankSpace = document.getElementById("likedBlankSpace");
AddBlankSpace.addEventListener("click", ()=>{
    if (document.getElementById("AddBlankSpace").classList.contains("display")){
        document.getElementById("AddBlankSpace").classList.remove("display");
    } else{
        document.getElementById("AddBlankSpace").classList.add("display");
    }
})

let AddRed = document.getElementById("likedRed");
AddRed.addEventListener("click", ()=>{
    if (document.getElementById("AddRed").classList.contains("display")){
        document.getElementById("AddRed").classList.remove("display");
    } else{
        document.getElementById("AddRed").classList.add("display");
    }
})

let AddLoveStory = document.getElementById("likedLoveStory");
AddLoveStory.addEventListener("click", ()=>{
    if (document.getElementById("AddLoveStory").classList.contains("display")){
        document.getElementById("AddLoveStory").classList.remove("display");
    } else{
        document.getElementById("AddLoveStory").classList.add("display");
    }
})

let AddBacktoDecember = document.getElementById("likedBacktoDecember");
AddBacktoDecember.addEventListener("click", ()=>{
    if (document.getElementById("AddBacktoDecember").classList.contains("display")){
        document.getElementById("AddBacktoDecember").classList.remove("display");
    } else{
        document.getElementById("AddBacktoDecember").classList.add("display");
    }
})

let AddAntiHero = document.getElementById("likedAntiHero");
AddAntiHero.addEventListener("click", ()=>{
    if (document.getElementById("AddAntiHero").classList.contains("display")){
        document.getElementById("AddAntiHero").classList.remove("display");
    } else{
        document.getElementById("AddAntiHero").classList.add("display");
    }
})

let Addtwentytwo = document.getElementById("likedtwentytwo");
Addtwentytwo.addEventListener("click", ()=>{
    if (document.getElementById("Addtwentytwo").classList.contains("display")){
        document.getElementById("Addtwentytwo").classList.remove("display");
    } else{
        document.getElementById("Addtwentytwo").classList.add("display");
    }
})

let AddWildestDreams = document.getElementById("likedWildestDreams");
AddWildestDreams.addEventListener("click", ()=>{
    if (document.getElementById("AddWildestDreams").classList.contains("display")){
        document.getElementById("AddWildestDreams").classList.remove("display");
    } else{
        document.getElementById("AddWildestDreams").classList.add("display");
    }
})

let AddYouBelongWithMe = document.getElementById("likedYouBelongWithMe");
AddYouBelongWithMe.addEventListener("click", ()=>{
    if (document.getElementById("AddYouBelongWithMe").classList.contains("display")){
        document.getElementById("AddYouBelongWithMe").classList.remove("display");
    } else{
        document.getElementById("AddYouBelongWithMe").classList.add("display");
    }
})

let AddSafeandSound = document.getElementById("likedSafeandSound");
AddSafeandSound.addEventListener("click", ()=>{
    if (document.getElementById("AddSafeandSound").classList.contains("display")){
        document.getElementById("AddSafeandSound").classList.remove("display");
    } else{
        document.getElementById("AddSafeandSound").classList.add("display");
    }
})

let AddEnchanted = document.getElementById("likedEnchanted");
AddEnchanted.addEventListener("click", ()=>{
    if (document.getElementById("AddEnchanted").classList.contains("display")){
        document.getElementById("AddEnchanted").classList.remove("display");
    } else{
        document.getElementById("AddEnchanted").classList.add("display");
    }
})

let AddBadhabits = document.getElementById("likedBadhabits");
AddBadhabits.addEventListener("click", ()=>{
    if (document.getElementById("AddBadhabits").classList.contains("display")){
        document.getElementById("AddBadhabits").classList.remove("display");
    } else{
        document.getElementById("AddBadhabits").classList.add("display");
    }
})

let AddCelestial = document.getElementById("likedCelestial");
AddCelestial.addEventListener("click", ()=>{
    if (document.getElementById("AddCelestial").classList.contains("display")){
        document.getElementById("AddCelestial").classList.remove("display");
    } else{
        document.getElementById("AddCelestial").classList.add("display");
    }
})

let AddGivemelove = document.getElementById("likedGivemelove");
AddGivemelove.addEventListener("click", ()=>{
    if (document.getElementById("AddGivemelove").classList.contains("display")){
        document.getElementById("AddGivemelove").classList.remove("display");
    } else{
        document.getElementById("AddGivemelove").classList.add("display");
    }
})

let AddHappier = document.getElementById("likedHappier");
AddHappier.addEventListener("click", ()=>{
    if (document.getElementById("AddHappier").classList.contains("display")){
        document.getElementById("AddHappier").classList.remove("display");
    } else{
        document.getElementById("AddHappier").classList.add("display");
    }
})

let AddPerfect = document.getElementById("likedPerfect");
AddPerfect.addEventListener("click", ()=>{
    if (document.getElementById("AddPerfect").classList.contains("display")){
        document.getElementById("AddPerfect").classList.remove("display");
    } else{
        document.getElementById("AddPerfect").classList.add("display");
    }
})

let AddPeru = document.getElementById("likedPeru");
AddPeru.addEventListener("click", ()=>{
    if (document.getElementById("AddPeru").classList.contains("display")){
        document.getElementById("AddPeru").classList.remove("display");
    } else{
        document.getElementById("AddPeru").classList.add("display");
    }
})

let AddPhotography = document.getElementById("likedPhotography");
AddPhotography.addEventListener("click", ()=>{
    if (document.getElementById("AddPhotography").classList.contains("display")){
        document.getElementById("AddPhotography").classList.remove("display");
    } else{
        document.getElementById("AddPhotography").classList.add("display");
    }
})

let AddShapeofyou = document.getElementById("likedShapeofyou");
AddShapeofyou.addEventListener("click", ()=>{
    if (document.getElementById("AddShapeofyou").classList.contains("display")){
        document.getElementById("AddShapeofyou").classList.remove("display");
    } else{
        document.getElementById("AddShapeofyou").classList.add("display");
    }
})

let AddShivers = document.getElementById("likedShivers");
AddShivers.addEventListener("click", ()=>{
    if (document.getElementById("AddShivers").classList.contains("display")){
        document.getElementById("AddShivers").classList.remove("display");
    } else{
        document.getElementById("AddShivers").classList.add("display");
    }
})

let AddThinkingoutloud = document.getElementById("likedThinkingoutloud");
AddThinkingoutloud.addEventListener("click", ()=>{
    if (document.getElementById("AddThinkingoutloud").classList.contains("display")){
        document.getElementById("AddThinkingoutloud").classList.remove("display");
    } else{
        document.getElementById("AddThinkingoutloud").classList.add("display");
    }
})

let AddOnekiss = document.getElementById("likedOnekiss");
AddOnekiss.addEventListener("click", ()=>{
    if (document.getElementById("AddOnekiss").classList.contains("display")){
        document.getElementById("AddOnekiss").classList.remove("display");
    } else{
        document.getElementById("AddOnekiss").classList.add("display");
    }
})

let AddBreakmyheart = document.getElementById("likedBreakmyheart");
AddBreakmyheart.addEventListener("click", ()=>{
    if (document.getElementById("AddBreakmyheart").classList.contains("display")){
        document.getElementById("AddBreakmyheart").classList.remove("display");
    } else{
        document.getElementById("AddBreakmyheart").classList.add("display");
    }
})

let AddColdheatnow = document.getElementById("likedColdheatnow");
AddColdheatnow.addEventListener("click", ()=>{
    if (document.getElementById("AddColdheatnow").classList.contains("display")){
        document.getElementById("AddColdheatnow").classList.remove("display");
    } else{
        document.getElementById("AddColdheatnow").classList.add("display");
    }
})

let AddDancethenight = document.getElementById("likedDancethenight");
AddDancethenight.addEventListener("click", ()=>{
    if (document.getElementById("AddDancethenight").classList.contains("display")){
        document.getElementById("AddDancethenight").classList.remove("display");
    } else{
        document.getElementById("AddDancethenight").classList.add("display");
    }
})

let AddDontstartnow = document.getElementById("likedDontstartnow");
AddDontstartnow.addEventListener("click", ()=>{
    if (document.getElementById("AddDontstartnow").classList.contains("display")){
        document.getElementById("AddDontstartnow").classList.remove("display");
    } else{
        document.getElementById("AddDontstartnow").classList.add("display");
    }
})

let AddHoudini = document.getElementById("likedHoudini");
AddHoudini.addEventListener("click", ()=>{
    if (document.getElementById("AddHoudini").classList.contains("display")){
        document.getElementById("AddHoudini").classList.remove("display");
    } else{
        document.getElementById("AddHoudini").classList.add("display");
    }
})

let AddLevitating = document.getElementById("likedLevitating");
AddLevitating.addEventListener("click", ()=>{
    if (document.getElementById("AddLevitating").classList.contains("display")){
        document.getElementById("AddLevitating").classList.remove("display");
    } else{
        document.getElementById("AddLevitating").classList.add("display");
    }
})

let AddLoveagain = document.getElementById("likedLoveagain");
AddLoveagain.addEventListener("click", ()=>{
    if (document.getElementById("AddLoveagain").classList.contains("display")){
        document.getElementById("AddLoveagain").classList.remove("display");
    } else{
        document.getElementById("AddLoveagain").classList.add("display");
    }
})

let AddNewrules = document.getElementById("likedNewrules");
AddNewrules.addEventListener("click", ()=>{
    if (document.getElementById("AddNewrules").classList.contains("display")){
        document.getElementById("AddNewrules").classList.remove("display");
    } else{
        document.getElementById("AddNewrules").classList.add("display");
    }
})

let AddScaredtobealone = document.getElementById("likedScaredtobealone");
AddScaredtobealone.addEventListener("click", ()=>{
    if (document.getElementById("AddScaredtobealone").classList.contains("display")){
        document.getElementById("AddScaredtobealone").classList.remove("display");
    } else{
        document.getElementById("AddScaredtobealone").classList.add("display");
    }
})

let Addallthegoodgirls = document.getElementById("likedallthegoodgirls");
Addallthegoodgirls.addEventListener("click", ()=>{
    if (document.getElementById("Addallthegoodgirls").classList.contains("display")){
        document.getElementById("Addallthegoodgirls").classList.remove("display");
    } else{
        document.getElementById("Addallthegoodgirls").classList.add("display");
    }
})

let Addbadguy = document.getElementById("likedbadguy");
Addbadguy.addEventListener("click", ()=>{
    if (document.getElementById("Addbadguy").classList.contains("display")){
        document.getElementById("Addbadguy").classList.remove("display");
    } else{
        document.getElementById("Addbadguy").classList.add("display");
    }
})

let Addburyafriend = document.getElementById("likedburyafriend");
Addburyafriend.addEventListener("click", ()=>{
    if (document.getElementById("Addburyafriend").classList.contains("display")){
        document.getElementById("Addburyafriend").classList.remove("display");
    } else{
        document.getElementById("Addburyafriend").classList.add("display");
    }
})

let AddCOPYCAT = document.getElementById("likedCOPYCAT");
AddCOPYCAT.addEventListener("click", ()=>{
    if (document.getElementById("AddCOPYCAT").classList.contains("display")){
        document.getElementById("AddCOPYCAT").classList.remove("display");
    } else{
        document.getElementById("AddCOPYCAT").classList.add("display");
    }
})

let AddHappierThanEver = document.getElementById("likedHappierThanEver");
AddHappierThanEver.addEventListener("click", ()=>{
    if (document.getElementById("AddHappierThanEver").classList.contains("display")){
        document.getElementById("AddHappierThanEver").classList.remove("display");
    } else{
        document.getElementById("AddHappierThanEver").classList.add("display");
    }
})

let Addhostage = document.getElementById("likedhostage");
Addhostage.addEventListener("click", ()=>{
    if (document.getElementById("Addhostage").classList.contains("display")){
        document.getElementById("Addhostage").classList.remove("display");
    } else{
        document.getElementById("Addhostage").classList.add("display");
    }
})

let Addlovely = document.getElementById("likedlovely");
Addlovely.addEventListener("click", ()=>{
    if (document.getElementById("Addlovely").classList.contains("display")){
        document.getElementById("Addlovely").classList.remove("display");
    } else{
        document.getElementById("Addlovely").classList.add("display");
    }
})

let AddOceanEyes = document.getElementById("likedOceanEyes");
AddOceanEyes.addEventListener("click", ()=>{
    if (document.getElementById("AddOceanEyes").classList.contains("display")){
        document.getElementById("AddOceanEyes").classList.remove("display");
    } else{
        document.getElementById("AddOceanEyes").classList.add("display");
    }
})

let Addwhenthepartyisover = document.getElementById("likedwhenthepartyisover");
Addwhenthepartyisover.addEventListener("click", ()=>{
    if (document.getElementById("Addwhenthepartyisover").classList.contains("display")){
        document.getElementById("Addwhenthepartyisover").classList.remove("display");
    } else{
        document.getElementById("Addwhenthepartyisover").classList.add("display");
    }
})

let Addyoushouldseemeinacrown = document.getElementById("likedyoushouldseemeinacrown");
Addyoushouldseemeinacrown.addEventListener("click", ()=>{
    if (document.getElementById("Addyoushouldseemeinacrown").classList.contains("display")){
        document.getElementById("Addyoushouldseemeinacrown").classList.remove("display");
    } else{
        document.getElementById("Addyoushouldseemeinacrown").classList.add("display");
    }
})

let AddSevenrings = document.getElementById("likedSevenrings");
AddSevenrings.addEventListener("click", ()=>{
    if (document.getElementById("AddSevenrings").classList.contains("display")){
        document.getElementById("AddSevenrings").classList.remove("display");
    } else{
        document.getElementById("AddSevenrings").classList.add("display");
    }
})

let AddDangerousWoman = document.getElementById("likedDangerousWoman");
AddDangerousWoman.addEventListener("click", ()=>{
    if (document.getElementById("AddDangerousWoman").classList.contains("display")){
        document.getElementById("AddDangerousWoman").classList.remove("display");
    } else{
        document.getElementById("AddDangerousWoman").classList.add("display");
    }
})

let AddDieForYou = document.getElementById("likedDieForYou");
AddDieForYou.addEventListener("click", ()=>{
    if (document.getElementById("AddDieForYou").classList.contains("display")){
        document.getElementById("AddDieForYou").classList.remove("display");
    } else{
        document.getElementById("AddDieForYou").classList.add("display");
    }
})

let AddEveryday = document.getElementById("likedEveryday");
AddEveryday.addEventListener("click", ()=>{
    if (document.getElementById("AddEveryday").classList.contains("display")){
        document.getElementById("AddEveryday").classList.remove("display");
    } else{
        document.getElementById("AddEveryday").classList.add("display");
    }
})

let AddOneLastTime = document.getElementById("likedOneLastTime");
AddOneLastTime.addEventListener("click", ()=>{
    if (document.getElementById("AddOneLastTime").classList.contains("display")){
        document.getElementById("AddOneLastTime").classList.remove("display");
    } else{
        document.getElementById("AddOneLastTime").classList.add("display");
    }
})

let Addpositions = document.getElementById("likedpositions");
Addpositions.addEventListener("click", ()=>{
    if (document.getElementById("Addpositions").classList.contains("display")){
        document.getElementById("Addpositions").classList.remove("display");
    } else{
        document.getElementById("Addpositions").classList.add("display");
    }
})

let AddSideToside = document.getElementById("likedSideToside");
AddSideToside.addEventListener("click", ()=>{
    if (document.getElementById("AddSideToside").classList.contains("display")){
        document.getElementById("AddSideToside").classList.remove("display");
    } else{
        document.getElementById("AddSideToside").classList.add("display");
    }
})

let AddSantaTellMe = document.getElementById("likedSantaTellMe");
AddSantaTellMe.addEventListener("click", ()=>{
    if (document.getElementById("AddSantaTellMe").classList.contains("display")){
        document.getElementById("AddSantaTellMe").classList.remove("display");
    } else{
        document.getElementById("AddSantaTellMe").classList.add("display");
    }
})

let AddStuckwithU = document.getElementById("likedStuckwithU");
AddStuckwithU.addEventListener("click", ()=>{
    if (document.getElementById("AddStuckwithU").classList.contains("display")){
        document.getElementById("AddStuckwithU").classList.remove("display");
    } else{
        document.getElementById("AddStuckwithU").classList.add("display");
    }
})

let AddthankUnext = document.getElementById("likedthankUnext");
AddthankUnext.addEventListener("click", ()=>{
    if (document.getElementById("AddthankUnext").classList.contains("display")){
        document.getElementById("AddthankUnext").classList.remove("display");
    } else{
        document.getElementById("AddthankUnext").classList.add("display");
    }
})

let AddComeGetIt = document.getElementById("likedComeGetIt");
AddComeGetIt.addEventListener("click", ()=>{
    if (document.getElementById("AddComeGetIt").classList.contains("display")){
        document.getElementById("AddComeGetIt").classList.remove("display");
    } else{
        document.getElementById("AddComeGetIt").classList.add("display");
    }
})

let AddGoodForYou = document.getElementById("likedGoodForYou");
AddGoodForYou.addEventListener("click", ()=>{
    if (document.getElementById("AddGoodForYou").classList.contains("display")){
        document.getElementById("AddGoodForYou").classList.remove("display");
    } else{
        document.getElementById("AddGoodForYou").classList.add("display");
    }
})

let AddHandsToMyself = document.getElementById("likedHandsToMyself");
AddHandsToMyself.addEventListener("click", ()=>{
    if (document.getElementById("AddHandsToMyself").classList.contains("display")){
        document.getElementById("AddHandsToMyself").classList.remove("display");
    } else{
        document.getElementById("AddHandsToMyself").classList.add("display");
    }
})

let AddWolves = document.getElementById("likedWolves");
AddWolves.addEventListener("click", ()=>{
    if (document.getElementById("AddWolves").classList.contains("display")){
        document.getElementById("AddWolves").classList.remove("display");
    } else{
        document.getElementById("AddWolves").classList.add("display");
    }
})

let AddWhoSays = document.getElementById("likedWhoSays");
AddWhoSays.addEventListener("click", ()=>{
    if (document.getElementById("AddWhoSays").classList.contains("display")){
        document.getElementById("AddWhoSays").classList.remove("display");
    } else{
        document.getElementById("AddWhoSays").classList.add("display");
    }
})

let AddTheHeartWant = document.getElementById("likedTheHeartWant");
AddTheHeartWant.addEventListener("click", ()=>{
    if (document.getElementById("AddTheHeartWant").classList.contains("display")){
        document.getElementById("AddTheHeartWant").classList.remove("display");
    } else{
        document.getElementById("AddTheHeartWant").classList.add("display");
    }
})

let AddSlowDown = document.getElementById("likedSlowDown");
AddSlowDown.addEventListener("click", ()=>{
    if (document.getElementById("AddSlowDown").classList.contains("display")){
        document.getElementById("AddSlowDown").classList.remove("display");
    } else{
        document.getElementById("AddSlowDown").classList.add("display");
    }
})

let AddSameOldLove = document.getElementById("likedSameOldLove");
AddSameOldLove.addEventListener("click", ()=>{
    if (document.getElementById("AddSameOldLove").classList.contains("display")){
        document.getElementById("AddSameOldLove").classList.remove("display");
    } else{
        document.getElementById("AddSameOldLove").classList.add("display");
    }
})

let AddNaturally = document.getElementById("likedNaturally");
AddNaturally.addEventListener("click", ()=>{
    if (document.getElementById("AddNaturally").classList.contains("display")){
        document.getElementById("AddNaturally").classList.remove("display");
    } else{
        document.getElementById("AddNaturally").classList.add("display");
    }
})

let AddLoveYouLike = document.getElementById("likedLoveYouLike");
AddLoveYouLike.addEventListener("click", ()=>{
    if (document.getElementById("AddLoveYouLike").classList.contains("display")){
        document.getElementById("AddLoveYouLike").classList.remove("display");
    } else{
        document.getElementById("AddLoveYouLike").classList.add("display");
    }
})

let AddAllOfTheLights = document.getElementById("likedAllOfTheLights");
AddAllOfTheLights.addEventListener("click", ()=>{
    if (document.getElementById("AddAllOfTheLights").classList.contains("display")){
        document.getElementById("AddAllOfTheLights").classList.remove("display");
    } else{
        document.getElementById("AddAllOfTheLights").classList.add("display");
    }
})

let AddBoundTo = document.getElementById("likedBoundTo");
AddBoundTo.addEventListener("click", ()=>{
    if (document.getElementById("AddBoundTo").classList.contains("display")){
        document.getElementById("AddBoundTo").classList.remove("display");
    } else{
        document.getElementById("AddBoundTo").classList.add("display");
    }
})

let AddCantTellMeNothing = document.getElementById("likedCantTellMeNothing");
AddCantTellMeNothing.addEventListener("click", ()=>{
    if (document.getElementById("AddCantTellMeNothing").classList.contains("display")){
        document.getElementById("AddCantTellMeNothing").classList.remove("display");
    } else{
        document.getElementById("AddCantTellMeNothing").classList.add("display");
    }
})

let AddET = document.getElementById("likedET");
AddET.addEventListener("click", ()=>{
    if (document.getElementById("AddET").classList.contains("display")){
        document.getElementById("AddET").classList.remove("display");
    } else{
        document.getElementById("AddET").classList.add("display");
    }
})

let AddFlashingLights = document.getElementById("likedFlashingLights");
AddFlashingLights.addEventListener("click", ()=>{
    if (document.getElementById("AddFlashingLights").classList.contains("display")){
        document.getElementById("AddFlashingLights").classList.remove("display");
    } else{
        document.getElementById("AddFlashingLights").classList.add("display");
    }
})

let AddForever = document.getElementById("likedForever");
AddForever.addEventListener("click", ()=>{
    if (document.getElementById("AddForever").classList.contains("display")){
        document.getElementById("AddForever").classList.remove("display");
    } else{
        document.getElementById("AddForever").classList.add("display");
    }
})

let AddGoldDigger = document.getElementById("likedGoldDigger");
AddGoldDigger.addEventListener("click", ()=>{
    if (document.getElementById("AddGoldDigger").classList.contains("display")){
        document.getElementById("AddGoldDigger").classList.remove("display");
    } else{
        document.getElementById("AddGoldDigger").classList.add("display");
    }
})

let AddRunaway = document.getElementById("likedRunaway");
AddRunaway.addEventListener("click", ()=>{
    if (document.getElementById("AddRunaway").classList.contains("display")){
        document.getElementById("AddRunaway").classList.remove("display");
    } else{
        document.getElementById("AddRunaway").classList.add("display");
    }
})

let AddStronger = document.getElementById("likedStronger");
AddStronger.addEventListener("click", ()=>{
    if (document.getElementById("AddStronger").classList.contains("display")){
        document.getElementById("AddStronger").classList.remove("display");
    } else{
        document.getElementById("AddStronger").classList.add("display");
    }
})

let AddHeartless = document.getElementById("likedHeartless");
AddHeartless.addEventListener("click", ()=>{
    if (document.getElementById("AddHeartless").classList.contains("display")){
        document.getElementById("AddHeartless").classList.remove("display");
    } else{
        document.getElementById("AddHeartless").classList.add("display");
    }
})

let AddOneDirection_YouandI = document.getElementById("likedOneDirection_YouandI");
AddOneDirection_YouandI.addEventListener("click", ()=>{
    if (document.getElementById("AddOneDirection_YouandI").classList.contains("display")){
        document.getElementById("AddOneDirection_YouandI").classList.remove("display");
    } else{
        document.getElementById("AddOneDirection_YouandI").classList.add("display");
    }
})

let AddOneDirection_WhatMakesYouBeautiful = document.getElementById("likedOneDirection_WhatMakesYouBeautiful");
AddOneDirection_WhatMakesYouBeautiful.addEventListener("click", ()=>{
    if (document.getElementById("AddOneDirection_WhatMakesYouBeautiful").classList.contains("display")){
        document.getElementById("AddOneDirection_WhatMakesYouBeautiful").classList.remove("display");
    } else{
        document.getElementById("AddOneDirection_WhatMakesYouBeautiful").classList.add("display");
    }
})

let AddOneDirection_WalkingintheWind = document.getElementById("likedOneDirection_WalkingintheWind");
AddOneDirection_WalkingintheWind.addEventListener("click", ()=>{
    if (document.getElementById("AddOneDirection_WalkingintheWind").classList.contains("display")){
        document.getElementById("AddOneDirection_WalkingintheWind").classList.remove("display");
    } else{
        document.getElementById("AddOneDirection_WalkingintheWind").classList.add("display");
    }
})

let AddOneDirection_TheyDontKnowAboutUs = document.getElementById("likedOneDirection_TheyDontKnowAboutUs");
AddOneDirection_TheyDontKnowAboutUs.addEventListener("click", ()=>{
    if (document.getElementById("AddOneDirection_TheyDontKnowAboutUs").classList.contains("display")){
        document.getElementById("AddOneDirection_TheyDontKnowAboutUs").classList.remove("display");
    } else{
        document.getElementById("AddOneDirection_TheyDontKnowAboutUs").classList.add("display");
    }
})

let AddOneDirection_Strong = document.getElementById("likedOneDirection_Strong");
AddOneDirection_Strong.addEventListener("click", ()=>{
    if (document.getElementById("AddOneDirection_Strong").classList.contains("display")){
        document.getElementById("AddOneDirection_Strong").classList.remove("display");
    } else{
        document.getElementById("AddOneDirection_Strong").classList.add("display");
    }
})

let AddOneDirection_StoryofMyLife = document.getElementById("likedOneDirection_StoryofMyLife");
AddOneDirection_StoryofMyLife.addEventListener("click", ()=>{
    if (document.getElementById("AddOneDirection_StoryofMyLife").classList.contains("display")){
        document.getElementById("AddOneDirection_StoryofMyLife").classList.remove("display");
    } else{
        document.getElementById("AddOneDirection_StoryofMyLife").classList.add("display");
    }
})

let AddOneDirection_StealMyGirl = document.getElementById("likedOneDirection_StealMyGirl");
AddOneDirection_StealMyGirl.addEventListener("click", ()=>{
    if (document.getElementById("AddOneDirection_StealMyGirl").classList.contains("display")){
        document.getElementById("AddOneDirection_StealMyGirl").classList.remove("display");
    } else{
        document.getElementById("AddOneDirection_StealMyGirl").classList.add("display");
    }
})

let AddOneDirection_Perfect = document.getElementById("likedOneDirection_Perfect");
AddOneDirection_Perfect.addEventListener("click", ()=>{
    if (document.getElementById("AddOneDirection_Perfect").classList.contains("display")){
        document.getElementById("AddOneDirection_Perfect").classList.remove("display");
    } else{
        document.getElementById("AddOneDirection_Perfect").classList.add("display");
    }
})

let AddOneDirection_OneWayOrAnother = document.getElementById("likedOneDirection_OneWayOrAnother");
AddOneDirection_OneWayOrAnother.addEventListener("click", ()=>{
    if (document.getElementById("AddOneDirection_OneWayOrAnother").classList.contains("display")){
        document.getElementById("AddOneDirection_OneWayOrAnother").classList.remove("display");
    } else{
        document.getElementById("AddOneDirection_OneWayOrAnother").classList.add("display");
    }
})

let AddOneDirection_OneThing = document.getElementById("likedOneDirection_OneThing");
AddOneDirection_OneThing.addEventListener("click", ()=>{
    if (document.getElementById("AddOneDirection_OneThing").classList.contains("display")){
        document.getElementById("AddOneDirection_OneThing").classList.remove("display");
    } else{
        document.getElementById("AddOneDirection_OneThing").classList.add("display");
    }
})

let AddOneDirection_MoreThanThis = document.getElementById("likedOneDirection_MoreThanThis");
AddOneDirection_MoreThanThis.addEventListener("click", ()=>{
    if (document.getElementById("AddOneDirection_MoreThanThis").classList.contains("display")){
        document.getElementById("AddOneDirection_MoreThanThis").classList.remove("display");
    } else{
        document.getElementById("AddOneDirection_MoreThanThis").classList.add("display");
    }
})

let AddOneDirection_MidnightMemories = document.getElementById("likedOneDirection_MidnightMemories");
AddOneDirection_MidnightMemories.addEventListener("click", ()=>{
    if (document.getElementById("AddOneDirection_MidnightMemories").classList.contains("display")){
        document.getElementById("AddOneDirection_MidnightMemories").classList.remove("display");
    } else{
        document.getElementById("AddOneDirection_MidnightMemories").classList.add("display");
    }
})

let AddOneDirection_LiveWhileWereYoung = document.getElementById("likedOneDirection_LiveWhileWereYoung");
AddOneDirection_LiveWhileWereYoung.addEventListener("click", ()=>{
    if (document.getElementById("AddOneDirection_LiveWhileWereYoung").classList.contains("display")){
        document.getElementById("AddOneDirection_LiveWhileWereYoung").classList.remove("display");
    } else{
        document.getElementById("AddOneDirection_LiveWhileWereYoung").classList.add("display");
    }
})

let AddOneDirection_LittleThings = document.getElementById("likedOneDirection_LittleThings");
AddOneDirection_LittleThings.addEventListener("click", ()=>{
    if (document.getElementById("AddOneDirection_LittleThings").classList.contains("display")){
        document.getElementById("AddOneDirection_LittleThings").classList.remove("display");
    } else{
        document.getElementById("AddOneDirection_LittleThings").classList.add("display");
    }
})

let AddOneDirection_KissYou = document.getElementById("likedOneDirection_KissYou");
AddOneDirection_KissYou.addEventListener("click", ()=>{
    if (document.getElementById("AddOneDirection_KissYou").classList.contains("display")){
        document.getElementById("AddOneDirection_KissYou").classList.remove("display");
    } else{
        document.getElementById("AddOneDirection_KissYou").classList.add("display");
    }
})

let AddOneDirection_History = document.getElementById("likedOneDirection_History");
AddOneDirection_History.addEventListener("click", ()=>{
    if (document.getElementById("AddOneDirection_History").classList.contains("display")){
        document.getElementById("AddOneDirection_History").classList.remove("display");
    } else{
        document.getElementById("AddOneDirection_History").classList.add("display");
    }
})

let AddOneDirection_GottaBeYou = document.getElementById("likedOneDirection_GottaBeYou");
AddOneDirection_GottaBeYou.addEventListener("click", ()=>{
    if (document.getElementById("AddOneDirection_GottaBeYou").classList.contains("display")){
        document.getElementById("AddOneDirection_GottaBeYou").classList.remove("display");
    } else{
        document.getElementById("AddOneDirection_GottaBeYou").classList.add("display");
    }
})

let Addonedirection_bestsongever = document.getElementById("likedonedirection_bestsongever");
Addonedirection_bestsongever.addEventListener("click", ()=>{
    if (document.getElementById("Addonedirection_bestsongever").classList.contains("display")){
        document.getElementById("Addonedirection_bestsongever").classList.remove("display");
    } else{
        document.getElementById("Addonedirection_bestsongever").classList.add("display");
    }
})

let AddOneDirection_18 = document.getElementById("likedOneDirection_18");
AddOneDirection_18.addEventListener("click", ()=>{
    if (document.getElementById("AddOneDirection_18").classList.contains("display")){
        document.getElementById("AddOneDirection_18").classList.remove("display");
    } else{
        document.getElementById("AddOneDirection_18").classList.add("display");
    }
})

let AddJVKE_thisiswhatheartbreak = document.getElementById("likedJVKE_thisiswhatheartbreak");
AddJVKE_thisiswhatheartbreak.addEventListener("click", ()=>{
    if (document.getElementById("AddJVKE_thisiswhatheartbreak").classList.contains("display")){
        document.getElementById("AddJVKE_thisiswhatheartbreak").classList.remove("display");
    } else{
        document.getElementById("AddJVKE_thisiswhatheartbreak").classList.add("display");
    }
})

let AddJVKE_goldenhour = document.getElementById("likedJVKE_goldenhour");
AddJVKE_goldenhour.addEventListener("click", ()=>{
    if (document.getElementById("AddJVKE_goldenhour").classList.contains("display")){
        document.getElementById("AddJVKE_goldenhour").classList.remove("display");
    } else{
        document.getElementById("AddJVKE_goldenhour").classList.add("display");
    }
})

let AddCG5_GRIMACE = document.getElementById("likedCG5_GRIMACE");
AddCG5_GRIMACE.addEventListener("click", ()=>{
    if (document.getElementById("AddCG5_GRIMACE").classList.contains("display")){
        document.getElementById("AddCG5_GRIMACE").classList.remove("display");
    } else{
        document.getElementById("AddCG5_GRIMACE").classList.add("display");
    }
})

let AddCG5_SleepWell = document.getElementById("likedCG5_SleepWell");
AddCG5_SleepWell.addEventListener("click", ()=>{
    if (document.getElementById("AddCG5_SleepWell").classList.contains("display")){
        document.getElementById("AddCG5_SleepWell").classList.remove("display");
    } else{
        document.getElementById("AddCG5_SleepWell").classList.add("display");
    }
})

let AddStellar_Daredevil = document.getElementById("likedStellar_Daredevil");
AddStellar_Daredevil.addEventListener("click", ()=>{
    if (document.getElementById("AddStellar_Daredevil").classList.contains("display")){
        document.getElementById("AddStellar_Daredevil").classList.remove("display");
    } else{
        document.getElementById("AddStellar_Daredevil").classList.add("display");
    }
})

let AddStellar_ElDorado = document.getElementById("likedStellar_ElDorado");
AddStellar_ElDorado.addEventListener("click", ()=>{
    if (document.getElementById("AddStellar_ElDorado").classList.contains("display")){
        document.getElementById("AddStellar_ElDorado").classList.remove("display");
    } else{
        document.getElementById("AddStellar_ElDorado").classList.add("display");
    }
})

let AddStellar_Ashes = document.getElementById("likedStellar_Ashes");
AddStellar_Ashes.addEventListener("click", ()=>{
    if (document.getElementById("AddStellar_Ashes").classList.contains("display")){
        document.getElementById("AddStellar_Ashes").classList.remove("display");
    } else{
        document.getElementById("AddStellar_Ashes").classList.add("display");
    }
})

let AddAFI_MissMurder = document.getElementById("likedAFI_MissMurder");
AddAFI_MissMurder.addEventListener("click", ()=>{
    if (document.getElementById("AddAFI_MissMurder").classList.contains("display")){
        document.getElementById("AddAFI_MissMurder").classList.remove("display");
    } else{
        document.getElementById("AddAFI_MissMurder").classList.add("display");
    }
})

let AddJayZ_NiasInParis = document.getElementById("likedJayZ_NiasInParis");
AddJayZ_NiasInParis.addEventListener("click", ()=>{
    if (document.getElementById("AddJayZ_NiasInParis").classList.contains("display")){
        document.getElementById("AddJayZ_NiasInParis").classList.remove("display");
    } else{
        document.getElementById("AddJayZ_NiasInParis").classList.add("display");
    }
})

let AddJAYZ_EmpireStateOfMind = document.getElementById("likedJAYZ_EmpireStateOfMind");
AddJAYZ_EmpireStateOfMind.addEventListener("click", ()=>{
    if (document.getElementById("AddJAYZ_EmpireStateOfMind").classList.contains("display")){
        document.getElementById("AddJAYZ_EmpireStateOfMind").classList.remove("display");
    } else{
        document.getElementById("AddJAYZ_EmpireStateOfMind").classList.add("display");
    }
})

let AddAURORA_RunningWithTheWolves = document.getElementById("likedAURORA_RunningWithTheWolves");
AddAURORA_RunningWithTheWolves.addEventListener("click", ()=>{
    if (document.getElementById("AddAURORA_RunningWithTheWolves").classList.contains("display")){
        document.getElementById("AddAURORA_RunningWithTheWolves").classList.remove("display");
    } else{
        document.getElementById("AddAURORA_RunningWithTheWolves").classList.add("display");
    }
})

let AddAURORA_Runaway = document.getElementById("likedAURORA_Runaway");
AddAURORA_Runaway.addEventListener("click", ()=>{
    if (document.getElementById("AddAURORA_Runaway").classList.contains("display")){
        document.getElementById("AddAURORA_Runaway").classList.remove("display");
    } else{
        document.getElementById("AddAURORA_Runaway").classList.add("display");
    }
})

let AddAlanWalker_Alone = document.getElementById("likedAlanWalker_Alone");
AddAlanWalker_Alone.addEventListener("click", ()=>{
    if (document.getElementById("AddAlanWalker_Alone").classList.contains("display")){
        document.getElementById("AddAlanWalker_Alone").classList.remove("display");
    } else{
        document.getElementById("AddAlanWalker_Alone").classList.add("display");
    }
})

let AddAlanWalker_OnMyWay = document.getElementById("likedAlanWalker_OnMyWay");
AddAlanWalker_OnMyWay.addEventListener("click", ()=>{
    if (document.getElementById("AddAlanWalker_OnMyWay").classList.contains("display")){
        document.getElementById("AddAlanWalker_OnMyWay").classList.remove("display");
    } else{
        document.getElementById("AddAlanWalker_OnMyWay").classList.add("display");
    }
})

let AddWorkout_FightBack = document.getElementById("likedWorkout_FightBack");
AddWorkout_FightBack.addEventListener("click", ()=>{
    if (document.getElementById("AddWorkout_FightBack").classList.contains("display")){
        document.getElementById("AddWorkout_FightBack").classList.remove("display");
    } else{
        document.getElementById("AddWorkout_FightBack").classList.add("display");
    }
})

let AddWorkout_BestofMe = document.getElementById("likedWorkout_BestofMe");
AddWorkout_BestofMe.addEventListener("click", ()=>{
    if (document.getElementById("AddWorkout_BestofMe").classList.contains("display")){
        document.getElementById("AddWorkout_BestofMe").classList.remove("display");
    } else{
        document.getElementById("AddWorkout_BestofMe").classList.add("display");
    }
})

let AddWorkout_RememberTheName = document.getElementById("likedWorkout_RememberTheName");
AddWorkout_RememberTheName.addEventListener("click", ()=>{
    if (document.getElementById("AddWorkout_RememberTheName").classList.contains("display")){
        document.getElementById("AddWorkout_RememberTheName").classList.remove("display");
    } else{
        document.getElementById("AddWorkout_RememberTheName").classList.add("display");
    }
})

let AddWorkout_HallOfFame = document.getElementById("likedWorkout_HallOfFame");
AddWorkout_HallOfFame.addEventListener("click", ()=>{
    if (document.getElementById("AddWorkout_HallOfFame").classList.contains("display")){
        document.getElementById("AddWorkout_HallOfFame").classList.remove("display");
    } else{
        document.getElementById("AddWorkout_HallOfFame").classList.add("display");
    }
})

let AddWorkout_GangstasParadise = document.getElementById("likedWorkout_GangstasParadise");
AddWorkout_GangstasParadise.addEventListener("click", ()=>{
    if (document.getElementById("AddWorkout_GangstasParadise").classList.contains("display")){
        document.getElementById("AddWorkout_GangstasParadise").classList.remove("display");
    } else{
        document.getElementById("AddWorkout_GangstasParadise").classList.add("display");
    }
})

let AddWorkout_Centuries = document.getElementById("likedWorkout_Centuries");
AddWorkout_Centuries.addEventListener("click", ()=>{
    if (document.getElementById("AddWorkout_Centuries").classList.contains("display")){
        document.getElementById("AddWorkout_Centuries").classList.remove("display");
    } else{
        document.getElementById("AddWorkout_Centuries").classList.add("display");
    }
})

let AddWorkout_Believer = document.getElementById("likedWorkout_Believer");
AddWorkout_Believer.addEventListener("click", ()=>{
    if (document.getElementById("AddWorkout_Believer").classList.contains("display")){
        document.getElementById("AddWorkout_Believer").classList.remove("display");
    } else{
        document.getElementById("AddWorkout_Believer").classList.add("display");
    }
})

let AddWorkout_Animals = document.getElementById("likedWorkout_Animals");
AddWorkout_Animals.addEventListener("click", ()=>{
    if (document.getElementById("AddWorkout_Animals").classList.contains("display")){
        document.getElementById("AddWorkout_Animals").classList.remove("display");
    } else{
        document.getElementById("AddWorkout_Animals").classList.add("display");
    }
})

let AddWorkout_Challa = document.getElementById("likedWorkout_Challa");
AddWorkout_Challa.addEventListener("click", ()=>{
    if (document.getElementById("AddWorkout_Challa").classList.contains("display")){
        document.getElementById("AddWorkout_Challa").classList.remove("display");
    } else{
        document.getElementById("AddWorkout_Challa").classList.add("display");
    }
})

let AddDevotional_MereBholeNath = document.getElementById("likedDevotional_MereBholeNath");
AddDevotional_MereBholeNath.addEventListener("click", ()=>{
    if (document.getElementById("AddDevotional_MereBholeNath").classList.contains("display")){
        document.getElementById("AddDevotional_MereBholeNath").classList.remove("display");
    } else{
        document.getElementById("AddDevotional_MereBholeNath").classList.add("display");
    }
})

let AddDevotional_ShivTandav = document.getElementById("likedDevotional_ShivTandav");
AddDevotional_ShivTandav.addEventListener("click", ()=>{
    if (document.getElementById("AddDevotional_ShivTandav").classList.contains("display")){
        document.getElementById("AddDevotional_ShivTandav").classList.remove("display");
    } else{
        document.getElementById("AddDevotional_ShivTandav").classList.add("display");
    }
})

let AddDevotional_BabamBam = document.getElementById("likedDevotional_BabamBam");
AddDevotional_BabamBam.addEventListener("click", ()=>{
    if (document.getElementById("AddDevotional_BabamBam").classList.contains("display")){
        document.getElementById("AddDevotional_BabamBam").classList.remove("display");
    } else{
        document.getElementById("AddDevotional_BabamBam").classList.add("display");
    }
})

let AddDevotional_RamSiyaRam = document.getElementById("likedDevotional_RamSiyaRam");
AddDevotional_RamSiyaRam.addEventListener("click", ()=>{
    if (document.getElementById("AddDevotional_RamSiyaRam").classList.contains("display")){
        document.getElementById("AddDevotional_RamSiyaRam").classList.remove("display");
    } else{
        document.getElementById("AddDevotional_RamSiyaRam").classList.add("display");
    }
})

let AddDevotional_ShendurLaalChadhayo = document.getElementById("likedDevotional_ShendurLaalChadhayo");
AddDevotional_ShendurLaalChadhayo.addEventListener("click", ()=>{
    if (document.getElementById("AddDevotional_ShendurLaalChadhayo").classList.contains("display")){
        document.getElementById("AddDevotional_ShendurLaalChadhayo").classList.remove("display");
    } else{
        document.getElementById("AddDevotional_ShendurLaalChadhayo").classList.add("display");
    }
})

let AddDevotional_KunFayaKun = document.getElementById("likedDevotional_KunFayaKun");
AddDevotional_KunFayaKun.addEventListener("click", ()=>{
    if (document.getElementById("AddDevotional_KunFayaKun").classList.contains("display")){
        document.getElementById("AddDevotional_KunFayaKun").classList.remove("display");
    } else{
        document.getElementById("AddDevotional_KunFayaKun").classList.add("display");
    }
})

let AddDevotional_JaiShriRam = document.getElementById("likedDevotional_JaiShriRam");
AddDevotional_JaiShriRam.addEventListener("click", ()=>{
    if (document.getElementById("AddDevotional_JaiShriRam").classList.contains("display")){
        document.getElementById("AddDevotional_JaiShriRam").classList.remove("display");
    } else{
        document.getElementById("AddDevotional_JaiShriRam").classList.add("display");
    }
})

let AddDevotional_NamNamo = document.getElementById("likedDevotional_NamNamo");
AddDevotional_NamNamo.addEventListener("click", ()=>{
    if (document.getElementById("AddDevotional_NamNamo").classList.contains("display")){
        document.getElementById("AddDevotional_NamNamo").classList.remove("display");
    } else{
        document.getElementById("AddDevotional_NamNamo").classList.add("display");
    }
})

let AddKabirSingh_MereSohneya = document.getElementById("likedKabirSingh_MereSohneya");
AddKabirSingh_MereSohneya.addEventListener("click", ()=>{
    if (document.getElementById("AddKabirSingh_MereSohneya").classList.contains("display")){
        document.getElementById("AddKabirSingh_MereSohneya").classList.remove("display");
    } else{
        document.getElementById("AddKabirSingh_MereSohneya").classList.add("display");
    }
})

let AddKabirSingh_KaiseHua = document.getElementById("likedKabirSingh_KaiseHua");
AddKabirSingh_KaiseHua.addEventListener("click", ()=>{
    if (document.getElementById("AddKabirSingh_KaiseHua").classList.contains("display")){
        document.getElementById("AddKabirSingh_KaiseHua").classList.remove("display");
    } else{
        document.getElementById("AddKabirSingh_KaiseHua").classList.add("display");
    }
})

let AddKabirSingh_TujheKitnaChahneLage = document.getElementById("likedKabirSingh_TujheKitnaChahneLage");
AddKabirSingh_TujheKitnaChahneLage.addEventListener("click", ()=>{
    if (document.getElementById("AddKabirSingh_TujheKitnaChahneLage").classList.contains("display")){
        document.getElementById("AddKabirSingh_TujheKitnaChahneLage").classList.remove("display");
    } else{
        document.getElementById("AddKabirSingh_TujheKitnaChahneLage").classList.add("display");
    }
})

let AddKabirSingh_Bekhayali = document.getElementById("likedKabirSingh_Bekhayali");
AddKabirSingh_Bekhayali.addEventListener("click", ()=>{
    if (document.getElementById("AddKabirSingh_Bekhayali").classList.contains("display")){
        document.getElementById("AddKabirSingh_Bekhayali").classList.remove("display");
    } else{
        document.getElementById("AddKabirSingh_Bekhayali").classList.add("display");
    }
})

let AddKabirSingh_TeraBanJaunga = document.getElementById("likedKabirSingh_TeraBanJaunga");
AddKabirSingh_TeraBanJaunga.addEventListener("click", ()=>{
    if (document.getElementById("AddKabirSingh_TeraBanJaunga").classList.contains("display")){
        document.getElementById("AddKabirSingh_TeraBanJaunga").classList.remove("display");
    } else{
        document.getElementById("AddKabirSingh_TeraBanJaunga").classList.add("display");
    }
})

let AddSalaar_AakaashaGadiya = document.getElementById("likedSalaar_AakaashaGadiya");
AddSalaar_AakaashaGadiya.addEventListener("click", ()=>{
    if (document.getElementById("AddSalaar_AakaashaGadiya").classList.contains("display")){
        document.getElementById("AddSalaar_AakaashaGadiya").classList.remove("display");
    } else{
        document.getElementById("AddSalaar_AakaashaGadiya").classList.add("display");
    }
})

let AddSojugadaSoojumallige = document.getElementById("likedSojugadaSoojumallige");
AddSojugadaSoojumallige.addEventListener("click", ()=>{
    if (document.getElementById("AddSojugadaSoojumallige").classList.contains("display")){
        document.getElementById("AddSojugadaSoojumallige").classList.remove("display");
    } else{
        document.getElementById("AddSojugadaSoojumallige").classList.add("display");
    }
})

let AddKantara_Karma = document.getElementById("likedKantara_Karma");
AddKantara_Karma.addEventListener("click", ()=>{
    if (document.getElementById("AddKantara_Karma").classList.contains("display")){
        document.getElementById("AddKantara_Karma").classList.remove("display");
    } else{
        document.getElementById("AddKantara_Karma").classList.add("display");
    }
})

let AddKantara_SingaraSiriye = document.getElementById("likedKantara_SingaraSiriye");
AddKantara_SingaraSiriye.addEventListener("click", ()=>{
    if (document.getElementById("AddKantara_SingaraSiriye").classList.contains("display")){
        document.getElementById("AddKantara_SingaraSiriye").classList.remove("display");
    } else{
        document.getElementById("AddKantara_SingaraSiriye").classList.add("display");
    }
})

let AddKantara_VarahaRoopam = document.getElementById("likedKantara_VarahaRoopam");
AddKantara_VarahaRoopam.addEventListener("click", ()=>{
    if (document.getElementById("AddKantara_VarahaRoopam").classList.contains("display")){
        document.getElementById("AddKantara_VarahaRoopam").classList.remove("display");
    } else{
        document.getElementById("AddKantara_VarahaRoopam").classList.add("display");
    }
})

let AddBajiraoMastani_Gajanana = document.getElementById("likedBajiraoMastani_Gajanana");
AddBajiraoMastani_Gajanana.addEventListener("click", ()=>{
    if (document.getElementById("AddBajiraoMastani_Gajanana").classList.contains("display")){
        document.getElementById("AddBajiraoMastani_Gajanana").classList.remove("display");
    } else{
        document.getElementById("AddBajiraoMastani_Gajanana").classList.add("display");
    }
})

let AddBajiraoMastani_MoheRangDoLaal = document.getElementById("likedBajiraoMastani_MoheRangDoLaal");
AddBajiraoMastani_MoheRangDoLaal.addEventListener("click", ()=>{
    if (document.getElementById("AddBajiraoMastani_MoheRangDoLaal").classList.contains("display")){
        document.getElementById("AddBajiraoMastani_MoheRangDoLaal").classList.remove("display");
    } else{
        document.getElementById("AddBajiraoMastani_MoheRangDoLaal").classList.add("display");
    }
})

let AddBajiraoMastani_Aayat = document.getElementById("likedBajiraoMastani_Aayat");
AddBajiraoMastani_Aayat.addEventListener("click", ()=>{
    if (document.getElementById("AddBajiraoMastani_Aayat").classList.contains("display")){
        document.getElementById("AddBajiraoMastani_Aayat").classList.remove("display");
    } else{
        document.getElementById("AddBajiraoMastani_Aayat").classList.add("display");
    }
})

let AddBajiraoMastani_Pinga = document.getElementById("likedBajiraoMastani_Pinga");
AddBajiraoMastani_Pinga.addEventListener("click", ()=>{
    if (document.getElementById("AddBajiraoMastani_Pinga").classList.contains("display")){
        document.getElementById("AddBajiraoMastani_Pinga").classList.remove("display");
    } else{
        document.getElementById("AddBajiraoMastani_Pinga").classList.add("display");
    }
})

let AddBajiraoMastani_DeewaniMastani = document.getElementById("likedBajiraoMastani_DeewaniMastani");
AddBajiraoMastani_DeewaniMastani.addEventListener("click", ()=>{
    if (document.getElementById("AddBajiraoMastani_DeewaniMastani").classList.contains("display")){
        document.getElementById("AddBajiraoMastani_DeewaniMastani").classList.remove("display");
    } else{
        document.getElementById("AddBajiraoMastani_DeewaniMastani").classList.add("display");
    }
})

let AddBajiraoMastani_Malhari = document.getElementById("likedBajiraoMastani_Malhari");
AddBajiraoMastani_Malhari.addEventListener("click", ()=>{
    if (document.getElementById("AddBajiraoMastani_Malhari").classList.contains("display")){
        document.getElementById("AddBajiraoMastani_Malhari").classList.remove("display");
    } else{
        document.getElementById("AddBajiraoMastani_Malhari").classList.add("display");
    }
})

let AddKGF_Mehabooba = document.getElementById("likedKGF_Mehabooba");
AddKGF_Mehabooba.addEventListener("click", ()=>{
    if (document.getElementById("AddKGF_Mehabooba").classList.contains("display")){
        document.getElementById("AddKGF_Mehabooba").classList.remove("display");
    } else{
        document.getElementById("AddKGF_Mehabooba").classList.add("display");
    }
})

let AddKGF_SalaamRockyBhai = document.getElementById("likedKGF_SalaamRockyBhai");
AddKGF_SalaamRockyBhai.addEventListener("click", ()=>{
    if (document.getElementById("AddKGF_SalaamRockyBhai").classList.contains("display")){
        document.getElementById("AddKGF_SalaamRockyBhai").classList.remove("display");
    } else{
        document.getElementById("AddKGF_SalaamRockyBhai").classList.add("display");
    }
})

let AddKGF_GaganaNee = document.getElementById("likedKGF_GaganaNee");
AddKGF_GaganaNee.addEventListener("click", ()=>{
    if (document.getElementById("AddKGF_GaganaNee").classList.contains("display")){
        document.getElementById("AddKGF_GaganaNee").classList.remove("display");
    } else{
        document.getElementById("AddKGF_GaganaNee").classList.add("display");
    }
})

let AddKGF_TheMonster = document.getElementById("likedKGF_TheMonster");
AddKGF_TheMonster.addEventListener("click", ()=>{
    if (document.getElementById("AddKGF_TheMonster").classList.contains("display")){
        document.getElementById("AddKGF_TheMonster").classList.remove("display");
    } else{
        document.getElementById("AddKGF_TheMonster").classList.add("display");
    }
})

let AddKGF_DheeraDheera = document.getElementById("likedKGF_DheeraDheera");
AddKGF_DheeraDheera.addEventListener("click", ()=>{
    if (document.getElementById("AddKGF_DheeraDheera").classList.contains("display")){
        document.getElementById("AddKGF_DheeraDheera").classList.remove("display");
    } else{
        document.getElementById("AddKGF_DheeraDheera").classList.add("display");
    }
})

let AddKGF_Sulthana = document.getElementById("likedKGF_Sulthana");
AddKGF_Sulthana.addEventListener("click", ()=>{
    if (document.getElementById("AddKGF_Sulthana").classList.contains("display")){
        document.getElementById("AddKGF_Sulthana").classList.remove("display");
    } else{
        document.getElementById("AddKGF_Sulthana").classList.add("display");
    }
})

let AddKGF_Toofan = document.getElementById("likedKGF_Toofan");
AddKGF_Toofan.addEventListener("click", ()=>{
    if (document.getElementById("AddKGF_Toofan").classList.contains("display")){
        document.getElementById("AddKGF_Toofan").classList.remove("display");
    } else{
        document.getElementById("AddKGF_Toofan").classList.add("display");
    }
})

let AddANIMAL_HuaMain = document.getElementById("likedANIMAL_HuaMain");
AddANIMAL_HuaMain.addEventListener("click", ()=>{
    if (document.getElementById("AddANIMAL_HuaMain").classList.contains("display")){
        document.getElementById("AddANIMAL_HuaMain").classList.remove("display");
    } else{
        document.getElementById("AddANIMAL_HuaMain").classList.add("display");
    }
})

let AddANIMAL_SaariDuniyaJalaaDenge = document.getElementById("likedANIMAL_SaariDuniyaJalaaDenge");
AddANIMAL_SaariDuniyaJalaaDenge.addEventListener("click", ()=>{
    if (document.getElementById("AddANIMAL_SaariDuniyaJalaaDenge").classList.contains("display")){
        document.getElementById("AddANIMAL_SaariDuniyaJalaaDenge").classList.remove("display");
    } else{
        document.getElementById("AddANIMAL_SaariDuniyaJalaaDenge").classList.add("display");
    }
})

let AddANIMAL_ARJANVAILLY = document.getElementById("likedANIMAL_ARJANVAILLY");
AddANIMAL_ARJANVAILLY.addEventListener("click", ()=>{
    if (document.getElementById("AddANIMAL_ARJANVAILLY").classList.contains("display")){
        document.getElementById("AddANIMAL_ARJANVAILLY").classList.remove("display");
    } else{
        document.getElementById("AddANIMAL_ARJANVAILLY").classList.add("display");
    }
})

let AddANIMAL_JamalKudu = document.getElementById("likedANIMAL_JamalKudu");
AddANIMAL_JamalKudu.addEventListener("click", ()=>{
    if (document.getElementById("AddANIMAL_JamalKudu").classList.contains("display")){
        document.getElementById("AddANIMAL_JamalKudu").classList.remove("display");
    } else{
        document.getElementById("AddANIMAL_JamalKudu").classList.add("display");
    }
})

let AddANIMAL_PehleBhiMain = document.getElementById("likedANIMAL_PehleBhiMain");
AddANIMAL_PehleBhiMain.addEventListener("click", ()=>{
    if (document.getElementById("AddANIMAL_PehleBhiMain").classList.contains("display")){
        document.getElementById("AddANIMAL_PehleBhiMain").classList.remove("display");
    } else{
        document.getElementById("AddANIMAL_PehleBhiMain").classList.add("display");
    }
})

let AddKirikParty_HeWhoAreYou = document.getElementById("likedKirikParty_HeWhoAreYou");
AddKirikParty_HeWhoAreYou.addEventListener("click", ()=>{
    if (document.getElementById("AddKirikParty_HeWhoAreYou").classList.contains("display")){
        document.getElementById("AddKirikParty_HeWhoAreYou").classList.remove("display");
    } else{
        document.getElementById("AddKirikParty_HeWhoAreYou").classList.add("display");
    }
})

let AddKirikParty_LastBenchuParty = document.getElementById("likedKirikParty_LastBenchuParty");
AddKirikParty_LastBenchuParty.addEventListener("click", ()=>{
    if (document.getElementById("AddKirikParty_LastBenchuParty").classList.contains("display")){
        document.getElementById("AddKirikParty_LastBenchuParty").classList.remove("display");
    } else{
        document.getElementById("AddKirikParty_LastBenchuParty").classList.add("display");
    }
})

let AddKirikParty_NeechaSullu = document.getElementById("likedKirikParty_NeechaSullu");
AddKirikParty_NeechaSullu.addEventListener("click", ()=>{
    if (document.getElementById("AddKirikParty_NeechaSullu").classList.contains("display")){
        document.getElementById("AddKirikParty_NeechaSullu").classList.remove("display");
    } else{
        document.getElementById("AddKirikParty_NeechaSullu").classList.add("display");
    }
})

let AddKirikParty_Belageddu = document.getElementById("likedKirikParty_Belageddu");
AddKirikParty_Belageddu.addEventListener("click", ()=>{
    if (document.getElementById("AddKirikParty_Belageddu").classList.contains("display")){
        document.getElementById("AddKirikParty_Belageddu").classList.remove("display");
    } else{
        document.getElementById("AddKirikParty_Belageddu").classList.add("display");
    }
})

let AddKirikParty_KaagadadaDoniyalli = document.getElementById("likedKirikParty_KaagadadaDoniyalli");
AddKirikParty_KaagadadaDoniyalli.addEventListener("click", ()=>{
    if (document.getElementById("AddKirikParty_KaagadadaDoniyalli").classList.contains("display")){
        document.getElementById("AddKirikParty_KaagadadaDoniyalli").classList.remove("display");
    } else{
        document.getElementById("AddKirikParty_KaagadadaDoniyalli").classList.add("display");
    }
})

let AddKirikParty_KatheyonduHelide = document.getElementById("likedKirikParty_KatheyonduHelide");
AddKirikParty_KatheyonduHelide.addEventListener("click", ()=>{
    if (document.getElementById("AddKirikParty_KatheyonduHelide").classList.contains("display")){
        document.getElementById("AddKirikParty_KatheyonduHelide").classList.remove("display");
    } else{
        document.getElementById("AddKirikParty_KatheyonduHelide").classList.add("display");
    }
})

let AddKorea_BLACKPINK = document.getElementById("likedKorea_BLACKPINK");
AddKorea_BLACKPINK.addEventListener("click", ()=>{
    if (document.getElementById("AddKorea_BLACKPINK").classList.contains("display")){
        document.getElementById("AddKorea_BLACKPINK").classList.remove("display");
    } else{
        document.getElementById("AddKorea_BLACKPINK").classList.add("display");
    }
})

let AddKorea_DNA = document.getElementById("likedKorea_DNA");
AddKorea_DNA.addEventListener("click", ()=>{
    if (document.getElementById("AddKorea_DNA").classList.contains("display")){
        document.getElementById("AddKorea_DNA").classList.remove("display");
    } else{
        document.getElementById("AddKorea_DNA").classList.add("display");
    }
})

let AddKorea_MICDrop = document.getElementById("likedKorea_MICDrop");
AddKorea_MICDrop.addEventListener("click", ()=>{
    if (document.getElementById("AddKorea_MICDrop").classList.contains("display")){
        document.getElementById("AddKorea_MICDrop").classList.remove("display");
    } else{
        document.getElementById("AddKorea_MICDrop").classList.add("display");
    }
})

let AddKorea_GENTLEMAN = document.getElementById("likedKorea_GENTLEMAN");
AddKorea_GENTLEMAN.addEventListener("click", ()=>{
    if (document.getElementById("AddKorea_GENTLEMAN").classList.contains("display")){
        document.getElementById("AddKorea_GENTLEMAN").classList.remove("display");
    } else{
        document.getElementById("AddKorea_GENTLEMAN").classList.add("display");
    }
})

let AddKorea_BOOMBAYAH = document.getElementById("likedKorea_BOOMBAYAH");
AddKorea_BOOMBAYAH.addEventListener("click", ()=>{
    if (document.getElementById("AddKorea_BOOMBAYAH").classList.contains("display")){
        document.getElementById("AddKorea_BOOMBAYAH").classList.remove("display");
    } else{
        document.getElementById("AddKorea_BOOMBAYAH").classList.add("display");
    }
})

let AddKorea_BoyWithLuv = document.getElementById("likedKorea_BoyWithLuv");
AddKorea_BoyWithLuv.addEventListener("click", ()=>{
    if (document.getElementById("AddKorea_BoyWithLuv").classList.contains("display")){
        document.getElementById("AddKorea_BoyWithLuv").classList.remove("display");
    } else{
        document.getElementById("AddKorea_BoyWithLuv").classList.add("display");
    }
})

let AddKorea_Dynamite = document.getElementById("likedKorea_Dynamite");
AddKorea_Dynamite.addEventListener("click", ()=>{
    if (document.getElementById("AddKorea_Dynamite").classList.contains("display")){
        document.getElementById("AddKorea_Dynamite").classList.remove("display");
    } else{
        document.getElementById("AddKorea_Dynamite").classList.add("display");
    }
})

let AddKorea_KillThisLove = document.getElementById("likedKorea_KillThisLove");
AddKorea_KillThisLove.addEventListener("click", ()=>{
    if (document.getElementById("AddKorea_KillThisLove").classList.contains("display")){
        document.getElementById("AddKorea_KillThisLove").classList.remove("display");
    } else{
        document.getElementById("AddKorea_KillThisLove").classList.add("display");
    }
})

let AddKorea_GANGNAMSTYLE = document.getElementById("likedKorea_GANGNAMSTYLE");
AddKorea_GANGNAMSTYLE.addEventListener("click", ()=>{
    if (document.getElementById("AddKorea_GANGNAMSTYLE").classList.contains("display")){
        document.getElementById("AddKorea_GANGNAMSTYLE").classList.remove("display");
    } else{
        document.getElementById("AddKorea_GANGNAMSTYLE").classList.add("display");
    }
})

let AddKorea_DDUDUDDUDU = document.getElementById("likedKorea_DDUDUDDUDU");
AddKorea_DDUDUDDUDU.addEventListener("click", ()=>{
    if (document.getElementById("AddKorea_DDUDUDDUDU").classList.contains("display")){
        document.getElementById("AddKorea_DDUDUDDUDU").classList.remove("display");
    } else{
        document.getElementById("AddKorea_DDUDUDDUDU").classList.add("display");
    }
})

let AddAP_MAJHAIL = document.getElementById("likedAP_MAJHAIL");
AddAP_MAJHAIL.addEventListener("click", ()=>{
    if (document.getElementById("AddAP_MAJHAIL").classList.contains("display")){
        document.getElementById("AddAP_MAJHAIL").classList.remove("display");
    } else{
        document.getElementById("AddAP_MAJHAIL").classList.add("display");
    }
})

let AddAP_SUMMERHIGH = document.getElementById("likedAP_SUMMERHIGH");
AddAP_SUMMERHIGH.addEventListener("click", ()=>{
    if (document.getElementById("AddAP_SUMMERHIGH").classList.contains("display")){
        document.getElementById("AddAP_SUMMERHIGH").classList.remove("display");
    } else{
        document.getElementById("AddAP_SUMMERHIGH").classList.add("display");
    }
})

let AddAP_BROWNMUNDE = document.getElementById("likedAP_BROWNMUNDE");
AddAP_BROWNMUNDE.addEventListener("click", ()=>{
    if (document.getElementById("AddAP_BROWNMUNDE").classList.contains("display")){
        document.getElementById("AddAP_BROWNMUNDE").classList.remove("display");
    } else{
        document.getElementById("AddAP_BROWNMUNDE").classList.add("display");
    }
})

let AddAP_DILNU = document.getElementById("likedAP_DILNU");
AddAP_DILNU.addEventListener("click", ()=>{
    if (document.getElementById("AddAP_DILNU").classList.contains("display")){
        document.getElementById("AddAP_DILNU").classList.remove("display");
    } else{
        document.getElementById("AddAP_DILNU").classList.add("display");
    }
})

let AddAP_TrueStories = document.getElementById("likedAP_TrueStories");
AddAP_TrueStories.addEventListener("click", ()=>{
    if (document.getElementById("AddAP_TrueStories").classList.contains("display")){
        document.getElementById("AddAP_TrueStories").classList.remove("display");
    } else{
        document.getElementById("AddAP_TrueStories").classList.add("display");
    }
})

let AddAP_WithYou = document.getElementById("likedAP_WithYou");
AddAP_WithYou.addEventListener("click", ()=>{
    if (document.getElementById("AddAP_WithYou").classList.contains("display")){
        document.getElementById("AddAP_WithYou").classList.remove("display");
    } else{
        document.getElementById("AddAP_WithYou").classList.add("display");
    }
})

let AddShubh_WeRollin = document.getElementById("likedShubh_WeRollin");
AddShubh_WeRollin.addEventListener("click", ()=>{
    if (document.getElementById("AddShubh_WeRollin").classList.contains("display")){
        document.getElementById("AddShubh_WeRollin").classList.remove("display");
    } else{
        document.getElementById("AddShubh_WeRollin").classList.add("display");
    }
})

let AddShubh_Baller = document.getElementById("likedShubh_Baller");
AddShubh_Baller.addEventListener("click", ()=>{
    if (document.getElementById("AddShubh_Baller").classList.contains("display")){
        document.getElementById("AddShubh_Baller").classList.remove("display");
    } else{
        document.getElementById("AddShubh_Baller").classList.add("display");
    }
})

let AddShubh_StillRollin = document.getElementById("likedShubh_StillRollin");
AddShubh_StillRollin.addEventListener("click", ()=>{
    if (document.getElementById("AddShubh_StillRollin").classList.contains("display")){
        document.getElementById("AddShubh_StillRollin").classList.remove("display");
    } else{
        document.getElementById("AddShubh_StillRollin").classList.add("display");
    }
})

let AddShubh_SafetyOff = document.getElementById("likedShubh_SafetyOff");
AddShubh_SafetyOff.addEventListener("click", ()=>{
    if (document.getElementById("AddShubh_SafetyOff").classList.contains("display")){
        document.getElementById("AddShubh_SafetyOff").classList.remove("display");
    } else{
        document.getElementById("AddShubh_SafetyOff").classList.add("display");
    }
})

let AddShubh_Cheques = document.getElementById("likedShubh_Cheques");
AddShubh_Cheques.addEventListener("click", ()=>{
    if (document.getElementById("AddShubh_Cheques").classList.contains("display")){
        document.getElementById("AddShubh_Cheques").classList.remove("display");
    } else{
        document.getElementById("AddShubh_Cheques").classList.add("display");
    }
})

let AddBadshah_Paagal = document.getElementById("likedBadshah_Paagal");
AddBadshah_Paagal.addEventListener("click", ()=>{
    if (document.getElementById("AddBadshah_Paagal").classList.contains("display")){
        document.getElementById("AddBadshah_Paagal").classList.remove("display");
    } else{
        document.getElementById("AddBadshah_Paagal").classList.add("display");
    }
})

let AddBadshah_DJWaleyBabu = document.getElementById("likedBadshah_DJWaleyBabu");
AddBadshah_DJWaleyBabu.addEventListener("click", ()=>{
    if (document.getElementById("AddBadshah_DJWaleyBabu").classList.contains("display")){
        document.getElementById("AddBadshah_DJWaleyBabu").classList.remove("display");
    } else{
        document.getElementById("AddBadshah_DJWaleyBabu").classList.add("display");
    }
})

let AddBadshah_AbhiTohParty = document.getElementById("likedBadshah_AbhiTohParty");
AddBadshah_AbhiTohParty.addEventListener("click", ()=>{
    if (document.getElementById("AddBadshah_AbhiTohParty").classList.contains("display")){
        document.getElementById("AddBadshah_AbhiTohParty").classList.remove("display");
    } else{
        document.getElementById("AddBadshah_AbhiTohParty").classList.add("display");
    }
})

let AddBadshah_BadBoyBadGirl = document.getElementById("likedBadshah_BadBoyBadGirl");
AddBadshah_BadBoyBadGirl.addEventListener("click", ()=>{
    if (document.getElementById("AddBadshah_BadBoyBadGirl").classList.contains("display")){
        document.getElementById("AddBadshah_BadBoyBadGirl").classList.remove("display");
    } else{
        document.getElementById("AddBadshah_BadBoyBadGirl").classList.add("display");
    }
})

let AddBadshah_OSajna = document.getElementById("likedBadshah_OSajna");
AddBadshah_OSajna.addEventListener("click", ()=>{
    if (document.getElementById("AddBadshah_OSajna").classList.contains("display")){
        document.getElementById("AddBadshah_OSajna").classList.remove("display");
    } else{
        document.getElementById("AddBadshah_OSajna").classList.add("display");
    }
})

let AddBadshah_Heartless = document.getElementById("likedBadshah_Heartless");
AddBadshah_Heartless.addEventListener("click", ()=>{
    if (document.getElementById("AddBadshah_Heartless").classList.contains("display")){
        document.getElementById("AddBadshah_Heartless").classList.remove("display");
    } else{
        document.getElementById("AddBadshah_Heartless").classList.add("display");
    }
})

let AddBadshah_Mercy = document.getElementById("likedBadshah_Mercy");
AddBadshah_Mercy.addEventListener("click", ()=>{
    if (document.getElementById("AddBadshah_Mercy").classList.contains("display")){
        document.getElementById("AddBadshah_Mercy").classList.remove("display");
    } else{
        document.getElementById("AddBadshah_Mercy").classList.add("display");
    }
})

let AddYOYO_DheereDheere = document.getElementById("likedYOYO_DheereDheere");
AddYOYO_DheereDheere.addEventListener("click", ()=>{
    if (document.getElementById("AddYOYO_DheereDheere").classList.contains("display")){
        document.getElementById("AddYOYO_DheereDheere").classList.remove("display");
    } else{
        document.getElementById("AddYOYO_DheereDheere").classList.add("display");
    }
})

let AddYOYO_ChaarBotalVodka = document.getElementById("likedYOYO_ChaarBotalVodka");
AddYOYO_ChaarBotalVodka.addEventListener("click", ()=>{
    if (document.getElementById("AddYOYO_ChaarBotalVodka").classList.contains("display")){
        document.getElementById("AddYOYO_ChaarBotalVodka").classList.remove("display");
    } else{
        document.getElementById("AddYOYO_ChaarBotalVodka").classList.add("display");
    }
})

let AddYOYO_PartyWithTheBhoothnath = document.getElementById("likedYOYO_PartyWithTheBhoothnath");
AddYOYO_PartyWithTheBhoothnath.addEventListener("click", ()=>{
    if (document.getElementById("AddYOYO_PartyWithTheBhoothnath").classList.contains("display")){
        document.getElementById("AddYOYO_PartyWithTheBhoothnath").classList.remove("display");
    } else{
        document.getElementById("AddYOYO_PartyWithTheBhoothnath").classList.add("display");
    }
})

let AddYOYO_DesiKalakaar = document.getElementById("likedYOYO_DesiKalakaar");
AddYOYO_DesiKalakaar.addEventListener("click", ()=>{
    if (document.getElementById("AddYOYO_DesiKalakaar").classList.contains("display")){
        document.getElementById("AddYOYO_DesiKalakaar").classList.remove("display");
    } else{
        document.getElementById("AddYOYO_DesiKalakaar").classList.add("display");
    }
})

let AddYOYO_LOVEDOSE = document.getElementById("likedYOYO_LOVEDOSE");
AddYOYO_LOVEDOSE.addEventListener("click", ()=>{
    if (document.getElementById("AddYOYO_LOVEDOSE").classList.contains("display")){
        document.getElementById("AddYOYO_LOVEDOSE").classList.remove("display");
    } else{
        document.getElementById("AddYOYO_LOVEDOSE").classList.add("display");
    }
})

let AddYOYO_BlueEyes = document.getElementById("likedYOYO_BlueEyes");
AddYOYO_BlueEyes.addEventListener("click", ()=>{
    if (document.getElementById("AddYOYO_BlueEyes").classList.contains("display")){
        document.getElementById("AddYOYO_BlueEyes").classList.remove("display");
    } else{
        document.getElementById("AddYOYO_BlueEyes").classList.add("display");
    }
})

let AddBoy_deathbed = document.getElementById("likedBoy_deathbed");
AddBoy_deathbed.addEventListener("click", ()=>{
    if (document.getElementById("AddBoy_deathbed").classList.contains("display")){
        document.getElementById("AddBoy_deathbed").classList.remove("display");
    } else{
        document.getElementById("AddBoy_deathbed").classList.add("display");
    }
})

let AddBoyWithUke_SheSaidNo = document.getElementById("likedBoyWithUke_SheSaidNo");
AddBoyWithUke_SheSaidNo.addEventListener("click", ()=>{
    if (document.getElementById("AddBoyWithUke_SheSaidNo").classList.contains("display")){
        document.getElementById("AddBoyWithUke_SheSaidNo").classList.remove("display");
    } else{
        document.getElementById("AddBoyWithUke_SheSaidNo").classList.add("display");
    }
})

let AddBoyWithUke_TwoMoons = document.getElementById("likedBoyWithUke_TwoMoons");
AddBoyWithUke_TwoMoons.addEventListener("click", ()=>{
    if (document.getElementById("AddBoyWithUke_TwoMoons").classList.contains("display")){
        document.getElementById("AddBoyWithUke_TwoMoons").classList.remove("display");
    } else{
        document.getElementById("AddBoyWithUke_TwoMoons").classList.add("display");
    }
})

let AddBoyWithUke_Toxic = document.getElementById("likedBoyWithUke_Toxic");
AddBoyWithUke_Toxic.addEventListener("click", ()=>{
    if (document.getElementById("AddBoyWithUke_Toxic").classList.contains("display")){
        document.getElementById("AddBoyWithUke_Toxic").classList.remove("display");
    } else{
        document.getElementById("AddBoyWithUke_Toxic").classList.add("display");
    }
})

let AddBoyWithUke_Understand = document.getElementById("likedBoyWithUke_Understand");
AddBoyWithUke_Understand.addEventListener("click", ()=>{
    if (document.getElementById("AddBoyWithUke_Understand").classList.contains("display")){
        document.getElementById("AddBoyWithUke_Understand").classList.remove("display");
    } else{
        document.getElementById("AddBoyWithUke_Understand").classList.add("display");
    }
})

let AddArijit_KyaMujhePyar = document.getElementById("likedArijit_KyaMujhePyar");
AddArijit_KyaMujhePyar.addEventListener("click", ()=>{
    if (document.getElementById("AddArijit_KyaMujhePyar").classList.contains("display")){
        document.getElementById("AddArijit_KyaMujhePyar").classList.remove("display");
    } else{
        document.getElementById("AddArijit_KyaMujhePyar").classList.add("display");
    }
})

let AddArijit_TaaronKeShehar = document.getElementById("likedArijit_TaaronKeShehar");
AddArijit_TaaronKeShehar.addEventListener("click", ()=>{
    if (document.getElementById("AddArijit_TaaronKeShehar").classList.contains("display")){
        document.getElementById("AddArijit_TaaronKeShehar").classList.remove("display");
    } else{
        document.getElementById("AddArijit_TaaronKeShehar").classList.add("display");
    }
})

let AddArijit_DILKOKARRARAAYA = document.getElementById("likedArijit_DILKOKARRARAAYA");
AddArijit_DILKOKARRARAAYA.addEventListener("click", ()=>{
    if (document.getElementById("AddArijit_DILKOKARRARAAYA").classList.contains("display")){
        document.getElementById("AddArijit_DILKOKARRARAAYA").classList.remove("display");
    } else{
        document.getElementById("AddArijit_DILKOKARRARAAYA").classList.add("display");
    }
})

let AddDiljit_BornToShine = document.getElementById("likedDiljit_BornToShine");
AddDiljit_BornToShine.addEventListener("click", ()=>{
    if (document.getElementById("AddDiljit_BornToShine").classList.contains("display")){
        document.getElementById("AddDiljit_BornToShine").classList.remove("display");
    } else{
        document.getElementById("AddDiljit_BornToShine").classList.add("display");
    }
})

let AddDilijit_AayaNaTu = document.getElementById("likedDilijit_AayaNaTu");
AddDilijit_AayaNaTu.addEventListener("click", ()=>{
    if (document.getElementById("AddDilijit_AayaNaTu").classList.contains("display")){
        document.getElementById("AddDilijit_AayaNaTu").classList.remove("display");
    } else{
        document.getElementById("AddDilijit_AayaNaTu").classList.add("display");
    }
})

let AddDiljit_GHOST = document.getElementById("likedDiljit_GHOST");
AddDiljit_GHOST.addEventListener("click", ()=>{
    if (document.getElementById("AddDiljit_GHOST").classList.contains("display")){
        document.getElementById("AddDiljit_GHOST").classList.remove("display");
    } else{
        document.getElementById("AddDiljit_GHOST").classList.add("display");
    }
})

let AddDiljit_Lemonade = document.getElementById("likedDiljit_Lemonade");
AddDiljit_Lemonade.addEventListener("click", ()=>{
    if (document.getElementById("AddDiljit_Lemonade").classList.contains("display")){
        document.getElementById("AddDiljit_Lemonade").classList.remove("display");
    } else{
        document.getElementById("AddDiljit_Lemonade").classList.add("display");
    }
})

let AddDiljit_HassHass = document.getElementById("likedDiljit_HassHass");
AddDiljit_HassHass.addEventListener("click", ()=>{
    if (document.getElementById("AddDiljit_HassHass").classList.contains("display")){
        document.getElementById("AddDiljit_HassHass").classList.remove("display");
    } else{
        document.getElementById("AddDiljit_HassHass").classList.add("display");
    }
})

let Addpodacast1 = document.getElementById("likedpodacast1");
Addpodacast1.addEventListener("click", ()=>{
    if (document.getElementById("Addpodacast1").classList.contains("display")){
        document.getElementById("Addpodacast1").classList.remove("display");
    } else{
        document.getElementById("Addpodacast1").classList.add("display");
    }
})

let Addpodacast2 = document.getElementById("likedpodacast2");
Addpodacast2.addEventListener("click", ()=>{
    if (document.getElementById("Addpodacast2").classList.contains("display")){
        document.getElementById("Addpodacast2").classList.remove("display");
    } else{
        document.getElementById("Addpodacast2").classList.add("display");
    }
})

let Addpodacast3 = document.getElementById("likedpodacast3");
Addpodacast3.addEventListener("click", ()=>{
    if (document.getElementById("Addpodacast3").classList.contains("display")){
        document.getElementById("Addpodacast3").classList.remove("display");
    } else{
        document.getElementById("Addpodacast3").classList.add("display");
    }
})

let Addpodacast4 = document.getElementById("likedpodacast4");
Addpodacast4.addEventListener("click", ()=>{
    if (document.getElementById("Addpodacast4").classList.contains("display")){
        document.getElementById("Addpodacast4").classList.remove("display");
    } else{
        document.getElementById("Addpodacast4").classList.add("display");
    }
})

let Addpodacast5 = document.getElementById("likedpodacast5");
Addpodacast5.addEventListener("click", ()=>{
    if (document.getElementById("Addpodacast5").classList.contains("display")){
        document.getElementById("Addpodacast5").classList.remove("display");
    } else{
        document.getElementById("Addpodacast5").classList.add("display");
    }
})

let AddBeerBiceps1 = document.getElementById("likedBeerBiceps1");
AddBeerBiceps1.addEventListener("click", ()=>{
    if (document.getElementById("AddBeerBiceps1").classList.contains("display")){
        document.getElementById("AddBeerBiceps1").classList.remove("display");
    } else{
        document.getElementById("AddBeerBiceps1").classList.add("display");
    }
})

let AddBeerBiceps2 = document.getElementById("likedBeerBiceps2");
AddBeerBiceps2.addEventListener("click", ()=>{
    if (document.getElementById("AddBeerBiceps2").classList.contains("display")){
        document.getElementById("AddBeerBiceps2").classList.remove("display");
    } else{
        document.getElementById("AddBeerBiceps2").classList.add("display");
    }
})

let AddBeerBiceps3 = document.getElementById("likedBeerBiceps3");
AddBeerBiceps3.addEventListener("click", ()=>{
    if (document.getElementById("AddBeerBiceps3").classList.contains("display")){
        document.getElementById("AddBeerBiceps3").classList.remove("display");
    } else{
        document.getElementById("AddBeerBiceps3").classList.add("display");
    }
})

let AddBeerBiceps4 = document.getElementById("likedBeerBiceps4");
AddBeerBiceps4.addEventListener("click", ()=>{
    if (document.getElementById("AddBeerBiceps4").classList.contains("display")){
        document.getElementById("AddBeerBiceps4").classList.remove("display");
    } else{
        document.getElementById("AddBeerBiceps4").classList.add("display");
    }
})

let AddBeerBiceps5 = document.getElementById("likedBeerBiceps5");
AddBeerBiceps5.addEventListener("click", ()=>{
    if (document.getElementById("AddBeerBiceps5").classList.contains("display")){
        document.getElementById("AddBeerBiceps5").classList.remove("display");
    } else{
        document.getElementById("AddBeerBiceps5").classList.add("display");
    }
})
// ################################################ Follow button Activation system  #############################################################

let followButtonList = document.querySelectorAll(".follow");
followButtonList.forEach(FollowCliked => {
    FollowCliked.addEventListener("click", ()=>{
        if (FollowCliked.innerHTML == "Follow"){
            FollowCliked.innerHTML = "Following";
        } else{
            FollowCliked.innerHTML = "Follow"
        }
        
    })
})

// ZAYN page

let followzayn = document.getElementById("followZayn");
followzayn.addEventListener("click",()=>{
    if (document.getElementById("likedzayn").classList.contains("display")){
        document.getElementById("likedzayn").classList.remove("display");
    } else{
        document.getElementById("likedzayn").classList.add("display");
    }
})

// DIVINE page

let followDivine = document.getElementById("followDivine");
followDivine.addEventListener("click",()=>{
    if (document.getElementById("likedDivine").classList.contains("display")){
        document.getElementById("likedDivine").classList.remove("display");
    } else{
        document.getElementById("likedDivine").classList.add("display");
    }
})

// EMINEM page

let followEminem = document.getElementById("followEminem");
followEminem.addEventListener("click",()=>{
    if (document.getElementById("likedEminem").classList.contains("display")){
        document.getElementById("likedEminem").classList.remove("display");
    } else{
        document.getElementById("likedEminem").classList.add("display");
    }
})

// Justin page

let followJustin = document.getElementById("followJustin");
followJustin.addEventListener("click",()=>{
    if (document.getElementById("likedJustin").classList.contains("display")){
        document.getElementById("likedJustin").classList.remove("display");
    } else{
        document.getElementById("likedJustin").classList.add("display");
    }
})

// Armaan page

let followArmaan = document.getElementById("followArmaan");
followArmaan.addEventListener("click",()=>{
    if (document.getElementById("likedArmaan").classList.contains("display")){
        document.getElementById("likedArmaan").classList.remove("display");
    } else{
        document.getElementById("likedArmaan").classList.add("display");
    }
})

// Arijit page

let followArijit = document.getElementById("followArijit");
followArijit.addEventListener("click",()=>{
    if (document.getElementById("likedArijit").classList.contains("display")){
        document.getElementById("likedArijit").classList.remove("display");
    } else{
        document.getElementById("likedArijit").classList.add("display");
    }
})

// Taylor page

let followTaylor = document.getElementById("followTaylor");
followTaylor.addEventListener("click",()=>{
    if (document.getElementById("likedTaylor").classList.contains("display")){
        document.getElementById("likedTaylor").classList.remove("display");
    } else{
        document.getElementById("likedTaylor").classList.add("display");
    }
})

// Ed page

let followEd = document.getElementById("followEd");
followEd.addEventListener("click",()=>{
    if (document.getElementById("likedEd").classList.contains("display")){
        document.getElementById("likedEd").classList.remove("display");
    } else{
        document.getElementById("likedEd").classList.add("display");
    }
})

// Dua page

let followDua = document.getElementById("followDua");
followDua.addEventListener("click",()=>{
    if (document.getElementById("likedDua").classList.contains("display")){
        document.getElementById("likedDua").classList.remove("display");
    } else{
        document.getElementById("likedDua").classList.add("display");
    }
})

// Billie page

let followBillie = document.getElementById("followBillie");
followBillie.addEventListener("click",()=>{
    if (document.getElementById("likedBillie").classList.contains("display")){
        document.getElementById("likedBillie").classList.remove("display");
    } else{
        document.getElementById("likedBillie").classList.add("display");
    }
})

// Ariana page

let followAriana = document.getElementById("followAriana");
followAriana.addEventListener("click",()=>{
    if (document.getElementById("likedAriana").classList.contains("display")){
        document.getElementById("likedAriana").classList.remove("display");
    } else{
        document.getElementById("likedAriana").classList.add("display");
    }
})

// Selena page

let followSelena = document.getElementById("followSelena");
followSelena.addEventListener("click",()=>{
    if (document.getElementById("likedSelena").classList.contains("display")){
        document.getElementById("likedSelena").classList.remove("display");
    } else{
        document.getElementById("likedSelena").classList.add("display");
    }
})

// Kanye page

let followKanye = document.getElementById("followKanye");
followKanye.addEventListener("click",()=>{
    if (document.getElementById("likedKanye").classList.contains("display")){
        document.getElementById("likedKanye").classList.remove("display");
    } else{
        document.getElementById("likedKanye").classList.add("display");
    }
})


// ################################ Left and Right Control button Background color change System  ############################################################

let leftCtrlBtnlist = document.querySelectorAll(".playlist");
leftCtrlBtnlist.forEach(activebtn => {
    activebtn.addEventListener("click", ()=>{
        document.querySelector(".leftControlBtn")?.classList.remove("leftControlBtn")
        activebtn.classList.add("leftControlBtn")
    })
})

let rightCtrlBtnlist = document.querySelectorAll(".RightCtrlButtons");
rightCtrlBtnlist.forEach(activebtn => {
    activebtn.addEventListener("click", ()=>{
        document.querySelector(".rightControlButton")?.classList.remove("rightControlButton")
        activebtn.classList.add("rightControlButton")
    })
})


// ################################## Current song playing system  ##################################################



// Trampoline song

let TrampolineList = document.querySelectorAll(".Trampoline");
TrampolineList.forEach(song =>{
    song.addEventListener("click", ()=>{
         for (let x in SongInfoList){
             if (SongInfoList[x].id == "Trampoline"){
                 SongInfoList[x].style.display = "flex";
                 mainSongInfo.style.display = "none";
             } else {
                 SongInfoList[x].style.display = "none";  
             }
         }
     })
})

// Dusk Till dawn song

let DuskTilldawnList = document.querySelectorAll(".DuskTilldawn");
DuskTilldawnList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "DuskTilldawn"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

// FOol FOr YoU song

let FOolFOrYoUList = document.querySelectorAll(".FOolFOrYoU");
FOolFOrYoUList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "FOolFOrYoU"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

// I Dont Wanna Live Forever song

let IDontWannaLiveForeverList = document.querySelectorAll(".IDontWannaLiveForever");
IDontWannaLiveForeverList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "IDontWannaLiveForever"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

// Let Me song

let LetMeList = document.querySelectorAll(".LetMe");
LetMeList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "LetMe"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

// Night Changes song

let NightChangesList = document.querySelectorAll(".NightChanges");
NightChangesList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "NightChanges"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

// PILLOWTALK song

let PILLOWTALKList = document.querySelectorAll(".PILLOWTALK");
PILLOWTALKList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "PILLOWTALK"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

// What I Am song

let WhatIAmList = document.querySelectorAll(".WhatIAm");
WhatIAmList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "WhatIAm"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

//  A Whole New World song

let AWholeNewWorldList = document.querySelectorAll(".AWholeNewWorld");
AWholeNewWorldList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "AWholeNewWorld"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

// Entertainer song

let EntertainerList = document.querySelectorAll(".Entertainer");
EntertainerList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Entertainer"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

// 100 Million song

let MillionsongList = document.querySelectorAll(".Million_100");
MillionsongList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Million"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

// BombayToPanjab song

let BombayToPanjabList = document.querySelectorAll(".BombayToPanjab");
BombayToPanjabList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "BombayToPanjab"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

// ChalBombay song

let ChalBombayList = document.querySelectorAll(".ChalBombay");
ChalBombayList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "chalBombay"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

// Kaam25 song

let Kaam25List = document.querySelectorAll(".kaam25");
Kaam25List.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Kaam25"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

// Kohinoor song

let KohinoorList = document.querySelectorAll(".kohonoor");
KohinoorList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "kohinoor"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

// Mirchi song

let MirchiList = document.querySelectorAll(".mirchi");
MirchiList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Mirchi"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

// NothingLast song

let NothingLastList = document.querySelectorAll(".nothinglast");
NothingLastList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "nothinglasts"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

// oneside song

let onesideList = document.querySelectorAll(".oneside");
onesideList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "oneside"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

// PunyaPaap song

let PunyaPaapList = document.querySelectorAll(".punyapaap");
PunyaPaapList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "punyapaap"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

// teesriManzil song

let teesriManzilList = document.querySelectorAll(".teesrimanzil");
teesriManzilList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "teesrimanzil"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let MockingBirdList = document.querySelectorAll(".MockingBird");
MockingBirdList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "MockingBird"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let notafraidList = document.querySelectorAll(".NotAfraid");
notafraidList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "notafraid"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let godzilaList = document.querySelectorAll(".Godzila");
godzilaList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "godzila"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let loseyourselfList = document.querySelectorAll(".LoseYourself");
loseyourselfList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "loseyourself"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let lovethewaylieList = document.querySelectorAll(".LoveTheyouLie");
lovethewaylieList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "lovethewaylie"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let monsterList = document.querySelectorAll(".monster");
monsterList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "monster"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let noloveList = document.querySelectorAll(".NoLove");
noloveList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "nolove"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let wheniamgoneList = document.querySelectorAll(".WhenIamGone");
wheniamgoneList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "wheniamgone"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let withoutmeList = document.querySelectorAll(".WithoutMe");
withoutmeList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "withoutme"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let VenomList = document.querySelectorAll(".Venom");
VenomList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Venom"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let PeachesList = document.querySelectorAll(".Peaches");
PeachesList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Peaches"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let YummyList = document.querySelectorAll(".Yummy");
YummyList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Yummy"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let GhostList = document.querySelectorAll(".Ghost");
GhostList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Ghost"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let BabyList = document.querySelectorAll(".Baby");
BabyList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Baby"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let Hours_justinList = document.querySelectorAll(".Hours_justin");
Hours_justinList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Hours_justin"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let HoldOnList = document.querySelectorAll(".HoldOn");
HoldOnList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "HoldOn"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let IDontCareList = document.querySelectorAll(".IDontCare");
IDontCareList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "IDontCare"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let LoveyourselfList = document.querySelectorAll(".Loveyourself");
LoveyourselfList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Loveyourself"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let NeverSayNeverList = document.querySelectorAll(".NeverSayNever");
NeverSayNeverList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "NeverSayNever"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let StayList = document.querySelectorAll(".Stay");
StayList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Stay"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let BesabriyanList = document.querySelectorAll(".Besabriyan");
BesabriyanList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Besabriyan"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let BoldonazaraList = document.querySelectorAll(".Boldonazara");
BoldonazaraList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Boldonazara"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let BuddusamannList = document.querySelectorAll(".Buddusamann");
BuddusamannList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Buddusamann"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let sabteraList = document.querySelectorAll(".sabtera");
sabteraList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "sabtera"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let HamnahisudarengeList = document.querySelectorAll(".Hamnahisudarenge");
HamnahisudarengeList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Hamnahisudarenge"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let jabtakList = document.querySelectorAll(".jabtak");
jabtakList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "jabtak"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let KauntujeList = document.querySelectorAll(".Kauntuje");
KauntujeList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Kauntuje"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let MainrahoonList = document.querySelectorAll(".Mainrahoon");
MainrahoonList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Mainrahoon"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let OndumalebilluList = document.querySelectorAll(".Ondumalebillu");
OndumalebilluList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Ondumalebillu"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let PhelaPyarList = document.querySelectorAll(".PhelaPyar");
PhelaPyarList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "PhelaPyar"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let agartumsathoList = document.querySelectorAll(".agartumsatho");
agartumsathoList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "agartumsatho"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let GaltisaymistakeList = document.querySelectorAll(".Galtisaymistake");
GaltisaymistakeList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Galtisaymistake"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let LambiyanList = document.querySelectorAll(".Lambiyan");
LambiyanList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Lambiyan"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let LeharadhoList = document.querySelectorAll(".Leharadho");
LeharadhoList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Leharadho"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let MainteraboyfriendList = document.querySelectorAll(".Mainteraboyfriend");
MainteraboyfriendList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Mainteraboyfriend"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let SatrangaList = document.querySelectorAll(".Satranga");
SatrangaList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Satranga"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let SurajaDubhList = document.querySelectorAll(".SurajaDubh");
SurajaDubhList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "SurajaDubh"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let TerayarhumayList = document.querySelectorAll(".Terayarhumay");
TerayarhumayList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Terayarhumay"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let WhatjumkaList = document.querySelectorAll(".Whatjumka");
WhatjumkaList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Whatjumka"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let WhodinList = document.querySelectorAll(".Whodin");
WhodinList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Whodin"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let BlankSpaceList = document.querySelectorAll(".BlankSpace");
BlankSpaceList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "BlankSpace"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let RedList = document.querySelectorAll(".Red");
RedList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Red"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let LoveStoryList = document.querySelectorAll(".LoveStory");
LoveStoryList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "LoveStory"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let BacktoDecemberList = document.querySelectorAll(".BacktoDecember");
BacktoDecemberList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "BacktoDecember"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let AntiHeroList = document.querySelectorAll(".AntiHero");
AntiHeroList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "AntiHero"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let twentytwoList = document.querySelectorAll(".twentytwo");
twentytwoList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "twentytwo"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let WildestDreamsList = document.querySelectorAll(".WildestDreams");
WildestDreamsList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "WildestDreams"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let YouBelongWithMeList = document.querySelectorAll(".YouBelongWithMe");
YouBelongWithMeList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "YouBelongWithMe"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let SafeandSoundList = document.querySelectorAll(".SafeandSound");
SafeandSoundList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "SafeandSound"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let EnchantedList = document.querySelectorAll(".Enchanted");
EnchantedList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Enchanted"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let BadhabitsList = document.querySelectorAll(".Badhabits");
BadhabitsList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Badhabits"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let CelestialList = document.querySelectorAll(".Celestial");
CelestialList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Celestial"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let GivemeloveList = document.querySelectorAll(".Givemelove");
GivemeloveList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Givemelove"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let HappierList = document.querySelectorAll(".Happier");
HappierList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Happier"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let PerfectList = document.querySelectorAll(".Perfect");
PerfectList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Perfect"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let PeruList = document.querySelectorAll(".Peru");
PeruList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Peru"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let PhotographyList = document.querySelectorAll(".Photography");
PhotographyList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Photography"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let ShapeofyouList = document.querySelectorAll(".Shapeofyou");
ShapeofyouList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Shapeofyou"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let ShiversList = document.querySelectorAll(".Shivers");
ShiversList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Shivers"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let ThinkingoutloudList = document.querySelectorAll(".Thinkingoutloud");
ThinkingoutloudList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Thinkingoutloud"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let OnekissList = document.querySelectorAll(".Onekiss");
OnekissList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Onekiss"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let BreakmyheartList = document.querySelectorAll(".Breakmyheart");
BreakmyheartList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Breakmyheart"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let ColdheatnowList = document.querySelectorAll(".Coldheatnow");
ColdheatnowList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Coldheatnow"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let DancethenightList = document.querySelectorAll(".Dancethenight");
DancethenightList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Dancethenight"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let DontstartnowList = document.querySelectorAll(".Dontstartnow");
DontstartnowList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Dontstartnow"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let HoudiniList = document.querySelectorAll(".Houdini");
HoudiniList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Houdini"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let LevitatingList = document.querySelectorAll(".Levitating");
LevitatingList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Levitating"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let LoveagainList = document.querySelectorAll(".Loveagain");
LoveagainList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Loveagain"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let NewrulesList = document.querySelectorAll(".Newrules");
NewrulesList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Newrules"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let ScaredtobealoneList = document.querySelectorAll(".Scaredtobealone");
ScaredtobealoneList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Scaredtobealone"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let allthegoodgirlsList = document.querySelectorAll(".allthegoodgirls");
allthegoodgirlsList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "allthegoodgirls"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let badguyList = document.querySelectorAll(".badguy");
badguyList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "badguy"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let buryafriendList = document.querySelectorAll(".buryafriend");
buryafriendList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "buryafriend"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let COPYCATList = document.querySelectorAll(".COPYCAT");
COPYCATList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "COPYCAT"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let HappierThanEverList = document.querySelectorAll(".HappierThanEver");
HappierThanEverList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "HappierThanEver"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let hostageList = document.querySelectorAll(".hostage");
hostageList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "hostage"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let lovelyList = document.querySelectorAll(".lovely");
lovelyList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "lovely"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let OceanEyesList = document.querySelectorAll(".OceanEyes");
OceanEyesList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "OceanEyes"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let whenthepartyisoverList = document.querySelectorAll(".whenthepartyisover");
whenthepartyisoverList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "whenthepartyisover"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let youshouldseemeinacrownList = document.querySelectorAll(".youshouldseemeinacrown");
youshouldseemeinacrownList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "youshouldseemeinacrown"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let SevenringsList = document.querySelectorAll(".Sevenrings");
SevenringsList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Sevenrings"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let DangerousWomanList = document.querySelectorAll(".DangerousWoman");
DangerousWomanList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "DangerousWoman"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let DieForYouList = document.querySelectorAll(".DieForYou");
DieForYouList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "DieForYou"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let EverydayList = document.querySelectorAll(".Everyday");
EverydayList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Everyday"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let OneLastTimeList = document.querySelectorAll(".OneLastTime");
OneLastTimeList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "OneLastTime"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let positionsList = document.querySelectorAll(".positions");
positionsList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "positions"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let SantaTellMeList = document.querySelectorAll(".SantaTellMe");
SantaTellMeList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "SantaTellMe"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let SideTosideList = document.querySelectorAll(".SideToside");
SideTosideList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "SideToside"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let StuckwithUList = document.querySelectorAll(".StuckwithU");
StuckwithUList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "StuckwithU"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let thankUnextList = document.querySelectorAll(".thankUnext");
thankUnextList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "thankUnext"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let ComeGetItList = document.querySelectorAll(".ComeGetIt");
ComeGetItList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "ComeGetIt"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let GoodForYouList = document.querySelectorAll(".GoodForYou");
GoodForYouList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "GoodForYou"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let HandsToMyselfList = document.querySelectorAll(".HandsToMyself");
HandsToMyselfList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "HandsToMyself"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let WolvesList = document.querySelectorAll(".Wolves");
WolvesList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Wolves"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let WhoSaysList = document.querySelectorAll(".WhoSays");
WhoSaysList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "WhoSays"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let TheHeartWantList = document.querySelectorAll(".TheHeartWant");
TheHeartWantList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "TheHeartWant"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let SlowDownList = document.querySelectorAll(".SlowDown");
SlowDownList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "SlowDown"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let SameOldLoveList = document.querySelectorAll(".SameOldLove");
SameOldLoveList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "SameOldLove"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let NaturallyList = document.querySelectorAll(".Naturally");
NaturallyList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Naturally"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let LoveYouLikeList = document.querySelectorAll(".LoveYouLike");
LoveYouLikeList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "LoveYouLike"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let AllOfTheLightsList = document.querySelectorAll(".AllOfTheLights");
AllOfTheLightsList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "AllOfTheLights"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let BoundToList = document.querySelectorAll(".BoundTo");
BoundToList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "BoundTo"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let CantTellMeNothingList = document.querySelectorAll(".CantTellMeNothing");
CantTellMeNothingList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "CantTellMeNothing"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let ETList = document.querySelectorAll(".ET");
ETList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "ET"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let FlashingLightsList = document.querySelectorAll(".FlashingLights");
FlashingLightsList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "FlashingLights"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let ForeverList = document.querySelectorAll(".Forever");
ForeverList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Forever"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let GoldDiggerList = document.querySelectorAll(".GoldDigger");
GoldDiggerList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "GoldDigger"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let RunawayList = document.querySelectorAll(".Runaway");
RunawayList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Runaway"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let StrongerList = document.querySelectorAll(".Stronger");
StrongerList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Stronger"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let HeartlessList = document.querySelectorAll(".Heartless");
HeartlessList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Heartless"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let OneDirection_YouandIList = document.querySelectorAll(".OneDirection_YouandI");
OneDirection_YouandIList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "OneDirection_YouandI"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let OneDirection_WhatMakesYouBeautifulList = document.querySelectorAll(".OneDirection_WhatMakesYouBeautiful");
OneDirection_WhatMakesYouBeautifulList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "OneDirection_WhatMakesYouBeautiful"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let OneDirection_WalkingintheWindList = document.querySelectorAll(".OneDirection_WalkingintheWind");
OneDirection_WalkingintheWindList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "OneDirection_WalkingintheWind"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let OneDirection_TheyDontKnowAboutUsList = document.querySelectorAll(".OneDirection_TheyDontKnowAboutUs");
OneDirection_TheyDontKnowAboutUsList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "OneDirection_TheyDontKnowAboutUs"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let OneDirection_StrongList = document.querySelectorAll(".OneDirection_Strong");
OneDirection_StrongList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "OneDirection_Strong"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let OneDirection_StoryofMyLifeList = document.querySelectorAll(".OneDirection_StoryofMyLife");
OneDirection_StoryofMyLifeList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "OneDirection_StoryofMyLife"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let OneDirection_StealMyGirlList = document.querySelectorAll(".OneDirection_StealMyGirl");
OneDirection_StealMyGirlList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "OneDirection_StealMyGirl"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let OneDirection_PerfectList = document.querySelectorAll(".OneDirection_Perfect");
OneDirection_PerfectList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "OneDirection_Perfect"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let OneDirection_OneWayOrAnotherList = document.querySelectorAll(".OneDirection_OneWayOrAnother");
OneDirection_OneWayOrAnotherList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "OneDirection_OneWayOrAnother"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let OneDirection_OneThingList = document.querySelectorAll(".OneDirection_OneThing");
OneDirection_OneThingList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "OneDirection_OneThing"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let OneDirection_MoreThanThisList = document.querySelectorAll(".OneDirection_MoreThanThis");
OneDirection_MoreThanThisList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "OneDirection_MoreThanThis"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let OneDirection_MidnightMemoriesList = document.querySelectorAll(".OneDirection_MidnightMemories");
OneDirection_MidnightMemoriesList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "OneDirection_MidnightMemories"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let OneDirection_LiveWhileWereYoungList = document.querySelectorAll(".OneDirection_LiveWhileWereYoung");
OneDirection_LiveWhileWereYoungList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "OneDirection_LiveWhileWereYoung"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let OneDirection_LittleThingsList = document.querySelectorAll(".OneDirection_LittleThings");
OneDirection_LittleThingsList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "OneDirection_LittleThings"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let OneDirection_KissYouList = document.querySelectorAll(".OneDirection_KissYou");
OneDirection_KissYouList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "OneDirection_KissYou"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let OneDirection_HistoryList = document.querySelectorAll(".OneDirection_History");
OneDirection_HistoryList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "OneDirection_History"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let OneDirection_GottaBeYouList = document.querySelectorAll(".OneDirection_GottaBeYou");
OneDirection_GottaBeYouList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "OneDirection_GottaBeYou"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let onedirection_bestsongeverList = document.querySelectorAll(".onedirection_bestsongever");
onedirection_bestsongeverList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "onedirection_bestsongever"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let OneDirection_18List = document.querySelectorAll(".OneDirection_18");
OneDirection_18List.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "OneDirection_18"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

// JVKE_thisiswhatheartbreak
document.querySelectorAll(".JVKE_thisiswhatheartbreak").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "JVKE_thisiswhatheartbreak") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// JVKE_goldenhour
document.querySelectorAll(".JVKE_goldenhour").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "JVKE_goldenhour") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// CG5_GRIMACE
document.querySelectorAll(".CG5_GRIMACE").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "CG5_GRIMACE") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// CG5_SleepWell
document.querySelectorAll(".CG5_SleepWell").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "CG5_SleepWell") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Stellar_Daredevil
document.querySelectorAll(".Stellar_Daredevil").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "Stellar_Daredevil") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Stellar_ElDorado
document.querySelectorAll(".Stellar_ElDorado").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "Stellar_ElDorado") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Stellar_Ashes
document.querySelectorAll(".Stellar_Ashes").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "Stellar_Ashes") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// AFI_MissMurder
document.querySelectorAll(".AFI_MissMurder").forEach(song => {
    song.addEventListener("click", () => {
        SongInfoList.forEach(info => {
            if (info.id === "AFI_MissMurder") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// JayZ_NiasInParis
document.querySelectorAll(".JayZ_NiasInParis").forEach(song => {
    song.addEventListener("click", () => {
        SongInfoList.forEach(info => {
            if (info.id === "JayZ_NiasInParis") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// JAYZ_EmpireStateOfMind
document.querySelectorAll(".JAYZ_EmpireStateOfMind").forEach(song => {
    song.addEventListener("click", () => {
        SongInfoList.forEach(info => {
            if (info.id === "JAYZ_EmpireStateOfMind") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// AURORA_RunningWithTheWolves
document.querySelectorAll(".AURORA_RunningWithTheWolves").forEach(song => {
    song.addEventListener("click", () => {
        SongInfoList.forEach(info => {
            if (info.id === "AURORA_RunningWithTheWolves") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// AURORA_Runaway
document.querySelectorAll(".AURORA_Runaway").forEach(song => {
    song.addEventListener("click", () => {
        SongInfoList.forEach(info => {
            if (info.id === "AURORA_Runaway") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

let AlanWalker_AloneList = document.querySelectorAll(".AlanWalker_Alone");
AlanWalker_AloneList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "AlanWalker_Alone"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let AlanWalker_OnMyWayList = document.querySelectorAll(".AlanWalker_OnMyWay");
AlanWalker_OnMyWayList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "AlanWalker_OnMyWay"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let Workout_FightBackList = document.querySelectorAll(".Workout_FightBack");
Workout_FightBackList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Workout_FightBack"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let Workout_BestofMeList = document.querySelectorAll(".Workout_BestofMe");
Workout_BestofMeList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Workout_BestofMe"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let Workout_RememberTheNameList = document.querySelectorAll(".Workout_RememberTheName");
Workout_RememberTheNameList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Workout_RememberTheName"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let Workout_HallOfFameList = document.querySelectorAll(".Workout_HallOfFame");
Workout_HallOfFameList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Workout_HallOfFame"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let Workout_GangstasParadiseList = document.querySelectorAll(".Workout_GangstasParadise");
Workout_GangstasParadiseList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Workout_GangstasParadise"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let Workout_CenturiesList = document.querySelectorAll(".Workout_Centuries");
Workout_CenturiesList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Workout_Centuries"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let Workout_BelieverList = document.querySelectorAll(".Workout_Believer");
Workout_BelieverList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Workout_Believer"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let Workout_AnimalsList = document.querySelectorAll(".Workout_Animals");
Workout_AnimalsList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Workout_Animals"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let Workout_ChallaList = document.querySelectorAll(".Workout_Challa");
Workout_ChallaList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Workout_Challa"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let Devotional_MereBholeNathList = document.querySelectorAll(".Devotional_MereBholeNath");
Devotional_MereBholeNathList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Devotional_MereBholeNath"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let Devotional_ShivTandavList = document.querySelectorAll(".Devotional_ShivTandav");
Devotional_ShivTandavList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Devotional_ShivTandav"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let Devotional_BabamBamList = document.querySelectorAll(".Devotional_BabamBam");
Devotional_BabamBamList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Devotional_BabamBam"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let Devotional_RamSiyaRamList = document.querySelectorAll(".Devotional_RamSiyaRam");
Devotional_RamSiyaRamList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Devotional_RamSiyaRam"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let Devotional_ShendurLaalChadhayoList = document.querySelectorAll(".Devotional_ShendurLaalChadhayo");
Devotional_ShendurLaalChadhayoList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Devotional_ShendurLaalChadhayo"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let Devotional_KunFayaKunList = document.querySelectorAll(".Devotional_KunFayaKun");
Devotional_KunFayaKunList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Devotional_KunFayaKun"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let Devotional_JaiShriRamList = document.querySelectorAll(".Devotional_JaiShriRam");
Devotional_JaiShriRamList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Devotional_JaiShriRam"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let Devotional_NamNamoList = document.querySelectorAll(".Devotional_NamNamo");
Devotional_NamNamoList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Devotional_NamNamo"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let KabirSingh_MereSohneyaList = document.querySelectorAll(".KabirSingh_MereSohneya");
KabirSingh_MereSohneyaList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "KabirSingh_MereSohneya"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let KabirSingh_KaiseHuaList = document.querySelectorAll(".KabirSingh_KaiseHua");
KabirSingh_KaiseHuaList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "KabirSingh_KaiseHua"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let KabirSingh_TujheKitnaChahneLageList = document.querySelectorAll(".KabirSingh_TujheKitnaChahneLage");
KabirSingh_TujheKitnaChahneLageList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "KabirSingh_TujheKitnaChahneLage"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let KabirSingh_BekhayaliList = document.querySelectorAll(".KabirSingh_Bekhayali");
KabirSingh_BekhayaliList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "KabirSingh_Bekhayali"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let KabirSingh_TeraBanJaungaList = document.querySelectorAll(".KabirSingh_TeraBanJaunga");
KabirSingh_TeraBanJaungaList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "KabirSingh_TeraBanJaunga"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let Salaar_AakaashaGadiyaList = document.querySelectorAll(".Salaar_AakaashaGadiya");
Salaar_AakaashaGadiyaList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Salaar_AakaashaGadiya"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let SojugadaSoojumalligeList = document.querySelectorAll(".SojugadaSoojumallige");
SojugadaSoojumalligeList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "SojugadaSoojumallige"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let Kantara_KarmaList = document.querySelectorAll(".Kantara_Karma");
Kantara_KarmaList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Kantara_Karma"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let Kantara_SingaraSiriyeList = document.querySelectorAll(".Kantara_SingaraSiriye");
Kantara_SingaraSiriyeList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Kantara_SingaraSiriye"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let Kantara_VarahaRoopamList = document.querySelectorAll(".Kantara_VarahaRoopam");
Kantara_VarahaRoopamList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "Kantara_VarahaRoopam"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let BajiraoMastani_GajananaList = document.querySelectorAll(".BajiraoMastani_Gajanana");
BajiraoMastani_GajananaList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "BajiraoMastani_Gajanana"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let BajiraoMastani_MoheRangDoLaalList = document.querySelectorAll(".BajiraoMastani_MoheRangDoLaal");
BajiraoMastani_MoheRangDoLaalList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "BajiraoMastani_MoheRangDoLaal"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let BajiraoMastani_AayatList = document.querySelectorAll(".BajiraoMastani_Aayat");
BajiraoMastani_AayatList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "BajiraoMastani_Aayat"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let BajiraoMastani_PingaList = document.querySelectorAll(".BajiraoMastani_Pinga");
BajiraoMastani_PingaList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "BajiraoMastani_Pinga"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let BajiraoMastani_DeewaniMastaniList = document.querySelectorAll(".BajiraoMastani_DeewaniMastani");
BajiraoMastani_DeewaniMastaniList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "BajiraoMastani_DeewaniMastani"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let BajiraoMastani_MalhariList = document.querySelectorAll(".BajiraoMastani_Malhari");
BajiraoMastani_MalhariList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "BajiraoMastani_Malhari"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let KGF_MehaboobaList = document.querySelectorAll(".KGF_Mehabooba");
KGF_MehaboobaList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "KGF_Mehabooba"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let KGF_SalaamRockyBhaiList = document.querySelectorAll(".KGF_SalaamRockyBhai");
KGF_SalaamRockyBhaiList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "KGF_SalaamRockyBhai"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let KGF_GaganaNeeList = document.querySelectorAll(".KGF_GaganaNee");
KGF_GaganaNeeList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "KGF_GaganaNee"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let KGF_TheMonsterList = document.querySelectorAll(".KGF_TheMonster");
KGF_TheMonsterList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "KGF_TheMonster"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let KGF_DheeraDheeraList = document.querySelectorAll(".KGF_DheeraDheera");
KGF_DheeraDheeraList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "KGF_DheeraDheera"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let KGF_SulthanaList = document.querySelectorAll(".KGF_Sulthana");
KGF_SulthanaList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "KGF_Sulthana"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let KGF_ToofanList = document.querySelectorAll(".KGF_Toofan");
KGF_ToofanList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "KGF_Toofan"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let ANIMAL_HuaMainList = document.querySelectorAll(".ANIMAL_HuaMain");
ANIMAL_HuaMainList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "ANIMAL_HuaMain"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let ANIMAL_SaariDuniyaJalaaDengeList = document.querySelectorAll(".ANIMAL_SaariDuniyaJalaaDenge");
ANIMAL_SaariDuniyaJalaaDengeList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "ANIMAL_SaariDuniyaJalaaDenge"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

let ANIMAL_ARJANVAILLYList = document.querySelectorAll(".ANIMAL_ARJANVAILLY");
ANIMAL_ARJANVAILLYList.forEach(song =>{
    song.addEventListener("click", ()=>{
        for (let x in SongInfoList){
            if (SongInfoList[x].id == "ANIMAL_ARJANVAILLY"){
                SongInfoList[x].style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                SongInfoList[x].style.display = "none";  
            }
        }
    })
})

// ANIMAL_JamalKudu
document.querySelectorAll(".ANIMAL_JamalKudu").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "ANIMAL_JamalKudu") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// ANIMAL_PehleBhiMain
document.querySelectorAll(".ANIMAL_PehleBhiMain").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "ANIMAL_PehleBhiMain") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// KirikParty_HeWhoAreYou
document.querySelectorAll(".KirikParty_HeWhoAreYou").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "KirikParty_HeWhoAreYou") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// KirikParty_LastBenchuParty
document.querySelectorAll(".KirikParty_LastBenchuParty").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "KirikParty_LastBenchuParty") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// KirikParty_NeechaSullu
document.querySelectorAll(".KirikParty_NeechaSullu").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "KirikParty_NeechaSullu") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// KirikParty_Belageddu
document.querySelectorAll(".KirikParty_Belageddu").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "KirikParty_Belageddu") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// KirikParty_KaagadadaDoniyalli
document.querySelectorAll(".KirikParty_KaagadadaDoniyalli").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "KirikParty_KaagadadaDoniyalli") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// KirikParty_KatheyonduHelide
document.querySelectorAll(".KirikParty_KatheyonduHelide").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "KirikParty_KatheyonduHelide") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Korea_BLACKPINK
document.querySelectorAll(".Korea_BLACKPINK").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "Korea_BLACKPINK") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Korea_DNA
document.querySelectorAll(".Korea_DNA").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "Korea_DNA") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Korea_MICDrop
document.querySelectorAll(".Korea_MICDrop").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "Korea_MICDrop") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Korea_GENTLEMAN
document.querySelectorAll(".Korea_GENTLEMAN").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "Korea_GENTLEMAN") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Korea_BOOMBAYAH
document.querySelectorAll(".Korea_BOOMBAYAH").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "Korea_BOOMBAYAH") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Korea_BoyWithLuv
document.querySelectorAll(".Korea_BoyWithLuv").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "Korea_BoyWithLuv") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Korea_Dynamite
document.querySelectorAll(".Korea_Dynamite").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "Korea_Dynamite") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Korea_KillThisLove
document.querySelectorAll(".Korea_KillThisLove").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "Korea_KillThisLove") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Korea_GANGNAMSTYLE
document.querySelectorAll(".Korea_GANGNAMSTYLE").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "Korea_GANGNAMSTYLE") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Korea_DDUDUDDUDU
document.querySelectorAll(".Korea_DDUDUDDUDU").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "Korea_DDUDUDDUDU") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// AP_MAJHAIL
document.querySelectorAll(".AP_MAJHAIL").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "AP_MAJHAIL") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// AP_SUMMERHIGH
document.querySelectorAll(".AP_SUMMERHIGH").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "AP_SUMMERHIGH") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// AP_BROWNMUNDE
document.querySelectorAll(".AP_BROWNMUNDE").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "AP_BROWNMUNDE") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// AP_DILNU
document.querySelectorAll(".AP_DILNU").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "AP_DILNU") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// AP_True Stories
document.querySelectorAll(".AP_TrueStories").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "AP_TrueStories") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// AP_With You
document.querySelectorAll(".AP_WithYou").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "AP_WithYou") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Shubh_WeRollin
document.querySelectorAll(".Shubh_WeRollin").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "Shubh_WeRollin") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Shubh_Baller
document.querySelectorAll(".Shubh_Baller").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "Shubh_Baller") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Shubh_StillRollin
document.querySelectorAll(".Shubh_StillRollin").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "Shubh_StillRollin") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Shubh_SafetyOff
document.querySelectorAll(".Shubh_SafetyOff").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "Shubh_SafetyOff") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Shubh_Cheques
document.querySelectorAll(".Shubh_Cheques").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "Shubh_Cheques") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Badshah_Paagal
document.querySelectorAll(".Badshah_Paagal").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "Badshah_Paagal") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Badshah_DJWaleyBabu
document.querySelectorAll(".Badshah_DJWaleyBabu").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "Badshah_DJWaleyBabu") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Badshah_AbhiTohParty
document.querySelectorAll(".Badshah_AbhiTohParty").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "Badshah_AbhiTohParty") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Badshah_BadBoyBadGirl
document.querySelectorAll(".Badshah_BadBoyBadGirl").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "Badshah_BadBoyBadGirl") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Badshah_OSajna
document.querySelectorAll(".Badshah_OSajna").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "Badshah_OSajna") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Badshah_Heartless
document.querySelectorAll(".Badshah_Heartless").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "Badshah_Heartless") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Badshah_Mercy
document.querySelectorAll(".Badshah_Mercy").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "Badshah_Mercy") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// YOYO_DheereDheere
document.querySelectorAll(".YOYO_DheereDheere").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "YOYO_DheereDheere") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// YOYO_ChaarBotalVodka
document.querySelectorAll(".YOYO_ChaarBotalVodka").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "YOYO_ChaarBotalVodka") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// YOYO_PartyWithTheBhoothnath
document.querySelectorAll(".YOYO_PartyWithTheBhoothnath").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "YOYO_PartyWithTheBhoothnath") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// YOYO_DesiKalakaar
document.querySelectorAll(".YOYO_DesiKalakaar").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "YOYO_DesiKalakaar") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// YOYO_LOVEDOSE
document.querySelectorAll(".YOYO_LOVEDOSE").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "YOYO_LOVEDOSE") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// YOYO_BlueEyes
document.querySelectorAll(".YOYO_BlueEyes").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "YOYO_BlueEyes") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Boy_deathbed
document.querySelectorAll(".Boy_deathbed").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "Boy_deathbed") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Stellar_Daredevil
document.querySelectorAll(".Stellar_Daredevil").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "Stellar_Daredevil") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Stellar_ElDorado
document.querySelectorAll(".Stellar_ElDorado").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "Stellar_ElDorado") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Stellar_Ashes
document.querySelectorAll(".Stellar_Ashes").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "Stellar_Ashes") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// BoyWithUke_SheSaidNo
document.querySelectorAll(".BoyWithUke_SheSaidNo").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "BoyWithUke_SheSaidNo") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// BoyWithUke_TwoMoons
document.querySelectorAll(".BoyWithUke_TwoMoons").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "BoyWithUke_TwoMoons") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// BoyWithUke_Toxic
document.querySelectorAll(".BoyWithUke_Toxic").forEach(song =>{
    song.addEventListener("click", ()=>{
        SongInfoList.forEach(info =>{
            if (info.id === "BoyWithUke_Toxic") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// BoyWithUke_Understand
document.querySelectorAll(".BoyWithUke_Understand").forEach(song => {
    song.addEventListener("click", () => {
        SongInfoList.forEach(info => {
            if (info.id === "BoyWithUke_Understand") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Arijit_KyaMujhePyar
document.querySelectorAll(".Arijit_KyaMujhePyar").forEach(song => {
    song.addEventListener("click", () => {
        SongInfoList.forEach(info => {
            if (info.id === "Arijit_KyaMujhePyar") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Arijit_TaaronKeShehar
document.querySelectorAll(".Arijit_TaaronKeShehar").forEach(song => {
    song.addEventListener("click", () => {
        SongInfoList.forEach(info => {
            if (info.id === "Arijit_TaaronKeShehar") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Arijit_DILKOKARRARAAYA
document.querySelectorAll(".Arijit_DILKOKARRARAAYA").forEach(song => {
    song.addEventListener("click", () => {
        SongInfoList.forEach(info => {
            if (info.id === "Arijit_DILKOKARRARAAYA") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Diljit_BornToShine
document.querySelectorAll(".Diljit_BornToShine").forEach(song => {
    song.addEventListener("click", () => {
        SongInfoList.forEach(info => {
            if (info.id === "Diljit_BornToShine") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Dilijit_AayaNaTu
document.querySelectorAll(".Dilijit_AayaNaTu").forEach(song => {
    song.addEventListener("click", () => {
        SongInfoList.forEach(info => {
            if (info.id === "Dilijit_AayaNaTu") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Diljit_GHOST
document.querySelectorAll(".Diljit_GHOST").forEach(song => {
    song.addEventListener("click", () => {
        SongInfoList.forEach(info => {
            if (info.id === "Diljit_GHOST") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Diljit_Lemonade
document.querySelectorAll(".Diljit_Lemonade").forEach(song => {
    song.addEventListener("click", () => {
        SongInfoList.forEach(info => {
            if (info.id === "Diljit_Lemonade") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

// Diljit_HassHass
document.querySelectorAll(".Diljit_HassHass").forEach(song => {
    song.addEventListener("click", () => {
        SongInfoList.forEach(info => {
            if (info.id === "Diljit_HassHass") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

document.querySelectorAll(".podacast1").forEach(song => {
    song.addEventListener("click", () => {
        SongInfoList.forEach(info => {
            if (info.id === "podacast1") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

document.querySelectorAll(".podacast2").forEach(song => {
    song.addEventListener("click", () => {
        SongInfoList.forEach(info => {
            if (info.id === "podacast2") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

document.querySelectorAll(".podacast3").forEach(song => {
    song.addEventListener("click", () => {
        SongInfoList.forEach(info => {
            if (info.id === "podacast3") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

document.querySelectorAll(".podacast4").forEach(song => {
    song.addEventListener("click", () => {
        SongInfoList.forEach(info => {
            if (info.id === "podacast4") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

document.querySelectorAll(".podacast5").forEach(song => {
    song.addEventListener("click", () => {
        SongInfoList.forEach(info => {
            if (info.id === "podacast5") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

document.querySelectorAll(".BeerBiceps1").forEach(song => {
    song.addEventListener("click", () => {
        SongInfoList.forEach(info => {
            if (info.id === "BeerBiceps1") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

document.querySelectorAll(".BeerBiceps2").forEach(song => {
    song.addEventListener("click", () => {
        SongInfoList.forEach(info => {
            if (info.id === "BeerBiceps2") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

document.querySelectorAll(".BeerBiceps3").forEach(song => {
    song.addEventListener("click", () => {
        SongInfoList.forEach(info => {
            if (info.id === "BeerBiceps3") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

document.querySelectorAll(".BeerBiceps4").forEach(song => {
    song.addEventListener("click", () => {
        SongInfoList.forEach(info => {
            if (info.id === "BeerBiceps4") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});

document.querySelectorAll(".BeerBiceps5").forEach(song => {
    song.addEventListener("click", () => {
        SongInfoList.forEach(info => {
            if (info.id === "BeerBiceps5") {
                info.style.display = "flex";
                mainSongInfo.style.display = "none";
            } else {
                info.style.display = "none";  
            }
        });
    });
});
// ################################## MAIN page control button activation  ##################################################

let ALLHome = document.getElementById("ALLHome");
let MUSICHome = document.getElementById("MUSICHome");
let PODACASTHome = document.getElementById("PODCASTSHome");

MUSICHome.addEventListener("click",()=>{
    mainpage.scrollTop = 0;
    document.getElementById("PODACASTNAME").style.display = "none";
    document.getElementById("PODACASTS").style.display = "none";
    document.getElementById("MUSICARTISTNAME").style.display = "flex";
    document.getElementById("MUSICARTIST").style.display = "flex";
    document.getElementById("BEERBICEPNAME").style.display = "none";
    document.getElementById("BEERBICEP").style.display = "none";
    document.getElementById("DAILYMIXNAME").style.display = "flex";
    document.getElementById("DAILYMIX").style.display = "flex";
    document.getElementById("RADIONAME").style.display = "flex";
    document.getElementById("RADIO").style.display = "flex";
    document.getElementById("ARTISTNAME").style.display = "none";
    document.getElementById("ARTIST").style.display = "none";
    document.getElementById("FILMNAME").style.display = "flex";
    document.getElementById("FILM").style.display = "flex";
    document.getElementById("MOVIENAME").style.display = "flex";
    document.getElementById("MOVIE").style.display = "flex";
    document.getElementById("MUSICNAME").style.display = "flex";
    document.getElementById("MUSIC").style.display = "flex";
    document.getElementById("MOODNAME").style.display = "flex";
    document.getElementById("MOOD").style.display = "flex";
})

ALLHome.addEventListener("click",()=>{
    mainpage.scrollTop = 0;
    document.getElementById("MUSICARTISTNAME").style.display = "none";
    document.getElementById("MUSICARTIST").style.display = "none";
    document.getElementById("PODACASTNAME").style.display = "flex";
    document.getElementById("PODACASTS").style.display = "flex";
    document.getElementById("BEERBICEPNAME").style.display = "flex";
    document.getElementById("BEERBICEP").style.display = "flex";
    document.getElementById("DAILYMIXNAME").style.display = "flex";
    document.getElementById("DAILYMIX").style.display = "flex";
    document.getElementById("RADIONAME").style.display = "flex";
    document.getElementById("RADIO").style.display = "flex";
    document.getElementById("ARTISTNAME").style.display = "flex";
    document.getElementById("ARTIST").style.display = "flex";
    document.getElementById("FILMNAME").style.display = "flex";
    document.getElementById("FILM").style.display = "flex";
    document.getElementById("MOVIENAME").style.display = "flex";
    document.getElementById("MOVIE").style.display = "flex";
    document.getElementById("MUSICNAME").style.display = "flex";
    document.getElementById("MUSIC").style.display = "flex";
    document.getElementById("MOODNAME").style.display = "flex";
    document.getElementById("MOOD").style.display = "flex";
})
PODACASTHome.addEventListener("click",()=>{
    mainpage.scrollTop = 0;
    document.getElementById("MUSICARTISTNAME").style.display = "none";
    document.getElementById("MUSICARTIST").style.display = "none";
    document.getElementById("PODACASTNAME").style.display = "flex";
    document.getElementById("PODACASTS").style.display = "flex";
    document.getElementById("BEERBICEPNAME").style.display = "flex";
    document.getElementById("BEERBICEP").style.display = "flex";
    document.getElementById("DAILYMIXNAME").style.display = "none";
    document.getElementById("DAILYMIX").style.display = "none";
    document.getElementById("RADIONAME").style.display = "none";
    document.getElementById("RADIO").style.display = "none";
    document.getElementById("ARTISTNAME").style.display = "none";
    document.getElementById("ARTIST").style.display = "none";
    document.getElementById("FILMNAME").style.display = "none";
    document.getElementById("FILM").style.display = "none";
    document.getElementById("MOVIENAME").style.display = "none";
    document.getElementById("MOVIE").style.display = "none";
    document.getElementById("MUSICNAME").style.display = "none";
    document.getElementById("MUSIC").style.display = "none";
    document.getElementById("MOODNAME").style.display = "none";
    document.getElementById("MOOD").style.display = "none";
})


// ################################## Search button 1 activation  #################################################

const searchBox = document.querySelector('.search-box');
const searchBtn = document.querySelector('.search-btn');
const search = document.querySelector('.search');
const closeBtn = document.querySelector('.close-btn');
const hide = document.querySelector('.hide');

searchBtn.addEventListener('click', function(){
  if(search.classList.contains('active')){
    searchBox.value = ''
  }
  else {
    search.classList.add('active');
    searchBox.focus();
    hide.style.display = "none"
  }
})

closeBtn.addEventListener('click', function(){
  search.classList.remove('active');
  searchBox.value = '';
  hide.style.display = "flex"
})

// ################################## Search button 2 activation  #################################################

const searchBox2 = document.querySelector('.search-box2');
const searchBtn2 = document.querySelector('.search-btn2');
const search2 = document.querySelector('.search2');
const closeBtn2 = document.querySelector('.close-btn2');

searchBtn2.addEventListener('click', function(){
  if(search2.classList.contains('active')){
    searchBox2.value = ''
  }
  else {
    search2.classList.add('active');
    searchBox2.focus();
  }
})

closeBtn2.addEventListener('click', function(){
  search2.classList.remove('active');
  searchBox2.value = '';
})

// ################################## Feedback button  activation  #################################################

const feedback_section = document.querySelector('.feedback-section');
const feedback_box = document.querySelector('.feedback');
const feedback_btn = document.querySelector('.feedback-btn');
const feedback_cancel = document.querySelector('.close-feedback');
const Go_home_page = document.querySelectorAll('.Go-home-page');

Go_home_page.forEach(feedback =>{
    feedback.addEventListener("click", ()=>{
        if (feedback.innerHTML == "Go To Home Page"){
            mainpage.style.display = "flex";
            mainpage.scrollTop = 0;
            for (let x in closepages){
                closepages[x].style.display = "none";
            }
        } else{
            feedback.innerHTML = "Go To Home Page";
        }
    })
})


feedback_btn.addEventListener('click', function(){
    if (feedback_section.classList.contains("display-feedback")){
        feedback_section.classList.remove("display-feedback");
        feedback_btn.innerHTML = "Feedback";
        feedback_box.value = ''
        feedback_cancel.classList.remove("display-feedback");
    } else{
        feedback_section.classList.add("display-feedback");
        feedback_btn.innerHTML = "Send";
        feedback_box.value = ''
        feedback_box.focus()
        feedback_cancel.classList.add("display-feedback");
    }
})


feedback_cancel.addEventListener('click', function(){
    feedback_section.classList.remove("display-feedback");
    feedback_btn.innerHTML = "Feedback";
    feedback_cancel.classList.remove("display-feedback");
    feedback_box.value = ''
})

// ################################## showall button  activation  #################################################

let showallDialymix1 =  document.querySelector('#showallDialymix1');
showallDialymix1.addEventListener('click', function(){
    document.getElementById("DAILYMIXNAME").style.display = "flex";
    document.getElementById("DAILYMIX").style.display = "flex";
    document.getElementById("MUSICARTISTNAME").style.display = "none";
    document.getElementById("MUSICARTIST").style.display = "none";
    document.getElementById("RADIONAME").style.display = "none";
    document.getElementById("RADIO").style.display = "none";
    document.getElementById("ARTISTNAME").style.display = "none";
    document.getElementById("ARTIST").style.display = "none";
    document.getElementById("FILMNAME").style.display = "none";
    document.getElementById("FILM").style.display = "none";
    document.getElementById("MOVIENAME").style.display = "none";
    document.getElementById("MOVIE").style.display = "none";
    document.getElementById("MUSICNAME").style.display = "none";
    document.getElementById("MUSIC").style.display = "none";
    document.getElementById("MOODNAME").style.display = "none";
    document.getElementById("MOOD").style.display = "none";
    document.getElementById("BEERBICEPNAME").style.display = "none";
    document.getElementById("BEERBICEP").style.display = "none";
    document.getElementById("PODACASTNAME").style.display = "none";
    document.getElementById("PODACASTS").style.display = "none";
})

let showallpopularartits =  document.querySelector('#showallpopularartits');
showallpopularartits.addEventListener('click', function(){
    document.getElementById("DAILYMIXNAME").style.display = "none";
    document.getElementById("DAILYMIX").style.display = "none";
    document.getElementById("RADIONAME").style.display = "none";
    document.getElementById("RADIO").style.display = "none";
    document.getElementById("ARTISTNAME").style.display = "none";
    document.getElementById("ARTIST").style.display = "none";
    document.getElementById("FILMNAME").style.display = "none";
    document.getElementById("FILM").style.display = "none";
    document.getElementById("MOVIENAME").style.display = "none";
    document.getElementById("MOVIE").style.display = "none";
    document.getElementById("MUSICNAME").style.display = "none";
    document.getElementById("MUSIC").style.display = "none";
    document.getElementById("MOODNAME").style.display = "none";
    document.getElementById("MOOD").style.display = "none";
    document.getElementById("BEERBICEPNAME").style.display = "none";
    document.getElementById("BEERBICEP").style.display = "none";
    document.getElementById("PODACASTNAME").style.display = "none";
    document.getElementById("PODACASTS").style.display = "none";
})


let showallradio =  document.querySelector('#showallradio');
showallradio.addEventListener('click', function(){
    document.getElementById("DAILYMIXNAME").style.display = "none";
    document.getElementById("DAILYMIX").style.display = "none";
    document.getElementById("RADIONAME").style.display = "flex";
    document.getElementById("RADIO").style.display = "flex";
    document.getElementById("ARTISTNAME").style.display = "none";
    document.getElementById("ARTIST").style.display = "none";
    document.getElementById("FILMNAME").style.display = "none";
    document.getElementById("FILM").style.display = "none";
    document.getElementById("MOVIENAME").style.display = "none";
    document.getElementById("MOVIE").style.display = "none";
    document.getElementById("MUSICNAME").style.display = "none";
    document.getElementById("MUSIC").style.display = "none";
    document.getElementById("MOODNAME").style.display = "none";
    document.getElementById("MOOD").style.display = "none";
    document.getElementById("BEERBICEPNAME").style.display = "none";
    document.getElementById("BEERBICEP").style.display = "none";
    document.getElementById("PODACASTNAME").style.display = "none";
    document.getElementById("PODACASTS").style.display = "none";
})


let showallartitis =  document.querySelector('#showallartitis');
showallartitis.addEventListener('click', function(){
    document.getElementById("DAILYMIXNAME").style.display = "none";
    document.getElementById("DAILYMIX").style.display = "none";
    document.getElementById("RADIONAME").style.display = "none";
    document.getElementById("RADIO").style.display = "none";
    document.getElementById("ARTISTNAME").style.display = "flex";
    document.getElementById("ARTIST").style.display = "flex";
    document.getElementById("FILMNAME").style.display = "none";
    document.getElementById("FILM").style.display = "none";
    document.getElementById("MOVIENAME").style.display = "none";
    document.getElementById("MOVIE").style.display = "none";
    document.getElementById("MUSICNAME").style.display = "none";
    document.getElementById("MUSIC").style.display = "none";
    document.getElementById("MOODNAME").style.display = "none";
    document.getElementById("MOOD").style.display = "none";
    document.getElementById("BEERBICEPNAME").style.display = "none";
    document.getElementById("BEERBICEP").style.display = "none";
    document.getElementById("PODACASTNAME").style.display = "none";
    document.getElementById("PODACASTS").style.display = "none";
})


let showallpodcast = document.querySelector('#showallpodcast');
showallpodcast.addEventListener("click",()=>{
    document.getElementById("MUSICARTISTNAME").style.display = "none";
    document.getElementById("MUSICARTIST").style.display = "none";
    document.getElementById("PODACASTNAME").style.display = "flex";
    document.getElementById("PODACASTS").style.display = "flex";
    document.getElementById("BEERBICEPNAME").style.display = "none";
    document.getElementById("BEERBICEP").style.display = "none";
    document.getElementById("DAILYMIXNAME").style.display = "none";
    document.getElementById("DAILYMIX").style.display = "none";
    document.getElementById("RADIONAME").style.display = "none";
    document.getElementById("RADIO").style.display = "none";
    document.getElementById("ARTISTNAME").style.display = "none";
    document.getElementById("ARTIST").style.display = "none";
    document.getElementById("FILMNAME").style.display = "none";
    document.getElementById("FILM").style.display = "none";
    document.getElementById("MOVIENAME").style.display = "none";
    document.getElementById("MOVIE").style.display = "none";
    document.getElementById("MUSICNAME").style.display = "none";
    document.getElementById("MUSIC").style.display = "none";
    document.getElementById("MOODNAME").style.display = "none";
    document.getElementById("MOOD").style.display = "none";
})



let showallbeerbiceps = document.querySelector('#showallbeerbiceps');
showallbeerbiceps.addEventListener("click",()=>{
    document.getElementById("MUSICARTISTNAME").style.display = "none";
    document.getElementById("MUSICARTIST").style.display = "none";
    document.getElementById("PODACASTNAME").style.display = "none";
    document.getElementById("PODACASTS").style.display = "none";
    document.getElementById("BEERBICEPNAME").style.display = "flex";
    document.getElementById("BEERBICEP").style.display = "flex";
    document.getElementById("DAILYMIXNAME").style.display = "none";
    document.getElementById("DAILYMIX").style.display = "none";
    document.getElementById("RADIONAME").style.display = "none";
    document.getElementById("RADIO").style.display = "none";
    document.getElementById("ARTISTNAME").style.display = "none";
    document.getElementById("ARTIST").style.display = "none";
    document.getElementById("FILMNAME").style.display = "none";
    document.getElementById("FILM").style.display = "none";
    document.getElementById("MOVIENAME").style.display = "none";
    document.getElementById("MOVIE").style.display = "none";
    document.getElementById("MUSICNAME").style.display = "none";
    document.getElementById("MUSIC").style.display = "none";
    document.getElementById("MOODNAME").style.display = "none";
    document.getElementById("MOOD").style.display = "none";
})




let showallfilm = document.querySelector('#showallfilm');
showallfilm.addEventListener("click",()=>{
    document.getElementById("MUSICARTISTNAME").style.display = "none";
    document.getElementById("MUSICARTIST").style.display = "none";
    document.getElementById("PODACASTNAME").style.display = "none";
    document.getElementById("PODACASTS").style.display = "none";
    document.getElementById("BEERBICEPNAME").style.display = "none";
    document.getElementById("BEERBICEP").style.display = "none";
    document.getElementById("DAILYMIXNAME").style.display = "none";
    document.getElementById("DAILYMIX").style.display = "none";
    document.getElementById("RADIONAME").style.display = "none";
    document.getElementById("RADIO").style.display = "none";
    document.getElementById("ARTISTNAME").style.display = "none";
    document.getElementById("ARTIST").style.display = "none";
    document.getElementById("FILMNAME").style.display = "flex";
    document.getElementById("FILM").style.display = "flex";
    document.getElementById("MOVIENAME").style.display = "none";
    document.getElementById("MOVIE").style.display = "none";
    document.getElementById("MUSICNAME").style.display = "none";
    document.getElementById("MUSIC").style.display = "none";
    document.getElementById("MOODNAME").style.display = "none";
    document.getElementById("MOOD").style.display = "none";
})

let showallmovie = document.querySelector('#showallmovie');
showallmovie.addEventListener("click",()=>{
    document.getElementById("MUSICARTISTNAME").style.display = "none";
    document.getElementById("MUSICARTIST").style.display = "none";
    document.getElementById("PODACASTNAME").style.display = "none";
    document.getElementById("PODACASTS").style.display = "none";
    document.getElementById("BEERBICEPNAME").style.display = "none";
    document.getElementById("BEERBICEP").style.display = "none";
    document.getElementById("DAILYMIXNAME").style.display = "none";
    document.getElementById("DAILYMIX").style.display = "none";
    document.getElementById("RADIONAME").style.display = "none";
    document.getElementById("RADIO").style.display = "none";
    document.getElementById("ARTISTNAME").style.display = "none";
    document.getElementById("ARTIST").style.display = "none";
    document.getElementById("FILMNAME").style.display = "none";
    document.getElementById("FILM").style.display = "none";
    document.getElementById("MOVIENAME").style.display = "flex";
    document.getElementById("MOVIE").style.display = "flex";
    document.getElementById("MUSICNAME").style.display = "none";
    document.getElementById("MUSIC").style.display = "none";
    document.getElementById("MOODNAME").style.display = "none";
    document.getElementById("MOOD").style.display = "none";
})

let showallworkout = document.querySelector('#showallworkout');
showallworkout.addEventListener("click",()=>{
    document.getElementById("MUSICARTISTNAME").style.display = "none";
    document.getElementById("MUSICARTIST").style.display = "none";
    document.getElementById("PODACASTNAME").style.display = "none";
    document.getElementById("PODACASTS").style.display = "none";
    document.getElementById("BEERBICEPNAME").style.display = "none";
    document.getElementById("BEERBICEP").style.display = "none";
    document.getElementById("DAILYMIXNAME").style.display = "none";
    document.getElementById("DAILYMIX").style.display = "none";
    document.getElementById("RADIONAME").style.display = "none";
    document.getElementById("RADIO").style.display = "none";
    document.getElementById("ARTISTNAME").style.display = "none";
    document.getElementById("ARTIST").style.display = "none";
    document.getElementById("FILMNAME").style.display = "none";
    document.getElementById("FILM").style.display = "none";
    document.getElementById("MOVIENAME").style.display = "none";
    document.getElementById("MOVIE").style.display = "none";
    document.getElementById("MUSICNAME").style.display = "flex";
    document.getElementById("MUSIC").style.display = "flex";
    document.getElementById("MOODNAME").style.display = "none";
    document.getElementById("MOOD").style.display = "none";
})

let showallmood = document.querySelector('#showallmood');
showallmood.addEventListener("click",()=>{
    document.getElementById("MUSICARTISTNAME").style.display = "none";
    document.getElementById("MUSICARTIST").style.display = "none";
    document.getElementById("PODACASTNAME").style.display = "none";
    document.getElementById("PODACASTS").style.display = "none";
    document.getElementById("BEERBICEPNAME").style.display = "none";
    document.getElementById("BEERBICEP").style.display = "none";
    document.getElementById("DAILYMIXNAME").style.display = "none";
    document.getElementById("DAILYMIX").style.display = "none";
    document.getElementById("RADIONAME").style.display = "none";
    document.getElementById("RADIO").style.display = "none";
    document.getElementById("ARTISTNAME").style.display = "none";
    document.getElementById("ARTIST").style.display = "none";
    document.getElementById("FILMNAME").style.display = "none";
    document.getElementById("FILM").style.display = "none";
    document.getElementById("MOVIENAME").style.display = "none";
    document.getElementById("MOVIE").style.display = "none";
    document.getElementById("MUSICNAME").style.display = "none";
    document.getElementById("MUSIC").style.display = "none";
    document.getElementById("MOODNAME").style.display = "flex";
    document.getElementById("MOOD").style.display = "flex";
})