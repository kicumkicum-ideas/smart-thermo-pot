import TsEventEmitter from 'ts-eventemitter';
import IUnit from './i-unit';


interface IGate extends TsEventEmitter {
	/**
	 * Fired with: none
	 */
	EVENT_CHANGE_UNITS: string

	getUnits(): Array<IUnit>
}

export default IGate;
