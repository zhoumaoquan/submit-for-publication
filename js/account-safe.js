layui.use(['form', 'element'], function () {
	var form = layui.form
	//监听提交
	// form.on('submit(formDemo)', function(data){
	//   layer.msg(JSON.stringify(data.field))
	//   return false
	// })o
});
//获取
var getCodeEO = $('.getcode-eo')
var getCodeEN = $('.getcode-en')
var getCodePO = $('.getcode-po')
var getCodePN = $('.getcode-pn')
var timeoutEO = +localStorage.getItem('getCodeEO') || 60	//倒计时数
var timerEO = null
var timeoutEN = +localStorage.getItem('getCodeEN') || 60	
var timerEN = null
var timeoutPO = +localStorage.getItem('getCodePO') || 60	
var timerPO = null
var timeoutPN = +localStorage.getItem('getCodePN') || 60	
var timerPN = null

//原邮箱验证码
//刷新页面时正在倒计时
if (localStorage.getItem('getCodeEO')) {
	getCodeEO.prop('disabled', true) 
	localStorage.setItem('getCodeEO', timeoutEO)
	getCodeEO.text(`重新获取${--timeoutEO}S`)
	timeoutGetCodeEO()
}
//获取验证码
getCodeEO.on('click', ()=>{
	const cur = +localStorage.getItem('getCodeEO')
	getCodeEO.prop('disabled', true)
	if (!cur) {
		localStorage.setItem('getCodeEO', timeoutEO)
		getCodeEO.text(`重新获取${--timeoutEO}S`)
		timeoutGetCodeEO()
	}
})
function timeoutGetCodeEO() {
	timerEO = setInterval(()=>{
		localStorage.setItem('getCodeEO', timeoutEO)
		getCodeEO.text(`重新获取${--timeoutEO}S`)
		if (timeoutEO <= 0) {
			clearTimeout(timerEO)
			timeoutEO = 60
			getCodeEO.text(`获取验证码`).prop('disabled', false) 
			localStorage.removeItem('getCodeEO')
		}
	}, 1000)
}
//新邮箱验证码
if (localStorage.getItem('getCodeEN')) {
	getCodeEN.prop('disabled', true) 
	localStorage.setItem('getCodeEN', timeoutEN)
	getCodeEN.text(`重新获取${--timeoutEN}S`)
	timeoutGetCodeEN()
}
getCodeEN.on('click', ()=>{
	const cur = +localStorage.getItem('getCodeEN')
	getCodeEN.prop('disabled', true) 
	if (!cur) {
		localStorage.setItem('getCodeEN', timeoutEN)
		getCodeEN.text(`重新获取${--timeoutEN}S`)
		timeoutGetCodeEN()
	} 
})
function timeoutGetCodeEN() {
	timerEN = setInterval(()=>{
		localStorage.setItem('getCodeEN', timeoutEN)
		getCodeEN.text(`重新获取${--timeoutEN}S`)
		if (timeoutEN <= 0) {
			clearTimeout(timerEN)
			timeoutEN = 60
			getCodeEN.text(`获取验证码`).prop('disabled', false) 
			localStorage.removeItem('getCodeEN')
		}
	}, 1000)
}
//原手机验证码
if (localStorage.getItem('getCodePO')) {
	getCodePO.prop('disabled', true) 
	localStorage.setItem('getCodePO', timeoutPO)
	getCodePO.text(`重新获取${--timeoutPO}S`)
	timeoutGetCodePO()
}
getCodePO.on('click', ()=>{
	const cur = +localStorage.getItem('getCodePO')
	if (!cur) {
		getCodePO.prop('disabled', true) 
		localStorage.setItem('getCodePO', timeoutPO)
		getCodePO.text(`重新获取${--timeoutPO}S`)
		timeoutGetCodePO()
	} 
})
function timeoutGetCodePO() {
	timerPO = setInterval(()=>{
		localStorage.setItem('getCodePO', timeoutPO)
		getCodePO.text(`重新获取${--timeoutPO}S`)
		if (timeoutPO <= 0) {
			clearTimeout(timerPO)
			timeoutPO = 60
			getCodePO.text(`获取验证码`).prop('disabled', false) 
			localStorage.removeItem('getCodePO')
		}
	}, 1000)
}
//新手机验证码
if (localStorage.getItem('getCodePN')) {
	getCodePN.prop('disabled', true) 
	localStorage.setItem('getCodePN', timeoutPN)
	getCodePN.text(`重新获取${--timeoutPN}S`)
	timeoutGetCodePN()
}
getCodePN.on('click', ()=>{
	const cur = +localStorage.getItem('getCodePN')
	getCodePN.prop('disabled', true)
	if (!cur) {
		localStorage.setItem('getCodePN', timeoutPN)
		getCodePN.text(`重新获取${--timeoutPN}S`)
		timeoutGetCodePN()
	}
})
function timeoutGetCodePN() {
	timerPN = setInterval(()=>{
		localStorage.setItem('getCodePN', timeoutPN)
		getCodePN.text(`重新获取${--timeoutPN}S`)
		if (timeoutPN <= 0) {
			clearTimeout(timerPN)
			timeoutPN = 60
			getCodePN.text(`获取验证码`).prop('disabled', false) 
			localStorage.removeItem('getCodePN')
		}
	}, 1000)
}