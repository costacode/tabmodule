// Using vanilla js

module.export = ( function (){

    function updatePanels(e, navigation, content) {
        var queryVal = 'div' + e.target.hash;
        e.preventDefault();

        navigation.querySelector('a.tablist__tab__link--active').classList.remove('tablist__tab__link--active');
        e.target.classList.add('tablist__tab__link--active');

        console.log(queryVal);

        content.querySelector('div.tabpanel--active').classList.remove('tabpanel--active');
        content.querySelector(queryVal).classList.add('tabpanel--active');

        return queryVal;
    }

    // store nodes
    var moduleContainer = document.getElementsByClassName('module__container--centered')[0];
    var tabList = moduleContainer.querySelector('.tablist');
    var tabPanels = tabList.nextElementSibling; 

    tabList.addEventListener('click', function(event) {
        // if click on a tab
        if (event.target.tagName.toLowerCase() === 'a') {
            // change tabpanels
            var functionVar = updatePanels(event, tabList, tabPanels);
        }
    }); 
} )();
