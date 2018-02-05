//判断是否已登陆
function isLogin() {
  if ($api.getStorage('islogin') == undefined) {
      window.console.log('islogin-------------false');
  } else {
      window.console.log('islogin-------------true');
  }
}
