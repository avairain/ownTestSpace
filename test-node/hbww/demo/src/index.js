let express = require('express')
let http = require('http')
let bodyParser = require('body-parser');

let app = express()

// 解析json，need it...
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); 

app.get('/hbww', (req, resw, next) => {
  console.log('API For /hbww')
  http.get(
    'http://www.hbww.org/ashx/ajax.ashx?type=Archives&channelNo=GZZQ&page=1&PageSize=6&fldSort=PublishDate&Sort=1&rnd=0.5864144382277385',
    {
      method: 'POST',
      headers: {
        cookie: 'yunsuo_session_verify=fcc26c25d20f831403fb33a564a6c35e; ASP.NET_SessionId=i2zyjbfoluhxrt1knbozq4og; UM_distinctid=168789922723b0-046b5a57b68e9f-76123f4b-1fa400-168789922732a6; CNZZDATA1257391399=461522345-1548208114-http%253A%252F%252Fwww.hbww.org%252F%7C1548208114',
        host: 'www.hbww.org',
        Origin: 'http://www.hbww.org'
      }
    },
    res => {
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          // console.log(parsedData);
          resw.send(parsedData)
        } catch (e) {
          console.error(e.message);
        }
      });
    }
  )
    .on('error', e => console.log(e, 'error'))
  
})

app.listen(6060, () => console.log(6060))
