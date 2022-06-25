//(async () => {
//    const PORT = "10000";
//    await Promise.all([await require("./build/mongodb")(), await require("./build/express")()])
//        .then(([, app]) => (require("./routes/server.route")(app), app))
//        .then(app => app.listen(PORT))
//        .then(() => console.log(`server is running at ${PORT}`))
//        .catch(error => console.error(error));
//})();
	require('chromedriver');
	var webdriver = require('selenium-webdriver'),
		By = webdriver.By,
		until = webdriver.until;
	var driver = new webdriver.Builder()
		.forBrowser('chrome')
		.build();
	var web = "https://www.ttbdirect.com/ttb/kdw1.39.1#_frmIBPreLogin"
	var username = 'natkingsize2'
	var password = 'natl@2iriY'
	driver.get(web);
	//driver.wait(until.elementLocated(By.id('frmIBPreLogin_txtUserId')), 30000);
	driver.findElement(By.id('frmIBPreLogin_txtUserId')).sendKeys("value",username);
	driver.findElement(By.id('frmIBPreLogin_txtPassword')).sendKeys("value",password);
	driver.findElement(By.id('frmIBPreLogin_btnLogIn')).click();
	//driver.wait(check_title,1000);
