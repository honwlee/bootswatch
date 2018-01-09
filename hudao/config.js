requirejs.config({
    paths: {
        "skylark-utils": "http://registry.skylarkjs.org/packages/skylark-utils/v0.9.5-beta/uncompressed/skylark-utils-all",
        "skylark-bs-swt": "http://registry.skylarkjs.org/packages/skylark-bs-swt/v0.9.0-beta/js/uncompressed/skylark-bs-swt",
        // "jquery": "../bower_components/jquery/dist/jquery",
        "skylark-jquery": "http://registry.skylarkjs.org/packages/skylark-jquery/v0.9.6-beta/uncompressed/skylark-jquery",
        "custom": "../assets/js/custom",
        "material": "./material"
    },
    waitSeconds: 240,
    packages: [],
    shim: {
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
    // "skylarkBs"
], function() {
    require([
        "jquery"
    ], function($) {
        require([
            "custom",
            "material"
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