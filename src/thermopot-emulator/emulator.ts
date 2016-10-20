import EventEmitter from '../event-emitter';
import IDevice from "../interfaces/i-device";
import ISensor from "../interfaces/i-sensor";
import IGate from "../interfaces/i-gate";

export default class Emulator extends EventEmitter {
	private heater: IDevice;
	private power: IDevice;
	private tempSensor: ISensor;
	private waterLevel: ISensor;
	private gate: IGate;

	private lifeCycle() {
		// some actions
	}

	constructor() {
		super();
	}
}
