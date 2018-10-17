class index {
    indexView(req, res){
        res.render('../views/index',{
            title: 'Accueil'
        })
    }
}

module.exports = index;