var ImgNow = 1;
var block_sliders_item_width = 0;
var ImgCount = $('.block_sliders_item').children().length;
var TimeImg = 5000;
$('.block_sliders_item').css('width', 100*ImgCount + '%');
$('.block_sliders_item_url').css('width', 100/ImgCount + '%');
$(function () {
    var TimeInterval = setInterval(NextImg, TimeImg);
    $('.block_sliders_items').hover(function() {
        clearInterval(TimeInterval);
    }, function() {
        TimeInterval = setInterval(NextImg, TimeImg);
    });
$('.btn_next').click(function() {
        NextImg();
    });
$('.btn_prev').click(function() {
        PrevImg();
    });
});
function NextImg() {

	if (ImgNow == ImgCount || ImgNow <= 0 || ImgNow > ImgCount) {
        $('.block_sliders_item').css('transform', 'translateX(0)');
        ImgNow = 1;
    } else {
        block_sliders_item_width = -$('.block_sliders_items').width() * (ImgNow);
        $('.block_sliders_item').css('transform', 'translateX(' + block_sliders_item_width + 'px)');
        ImgNow++;
    } 
}
function PrevImg() {
    if (ImgNow == 1 || ImgNow <= 0 || ImgNow > ImgCount) {
        block_sliders_item_width = -$('.block_sliders_items').width() * (ImgCount - 1);
        $('.block_sliders_item').css('transform', 'translateX(' + block_sliders_item_width + 'px)');
        ImgNow = ImgCount;
    } else {
        block_sliders_item_width = -$('.block_sliders_items').width() * (ImgNow - 2);
        $('.block_sliders_item').css('transform', 'translateX(' + block_sliders_item_width + 'px)');
        ImgNow--;
    }
}

