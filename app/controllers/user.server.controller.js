const User = require('mongoose').model('User');

exports.create = async function(req, res){
    const user = new User(req.body);
    await user.save()
    .then((respnse) => {
        console.log('Value of resonse: ${response}');
        res.status(200).send("User Added");
    })
    .catch((error) => {
        console.error('Could not save user: ${error}');
    });
};