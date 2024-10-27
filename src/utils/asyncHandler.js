
const asyncHandler=(requestHandler)=>{
   return (req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)). 
    //requesthandler is the actual route handler
    //that handles a specific HTTP request
    catch((err)=>next(err))
   }
}
export {asyncHandler}




// const asyncHandler=(fn)=>async(req,res,next)=>{
//      try {
//         await fn(req,res,next)
//      } catch (error) {
//         res.status(err.code || 500)
//         .json({
//             success:false,
//             message:err.message
//         })
//      }
// }