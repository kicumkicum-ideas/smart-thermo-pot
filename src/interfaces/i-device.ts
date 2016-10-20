import ISensor from './i-sensor';

interface IDevice extends ISensor {
	/**
	 * @param {number} value 0..65535
	 */
	setValue(value: number): void
}

export default IDevice;
