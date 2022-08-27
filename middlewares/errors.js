const handleValidationError = (err, res) => {
    let errors = Object.values(err.errors).map(el => el.message);
    if(errors.length > 1) {
        let chain = "";
        for (let i = 0; i < errors.length; i++) {
          chain += errors[i] + " || ";
        }
        const string = chain.slice(0, -4);
        res.status(400).send({messages: string});
    } else {
        res.status(400).send({message: errors});
    }
 } 

const typeError = (err, req, res, next) => {
    const errOrigin = err.origin
    console.log(err.origin)
    if(err.name === 'ValidationError') return err = handleValidationError(err, res);
    else
        if (errOrigin === undefined) {
            res.status(500).send('Unknown  error');
        } else {
            res.status(500).send(`There was a problem trying to create the ${errOrigin}`);
        }  
    }

module.exports = { typeError }
