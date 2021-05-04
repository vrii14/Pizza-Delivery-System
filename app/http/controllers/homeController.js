const Menu = require('../../models/menu')
function homeController() {
    return {
        async index(req, res) {
            //retrieve from db and pass to rendering page
            const pizzas = await Menu.find()
            return res.render('home', { pizzas: pizzas })
        }
    }
}

module.exports = homeController