/**
 * Created by yuxibing on 2018/6/13.
 */
$(function () {
    banner();
});
var banner = function () {

    var getData = function (callback) {
        if (window.data) {
            callback && callback(window.data);
        } else {
            $.ajax({
                type: 'get',
                url: 'js/data.json',
                dataType: 'json',
                data: '',
                success: function (data) {
                    window.data = data;
                    callback && callback(window.data);
                }
            });
        }
    };
    var render = function () {
        getData(function (data) {
            var isMobile = $(window).width() < 768 ? true : false;
            var pointHtml = template('pointTemplate', {list: data});
            var imgHtml = template('imgTemplate', {list: data, isMobile:isMobile});
            $('.carousel-indicators').html(pointHtml);
            $('.carousel-inner').html(imgHtml);
        });

    };
    $(window).on('resize', function () {
        render();
        /*通过js主动触发某个事件*/
    }).trigger('resize');
};
