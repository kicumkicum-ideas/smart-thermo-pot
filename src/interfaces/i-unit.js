import IType from './i-type';



/**
 * @interface
 */
export default class IUnit {
	constructor() {
		/**
		 * Fired with: boolean
		 * @const {string}
		 */
		this.EVENT_CHANGE_TURN_STATUS = 'change-turn-status';

		/**
		 * Fired with: string
		 * @const {string}
		 */
		this.EVENT_CHANGE_NAME = 'change-name';
	}

	/**
	 * @return {IType}
	 */
	getType() {}

	/**
	 * @return {string}
	 */
	getName() {}

	/**
	 * @param {string} name
	 */
	setName(name) {}

	/**
	 * @return {boolean}
	 */
	getTurn() {}

	/**
	 * @param {boolean} on
	 */
	setTurn(on) {}
}
