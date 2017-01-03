(function () {
    "use strict";
    var dom = {};
    dom.wrapper = document.querySelector( '.reveal' );

    if( !dom.wrapper.querySelector( '#logoacm' ) ) {
        var searchElement = document.createElement( 'div' );
        searchElement.id = "logoacm";
        searchElement.innerHTML = '<img src="./LogoACM_svg.svg" width="180" height="180">';
        dom.wrapper.appendChild( searchElement );
        window.console.log("ACM Logo added!");
    }

    window.console.log("Slides loaded!");
})();
