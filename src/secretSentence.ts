/// <reference types="@workadventure/iframe-api-typings" />

import { Popup } from "@workadventure/iframe-api-typings";

console.log('Script secret sentence started successfully');

let words = new Map([
    ["word1", 'NFT'],
    ["word2", 'Biarritz'],
    ["word3", '2023'],
    ["word4", 'c\'est'],
    ["word5", 'la'],
    ["word6", 'folie'],
]);

let formPopup: Popup|undefined = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    if(!WA.player.state.sentance){
        WA.player.state.sentance = {};
    }
    console.log('WA.player.state.sentance', WA.player.state.sentance);
    for(const area of [...words.keys()]){
        WA.room.area.onEnter(area).subscribe(() => {
            console.log(`You fin the word ${words.get(area)}!`);
            // @ts-ignore
            (WA.player.state.sentance as object)[words.get(area) as string] = true;
            console.log('WA.player.state.sentance', WA.player.state.sentance);
        });
    }

    WA.room.area.onEnter('form').subscribe(() => {
        // @ts-ignore
        if(WA.player.state.sentance.NFT && WA.player.state.sentance.Biarritz && WA.player.state.sentance['2023'] && WA.player.state.sentance['c\'est'] && WA.player.state.sentance.la && WA.player.state.sentance.folie){
            formPopup = WA.ui.openPopup("formPopup", "Bravo tu as trouvé le mot de passe !", [
                {
                    label: "Get your NFT",
                    className: "primary",
                    callback: (popup => {
                        // go to form
                        WA.nav.openCoWebSite('...');
                        popup.close();
                        formPopup = undefined;
                    })
                }
            ]);
        }else{
            formPopup = WA.ui.openPopup("formPopup", "Il te manque des mots pour accéder au formulaire", [
                {
                    label: "Continue",
                    className: "primary",
                    callback: (popup => {
                        popup.close();
                        formPopup = undefined;
                    })
                }
            ]);
        }
    });

    WA.room.area.onLeave('form').subscribe(() => {
        if(formPopup !== undefined){
            formPopup.close();
            formPopup = undefined;
        }
    });
});

export {};
