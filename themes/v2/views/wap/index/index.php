

<!doctype html><html  class="agent-mobile theme-w theme-wblack"><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
<meta content="yes" name="apple-mobile-web-app-capable">
<meta content="black" name="apple-mobile-web-app-status-bar-style">
<meta content="telephone=no" name="format-detection">
<meta name="keywords" content="网站模板,企业模板,企业网站">
<meta name="description" content="模板网站生成">
<meta name="author" content="UEMO">
<link rel="stylesheet" type="text/css" href="<?=Yii::app()->theme->baseUrl?>/static/wap/css/lib.css">
<link rel="stylesheet" type="text/css" href="<?=Yii::app()->theme->baseUrl?>/static/wap/css/style.css">
<link rel="stylesheet" type="text/css"  href="<?=Yii::app()->theme->baseUrl?>/static/wap/css/wblack.css" id="themeCssPath">
<link rel="stylesheet" type="text/css"  href="<?=Yii::app()->theme->baseUrl?>/static/wap/css/8055.css"> <link rel="stylesheet" type="text/css"  href="<?=Yii::app()->theme->baseUrl?>/static/wap/css/mocss.css">

<!--[if lt IE 9]><script type="text/javascript" src="http://code.uemo.net/script/jquery-1.8.3.min.js"></script><![endif]--><!--[if (!IE)|(gte IE 11)]><!-->
<script type="text/javascript" src="<?=Yii::app()->theme->baseUrl?>/static/wap/js/jquery.js"></script>
<!--<![endif]-->
<script type="text/javascript" src="<?=Yii::app()->theme->baseUrl?>/static/wap/js/mmen.js" data-main="indexMain"></script> <script type="text/javascript" src="<?=Yii::app()->theme->baseUrl?>/static/wap/js/mojs.js"></script>
<script type="text/javascript" src="<?=Yii::app()->theme->baseUrl?>/static/wap/js/script.js"></script>
<title>WWJ和ZT的电影之旅</title>
</head>
<body>
<div id="bodymask"></div>
<div id="sitecontent" style="overflow:hidden;">
  <div id="header" class="Fixed" style="background-color: #f8f8f8">
    <!-- <div class="lcbody">
      <div class="lcitem top">
        <div class="rect top"></div>
      </div>
      <div class="lcitem bottom">
        <div class="rect bottom"></div>
      </div>
    </div> -->
    <a class="mm-hlogo" href="" > <img src="http://oofuaem2b.bkt.clouddn.com/2018/1119/1542617911899300939.png"/> </a> 

    <div class="search-input-wrap">
    <form action="">
      <input class="header-search-input" autocomplete="off" placeholder="要查找的关键词" type="search">
    </form>
    </div>
  </div>

<div class="content indexPage">
    <div class="mm-head"></div>
    <div id="mm-slider">
  <ul class="slider">
    <?php if($imgs = SiteExt::getAttr("qjpz",'indeximages')) foreach ($imgs as $key => $value) {?>
        <li> <a target="_blank" >
      <div class="slider-img">
                <img src="<?=ImageTools::fixImage($value,750,500)?>"/>
              </div>
      <div class="slider-info">
        <p class="title"></p>
              </div>
      </a> 
      </li> 
    <?php } ?>
    </ul>
</div>

    <div class="mlist project module" >
  <div class="bgmask"></div>
  <div class="m_container">    <div class="container_header wow animated ">
      <p class="title">电影之旅</p>
            <p class="subtitle">Movie Journey</p>
          </div>
       
        <div class="content">
      <div class="wrapper">
        <ul class="content_list clearfix">
        <?php if($news = ArticleExt::model()->findAll(['order'=>'time desc'])) {
            foreach ($news as $key => $value) {?>
                    <li id="item_block_0" class="item_block wow">
  <a href="#" class="item_box">
      <div class="item_img" target="_blank">
          <img src="<?=ImageTools::fixImage($value->image,340,400)?>"/>
          <div class="item_mask"></div>
      </div>
      <div class="item_wrapper clearfix">
        <div class="item_info clearfix">
          <div class="text_wrap">
              <p class="title ellipsis">《<?=$value->title?>》</p>
              <p class="subtitle ellipsis"><?=$value->place?></p>
          </div>
          <p class="date_wrap" style="display: block;">
              <span class="year"><?=date("Y",$value->time)?></span>
              <span class="md"><?=date("m-d",$value->time)?></span>
          </p>
        </div>
        
      </div>
    </a>  
      <a href="http://mo005-8055.mo5.line1.uemo.net/list/post/394020/" class="details">详情<i class="fa fa-angle-right" aria-hidden="true"></i></a>
      <div class="item_tags clearfix"><i class="fa fa-tags"></i><a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86199/tag/%25E8%25A3%2585%25E9%25A5%25B0%25E5%2593%2581/">装饰品</a></div>
  </li>
            <?php } 
            } ?>


  </ul>
        <a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86199/" class="more wow" style="animation-delay:.5s">更多<i class="fa fa-angle-right" aria-hidden="true"></i></a>
      </div>
      </div>
    <div class="clear"></div>
  </div>
</div>

    <!-- <div class="mcounter module bgShow" style=" background-image:url(http://resources.jsmo.xin/templates/upload/8055/201810/1539071409396.jpg);"><div class="bgmask"></div><div class="module_container"><div class="container_content"><ul class="content_list"><li><div><p class="number"><span class="counterDX" data-counter-value="178">178</span><span class="unit">+</span></p><p class="title">精美家居电器</p></div></li><li><div><p class="number"><span class="counterDX" data-counter-value="42">42</span><span class="unit">＋</span></p><p class="title">合作商家</p></div></li><li><div><p class="number"><span class="counterDX" data-counter-value="178">178</span><span class="unit">+</span></p><p class="title">覆盖全国城市</p></div></li><li><div><p class="number"><span class="counterDX" data-counter-value="999">999</span><span class="unit">+</span></p><p class="title">口碑好评</p></div></li></ul><div class="clear"></div></div></div></div>
    <div class="mlist news module" >
  <div class="bgmask"></div>
  <div class="m_container">    <div class="container_header wow animated ">
      <p class="title">新闻资讯</p>
            <p class="subtitle">News Information</p>
          </div>
        <div class="category"><a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86206/" class="active">全部</a><a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86207/">最新</a></div>
        <div class="content">
      <div class="wrapper">
        <div class="more_wrap"><a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86206/" class="more wow" style="animation-delay:.5s">更多<i class="fa fa-angle-right" aria-hidden="true"></i></a></div>
<ul class="content_list clearfix">
    <li id="item_block_0" class="item_block wow" >
  <a href="http://mo005-8055.mo5.line1.uemo.net/list/post/393988/" class="item_box">
      <div href="http://mo005-8055.mo5.line1.uemo.net/list/post/393988/" class="item_img" target="_blank">
          <img src="http://resources.jsmo.xin/templates/upload/8055/201810/1539569071121.jpg"/>
          <div class="item_mask"></div>
      </div>
      <div class="item_wrapper clearfix">
        <div class="item_info clearfix">
            <p class="title ellipsis">广东横琴万象世界启动区景观设计</p>
            <p class="subtitle ellipsis"></p>
        </div>
        <p class="date_wrap">
            <span class="year">2016</span>
            <span class="md">12-08</span>
        </p>
        <div  class="item_des">
          <p class="description">问题之马由艺术家Claudia Fontes设计，并展出于2017威尼斯建筑双年展阿根廷馆。一组三件雕刻作品包括一座纪念碑式以及......</p>
        </div>
      </div>
      </a> 
      <a href="http://mo005-8055.mo5.line1.uemo.net/list/post/393988/" class="details">详情<i class="fa fa-angle-right" aria-hidden="true"></i></a>
      <div class="item_tags clearfix"><i class="fa fa-tags"></i></div>
  </li>
    <li id="item_block_1" class="item_block wow" >
  <a href="http://mo005-8055.mo5.line1.uemo.net/list/post/393986/" class="item_box">
      <div href="http://mo005-8055.mo5.line1.uemo.net/list/post/393986/" class="item_img" target="_blank">
          <img src="http://resources.jsmo.xin/templates/upload/8055/201810/1540204543391.jpg"/>
          <div class="item_mask"></div>
      </div>
      <div class="item_wrapper clearfix">
        <div class="item_info clearfix">
            <p class="title ellipsis">碎片的视觉重组</p>
            <p class="subtitle ellipsis"></p>
        </div>
        <p class="date_wrap">
            <span class="year">2016</span>
            <span class="md">12-07</span>
        </p>
        <div  class="item_des">
          <p class="description">今年一月在巴黎的Maison展览会上，这个功能主义家具和配件收藏品被分为三个系列：Picto、Chirp和Stone。</p>
        </div>
      </div>
      </a> 
      <a href="http://mo005-8055.mo5.line1.uemo.net/list/post/393986/" class="details">详情<i class="fa fa-angle-right" aria-hidden="true"></i></a>
      <div class="item_tags clearfix"><i class="fa fa-tags"></i><a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86206/tag/%25E7%2581%25AF%25E5%2585%25B7/">灯具</a></div>
  </li>
    <li id="item_block_2" class="item_block wow" >
  <a href="http://mo005-8055.mo5.line1.uemo.net/list/post/393987/" class="item_box">
      <div href="http://mo005-8055.mo5.line1.uemo.net/list/post/393987/" class="item_img" target="_blank">
          <img src="http://resources.jsmo.xin/templates/upload/8055/201810/1540204553965.jpg"/>
          <div class="item_mask"></div>
      </div>
      <div class="item_wrapper clearfix">
        <div class="item_info clearfix">
            <p class="title ellipsis">菲利普·帕雷诺作品精选 + 上海首展预告</p>
            <p class="subtitle ellipsis"></p>
        </div>
        <p class="date_wrap">
            <span class="year">2016</span>
            <span class="md">12-06</span>
        </p>
        <div  class="item_des">
          <p class="description">通过探索展览自身作为一种媒材的可能性，帕雷诺在过去二十年里对展览体验做出了彻底的重新定义。</p>
        </div>
      </div>
      </a> 
      <a href="http://mo005-8055.mo5.line1.uemo.net/list/post/393987/" class="details">详情<i class="fa fa-angle-right" aria-hidden="true"></i></a>
      <div class="item_tags clearfix"><i class="fa fa-tags"></i><a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86206/tag/%25E7%2581%25AF%25E5%2585%25B7/">灯具</a></div>
  </li>
    <li id="item_block_3" class="item_block wow" >
  <a href="http://mo005-8055.mo5.line1.uemo.net/list/post/393969/" class="item_box">
      <div href="http://mo005-8055.mo5.line1.uemo.net/list/post/393969/" class="item_img" target="_blank">
          <img src="http://resources.jsmo.xin/templates/upload/8055/201810/154026399944.jpg"/>
          <div class="item_mask"></div>
      </div>
      <div class="item_wrapper clearfix">
        <div class="item_info clearfix">
            <p class="title ellipsis">天兆：被人忽视的世界之谜，泰国</p>
            <p class="subtitle ellipsis"></p>
        </div>
        <p class="date_wrap">
            <span class="year">2016</span>
            <span class="md">12-06</span>
        </p>
        <div  class="item_des">
          <p class="description">梦魇，原始性和某些深刻的印象以细微而富有魅力的形式展现。</p>
        </div>
      </div>
      </a> 
      <a href="http://mo005-8055.mo5.line1.uemo.net/list/post/393969/" class="details">详情<i class="fa fa-angle-right" aria-hidden="true"></i></a>
      <div class="item_tags clearfix"><i class="fa fa-tags"></i><a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86206/tag/%25E7%2581%25AF%25E5%2585%25B7/">灯具</a></div>
  </li>
  </ul>        <a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86206/" class="more wow" style="animation-delay:.5s">更多<i class="fa fa-angle-right" aria-hidden="true"></i></a>
      </div>
      </div>
    <div class="clear"></div>
  </div>
</div>

    <div class="mlist imagelink module" >
  <div class="bgmask"></div>
  <div class="m_container">    <div class="container_header wow animated ">
      <p class="title">合作夥伴</p>
            <p class="subtitle">partner</p>
          </div>
        <div class="category"><a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86208/" class="active">全部</a></div>
            <div class="content">
      <div class="wrapper">
        <ul class="content_list" style="width:800px">
        <li id="item_block_0" class="item_block wow" style="animation-delay:.0s">
        <a href="http://www.baidu.com" target="_blank" class="item_img" title="VFV">
            <img src="http://resources.jsmo.xin/templates/upload/8055/201810/1539415073374.png" />
        </a>
    </li>
        <li id="item_block_1" class="item_block wow" style="animation-delay:.1s">
        <a href="http://www.baidu.com" target="_blank" class="item_img" title="MANOUCHE">
            <img src="http://resources.jsmo.xin/templates/upload/8055/201810/1539415053538.png" />
        </a>
    </li>
        <li id="item_block_2" class="item_block wow" style="animation-delay:.2s">
        <a href="http://www.baidu.com" target="_blank" class="item_img" title="DEM BOBO">
            <img src="http://resources.jsmo.xin/templates/upload/8055/201810/1539415022411.png" />
        </a>
    </li>
        <li id="item_block_3" class="item_block wow" style="animation-delay:.3s">
        <a href="http://www.baidu.com" target="_blank" class="item_img" title="Facebook">
            <img src="http://resources.jsmo.xin/templates/upload/8055/201810/1539414957111.png" />
        </a>
    </li>
        <li id="item_block_4" class="item_block wow" style="animation-delay:.4s">
        <a href="http://www.baidu.com" target="_blank" class="item_img" title="Mozilla">
            <img src="http://resources.jsmo.xin/templates/upload/8055/201810/1539414964748.png" />
        </a>
    </li>
        <li id="item_block_5" class="item_block wow" style="animation-delay:.5s">
        <a href="http://www.baidu.com" target="_blank" class="item_img" title="Oracle">
            <img src="http://resources.jsmo.xin/templates/upload/8055/201810/1539414973338.png" />
        </a>
    </li>
        <li id="item_block_6" class="item_block wow" style="animation-delay:.0s">
        <a class="item_img" title="Microsoft">
            <img src="http://resources.jsmo.xin/templates/upload/8055/201810/1539414981166.png" />
        </a>
    </li>
        <li id="item_block_7" class="item_block wow" style="animation-delay:.1s">
        <a href="http://www.baidu.com" target="_blank" class="item_img" title="Apple">
            <img src="http://resources.jsmo.xin/templates/upload/8055/201810/1539414988652.png" />
        </a>
    </li>
        <li id="item_block_8" class="item_block wow" style="animation-delay:.2s">
        <a href="http://www.baidu.com" target="_blank" class="item_img" title="IBM">
            <img src="http://resources.jsmo.xin/templates/upload/8055/201810/1539414996311.png" />
        </a>
    </li>
        <li id="item_block_9" class="item_block wow" style="animation-delay:.3s">
        <a href="http://www.baidu.com" target="_blank" class="item_img" title="Adobe">
            <img src="http://resources.jsmo.xin/templates/upload/8055/201810/1539415003413.png" />
        </a>
    </li>
    </ul>        <a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86208/" class="more wow" style="animation-delay:.5s">更多<i class="fa fa-angle-right" aria-hidden="true"></i></a>
      </div>
      </div>
    <div class="clear"></div>
  </div>
</div>

    <div class="mlist team module" >
  <div class="bgmask"></div>
  <div class="m_container">    <div class="container_header wow animated ">
      <p class="title">知名设计师</p>
            <p class="subtitle">team</p>
          </div>
        <div class="category"><a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86210/" class="active">全部</a></div>
            <div class="content">
      <div class="wrapper">
        <div class="more_wrap"><a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86210/" class="more wow" style="animation-delay:.5s">更多<i class="fa fa-angle-right" aria-hidden="true"></i></a></div>
<ul class="content_list clearfix">
    <li id="item_block_0" class="item_block wow" >
  <a href="http://mo005-8055.mo5.line1.uemo.net/list/post/394042/" class="item_box">
      <div href="http://mo005-8055.mo5.line1.uemo.net/list/post/394042/" class="item_img" target="_blank">
          <img src="http://resources.jsmo.xin/templates/upload/8055/201810/1539682963726.png"/>
          <div class="item_mask"></div>
      </div>
      <div class="item_wrapper clearfix">
        <div class="item_info clearfix">
          <div class="text_wrap">
              <p class="title ellipsis">麦尔・加西亚</p>
              <p class="subtitle ellipsis">知名设计师</p>
          </div>
          <p class="date_wrap">
              <span class="year">2017</span>
              <span class="md">03-07</span>
          </p>
        </div>
        <div  class="item_des description">
          知名网页设计师，北京人。毕业于中国传媒大学美术系，作品被Awwwards设计评审机构评为全球最佳CSS网站，专注高端WEB解决方案，是网络人气设计师。
        </div>
      </div>
    </a>   
      <a href="http://mo005-8055.mo5.line1.uemo.net/list/post/394042/" class="details">详情<i class="fa fa-angle-right" aria-hidden="true"></i></a>
      <div class="item_tags clearfix"><i class="fa fa-tags"></i><a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86210/tag/%25E8%25AE%25BE%25E8%25AE%25A1%25E5%25B8%2588/">设计师</a></div>
     
  </li>
    <li id="item_block_1" class="item_block wow" >
  <a href="http://mo005-8055.mo5.line1.uemo.net/list/post/394041/" class="item_box">
      <div href="http://mo005-8055.mo5.line1.uemo.net/list/post/394041/" class="item_img" target="_blank">
          <img src="http://resources.jsmo.xin/templates/upload/8055/201810/1539748397591.png"/>
          <div class="item_mask"></div>
      </div>
      <div class="item_wrapper clearfix">
        <div class="item_info clearfix">
          <div class="text_wrap">
              <p class="title ellipsis">伊莎贝拉・斯旺</p>
              <p class="subtitle ellipsis">知名设计师</p>
          </div>
          <p class="date_wrap">
              <span class="year">2017</span>
              <span class="md">03-07</span>
          </p>
        </div>
        <div  class="item_des description">
          是首位设计师获选香港十大杰出青年、唯一设计师获颁赠市政局设计大奖、首位华人名列世界平面设计师名人录、并获英国选为二十世纪杰出艺术家及设计师。其艺术作品常展出海外各地，曾在英国、美国、德国、芬兰、日本、韩国﹑新加坡、中国等地多次策划及举行个人展览，在平面设计界是当之无愧的大师级人物
        </div>
      </div>
    </a>   
      <a href="http://mo005-8055.mo5.line1.uemo.net/list/post/394041/" class="details">详情<i class="fa fa-angle-right" aria-hidden="true"></i></a>
      <div class="item_tags clearfix"><i class="fa fa-tags"></i><a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86210/tag/%25E5%25A4%25A7%25E5%25B8%2588/">大师</a></div>
     
  </li>
    <li id="item_block_2" class="item_block wow" >
  <a href="http://mo005-8055.mo5.line1.uemo.net/list/post/394040/" class="item_box">
      <div href="http://mo005-8055.mo5.line1.uemo.net/list/post/394040/" class="item_img" target="_blank">
          <img src="http://resources.jsmo.xin/templates/upload/8055/201810/1539748017852.png"/>
          <div class="item_mask"></div>
      </div>
      <div class="item_wrapper clearfix">
        <div class="item_info clearfix">
          <div class="text_wrap">
              <p class="title ellipsis">冈特・兰堡</p>
              <p class="subtitle ellipsis">欧洲最有创造力的“视觉诗人”</p>
          </div>
          <p class="date_wrap">
              <span class="year">2017</span>
              <span class="md">03-07</span>
          </p>
        </div>
        <div  class="item_des description">
          第二次世界大战结束之后，在欧洲和美国的平面设计形成了新流派--观念形象设计。这个强调视觉传达的准确性、形象性和理性的新流派是战后平面设计的重要发展之一，在平面设计史上具有重要的历史意义和现实意义。
        </div>
      </div>
    </a>   
      <a href="http://mo005-8055.mo5.line1.uemo.net/list/post/394040/" class="details">详情<i class="fa fa-angle-right" aria-hidden="true"></i></a>
      <div class="item_tags clearfix"><i class="fa fa-tags"></i><a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86210/tag/%25E5%25A4%25A7%25E5%25B8%2588/">大师</a></div>
     
  </li>
    <li id="item_block_3" class="item_block wow" >
  <a href="http://mo005-8055.mo5.line1.uemo.net/list/post/394053/" class="item_box">
      <div href="http://mo005-8055.mo5.line1.uemo.net/list/post/394053/" class="item_img" target="_blank">
          <img src="http://resources.jsmo.xin/templates/upload/8055/201810/153975311777.png"/>
          <div class="item_mask"></div>
      </div>
      <div class="item_wrapper clearfix">
        <div class="item_info clearfix">
          <div class="text_wrap">
              <p class="title ellipsis">路易吉·克拉尼</p>
              <p class="subtitle ellipsis">工业设计师</p>
          </div>
          <p class="date_wrap">
              <span class="year">2014</span>
              <span class="md">11-06</span>
          </p>
        </div>
        <div  class="item_des description">
          地球是圆的，所有的星际物体都是圆的，而且在圆形或椭圆形的轨道上运作，甚至连我们自身也是从那个圆形的物种细胞中繁衍出来的。我将追随伽利略的信仰：我的世界也是圆的。
        </div>
      </div>
    </a>   
      <a href="http://mo005-8055.mo5.line1.uemo.net/list/post/394053/" class="details">详情<i class="fa fa-angle-right" aria-hidden="true"></i></a>
      <div class="item_tags clearfix"><i class="fa fa-tags"></i><a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86210/tag/%25E5%25A4%25A7%25E5%25B8%2588/">大师</a></div>
     
  </li>
  </ul>        <a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86210/" class="more wow" style="animation-delay:.5s">更多<i class="fa fa-angle-right" aria-hidden="true"></i></a>
      </div>
      </div>
    <div class="clear"></div>
  </div>
</div>

    <div class="mcustomize module bgShow bgParallax" style=" background-image:url(http://resources.jsmo.xin/templates/upload/8055/201810/1539760603355.png);"><div class="bgmask"></div><div class="module_container"><div class="container_content"><div class="contentbody"><div class="wrapper"><div class="header wow"><p class="title">OUR BRAND</p><p class="subtitle">简单让生活更美好</p></div><div class="description wow"><p style="text-align: left;"><span style="font-size: 14px;">极简杂志是设计中极简主义的庆典。我们的目标是启发创意，展示艺术、建筑、时尚、家具和产品设计的最优秀的例子，出版每日文章，为您提供一个精心挑选的最具吸引力的工作，无论是从既定的制造商还是新兴的人才。</span></p><p style="text-align: left;"><span style="font-size: 14px;"><br/></span></p><p style="text-align: left;"><a href="http://mo005-8055.mo5.line1.jsmo.xin/page/about/" target="_blank" class="more"><span style="font-size: 14px;">MORE</span></a></p></div></div></div><div class="mediabody wow"><img src="http://resources.jsmo.xin/templates/upload/8055/201810/1540284047385.jpg" /></div><div class="clear"></div></div></div></div>
    <div class="mlist service module" >
  <div class="bgmask"></div>
  <div class="m_container">    <div class="container_header wow animated ">
      <p class="title">服务范围</p>
            <p class="subtitle">service</p>
          </div>
        <div class="category"><a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86212/" class="active">全部</a><a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86215/">分类1</a><a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86214/">分类2</a><a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86213/">分类3</a></div>
        <div class="content">
      <div class="wrapper">
        <ul class="content_list clearfix ser-slider">
    <li id="item_block_0" class="item_block wow" >
  <a href="http://mo005-8055.mo5.line1.uemo.net/list/post/394052/" class="item_box">
      <div href="http://mo005-8055.mo5.line1.uemo.net/list/post/394052/" class="item_img" target="_blank">
          <img src="http://resources.jsmo.xin/templates/upload/8055/201810/1539767394309.png"/>
          <div class="item_mask"></div>
      </div>
      <div class="item_wrapper clearfix">
        <div class="item_info clearfix">
          <p class="title ellipsis">冰山 / ICEBERG</p>
          <p class="subtitle ellipsis">高质量的设计产品</p>
        </div>
        <p class="date_wrap">
              <span class="year">2017</span>
              <span class="md">07-11</span>
        </p>
        <div  class="item_des">
          <p class="description">Iceberg是使用Gantri的Table Lights产品系统创建的，它提供了一组标准的组件、资源和工具包，以帮助设计人员轻松地开发高质量的产品。</p>
        </div>
      </div>
      </a> 
      <a href="http://mo005-8055.mo5.line1.uemo.net/list/post/394052/" class="details">详情<i class="fa fa-angle-right" aria-hidden="true"></i></a>
      <div class="item_tags clearfix"><i class="fa fa-tags"></i><a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86212/tag/%25E5%25AE%25B6%25E5%2585%25B7/">家具</a><a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86212/tag/%25E7%2581%25AF%25E5%2585%25B7/">灯具</a></div>
     
  </li>
    <li id="item_block_1" class="item_block wow" >
  <a href="http://mo005-8055.mo5.line1.uemo.net/list/post/394051/" class="item_box">
      <div href="http://mo005-8055.mo5.line1.uemo.net/list/post/394051/" class="item_img" target="_blank">
          <img src="http://resources.jsmo.xin/templates/upload/8055/201810/1539767438432.png"/>
          <div class="item_mask"></div>
      </div>
      <div class="item_wrapper clearfix">
        <div class="item_info clearfix">
          <p class="title ellipsis">LEELA LAMP</p>
          <p class="subtitle ellipsis">灯具主食</p>
        </div>
        <p class="date_wrap">
              <span class="year">2017</span>
              <span class="md">03-07</span>
        </p>
        <div  class="item_des">
          <p class="description">诺曼底建筑师的领导Carrie Lamp已成为相当微妙和聪明的灯具主食。为制造商菜单设计，这种便携式USB充电灯是一个严重的游戏改变。</p>
        </div>
      </div>
      </a> 
      <a href="http://mo005-8055.mo5.line1.uemo.net/list/post/394051/" class="details">详情<i class="fa fa-angle-right" aria-hidden="true"></i></a>
      <div class="item_tags clearfix"><i class="fa fa-tags"></i><a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86212/tag/%25E7%2581%25AF%25E5%2585%25B7/">灯具</a><a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86212/tag/%25E5%25AE%25B6%25E5%25B1%2585/">家居</a><a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86212/tag/%25E8%25A3%2585%25E9%25A5%25B0%25E5%2593%2581/">装饰品</a></div>
     
  </li>
    <li id="item_block_2" class="item_block wow" >
  <a href="http://mo005-8055.mo5.line1.uemo.net/list/post/394050/" class="item_box">
      <div href="http://mo005-8055.mo5.line1.uemo.net/list/post/394050/" class="item_img" target="_blank">
          <img src="http://resources.jsmo.xin/templates/upload/8055/201810/1539767822258.png"/>
          <div class="item_mask"></div>
      </div>
      <div class="item_wrapper clearfix">
        <div class="item_info clearfix">
          <p class="title ellipsis">The Standard</p>
          <p class="subtitle ellipsis">清光柔光</p>
        </div>
        <p class="date_wrap">
              <span class="year">2017</span>
              <span class="md">03-07</span>
        </p>
        <div  class="item_des">
          <p class="description">阿姆斯特丹的工业设计工作室凯文·谢最近与标准工作室室内建筑师合作，设计和设计了标准灯。看到一个全新的身份，一个过去是传统的现代的呈现——看到原始结构被完全更新而落入当代美学，这并不奇怪。</p>
        </div>
      </div>
      </a> 
      <a href="http://mo005-8055.mo5.line1.uemo.net/list/post/394050/" class="details">详情<i class="fa fa-angle-right" aria-hidden="true"></i></a>
      <div class="item_tags clearfix"><i class="fa fa-tags"></i><a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86212/tag/%25E7%2581%25AF%25E5%2585%25B7/">灯具</a><a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86212/tag/%25E8%25A3%2585%25E9%25A5%25B0%25E5%2593%2581/">装饰品</a></div>
     
  </li>
    <li id="item_block_3" class="item_block wow" >
  <a href="http://mo005-8055.mo5.line1.uemo.net/list/post/394049/" class="item_box">
      <div href="http://mo005-8055.mo5.line1.uemo.net/list/post/394049/" class="item_img" target="_blank">
          <img src="http://resources.jsmo.xin/templates/upload/8055/201810/1539769970377.png"/>
          <div class="item_mask"></div>
      </div>
      <div class="item_wrapper clearfix">
        <div class="item_info clearfix">
          <p class="title ellipsis">双面反光镜</p>
          <p class="subtitle ellipsis">镀金黄铜一镜两用</p>
        </div>
        <p class="date_wrap">
              <span class="year">2017</span>
              <span class="md">03-07</span>
        </p>
        <div  class="item_des">
          <p class="description">Formafantasma的Helmet灯可以看到三个圆盘巧妙的精密抛光的镀金黄铜，三明治的LED光源，以微妙地提供照明。</p>
        </div>
      </div>
      </a> 
      <a href="http://mo005-8055.mo5.line1.uemo.net/list/post/394049/" class="details">详情<i class="fa fa-angle-right" aria-hidden="true"></i></a>
      <div class="item_tags clearfix"><i class="fa fa-tags"></i><a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86212/tag/%25E8%25A3%2585%25E9%25A5%25B0%25E5%2593%2581%25EF%25BC%258C/">装饰品，</a><a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86212/tag/%25E9%2595%2580%25E9%2587%2591/">镀金</a></div>
     
  </li>
  </ul>
        <a href="http://mo005-8055.mo5.line1.uemo.net/list/id/86212/" class="more wow" style="animation-delay:.5s">更多<i class="fa fa-angle-right" aria-hidden="true"></i></a>
      </div>
      </div>
    <div class="clear"></div>
  </div>
</div>

    <div id="mcontact" class="mlist module">
        
      <div class="container_header">
        <p class="title">联系我们</p>
                <p class="subtitle">Contact Us</p>
              </div>
      
            <div class="contactlist plr10">
        <div class="contactinfo">
          <h3 class="name">网站建设文化传播有限公司</h3>
          <p class="add"><span>地址：</span>北京市西城区金融大街33号(近兴盛街)</p>
          <p class="zip"><span>邮编：</span>100000</p>
          <p class="tel"><span>电话：</span><a href="tel:<a href='tel:400-888-8888'>400-888-8888</a>"><a href='tel:400-888-8888'>400-888-8888</a></a></p>
                    <p class="mobile"><span>手机：</span><a href="tel:<a href='tel:188-6666-5188'>188-6666-5188</a> / <a href='tel:13-4353-5331'>13-4353-5331</a>"><a href='tel:188-6666-5188'>188-6666-5188</a> / <a href='tel:13-4353-5331'>13-4353-5331</a></a></p>
                    <p class="fax"><span>传真：</span>000-66668888</p>
                    <p class="email"><span>邮箱：</span>0008008@qq.com</p>
          <div class="share_app"> <a class="fl" target="_blank" href="http://weibo.com/web"><i class="fa fa-weibo"></i></a><a class="fl" target="_blank" href="mqqwpa://im/chat?chat_type=wpa&uin=40080000&version=1&src_type=web&web_src=qq.com"><i class="fa fa-qq"></i></a> <a id="mpbtn" class="fl" target="_blank" href="http://resources.jsmo.xin/templates/upload/1/201508/1438424052624.jpg"><i class="fa fa-weixin"></i></a> </div>
        </div>
      </div>
      
    <div id="contactform" class="contactform">
    <form action="http://mo005-8055.mo5.line1.uemo.net/service/message" method="post">
        <p class="contactform_name">
        <input type="text" class="inputtxt" name="name" placeholder="姓名" autocomplete="off" />
        </p>
        <p class="contactform_eml">
        <input type="text" class="inputtxt" name="email" placeholder="邮箱"  autocomplete="off"/>
        </p>
        <p class="contactform_tel">
        <input type="text" class="inputtxt" name="tel" placeholder="电话"  autocomplete="off"/>
        </p>
        <p class="contactform_content">
        <textarea class="inputtxt" name="content" placeholder="内容" autocomplete="off"></textarea>
        </p>
        <p class="contactform_submit">
        <input class="inputtxt submit" type="submit" value="提交" />
        </p>
    </form>
    </div> -->
</div>
        <!--联系-->
  </div>
  <div id="footer">
    <p><span style="width: 100%" class="ellipsis">COPYRIGHT (©) 2018 Vicky & Tivon </span><a class="beian" href="http://www.miitbeian.gov.cn/" style="display:inline; width:auto; color:#8e8e8e" target="_blank"></a></p>
  </div>
  
</div>
  <div class="list_nav">
</div>
</body>
</html>
