import EventEmitter from '../event-emitter'
import IType from '../interfaces/i-type';
import IUnit from '../interfaces/i-unit';


export class AbstractUnit extends EventEmitter implements IUnit {
	protected _name: string;
	protected _type: IType;
	protected _turn: boolean;

	public readonly EVENT_CHANGE_NAME: string;
	public readonly EVENT_CHANGE_TURN_STATUS: string;

	getType() {
		return this._type;
	}

	getName() {
		return this._name;
	}

	setName(name: string) {
		this._name = name;
		this._fireEvent(this.EVENT_CHANGE_NAME, this._name);
	}

	getTurn() {
		return this._turn;
	}

	setTurn(turn: boolean) {
		this._turn = turn;
		this._fireEvent(this.EVENT_CHANGE_TURN_STATUS, this._turn);
	}

	constructor(options: Options) {
		super();

		this.EVENT_CHANGE_NAME = 'change-name';
		this.EVENT_CHANGE_TURN_STATUS = 'change-turn-status';

		this._name = options.name;
		this._type = options.type;
		this._turn = options.turn;
	}
}

export interface Options {
	name: string
	type: IType
	turn: boolean
}
