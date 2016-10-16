import IType from './i-type';


export interface IUnit {
	/**
	 * Fired with: boolean
	 */
	EVENT_CHANGE_TURN_STATUS: string;

	/**
	 * Fired with: string
	 */
	EVENT_CHANGE_NAME: string;

	getType(): IType

	getName(): string

	setName(name: string): void

	getTurn(): boolean

	setTurn(on: boolean): void
}

export default IUnit;
