/*------------------------------------
 * Theme: Plate by studio.bio 
 * File: Main theme scripts file
 * Author: Joshua Michaels
 * URI: https://studio.bio/themes/plate
 *------------------------------------
 *
 * This file should contain any js scripts you want to add to the site.
 * Instead of calling it in the header or throwing it inside wp_head()
 * this file will be called automatically in the footer so as not to
 * slow the page load.
 *
 * There are a lot of example functions and tools in here. If you don't
 * need any of it, just remove it. They are meant to be helpers and are
 * not required. It's your world baby, you can do whatever you want.
 * 
 * Added a few things back in from Template like the Detect User Agent
 * script and a few others that we use all the time. 
*/

/*---------------------------------------
* Detect User Agent Script
* http://cssuseragent.org
*----------------------------------------
* This is by far the best detection script I've found. 
* Using javascript means that this will work with caching. W00t. 
*
* Adds user agent classes to the <html> element on your page including OS
* and browser version.
* 
* This script has support for about every device imaginable so if you
* want to create specific styles for a symbian browser, go to town. It
* has gotten me out of a few sticky situations.
*
* Used in combination with Browserstack: https://browserstack.com/
* will keep your clients happy.
* 
* If you don't need/want this, just remove it or comment it out.
* 
*/

var cssua=function(n,l,p){var q=/\s*([\-\w ]+)[\s\/\:]([\d_]+\b(?:[\-\._\/]\w+)*)/,r=/([\w\-\.]+[\s\/][v]?[\d_]+\b(?:[\-\._\/]\w+)*)/g,s=/\b(?:(blackberry\w*|bb10)|(rim tablet os))(?:\/(\d+\.\d+(?:\.\w+)*))?/,t=/\bsilk-accelerated=true\b/,u=/\bfluidapp\b/,v=/(\bwindows\b|\bmacintosh\b|\blinux\b|\bunix\b)/,w=/(\bandroid\b|\bipad\b|\bipod\b|\bwindows phone\b|\bwpdesktop\b|\bxblwp7\b|\bzunewp7\b|\bwindows ce\b|\bblackberry\w*|\bbb10\b|\brim tablet os\b|\bmeego|\bwebos\b|\bpalm|\bsymbian|\bj2me\b|\bdocomo\b|\bpda\b|\bchtml\b|\bmidp\b|\bcldc\b|\w*?mobile\w*?|\w*?phone\w*?)/,
x=/(\bxbox\b|\bplaystation\b|\bnintendo\s+\w+)/,k={parse:function(b,d){var a={};d&&(a.standalone=d);b=(""+b).toLowerCase();if(!b)return a;for(var c,e,g=b.split(/[()]/),f=0,k=g.length;f<k;f++)if(f%2){var m=g[f].split(";");c=0;for(e=m.length;c<e;c++)if(q.exec(m[c])){var h=RegExp.$1.split(" ").join("_"),l=RegExp.$2;if(!a[h]||parseFloat(a[h])<parseFloat(l))a[h]=l}}else if(m=g[f].match(r))for(c=0,e=m.length;c<e;c++)h=m[c].split(/[\/\s]+/),h.length&&"mozilla"!==h[0]&&(a[h[0].split(" ").join("_")]=h.slice(1).join("-"));
w.exec(b)?(a.mobile=RegExp.$1,s.exec(b)&&(delete a[a.mobile],a.blackberry=a.version||RegExp.$3||RegExp.$2||RegExp.$1,RegExp.$1?a.mobile="blackberry":"0.0.1"===a.version&&(a.blackberry="7.1.0.0"))):x.exec(b)?(a.game=RegExp.$1,c=a.game.split(" ").join("_"),a.version&&!a[c]&&(a[c]=a.version)):v.exec(b)&&(a.desktop=RegExp.$1);a.intel_mac_os_x?(a.mac_os_x=a.intel_mac_os_x.split("_").join("."),delete a.intel_mac_os_x):a.cpu_iphone_os?(a.ios=a.cpu_iphone_os.split("_").join("."),delete a.cpu_iphone_os):a.cpu_os?
(a.ios=a.cpu_os.split("_").join("."),delete a.cpu_os):"iphone"!==a.mobile||a.ios||(a.ios="1");a.opera&&a.version?(a.opera=a.version,delete a.blackberry):t.exec(b)?a.silk_accelerated=!0:u.exec(b)&&(a.fluidapp=a.version);a.edge&&(delete a.applewebkit,delete a.safari,delete a.chrome,delete a.android);if(a.applewebkit)a.webkit=a.applewebkit,delete a.applewebkit,a.opr&&(a.opera=a.opr,delete a.opr,delete a.chrome),a.safari&&(a.chrome||a.crios||a.fxios||a.opera||a.silk||a.fluidapp||a.phantomjs||a.mobile&&
!a.ios?(delete a.safari,a.vivaldi&&delete a.chrome):a.safari=a.version&&!a.rim_tablet_os?a.version:{419:"2.0.4",417:"2.0.3",416:"2.0.2",412:"2.0",312:"1.3",125:"1.2",85:"1.0"}[parseInt(a.safari,10)]||a.safari);else if(a.msie||a.trident)if(a.opera||(a.ie=a.msie||a.rv),delete a.msie,delete a.android,a.windows_phone_os)a.windows_phone=a.windows_phone_os,delete a.windows_phone_os;else{if("wpdesktop"===a.mobile||"xblwp7"===a.mobile||"zunewp7"===a.mobile)a.mobile="windows desktop",a.windows_phone=9>+a.ie?
"7.0":10>+a.ie?"7.5":"8.0",delete a.windows_nt}else if(a.gecko||a.firefox)a.gecko=a.rv;a.rv&&delete a.rv;a.version&&delete a.version;return a},format:function(b){var d="",a;for(a in b)if(a&&b.hasOwnProperty(a)){var c=a,e=b[a],c=c.split(".").join("-"),g=" ua-"+c;if("string"===typeof e){for(var e=e.split(" ").join("_").split(".").join("-"),f=e.indexOf("-");0<f;)g+=" ua-"+c+"-"+e.substring(0,f),f=e.indexOf("-",f+1);g+=" ua-"+c+"-"+e}d+=g}return d},encode:function(b){var d="",a;for(a in b)a&&b.hasOwnProperty(a)&&
(d&&(d+="\x26"),d+=encodeURIComponent(a)+"\x3d"+encodeURIComponent(b[a]));return d}};k.userAgent=k.ua=k.parse(l,p);l=k.format(k.ua)+" js";n.className=n.className?n.className.replace(/\bno-js\b/g,"")+l:l.substr(1);return k}(document.documentElement,navigator.userAgent,navigator.standalone);


/*!------------------------------------------------------
 * jQuery nearest v1.0.3
 * http://github.com/jjenzz/jQuery.nearest
 * ------------------------------------------------------
 * Copyright (c) 2012 J. Smith (@jjenzz)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Have you ever tried to find the nearest element down in
 * the DOM that wasn't a child? Then jQuery nearest is for you.
 * And it works traversing both up and down, finding...wait
 * for it...the nearest element. 
 * 
 * Like this: jQuery(this).nearest('.overlay');
 */

(function(a,b){a.fn.nearest=function(c){var d,g,f,e,h,i=b.querySelectorAll;function j(k){g=g?g.add(k):a(k)}this.each(function(){d=this;a.each(c.split(","),function(){e=a.trim(this);if(!e.indexOf("#")){j((i?b.querySelectorAll(e):a(e)))}else{h=d.parentNode;while(h){f=i?h.querySelectorAll(e):a(h).find(e);if(f.length){j(f);break}h=h.parentNode}}})});return g||a()}}(jQuery,document));



/*
 * Get Viewport Dimensions
 * returns object with viewport dimensions to match css in width and height properties
 * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
*/
function updateViewportDimensions() {
	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
	return { width:x,height:y };
}
// setting the viewport width
var viewport = updateViewportDimensions();


/*
 * Throttle Resize-triggered Events
 * Wrap your actions in this function to throttle the frequency of firing them off, for better performance, esp. on mobile.
 * ( source: http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed )
*/
var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) { uniqueId = "Don't call this twice without a uniqueId"; }
		if (timers[uniqueId]) { clearTimeout (timers[uniqueId]); }
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();

// how long to wait before deciding the resize has stopped, in ms. Around 50-100 should work ok.
var timeToWaitForLast = 100;


/*
 * Here's an example so you can see how we're using the above function
 *
 * This is commented out so it won't work, but you can copy it and
 * remove the comments.
 *
 *
 *
 * If we want to only do it on a certain page, we can setup checks so we do it
 * as efficient as possible.
 *
 * if( typeof is_home === "undefined" ) var is_home = $('body').hasClass('home');
 *
 * This once checks to see if you're on the home page based on the body class
 * We can then use that check to perform actions on the home page only
 *
 * When the window is resized, we perform this function
 * $(window).resize(function () {
 *
 *    // if we're on the home page, we wait the set amount (in function above) then fire the function
 *    if( is_home ) { waitForFinalEvent( function() {
 *
 *	// update the viewport, in case the window size has changed
 *	viewport = updateViewportDimensions();
 *
 *      // if we're above or equal to 768 fire this off
 *      if( viewport.width >= 768 ) {
 *        console.log('On home page and window sized to 768 width or more.');
 *      } else {
 *        // otherwise, let's do this instead
 *        console.log('Not on home page, or window sized to less than 768.');
 *      }
 *
 *    }, timeToWaitForLast, "your-function-identifier-string"); }
 * });
 *
 * Pretty cool huh? You can create functions like this to conditionally load
 * content and other stuff dependent on the viewport.
 * Remember that mobile devices and javascript aren't the best of friends.
 * Keep it light and always make sure the larger viewports are doing the heavy lifting.
 *
*/

/*
 * We're going to swap out the gravatars.
 * In the functions.php file, you can see we're not loading the gravatar
 * images on mobile to save bandwidth. Once we hit an acceptable viewport
 * then we can swap out those images since they are located in a data attribute.
*/
function loadGravatars() {
    // set the viewport using the function above
    viewport = updateViewportDimensions();
    // if the viewport is tablet or larger, we load in the gravatars
    if (viewport.width >= 768) {
        jQuery('.comment img[data-gravatar]').each(function(){
            jQuery(this).attr('src',jQuery(this).attr('data-gravatar'));
        });
    }
} // end function

function jQObjHasDom($ele) {
    return $ele && $ele.length;
}

function addNegativeTabIndex($ele) {
  let debug = false;
  if (debug && window.console) {
    console.log('addNegativeTabIndex($ele)', $ele);
  }
  if (!$ele.is('.focusables-negated')) {
    $ele.addClass('focusables-negated');
    // var $focusables = $ele.find('a,select,input,iframe,input,button,textarea,form,label');
    var $focusables = $ele.find(
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]'
    );
    $focusables = $focusables.add($ele);
    $focusables.each(function () {
      var $focusable = jQuery(this);
      // console.log('$focusable',$focusable.text(),$focusable);
      if ($focusable.is('[tabindex="-1"]')) {
        // console.log('focusable is already nontabbable');
        $focusable.addClass('og-negativetabindex');
      } else {
        // console.log('focusable is ready to be nontabbable');
        $focusable.attr('tabindex', '-1');
      }
    });
  }
}
function removeNegativeTabIndex($ele) {
  let debug = false;
  if (debug && window.console) {
    console.log('removeNegativeTabIndex($ele)', $ele);
  }
  var $unfocusables = $ele.find('[tabindex="-1"]');
  $unfocusables = $unfocusables.add($ele);
  $unfocusables.each(function () {
    var $unfocusable = jQuery(this);
    if (!$unfocusable.is('.og-negativetabindex')) {
      $unfocusable.removeAttr('tabindex');
    }
  });
  $ele.removeClass('focusables-negated');
}

function forceScroller($ele, nVisibleOffset) {
    let debug = false;
    let nOffsetTop = 0;
    const nDefaultVisibleOffset = 10;
    if (nVisibleOffset) {
        nOffsetTop = nOffsetTop + nVisibleOffset;
    } else {
        nOffsetTop = nOffsetTop + nDefaultVisibleOffset;
    }
    // console.log("initial nOffsetTop", nOffsetTop);
    if (jQObjHasDom($ele)) {
        const viewport = updateViewportDimensions();
        const $header = jQuery(".inner-header-base");

        if (viewport.width >= 1024) {
            nOffsetTop = nOffsetTop + parseInt($header.outerHeight());
            if (debug && window.console) {
                console.log("added $header.outerHeight()", nOffsetTop);
            }
        }
        if (jQuery("body").is(".admin-bar")) {
            nOffsetTop = nOffsetTop + 32;
            if (debug && window.console) {
                console.log("added .admin-bar height", nOffsetTop);
            }
        }

        let topPosition = $ele.offset().top - nOffsetTop;
        window.scrollTo({
            top: topPosition,
            behavior: "smooth",
        });
    }
}

function setupSelfTogglers(){
    const selfTogglers = document.querySelectorAll('[data-self-toggle-class]');
    selfTogglers.forEach(toggler => {
        const sSelfToggleClasses = toggler.getAttribute('data-self-toggle-class');
        toggler.addEventListener('click', () => {
            toggler.classList.toggle(sSelfToggleClasses);
        })
    })
}

function setupMainMenuTogglers(){
    const mainMenuTogglers = document.querySelectorAll('[data-main-menu-toggle-class]');
    const mainHeader = document.querySelector('.main-header');
    const mainMenuContainer = document.querySelector('.main-menu-container');

    const $firstMobileOnlyEle = jQuery('.mq-mobileonly').first();
    
    mainMenuTogglers.forEach(toggler => {
        const sMainMenuToggleClasses = toggler.getAttribute('data-main-menu-toggle-class');
        toggler.addEventListener('click', () => {
            console.log('mainHeader.classList',mainHeader.classList);
            if($firstMobileOnlyEle.is(':visible')){
                if(!mainHeader.classList.contains('main-menu-open')){
                    // mainMenuContainer.removeAttribute('tabindex');
                    removeNegativeTabIndex(jQuery(mainMenuContainer));
                } else {
                    // mainMenuContainer.setAttribute('tabindex',-1);
                    addNegativeTabIndex(jQuery(mainMenuContainer));
                }
            }
            mainHeader.classList.toggle(sMainMenuToggleClasses);
        });
    });

    const mainMenuCloser = document.querySelector('.main-menu-closer');
    if(mainMenuCloser){
        mainMenuCloser.addEventListener('click', () => {
            console.log('mainMenuCloser clicked');
            mainHeader.classList.remove('main-menu-open');
            // mainMenuContainer.setAttribute('tabindex','-1');
            if($firstMobileOnlyEle.is(':visible')){
                addNegativeTabIndex(jQuery(mainMenuContainer));
            }

        });
    }

    // const headerOverlay = document.querySelector('#inner-header .overlay');
    // if(headerOverlay){
    //     headerOverlay.addEventListener('click', () => {
    //         mainMenuCloser.click();
    //     });
    // }

    if(!mainHeader.classList.contains('main-menu-open')){
        // mainMenuContainer.setAttribute('tabindex',-1);
        if($firstMobileOnlyEle.is(':visible')){
            addNegativeTabIndex(jQuery(mainMenuContainer));
        }
    }
}

function setupGeneralTogglers(){
	var $togglers = jQuery(
		'[data-toggle-target][data-toggle-classes],[data-toggle-closest-target][data-toggle-classes]'
	).not('[data-toggle-active-class]');
	$togglers.each(function () {
		var $toggler = jQuery(this);
		var $target = $toggler.is('[data-toggle-target]')
			? jQuery($toggler.attr('data-toggle-target'))
			: $toggler.closest($toggler.attr('data-toggle-closest-target'));
		var sClasses = $toggler.attr('data-toggle-classes');
		$toggler.on('click', function () {
			if ($target && $target.length) {
				if ($toggler.is('[data-toggle-there-can-be-only-one]')) {
					var $targetActiveSiblings = $target.siblings(
						'.' + $toggler.attr('data-toggle-there-can-be-only-one')
					);
					// console.log('$targetSiblings',$targetSiblings);
					// $targetActiveSiblings.toggleClass(sClasses);
					$target.add($targetActiveSiblings).toggleClass(sClasses);
				} else {
					$target.toggleClass(sClasses);
				}
				// onResizeStuff();
			}
			if ($toggler.is('[data-toggle-self-classes]')) {
				var sSelfClasses = $toggler.attr('data-toggle-self-classes');
				$togger.toggleClass(sSelfClasses);
			}
		});
		if ($toggler.is('div')) {
			if (!$toggler.is('[tabindex]')) {
				$toggler.attr('tabindex', '0');
			}
			$toggler.on('keypress', function (e) {
				if (e.which == 13 || e.which == 32) {
					// enter or spacebar
					e.preventDefault();
					$toggler.trigger('click');
				}
			});
		}
	});
	var $specificTogglers = jQuery(
		'[data-toggle-target][data-toggle-classes][data-toggle-active-class],[data-toggle-closest-target][data-toggle-classes][data-toggle-active-class]'
	);
	$specificTogglers.each(function () {
		var $toggler = jQuery(this);
		var $target = $toggler.is('[data-toggle-target]')
			? jQuery($toggler.attr('data-toggle-target'))
			: $toggler.closest($toggler.attr('data-toggle-closest-target'));
		var sClasses = $toggler.attr('data-toggle-classes');
		var sActiveClass = $toggler.attr('data-toggle-active-class');
		$toggler.on('click', function () {
			if ($target && $target.length) {
				$target.removeClass(sClasses);
				$target.addClass(sActiveClass);
			}
			if ($toggler.is('[data-toggle-self-classes]')) {
				var sSelfClasses = $toggler.attr('data-toggle-self-classes');
				$togger.toggleClass(sSelfClasses);
			}
		});
	});
}

// "Stuck" means fixed position (looks like sticky at the top of the viewport)
// resting mode is actually absolute when the page loads normally
function setMainNavStuck(){
    let debug = false;
    if(debug && window.console){
        console.log('setMainNavStuck()');
    }
    const mainHeader = document.querySelector('.main-header');
    if(mainHeader){
        mainHeader.classList.add('stuck');
        mainHeader.classList.remove('spring-load-position');
    }
    if(debug && window.console){
        console.log('mainHeader.classList',mainHeader.classList);
    }
}

function setMainNavSpringLoad(){
    let debug = false;
    const sFallbackDuration = '0.3s, 0s';
    if(debug && window.console){
        console.log('setMainNavSpringLoad()');
    }
    const mainHeader = document.querySelector('.main-header');
    if(mainHeader){
        const sFoundTransDuration = mainHeader.style.transitionDuration || sFallbackDuration;
        // if(debug && window.console){
        //     console.log('sFoundTransDuration',sFoundTransDuration);
        //     console.log('mainHeader.style.transitionDuration',mainHeader.style.transitionDuration);
        // }    
        mainHeader.setAttribute('data-transition-duration',sFoundTransDuration);
        mainHeader.style.transitionDuration = '0s, 0s';
        // if(debug && window.console){
        //     console.log('transition duration set to 0s');
        //     console.log('mainHeader.style.transitionDuration',mainHeader.style.transitionDuration);
        // }
        mainHeader.classList.add('spring-load-position');
        mainHeader.classList.remove('initial-position','stuck');
        mainHeader.style.transitionDuration = sFoundTransDuration;
        // if(debug && window.console){
        //     console.log('transition duration set to initial value sFoundTransDuration',sFoundTransDuration);
        //     console.log('mainHeader.style.transitionDuration',mainHeader.style.transitionDuration);
        // }
    }
    if(debug && window.console){
        console.log('mainHeader.classList',mainHeader.classList);
    }
}

function setMainNavUnstuck(){
    let debug = false;
    if(debug && window.console){
        console.log('setMainNavUnstuck()');
    }
    const mainHeader = document.querySelector('.main-header');
    if(mainHeader){
        mainHeader.classList.add('initial-position');
        mainHeader.classList.remove('stuck','spring-load-position');
        mainHeader.classList.remove('stuck','spring-load-position');
    }
    if(debug && window.console){
        console.log('mainHeader.classList',mainHeader.classList);
    }
}

function setupFirstContentSectionScrollAwayDetection(){
    let debug = false;
    if(debug && window.console){
        console.log('setupFirstContentSectionScrollAwayDetection()');
    }
    const firstContentSection = document.querySelector('.content-section');
    if(debug && window.console){
        console.log('firstContentSection',firstContentSection);
    }

    let observerOptions = {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.7, 0.9, 1]
    };
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const nRoundedIntersectionRatio = Math.round(entry.intersectionRatio * 100) / 100;
            if(debug && window.console){
                console.log('entry',entry);
                console.log('entry.intersectionRatio',entry.intersectionRatio);
                console.log('nRoundedIntersectionRatio',nRoundedIntersectionRatio);
            }

            switch(true){
                case (nRoundedIntersectionRatio == 0):
                    setMainNavStuck();
                    break;
                case (nRoundedIntersectionRatio <= 0.34):
                    setMainNavSpringLoad();
                    break;
                case (nRoundedIntersectionRatio > 0.34):
                    setMainNavUnstuck();
                    break;
            }

        })
    },observerOptions);
    observer.observe(firstContentSection);
    
}

function setupTogglers(){
    setupSelfTogglers();
    setupMainMenuTogglers();
    // setupBookingTogglers();
    setupGeneralTogglers();
    // setupShowMoreExperiences();
}

// function setupShowMoreExperiences(){
//     const $showMoreExperiences = jQuery('[data-click-remove-class-target]');
//     $showMoreExperiences.each(function(){
//         const $showButton = jQuery(this);
//         const sShowButtonClass = $showButton.attr('data-click-remove-class-target');
//         const $target = jQuery('.'+sShowButtonClass);
//         if(jQObjHasDom($target)){
//             $showButton.on('click',function(e){
//                 e.preventDefault();
//                 $target.removeClass(sShowButtonClass);
//             });
//         }
//     });
// }

function thisClicksThat(){
    jQuery('body').on('click','[data-trigger-click]',function(){
        var $trigger = jQuery(this);
        var sTargetSelector = $trigger.attr('data-trigger-click');
        var $triggerTarget = jQuery(sTargetSelector).first();
        if($triggerTarget && $triggerTarget.length){
            $triggerTarget.trigger('click');
        }
    });
}


function setupMainHeirMenu() {
	const $menuItemsWithChildren = jQuery('.nav.main-menu li.menu-item-has-children');
	$menuItemsWithChildren.each(function () {
		const $m = jQuery(this);
		const $a = $m.find('> a');
        const $chevron = jQuery('<span class="menu-icon mq-desktoponly"><i class="fa-solid fa-chevron-down"></i></span>');
        $chevron.appendTo($a);

		// const $toggle = jQuery(
		// 	'<button class="sub-menu-toggle mq-desktoponly" data-toggle-closest-target="li" data-toggle-classes="sub-menu-open sub-menu-closed"><span class="visually-hidden">toggle menu</span><span class="menu-icon"><i class="fa-regular fa-chevron-down"></i></span></button>'
		// );
		// $a.wrap('<div class="menu-item-w-toggler-row"></div>');
		// $m.addClass('sub-menu-closed');
		// $toggle.insertAfter($a);
	});
}

function setupMobileMenuToggle(){
    let debug = false;
    if(debug && window.console){
        console.log('setupMobileMenuToggle()');
    };
    const $body = jQuery('body');
    const $firstMobileOnlyEle = jQuery('.mq-mobileonly').first();
    const bInMobileRange = $firstMobileOnlyEle.is(':visible');
    const $mainHeader = jQuery('#header');
    const $largeHero = jQuery('.block-npc-hero.hero-type--large-image,.block-npc-hero.hero-type--large-video');
    if(bInMobileRange && $mainHeader && $mainHeader.length){
        const scrollingHeaderObserver = new IntersectionObserver(function(entries) {
            if(debug && window.console){
                console.log('entries[0].isIntersecting',entries[0].isIntersecting);
            }
            // If the target is intersecting (visible), remove the class
            if(entries[0].isIntersecting) {
                $body.removeClass('mobile-header-scrolled-above');
            } else {
                $body.addClass('mobile-header-scrolled-above');
            }
        }, { threshold: 0 });

        scrollingHeaderObserver.observe($mainHeader[0]);

    }
    if(debug && window.console){
        console.log('bInMobileRange',bInMobileRange);
    }
}


// var initializedSliderVideoPlayers = [];
// function updateSliderVideoStates(activeSlide,prevSlide){
//     let debug = false;
//     const bActiveIndexIsVideo = activeSlide.classList.contains('slide-video');
//     const bPrevIndexIsVideo = prevSlide.classList.contains('slide-video');
//     const bActiveIndexVideoInitialized = activeSlide.classList.contains('video-initialized');
//     const bPrevIndexVideoInitialized = prevSlide.classList.contains('video-initialized');

//     if(bPrevIndexVideoInitialized && bPrevIndexIsVideo){
//         const prevSlideVideoContainer = prevSlide.closest('.slide-video');
//         const sPrevSlideVideoContainerId = prevSlideVideoContainer.id;
//         const prevSlideVideoPlayer = initializedSliderVideoPlayers[sPrevSlideVideoContainerId];
//         if(prevSlideVideoPlayer){
//             prevSlideVideoPlayer.pause();
//         } else {
//             if(debug && window.console){
//                 console.log('prevSlideVideoPlayer not found in initializedSliderVideoPlayers');
//             }
//         }
//         if(debug && window.console){
//             console.log('sPrevSlideId',sPrevSlideVideoContainerId);
//             console.log('window.initializedSliderVideoPlayers',window.initializedSliderVideoPlayers);
//         }
//     }


//     if(!bActiveIndexVideoInitialized && bActiveIndexIsVideo){
//         const $activeSlideVideo = jQuery(activeSlide).find('.video.plyr__video-embed');
//         setupBackgroundVideoWithMute($activeSlideVideo);
//         activeSlide.classList.add('video-initialized');
//     } else {
//         if(bActiveIndexIsVideo && bActiveIndexVideoInitialized){
//             const activeSlideVideoContainer = activeSlide.closest('.slide-video');
//             const sActiveSlideVideoContainerId = activeSlideVideoContainer.id;
//             const activeSlideVideoPlayer = initializedSliderVideoPlayers[sActiveSlideVideoContainerId];
//             if(activeSlideVideoPlayer){
//                 activeSlideVideoPlayer.muted = true;
//                 activeSlideVideoPlayer.play();
//             } else {
//                 if(debug && window.console){
//                     console.log('activeSlideVideoPlayer not found in initializedSliderVideoPlayers');
//                 }
//             }
//             if(debug && window.console){
//                 console.log('sActiveSlideId',sActiveSlideVideoContainerId);
//                 console.log('window.initializedSliderVideoPlayers',window.initializedSliderVideoPlayers);
//             }
//         }
//     }


//     if(debug && window.console){
//         console.log('updateSliderVideoStates(activeSlide,prevSlide)');
//         // console.log('swiperInstance',swiperInstance);
//         // console.log('activeIndex',activeIndex);
//         console.log('activeSlide',activeSlide);
//         console.log('bActiveIndexIsVideo',bActiveIndexIsVideo);
//         // console.log('prevIndex',prevIndex);
//         console.log('prevSlide',prevSlide);
//         console.log('bPrevIndexIsVideo',bPrevIndexIsVideo);
//     }
// }


// These LargeSwipers include the "large" hero slider and can contain videos
// function setupLargeSwipers(){
//     let debug = false;
//     const $swiperEles = jQuery('.content-section-large-slider.swiper,.large-slider-actual.swiper');
    
//     let swiperOptions = {
//         loop: true,
//         slidesPerView: 1,
//         autoHeight: true,
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//         keyboard: {
//             enabled: true,
//             onlyInViewport: false
//         },
//         parallax: true
//     };
                
//     if(debug && window.console){
//         console.log('setupLargeSwipers()');
//         console.log('$swiperEles',$swiperEles);
//         console.log('swiperOptions (default)',swiperOptions);
//     }

//     $swiperEles.each(function(){
//         const $swiperEle = jQuery(this);
//         const bSwiperEleHasVideo = $swiperEle.find('.slide-video').length;
//         const $exploreHint = $swiperEle.find('.explore-hint');
//         let thisSwiperOptions = swiperOptions;
        
//         if(debug && window.console){
//             console.log('bSwiperEleHasVideo',bSwiperEleHasVideo);
//             console.log('thisSwiperOptions',thisSwiperOptions);
//         }

//         if($swiperEle.is('[data-swiper-speed]')){
//             const nSpeed = parseInt($swiperEle.attr('data-swiper-speed'));
//             thisSwiperOptions.speed = nSpeed;
//         }
//         if($swiperEle.is('[data-swiper-effect]')){
//             const sEffect = $swiperEle.attr('data-swiper-effect');
//             thisSwiperOptions.effect = sEffect;
//         }

//         if($swiperEle.is('[data-swiper-autoplay="true"][data-swiper-delay]')){
//             const nDelay = parseInt($swiperEle.attr('data-swiper-delay'));
//             thisSwiperOptions.autoplay = {
//                 delay: nDelay
//             }
//         } else {
//             thisSwiperOptions.autoplay = false;
//         }

//         if($swiperEle.find('.swiper-pagination').length){
//             thisSwiperOptions.pagination = {
//                 el: ".swiper-pagination",
//                 clickable: true
//             }
//         }

//         if(bSwiperEleHasVideo){
//             thisSwiperOptions.on = {
//                 init: function () {
//                     if(debug && window.console){
//                         console.log('EVENT swiper init');
//                     }

//                     const swiperInstance = this;
//                     const activeIndex = swiperInstance.activeIndex;
//                     const activeSlide = swiperInstance.slides[activeIndex];
//                     const prevIndex = swiperInstance.previousIndex;
//                     const prevSlide = swiperInstance.slides[prevIndex];
                    
//                     updateSliderVideoStates(activeSlide,prevSlide);

//                 },
//                 realIndexChange: function () {
//                     if(debug && window.console){
//                         console.log('EVENT swiper realIndexChange');
//                     }
//                     const swiperInstance = this;
//                     const activeIndex = swiperInstance.activeIndex;
//                     const activeSlide = swiperInstance.slides[activeIndex];
//                     const prevIndex = swiperInstance.previousIndex;
//                     const prevSlide = swiperInstance.slides[prevIndex];
                    
//                     updateSliderVideoStates(activeSlide,prevSlide);

//                 }
//             }
//         }

//         if(debug && window.console){
//             console.log('thisSwiperOptions',thisSwiperOptions);
//         }
    
//         const largeSwiper = new Swiper($swiperEle.get(0), thisSwiperOptions);

//         if($exploreHint && $exploreHint.length){
//             watchExploreHint($exploreHint,$swiperEle);
//         }
//     });
// }

function setupTestimonialSliders(){
    let debug = false;
    if(debug && window.console){
        console.log('setupTestimonialSliders()');
    }
    const $testimonialSwipers = jQuery('.testimonial-slider-inner.swiper');
    $testimonialSwipers.each(function(){
        const $testimonialSwiper = jQuery(this);
        const $slides = $testimonialSwiper.find('.swiper-slide');
        const nSlideCount = jQObjHasDom($slides) ? $slides.length : 0;
        const bEnoughSlidesToLoop = nSlideCount > 3 ? true : false;
        const bLoop = bEnoughSlidesToLoop ? true : false;
        let oTestimonialSwiperOptions = {
            centeredSlides: false,
            loop: bLoop,
            effect: 'slide',
            slidesPerView: 'auto',
            spaceBetween: 50,
            navigation: {
                nextEl: '.testimonial-slider-button-next',
                prevEl: '.testimonial-slider-button-prev'
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            breakpoints: {
                1280: {
                    slidesPerView: 3
                }
            }
        }

        const testimonialSwiper = new Swiper($testimonialSwiper.get(0), oTestimonialSwiperOptions);
        if(debug && window.console){
            console.log('$testimonialSwiper',$testimonialSwiper);
            console.log('bEnoughSlidesToLoop',bEnoughSlidesToLoop);
            // console.log('$testimonialSwiperSlides',$testimonialSwiperSlides);
            console.log('oTestimonialSwiperOptions',oTestimonialSwiperOptions);
            console.log('testimonialSwiper',testimonialSwiper);
        }
    });
}

function setupFeaturedCiderSliders(){
    let debug = false;
    if(debug && window.console){
        console.log('setupFeaturedCiderSliders()');
    }
    const $featuredCiderSwipers = jQuery('.fc-carousel.swiper');
    $featuredCiderSwipers.each(function(){
        const $featuredCiderSwiper = jQuery(this);
        const $slides = $featuredCiderSwiper.find('.swiper-slide');
        const nSlideCount = jQObjHasDom($slides) ? $slides.length : 0;
        const bEnoughSlidesToLoop = nSlideCount > 1 ? true : false;
        const bLoop = bEnoughSlidesToLoop ? true : false;


        
        const sAutoPlaySpeed = $featuredCiderSwiper.closest('.block-featured-cider').attr('data-slider-delay');
        const nAutoPlaySpeed = !sAutoPlaySpeed || isNaN(parseFloat(sAutoPlaySpeed)) ? 0 : parseFloat(sAutoPlaySpeed);
        const bAutoPlay = nAutoPlaySpeed > 0 ? true : false;
        const oAutoPlayOption = bAutoPlay ? {delay: nAutoPlaySpeed} : false;

        // console.log('sAutoPlaySpeed',sAutoPlaySpeed);
        // console.log('nAutoPlaySpeed',nAutoPlaySpeed);
        // console.log('bAutoPlay',bAutoPlay);
        // console.log('oAutoPlayOption',oAutoPlayOption);

        let oFCSwiperOptions = {
            centeredSlides: true,
            loop: bLoop,
            effect: 'slide',
            slidesPerView: 1,
            spaceBetween: 0,
            navigation: {
                nextEl: '.fc-slider-button-next',
                prevEl: '.fc-slider-button-prev'
            },
            pagination: {
                el: ".fc-slider-pagination",
                clickable: true
            },
            autoplay: oAutoPlayOption,
            on: {
                slideChangeTransitionStart: function() {
                    // console.log('DO IT?');
                    const activeSlide = $featuredCiderSwiper.find('.swiper-slide-active').get(0);
                    const mainImage = activeSlide.querySelector('.fc-image img');
                    const title = activeSlide.querySelector('h3');
                    const textBlurb = activeSlide.querySelector('.blurb-container');
                    const learnMoreButton = activeSlide.querySelector('.button');
                  
                    const fromOffsetRight = '30px';
                    const fromOffsetLeft = '-30px';
                    const aniDuration = 0.5;
                    const staggerAmount = '<.5';
                    const staggerAmountShort = '<.2';
                    
                    const tl = gsap.timeline();
                    tl.fromTo(mainImage, {opacity: 0, x: fromOffsetLeft}, {opacity: 1, x: '0%', duration: aniDuration});
                    tl.fromTo(title, {opacity: 0, x: fromOffsetRight}, {opacity: 1, x: '0%', duration: aniDuration}, staggerAmount);
                    tl.fromTo(textBlurb, {opacity: 0, x: fromOffsetRight}, {opacity: 1, x: '0%', duration: aniDuration}, staggerAmount);
                    tl.fromTo(learnMoreButton, {opacity: 0, x: fromOffsetRight}, {opacity: 1, x: '0%', duration: aniDuration}, staggerAmountShort);
                }
            },
            breakpoints: {
                1024: {
                    slidesPerView: 1
                }
            }
        }
        const featuredCiderSwiper = new Swiper($featuredCiderSwiper.get(0), oFCSwiperOptions);

    });
}

function setupEventSlider(){
    let debug = false;
    if(debug && window.console){
        console.log('setupMobileEventSlider()');
    }
    const $eventsSwiperContainers = jQuery('.main-footer-top .em-view-container,.event-upcoming-list .em-view-container');
    $eventsSwiperContainers.each(function(){
        const $eventsSwiperContainer = jQuery(this);
        if($eventsSwiperContainer.is(':visible')){
            const $eventsInner = $eventsSwiperContainer.find('.em-events-list');
            const $events = $eventsInner.find('.em-event');
            const nEventCount = $events.length || 0;
    
            const nEventPreferredWidth = 278;
            const nEventPreferredGap = 30;
    
            let nEventsFit = $eventsSwiperContainer.outerWidth() / (nEventPreferredWidth);
            if(nEventsFit > 4){
                nEventsFit = 4;
            }
    
            if(debug && window.console){
                console.log('nEventsFit',nEventsFit);
            }
    
            if(nEventCount > 1){
                $eventsSwiperContainer.addClass('swiper');
                $eventsInner.addClass('swiper-wrapper');
                $events.addClass('swiper-slide');
                $eventsInner.after('<div class="event-slider-pagination swiper-pagination mq-mobileonly"></div>');
    
                const bEnoughSlidesToLoop = nEventCount > 8 ? true : false;
                const bLoop = bEnoughSlidesToLoop ? true : false;
                const oEventsSwiperOptions = {
                    loop: bLoop,
                    slidesPerView: nEventsFit,
                    spaceBetween: nEventPreferredGap,
                    autoHeight: false,
                    pagination: {
                        el: ".event-slider-pagination",
                        clickable: true
                    }
                }
                if(debug && window.console){
                    console.log('oEventsSwiperOptions', oEventsSwiperOptions);
                }

                const eventsSwiper = new Swiper($eventsSwiperContainer.get(0), oEventsSwiperOptions);
            }
        }
    });
}

// function setupImageStripSliders(){
//     let debug = true;
//     if(debug && window.console){
//         console.log('setupImageStripSliders()');
//     }
//     const $imageStripSwiperContainers = jQuery('.image-strip-inner.swiper');
//     $imageStripSwiperContainers.each(function(){
//         const $imageStripSwiperContainer = jQuery(this);
        
//         const $imageStripInner = $imageStripSwiperContainer.find('.image-strip-inner');
//         const $images = $imageStripInner.find('img');
//         const nImageCount = $images.length || 0;

//         const nEventPreferredGap = 30;

//         if(nImageCount > 1){
//             // $imageStripSwiperContainer.addClass('swiper');
//             // $imageStripInner.addClass('swiper-wrapper');
//             // $images.addClass('swiper-slide');
//             // $imageStripInner.after('<div class="image-strip-slider-pagination swiper-pagination mq-mobileonly"></div>');

//             const bEnoughSlidesToLoop = nImageCount > 3 ? true : false;
//             // const bLoop = bEnoughSlidesToLoop ? true : false;
//             const oImageStripSwiperOptions = {
//                 slidesPerView: "auto",
//                 navigation: {
//                     nextEl: '.image-strip-slider-button-next',
//                     prevEl: '.image-strip-slider-button-prev'
//                 }
//             }
//             const imageStripSwiper = new Swiper($imageStripSwiperContainer.get(0), oImageStripSwiperOptions);
//         }
        
//     });
// }

function setupRelatedCiderSliders(){
    let debug = false;
    if(debug && window.console){
        console.log('setupRelatedCiderSliders()');
    }
    const $relatedCiderSwipers = jQuery('.related-cider-outer.swiper');
    $relatedCiderSwipers.each(function(){
        const $relatedCiderSwiper = jQuery(this);
        const $slides = $relatedCiderSwiper.find('.swiper-slide');
        const nSlideCount = jQObjHasDom($slides) ? $slides.length : 0;
        const bEnoughSlidesToLoop = nSlideCount > 1 ? true : false;
        const bLoop = bEnoughSlidesToLoop ? true : false;
        
        const bAutoPlay = false;
        const oAutoPlayOption = bAutoPlay ? {delay: nAutoPlaySpeed} : false;

        let oRCSwiperOptions = {
            centeredSlides: true,
            loop: bLoop,
            effect: 'slide',
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: {
                el: ".rc-slider-pagination",
                clickable: true
            },
            autoplay: oAutoPlayOption,
            centerInsufficientSlides: false,
            on: {
                slideChangeTransitionStart: function() {
                    // console.log('DO IT?');
                    // const activeSlide = $relatedCiderSwiper.find('.swiper-slide-active').get(0);
                    // const mainImage = activeSlide.querySelector('.fc-image img');
                    // const title = activeSlide.querySelector('h3');
                    // const meta = activeSlide.querySelector('.entry-meta');
                    // const learnMoreButton = activeSlide.querySelector('.button');
                  
                    // const fromOffsetRight = '30px';
                    // const fromOffsetLeft = '-30px';
                    // const aniDuration = 0.5;
                    // const staggerAmount = '<.5';
                    // const staggerAmountShort = '<.2';
                    
                    // const tl = gsap.timeline();
                    // tl.fromTo(mainImage, {opacity: 0, x: fromOffsetLeft}, {opacity: 1, x: '0%', duration: aniDuration});
                    // tl.fromTo(title, {opacity: 0, x: fromOffsetRight}, {opacity: 1, x: '0%', duration: aniDuration}, staggerAmount);
                    // tl.fromTo(meta, {opacity: 0, x: fromOffsetRight}, {opacity: 1, x: '0%', duration: aniDuration}, staggerAmountShort);
                }
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3
                }
            }
        }
        const relatedCiderSwiper = new Swiper($relatedCiderSwiper.get(0), oRCSwiperOptions);
        if(debug && window.console){
            console.log('$relatedCiderSwiper',$relatedCiderSwiper);
            console.log('oAutoPlayOption',oAutoPlayOption);
            console.log('oRCSwiperOptions',oRCSwiperOptions);
            console.log('relatedCiderSwiper',relatedCiderSwiper);
        }
    });
}


function setupSwipers(){
    let debug = false;
    if(debug && window.console){
        console.log('setupSwipers()');
    }
    setupEventSlider();
    setupTestimonialSliders();
    setupFeaturedCiderSliders();
    setupRelatedCiderSliders();
    // setupImageStripSliders();
}

function setupSearchTogglers(){
    let debug = false;
    if(debug && window.console){
        console.log('setupSearchTogglers()');
    }
    const $searchTogglers = jQuery('a[href="#searchForm"]');
    $searchTogglers.each(function(){
        const $searchToggler = jQuery(this);
        const $searchFormFinder = $searchToggler.closest('[data-search-selector]');
        const sSearchFormSelector = $searchFormFinder.attr('data-search-selector');
        const $searchFormContainer = jQuery(sSearchFormSelector);

        if(debug && window.console){
            console.log('$searchToggler',$searchToggler);
            console.log('$searchFormFinder',$searchFormFinder);
            console.log('sSearchFormSelector',sSearchFormSelector);
            console.log('$searchFormContainer',$searchFormContainer);
        }

        // const $heroSearch = jQuery('.large-hero-search-container');
        $searchToggler.on('click',function(e){
            e.preventDefault();
            const bWasClosed = $searchFormContainer.is('.is-closed');
            if(bWasClosed){
                $searchToggler.addClass('active');
                const $searchInput = $searchFormContainer.find('input[type="search"]');
                if(jQObjHasDom($searchInput)){
                    $searchInput.focus();
                }
            } else{
                $searchToggler.removeClass('active');
            }
            $searchFormContainer.toggleClass('is-open is-closed');
        });
    });
}

function setupHead(){
    setupMobileMenuToggle();
    setupMainHeirMenu();
    setupDesktopMenuHalfsies();
    setupSearchTogglers();
}


function setupGalleryLightBoxThing(){
    let debug = false;
    // based on photoswiped demo
    const initPhotoSwipeFromDOM = function (gallerySelector) {
        const parseThumbnailElements = function (el) {
            const thumbElements = el.childNodes;
            const numNodes = thumbElements.length;
            const items = [];
            var el;
            let childElements;
            let thumbnailEl;
            let size;
            let item;

            for (let i = 0; i < numNodes; i++) {
                el = thumbElements[i];

                // include only element nodes
                if (el.nodeType !== 1 || el.hasAttribute('data-featherlight-iframe-style')) {
                    continue;
                }

                childElements = el.children;

                size = el.getAttribute('data-size').split('x');

                // create slide object
                item = {
                    src: el.getAttribute('data-lg-src'),
                    w: parseInt(size[0], 10),
                    h: parseInt(size[1], 10)
                };

                item.el = el; // save link to element for getThumbBoundsFn

                item.msrc = el.getAttribute('data-sm-src');

                if (jQuery(el).is('[title]')) {
                    item.title = el.getAttribute('title'); // caption (contents of figure)
                }

                if (childElements.length > 0) {
                    if (childElements.length > 1) {
                        // item.title = childElements[1].innerHTML; // caption (contents of figure)
                    }
                }

                size = el.getAttribute('data-sm-size').split('x');

                item.m = {
                    src: el.getAttribute('data-sm-src'),
                    w: parseInt(size[0], 10),
                    h: parseInt(size[1], 10)
                };

                // original image
                item.o = {
                    src: item.src,
                    w: item.w,
                    h: item.h
                };

                let sCaptionAttr = el.getAttribute('data-caption');
                if (sCaptionAttr) {
                    // console.log('from caption',sCaptionAttr)
                    item.title = sCaptionAttr;
                }

                items.push(item);
            }
            if (window.console) {
                console.log('items', items);
            }
            return items;
        };

        // find nearest parent element
        const closest = function closest(el, fn) {
            return el && (fn(el) ? el : closest(el.parentNode, fn));
        };

        const onThumbnailsClick = function (e) {
            e = e || window.event;
            e.preventDefault ? e.preventDefault() : (e.returnValue = false);

            const eTarget = e.target || e.srcElement;

            const clickedListItem = closest(eTarget, function (el) {
                return el.tagName === 'FIGURE';
            });

            if (!clickedListItem) {
                return;
            }

            const clickedGallery = clickedListItem.parentNode;

            const { childNodes } = clickedListItem.parentNode;
            const numChildNodes = childNodes.length;
            let nodeIndex = 0;
            let index;

            for (let i = 0; i < numChildNodes; i++) {
                if (childNodes[i].nodeType !== 1) {
                    continue;
                }

                if (childNodes[i] === clickedListItem) {
                    index = nodeIndex;
                    break;
                }
                nodeIndex++;
            }

            if (index >= 0) {
                openPhotoSwipe(index, clickedGallery);
            }
            return false;
        };

        const photoswipeParseHash = function () {
            const hash = window.location.hash.substring(1);
            const params = {};

            if (hash.length < 5) {
                // pid=1
                return params;
            }

            const vars = hash.split('&');
            for (let i = 0; i < vars.length; i++) {
                if (!vars[i]) {
                continue;
                }
                const pair = vars[i].split('=');
                if (pair.length < 2) {
                continue;
                }
                params[pair[0]] = pair[1];
            }

            if (params.gid) {
                params.gid = parseInt(params.gid, 10);
            }

            return params;
        };

        var openPhotoSwipe = function (
            index,
            galleryElement,
            disableAnimation,
            fromURL
            ) {
            const pswpElement = document.querySelectorAll('.pswp')[0];
            let gallery;
            let options;
            let items;

            items = parseThumbnailElements(galleryElement);

            // define options (if needed)
            options = {
                galleryUID: galleryElement.getAttribute('data-pswp-uid'),

                getThumbBoundsFn(index) {
                    // See Options->getThumbBoundsFn section of docs for more info
                    const thumbnail = items[index].el.children[0];
                    
                    const eleFigure = thumbnail.closest('figure');
                    if(debug && window.console){
                        console.log('thumbnail', thumbnail);
                        console.log('eleFigure', eleFigure);
                    }

                    let pageYScroll =
                        window.pageYOffset || document.documentElement.scrollTop;
                    let rect = eleFigure.getBoundingClientRect();

                    return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
                },

                addCaptionHTMLFn(item, captionEl, isFake) {
                    if (!item.title) {
                        captionEl.children[0].innerText = '';
                        return false;
                    }
                    // captionEl.children[0].innerHTML = item.title +  '<br/><small>Photo: ' + item.author + '</small>';
                    captionEl.children[0].innerHTML = item.title;
                    return true;
                }
            };

            if (fromURL) {
                if (options.galleryPIDs) {
                    // parse real index when custom PIDs are used
                    // https://photoswipe.com/documentation/faq.html#custom-pid-in-url
                    for (let j = 0; j < items.length; j++) {
                        if (items[j].pid == index) {
                        options.index = j;
                        break;
                        }
                    }
                } else {
                    options.index = parseInt(index, 10) - 1;
                }
            } else {
                options.index = parseInt(index, 10);
            }

            // exit if index not found
            if (isNaN(options.index)) {
                return;
            }

            options.mainClass = 'pswp--minimal--medium';
            options.barsSize = { top: 130, bottom: 'auto' };
            options.captionEl = true;
            options.fullscreenEl = false;
            options.shareEl = false;
            options.bgOpacity = 0.6;
            options.tapToClose = true;
            options.tapToToggleControls = false;
            options.showHideOpacity = true;
            // options.padding = { top: 130, bottom: 130, left: 130, right: 130 };

            if (disableAnimation) {
                options.showAnimationDuration = 0;
            }

            // Pass data to PhotoSwipe and initialize it
            gallery = new PhotoSwipe(
                pswpElement,
                PhotoSwipeUI_Default,
                items,
                options
            );

            // see: http://photoswipe.com/documentation/responsive-images.html
            let realViewportWidth;
            let useLargeImages = false;
            let firstResize = false;
            let imageSrcWillChange;

            gallery.listen('beforeResize', function () {
                let dpiRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
                dpiRatio = Math.min(dpiRatio, 2.5);
                realViewportWidth = gallery.viewportSize.x * dpiRatio;

                if (realViewportWidth >= 1200 ||
                    (!gallery.likelyTouchDevice && realViewportWidth > 800) ||
                    screen.width > 1200
                    ) {
                        if (!useLargeImages) {
                            useLargeImages = true;
                            imageSrcWillChange = true;
                        }
                } else if (useLargeImages) {
                    useLargeImages = false;
                    imageSrcWillChange = true;
                }

                if (imageSrcWillChange && !firstResize) {
                    gallery.invalidateCurrItems();
                }

                if (firstResize) {
                    firstResize = false;
                }

                imageSrcWillChange = false;
            });

            gallery.listen('gettingData', function (index, item) {
                if (useLargeImages) {
                    item.src = item.o.src;
                    item.w = item.o.w;
                    item.h = item.o.h;
                } else {
                    item.src = item.m.src;
                    item.w = item.m.w;
                    item.h = item.m.h;
                }
            });

            gallery.init();
        };

        // select all gallery elements
        const galleryElements = document.querySelectorAll(gallerySelector);
        for (let i = 0, l = galleryElements.length; i < l; i++) {
            galleryElements[i].setAttribute('data-pswp-uid', i + 1);
            galleryElements[i].onclick = onThumbnailsClick;
        }

        // Parse URL and open gallery if it contains #&pid=3&gid=1
        const hashData = photoswipeParseHash();
        if (hashData.pid && hashData.gid) {
            openPhotoSwipe(
                hashData.pid,
                galleryElements[hashData.gid - 1],
                true,
                true
            );
        }
    };
    initPhotoSwipeFromDOM('.gallery-images');
}

function setupTabGroup(sTabsOuterContainerSelector){
    let debug = false;
    gsap.registerPlugin(Flip);
    const tabsContainers = document.querySelectorAll(sTabsOuterContainerSelector);
    if(debug && window.console){
        console.log('sTabsOuterContainerSelector()');
        console.log('-- tabsContainers',tabsContainers);
    }
    
    function tabFocusMoveLeft(tabButtons) {
        const currentTab = document.activeElement;
        const tabsContainer = currentTab.closest(sTabsOuterContainerSelector);
        const tabPanels = tabsContainer.querySelectorAll('.tabs__panels > div');
        if (!currentTab.parentElement.previousElementSibling) {
            switchTab(tabButtons[tabButtons.length - 1],tabsContainer, tabButtons, tabPanels);
        } else {
            switchTab(currentTab.parentElement.previousElementSibling.querySelector('a'),tabsContainer, tabButtons, tabPanels);
        }
    }
    
    function tabFocusMoveRight(tabButtons) {
        const currentTab = document.activeElement;
        const tabsContainer = currentTab.closest(sTabsOuterContainerSelector);
        const tabPanels = tabsContainer.querySelectorAll('.tabs__panels > div');
        if (!currentTab.parentElement.nextElementSibling) {
            switchTab(tabButtons[0],tabsContainer, tabButtons, tabPanels);
        } else {
            switchTab(currentTab.parentElement.nextElementSibling.querySelector('a'),tabsContainer, tabButtons, tabPanels);
        }
    }
    
    function switchTab(newTab,tabsContainer, tabButtons, tabPanels) {
        let debug = false;
        const activePanelId = newTab.getAttribute('href');
        const section_label = newTab.getAttribute('href').replace('#', '').replace('-panel', '');
        const activePanel = tabsContainer.querySelector(activePanelId);
        const backgrounds = tabsContainer.querySelectorAll('.background-images li[data-section]');
        const activeBackground = backgrounds && backgrounds.length ? tabsContainer.querySelector('[data-section="'+section_label+'"]') : false;

        if(debug && window.console){
            console.log('switchTab()');
            console.log('- newTab',newTab);
            console.log('- tabsContainer',tabsContainer);
            console.log('- tabButtons',tabButtons);
            console.log('- tabPanels',tabPanels);
            console.log('- section_label',section_label);
            console.log('- activeBackground',activeBackground);
            console.log('- backgrounds',backgrounds);
        }
    
        tabButtons.forEach((button) => {
            button.setAttribute('aria-selected', false);
            button.setAttribute('tabindex', '-1');
        });
    
        tabPanels.forEach((panel) => {
            panel.setAttribute('hidden', true);
        });

        const $activeItems = jQuery(tabButtons).add(jQuery(tabPanels));
        const tabsState = Flip.getState($activeItems);

        if(backgrounds && backgrounds.length){
            for (const background of backgrounds) {
                // background.setAttribute('hidden', true);
                background.classList.remove('active');
            }
            if(activeBackground){
                activeBackground.classList.add('active');
            }
        }

        newTab.setAttribute('aria-selected', true);
        newTab.setAttribute('tabindex', '0');
        newTab.focus();

        activePanel.removeAttribute('hidden');
        
        Flip.from(tabsState, {
            duration: 0.5, 
            ease: 'power1.inOut',
            nested: true,
            onLeave: elements => gsap.fromTo(elements, {opacity: 1}, {opacity: 0}),
            onEnter: elements => gsap.fromTo(elements, {opacity: 0}, {opacity: 1})
        });
    }

    for (const tabsContainer of tabsContainers) {

        const tabsList = tabsContainer.querySelector('ul.nav');
        const tabButtons = tabsList.querySelectorAll('a');
        const tabPanels = tabsContainer.querySelectorAll('.tabs__panels > div');
        const backgrounds = tabsContainer.querySelectorAll('li[data-section]');

        const mobileFeatureSelect = tabsContainer.querySelector('select[name="selectedItem"]');

        if(debug && window.console){
            console.log('-- tabsList',tabsList);
            console.log('-- tabButtons',tabButtons);
            console.log('-- tabPanels',tabPanels);
            console.log('-- backgrounds',backgrounds);
        }
    
        tabsList.setAttribute('role', 'tablist');
        tabsList.querySelectorAll('li').forEach((listitem) => {
            listitem.setAttribute('role', 'presentation');
        });

        if(debug && window.console){
            console.log('--- start looping backgrounds');
        }

        if(backgrounds && backgrounds.length){
            backgrounds.forEach((background, index) => {
                if(debug && window.console){
                    console.log('---- background',background);
                    console.log('---- index',index);
                }
                if (index == 0) {
                    background.classList.add('active');
                    if(debug && window.console){
                        console.log('----- Active class? background:',background);
                    }
                } else {
                    background.classList.remove('active');
                    if(debug && window.console){
                        console.log('----- NOT active class? background:',background);
                    }
                }
            });
        }
        
        tabButtons.forEach((tab, index) => {
            tab.setAttribute('role', 'tab');
            if (index === 0) {
                tab.setAttribute('aria-selected', 'true');
            } else {
                tab.setAttribute('tabindex', '-1');
                tabPanels[index].setAttribute('hidden', '');
            }
        });


        tabPanels.forEach((panel) => {
            panel.setAttribute('role', 'tabpanel');
            panel.setAttribute('tabindex', '0');
        });

        // for (const background of backgrounds) {
        //     background.setAttribute('hidden', true);
        // }

        tabsContainer.addEventListener('click', (e) => {
            const clickedTab = e.target.closest('a');
            if (!clickedTab) return;
            if(clickedTab.hasAttribute('role') && clickedTab.getAttribute('role') == 'tab'){
                // console.log('clickedTab INSIDE',clickedTab);
                e.preventDefault();
                switchTab(clickedTab,tabsContainer, tabButtons, tabPanels);
            }
        });

        tabsContainer.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                    tabFocusMoveLeft(tabButtons);
                    break;
                case 'ArrowRight':
                    tabFocusMoveRight(tabButtons);
                    break;
                case 'Home':
                    e.preventDefault();
                    switchTab(tabButtons[0],tabsContainer, tabButtons, tabPanels);
                    break;
                case 'End':
                    e.preventDefault();
                    switchTab(tabButtons[tabButtons.length - 1],tabsContainer, tabButtons, tabPanels);
                    break;
            }
        });

        mobileFeatureSelect.addEventListener('change', (e) => {
            const selectedTab = tabsContainer.querySelector(`a[href="#${e.target.value}"]`);
            if(selectedTab){
                selectedTab.click();
            }
            // switchTab(selectedTab,tabsContainer, tabButtons, tabPanels);
        });

    }

}

// function setupGalleryLightBoxes(){
//     const $iframeFeatherlightLinks = jQuery('a[data-featherlight-iframe-width][data-featherlight-iframe-height]');
//     const viewport = updateViewportDimensions();
//     $iframeFeatherlightLinks.each(function(){
//         const $iframeFeatherlightLink = jQuery(this);     
//         const nTargetWidth = Math.round(viewport.width * 0.8);
//         const nTargetHeight = Math.round((nTargetWidth / 16) * 9);

//         $iframeFeatherlightLink.attr('data-featherlight-iframe-width',nTargetWidth);
//         $iframeFeatherlightLink.attr('data-featherlight-iframe-height',nTargetHeight);

//     });

//     // const $galleries

//     const $panels = jQuery('.gallery-collection');
//     $panels.each(function(){
//         const $panel = jQuery(this);
//         $panel.featherlightGallery({
//             variant: 'gal',
//             filter: 'a',
//             previousIcon: '&#9664;',
//             nextIcon: '&#9654;'
//         });
//     });

//     // jQuery('.gallery-images').each(function(_i, gallery) { 
//     //     jQuery(gallery).featherlightGallery({
//     //         variant: 'gal',
//     //         filter: 'a'
//     //     });
//     // });
    
//     // jQuery('.gallery-type-image a').featherlight({
//     //     type: 'image'
//     // });
//     // jQuery('.gallery-type-video a').featherlight({
//     //     type: 'iframe'
//     // });
// }

// function setupGalleryOfGalleries(){
//     let debug = false;

//     // setupGalleryLightBoxThing();
//     setupGalleryLightBoxes();
//     setupTabGroup('.galleries-list-outer');

//     if(debug && window.console){
//         console.log('setupGalleries()');
//     }
// }

function setupTabbedContent(){
    let debug = false;
    setupTabGroup('.content-section-tabbed');

    if(debug && window.console){
        console.log('setupTabbedContent()');
    }
}

function setupAccordions() {
	let debug = false;
	if (debug && window.console) {
		console.log('setupAccordions()');
	}

	var $accordionSets = jQuery('.accordion-set-inner');
	$accordionSets.each(function () {
		var $as = jQuery(this);
		var sBehavior = $as.attr('data-behavior'); // independent | one-at-a-time
		var $labels = $as.find('button[aria-expanded]');
		$labels.each(function () {
			var $l = jQuery(this);
			// var $otherL = $labels.not($l);
			var sPanelID = $l.attr('aria-controls');
			var $p = jQuery('#' + sPanelID);
			$l.on('click', function () {
				if (debug && window.console) {
					console.log('click on $l', $l);
				}
				var bIsOpen = $l.is('[aria-expanded="true"]');
				if (bIsOpen) {
					// closing
					if (debug && window.console) {
						console.log('closing');
					}
					$l.attr('aria-expanded', 'false');
					$p.addClass('closed').attr('aria-hidden', 'true');
					// $p.attr('hidden', '');
				} else {
					// opening
					if (debug && window.console) {
						console.log('opening');
					}
					$l.attr('aria-expanded', 'true');
					// $p.removeAttr('hidden');
					$p.removeClass('closed').attr('aria-hidden', 'false');
					if (debug && window.console) {
						console.log('sBehavior', sBehavior);
					}
					if (sBehavior == 'one-at-a-time') {
						// close any open accordions in this set
						var $otherOpenL = $as.find('button[aria-expanded="true"]').not($l);
						if (debug && window.console) {
							console.log('one at a time!');
							console.log('$otherOpenL', $otherOpenL);
						}
						$otherOpenL.each(function () {
							var $otherLabel = jQuery(this);
							var $otherPanel = jQuery('#' + $otherLabel.attr('aria-controls'));
							if (debug && window.console) {
								console.log('one at a time!');
								console.log('$otherLabel', $otherLabel);
								console.log('$otherPanel', $otherPanel);
							}
							$otherLabel.attr('aria-expanded', 'false');
							$otherPanel.addClass('closed').attr('aria-hidden', 'true');
							// $otherPanel.attr('hidden', '');
						});
					}
				}
			});
		});
	});
}

// A custom select component
// function setupSelectLists(){
//     let debug = false;
//     if(debug && window.console){
//         console.log('setupSelectLists()');
//     }
//     const selectLists = document.querySelectorAll('.select-list');
    
//     selectLists.forEach(function(selectList){
//         const placeholder = selectList.querySelector('.placeholder');
//         const list = selectList.querySelector('.list');
//         const linkItemLinks = list.querySelectorAll('a');
//         const filterTargetSelector = selectList.getAttribute('data-filter-target');
//         const filterTarget = document.querySelector(filterTargetSelector);

//         if(debug && window.console){
//             console.log('selectList',selectList);
//             console.log('filterTargetSelector',filterTargetSelector);
//             console.log('filterTarget',filterTarget);
//         }

//         placeholder.addEventListener('click', function() {
//             selectList.classList.toggle('is-closed');
//             selectList.classList.toggle('is-open');
//         });

//         linkItemLinks.forEach(function(link) {
//             link.addEventListener('click', function(ev) {
//                 ev.preventDefault();
//                 const linkFilterTerm = link.getAttribute('data-term-slug');
//                 selectList.classList.remove('is-open');
//                 selectList.classList.add('is-closed');
//                 placeholder.textContent = link.textContent;
//                 filterAccommodationList(filterTarget, linkFilterTerm);
//                 if(debug && window.console){
//                     console.log('link CLICK');
//                     console.log('linkFilterTerm',linkFilterTerm);
//                 }
//             });
//         });
//     });
// }

function setupDeleters($) {
  let debug = false;
  if (debug && window.console) {
    console.log('setupDeleters()');
  }
  var $removers = $('[data-remove-hidden]');
  if (debug && window.console) {
    console.log('$removers', $removers);
  }
  $removers.each(function () {
    var $r = $(this);
    var $targets = $($r.attr('data-remove-hidden'));
    $targets.each(function () {
      var $t = $(this);
      if (debug && window.console) {
        console.log('evaluate $t for removal', $t);
      }
      if ($t.is(':hidden') || !$t.is(':visible')) {
        if (debug && window.console) {
          console.log('$t will be removed');
        }
        if ($t.is('[data-copy-poster-on-removal]')) {
          var sPosterUrl = $t.attr('poster');
          $(
            '<div class="' +
              $t.attr('class') +
              '"><img src="' +
              sPosterUrl +
              '" class="fallback-for-removed-video"></div>'
          ).insertBefore($t);
        }
        $t.remove();
      } else {
        if (debug && window.console) {
          console.log('$t will NOT be removed');
        }
      }
    });
  });
}

function setupSocialNetworkMenus(){
    let debug = false;
    if(debug && window.console){
        console.log('setupSocialNetworkMenus()');
    }
    const icons = {
        'facebook': 'fa-brands fa-facebook',
        'facebook-f': 'fab fa-facebook-f',
        'facebook-circle': 'fa-brands fa-facebook',
        'twitter': 'fab fa-twitter',
        'instagram': 'fab fa-instagram',
        'youtube': 'fab fa-youtube',
        'linkedin': 'fa-brands fa-linkedin',
        'linkedin-box': 'fa-brands fa-linkedin',
        'linkedin-in': 'fa-brands fa-linkedin-in',
        'pinterest': 'fab fa-pinterest-p',
        'tripadvisor': 'fab fa-tripadvisor',
        'yelp': 'fab fa-yelp',
        'google': 'fab fa-google',
        'foursquare': 'fab fa-foursquare',
        'tiktok': 'fab fa-tiktok',
        'snapchat': 'fab fa-snapchat-ghost',
        'whatsapp': 'fab fa-whatsapp',
        'telegram': 'fab fa-telegram',
        'signal': 'fab fa-signal',
        'discord': 'fab fa-discord'
    }
    const $socialNetMenus = jQuery('ul.social-list');
    $socialNetMenus.each(function(){
        const $socialNetMenu = jQuery(this);
        const $lis = $socialNetMenu.find('li');
        $lis.each(function(){
            const $li = jQuery(this);
            const $a = $li.find('a');
            const sHref = $a.attr('href');
            
            // Get all classes of the $li element
            const liClasses = $li.attr('class').split(' ');

            let sIconClass = '';
            let sIconName = '';
            let sFAIconClasses = '';

            // Iterate over each class
            for(let i = 0; i < liClasses.length; i++) {
                // If a class starts with 'icon-', store it in sIconClass
                if(liClasses[i].startsWith('icon-')) {
                    sIconClass = liClasses[i];
                    // Remove 'icon-' from sIconClass and store the result in sIconName
                    sIconName = sIconClass.replace('icon-', '');
                    break;
                }
            }

            if(debug && window.console){
                console.log('liClasses',liClasses);
                console.log('sIconName',sIconName);
            }

            // If sIconName exists, look for a key in icons with the name sIconName
            if(sIconName && icons[sIconName]) {
                // If the key exists, store the value in sFAIconClasses
                sFAIconClasses = icons[sIconName];
                
            }

            if(debug && window.console){
                console.log('sFAIconClasses',sFAIconClasses);
            }

            if(sFAIconClasses){
                $a.wrapInner('<span class="sr-only"></span>');
                $a.prepend('<i class="'+sFAIconClasses+'"></i>');
            }
        });

        // find the class that starts wuth 'icon-' 
    });

}

function equalizeW($eleGroup,nOffset){
    let debug = false;
    if(!nOffset){
        nOffset = 0;
    }
    if(debug && window.console){
        console.log('equalizeW($eleGroup)');
        console.log('$eleGroup',$eleGroup);
    }
    var widest = -1;
    $eleGroup.each(function(){
        const $ele = jQuery(this);
        if($ele.is('[style]')){
            $ele.removeAttr('style');
        }
        widest = widest > $ele.outerWidth() ? widest : $ele.outerWidth();
        if(debug && window.console){
            console.log('widest',widest,'$ele',$ele);
        }
    });

    widest += nOffset;
        
    // console.log('height',widest);
    $eleGroup.css('width',widest);
    $eleGroup.css('max-width',widest);
    if(debug && window.console){
        console.log('widest',widest);
    }
}


function setupDesktopMenuHalfsies(){
    let debug = false;
    if(debug && window.console){
        console.log('setupDesktopMenuHalfsies()');
    }
    const $mainMenu = jQuery('.nav.main-menu');
    // split $mainMenu into two menus
    const $mainMenuItems = $mainMenu.find('> li').not('.mq-mobileonly');
    const nMainMenuItems = $mainMenuItems.length;
    const nHalfMainMenuItems = Math.ceil(nMainMenuItems / 2);
    const $firstHalfMainMenuItems = $mainMenuItems.slice(0, nHalfMainMenuItems);
    const $secondHalfMainMenuItems = $mainMenuItems.slice(nHalfMainMenuItems);
    const $firstHalfMainMenu = jQuery('<ul class="nav main-menu-half main-menu-half-1"></ul>');
    const $secondHalfMainMenu = jQuery('<ul class="nav main-menu-half main-menu-half-2"></ul>');
    const $firstHalfMenuContainer = jQuery('.hero-menu-1');
    const $secondHalfMenuContainer = jQuery('.hero-menu-2');
    $firstHalfMainMenuItems.clone().removeClass('contains-box-link').appendTo($firstHalfMainMenu);
    $secondHalfMainMenuItems.clone().removeClass('contains-box-link').appendTo($secondHalfMainMenu);
    
    $firstHalfMainMenu.appendTo($firstHalfMenuContainer);
    $secondHalfMainMenu.appendTo($secondHalfMenuContainer);
    
    // equalizeW(jQuery('.main-menu-half'),30);
    equalizeW(jQuery('.hero-menu'),30);
    // $secondHalfMainMenu.append('<li class="menu-item"><a href="#search">Search</a></li>');

    // const $lisWithSubMenus = $firstHalfMainMenu.find('li.menu-item-has-children');
    const $lisWithIDs = $firstHalfMainMenu.find('li[id]').add($secondHalfMainMenu.find('li[id]'));
    const $lisWithSubMenus = $lisWithIDs.filter('li.menu-item-has-children');
    const $horizontalContainerForSubmenus = jQuery('.hero-submenus');

    $lisWithIDs.each(function(){
        const $li = jQuery(this);
        $li.attr('id',$li.attr('id')+'-clone');
    });

    $lisWithSubMenus.each(function(){
        const $li = jQuery(this);
        const $submenu = $li.find('> .sub-menu');
        const $otherSubmenu = $li.siblings().find('> .sub-menu');
        const sSubmenuID = $li.attr('id')+'-sub-menu';
        if($submenu && $submenu.length){
            $submenu.attr('id',sSubmenuID).addClass('nav nav-h');
            $li.find('> a').attr('aria-controls',sSubmenuID);
            $submenu.appendTo($horizontalContainerForSubmenus);
        }
    });    

    if(debug && window.console){
        console.log('$firstHalfMenuContainer',$firstHalfMenuContainer);
        console.log('$firstHalfMainMenuItems',$firstHalfMainMenuItems);
        console.log('$secondHalfMenuContainer',$secondHalfMenuContainer);
        console.log('$secondHalfMainMenuItems',$secondHalfMainMenuItems);
    }

}

function setupHeroVideoBackgrounds(){
    const $vidmeoVideoBGs = jQuery('.block-npc-hero.hero-type--large-video [data-plyr-provider="vimeo"],.ph-video-container [data-plyr-provider="vimeo"]');
    $vidmeoVideoBGs.each(function(){
        const $backgroundVideo = jQuery(this);
        let oPlayerOptions = {
            controls: [],
            autoplay: true,
            autopause: true,
            playsinline: true,
            muted: true,
            hideControls: true,
            loop: { active: true },
            loadSprite: false,
            vimeo: { byline: false, portrait: false, title: false, transparent: true }
        };
        if($backgroundVideo.is('.ph-video-container [data-plyr-provider="vimeo"]')){
            oPlayerOptions.ratio = '1:1';
        }
        // console.log('oPlayerOptions',oPlayerOptions);
        const backgroundPlayer = new Plyr($backgroundVideo,oPlayerOptions);
    });
}

function rePaginatePosts(){
    let debug = false;
    if(debug && window.console){
        console.log('rePaginatePosts()');
    }
    const $postList = jQuery('.npc-post-list');
    const $postCards = jQuery('.npc-post-card');
    const $postPagingFilterContainer = jQuery('.post-paging-filters');
    const sPostsPerPage = $postList.attr('data-ppp');
    const nPostsPerPage = parseInt(sPostsPerPage,10);
    const $postListPostsMatchingFilters = $postCards.not('.filtered-out');
    const nPosts = $postListPostsMatchingFilters.length;
    const nPages = Math.ceil(nPosts / nPostsPerPage);

    $postCards.attr('data-page','');

    $postListPostsMatchingFilters.each(function(index, post) {
        let pageNumber = Math.ceil((index + 1) / nPostsPerPage);
        jQuery(post).attr('data-page', pageNumber);
    });

    if(debug && window.console){
        console.log('nPostsPerPage',nPostsPerPage);
        console.log('$postListPostsMatchingFilters',$postListPostsMatchingFilters);
    }


    $postPagingFilterContainer.empty();
    if(nPages > 1){
        for(let i = 1; i <= nPages; i++){
            const sActiveClass = (i == 1) ? ' active' : '';
            const $button = jQuery('<li class="paging-filter-li"><button class="paging-filter-button filter-button'+sActiveClass+'" data-filter-term="page-'+i+'">'+i+'</button>');
            $postPagingFilterContainer.append($button);
        }
    }
    filterPostsByPage();
}
function filterPostsByPage(){
    let debug = false;
    const $postListPosts = jQuery('.npc-post-card');
    const $activePageButton = jQuery('.paging-filter-button.active');
    if(jQObjHasDom($activePageButton)){
        const sCurrentPageTerm = $activePageButton.attr('data-filter-term');    
        const sCurrentPage = sCurrentPageTerm.replace('page-','');
        const $matchingPagePosts = $postListPosts.filter('[data-page="'+sCurrentPage+'"]'); 
        const $firstMatchingPagePost = $matchingPagePosts.length ? $matchingPagePosts.first() : false;
        const $otherPagePosts = $postListPosts.filter('[data-page!="'+sCurrentPage+'"]');
        if(debug && window.console){
            console.log('filterPostsByPage()');
            console.log('$activePageButton',$activePageButton);
            console.log('sCurrentPageTerm',sCurrentPageTerm);
            console.log('sCurrentPage',sCurrentPage);
            console.log('$otherPagePosts',$otherPagePosts);
        }
        $matchingPagePosts.removeClass('filtered-out');
        $otherPagePosts.addClass('filtered-out');
        if($firstMatchingPagePost){
            $firstMatchingPagePost[0].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }
    }
}

function filterPostsByCats(){
    let debug = false;
    if(debug && window.console){
        console.log('filterPostsByCats()');
    }

    const $postListPosts = jQuery('.npc-post-card');

    const $activeCategoryFilters = jQuery('.post-filter-by-category.active').not('[data-filter-term="all"]');

    $postListPosts.removeClass('filtered-out');

    if(jQObjHasDom($activeCategoryFilters)){
        // ALL button should be filtered out
        if(debug && window.console){
            console.log('there must be an active category type filter that is not all')
        }
        const aActiveCategoryClasses = [];
        $activeCategoryFilters.each(function(){
            const $activeCategoryFilter = jQuery(this);
            const sFilterTerm = $activeCategoryFilter.attr('data-filter-term');
            aActiveCategoryClasses.push('.'+sFilterTerm);
        });
        if(aActiveCategoryClasses.length){
            const sCategoryFilterSelector = aActiveCategoryClasses.join(',');
            if(debug && window.console){
                console.log('sCategoryFilterSelector',sCategoryFilterSelector);
            }
            $postListPosts.each(function(){
                const $postListPost = jQuery(this);
                if(!$postListPost.is(sCategoryFilterSelector)){
                    $postListPost.addClass('filtered-out');
                    if(debug && window.console){
                        console.log('$postListPost was filtered-out',$postListPost);
                    }
                } else {
                    if(debug && window.console){
                        console.log('$postListPost was NOT filtered-out',$postListPost);
                    }
                }
            });
        }

    }

    rePaginatePosts();

}

function setupPostFilterAndPagingButtons(){
    let debug = false;

    const $postCategoryFilterButtons = jQuery('.post-filter-by-category');
    const $postPageFilterButtonContainer = jQuery('.post-paging-filters');
    const $postCategoryFilterButtonAll = $postCategoryFilterButtons.filter('[data-filter-term="all"]');
    const $postCategoryFilterButtonNonAll = (jQObjHasDom($postCategoryFilterButtonAll)) ? $postCategoryFilterButtons.not($postCategoryFilterButtonAll) : $postCategoryFilterButtons;
    
    if(debug && window.console){
        console.log('setupPostFilterAndPagingButtons()');
        console.log('$postCategoryFilterButtons',$postCategoryFilterButtons);
        console.log('$postCategoryFilterButtonAll',$postCategoryFilterButtonAll);
        console.log('$postCategoryFilterButtonNonAll',$postCategoryFilterButtonNonAll);
    }

    // delegated event handler for post page filter buttons
    $postPageFilterButtonContainer.on('click','button',function(){

        gsap.registerPlugin(Flip);
        const $postListPosts = jQuery('.npc-post-card');
        const $filterButtons = jQuery('.post-filter-button');
        const $movingItems = $postListPosts.add($filterButtons);
        const postListFilteredState = Flip.getState($movingItems);

        const $button = jQuery(this);
        if(!$button.is('.active')){
            const sFilterTerm = $button.attr('data-filter-term');
            $postPageFilterButtonContainer.find('button').removeClass('active');
            $button.addClass('active');
            if(debug && window.console){
                console.log('click on (formerly) inactive $button',$button);
                console.log('sFilterTerm',sFilterTerm);
            }
            filterPostsByPage();
        }
        Flip.from(postListFilteredState, {
            duration: 0.5, 
            ease: 'power1.inOut',
            nested: true,
            onLeave: elements => gsap.fromTo(elements, {opacity: 1}, {opacity: 0}),
            onEnter: elements => gsap.fromTo(elements, {opacity: 0}, {opacity: 1})
        });
    });

    $postCategoryFilterButtonAll.on('click',function(){
        gsap.registerPlugin(Flip);
        const $postListPosts = jQuery('.npc-post-card');
        const $filterButtons = jQuery('.post-filter-button');
        const $movingItems = $postListPosts.add($filterButtons);
        const postListFilteredState = Flip.getState($movingItems);

        if(!$postCategoryFilterButtonAll.is('.active')){
            $postCategoryFilterButtonAll.addClass('active');
            $postCategoryFilterButtonNonAll.removeClass('active');
            filterPostsByCats();
        }
        Flip.from(postListFilteredState, {
            duration: 0.5, 
            ease: 'power1.inOut',
            nested: true,
            onLeave: elements => gsap.fromTo(elements, {opacity: 1}, {opacity: 0}),
            onEnter: elements => gsap.fromTo(elements, {opacity: 0}, {opacity: 1})
        });
    });

    $postCategoryFilterButtonNonAll.each(function(){
        const $filterButton = jQuery(this);        
        const $otherFilterButtons = $postCategoryFilterButtonNonAll.not($filterButton);
        $filterButton.on('click',function(){
            if(debug && window.console){
                console.log('click on $filterButton',$filterButton);
            }

            gsap.registerPlugin(Flip);
            const $postListPosts = jQuery('.npc-post-card');
            const $filterButtons = jQuery('.post-filter-button');
            const $movingItems = $postListPosts.add($filterButtons);
            const postListFilteredState = Flip.getState($movingItems);

            if($filterButton.is('.active')){
                if(debug && window.console){
                    console.log('button was active');
                }
                $filterButton.removeClass('active');
                const $currentlyActiveNonAllButtons = $postCategoryFilterButtonNonAll.filter('.active');
                // console.log('$currentlyActiveNonAllButtons',$currentlyActiveNonAllButtons);
                if(!$currentlyActiveNonAllButtons.length){
                    $postCategoryFilterButtonAll.addClass('active');
                }
                filterPostsByCats();
            } else {
                if(debug && window.console){
                    console.log('button was NOT active');
                }
                $filterButton.addClass('active');
                $otherFilterButtons.removeClass('active');
                
                if(jQObjHasDom($postCategoryFilterButtonAll) && $postCategoryFilterButtonNonAll.length == $postCategoryFilterButtonNonAll.filter('.active').length){
                    // If all non-All buttons are active, activate the All button instead
                    $postCategoryFilterButtonNonAll.removeClass('active');
                    $postCategoryFilterButtonAll.addClass('active');
                } else {
                    // If only some of the non-All buttons are active, deactivate the All button
                    $postCategoryFilterButtonAll.removeClass('active');
                }
                filterPostsByCats();
            }

            Flip.from(postListFilteredState, {
                duration: 0.5, 
                ease: 'power1.inOut',
                nested: true,
                onLeave: elements => gsap.fromTo(elements, {opacity: 1}, {opacity: 0}),
                onEnter: elements => gsap.fromTo(elements, {opacity: 0}, {opacity: 1})
            });
        });
    });

}

function setupCiderFilterButtons(){
    // There are the filters used in the Cider archive
    const $filterLists = jQuery('.cider-filter-list');
    $filterLists.each(function(){
        const $filterList = jQuery(this);
        const $filterButtons = $filterList.find('.filter-button');
        const $filterAllbutton = $filterButtons.filter('[data-filter-term="all"]').first();
        const $filterNonAllButtons = ($filterAllbutton && $filterAllbutton.length) ? $filterButtons.not($filterAllbutton) : $filterButtons;

        $filterAllbutton.on('click',function(){
            // console.log('click on $filterAllbutton');
            if(!$filterAllbutton.is('.active')){
                $filterAllbutton.addClass('active');
                $filterNonAllButtons.removeClass('active');
                filterCidersList();
            }
        });

        $filterNonAllButtons.each(function(){
            const $filterButton = jQuery(this);
            const $otherFilterButtons = $filterNonAllButtons.not($filterButton);
            $filterButton.on('click',function(){
                // console.log('click on $filterButton');
                if(!$filterButton.is('.active')){
                    $filterButton.addClass('active');
                    $filterAllbutton.removeClass('active');
                    if($filterList.is('.cider-filter-like-radios')){
                        // console.log('radio class found on $filterList',$filterList);
                        $otherFilterButtons.removeClass('active');
                        // console.log('$otherFilterButtons should be inactive',$otherFilterButtons);
                        if($filterButton.is('.active[data-filter-term="currently-unavailable"]')){
                            jQuery('.cider-availability-types').addClass('invisible-disabled');
                            jQuery('.availability-type-filter button').each(function(){
                                const $availabilityTypeFilterButton = jQuery(this);
                                if($availabilityTypeFilterButton.is('[data-filter-term="all"]')){
                                    $availabilityTypeFilterButton.addClass('active');
                                } else {
                                    $availabilityTypeFilterButton.removeClass('active');
                                }
    
                            });
                        }
                        if($filterButton.is('.active[data-filter-term="currently-available"]')){
                            jQuery('.cider-availability-types').removeClass('invisible-disabled');
                        }
                    } else {
                        if(jQObjHasDom($filterAllbutton) && $filterNonAllButtons.length == $filterNonAllButtons.filter('.active').length){
                            // If all non-All buttons are active, activate the All button instead
                            $filterNonAllButtons.removeClass('active');
                            $filterAllbutton.addClass('active');
                        } else {
                            // If only some of the non-All buttons are active, deactivate the All button
                            $filterAllbutton.removeClass('active');
                        }
                    }
                    filterCidersList();
                } else {
                    // if(debug && window.console){
                    // }
                    $filterButton.removeClass('active');
                    const $currentlyActiveNonAllButtons = $filterNonAllButtons.filter('.active');
                    // console.log('$currentlyActiveNonAllButtons',$currentlyActiveNonAllButtons);
                    if(!$currentlyActiveNonAllButtons.length){
                        $filterAllbutton.addClass('active');
                    }
                    filterCidersList();

                }
            });
        });
    });
    
}

function filterCidersList(){
    let debug = false;
    if(debug && window.console){
        console.log('filterCidersList()');
    }
    gsap.registerPlugin(Flip);

    const $griddedCiders = jQuery('.cider-list.filter-able-list .single-cider-item');
    const $movingItems = $griddedCiders;
    const $activeCurrentAvailabilityFilters = jQuery('.currently-available-filter button.active');
    const $activeAvailabilityTypeFilters = jQuery('.availability-type-filter button.active').not('[data-filter-term="all"]');
    
    const ciderListFilteredState = Flip.getState($movingItems);
    if(debug && window.console){
        console.log('$griddedCiders',$griddedCiders);
    }
    $griddedCiders.removeClass('filtered-out');

    $activeCurrentAvailabilityFilters.each(function(){
        const $activeAvailabilityFilter = jQuery(this);
        const sFilterTerm = $activeAvailabilityFilter.attr('data-filter-term');
        if(debug && window.console){
            console.log('sFilterTerm',sFilterTerm);
        }
        if(sFilterTerm != 'all'){
            $griddedCiders.each(function(){
                const $griddedCider = jQuery(this);
                if(!$griddedCider.is('.'+sFilterTerm)){
                    $griddedCider.addClass('filtered-out');
                }
            });
        }
    });
    
    if(jQObjHasDom($activeAvailabilityTypeFilters)){
        // ALL button should be filtered out
        if(debug && window.console){
            console.log('there is an availability type filter that is not all')
        }
        const aActiveAvailabilityTypeClasses = [];
        $activeAvailabilityTypeFilters.each(function(){
            const $activeAvailabilityTypeFilter = jQuery(this);
            const sFilterTerm = $activeAvailabilityTypeFilter.attr('data-filter-term');
            aActiveAvailabilityTypeClasses.push('.'+sFilterTerm);
        });
        if(aActiveAvailabilityTypeClasses.length){
            const sAvailabilityTypeFilterSelector = aActiveAvailabilityTypeClasses.join(',');
            $griddedCiders.each(function(){
                const $griddedCider = jQuery(this);
                if(!$griddedCider.is(sAvailabilityTypeFilterSelector)){
                    $griddedCider.addClass('filtered-out');
                }
            });
        }
        if(debug && window.console){
            console.log('aActiveAvailabilityTypeClasses',aActiveAvailabilityTypeClasses);
        }
    }  

    Flip.from(ciderListFilteredState, {
        duration: 0.5, 
        ease: 'power1.inOut',
        nested: true,
        onLeave: elements => gsap.fromTo(elements, {opacity: 1}, {opacity: 0}),
        onEnter: elements => gsap.fromTo(elements, {opacity: 0}, {opacity: 1})
    });   
}

function setupBlockFilters(){
    // These are the filters using the custom Filters Block
    const $filterBlocks = jQuery('.block-filters [data-filter-collection]');
    $filterBlocks.each(function(){
        const $filterBlock = jQuery(this);
        const sItemsCollection = $filterBlock.attr('data-filter-collection');
        const $filterButtons = $filterBlock.find('.filter-button');
        const $filterAllbutton = $filterButtons.filter('[data-filter-term="all"]').first();
        const $filterNonAllButtons = ($filterAllbutton && $filterAllbutton.length) ? $filterButtons.not($filterAllbutton) : $filterButtons;
        $filterAllbutton.on('click',function(){
            // console.log('click on $filterAllbutton');
            if(!$filterAllbutton.is('.active')){
                $filterAllbutton.addClass('active');
                $filterNonAllButtons.removeClass('active');
                filterBlockFilterCollection(sItemsCollection);
                // console.log('RUN THE FILTERS');
            }
        });
        $filterNonAllButtons.each(function(){
            const $filterButton = jQuery(this);
            const $otherFilterButtons = $filterNonAllButtons.not($filterButton);
            $filterButton.on('click',function(){
                // console.log('click on $filterButton');
                if(!$filterButton.is('.active')){
                    $otherFilterButtons.removeClass('active');
                    $filterButton.addClass('active');
                    if(jQObjHasDom($filterAllbutton) && $filterNonAllButtons.length == $filterNonAllButtons.filter('.active').length){
                        // If all non-All buttons are active, activate the All button instead
                        $filterNonAllButtons.removeClass('active');
                        $filterAllbutton.addClass('active');
                    } else {
                        // If only some of the non-All buttons are active, deactivate the All button
                        $filterAllbutton.removeClass('active');
                    }
                } else {
                    // turning OFF a filter
                    $filterButton.removeClass('active');
                    const $currentlyActiveNonAllButtons = $filterNonAllButtons.filter('.active');
                    if(!$currentlyActiveNonAllButtons.length){
                        $filterAllbutton.addClass('active');
                    }                    
                }
                
                // console.log('RUN THE FILTERS');
                filterBlockFilterCollection(sItemsCollection);

            });
        });  
    });
}

function filterBlockFilterCollection(sCollection){
    let debug = false;
    if(debug && window.console){
        console.log('filterBlockFilterCollection()');
        console.log('sCollection',sCollection);
    }
    gsap.registerPlugin(Flip);

    const $collectionItems = jQuery('.'+sCollection);
    $collectionItems.addClass('block-filters-target');

    let $movingItems = $collectionItems;
    
    const $activeCollectionFilters = jQuery('.block-filter-list[data-filter-collection="'+sCollection+'"]').find('.filter-button.active').not('[data-filter-term="all"]');
    if(debug && window.console){
        console.log('$collectionItems',$collectionItems);
        console.log('$activeCollectionFilters',$activeCollectionFilters);
    }
    const collectionFilteredState = Flip.getState($movingItems);
    $collectionItems.removeClass('filtered-out');
    
    // const $activeCurrentAvailabilityFilters = jQuery('.currently-available-filter button.active');
    // const $activeAvailabilityTypeFilters = jQuery('.availability-type-filter button.active').not('[data-filter-term="all"]');
    // const $activeAvailabilityTypeFilters = jQuery('.availability-type-filter button.active').not('[data-filter-term="all"]');
    
    if(jQObjHasDom($activeCollectionFilters)){
        // ALL button should be filtered out
        if(debug && window.console){
            console.log('there must be an availability type filter that is not all')
        }
        const aActiveFilterClasses = [];
        $activeCollectionFilters.each(function(){
            const $activeFilter = jQuery(this);
            const sFilterTerm = $activeFilter.attr('data-filter-term');
            aActiveFilterClasses.push('.'+sFilterTerm);
        });
        if(aActiveFilterClasses.length){
            const sActiveFilterSelector = aActiveFilterClasses.join(',');
            $collectionItems.each(function(){
                const $collectionItem = jQuery(this);
                if(!$collectionItem.is(sActiveFilterSelector)){
                    $collectionItem.addClass('filtered-out');
                }
            });
        }
        if(debug && window.console){
            console.log('aActiveFilterClasses',aActiveFilterClasses);
        }
    }  

    Flip.from(collectionFilteredState, {
        duration: 0.5, 
        ease: 'power1.inOut',
        nested: true,
        onLeave: elements => gsap.fromTo(elements, {opacity: 1}, {opacity: 0}),
        onEnter: elements => gsap.fromTo(elements, {opacity: 0}, {opacity: 1})
    });
}

function copyToClipboard(value, showNotification, notificationText,$ele) {
    var $temp = jQuery("<input>");
    jQuery("body").append($temp);
    $temp.val(value).select();
    document.execCommand("copy");
    $temp.remove();

    if (typeof showNotification === 'undefined') {
        showNotification = true;
    }
    if (typeof notificationText === 'undefined') {
        notificationText = "Copied to clipboard";
    }

    var notificationTag = jQuery("div.copy-notification");
    if (showNotification && notificationTag.length == 0 && jQObjHasDom($ele)) {
        notificationTag = jQuery("<div/>", { "class": "copy-notification", text: notificationText });
        $ele.append(notificationTag);

        notificationTag.fadeIn("slow", function () {
            setTimeout(function () {
                notificationTag.fadeOut("slow", function () {
                    notificationTag.remove();
                });
            }, 1000);
        });
    }
}

function setupCopyToClipboards(){
    const $copyToClipboards = jQuery('[data-click-to-copy]');
    $copyToClipboards.each(function(){
        const $clickToCopy = jQuery(this);
        const sCopyText = decodeURIComponent($clickToCopy.attr('data-click-to-copy'));
        console.log('$clickToCopy',$clickToCopy);
        console.log('sCopyText',sCopyText);
        $clickToCopy.click(function (event) {
            event.preventDefault();
            copyToClipboard(sCopyText, true, "URL copied",$clickToCopy);
        });
    });
}



function setupStringManipulators(){
    const $removeSubstringers = jQuery('[data-remove-substring]');
    
    $removeSubstringers.each(function(){
        const $removeSubstringer = jQuery(this);
        const sRemoveSubstring = $removeSubstringer.attr('data-remove-substring');
        const re = new RegExp(sRemoveSubstring, 'g');
        const sInnerText = $removeSubstringer.text();
        // console.log('$removeSubstringer',$removeSubstringer);
        // console.log('sInnerText',sInnerText);
        // console.log('sRemoveSubstring',sRemoveSubstring);
        $removeSubstringer.text(sInnerText.replace(re, ''));
    });


    const $shortenMyAmPms = jQuery('[data-shorten-ampm="true"]');
    $shortenMyAmPms.each(function(){
        const $shortenMyAmPm = jQuery(this);
        const sInnerText = $shortenMyAmPm.text();

        let text = $shortenMyAmPm.text();
        text = text.replace(/ PM/gi, 'p');
        text = text.replace(/ AM/gi, 'a');
        // text = text.replace(/:00/gi, '');
        // text = text.replace(/ - /gi, '-');
        $shortenMyAmPm.text(text);
    });

    const $wrapAfterSpacers = jQuery('[data-wrap-after-space-and-add-class]');
    $wrapAfterSpacers.each(function(){
        const $wrapAfterSpacer = jQuery(this);
        const sWrapperClass = $wrapAfterSpacer.attr('data-wrap-after-space-and-add-class');
        const sInnerText = $wrapAfterSpacer.text();
        const aSplitText = sInnerText.split(' ', 2);
        const sFirstString = aSplitText[0];
        const sSecondString = aSplitText[1];
        $wrapAfterSpacer.html(sFirstString + ' <span class="'+sWrapperClass+'">' + sSecondString + '</span>');
    });


    // data-remove-substrings=":00" data-shorten-ampm
}

function setupCopyImgSorcers(){
    const $imgSrcCopiers = jQuery('[data-copy-img-src-to-closest]');
    $imgSrcCopiers.each(function(){
        const $imgSrcCopier = jQuery(this);
        const $img = $imgSrcCopier.find('img');
        const sImgSrc = $img.attr('src');
        const sImgSrcTarget = $imgSrcCopier.attr('data-copy-img-src-to-closest');
        const $imgSrcTarget = $imgSrcCopier.closest(sImgSrcTarget);
        const sImgSrcCopierExistingStyle = $imgSrcTarget.attr('style') || '';
        $imgSrcTarget.attr('style','--image-src:url("'+sImgSrc+'");'+sImgSrcCopierExistingStyle);
    });
}

function setupInlineStyles(){
    setupCopyImgSorcers();
}

function markParagraphsContainingMetaPixel(){
    let debug = false
    if(debug && window.console){
        console.log('markParagraphsContainingMetaPixel()');
    }
    const $paragraphsContainingMetaPixel = jQuery('p:contains("<!-- Meta Pixel Code -->")');
    $paragraphsContainingMetaPixel.addClass('contains-metapixels');



    const paragraphs = document.querySelectorAll('p');

    paragraphs.forEach(p => {
      if (p.innerHTML.includes('<!-- Meta Pixel Code -->')) {
        p.classList.add('meta-pixel-paragraph');
        p.setAttribute('style', 'position:absolute;z-index:-1;opacity:0;');
      }
    });
}

function domMutators($){
    setupDeleters($);
    setupStringManipulators();
    setupInlineStyles();
    // markParagraphsContainingMetaPixel();
}

// function disableImageSliderLaziness(){
//     let debug = true;
//     if(debug && window.console){
//         console.log('disableImageSliderLaziness()');
//     }
//     const $imageStrips = jQuery('.block-image-slider');
//     $imageStrips.each(function(){
//         const $imageStrip = jQuery(this);
//         const $imageStripInner = $imageStrip.find('.image-strip-inner');
//         const $imageStripContainer = $imageStrip.find('.image-strip-list');
//         const $imageStripImages = $imageStripContainer.find('img');
//         $imageStripImages.attr('loading','eager');
//         // const $imageStripItems = $imageStripContainer.find('.image-container');
//         // const $buttonPrev = $imageStrip.find('.image-strip-slider-button-prev');
//         // const $buttonNext = $imageStrip.find('.image-strip-slider-button-next');
//     });
//     setupImageStripSliders();
// }

function setupImageStripSliders(){
    let debug = false;
    if(debug && window.console){
        console.log('setupImageStripSliders()');
    }
    const $imageStrips = jQuery('.block-image-slider');
    $imageStrips.each(function(){
        const $imageStrip = jQuery(this);
        const $imageStripInner = $imageStrip.find('.image-strip-inner');
        const $imageStripContainer = $imageStrip.find('.image-strip-list');
        const $simpleBarContentWrapper = $imageStrip.find('.simplebar-content-wrapper');
        const $imageStripItems = $imageStripContainer.find('.image-container');
        const $imageStripImages = $imageStripContainer.find('img');
        const nImageCount = $imageStripImages.length;
        let nZeroWidthImages = 0;
        
        if(debug && window.console){
            console.log('$simpleBarContentWrapper',$simpleBarContentWrapper);
            if(jQObjHasDom($simpleBarContentWrapper)){
                console.log('SimpleBar initialized');
            } else {
                console.log('SimpleBar NOT initialized');
            }
        }
        
        if(jQObjHasDom($simpleBarContentWrapper) && typeof SimpleBar !== 'undefined'){
            // new SimpleBar($simpleBarContentWrapper[0]);
        }

        const $buttonPrev = $imageStrip.find('.image-strip-slider-button-prev');
        const $buttonNext = $imageStrip.find('.image-strip-slider-button-next');

        let totalWidth = 0;
        $imageStripImages.each(function() {
            const $imageStripImage = jQuery(this);
            if($imageStripImage.outerWidth() == 0){
                nZeroWidthImages++;
            }
            totalWidth += $imageStripImage.outerWidth(true);
        });

        if(nZeroWidthImages > 0){
            if(debug && window.console){
                console.log('nZeroWidthImages',nZeroWidthImages);
            }
        }

        const difference = Math.abs(totalWidth - $imageStripContainer.width());
        const nAllowedDifference = 20;

        if(debug && window.console){
            console.log('$imageStrip',$imageStrip);
            console.log('$imageStripInner',$imageStripInner);
            console.log('$imageStripContainer',$imageStripContainer);
            console.log('$imageStripItems',$imageStripItems);
            console.log('$buttonPrev',$buttonPrev);
            console.log('$buttonNext',$buttonNext);
            console.log('totalWidth',totalWidth);
            console.log('$imageStripContainer.width()',$imageStripContainer.width());
            console.log('difference',difference);
        }

        if (Math.abs(totalWidth - $imageStripContainer.width()) <= nAllowedDifference && $imageStripContainer.width() > 0) {
            $buttonPrev.hide();
            $buttonNext.hide();
            $imageStripInner.css('overflow-x', 'hidden');
        } else {
            $buttonPrev.show();
            $buttonNext.show();
            // $imageStripInner.removeAttr('style');
        }

        $buttonNext.on('click', function() {
            if(debug && window.console){
                console.log('$buttonNext clicked');
            }
            const $scrollTarget = jQObjHasDom($simpleBarContentWrapper) ? $simpleBarContentWrapper : $imageStripInner;
            let firstVisibleItem = $imageStripItems.filter(function() {
                return jQuery(this).position().left >= 0;
            }).first();
            
            $scrollTarget.animate({
                scrollLeft: '+=' + firstVisibleItem.outerWidth()
            }, 500);

            if(debug && window.console){
                console.log('$scrollTarget',$scrollTarget);
                console.log('firstVisibleItem',firstVisibleItem);
                console.log('firstVisibleItem.outerWidth()',firstVisibleItem.outerWidth());
            }

            // Disable the button if we can't scroll further
            if ($scrollTarget.scrollLeft() + $scrollTarget.outerWidth() >= $scrollTarget[0].scrollWidth) {
                $buttonNext.prop('disabled', true);
            } else {
                $buttonPrev.prop('disabled', false); // Enable the prev button
            }
        });

        $buttonPrev.on('click', function() {
            if(debug && window.console){
                console.log('click on $buttonPrev');
            }
            const $scrollTarget = jQObjHasDom($simpleBarContentWrapper) ? $simpleBarContentWrapper : $imageStripInner;
            let firstVisibleItem = $imageStripItems.filter(function() {
                return jQuery(this).position().left < 0;
            }).last();

            $scrollTarget.animate({
                scrollLeft: '-=' + firstVisibleItem.outerWidth()
            }, 500);

            if(debug && window.console){
                console.log('$buttonPrev clicked');
                console.log('firstVisibleItem',firstVisibleItem);
                console.log('firstVisibleItem.outerWidth()',firstVisibleItem.outerWidth());
            }

            // Disable the button if we can't scroll further
            if ($scrollTarget.scrollLeft() === 0) {
                $buttonPrev.prop('disabled', true);
            } else {
                $buttonNext.prop('disabled', false); // Enable the next button
            }
        });
    });
}

function onResizeStuff(){
    if(window.console){
        console.log('RESIZE');
    }
    // setupImageStripSliders();
}

function onLoadStuff(){
    // markParagraphsContainingMetaPixel();
    // setupImageStripSliders();
    // disableImageSliderLaziness();
}

jQuery(document).ready(function($) {
    if(window.console){
        console.log('READY');
    }

    $(window).on('load', function() {
        if(window.console){
            console.log('LOAD');
        }
        onLoadStuff();
    });

    $(window).resize(function () {
		waitForFinalEvent(
			function () {
				onResizeStuff();
			},
			timeToWaitForLast,
			'theonResizeStuff'
		);
	});

    // domMutators($)
    // setupHead();
    // setupHeroVideoBackgrounds();
    // setupTogglers();
    // thisClicksThat();
    // setupCopyToClipboards();
    // setupSocialNetworkMenus();
    // setupSwipers();
    // setupImageStripSliders();
    // setupCiderFilterButtons();
    // setupPostFilterAndPagingButtons();
    // setupBlockFilters();
    // loadGravatars();

    viewport = updateViewportDimensions();
    if (viewport.width >= 768) {
    }

    // remove <p> tags around images everywhere
    $('p > img').unwrap();

}); /* end of as page load scripts */
