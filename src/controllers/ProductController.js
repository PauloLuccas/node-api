const mongoose = require('mongoose');

const Product = mongoose.model('Product');


module.exports = {
    // Busca registros no BD
    async index(req, res) {
        const { page = 1} = req.query;
        const products = await Product.paginate({}, {page, limit: 5});
        
        return res.json(products);
    },

    async show(req, res) {
        // Detalhes
        const products = await Product.findById(req.params.Id);

        return res.json(products);
    },

    async store(req, res) {
        // Criação
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async update(req, res) {
        // Atualização
        const product = await Product.findOneAndUpdate(req.params.id, req.body, {new:true});

        return res.json(product);
    },

    async destroy(req, res) {
        // Excluir
        await Product.findOneAndDelete(req.params.Id);

        // vai retornar uma mensagem de sucesso
        return res.send();
    },
};