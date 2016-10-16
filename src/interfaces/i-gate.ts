import IUnit from './i-unit';


interface IGate {
	/**
	 * Fired with: none
	 */
	EVENT_CHANGE_UNITS: string

	getUnits(): Array<IUnit>
}

export default IGate;
