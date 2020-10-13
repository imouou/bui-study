loader.define(function(require, exports, module) {

    var params = bui.history.getParams(module.id);

    // 焦点图 js 初始化:
    var uiSlide = bui.slide({
        id: `#${module.id} .bui-slide`,
        height: params.height || 300,
        autopage: true,
        loop: params.loop == "false" ? false : true,
        data: params.data || [{
            image: "http://easybui.com/demo/images/banner01.png",
            url: "http://easybui.com/demo/index.html#pages/ui_controls/bui.slide.html",
        }],
        callback: function(e) {
            var index = this.index();
            loader.trigger(`${module.id}:click`, index);
        }
    });

    uiSlide.on("to", function() {
        var index = this.index();

        loader.trigger(`${module.id}:to`, index);
    })
})