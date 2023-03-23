/** 
* A constructor for the trip model
* @param {string} name - Name of the transport, as shown to the user
* @param {string} type - 'private' or 'public'
* @param {boolean} isFree - Is the transport free of charge? (walking/cycling)
* @param {string} displayIcon - Display Icon asset name
*/

export class Transport {
    constructor(name, type, isFree, displayIcon) {
        this.name = name;
        this.type = type;
        this.isFree = isFree;
        this.displayIcon = displayIcon;
    }
};
