const pathFolder = "./src/assets/";
const fs = require('fs');
const controller = {};

controller.list = (req, res) => {

    res.render('customerImages', { data: '' });
};

controller.getByName = (req, res) => {
    const name = req.body.name;

    if(!name){
        res.render('customerImages', { data: '' });
        return;
    }

    fs.readdir(pathFolder, (err, files) => {

        files.forEach(file => {

            let currentFileWithoutExtension = file.split('.')[0];
            if(currentFileWithoutExtension == name){
                fs.readFile(pathFolder + file, function (err, data) {
                    if (err) throw err;
        
                    // Encode to base64
                    var encodedImage = new Buffer(data, 'binary').toString('base64');
        
                    res.render('customerImages', { data: encodedImage });
                });
            }
        });

    })
};

module.exports = controller;