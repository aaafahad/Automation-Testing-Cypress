
import Login from "../Page Objects/LoginPage"
import Methods from "../Utilities/CommonMethods"
describe('LogInTest POM' , () =>{
    it.only('LogInTest', () => {

        const HomePage = new Login();
        const Page = new Methods();

        Page.OpenBaseUrl()
        Page.Wait()

        cy.fixture('LogInData').then((data)  => {

            HomePage.VerifyUnifyLogo()
            HomePage.VerifyUnifyText()
            HomePage.VerifyUnifyWelcomeText()
            HomePage.VerifyBackgroundImg()
       
            //verifying with invalid username and valid password
            HomePage.SetUserName("abcd")
            HomePage.SetPassword("123")
            HomePage.ClickLogIn()
            HomePage.GetAlertMessage()
            Page.Reload()
            Page.Wait()
            //verifying with valid username and invalid password
            HomePage.SetUserName("aafahad")
            HomePage.SetPassword("55555555555")
            HomePage.ClickLogIn()
            HomePage.GetAlertMessage()
            Page.Reload()
            Page.Wait()
            //verifying with valid username and valid password
            HomePage.SetUserName(data.username)
            HomePage.SetPassword(data.password);
            HomePage.ClickLogIn()
            Page.Wait()
            HomePage.VerifyLogIn()
            Page.Wait()
            Page.NavigateBack()
         


            })
        })
    })       
