/// <reference types="@workadventure/iframe-api-typings" />

console.log('Script secret way started successfully');

const layers = [
    "secretway/1",
    "secretway/2",
    "secretway/3",
    "secretway/4",
    "secretway/5",
    "secretway/6",
    "secretway/7",
    "secretway/8",
    "secretway/9",
    "secretway/10",
    "secretway/11",
    "secretway/12"
];

// Waiting for the API to be ready
WA.onInit().then(() => {
    for(const layer of layers){
        WA.room.hideLayer(layer);

        WA.room.onEnterLayer(layer).subscribe(() => {
            WA.room.showLayer(layer);
        });
        WA.room.onLeaveLayer(layer).subscribe(() => {
            setTimeout(() => {
                WA.room.hideLayer(layer);
            }, 100);
        });
    }
});

export {};
