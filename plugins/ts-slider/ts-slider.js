var ImgNow = 1;
var block_sliders_item_width = 0;
var ImgCount = $('#block_sliders_item').children().length();
var TimeImg = 2000;
$(function () {
    setInterval(NextImg, TimeImg);
});
function NextImg() {
	if (ImgNow == slideCount || ImgNow <= 0 || ImgNow > slideCount) {
        $('#block_sliders_item').css('transform', 'translate(0, 0)');
        ImgNow = 1;
    } else {
        block_sliders_item_width = -$('#block_sliders_items').width() * (ImgNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + block_sliders_item_width + 'px, 0)',
            '-webkit-transform': 'translate(' + block_sliders_item_width + 'px, 0)',
            '-ms-transform': 'translate(' + block_sliders_item_width + 'px, 0)',
        });
        ImgNow++;
    } 
}
