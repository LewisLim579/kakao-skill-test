const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

const apiRouter = express.Router();
const PORT = process.env.PORT

// view 경로 설정
app.set('views', __dirname + '/views');
app.set('views ', path.join(__dirname,'views'));

router.get('/', function(req, res, next) {
  res.render('index.html');
});

app.use(logger('dev', {}));
app.use(bodyParser.json());

app.use('/api', apiRouter);

  apiRouter.post('/sayHello', function(req, res) {
    console.log("파라메터 확인 "+ req.body.action.params.phonenum);
    var phonenum = req.body.action.params.phonenum;
    var username = req.body.action.params.username;
    const responseBody = {
      version: "2.0",
      data: {
        "msg":"HI",
        "name":"Ryan",
        "position":"Senior Managing Director",
        "phonenum":phonenum,
        "username":username,
        "userrate":"32,400"
      }
    };
  
    res.status(200).send(responseBody);
  });
  
  apiRouter.post('/showHello', function(req, res) {
    console.log("이 로그로 파라메터 받아오나? "+ req.body);
  
    const responseBody = {
      version: "2.0",
      template: {
        outputs: [
          {
            simpleImage: {
              imageUrl: "https://t1.daumcdn.net/friends/prod/category/M001_friends_ryan2.jpg",
              altText: "hello I'm Ryan"
            }
          }
        ]
      }
    };
  
    res.status(200).send(responseBody);
  });

  app.listen(PORT, function() {
    console.log('Example skill server listening on port 3000!');
  });

 