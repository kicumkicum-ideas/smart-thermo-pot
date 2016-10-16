import TsEventEmitter from 'ts-eventemitter';
import IUnit from './i-unit';


export interface IGate extends UIEvent{
	EVENT_CHANGE_UNITS: 'change-units'
	event(name: EVENT_CHANGE_TURN_STATUS): TsEventEmitter.Event0<this>

	getUnits(): Array<IUnit>
}
