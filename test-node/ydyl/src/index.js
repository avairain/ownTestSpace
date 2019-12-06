const axios = require('axios')
const express = require('express')

const app = express()

app.post('/ydyl', (req, res) => {
  axios.post('http://si.12333.gov.cn/118733/RemoteQuery003.jspx', {
    'aab299': '',
    'akb021': '',
    'yldj': '',
    'akb023': '',
    'notkeyflag': 1,
  }, {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Cookie': 'JSESSIONID=9T2eNUMB7e3S-v8PoW_bfoWFZOXhKmgJgMVVtxFhtyj3W_NEEs3v!-1364551590; vcookieid=3b73286b8da54bcca6d8da5cdd95eb19',
    'Origin': 'http://si.12333.gov.cn',
    'Host': 'si.12333.gov.cn'
  })
    .then(data => {
      console.log(data.data)
      res.send(renderHTML(data.data.lists.resultset.list))
    })
    .catch(err => console.log(err))
})

const renderHTML = info => {

  let oHTML = ''
  info.forEach(v => {
    oHTML += `
      <tr>
        <td>${v.aab299 || '--'}</td>
        <td>${v.akb021 || '--'}</td>
        <td>${v.aae006 || '--'}</td>
        <td>'${v.akb020 || '--'}</td>
        <td>'${v.aae005 || '--'}</td>
      </tr>
    `
  });
  let html = `
        <html>
          <head>
            <meta charset='utf-8' />
            <style>
              .tableA {
                border-collapse: collapse;
              }
              .tableA .title th{
                height: 50px;
                font-size: 24px;
                font-family: '微软雅黑';
                font-weight: 700;
              }
              .tableA tr th {
                border: 1px #000 solid;
                height: 40px;
                background: #efefef;
              }
              .tableA tr td {
                padding: 0 40px;
                border: 1px #000 solid;
                height: 40px;
                text-align: center;
              }
              .tableA .footer td {
                font-size: 20px;
                font-weight: 700;
              }
            </style>
          </head>
          <body>
              <table class="tableA">
                <tr>
                 <th>城市</th>
                 <th>医院名称</th>
                 <th>地址</th>
                 <th>电话</th>
                 <th>医疗机构编码</th>
                </tr>
                ${oHTML}
              </table>
          </body>
        </html>
        `
  return html
}

app.listen(6060, () => console.log('6060'))
