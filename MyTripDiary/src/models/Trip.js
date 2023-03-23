/** 
* A constructor for the trip model
* @param {string} name - Trip Name, as given by the user
* @param {string} originName - Name of origin point
* @param {{x: number, y: number}} originCoor - x,y coordinate for the origin point
* @param {string} destName - Name of destination point
* @param {{x: number, y: number}} destCoor - x,y coordinate for the destination point 
*/

export class Trip {
    constructor(name, originName, originCoor, destName, destCoor) {
        this.name = name;
        this.originName = originName;
        this.originCoor = originCoor;
        this.destName = destName;
        this.destCoor = destCoor;
    }
};

