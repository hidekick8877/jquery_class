// define namespace
var SAMPLE = {};

(function(namespace) {
	
	namespace = namespace || window;
	
	// constructor
	var ParentClass = namespace.ParentClass = function(url, tag) {
		this._init(url, tag);
	};
	
	ParentClass.prototype = {
		
		// -----------------------------------------------------------		
		// private member 
		_url: null,
		_tag: null,
				

		// -----------------------------------------------------------		
		// private method
		
		// initialize member
		_init: function(url, tag) {
			this._url = url;
			this._tag = tag;
		},
		
			
		_ajax_done: function(res) {
			$(this._tag).html(JSON.stringify(res));
		},
		
		_ajax_fail: function(res) {
			$(this._tag).html(JSON.stringify(res));
		},

		// -----------------------------------------------------------		
		// public method
		get_info: function() {
			console.log("err");
			$.ajax({
				context: this,
				url: this._url,
				dataType: 'jsonp'
			}).done (function(res) {
			console.log("err" + res);
				this._ajax_done(res);
				
			}).fail (function(res) {
			console.log("err" + res);
				this._ajax_fail(res);
			});
		},
		
	};
})(SAMPLE);



//}) (jQuery, this, this.document);











