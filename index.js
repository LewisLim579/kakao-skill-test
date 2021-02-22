const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

const apiRouter = express.Router();
app.set('port', (process.env.PORT || 3000));
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
      template: {
        outputs: [
          {
            simpleText: {
              text: "hello I'm Ryan"
            }
          }
        ]
      }
    };
  
    res.status(200).send(responseBody);
  });



  app.listen(3000, function() {
    console.log('Example skill server listening on port 3000!');
  });

 