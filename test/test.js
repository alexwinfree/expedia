var pageObject= {}
module.exports={
beforeEach: browser => {
pageObject=browser.page.expedia()
pageObject
.navigate()
}, // beforeEach
after: browser => {
    browser.end()
},// after 
'Page Load': browser => {
pageObject
.waitForElementPresent('@logo',7000)
},// page load
'Search flight': browser=> {
pageObject
.click('@flight')
.setValue('@flyingFrom','Salt Lake City')
.setValue('@flyingTo','San Diego')
.setValue('@departing','10/15/2018')
.setValue('@returning','12/15/2018')
.click('@search')
browser.pause(5000)
},// search flight
'Select flight depature and return': browser=> {
pageObject
.click('@select')
// same selector on second page
.click('@select')
},// select flight
'payment page': browser=> {
pageObject
.waitForElementPresent('@logo',5000)
},//
}// exprots