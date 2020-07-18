import express, {Request, Response} from 'express';

const app = express();
const PORT = 3333;

app.get('/', (req: Request, res: Response) => {
    res.json([{message: 'ok'}, {channel: 'fine'}])
})

app.listen(PORT, (() => console.log(`Server running at port ${PORT}`)));
