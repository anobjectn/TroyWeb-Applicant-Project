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
    let debug = true;
    if(debug && window.console){
        console.log('setupFirstContentSectionScrollAwayDetection()');
    }
    const firstContentSection = document.querySelector('#inner-content');
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
                case (nRoundedIntersectionRatio == 1):

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
    // setupDesktopMenuHalfsies();
    // setupSearchTogglers();
    // setupFirstContentSectionScrollAwayDetection();
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

function domMutators($){
    setupDeleters($);
    setupStringManipulators();
    setupInlineStyles();
    // markParagraphsContainingMetaPixel();
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
    setupHead();
    // setupHeroVideoBackgrounds();
    setupTogglers();
    // thisClicksThat();
    // setupCopyToClipboards();
    // setupSocialNetworkMenus();
    // setupSwipers();
    // setupImageStripSliders();
    // setupCiderFilterButtons();
    // setupPostFilterAndPagingButtons();
    // setupBlockFilters();
    loadGravatars();

    viewport = updateViewportDimensions();
    if (viewport.width >= 768) {
    }

    // remove <p> tags around images everywhere
    $('p > img').unwrap();

}); /* end of as page load scripts */
