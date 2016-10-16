import IUnit from './i-unit';
import TsEventEmitter from 'ts-eventemitter';


interface ISensor extends IUnit {
	/**
	 * Fire with: number
	 */
	EVENT_CHANGE_VALUE: string

	/**
	 * @return {number} 0..65535
	 */
	getValue(): number
}

export default ISensor;
