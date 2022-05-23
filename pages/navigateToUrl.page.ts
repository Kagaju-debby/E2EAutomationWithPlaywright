import {LoginPage} from "./login.page";

export class NavigateToUrl{
    async login(page){
        await page.goto("https://www.saucedemo.com/");
        return new LoginPage();

    }
}