import IType from './i-type';
import TsEventEmitter from 'ts-eventemitter';


export interface IUnit extends TsEventEmitter {
	EVENT_CHANGE_TURN_STATUS: 'change-turn-status';
	event(name: EVENT_CHANGE_TURN_STATUS): TsEventEmitter.Event1<this, boolean>

	EVENT_CHANGE_NAME: 'change-name';
	event(name: EVENT_CHANGE_NAME): TsEventEmitter.Event1<this, string>

	getType(): IType

	getName(): string

	setName(name: string): void

	getTurn(): boolean

	setTurn(on: boolean): void
}
