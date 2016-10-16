import ISensor from '../interfaces/i-sensor';
import { AbstractUnit, Options } from './abstract-unit';

export default class AbstractSensor extends AbstractUnit implements ISensor {
	protected _value: number;

	public readonly EVENT_CHANGE_VALUE: string;

	getValue() {
		return this._value;
	}

	constructor(options: Options) {
		super(options);

		this.EVENT_CHANGE_VALUE = 'change-value';
	}
}
