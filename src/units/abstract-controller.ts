import {AbstractUnit} from "./abstract-unit";
import IDevice from '../interfaces/i-device';
import {Trigger} from '../interfaces/i-controller'
import IController from '../interfaces/i-controller'
import {Options as UnitOptions} from './abstract-unit'

export default class AbstractController extends AbstractUnit implements IController {
	readonly EVENT_ACTIVATE_TRIGGER = 'activate-trigger';
	readonly EVENT_CHANGE_DEVICE = 'change-device';

	protected device: IDevice;
	protected trigger: Trigger;

	getDevice() {
		return this.device;
	};

	setDevice(device: IDevice) {
		this.device = device;
		this._fireEvent(this.EVENT_CHANGE_DEVICE, device);
	};

	getTrigger() {
		return this.trigger;
	};

	setTrigger(trigger: Trigger) {
		this.trigger = trigger;
		this._fireEvent(this.EVENT_ACTIVATE_TRIGGER, trigger);

		let isTriggered = false;
		switch(trigger) {
			case Trigger.DEVICE_ON:
				this.device.setValue(1);
				isTriggered = true;
				break;
			case Trigger.DEVICE_OFF:
				this.device.setValue(0);
				isTriggered = true;
				break;
		}

		return isTriggered;
	};

	constructor(options: Options) {
		super({
			name: options.name,
			type: options.type,
			turn: options.turn
		});
		this.setDevice(options.device);
	}
}

interface Options extends UnitOptions {
	device: IDevice
}
