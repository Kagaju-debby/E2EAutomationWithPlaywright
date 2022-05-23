import { InventoryPage } from "./inventory.page";

export class InventoryItemPage{
    addToCartBackpackLocator = "#add-to-cart-sauce-labs-backpack";
    backToProductsButttonLocator = "#back-to-products";
    addToCartOnisieLocator = "#add-to-cart-sauce-labs-onesie";

    async addItemToCart (page, locator:string){
        await page.locator(locator).click();
        await page.locator(this.backToProductsButttonLocator).click();
        return new InventoryPage();
    }

    async clickBackToProductsButton (page){
        await page.locator(this.backToProductsButttonLocator).click();
        return new InventoryPage();
    }

}