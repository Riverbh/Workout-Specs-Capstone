const {Post} = require('../util/models')
const {User} = require('../util/models')

module.exports = {
    addPost: async (req,res) => {
        try {
            const {title, description, type, time, userId} = req.body
            await Post.create({title, description, type, time, userId})
            res.sendStatus(200)
        } catch (error) {
            console.log('ERROR IN getCurrentUserPosts')
            console.log(error)
            res.sendStatus(400)
        }
    },
    getAllPost: async (req,res) => {
        try {
            const post = await Post.findAll({
                include: [{
                    model: User,
                    required: true,
                    attributes: ['username']
                }]
            })
            res.status(200).send(post)
        } catch (error) {
            console.log('ERROR IN getAllPosts')
            console.log(error)
            res.sendStatus(400)
        }
    },
    deletePost: async (req,res) => {
        try {
            const {id} = req.params 
            await Post.destroy({where: {id: +id}})
            res.sendStatus(200)
        } catch (error) {
            console.log('ERROR IN getCurrentUserPosts')
            console.log(error)
            res.sendStatus(400)
        }
    }
}