// Lack of time and skill to add own functionality. 
// Code source: https://codepen.io/brianhan/pen/xbqRLe

module.export = ( function (){
    var tabs = {
        tab1: document.getElementById('tab-1'),
        tab2: document.getElementById('tab-2'), 
        tab3: document.getElementById('tab-3'),
        tab4: document.getElementById('tab-4')
    }

    var content = {
        panelone: document.getElementById("panel-1"),
        paneltwo: document.getElementById("panel-2"),
        panelthree: document.getElementById("panel-3"),
        panelfour: document.getElementById("panel-4")   
    }

    for (tab in tabs) {
        tabs[tab].addEventListener('click', function(event) {
            event.preventDefault();
            var $this = this;
            clearSelected();
            $this.classList.add("tab-active");

            clearActive();

            if ($this.id === "tab-1") {
            content.panelone.classList.add("tabpanel__active");
            } else if ($this.id === "tab-2") {
            content.paneltwo.classList.add("tabpanel__active");
            } else if ($this.id === "tab-3") {
            content.panelthree.classList.add("tabpanel__active");
            } else {
            content.panelfour.classList.add("tabpanel__active");
            }
        });
    }

    function clearSelected() {
        for (tab in tabs) {
            tabs[tab].classList.remove("tab-active");
        }
    }
    function clearActive() {
        for (element in content) {
            content[element].classList.remove("tabpanel__active");
        }
    }
} )();
