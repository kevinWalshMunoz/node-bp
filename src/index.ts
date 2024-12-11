import 'reflect-metadata';

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { container, injectable } from 'tsyringe';
import { DependencyInjectionToken } from './common/enums/enums';
import { DEBUG_TRACE } from './common/globals';
import * as IConfig from '../config.json';

import { routes } from './routes/routes';

interface IWebServer {
    app: express.Application;

    start(): express.Application;
}

@injectable()
export class WebServer implements IWebServer {
    private _app: express.Application;

    constructor() {
        this._app = express();
        this.setServerOptions();
        this.resolveDependencies();
    }

    get app(): express.Application {
        return this._app;
    }

    public start(): express.Application {

        this.app.use('/', routes);

        const PORT = process.env.PORT || 5000;
        this.app.listen(PORT, () => {
            if (DEBUG_TRACE) {
                console.log(`Server is running on port ${PORT}`);
            }
        });

        return this._app;
    }

    private setServerOptions(): void {
        this._app.use(express.text());
        this._app.use(express.json());
        this._app.use(express.urlencoded({ extended: false }));
    }

    private resolveDependencies(): void {
        try {
            container.registerInstance(DependencyInjectionToken.Config, IConfig);
        } catch (error) {
            if (DEBUG_TRACE) {
                console.error(error);
            }
        }
    }
}

module.exports = { WebServer };
