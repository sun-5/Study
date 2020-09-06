<?php
include "config/config.php";
//$appurl=  "http://phpshop.yaoyiwangluo.com" . $_SERVER["PHP_SELF"]; //域名后面没有/
//http://phpshop.yaoyiwangluo.com/fx01.php
?>
<script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
<script>
  wx.config({
      debug: false,
      appId: '<?php echo $appid;?>',
      timestamp: <?php echo time();?>,
      nonceStr: '<?php echo $noncestr;?>',
      signature: '<?php echo $signature;?>',
      jsApiList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage'
      ]

  });

	var shareData = { title: '', desc: '', img: '', link: '' };
	shareData.title = '微信公众号商城';
	shareData.desc = '直接点击测试，接入了支付，每套3000元';
	shareData.img = 'http://phpshop.yaoyiwangluo.com/img/menu01.png';
	shareData.link = '<?php echo $appurl?>';
	

	wx.ready(function () {
		
		//分享到朋友圈
		wx.onMenuShareTimeline({
			title: shareData.title, // 分享标题fxtitle
			link: shareData.link, // 分享链接
			imgUrl: shareData.img, // 分享图标
			type: 'music', // 分享类型,music、video或link，不填默认为link
			dataUrl: shareData.link, // 如果type是music或video，则要提供数据链接，默认为空
			success: function () { 
			},
			cancel: function () { 
			}
	
		});
	
		//分享给单个朋友
		wx.onMenuShareAppMessage({
			title: shareData.title, // 分享标题
			desc: shareData.desc, // 分享描述
			link: shareData.link, // 分享链接
			imgUrl: shareData.img, // 分享图标
			type: '', // 分享类型,music、video或link，不填默认为link
			dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
			success: function () { 
			},
	
			cancel: function () { 
				// 用户取消分享后执行的回调函数
			}
		});


	});


	wx.error(function (res) {
	
	});
</script>


fx01


