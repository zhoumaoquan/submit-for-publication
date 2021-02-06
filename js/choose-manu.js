var chooseTime = $('.serv .time .time-b')
var timePop = $('.time-box a')
//服务日期选择
chooseTime.click(function(e) {
	const _this = $(this)
	const timeT = _this.siblings('.time-t')
	timeT.toggleClass('active')
	if (timeT.hasClass('active')) {
		timeT.css('color', '#4C97C3')
		timeT.children('.time-box').stop().show(100)
	} else {
		timeT.css('color', '')
		timeT.children('.time-box').hide()
	}
	e.stopPropagation()
})
timePop.on('click', function() {
	const _this = $(this)
	const inp = _this.parent().parent().parent().siblings('.time-b').children('input')
	inp.val(_this.text())
})
document.documentElement.onclick = function() {
	$('.time-box').hide()
	$('.time-t').css('color', '').removeClass('active')
}