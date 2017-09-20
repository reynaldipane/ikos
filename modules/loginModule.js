//Type your code here
function processLogin() {
  var username = frmLogin.txUsername.text;
  var password = frmLogin.txPassword.text;
  
  var request = new kony.net.HttpRequest();
  glb_req  		= request;
  request.onReadyStateChange = loginCallBack;
  request.open(constants.HTTP_METHOD_POST, "http://purge-works.com/login" );
  request.setRequestHeader("Content-Type", "application/json");
  var postdata = {
    "username": username,
    "password": password
  };
  request.send(postdata);
}

function loginCallBack() {
  	if(glb_req.readyState==constants.HTTP_READY_STATE_DONE) {
		var myResponse=JSON.stringify(glb_req.response.code);
     	var content   =JSON.parse(myResponse);
		if (content == 200) {
          frmMain.show();
        } else {
          alert("Username atau Password salah");
        }
	}
}