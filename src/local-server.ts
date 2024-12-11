import 'reflect-metadata';

import * as Service from './index';
import { container } from 'tsyringe';

const service: Service.WebServer = container.resolve(Service.WebServer);
service.start();
