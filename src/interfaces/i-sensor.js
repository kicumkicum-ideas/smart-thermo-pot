import IUnit from './i-unit';



/**
 * @interface
 */
export default class ISensor extends IUnit {
	constructor() {
		/**
		 * Fired with: number
		 * @const {string}
		 */
		this.EVENT_CHANGE_VALUE = 'change-value'
	}

	/**
	 * @return {number} 0..65535
	 */
	getValue() {}
}
