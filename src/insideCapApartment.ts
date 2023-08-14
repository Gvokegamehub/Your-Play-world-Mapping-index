/// <reference types="@workadventure/iframe-api-typings" />

console.log('Script inside captain apartment started successfully');

// Waiting for the API to be ready
WA.onInit().then(() => {
    WA.room.area.onEnter("insideCapApartment").subscribe(() => {
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

        WA.room.showLayer("InCapApartment/equipment3")
        WA.room.showLayer("InCapApartment/equipment2")
        WA.room.showLayer("InCapApartment/equipment1")
        WA.room.showLayer("InCapApartment/inApartment3")
        WA.room.showLayer("InCapApartment/inApartment2")
        WA.room.showLayer("InCapApartment/inApartment1")
        WA.room.showLayer("InCapApartment/carpet")
        WA.room.showLayer("InCapApartment/floor")
        WA.room.showLayer("InCapApartment/water")
        WA.room.showLayer("InCapApartment/collides")
        WA.room.showLayer("InAboveCapApartment/above3")
        WA.room.showLayer("InAboveCapApartment/above2")
        WA.room.showLayer("InAboveCapApartment/above1")
    });

    WA.room.area.onLeave("insideCapApartment").subscribe(() => {
        WA.room.hideLayer("InCapApartment/equipment3")
        WA.room.hideLayer("InCapApartment/equipment2")
        WA.room.hideLayer("InCapApartment/equipment1")
        WA.room.hideLayer("InCapApartment/inApartment3")
        WA.room.hideLayer("InCapApartment/inApartment2")
        WA.room.hideLayer("InCapApartment/inApartment1")
        WA.room.hideLayer("InCapApartment/carpet")
        WA.room.hideLayer("InCapApartment/floor")
        WA.room.hideLayer("InCapApartment/water")
        WA.room.hideLayer("InCapApartment/collides")
        WA.room.hideLayer("InAboveCapApartment/above3")
        WA.room.hideLayer("InAboveCapApartment/above2")
        WA.room.hideLayer("InAboveCapApartment/above1")
        

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