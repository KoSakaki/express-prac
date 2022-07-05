import router from 'express';

const Router = router();
Router.use((req, res, next) => {
    console.log((new Date()).toISOString());
    next();
});

Router.get("/", (req, res) => {
    res.send("/user");
});
Router.get("/about", (req, res) => {
    res.send("/user/abount");
});

Router.get("/:id",  (req, res) => {
    console.log(req.params.id)
    res.status(200).send(`id: ${req.params.id}`);
})

export default Router;