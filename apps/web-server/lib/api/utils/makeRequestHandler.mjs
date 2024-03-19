import { ErrorHandler } from '../../models/index.mjs';

export async function runUseCase(UseCase, { params }) {
    return new UseCase().run(params);
}

export default function makeRequestHandler(UseCase, mapToParams, mapToResponse) {
    function logRequest(params, result, startTime) {
        console.log(JSON.stringify({
            useCase: UseCase.name,
            runtime: Date.now() - startTime,
            params,
            result,
        }));
    }

    return async function routerHandler(req, res) {
        try {
            const startTime = Date.now();
            const params = mapToParams(req);

            const result = await runUseCase(UseCase, { params });

            logRequest(params, result, startTime);
            if (mapToResponse) {
                mapToResponse(result, res, req);
            } else {
                res.json(result);
            }
        } catch (err) {
            ErrorHandler.handleRequestError(res, err);
        }
    };
}
