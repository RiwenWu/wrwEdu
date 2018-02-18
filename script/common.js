//判断是否已登陆
function isLogin() {
  if ($api.getStorage('userId') == undefined) {
      window.console.log('islogin-------------false');
      return false;
  } else {
      window.console.log('islogin-------------true');
      return true;
  }
}
