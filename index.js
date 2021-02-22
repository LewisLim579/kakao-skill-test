const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

const apiRouter = express.Router();
const PORT = process.env.PORT

app.use(logger('dev', {}));
app.use(bodyParser.json());
app.use('/api', apiRouter);

apiRouter.get('/', function(req, res) {
    const responseBody = {
      version: "2.0",
      template: {
        outputs: [
          {
            simpleText: {
              text: "기본index포트 "
            }
          }
        ]
      }
    };
  
    res.status(200).send(responseBody);
  });

apiRouter.get('/sayHello', function(req, res) {
    const responseBody = {
      version: "2.0",
      data: {
        "msg":"HI",
        "name":"Ryan",
        "position":"Senior Managing Director"
      }
    };
  
    res.status(200).send(responseBody);
  });

  apiRouter.post('/sayHello', function(req, res) {
    const responseBody = {
      version: "2.0",
      data: {
        "msg":"HI",
        "name":"Ryan",
        "position":"Senior Managing Director"
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

 