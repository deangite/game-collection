import express from "express";

// Router.get('/api/games', (req, res) => {
//     res.send()
// });

// Router.post('/api/games', (req, res) => {
//     res.send()
// })

// module.exports = Router;

export const router = express.Router();

router.get('/', (req, res) => {
    res.send();
});

router.post('/', (req, res) => {
    res.send();
});

