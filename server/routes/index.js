var express = require('express');
var router = express.Router();
let nodemailer = require('nodemailer');
let configs = require('../server-configs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', Wel : 'Welcome to ' });
});

router.get('/test', function(req, res, next) {
    res.render('index', { title: 'TEST PAGE - PM2', Wel : 'This is ' });
});

router.get('/socketTest', function(req, res, next) {
  res.send(true);
});

router.post("/developermail", async(req,res) => {
  try {
    let mailOption = {
      from : configs.app.emailUser,
      to : configs.app.emailUser,
      subject : `[${req.body.title}]문의사항이 도착했습니다.`,
      html : `<img style="width:'80px'; height:40px;" src='cid:logo@cid'/><br><br>`+ 
      `<span>보낸 이 : ${req.body.email}</span><br>` +
      `<pre>문의 내용 : ${req.body.content}</pre><br><br>`
      ,
      attachments: [{
        filename: 'Logo.png',
        path: '../server/public/images/RUDALogore.png',
        cid: 'logo@cid'
      }],
    }

    const transport = nodemailer.createTransport({
      service : configs.app.type,
      auth : {
        user : configs.app.emailUser,
        pass : configs.app.emailPass,
      }
    });

    await transport.sendMail(mailOption, (err, info) => {
      if(err) {
        console.log(err);
      } else {
        console.log("노드 메일러 정보 --------------------");
        console.log(info);
      }
    });

    res.send(true);
  } catch(err) {
    console.log("개발자에게 메일 보내는 중 에러 발생 : ", err);
    res.send(false);
  }
});

module.exports = router;
