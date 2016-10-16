import IController from '../interfaces/i-controller';
import { Options } from './abstract-unit';
import AbstractSensor from './abstract-sensor';

export default class AbstractController extends AbstractSensor implements IController {
	setValue(value: number) {
		this._value = value;
	}

	constructor(options: Options) {
		super(options);
	}
}
