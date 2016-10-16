import ISensor from './i-sensor';


export interface IController extends ISensor {
	/**
	 * @param {number} value 0..65535
	 */
	setValue(value: number): void
}
