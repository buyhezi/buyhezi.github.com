/*
 * User Management JavaScript Library
 * Copyright (c) 2015 mxchip.com
 * 所有项目都可以使用，注意是leancloud的相关接口
 */
(function(window) {
    AV.$ = jQuery;
    var _APPID = 'UQMdVaLUWTdFijs9A3eojYkv-gzGzoHsz';
    var _APPKEY = 'D5CbIjCXpxCYfcjuY2UtGkjl';
    var _MASTERKEY = 'JjkVfUlCRuMK0jmBWtl5tJCb';

    //用config.js中的appId，appKey初始化，若你搭建自己的js，请用你的appId与appKey
    AV.initialize(_APPID, _APPKEY);
    // AV.init({
    //   appId: _APPID,
    //   appKey: _APPKEY
    // });


    //判断用户是否存在
    m.isExist = function(username, callback) {
        var sucm;
        var errm;
        var query = new AV.Query(AV.User);
        query.equalTo("username", username);
        query.find({
            success: function(ret) {
                callback(ret, errm);
            },
            error: function(err) {
                callback(sucm, err);
            }
        });
    };

    //判断是否登录
    m.isLogin = function() {
        //  alert("in");
        var currentUser = AV.User.current();
        //  alert(currentUser);
        if (currentUser) {
            return true;
        } else {
            return false;
        }
    };

    window.BUY = m;

})(window);
