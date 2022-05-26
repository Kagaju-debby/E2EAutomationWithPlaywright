import {CheckoutStepOnePage} from "./checkoutStepOne.page";

export class CartPage{
    checkoutButtonLocator = '#checkout';
    removeBackpageButtonLocator ='#remove-sauce-labs-backpack';
    onesieLocator = '//div[@class="inventory_item_name"]';

    
    async RemoveItemFromCart (page){
        await page.remove(this.removeBackpageButtonLocator).click();

    }
    async ClickCheckout(page){
        await page.locator(this.checkoutButtonLocator).click();
        return new CheckoutStepOnePage();
    }
}