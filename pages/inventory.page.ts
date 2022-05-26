import {InventoryItemPage} from "./inventoryItem.page";
import {CartPage} from "./cart.page";

export class InventoryPage{
    cartLocator = 'a[@class = "shopping_cart_link"]';
    filterLocator = 'select[@class = "product_sort_container"]';

    async findItemByName(page, itemName:string){
        await page.locator(`text = ${itemName}`).click();
        return new InventoryItemPage();
    }

    async clickToCart(page){
        await page.locator(this.cartLocator).click();
        return new CartPage();
    }

    async filterItemByName(page, itemValue:string){
        await page.selectOption(this.filterLocator, itemValue);

    }

}

  