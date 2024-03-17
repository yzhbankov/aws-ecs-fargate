import bodyParser from 'body-parser';
import cors from 'cors';

export default {
    json: bodyParser.json({
        limit: '500mb',
        verify: (req, res, buf) => {
            try {
                JSON.parse(buf);
            } catch (err) {
                res.send({
                    status: 0,
                    error: {
                        message: 'Please verify your JSON',
                    },
                });
            }
        },
    }),
    urlencoded: bodyParser.urlencoded({ extended: false }),

    cors: cors({
        exposedHeaders: ['Content-Next-Page'],
    }),
};
