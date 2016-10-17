import IDevice from '../interfaces/i-device';
import { Options } from './abstract-unit';
import AbstractSensor from './abstract-sensor';

export default class AbstractDevice extends AbstractSensor implements IDevice {
	setValue(value: number) {
		this._value = value;
	}

	constructor(options: Options) {
		super(options);
	}
}
