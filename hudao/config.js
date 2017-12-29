requirejs.config({
    paths: {
        "skylark-utils": "http://registry.skylarkjs.org/packages/skylark-utils/v0.9.5-beta/uncompressed/skylark-utils-all",
        "skylark-bs-swt": "http://registry.skylarkjs.org/packages/skylark-bs-swt/v0.9.0-beta/js/uncompressed/skylark-bs-swt",
        "skylark-jquery": "http://registry.skylarkjs.org/packages/skylark-jquery/v0.9.6-beta/uncompressed/skylark-jquery",
        "custom": "../assets/js/custom"
    },
    waitSeconds: 240,
    packages: [],
    shim: {
        "skylark-bs-swt": {
            "deps": ["skylark-utils"]
        },
        "skylark-jquery": {
            "deps": ["skylark-utils"]
        },
        "custom": ["skylark-jquery"],
        "popper": ["skylark-jquery"]
    }
});
require([
    "skylark-utils",
    "skylark-bs-swt"
], function() {
    require([
        "skylark-jquery"
    ], function($) {
        require([
            "custom",
        ], function() {
            $(function() {
                $('[data-toggle="tab"]').each(function() {
                    var $this = $(this);
                    $this.tab();
                });
                $(".alert").alert();
                $('[data-toggle="button"]').button('toggle');
                $('[data-toggle="buttons"] .btn').button('toggle');
                $('[data-toggle="dropdown"]').dropdown();
                $('[data-toggle="tooltip"]').tooltip();
                $('.js-popover').popover()
            });
        });
    });
});