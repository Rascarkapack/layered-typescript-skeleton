import express from "express";
import router from "./Application/Routes/routes";
const app = express();

app.use(router);

app.listen(1337, () => {
    console.log('app listening')
})



