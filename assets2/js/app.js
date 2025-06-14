$(document).ready(function(){
	if (!("ontouchstart" in document.documentElement)) {

		document.documentElement.className += " no-touch";

		var jScrollOptions = {
			autoReinitialise: true,
			autoReinitialiseDelay: 100,
			contentWidth: '0px'
		};

		$('.scrollable .box-typical-body').jScrollPane(jScrollOptions);
		$('.side-menu').jScrollPane(jScrollOptions);
		$('.side-menu-addl').jScrollPane(jScrollOptions);
		$('.scrollable-block').jScrollPane(jScrollOptions);
	}

	$('.hamburger').click(function(){
		if ($('body').hasClass('menu-left-opened')) {
			$(this).removeClass('is-active');
			$('body').removeClass('menu-left-opened');
			$('html').css('overflow','auto');
		} else {
			$(this).addClass('is-active');
			$('body').addClass('menu-left-opened');
			$('html').css('overflow','hidden');
		}
	});

	$('.mobile-menu-left-overlay').click(function(){
		$('.hamburger').removeClass('is-active');
		$('body').removeClass('menu-left-opened');
		$('html').css('overflow','auto');
	});

	$('.site-header .burger-right').click(function(){
		if ($('body').hasClass('menu-right-opened')) {
			$('body').removeClass('menu-right-opened');
			$('html').css('overflow','auto');
		} else {
			$('.hamburger').removeClass('is-active');
			$('body').removeClass('menu-left-opened');
			$('body').addClass('menu-right-opened');
			$('html').css('overflow','hidden');
		}
	});

	$('.mobile-menu-right-overlay').click(function(){
		$('body').removeClass('menu-right-opened');
		$('html').css('overflow','auto');
	});

	$('.side-menu-list li.with-sub').each(function(){
		var parent = $(this),
			clickLink = parent.find('>span'),
			subMenu = parent.find('>ul');

		clickLink.click(function() {
			if (parent.hasClass('opened')) {
				parent.removeClass('opened');
				subMenu.slideUp();
				subMenu.find('.opened').removeClass('opened');
			} else {
				if (clickLink.parents('.with-sub').length == 1) {
					$('.side-menu-list .opened').removeClass('opened').find('ul').slideUp();
				}
				parent.addClass('opened');
				subMenu.slideDown();
			}
		});
	});



	$('.box-typical-dashboard').each(function(){
		var parent = $(this),
			btnCollapse = parent.find('.action-btn-collapse');

		btnCollapse.click(function(){
			if (parent.hasClass('box-typical-collapsed')) {
				parent.removeClass('box-typical-collapsed');
			} else {
				parent.addClass('box-typical-collapsed');
			}
		});
	});

	$('.box-typical-dashboard').each(function(){
		var parent = $(this),
			btnExpand = parent.find('.action-btn-expand'),
			classExpand = 'box-typical-full-screen';

		btnExpand.click(function(){
			if (parent.hasClass(classExpand)) {
				parent.removeClass(classExpand);
				$('html').css('overflow','auto');
			} else {
				parent.addClass(classExpand);
				$('html').css('overflow','hidden');
			}
		});
	});
});