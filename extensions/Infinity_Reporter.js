(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.infinity = function() {
        return Infinity;
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            ['r', '∞', 'infinity'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Infinity Reporter', descriptor, ext);
})({});
