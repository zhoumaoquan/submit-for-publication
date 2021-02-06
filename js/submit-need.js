layui.use(['form', 'upload'], function () {
	var form = layui.form
	//监听提交
	// form.on('submit(formDemo)', function(data){
	//   layer.msg(JSON.stringify(data.field))
	//   return false
	// })
	var upload = layui.upload;
	//执行实例
	var uploadInst = upload.render({
	  elem: '#upbtn' //绑定元素
	  ,url: '/upload/' //上传接口
	  ,done: function(res){
		//上传完毕回调
	  }
	  ,error: function(){
	    //请求异常回调
	  }
	});
});
//下拉框及其选择
var sec = $('.select input')
sec.on('click', function() {
	$(this).parent().toggleClass('active')
})
$('.options a').on('click', function() {
	const _this = $(this)
	_this.parent().parent().siblings('input').val(_this.text())
	_this.parent().parent().parent().removeClass('active')
	return false
})
//勾选文章致谢
$('.agree>span').on('click', function() {
	$(this).toggleClass('not')
})