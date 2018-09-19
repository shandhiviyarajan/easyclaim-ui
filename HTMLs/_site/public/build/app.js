'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Brusselslife = function () {
    function Brusselslife() {
        _classCallCheck(this, Brusselslife);
    }

    //Create custom HTML elements


    _createClass(Brusselslife, [{
        key: 'createCustomElements',
        value: function createCustomElements() {
            var full_news_block = document.registerElement('full-news-block', {
                extends: 'div'
            });
            var blife_block = document.registerElement('blife-block', {
                extends: 'div'
            });

            var block_edit = document.registerElement('block-edit', {
                extends: 'div'
            });

            var author_block = document.registerElement('author-block', {
                extends: 'div'
            });

            document.body.appendChild(new full_news_block());
            document.body.appendChild(new blife_block());
            document.body.appendChild(new author_block());
            document.body.appendChild(new block_edit());
        }
    }, {
        key: 'enablePlugins',
        value: function enablePlugins() {

            var homeCarouselAgenda = new Flickity('.home-carousel-agenda', {
                cellAlign: 'left',
                contain: true,
                wrapAround: false,
                draggable: '>1',
                groupCells: 1,
                lazyLoad: 4,
                pageDots: false
            });

            var addressListCarousel = new Flickity('.address-list-carousel', {
                cellAlign: 'left',
                contain: true,
                wrapAround: false,
                draggable: '>1',
                groupCells: 1,
                lazyLoad: 0,
                pageDots: false
            });

            var homeBlock3Carousel = new Flickity('.home-block-3-carousel', {
                cellAlign: 'center',
                contain: true,
                wrapAround: false,
                draggable: '>1',
                groupCells: 1,
                lazyLoad: 2,
                pageDots: true
            });

            var sectionContentCarousel = new Flickity('.section-content-carousel', {
                cellAlign: "left",
                contain: true,
                wrapAround: false,
                draggable: '>1',
                groupCells: 1,
                lazyLoad: 4,
                pageDots: false
            });

            var sectionContentCarousel2 = new Flickity('.section-content-carousel-2', {
                contain: true,
                wrapAround: false,
                draggable: '>1',
                pageDots: false
            });
        }
    }]);

    return Brusselslife;
}();

var BrusselslifeApp = new Brusselslife();
BrusselslifeApp.createCustomElements();
BrusselslifeApp.enablePlugins();
//# sourceMappingURL=app.js.map
