module.exports = {
    url: 'https://www.expedia.com/',
    elements: {
        logo: 'img[itemprop="image"]',
        flyingFrom: 'input[id="flight-origin-flp"]',
        flyingTo: 'input[id="flight-destination-flp"]',
        departing: 'input[id="flight-departing-flp"]',
        returning: 'input[id="flight-returning-flp"]',
        numberOfPeople: 'div[id="traveler-selector-hp-flight"]',
        search: 'button[class="btn-primary btn-action gcw-submit"]',
        flight: 'button[data-lob="flight"]',
        select: 'button[data-omniture-rfrr="Select.Offer1.Cheapest"]',
        select2: 'button[data-omniture-rfrr="Select.Offer0.BestValue"]',
        bundle: 'a[id="primary-header-package"]',
        hotels: 'a[id="primary-header-hotel"]',
        cars: 'a[id="primary-header-car"]',
        flightsTab: 'a[id="primary-header-flight"]',
        cruises: 'a[id="primary-header-cruise"]',
        tripSummary: 'h2[class="tripSummaryHeader"]',
    },// elements
}// exports