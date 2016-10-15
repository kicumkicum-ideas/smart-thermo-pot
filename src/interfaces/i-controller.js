import ISensor from './i-sensor';



/**
 * @interface
 */
export default class IController extends ISensor {
	constructor() {}

	/**
	 * @param {number} value 0..65535
	 */
	setValue(value) {}
}
