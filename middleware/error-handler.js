const errorHandlerMiddleware = async(err, req, res, next) => {
    return res.status(500).json({msg: 'something went wrong, please try again'});
}

export default errorHandlerMiddleware;