//= require jquery
//= require bootstrap-sprockets
//= require_tree .

/*
 countdown.js v2.6.0 http://countdownjs.org
 Copyright (c)2006-2014 Stephen M. McKamey.
 Licensed under The MIT License.
*/
var module,countdown=function(v){function A(a,b){var c=a.getTime();a.setMonth(a.getMonth()+b);return Math.round((a.getTime()-c)/864E5)}function w(a){var b=a.getTime(),c=new Date(b);c.setMonth(a.getMonth()+1);return Math.round((c.getTime()-b)/864E5)}function x(a,b){b=b instanceof Date||null!==b&&isFinite(b)?new Date(+b):new Date;if(!a)return b;var c=+a.value||0;if(c)return b.setTime(b.getTime()+c),b;(c=+a.milliseconds||0)&&b.setMilliseconds(b.getMilliseconds()+c);(c=+a.seconds||0)&&b.setSeconds(b.getSeconds()+
c);(c=+a.minutes||0)&&b.setMinutes(b.getMinutes()+c);(c=+a.hours||0)&&b.setHours(b.getHours()+c);(c=+a.weeks||0)&&(c*=7);(c+=+a.days||0)&&b.setDate(b.getDate()+c);(c=+a.months||0)&&b.setMonth(b.getMonth()+c);(c=+a.millennia||0)&&(c*=10);(c+=+a.centuries||0)&&(c*=10);(c+=+a.decades||0)&&(c*=10);(c+=+a.years||0)&&b.setFullYear(b.getFullYear()+c);return b}function D(a,b){return y(a)+(1===a?p[b]:q[b])}function n(){}function k(a,b,c,e,l,d){0<=a[c]&&(b+=a[c],delete a[c]);b/=l;if(1>=b+1)return 0;if(0<=a[e]){a[e]=
+(a[e]+b).toFixed(d);switch(e){case "seconds":if(60!==a.seconds||isNaN(a.minutes))break;a.minutes++;a.seconds=0;case "minutes":if(60!==a.minutes||isNaN(a.hours))break;a.hours++;a.minutes=0;case "hours":if(24!==a.hours||isNaN(a.days))break;a.days++;a.hours=0;case "days":if(7!==a.days||isNaN(a.weeks))break;a.weeks++;a.days=0;case "weeks":if(a.weeks!==w(a.refMonth)/7||isNaN(a.months))break;a.months++;a.weeks=0;case "months":if(12!==a.months||isNaN(a.years))break;a.years++;a.months=0;case "years":if(10!==
a.years||isNaN(a.decades))break;a.decades++;a.years=0;case "decades":if(10!==a.decades||isNaN(a.centuries))break;a.centuries++;a.decades=0;case "centuries":if(10!==a.centuries||isNaN(a.millennia))break;a.millennia++;a.centuries=0}return 0}return b}function B(a,b,c,e,l,d){var f=new Date;a.start=b=b||f;a.end=c=c||f;a.units=e;a.value=c.getTime()-b.getTime();0>a.value&&(f=c,c=b,b=f);a.refMonth=new Date(b.getFullYear(),b.getMonth(),15,12,0,0);try{a.millennia=0;a.centuries=0;a.decades=0;a.years=c.getFullYear()-
b.getFullYear();a.months=c.getMonth()-b.getMonth();a.weeks=0;a.days=c.getDate()-b.getDate();a.hours=c.getHours()-b.getHours();a.minutes=c.getMinutes()-b.getMinutes();a.seconds=c.getSeconds()-b.getSeconds();a.milliseconds=c.getMilliseconds()-b.getMilliseconds();var g;0>a.milliseconds?(g=s(-a.milliseconds/1E3),a.seconds-=g,a.milliseconds+=1E3*g):1E3<=a.milliseconds&&(a.seconds+=m(a.milliseconds/1E3),a.milliseconds%=1E3);0>a.seconds?(g=s(-a.seconds/60),a.minutes-=g,a.seconds+=60*g):60<=a.seconds&&(a.minutes+=
m(a.seconds/60),a.seconds%=60);0>a.minutes?(g=s(-a.minutes/60),a.hours-=g,a.minutes+=60*g):60<=a.minutes&&(a.hours+=m(a.minutes/60),a.minutes%=60);0>a.hours?(g=s(-a.hours/24),a.days-=g,a.hours+=24*g):24<=a.hours&&(a.days+=m(a.hours/24),a.hours%=24);for(;0>a.days;)a.months--,a.days+=A(a.refMonth,1);7<=a.days&&(a.weeks+=m(a.days/7),a.days%=7);0>a.months?(g=s(-a.months/12),a.years-=g,a.months+=12*g):12<=a.months&&(a.years+=m(a.months/12),a.months%=12);10<=a.years&&(a.decades+=m(a.years/10),a.years%=
10,10<=a.decades&&(a.centuries+=m(a.decades/10),a.decades%=10,10<=a.centuries&&(a.millennia+=m(a.centuries/10),a.centuries%=10)));b=0;!(e&1024)||b>=l?(a.centuries+=10*a.millennia,delete a.millennia):a.millennia&&b++;!(e&512)||b>=l?(a.decades+=10*a.centuries,delete a.centuries):a.centuries&&b++;!(e&256)||b>=l?(a.years+=10*a.decades,delete a.decades):a.decades&&b++;!(e&128)||b>=l?(a.months+=12*a.years,delete a.years):a.years&&b++;!(e&64)||b>=l?(a.months&&(a.days+=A(a.refMonth,a.months)),delete a.months,
7<=a.days&&(a.weeks+=m(a.days/7),a.days%=7)):a.months&&b++;!(e&32)||b>=l?(a.days+=7*a.weeks,delete a.weeks):a.weeks&&b++;!(e&16)||b>=l?(a.hours+=24*a.days,delete a.days):a.days&&b++;!(e&8)||b>=l?(a.minutes+=60*a.hours,delete a.hours):a.hours&&b++;!(e&4)||b>=l?(a.seconds+=60*a.minutes,delete a.minutes):a.minutes&&b++;!(e&2)||b>=l?(a.milliseconds+=1E3*a.seconds,delete a.seconds):a.seconds&&b++;if(!(e&1)||b>=l){var h=k(a,0,"milliseconds","seconds",1E3,d);if(h&&(h=k(a,h,"seconds","minutes",60,d))&&(h=
k(a,h,"minutes","hours",60,d))&&(h=k(a,h,"hours","days",24,d))&&(h=k(a,h,"days","weeks",7,d))&&(h=k(a,h,"weeks","months",w(a.refMonth)/7,d))){e=h;var n,p=a.refMonth,q=p.getTime(),r=new Date(q);r.setFullYear(p.getFullYear()+1);n=Math.round((r.getTime()-q)/864E5);if(h=k(a,e,"months","years",n/w(a.refMonth),d))if(h=k(a,h,"years","decades",10,d))if(h=k(a,h,"decades","centuries",10,d))if(h=k(a,h,"centuries","millennia",10,d))throw Error("Fractional unit overflow");}}}finally{delete a.refMonth}return a}
function d(a,b,c,e,d){var f;c=+c||222;e=0<e?e:NaN;d=0<d?20>d?Math.round(d):20:0;var k=null;"function"===typeof a?(f=a,a=null):a instanceof Date||(null!==a&&isFinite(a)?a=new Date(+a):("object"===typeof k&&(k=a),a=null));var g=null;"function"===typeof b?(f=b,b=null):b instanceof Date||(null!==b&&isFinite(b)?b=new Date(+b):("object"===typeof b&&(g=b),b=null));k&&(a=x(k,b));g&&(b=x(g,a));if(!a&&!b)return new n;if(!f)return B(new n,a,b,c,e,d);var k=c&1?1E3/30:c&2?1E3:c&4?6E4:c&8?36E5:c&16?864E5:6048E5,
h,g=function(){f(B(new n,a,b,c,e,d),h)};g();return h=setInterval(g,k)}var s=Math.ceil,m=Math.floor,p,q,r,t,u,f,y,z;n.prototype.toString=function(a){var b=z(this),c=b.length;if(!c)return a?""+a:u;if(1===c)return b[0];a=r+b.pop();return b.join(t)+a};n.prototype.toHTML=function(a,b){a=a||"span";var c=z(this),e=c.length;if(!e)return(b=b||u)?"\x3c"+a+"\x3e"+b+"\x3c/"+a+"\x3e":b;for(var d=0;d<e;d++)c[d]="\x3c"+a+"\x3e"+c[d]+"\x3c/"+a+"\x3e";if(1===e)return c[0];e=r+c.pop();return c.join(t)+e};n.prototype.addTo=
function(a){return x(this,a)};z=function(a){var b=[],c=a.millennia;c&&b.push(f(c,10));(c=a.centuries)&&b.push(f(c,9));(c=a.decades)&&b.push(f(c,8));(c=a.years)&&b.push(f(c,7));(c=a.months)&&b.push(f(c,6));(c=a.weeks)&&b.push(f(c,5));(c=a.days)&&b.push(f(c,4));(c=a.hours)&&b.push(f(c,3));(c=a.minutes)&&b.push(f(c,2));(c=a.seconds)&&b.push(f(c,1));(c=a.milliseconds)&&b.push(f(c,0));return b};d.MILLISECONDS=1;d.SECONDS=2;d.MINUTES=4;d.HOURS=8;d.DAYS=16;d.WEEKS=32;d.MONTHS=64;d.YEARS=128;d.DECADES=256;
d.CENTURIES=512;d.MILLENNIA=1024;d.DEFAULTS=222;d.ALL=2047;var E=d.setFormat=function(a){if(a){if("singular"in a||"plural"in a){var b=a.singular||[];b.split&&(b=b.split("|"));var c=a.plural||[];c.split&&(c=c.split("|"));for(var d=0;10>=d;d++)p[d]=b[d]||p[d],q[d]=c[d]||q[d]}"string"===typeof a.last&&(r=a.last);"string"===typeof a.delim&&(t=a.delim);"string"===typeof a.empty&&(u=a.empty);"function"===typeof a.formatNumber&&(y=a.formatNumber);"function"===typeof a.formatter&&(f=a.formatter)}},C=d.resetFormat=
function(){p=" millisecond; second; minute; hour; day; week; month; year; decade; century; millennium".split(";");q=" milliseconds; seconds; minutes; hours; days; weeks; months; years; decades; centuries; millennia".split(";");r=" and ";t=", ";u="";y=function(a){return a};f=D};d.setLabels=function(a,b,c,d,f,k,m){E({singular:a,plural:b,last:c,delim:d,empty:f,formatNumber:k,formatter:m})};d.resetLabels=C;C();v&&v.exports?v.exports=d:"function"===typeof window.define&&"undefined"!==typeof window.define.amd&&
window.define("countdown",[],function(){return d});return d}(module);

(function(global) {
  "use strict";

  // Vanilla JS alternative to $.extend
  global.extend = function(obj, extObj) {
    obj = obj || {};
    if (arguments.length > 2) {
      for (var a = 1; a < arguments.length; a++) {
        global.extend(obj, arguments[a]);
      }
    } else {
      for (var i in extObj) {
        obj[i] = extObj[i];
      }
    }
    return obj;
  };

  // Countdown constructor
  var Countdown = function(conf) {
    this.conf = global.extend({
      // Dates
      dateStart  : new Date(),
      dateEnd    : new Date('Mar 16, 2016 12:00'),

      // Default elements
      selector   : ".timer",

      // Messages
      msgBefore  : "Be ready!",
      msgAfter   : "It's over, sorry folks!",
      msgPattern : "{months}:{days}:{hours}:{minutes}:{seconds}",

      // Callbacks
      onStart    : null,
      onEnd      : null
    }, conf);

    // Private variables
    this.selector = document.querySelectorAll(this.conf.selector);
    this.interval = 1000;
    this.now      = new Date();
    this.patterns = [
      { pattern: "{years}", secs: 31536000 },
      { pattern: "{months}", secs: 2628000 },
      { pattern: "{weeks}", secs: 604800 },
      { pattern: "{days}", secs: 86400 },
      { pattern: "{hours}", secs: 3600 },
      { pattern: "{minutes}", secs: 60 },
      { pattern: "{seconds}", secs: 1 }
    ];

    // Doing all the things!
    this.init();
  };

  // Initializing the instance
  Countdown.prototype.init = function() {
    this.defineInterval();
    if(this.now < this.conf.dateEnd && this.now >= this.conf.dateStart) {
      this.run();
      this.callback("start");
    } else {
      this.outOfInterval();
    }
  };

  // Running the countdown
  Countdown.prototype.run = function() {
    var now = this.now.valueOf() / 1000,
        tar = this.conf.dateEnd.valueOf() / 1000,
        sec = Math.abs(tar - now);

    // Vanilla JS alternative to $.proxy
    var that  = this;
    var timer = global.setInterval(function() {
      sec--;

      if(sec > 0) {
        that.display(sec);
      } else {
        clearInterval(timer);
        that.outOfInterval();
        that.callback("end");
      }
    }, this.interval);

    this.display(sec);
  };

  // Displaying the countdown
  Countdown.prototype.display = function(sec) {
    var output = this.conf.msgPattern;

    for (var b = 0; b < this.patterns.length; b++) {
      var currentPattern = this.patterns[b];

      if (this.conf.msgPattern.indexOf(currentPattern.pattern) !== -1) {
        var number = Math.floor(sec / currentPattern.secs);
        sec -= number * currentPattern.secs;
        output = output.replace(currentPattern.pattern, number);
      }
    }

    for(var c = 0; c < this.selector.length; c++) {
      this.selector[c].innerHTML = output;
    }
  };

  // Defining the interval to be used for refresh
  Countdown.prototype.defineInterval = function() {
    for (var e = this.patterns.length; e > 0; e--) {
      var currentPattern = this.patterns[e-1];

      if (this.conf.msgPattern.indexOf(currentPattern.pattern) !== -1) {
        this.interval = currentPattern.secs * 1000;
        return;
      }
    }
  };

  // Canceling the countdown in case it's over
  Countdown.prototype.outOfInterval = function() {
    var message = this.now < this.conf.dateStart ? this.conf.msgBefore : this.conf.msgAfter;
    for(var d = 0; d < this.selector.length; d++) {
      this.selector[d].innerHTML = message;
    }
  };

  // Dealing with events and callbacks
  Countdown.prototype.callback = function(event) {
    event = event.capitalize();

    // onStart callback
    if(typeof this.conf["on" + event] === "function") {
      this.conf["on" + event]();
    }

    // Triggering a jQuery event if jQuery is loaded
    if(typeof global.jQuery !== "undefined") {
      global.jQuery(this.conf.selector).trigger("countdown" + event);
    }
  };

  // Adding a capitalize method to String
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };

  global.Countdown = Countdown;
}(window));

// Initializing two countdowns
var tomorrow = new Countdown(); // All defaults

// Init skrollr and disable on mobile
if(Modernizr.touch){
	var s = skrollr.init();
	s.destroy();
}

( function( $ ) {

	function enableSkrollr() {
		// Enable Skroll only for non-touch devices
		if(!Modernizr.touch){
			var s = skrollr.init({forceHeight: false});
		}
	}

	function disableSkrollr() {
		// Destroy Skrollr
		var s = skrollr.init();
		s.destroy();
	}

	enquire.register("screen and (min-width: 768px)", {
		match : function() {
			enableSkrollr();
		},  
		unmatch : function() {
			disableSkrollr();
		}
	});

} )( jQuery );

// Smooth Scroll
$(function() {
  $('a[href*=#]:not([href=#music-gallery])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
