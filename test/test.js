var pageObject = {}
module.exports = {
    beforeEach: browser => {
        pageObject = browser.page.expedia()
        pageObject
            .navigate()
    }, // beforeEach
    after: browser => {
        browser.end()
    },// after 
    'Page Load and general UI': browser => {
        pageObject
            .waitForElementPresent('@logo', 7000)
            .waitForElementPresent('@bundle', 7000)
            .waitForElementPresent('@hotels', 7000)
            .waitForElementPresent('@cars', 7000)
            .waitForElementPresent('@flightsTab', 7000)
            .waitForElementPresent('@cruises', 7000)
            .click('@flightsTab')
        pageObject.expect.element('@flyingFrom').text.to.equal('')
        pageObject.expect.element('@flyingTo').text.to.equal('')
        pageObject.expect.element('@departing').text.to.equal('')
        pageObject.expect.element('@returning').text.to.equal('')
    },// page load
    'Set information': browser => {
        pageObject
            .click('@flightsTab')
            .setValue('@flyingFrom', 'Salt Lake City, UT, United States (SLC)')
            .setValue('@flyingTo', 'Sacramento, CA (SMF-Sacramento Intl.)')
            .setValue('@departing', '10/15/2018')
            .clearValue('@returning')
            .setValue('@returning', '12/20/2018')
            .click('@search')


    },// search flight
    'Select flight depature,return dates and payment page': browser => {
        pageObject
            .click('@search')
            .waitForElementPresent('@select', 4000)
            .click('@select')
            .waitForElementPresent('@select2', 4000)
            .click('@select2')
        browser.pause(8000)
    },// select flight depature,return dates and payment

}// exprots