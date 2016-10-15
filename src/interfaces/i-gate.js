import IUnit from './i-unit';



/**
 * @interface
 */
export default class IGate {
	constructor() {
		/**
		 * Fired with: none
		 * @const {string}
		 */
		this.EVENT_CHANGE_UNITS = 'change-units';
	}

	/**
	 * @return {Array<IUnit>}
	 */
	getUnits() {}
}
