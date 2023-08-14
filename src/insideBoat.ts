/// <reference types="@workadventure/iframe-api-typings" />

console.log('Script inside boat started successfully');

// Waiting for the API to be ready
WA.onInit().then(() => {
    WA.room.area.onEnter("insideShip").subscribe(() => {
        WA.room.showLayer("Settings/inCollide")
        WA.room.showLayer("InUnder/inBoatFloor1")
        WA.room.showLayer("InUnder/inBoatFloor2")
        WA.room.showLayer("InUnder/inBoatWall1")
        WA.room.showLayer("InUnder/inBoatWall2")
        WA.room.showLayer("InUnder/inBoatDetails1")
        WA.room.showLayer("InUnder/inBoatDetails2")
        WA.room.showLayer("InAbove/inBoatAboveWall")
        WA.room.showLayer("InAbove/inBoatAbove1")
        WA.room.showLayer("InAbove/inBoatAbove2")

        WA.room.hideLayer("Settings/outCollide")
        WA.room.hideLayer("OutAbove/outBoatAbove1")
        WA.room.hideLayer("OutAbove/outBoatAbove2")
        WA.room.hideLayer("OutAbove/outBoatAbove3")
        WA.room.hideLayer("OutAbove/outBoatAbove4")
        WA.room.hideLayer("OutAbove/outBoatAbove5")
        WA.room.hideLayer("OutAbove/outBoatAbove6")
        WA.room.hideLayer("OutAbove/outBuilding2")
        WA.room.hideLayer("OutAbove/outBuilding1")
        WA.room.hideLayer("OutAbove/outTent2")
        WA.room.hideLayer("Clouds")
        WA.room.hideLayer("Lights")
    });

    WA.room.area.onLeave("insideShip").subscribe(() => {
        WA.room.hideLayer("Settings/inCollide")
        WA.room.hideLayer("InUnder/inBoatFloor1")
        WA.room.hideLayer("InUnder/inBoatFloor2")
        WA.room.hideLayer("InUnder/inBoatWall1")
        WA.room.hideLayer("InUnder/inBoatWall2")
        WA.room.hideLayer("InUnder/inBoatDetails1")
        WA.room.hideLayer("InUnder/inBoatDetails2")
        WA.room.hideLayer("InAbove/inBoatAboveWall")
        WA.room.hideLayer("InAbove/inBoatAbove1")
        WA.room.hideLayer("InAbove/inBoatAbove2")

        WA.room.showLayer("Settings/outCollide")
        WA.room.showLayer("OutAbove/outBoatAbove1")
        WA.room.showLayer("OutAbove/outBoatAbove2")
        WA.room.showLayer("OutAbove/outBoatAbove3")
        WA.room.showLayer("OutAbove/outBoatAbove4")
        WA.room.showLayer("OutAbove/outBoatAbove5")
        WA.room.showLayer("OutAbove/outBoatAbove6")
        WA.room.showLayer("OutAbove/outBuilding2")
        WA.room.showLayer("OutAbove/outBuilding1")
        WA.room.showLayer("OutAbove/outTent2")
        WA.room.showLayer("Clouds")
        WA.room.showLayer("Lights")
    })
});