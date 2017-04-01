module.export = ( function (){

    // store nodes - querySelector returns the first matching element
    var tabList = document.querySelector('.tablist');
    var tabPanels = document.querySelector('.tabpanels');

    // function to update panels with parameters
    function updateTabs(e, navtab, content) {
        // use hash property to call anchor targets
        var anchorVal = 'div' + e.target.hash;
        e.preventDefault();

        // update active class on clicked tabs, classList is supported on IE10+
        // classList API: https://www.sitepoint.com/exploring-classlist-api/ 
        navtab.querySelector('a.tablist__tab__link--active').classList.remove('tablist__tab__link--active');
        e.target.classList.add('tablist__tab__link--active');

        // update panel content
        content.querySelector('div.tabpanel--active').classList.remove('tabpanel--active');
        content.querySelector(anchorVal).classList.add('tabpanel--active');
    }

    // so, what we want: if event.target is anchor tag show new panel    
    tabList.addEventListener('click', function(event) {

        if ( event.target.tagName.toLowerCase() === 'a' ) {
            // update panels - call the function adding values to parameters
            updateTabs(event, tabList, tabPanels);
        }
    }, false); 
} )();
