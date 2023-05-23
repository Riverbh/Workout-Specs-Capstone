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
                where
            })
        } catch (error) {
            
        }
    },
    deletePost: async (req,res) => {
        try {

        } catch (error) {
            
        }
    }
}