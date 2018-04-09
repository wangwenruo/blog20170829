$(function(){
	'use strict '
	var sidebar=$('#sidebar'),//选择侧边栏
	mask=$('.mask'),//选择侧边栏蒙版
	sidebar_trigger=$('#sidebar_trigger')//选择侧边栏触发器
	button_top=$('.back-to-top')//选择返回顶部
	function showSideBar(){//显示侧边栏
		mask.fadeIn();
		sidebar.css('right',0)
	}
	function hideSideBar(){//隐藏侧边栏
		mask.fadeOut();
		sidebar.css('right',-sidebar.width())//调整侧边栏相关的css
	}
	
	sidebar_trigger.on('click',showSideBar)//监听侧边栏触发器点击事件
	mask.on('click',hideSideBar)
	//返回顶部
	button_top.on('click',function(){//监听返回按钮点击事件
		$('html,body').animate({
			scrollTop:0
		},800)
	})
	
	$(window).on('scroll',function(){//监听window的scroll事件
		//如果已滚动部分高于窗口的高度
		if($(window).scrollTop()>$(window).height()){
			//显示返回按钮
			button_top.fadeIn()
		}else{
			//否则隐藏返回按钮
			button_top.fadeOut();
		}
	})
	//加载刷新触发scroll事件
	$(window).trigger('scroll')
})
