export class Customer {
  public constructor(public firstname?: string,
                     public lastnames?: string,
                     public street?: string,
                     public no?: string,
                     public floorLetter?: string,
                     public email?: string,
                     public phoneHome?: string,
                     public phoneWork?: string) {
  }

  public toString() {
    let str = "Navn: ";
    if (this.lastnames) {
      str += `${this.lastnames}, `;
    }
    if (this.firstname) {
      str += this.firstname;
    }
    str += `\nAdresse: `;
    if (this.street && this.no) {
      str += `${this.street} ${this.no}${this.floorLetter || ''}`;
    }
    str += `\nEmail: `;
    if (this.email) {
      str += this.email;
    }
    str += `\nTelefon: `;
    if (this.phoneHome) {
      str += `(hjemme) ${this.phoneHome}`;
    }
    if (this.phoneHome) {
      str += `(arbejde) ${this.phoneWork}`;
    }
    return str;
  }
}
