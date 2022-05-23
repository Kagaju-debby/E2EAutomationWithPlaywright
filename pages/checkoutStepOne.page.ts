import {CheckoutStepTwoPage} from "./checkoutStepTwo.page";

export class CheckoutStepOnePage{
    firstNameLocator = "#first-name";
    lastNameLocator = "#last-name";
    zipCodeLocator = "postal-code";
    continueButtonLocator = "#continue";

    async fillCustomerInfo(page, firstname:string, lastname:string, zipcode:string){
        await page.fill(this.firstNameLocator, firstname);
        await page.fill(this.lastNameLocator, lastname);
        await page.fill(this.zipCodeLocator, zipcode);
        await page.locator(this.continueButtonLocator).click();
        return new CheckoutStepTwoPage();
    }

}