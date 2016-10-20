import AbstractSensor from '../../units/abstract-sensor';
import Heater from '../devices/heater';
import ISensor from '../../interfaces/i-sensor';
import { Options as BaseOptions } from '../../units/abstract-unit';

export class Temperature extends AbstractSensor implements ISensor {
	private heater: Heater;

	private init() {
		setInterval(() => this.lifeCycle(), 3 * 1000);
	}

	private lifeCycle() {
		if (this.isHeaterActive()) {
			this._value++;
		} else {
			this._value--;
		}
	}

	private isHeaterActive() {
		return this.heater.getValue() > 0;
	}

	constructor(options: Options) {
		super(options);

		this.heater = options.heater;
		this.init();
	}
}

export interface Options extends BaseOptions {
	heater: Heater
}
