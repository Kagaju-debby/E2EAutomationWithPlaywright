import {CheckoutStepOnePage} from "./checkoutStepOne.page";

export class CartPage{
    checkoutButtonLocator = "#checkout";
    removeBackpageButtonLocator ="#remove-sauce-labs-backpack";
    
    async RemoveItemFromCart (page){
        await page.remove(this.removeBackpageButtonLocator).click();

    }
    async ClickCheckout(page){
        await page.locator(this.checkoutButtonLocator).click();
        return new CheckoutStepOnePage();
    }
}