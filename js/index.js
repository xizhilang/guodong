;$(function(){
	/*初始化时隐藏元素并在需要的时刻开始动画*/
	var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'vertical',
	    duration:1000,
	    speed:600,
	    loop: false,
	    // 如果需要分页器
	    pagination: '.swiper-pagination',
	    // 鼠标能够控制
	    mousewheelControl:true,
	    // 点击分页器原点可以控制
	    paginationClickable: true,
	    // 设置分页器的小圆点为li标签
	    paginationElement : 'li',
	    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		swiperAnimateCache(swiper); //隐藏动画元素 
		swiperAnimate(swiper); //初始化完成开始动画
			}, 
		onSlideChangeEnd: function(swiper){ 
		swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			}
  });
	/*头像划过有阴影*/
	$('.circle').hover(function(){
		$(this).css('box-shadow','0 0 10px blue');
	},function(){
		$(this).css('box-shadow','');
	});
	
	/*导航划过效果*/
	$(".col-xs-1").hover(function(){
		$(this).css({"border-bottom":"2px solid blue","height":"80px"});
	},function(){
		$(this).css({"border-bottom":"","height":"80px"});
	});
	
	/*自我介绍头像划过效果*/
	$(".photo").hover(function(){
		$(this).css({"background":"url(images/photo2.jpg) no-repeat center -30px","background-size":"cover","box-shadow":"0 0 40px pink"})
	},function(){
		$(this).css({"background":"url(images/photo.jpg) no-repeat center -5px","background-size":"cover","box-shadow":""})
	});
	
	/*page2轮播图*/
	$('.carousel').carousel({
		wrap:false,   //禁止循环
	  	interval: 10000   //每次运动的时间
	})
	/*触屏滑动page2轮播图*/
    //手势右滑 回到上一个画面
    $('#carousel-example-generic').bind('swiperight swiperightup swiperightdown',function(){
        $("#carousel-example-generic").carousel('prev');
    })
    //手势左滑 进入下一个画面
    $('#carousel-example-generic').bind('swipeleft swipeleftup swipeleftdown',function(){
        $("#carousel-example-generic").carousel('next');
    })
    
    /*导航栏点击效果*/
   	$("#index").click(function(){
   		one();
   	});
   	$("#suibi").click(function(){
   		empty();
   	});
   	$("#books").click(function(){
   		empty();
   	});
   	$("#contact").click(function(){
   		contact();
   	});
   	/*点击第一个分页符*/
   	function one(){
   		$("#swiper-pagination li").get(0).click(function(){
   			alert(1);
   		});
   	}
   	/*点击第二个第三个分页符*/
   	function empty(){
   		alert("正在努力建设中...请稍等")
   	}
   	/*点击最后一个分页符*/
   	function contact(){
   		$("#swiper-pagination li").get(4).click(function(){
   			alert(1);
   		});
   	}
   	/*page4点击效果*/
   	$(".demo:nth-child(1)").click(function(){
   		window.location.href="http://www.liqunshop.com/";
   	});
   	$(".demo:nth-child(2)").click(function(){
   		window.location.href="http://xizhilang.applinzi.com";
   	})
});
	  