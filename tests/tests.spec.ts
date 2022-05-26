import { expect, test, Page } from '@playwright/test';
import requiredData from "../data/requiredData.json";
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
const cartPage = new CartPage();
const checkoutStepOnePage = new CheckoutStepOnePage();
const checkoutStepTwoPage = new CheckoutStepTwoPage();
const checkoutCompletePage = new CheckoutCompletePage();

test.beforeEach(async({page})=>{
    await navigateToUrl.gotoUrl(page);
    await expect(page).toHaveURL(requiredData.Url);
    await expect(page).toHaveTitle(requiredData.homePageTabTitle);

});

test.describe('Validation 1', ()=>{
    test('should allow to purchase item', async({page})=>{
        //step1: login as a standard user
        await loginPage.login(page,requiredData.userNameStandardUser, requiredData.password);

        //Step2:Find item by name and add it to chart
        await inventoryPage.findItemByName(page, requiredData.item1_name);
        await inventoryItemPage.addItemToCart(page, inventoryItemPage.addToCartBackpackLocator);
        await inventoryItemPage.clickBackToProductsButton(page);

        //Step3: Find the second item and add it to chart as well
        await inventoryPage.findItemByName(page, requiredData.item2_name);
        await inventoryItemPage.addItemToCart(page, inventoryItemPage.addToCartOnisieLocator);
        await inventoryItemPage.clickBackToProductsButton(page);

        //Step4: Go to chart
        await inventoryPage.clickToCart(page);

        //Step5: find item by name and remove it from chart
        await inventoryPage.findItemByName(page, requiredData.item1_name);
        await cartPage.RemoveItemFromCart(page);

        //Step6: Validate in the checkout overview that it only contains items you want to purchase
        await inventoryPage.clickToCart(page);
        await expect(page.locator(cartPage.onesieLocator)).toHaveText(requiredData.item2_name);

        //Step7: Validate in the checkout overview that item total is right
        await cartPage.ClickCheckout(page);
        checkoutStepOnePage.fillCustomerInfo(
            page,
            requiredData.firstname,
            requiredData.lastname,
            requiredData.zipcode
        );
        await expect(page.locator(checkoutStepTwoPage.subItemTotalLocator)).toHaveText(requiredData.itemLeftInCartPrice);
        await expect(page.locator(checkoutStepTwoPage.itemTotalLocator)).toHaveText(requiredData.itemTotalPrice);

        //Step8: finish the purchase
        await checkoutStepTwoPage.clickFinishButton(page);

        //Validate that the website confirms the order
        await expect(page.locator(checkoutCompletePage.checkoutCompleteTitleLocator)).toHaveText(requiredData.checkoutCompleteTitle);
        await expect(page.locator(checkoutCompletePage.successMessageLocator)).toHaveText(requiredData.successOrderingMessage);
            



        
    })
} )



