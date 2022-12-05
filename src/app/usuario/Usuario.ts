export class Usuario {
  private _nombre: string;
  private _email: string;
  private _pass: string;

  public set pass(value: string) {
    this._pass = value;
  }

  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }
  public get pass(): string {
    return this._pass;
  }
  public set apellido(value: string) {
    this._pass = value;
  }

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }



  constructor() {
    this._nombre="";
    this._pass="";
    this._email="";
  }
}
