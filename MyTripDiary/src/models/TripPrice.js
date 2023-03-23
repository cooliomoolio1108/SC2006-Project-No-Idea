/** 
* A constructor for the trip pricing model
* @param {number} estimatedPrice - Estimated Trip Price, as determined by the app
* @param {number} userInputPrice - Price given by user
*/

export class TripPrice {
    constructor(estimatedPrice, userInputPrice) {
        this.estimatedPrice = estimatedPrice;
        this.userInputPrice = userInputPrice;
    }
};

