# REST-API
 REST api base on js,expressjs,mongodb



post http://localhost:3000/user/save

send data to db
data attached : name , email , password , mobile , address , city , gender    


body---> urlencoded

[{"key":"name","value":"blurr","description":"","type":"text","enabled":true}
,{"key":"email","value":"blurr@mail.com","description":"","type":"text","enabled":true}
,{"key":"password","value":"12345d","description":"","type":"text","enabled":true}
,{"key":"mobile","value":"9952426247","description":"","type":"text","enabled":true}
,{"key":"address","value":"test address","description":"","type":"text","enabled":true}
,{"key":"city","value":"test city","description":"","type":"text","enabled":true}
,{"key":"gender","value":"test gender","description":"","type":"text","enabled":true}]


fetch data fron db by id

get http://localhost:3000/user/fetch
get http://localhost:3000/user/fetch?_id=2

delete data from collection

delete http://localhost:3000/user//delete/4


update data
patch http://localhost:3000/user/update

[{"key":"_id","value":"11","description":"","type":"text","enabled":true}
,{"key":"password","value":"1234","description":"","type":"text","enabled":true}
,{"key":"address","value":"check55","description":"","type":"text","enabled":true}]


