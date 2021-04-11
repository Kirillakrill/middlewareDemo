module.exports = x => {
    const router = x.Router();
    router
    .route('/')
    .get(r => r.res.send('Arithmetic: add, mpy'));

    router
    .route('/add/:n1/:n2')
    .get(r => r.res.send('Got:' + Number(r.params.n1) + Number(r.params.n2)));

    return router
};