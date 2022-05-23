import {LoginPage} from "./login.page";

export class NavigateToUrl{
    async gotoUrl(page){
        await page.goto("https://www.saucedemo.com/");
        return new LoginPage();

    }
}