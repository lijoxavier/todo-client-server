const errorHandle=(error,req,res,next)=>{
    let message=error.message || "something went wrong"
    const status=error.status || 404
    if(error.status===401){
        message=`${JSON.stringify(error.fields.body)}:these are the payloads ,[${error.fields.required}]: required, `
    }

    res.status(status).json({
        message
    })

}

module.exports=errorHandle