/**
 * Bliss Javascript
 */
var SE = {
    // Global settings/variables.
    // (For the sake of good development: try to add as little variables here as possible).
    $jquery: $,

    settings: {

        $html: $('html'),
        $body: $('body'),
        $window: $(window),
        $document: $(document)
    },

    //FUNCTION

    getBootstrapDeviceSize: function() {
        return $('#users-device-size').find('div:visible').first().attr('id');
    },

    /**
     * Initialize the app
     */
    init: function () {
        // Let developers know that this file is loaded properly!
        console.debug("javascript is locked and loaded!");
    }
};

window.SE = SE;

module.exports = SE;