import '../model/connection.js';
import * as url from 'url';

//to link schema model
import CategorySchemaModel from '../model/category.model.js';

export var save=async (req,response,next)=>{
  var categoryDetails=req.body
  var categoryList = await CategorySchemaModel.find();
  var l=categoryList.length;
  var _id=l==0?1:categoryList[l-1]._id+1;
  categoryDetails={...categoryDetails,"_id":_id};
  var category = await CategorySchemaModel.create(categoryDetails);
  if(category)
    return response.status(201).json({"msg":"success"});
  else
    return response.status(500).json({error: 'Server Error'});
}

export var fetch=async (req,response,next)=>{
  var condition_obj=url.parse(req.url,true).query;
  var categoryList = await CategorySchemaModel.find(condition_obj);
  if(categoryList.length!=0)
    return response.status(201).json(categoryList);
  else
    return response.status(500).json(categoryList);
}

export var deleteCategory=async(request,response,next)=>{
  var id = request.params.id;
  var category = await CategorySchemaModel.find({_id: id});
  if(category.length!=0){
    let result = await CategorySchemaModel.deleteMany({_id:id}); 
    if(result)
     return response.status(201).json({"msg":"success"});
    else
     return response.status(500).json({error: 'Server Error'});
  }
  else
    return response.status(404).json({error: 'Resource not found'});             
}

export var updateCategory=async(request,response,next)=>{
  let categoryDetails = await CategorySchemaModel.findOne({_id: request.body._id});
  //console.log(userDetails);
  if(categoryDetails){
     let id = request.body._id;
     delete request.body._id;
     let category=await CategorySchemaModel.updateOne({_id: id},{$set: request.body});   
     if(category)
      return response.status(201).json({"msg":"success"});
     else
      return response.status(500).json({error: "Server Error"});
  }
  else
   return response.status(404).json({error: "Requested resource not available"});
}

