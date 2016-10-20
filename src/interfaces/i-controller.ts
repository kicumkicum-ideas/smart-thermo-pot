import IDevice from './i-device';
import {IUnit} from './i-unit';

export enum Trigger {
	DEVICE_OFF,
	DEVICE_ON
}

interface IController extends IUnit {
	/**
	 * Fired with: none
	 */
	EVENT_ACTIVATE_TRIGGER: string;

	/**
	 * Fired with: IDevice
	 */
	EVENT_CHANGE_DEVICE: string;

	getDevice(): IDevice|null;

	setDevice(device: IDevice): void;

	getTrigger(): Trigger;

	setTrigger(trigger: Trigger): boolean;
}


export default IController;
