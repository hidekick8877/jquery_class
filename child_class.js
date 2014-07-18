(function(namespace){
	
	namespace = namespace || window;
	
	// constructor
	var ChildClass = namespace.ChildClass = function(url, tag) {
		this._child_init(url, tag);
	};
	
	// add method of ParentClass
	ChildClass.prototype = new SAMPLE.ParentClass();
	
	// extend ChildClass	
	$.extend(ChildClass.prototype, {
		
		_child_init: function(url, tag) {
			this._init(url, tag);
		},
		
		// override parend mrthod				
		_ajax_done: function(res) {

			var tmp = this._tag;
			$.each(res.feed.entry, function() {
			
				var title = this.title.$t,
				link = this.link[0].href,
				viewCount = this.yt$statistics.viewCount,
				favCount = this.yt$statistics.favoriteCount,
				rateAvg = this.gd$rating.average;

				var a = document.createElement("a");
				$(a)
				  .attr("href",link)
				  .attr("target", "_blank")
				  .text(title);
				var span = document.createElement("span");
				$(span)
				  .append(" [view]" + viewCount)
				  .append(" [fav] " + favCount)
				  .append(" [rate]" + rateAvg);
				var li = document.createElement("li");
				$(li)
					.append(a)
				  	.append(span);
				$(tmp).append(li);
								 
			});
		},
		
		// override parent mrthos
		_ajax_fail: function(res) {
			$(this._tag).html("ajax error");
		},
	});
}) (SAMPLE);
