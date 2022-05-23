import {InventoryPage} from "./inventory.page";

export class LoginPage{
    usernameLocator = "#user-name";
    passwordLocator = "#password";
    loginButtonLocator = "#login-button"
    errorContainerLocator = 'div[@class = "error-message-container"]';

    async login(page, username:string, password:string){
        await page.fill(this.usernameLocator, username);
        await page.fill(this.passwordLocator, password);
        await page.locator(this.loginButtonLocator).click();
        return new InventoryPage();
    }
}