
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/my/my","pages/news/news","pages/msg/msg","pages/search/search","pages/addInput/addInput","pages/newsMore/newsMore","pages/topicDetails/topicDetails","pages/topicDetails/topicDetails"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"社区交友","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#FFFFFF"},"tabBar":{"selectedColor":"#1296db","borderStyle":"black","color":"#323232","list":[{"text":"社区","iconPath":"static/home.png","selectedIconPath":"static/homeed.png","pagePath":"pages/index/index"},{"text":"动态","iconPath":"static/dynamic.png","selectedIconPath":"static/dynamiced.png","pagePath":"pages/news/news"},{"text":"消息","iconPath":"static/news.png","selectedIconPath":"static/newsed.png","pagePath":"pages/msg/msg"},{"text":"我的","iconPath":"static/my.png","selectedIconPath":"static/myed.png","pagePath":"pages/my/my"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"vue-app","compilerVersion":"2.8.6","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":{"searchInput":{"disabled":true,"align":"center","backgroundColor":"#f5f4f2","borderRadius":"4px","placeholder":"搜索帖子","placeholderColor":"#6c6d67"},"buttons":[{"colorPressed":"#fd597c","float":"right","fontSize":"16px","fontSrc":"./static/iconfont.ttf","text":""}]}}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/news/news","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":false}},{"path":"/pages/msg/msg","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/search/search","meta":{},"window":{"titleNView":{"searchInput":{"disabled":false,"align":"center","backgroundColor":"#f5f4f2","borderRadius":"4px","placeholder":"搜索帖子","placeholderColor":"#6c6d67"},"buttons":[{"colorPressed":"#fd597c","float":"right","fontSize":"16px","fontSrc":"./static/iconfont.ttf","text":"搜索"}]}}},{"path":"/pages/addInput/addInput","meta":{},"window":{"titleNView":false}},{"path":"/pages/newsMore/newsMore","meta":{},"window":{}},{"path":"/pages/topicDetails/topicDetails","meta":{},"window":{"titleNView":{"type":"transparent","buttons":[{"type":"menu"}]}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
