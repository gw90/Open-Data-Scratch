(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
	
	ext.admin = function() {
	return Scratch.INIT_DATA.LOGGED_IN_USER
    };
	
	ext.creator = function() {
	return Scratch.INIT_DATA.PROJECT.model.creator
    };
	
	ext.projectid = function() {
	return Scratch.INIT_DATA.PROJECT.model.id
    };
	
	ext.userid = function() {
	return Scratch.INIT_DATA.LOGGED_IN_USER.model.id
    };
	
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
		['b', 'is admin', 'admin'],
		['r', 'project creator', 'creator'],
		['r', 'project id', 'projectid'],
		['r', 'user id', 'userid'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Sample extension', descriptor, ext);
})({});