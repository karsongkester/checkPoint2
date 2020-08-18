var autoBasics = {}
module.exports = {
    beforeEach: browser => {
       autoBasics = browser.page.autoBasicsPage()
       autoBasics
        .navigate()
    },
    after: browser => {
        autoBasics
        .end()
    },
    'Evens Odds': browser =>{
        autoBasics
            .setValue('@evenOddInput' , '1 , 2')
            .click('@evenOddButton')
            .expect.element('@evenResults').text.to.contain("Evens: [2]")
        autoBasics
            .expect.element('@oddResults').text.to.contain("Odds: [1]")
    },
    'Filter Objects': browser => {
        autoBasics
            .setValue('@objectFilterInput', 'hairColor')
            .click("@objectFilterButton")
            .expect.element('@objectFilterResults').text.to.contain('{ "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }')
    },
    'Filter String': browser =>{
        autoBasics
            .setValue('@nameFilterInput' , 'James')
            .click('@nameFilterButton')
            .expect.element('@nameFilterResults').text.to.contain('Filtered Names: [ "James" ]')
    },
    'Palindrome': browser =>{
        autoBasics
            .setValue('@palindromeInput', 'nasan')
            .click('@palindromeButton')
            .expect.element('@palindromeResults').text.to.contain('true')
    },
    'Sum': browser =>{
        autoBasics
            .setValue('@sumInput1' , '2')
            .setValue('@sumInput2' , '2')
            .click('@sumButton')
            .expect.element('@sumResults').text.to.contain('Sum: 4')
    }
}