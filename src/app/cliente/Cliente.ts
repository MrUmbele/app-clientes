export class Cliente {
  private _nombre: string;
  private _email: string;
  private _telefono: number;
  private _apellido: string;

  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }
  public get apellido(): string {
    return this._apellido;
  }
  public set apellido(value: string) {
    this._apellido = value;
  }

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  public get telefono(): number {
    return this._telefono;
  }
  public set telefono(value: number) {
    this._telefono = value;
  }

  constructor() {
    this._nombre="";
    this._apellido="";
    this._email="";
    this._telefono=0;
  }
}
