import {CheckoutCompletePage} from "./checkoutComplete.page";

export class CheckoutStepTwoPage{
    subItemTotalLocator = '//div[@class = "summary_subtotal_label"]';
    itemTotalLocator = '//div[@class = "summary_total_label"]';
    finishButtonLocator = "#finish";

    async checkout(page){
        await page.locator(this.finishButtonLocator).click();
        return new CheckoutCompletePage();
    }

}