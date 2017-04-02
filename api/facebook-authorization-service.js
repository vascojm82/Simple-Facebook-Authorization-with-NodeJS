let Request = require('request');
let graphURLStub = `https://graph.facebook.com/me?access_token=`;

class FacebookVerificationService{
  VerifyTokenAuthenticityWithFacebookAPI(fbUserID, fbAccessToken) {
    return new Promise((resolve) =>{
      Request.get(graphURLStub + fbAccessToken, (err, res) => {
        let body = JSON.parse(res.body);
        let id = body.id;
        if (id == fbUserID){
          resolve(true);
        }else{
          resolve(false);
        }
      })
    })
  }
}

module.exports = new FacebookVerificationService();
