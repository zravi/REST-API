import '../model/connection.js';
import * as url from 'url';

//to link schema model
import UserSchemaModel from '../model/user.model.js';

export var save=async (req,response,next)=>{
  var userDetails=req.body
  var userList = await UserSchemaModel.find();
  var l=userList.length;
  var _id=l==0?1:userList[l-1]._id+1;
  userDetails={...userDetails,"_id":_id,"status":0,"role":"user","info":Date()};
  var user = await UserSchemaModel.create(userDetails);
  if(user)
    return response.status(201).json({"msg":"success"});
  else
    return response.status(500).json({error: 'Server Error'});
}

export var fetch=async (req,response,next)=>{
  var condition_obj=url.parse(req.url,true).query;
  var userList = await UserSchemaModel.find(condition_obj);
  if(userList.length!=0)
    return response.status(201).json(userList);
  else
    return response.status(500).json(userList);
}

export var deleteUser=async(request,response,next)=>{
  var id = request.params.id;
  var user = await UserSchemaModel.find({_id: id});
  if(user.length!=0){
    let result = await UserSchemaModel.deleteMany({_id:id}); 
    if(result)
     return response.status(201).json({"msg":"success"});
    else
     return response.status(500).json({error: 'Server Error'});
  }
  else
    return response.status(404).json({error: 'Resource not found'});             
}

export var updateUser=async(request,response,next)=>{
  let userDetails = await UserSchemaModel.findOne({_id: request.body._id});
  console.log(userDetails);
  if(userDetails){
     let id = request.body._id;
     delete request.body._id;
     let user=await UserSchemaModel.updateOne({_id: id},{$set: request.body});   
     if(user)
      return response.status(201).json({"msg":"success"});
     else
      return response.status(500).json({error: "Server Error"});
  }
  else
   return response.status(404).json({error: "Requested resource not available"});
}


/*

delete -----------

Product.deleteOne({_id: id}).then(result=>{
    return response.status(203).json(product[0]);
}).catch(err=>{
    return response.status(500).json({error: 'Server Error'});
});

*/