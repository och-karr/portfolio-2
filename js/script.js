var projects = [
    {
        id: 1,
        title: 'RWD website',
        desc: 'Strona RWD wykorzystująca HTML oraz Sass.',
        img: './images/a-rwd-website.JPG',
        code: 'https://github.com/och-karr/rwd_website',
        demo: 'https://och-karr.github.io/rwd_website/'
    },
    {
        id: 2,
        title: 'Kanban Board',
        desc: 'Projekt tablicy Kanban, wykorzystujący technologię jQuery oraz ajax.',
        img: './images/a-kanban-board.JPG',
        code: 'https://github.com/och-karr/kanban_board',
        demo: 'https://och-karr.github.io/kanban_board/'
    },
    {
        id: 3,
        title: 'Country search engine',
        desc: 'Wyszukiwarka krajów wykorzystująca API, napisana w jQuery.',
        img: './images/a-country-search-engine.JPG',
        code: 'https://github.com/och-karr/country_search_engine',
        demo: 'https://och-karr.github.io/country_search_engine/'

    },
    {
        id: 4,
        title: 'Stopwatch',
        desc: 'Stoper - aplikacja napisana z wykorzystaniem składni ES6.',
        img: './images/a-stopwatch.JPG',
        code: 'https://github.com/och-karr/stopwatch_ES6',
        demo: 'https://och-karr.github.io/stopwatch_ES6/#'
    },
    {
        id: 5,
        title: 'Simon game',
        desc: 'Prosta gra napisana w języku JavaScript na bazie tutorialu Free Code Camp.',
        img: './images/a-simon-game.JPG',
        code: 'https://github.com/och-karr/simon-game',
        demo: 'https://och-karr.github.io/simon-game/'
    },
    {
        id: 6,
        title: 'Rock paper scissors',
        desc: 'Gra napisana w języku JavaScript. Wygląd wykonany przy wykorzystaniu Bootstrapa.',
        img: './images/a-rock-paper-scissors.JPG',
        code: 'https://github.com/och-karr/rock_paper_scissors',
        demo: 'https://och-karr.github.io/rock_paper_scissors/'
    }
];

function insertImage(array) {
    var images = document.getElementsByClassName("image");
    for (var i=0; i<images.length; i++) {
        var image = images[i];
        var imageUrl = array[i].img;
        image.style.background =  "url("+imageUrl+")";
        image.style.backgroundSize =  "cover";
    }
}

function insertTitleAndDesc(array) {
    var thirdSection = document.getElementById("section-3");
    var imageContainer = thirdSection.getElementsByClassName("image-container");
    for (var i=0; i<imageContainer.length; i++) {
        var h3 = thirdSection.getElementsByTagName("h3")[i];
        var p = thirdSection.getElementsByTagName("p")[i];
        var title = array[i].title;
        var desc = array[i].desc;
        h3.innerHTML = title;
        p.innerHTML = desc;
    }
}

function insertLinks(array) {
    var aDemo = document.getElementsByClassName("demo");
    var aCode = document.getElementsByClassName("code");
    for (var i=0; i<aDemo.length; i++) {
        aDemo[i].setAttribute("href", array[i].demo);
        aCode[i].setAttribute("href", array[i].code);
    }
}

insertTitleAndDesc(projects);
insertImage(projects);
insertLinks(projects);

$(".navbar-collapse").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});

