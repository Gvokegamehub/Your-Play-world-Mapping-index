/// <reference types="@workadventure/iframe-api-typings" />

import { Popup } from "@workadventure/iframe-api-typings";

console.info('Script secret sentence started successfully');

let words = new Set([
    "word1",
    "word2",
    "word3",
    "word4",
    "word5",
    "word6",
]);

interface Sentance{
    word1: boolean,
    word2: boolean,
    word3: boolean,
    word4: boolean,
    word5: boolean,
    word6: boolean,
}

let formPopup: Popup|undefined = undefined;
let timeOutIndice: NodeJS.Timeout|undefined;
let timeOutIndiceEverySecond: NodeJS.Timeout|undefined;
let lastIndice = "noindice";

// Waiting for the API to be ready
WA.onInit().then(() => {
    if(!WA.player.state.sentance){
        WA.player.state.sentance = {
            word1: false,
            word2: false,
            word3: false,
            word4: false,
            word5: false,
            word6: false,
        };
    }
    for(const word of [...words.keys()]){
        WA.room.area.onEnter(word).subscribe(() => {
            console.info(`You fin the word ${word}!`);
            // @ts-ignore
            if((WA.player.state.sentance as Sentance)[word] === true) return;
            // @ts-ignore
            (WA.player.state.sentance as Sentance)[word] = true;
            const url = new URL(WA.room.mapURL);
            const wordsFound = Object.keys(WA.player.state.sentance as Sentance).filter((word) => {
                // @ts-ignore
                return (WA.player.state.sentance as Sentance)[word] === true;
            });
            WA.ui.modal.openModal({
                title: "Félicitation, vous avez trouvé un objet 🎉",
                src: `${url.protocol}//${url.host}${url.protocol === 'https:' ? "/nftbiarritz-game/" : '/'}src/secretSentence/index.html?current=${word}&words=${wordsFound.join(",")}`,
                allowApi: true,
                allow: "microphone; camera",
                position: "center",
            }, () => {
                getIndiceEverySecond();
                WA.ui.modal.closeModal();
            });
            lastIndice = "noindice";
            stopIndiceEverySecond();
            WA.ui.banner.closeBanner();
        });
    }

    WA.room.area.onEnter('form').subscribe(() => {
        if(
            (WA.player.state.sentance as Sentance).word1 && 
            (WA.player.state.sentance as Sentance).word2 && 
            (WA.player.state.sentance as Sentance).word3 && 
            (WA.player.state.sentance as Sentance).word4 && 
            (WA.player.state.sentance as Sentance).word5 && 
            (WA.player.state.sentance as Sentance).word6
        ){
            stopIndiceEverySecond();
            formPopup = WA.ui.openPopup("formPopup", "Bravo tu as trouvé la phrase secrète 🎉🎉", [
                {
                    label: "Get your NFT",
                    className: "primary",
                    callback: (popup => {
                        // go to form
                        WA.ui.modal.openModal({
                            title: "Get your NFT",
                            src: "https://blocksurvey.io/nftbiarritz-2023-VCYczIDFT2qN2NkIyoF99A-o",
                            allowApi: true,
                            allow: "microphone; camera",
                            position: "center",
                        }, () => {
                            WA.ui.modal.closeModal();
                        });
                        popup.close();
                        formPopup = undefined;
                    })
                }
            ]);
        }else{
            formPopup = WA.ui.openPopup("formPopup", "Il te manque des mots pour accéder au formulaire 😭😭\n\rComme nous sommes très sympas, un indice va apparaître 💪", [
                {
                    label: "Continue",
                    className: "primary",
                    callback: (popup => {
                        popup.close();
                        formPopup = undefined;
                    })
                }
            ]);
            if(timeOutIndice){
                clearTimeout(timeOutIndice);
            }
            timeOutIndice = setTimeout(() => {
                WA.ui.banner.openBanner({
                    id: "indice",
                    bgColor: "#1c1c29",
                    textColor: "#ffffff",
                    text: `Ton indice : ${getIndice(true)}`,
                    closable: true,
                });
            }, 1000);
        }
    });

    WA.room.area.onLeave('form').subscribe(() => {
        if(formPopup !== undefined){
            formPopup.close();
            formPopup = undefined;
        }
        WA.ui.modal.closeModal();
    });

    getIndiceEverySecond();
});

// function to get an indice every 20 seconds
function stopIndiceEverySecond(){
    if(timeOutIndiceEverySecond){
        clearTimeout(timeOutIndiceEverySecond);
    }
}
function getIndiceEverySecond(){
    if(timeOutIndiceEverySecond){
        clearTimeout(timeOutIndiceEverySecond);
    }
    timeOutIndiceEverySecond = setTimeout(() => {
        const indice = getIndice();
        if(indice != undefined){
            WA.ui.banner.openBanner({
                id: "indice",
                bgColor: "#1c1c29",
                textColor: "#ffffff",
                text: `Ton indice : ${indice}`,
                closable: true,
            });
        }
        return getIndiceEverySecond();
    }, 20000);
}

function getIndice(force = false): string|undefined{
    if(
        (WA.player.state.sentance as Sentance).word1 == undefined && 
        (lastIndice != "word1" || force)
    ){
        lastIndice = "word1";
        return "Est-ce que tu aimes les jeux d'échecs avec le capitaine sur le pont ?";
    }
    if(
        (WA.player.state.sentance as Sentance).word1 && 
        (WA.player.state.sentance as Sentance).word2 == undefined && 
        (lastIndice != "word2" || force)
    ){
        lastIndice = "word2";
        return "Tu pourras découvrir un certain goût pour la chasse en soute !";
    }
    if(
        (WA.player.state.sentance as Sentance).word1 && 
        (WA.player.state.sentance as Sentance).word2 && 
        (WA.player.state.sentance as Sentance).word3 == undefined && 
        (lastIndice != "word3" || force)
    ){
        lastIndice = "word3";
        return "Un trésor se trouve à la vue de tous !";
    }
    if(
        (WA.player.state.sentance as Sentance).word1 && 
        (WA.player.state.sentance as Sentance).word2 && 
        (WA.player.state.sentance as Sentance).word3 && 
        (WA.player.state.sentance as Sentance).word4 == undefined && 
        (lastIndice != "word4" || force)
    ){
        lastIndice = "word4";
        return "Bien caché, il faut s'aventurer dans les coins les plus sombres de la soute !";
    }
    if(
        (WA.player.state.sentance as Sentance).word1 && 
        (WA.player.state.sentance as Sentance).word2 && 
        (WA.player.state.sentance as Sentance).word3 && 
        (WA.player.state.sentance as Sentance).word4 && 
        (WA.player.state.sentance as Sentance).word5 == undefined && 
        (lastIndice != "word5" || force)
    ){
        lastIndice = "word5";
        return "Est-ce que tu as déjà vu les appartements du capitaine et le trésor qu'il renferme ?"
    }
    if(
        (WA.player.state.sentance as Sentance).word1 && 
        (WA.player.state.sentance as Sentance).word2 && 
        (WA.player.state.sentance as Sentance).word3 && 
        (WA.player.state.sentance as Sentance).word4 && 
        (WA.player.state.sentance as Sentance).word5 && 
        (WA.player.state.sentance as Sentance).word6 == undefined && 
        (lastIndice != "word6" || force)
    ){
        lastIndice = "word6";
        return "Un un bateau, un capitaine, un trésor, un chemin secret, une île déseret... Tu pourras y faire une prière !"
    }
    if(
        (WA.player.state.sentance as Sentance).word1 && 
        (WA.player.state.sentance as Sentance).word2 && 
        (WA.player.state.sentance as Sentance).word3 && 
        (WA.player.state.sentance as Sentance).word4 && 
        (WA.player.state.sentance as Sentance).word5 && 
        (WA.player.state.sentance as Sentance).word6 && 
        lastIndice != "form"
    ){
        lastIndice != "form";
        return "La fin n'est plus très loin !";
    }
    return;
}

export {};
