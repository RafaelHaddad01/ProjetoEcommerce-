class loginController{
    loginView(req, res) {
        res.render('login/loginView', { layout: 'login/loginView' });
    }

}

module.exports = loginController