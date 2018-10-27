const controller = {};

controller.list = (req, res) => {
    res.render('customerImages', {data: ''});
};

controller.getByName = (req, res) => {
    const name = req.body.name;
    res.render('customerImages', {data: 'https://www.youtube.com/yts/img/yt_1200-vfl4C3T0K.png'});
};

module.exports = controller;