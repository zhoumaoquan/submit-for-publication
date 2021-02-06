layui.use(['form', 'element'], function () {
	var form = layui.form
	//监听提交
	// form.on('submit(formDemo)', function(data){
	//   layer.msg(JSON.stringify(data.field))
	//   return false
	// })
});
var btnRegist = $('.btn-regist a')
var loginBox = $('.login-box .login')
var registBox = $('.login-box .regist')
var forgetBox = $('.login-box .forget')
var getCodeReg = $('.getcode')
var getCodeFE = $('.getcode-fe')
var getCodeFP = $('.getcode-fp')
var timeoutFE = +localStorage.getItem('getcodeFE') || 60	//倒计时数
var timerFE = null	
var timeoutFP = +localStorage.getItem('getcodeFP') || 60	//倒计时数
var timerFP = null	
var timeoutReg = +localStorage.getItem('getcodeReg') || 60
var timer = null	

//切换为注册
btnRegist.on('click', ()=>{
	loginBox.hide(500)
	registBox.show(500)
})
//切换到忘记密码
$('.forgetpsw a').on('click', ()=>{
	loginBox.hide(500)
	forgetBox.show(500)
})
// (注册)
//刷新页面时正在倒计时
if (localStorage.getItem('getcodeReg')) {
	// loginBox.hide()
	// registBox.show()
	getCodeReg.prop('disabled', true) 
	localStorage.setItem('getcodeReg', timeoutReg)
	getCodeReg.text(`${--timeoutReg}S重新获取`)
	timeoutGetCodeReg()
}
//获取验证码
getCodeReg.on('click', ()=>{
	const cur = +localStorage.getItem('getcodeReg')
	if (cur) {
		getCodeReg.prop('disabled', true) 
	} else {
		//成功获取
		localStorage.setItem('getcodeReg', timeoutReg)
		getCodeReg.text(`${--timeoutReg}S重新获取`)
		timeoutGetCodeReg()
	}
})
// (忘记密码-邮箱)
//刷新页面时正在倒计时
if (localStorage.getItem('getcodeFE')) {
	// loginBox.hide()
	// forgetBox.show()
	getCodeFE.prop('disabled', true) 
	localStorage.setItem('getcodeFE', timeoutFE)
	getCodeFE.text(`${--timeoutFE}S重新获取`)
	timeoutGetCodeFE()
}
//获取验证码
getCodeFE.on('click', ()=>{
	const cur = +localStorage.getItem('getcodeFE')
	if (cur) {
		getCodeFE.prop('disabled', true) 
	} else {
		//成功获取
		localStorage.setItem('getcodeFE', timeoutFE)
		getCodeFE.text(`${--timeoutFE}S重新获取`)
		timeoutGetCodeFE()
	}
})
// (忘记密码-电话)
//刷新页面时正在倒计时
if (localStorage.getItem('getcodeFP')) {
	// loginBox.hide()
	// forgetBox.show()
	getCodeFP.prop('disabled', true) 
	localStorage.setItem('getcodeFP', timeoutFP)
	getCodeFP.text(`${--timeoutFP}S重新获取`)
	timeoutGetCodeFP()
}
//获取验证码
getCodeFP.on('click', ()=>{
	const cur = +localStorage.getItem('getcodeFP')
	if (cur) {
		getCodeFP.prop('disabled', true) 
	} else {
		//成功获取
		localStorage.setItem('getcodeFP', timeoutFP)
		getCodeFP.text(`${--timeoutFP}S重新获取`)
		timeoutGetCodeFP()
	}
})
function timeoutGetCodeReg() {
	timer = setInterval(()=>{
		localStorage.setItem('getcodeReg', timeoutReg)
		getCodeReg.text(`${--timeoutReg}S重新获取`)
		if (timeoutReg <= 0) {
			clearTimeout(timer)
			timeoutReg = 60
			getCodeReg.text(`获取验证码`).prop('disabled', false) 
			localStorage.removeItem('getcodeReg')
		}
	}, 1000)
}
function timeoutGetCodeFE() {
	timerFE = setInterval(()=>{
		localStorage.setItem('getcodeFE', timeoutFE)
		getCodeFE.text(`${--timeoutFE}S重新获取`)
		if (timeoutFE <= 0) {
			clearTimeout(timerFE)
			timeoutFE = 60
			getCodeFE.text(`获取验证码`).prop('disabled', false) 
			localStorage.removeItem('getcodeFE')
		}
	}, 1000)
}
function timeoutGetCodeFP() {
	timerFP = setInterval(()=>{
		localStorage.setItem('getcodeFP', timeoutFP)
		getCodeFP.text(`${--timeoutFP}S重新获取`)
		if (timeoutFP <= 0) {
			clearTimeout(timerFP)
			timeoutFP = 60
			getCodeFP.text(`获取验证码`).prop('disabled', false) 
			localStorage.removeItem('getcodeFP')
		}
	}, 1000)
}
//注册返回登录
$('.regist .return a').on('click', ()=>{
	registBox.hide(500)
	loginBox.show(500)
})
//忘记返回登录
$('.forget .return a').on('click', ()=>{
	forgetBox.hide(500)
	loginBox.show(500)
})
