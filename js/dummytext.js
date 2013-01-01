/*** DummyText.js ***

DummyText.js is a simple jQuery plugin to help you generate
and clean random text for front-end development purposes.

You can read more about DummyText.js and see some Demos at:
http://www.iliasiovis.com/dummytext/

Fork on GitHub:
https://github.com/iliasiovis/DummyText.js/

CC 2013 - Ilias Iovis | iliasiovis.com
***********************************************************
**********************************************************/

(function( $ ){

  $.fn.dummytext = function( options ) {  

	  var settings = $.extend( {
	  	url :'js/dummies.json'
	  }, options);

    return this.each(function() {
		var text = $(this).html();
		var dummies;
		
		$.ajax({
	    	url: settings.url,
	    	async: false,
	    	dataType: 'json',
	    	success: function(data) {
	    		dummies = data;
	    	}
	    });
		
		var dum = '';
	
	    var reps = text.match(/\#[0-9]*[rsml(l(?!a)(?!i))]?(p|li|a|la|h1|h2|h3|h4|h5|h6)/g);
	    for (var i = 0; i < reps.length; i++) {
	        var value = reps[i];
	        exp = value.slice(1);
	        
	        var num = exp.match(/^[0-9]+/);
	        if (num==null) {
	            num = 1;           
	        } else {
	            num = parseInt(num[0]);
	            exp = exp.replace(num,'');
	        }
	        
	        var size = exp.match(/^[rsm(l(?!a)(?!i))]/);
	        if(size!=null){
		        exp = exp.replace(size[0],'');
		        size = size[0];
	        } else {
		        size = 'r';
	        }
	        
	        var tag = exp.match(/^(p|a|li|la|h1|h2|h3|h4|h5|h6)/);
	        tag = tag[0];
	        
	        var dummy = '';
	        for(var z=0; z < num; z++) {
	        	switch(tag) {
		        	case 'la': 
		        		switch(size) {
			        		case "s":
			        			var rand = Math.floor(Math.random()*3);
			        			dum = dummies.la.s[rand];
			        		break;
			        		case "m":
			        			var rand = Math.floor(Math.random()*3);
			        			dum = dummies.la.m[rand];
			        		break;
			        		case "l":
			        			var rand = Math.floor(Math.random()*3);
			        			dum = dummies.la.l[rand];
			        		break;
			        		case "r":
			        			var rand = Math.floor(Math.random()*3);
			        			switch (rand) {
				        			case 0:				        			
					        			rand = Math.floor(Math.random()*3);
					        			dum = dummies.la.s[rand];
				        			break;
				        			case 1:				        			
					        			rand = Math.floor(Math.random()*3);
					        			dum = dummies.la.m[rand];
				        			break;
				        			case 2:				        			
					        			rand = Math.floor(Math.random()*3);
					        			dum = dummies.la.l[rand];
				        			break;	
			        			}
			        		break;
		        		}

		        		dummy += '<li><a href="#">'+dum+'</a></li>';
		        	break;
		        	
		        	case 'a':
		        		switch(size) {
			        		case "s":
			        			var rand = Math.floor(Math.random()*3);
			        			dum = dummies.a.s[rand];
			        		break;
			        		case "m":
			        			var rand = Math.floor(Math.random()*3);
			        			dum = dummies.a.m[rand];
			        		break;
			        		case "l":
			        			var rand = Math.floor(Math.random()*3);
			        			dum = dummies.a.l[rand];
			        		break;
			        		case "r":
			        			var rand = Math.floor(Math.random()*3);
			        			switch (rand) {
				        			case 0:				        			
					        			rand = Math.floor(Math.random()*3);
					        			dum = dummies.a.s[rand];
				        			break;
				        			case 1:				        			
					        			rand = Math.floor(Math.random()*3);
					        			dum = dummies.a.m[rand];
				        			break;
				        			case 2:				        			
					        			rand = Math.floor(Math.random()*3);
					        			dum = dummies.a.l[rand];
				        			break;	
			        			}
			        		break;
		        		}
		        		dummy += '<a href="#">'+dum+'</a>';
		        	break;
		        	
		        	default:
		        		switch(tag) {
			        		case 'p':
				        		switch(size) {
					        		case "s":
					        			var rand = Math.floor(Math.random()*3);
					        			dum = dummies.p.s[rand];
					        		break;
					        		case "m":
					        			var rand = Math.floor(Math.random()*3);
					        			dum = dummies.p.m[rand];
					        		break;
					        		case "l":
					        			var rand = Math.floor(Math.random()*3);
					        			dum = dummies.p.l[rand];
					        		break;
					        		case "r":
					        			var rand = Math.floor(Math.random()*3);
					        			switch (rand) {
						        			case 0:				        			
							        			rand = Math.floor(Math.random()*3);
							        			dum = dummies.p.s[rand];
						        			break;
						        			case 1:				        			
							        			rand = Math.floor(Math.random()*3);
							        			dum = dummies.p.m[rand];
						        			break;
						        			case 2:				        			
							        			rand = Math.floor(Math.random()*3);
							        			dum = dummies.p.l[rand];
						        			break;	
					        			}
					        		break;
				        		}
				        	break;
			        		
			        		case 'li':
				        		switch(size) {
					        		case "s":
					        			var rand = Math.floor(Math.random()*3);
					        			dum = dummies.li.s[rand];
					        		break;
					        		case "m":
					        			var rand = Math.floor(Math.random()*3);
					        			dum = dummies.li.m[rand];
					        		break;
					        		case "l":
					        			var rand = Math.floor(Math.random()*3);
					        			dum = dummies.li.l[rand];
					        		break;
					        		case "r":
					        			var rand = Math.floor(Math.random()*3);
					        			switch (rand) {
						        			case 0:				        			
							        			rand = Math.floor(Math.random()*3);
							        			dum = dummies.li.s[rand];
						        			break;
						        			case 1:				        			
							        			rand = Math.floor(Math.random()*3);
							        			dum = dummies.li.m[rand];
						        			break;
						        			case 2:				        			
							        			rand = Math.floor(Math.random()*3);
							        			dum = dummies.li.l[rand];
						        			break;	
					        			}
					        		break;
				        		}			        		
			        		break;
			        		
			        		default:
				        		switch(size) {
					        		case "s":
					        			var rand = Math.floor(Math.random()*3);
					        			dum = dummies.h.s[rand];
					        		break;
					        		case "m":
					        			var rand = Math.floor(Math.random()*3);
					        			dum = dummies.h.m[rand];
					        		break;
					        		case "l":
					        			var rand = Math.floor(Math.random()*3);
					        			dum = dummies.h.l[rand];
					        		break;
					        		case "r":
					        			var rand = Math.floor(Math.random()*3);
					        			switch (rand) {
						        			case 0:				        			
							        			rand = Math.floor(Math.random()*3);
							        			dum = dummies.h.s[rand];
						        			break;
						        			case 1:				        			
							        			rand = Math.floor(Math.random()*3);
							        			dum = dummies.h.m[rand];
						        			break;
						        			case 2:				        			
							        			rand = Math.floor(Math.random()*3);
							        			dum = dummies.h.l[rand];
						        			break;	
					        			}
					        		break;
				        		}
			        		break;
		        		}
		        		dummy += '<'+tag+'>'+dum+'</'+tag+'>';
		        	break;
	        	}
	        }
	        text = text.replace(value,dummy);
	    }
		    
		$(this).html(text);
    });
  };
})( jQuery );