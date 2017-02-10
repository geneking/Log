 
;(function(factory){

    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        factory();
    }

}(function(undefined) {

	var Log = function () {};

	Log.prototype.lock = function () {
		return location.hash.indexOf('#log') !== -1;
	};

	Log.prototype.line = function (char) {
		var line = Array(120).fill(char).join('');
		return this.lock() ? '' : console.log(line);
	};

	Log.prototype.write = function (text) {
		return this.lock() ? '' : console.log(text);
	};

	Log.prototype.info = function (text) {
		return this.lock() ? '' : console.info(text);
	};

	Log.prototype.warn = function (text) {
		return this.lock() ? '' : console.warn(text);
	};

	Log.prototype.error = function (text) {
		return this.lock() ? '' : console.error(text);
	};

	Log.prototype.clear = function () {
		return this.lock() ? '' : console.clear();
	};

	exports.Log = new Log();
}));