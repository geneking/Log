
;(function(factory){

    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        factory();
    }

}(function(undefined) {

	var lock = function () {
		return location.hash.indexOf('#log') === -1;
	};

	var line = function (char) {
        	var char = char || '#';
		var line = Array(120).fill(char).join('');
		return lock() ? '' : console.log(line);
	};

	var log = function (text, info) {
		return lock() ? '' : console.log(text, info || '');
	};

	var info = function (text, info) {
		return lock() ? '' : console.info(text, info || '');
	};

	var warn = function (text, info) {
		return lock() ? '' : console.warn(text, info || '');
	};

	var error = function (text, info) {
		return lock() ? '' : console.error(text, info || '');
	};

    return {
        log: log,
        info: info,
        warn: warn,
        error: error,
        line: line,
    };
}));
