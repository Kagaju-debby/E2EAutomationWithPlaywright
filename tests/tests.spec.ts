import { expect, test, Page } from '@playwright/test';
import requiredData from '../data/requiredData.json';
import { NavigateToUrl } from '../pages/navigateToUrl.page';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { InventoryItemPage } from '../pages/inventoryItem.page';
import { CheckoutStepOnePage } from '../pages/checkoutStepOne.page';
import { CheckoutStepTwoPage } from '../pages/checkoutStepTwo.page';
import { CheckoutCompletePage } from '../pages/checkoutComplete.page';
import { CartPage } from '../pages/cart.page';


//class instantiation
const navigateToUrl = new NavigateToUrl();
const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const inventoryItemPage = new InventoryItemPage();
const checkoutStepOnePage = new CheckoutStepOnePage();
const checkoutStepTwoPage = new CheckoutStepTwoPage();
const checkoutCompletePage = new CheckoutCompletePage();
const cartPage = new CartPage();

test.beforeEach(async ({ page }) => {
    await navigateToUrl.gotoUrl(page);
    await expect(page).toHaveTitle(requiredData.homePageTabTitle);
    await expect(page).toHaveURL(requiredData.Url);
    
});

test.describe('validation 1', ()=>{
    test('should allow to purchase item', async({page}) => {
        //Login as a standard user
        await loginPage.login(page, requiredData.userNameStandardUser, requiredData.password);

        //find item by name and add it to cart
        await inventoryPage.findItemByName(page, requiredData.item1_name);
        await inventoryItemPage.addItemToCart(page, inventoryItemPage.backToProductsButttonLocator);
        await inventoryItemPage.clickBackToProductsButton(page);

        

    });
});








