import { setTimeout } from "timers";

$(function() {
    var nav = new Nav();
    nav.ctrl();
});

function Nav() {
    this.ctrl = function() {
        const $navBtn = $('.navbar li')
        $navBtn.on('click', function() {
            setTimeout(() => {
                $(this).addClass('active').siblings('.active').removeClass('active');
            });
        });
        // 触发点击首个导航按钮
        $navBtn.first().trigger('click');
    }
}