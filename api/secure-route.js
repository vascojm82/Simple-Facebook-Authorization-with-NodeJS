let auth = require('./facebook-authorization-service.js');

module.exports = (app) => {
  app.get('/action', (req, res) => {
    let reqID = req.query.ownerFBUserID;
    let reqToken = req.query.fbAccessToken;

    if(!reqID){
      res.status(500).json("No UserID Provided");
    }
    if(!reqToken){
      res.status(403).json("No Access Token Provided");
    }

    auth.VerifyTokenAuthenticityWithFacebookAPI(reqID, reqToken).then((valid) =>{
      if(valid){
        res.status(200).send({message: "User is Authentic!"});
      }else{
        res.status(403).send({message: "Please Try Again...."});
      }
    })
  });
}
