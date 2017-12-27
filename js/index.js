$(function(){
	'use strict '
	var sidebar=$('#sidebar'),
	mask=$('.mask'),
	sidebar_trigger=$('#sidebar_trigger')
	button_top=$('.back-to-top')
	function showSideBar(){
		mask.fadeIn();
		sidebar.css('right',0)
	}
	function hideSideBar(){
		mask.fadeOut();
		sidebar.css('right',-sidebar.width())
	}
	
	sidebar_trigger.on('click',showSideBar)
	mask.on('click',hideSideBar)
	//返回顶部
	button_top.on('click',function(){
		$('html,body').animate({
			scrollTop:0
		},800)
	})
	//回到顶部消失
	$(window).on('scroll',function(){
		if($(window).scrollTop()>$(window).height()){
			button_top.fadeIn()
		}else{
			button_top.fadeOut();
		}
	})
	$(window).trigger('scroll')
})
