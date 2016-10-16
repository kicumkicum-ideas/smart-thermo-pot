import IUnit from './i-unit';
import TsEventEmitter from 'ts-eventemitter';


export interface ISensor extends IUnit {
	EVENT_CHANGE_VALUE: 'change-value'
	event(name: EVENT_CHANGE_VALUE): TsEventEmitter.Event1<this, number>

	/**
	 * @return {number} 0..65535
	 */
	getValue(): number
}
