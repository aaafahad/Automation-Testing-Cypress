import Login from "../Page Objects/LoginPage"
import Methods from "../Utilities/CommonMethods"
import InvestmentList from "../Page Objects/InvestmentListPage"
import Overview from "../Page Objects/OverviewPage"
import PriceHistory from "../Page Objects/PriceHistoryPage"
describe('Price History POM' , () =>{
    it.only('T5: Price History Page Test', () => {
        const PriceHistoryPage = new PriceHistory();
        const OverviewPage = new Overview();
        const InvestmentListPage = new InvestmentList();
        const HomePage = new Login();
        const Page = new Methods();
        Page.OpenBaseUrl()

        cy.fixture('LogInData').then((data)  => {
            //verfying with valid username and valid password
            HomePage.SetUserName(data.username)
            HomePage.SetPassword(data.password);
            HomePage.ClickLogIn()
            HomePage.VerifyLogIn()
            Page.Wait()


            })

        InvestmentListPage.VerifyNavigation();
        Page.Wait()
        InvestmentListPage.VerifyInvestmentListBtn();
        Page.Wait()
        OverviewPage.CLickOnTicker();
        PriceHistoryPage.ClickOnPriceHistory();
        PriceHistoryPage.VerifyDividendAccrual();
        Page.Wait()
        PriceHistoryPage.VerifyChart();
        // PriceHistoryPage.VerifyAccrualRate();
        PriceHistoryPage.VerifyPriceHistory();
        PriceHistoryPage.VerifyRefreshBtn();
        PriceHistoryPage.VerifyAddBtn();
        PriceHistoryPage.VerifyExcelBtn();

        })
       
       

    })   