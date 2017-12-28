requirejs.config({
    paths: {
        "skylark-utils": "http://registry.skylarkjs.org/packages/skylark-utils/v0.9.5-beta/uncompressed/skylark-utils-all",
        "skylark-bs-swt": "../_vendor/skylark-bs-swt",
        "skylark-jquery": "../_vendor/skylark-jquery",
        "custom": "../_assets/js/custom",
        "popper": "../_vendor/popper.js/dist/umd/popper.min"
    },
    waitSeconds: 240,
    packages: [],
    shim: {
        "skylark-bs-swt": {
            "deps": ["skylark-utils"]
        },
        "custom": ["skylark-jquery"],
        "popper": ["skylark-jquery"]
    }
});
require([
    "skylark-bs-swt",
    "skylark-utils",
], function() {
    require([
        "skylark-jquery"
    ], function($) {
        require([
            "custom",
            "popper"
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