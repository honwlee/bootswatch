requirejs.config({
    config: {
        moment: {
            noGlobal: true
        }
    },
    paths: {
        "skylark-utils": "http://registry.skylarkjs.org/packages/skylark-utils/v0.9.5-beta/uncompressed/skylark-utils-all",
        "skylark-bs-swt": "http://registry.skylarkjs.org/packages/skylark-bs-swt/v0.9.0-beta/js/uncompressed/skylark-bs-swt",
        // "jquery": "../bower_components/jquery/dist/jquery",
        "skylark-jquery": "http://registry.skylarkjs.org/packages/skylark-jquery/v0.9.6-beta/uncompressed/skylark-jquery",
        "custom": "../assets/js/custom",
        "material": "./material",
        assets: './ofuelux_all',
        moment: './ofuelux_all/vendor/moment-with-locales.min', // comment out if you dont want momentjs to be default
        underscore: './ofuelux_all/vendor/underscore',
        backbone: 'http://registry.skylarkjs.org/packages/skylark-backbone/0.9.0/backbone',
        formbuilder: 'http://getfuelux.com/assets/js/form-builder',
        collections: 'http://getfuelux.com/assets/js/form-builder/collections',
        data: 'http://getfuelux.com/assets/js/form-builder/data',
        models: 'http://getfuelux.com/assets/js/form-builder/models',
        helper: 'http://getfuelux.com/assets/js/form-builder/helper',
        templates: 'http://getfuelux.com/assets/js/form-builder/templates',
        views: 'http://getfuelux.com/assets/js/form-builder/views',
        text: 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text',
        supercopy: './ofuelux_all/js/super-copy',
    },
    waitSeconds: 240,
    packages: [],
    shim: {
        ' backbone': {
            deps: ['underscore', 'skylark-utils'],
            exports: 'Backbone'
        },
        "material": {
            "deps": ["skylark-jquery"]
        },
        "skylark-bs-swt": {
            "deps": ["skylark-utils"]
        },
        "skylark-jquery": {
            "deps": ["skylark-utils"]
        },
        "custom": ["skylark-jquery"],
        "popper": ["skylark-jquery"]
    },
    "map": {
        "*": {
            "jquery": "skylark-jquery",
            "skylarkBs": "skylark-bs-swt"
        }
    }
});

require([
    "skylark-utils",
    "skylarkBs",
    "moment"
], function() {
    require([
        "jquery"
    ], function($) {
        require([
            // "custom",
            "material",
            'ofuelux_all/js/application'
        ], function() {
            $(function() {
                $.material.init();
                $('[data-toggle="tab"]').each(function() {
                    var $this = $(this);
                    $this.tab();
                });
                $(".alert").alert();
                $('[data-toggle="button"]').button('toggle');
                $('[data-toggle="buttons"] .btn').button('toggle');
                $('[data-toggle="dropdown"]').dropdown();
                $('[data-toggle="tooltip"]').tooltip();
                $('.js-popover').popover();
            });
        });
    });
});