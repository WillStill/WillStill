// Adapted Code from Jen Hamon
// github.com/jhamon
// Rewritten and modified using vanilla javascript

var refBtn = document.getElementById('refBtn');
var wordlist = [
    "Making Visualizations.",
	"PSU Graduate",
    "How to Marquee in HTML?",
    "Appreciator of XML.",
    "Check out my Github Projects!",
    "Consider User Experience.",
    "Python Forever!",
    "HDF5 is Surprisingly Versatile.",
    "I enjoy working in R.",
    "Can you see this?",
]

function buildSlotItem(text) {
    var div = document.createElement('div');
    div.classList.add('slot_item');
    div.textContent = text;

    return div

    //return document.createElement('div').classList.add('slot_item')
    //    .textContent(text)
}

function buildSlotContents(container, wordlist) {
    var items = wordlist.map(function (text) {
        return buildSlotItem(text);
    });
    items.forEach(function(item){
        container.appendChild(item);
    });
    //console.log(container.innerHTML);

    //$items = wordlist.map(buildSlotItem);
    //$container.append($items);
}

function popPushNItems(container, n) {
    var children = container.querySelectorAll('.slot_item');
    var totalChildren = children.length;

    for (var i = 0; i < n; i++) {
        if (children.length > 1) {
            container.appendChild(children[i]);
        }
    }

    if (n === totalChildren) {
        popPushNItems(container, 1);
    }

    //$children = $container.find('.slot_item');
    //$children.slice(0, n).insertAfter($children.last());

    //if (n === $children.length) {
    //    popPushNItems($container, 1);
    //}

}

function rotateContents(container, n) {
    popPushNItems(container, n);
    //console.log("items popPushed")
    container.style.top = '0';
}

function randomSlotttIndex(max) {
    //console.log("max", max);
    var randIndex = Math.floor(Math.random() * max);
    return randIndex > 10 ? randIndex : randomSlotttIndex(max);
}

function animate() {
    var totalSlotItems = wordbox.querySelectorAll('.slot_item');
    var wordIndex = randomSlotttIndex(totalSlotItems.length);
    //console.log("WordIndex", wordIndex);
    wordbox.style.top = -wordIndex * 55 + 'px';
    
    wordbox.style.transition = 'top 1.75s ease-out';

    setTimeout(function () {
        rotateContents(wordbox, wordIndex);
        wordbox.style.top = '0';
        wordbox.style.transition = 'none';
    }, 1750);

    //$wordbox.animate({ top: -wordIndex * 55 }, 1750, 'swing', function () {
    //    rotateContents($wordbox, wordIndex);
    //});
}

function initializeSlotMachine() {
    wordbox = document.querySelector('#wordbox .slot_item_container');
    buildSlotContents(wordbox, wordlist);
    buildSlotContents(wordbox, wordlist);
    buildSlotContents(wordbox, wordlist);
    //buildSlotContents(wordbox, wordlist);
    //buildSlotContents(wordbox, wordlist);

    //console.log("initial animate");
    animate();
    //console.log("initial animate finished");
    setTimeout(function () {
        animate();
    }, 2000);
}

document.addEventListener('DOMContentLoaded', function () {
    initializeSlotMachine();
});


refBtn.addEventListener('click', function () {
    animate();
    //console.log("animate finished");
});