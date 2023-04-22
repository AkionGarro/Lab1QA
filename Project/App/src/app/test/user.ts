export class User {
  private idUser: number;
  private username: string;
  private name: string;
  private lastName: string;
  private email: string;
  private password: string;
  private gender: string;
  private address: string;
  private phoneNumber: string;
  private birthDate: string;
  private photo: string;
  private roles: Array<any>;
  private createAt: string;
  private degree: string;
  private isDemoUser: boolean;

  constructor() {
    this.idUser = 0;
    this.gender = '';
    this.name = '';
    this.address = '';
    this.username = '';
    this.birthDate = '';
    this.createAt = '';
    this.degree = '';
    this.photo = '';
    this.phoneNumber = '';
    this.password = '';
    this.lastName = '';
    this.email = '';
    this.isDemoUser = false;
    this.roles = new Array<any>();
  }
  seIdUser(idUser: number) {
    this.idUser = idUser;
  }
  getIdUser(): number {
    return this.idUser;
  }
  setIsDemoUser(isDemoUser: boolean) {
    this.isDemoUser = isDemoUser;
  }
  getIsDemoUser(): boolean {
    return this.isDemoUser;
  }
  setName(name: string) {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
  setGender(gender: string) {
    this.gender = gender;
  }
  getGender(): string {
    return this.gender;
  }
  setAddress(address: string) {
    this.address = address;
  }
  getAddress(): string {
    return this.address;
  }
  setUsername(username: string) {
    this.username = username;
  }
  getUsername(): string {
    return this.username;
  }
  setLastName(lastName: string) {
    this.lastName = lastName;
  }
  getLastName(): string {
    return this.lastName;
  }
  setEmail(email: string) {
    if (this.checkEmail(email)) {
      this.email = email;
    } else {
      throw new Error('El formato del correo es incorrecto');
    }
  }
  checkEmail(email: string) {
    return (
      typeof email === 'string' &&
      /^[\w+\d+._]+\@[\w+\d+_+]+\.[\w+\d+._]{2,8}$/.test(email)
    );
  }
  getEmail(): string {
    return this.email;
  }
  setPassword(password: string) {
    if (this.validatePassword(password)) {
      this.password = password;
    }
  }
  getPassword(): string {
    return this.password;
  }
  setPhoneNumber(phoneNumber: string) {
    this.phoneNumber = phoneNumber;
  }
  getPhoneNumber(): string {
    return this.phoneNumber;
  }
  setBirthDate(birthDate: string) {
    this.birthDate = birthDate;
  }
  getBirthDate(): string {
    return this.birthDate;
  }
  setPhoto(photo: string) {
    this.photo = photo;
  }
  getPhoto(): string {
    return this.photo;
  }
  setCreateAt(createAt: string) {
    this.createAt = createAt;
  }
  getCreateAt(): string {
    return this.createAt;
  }
  setDegree(degree: string) {
    this.degree = degree;
  }
  getDegree(): string {
    return this.degree;
  }
  setRoles(d: any): void {
    this.roles.push(d);
  }
  getRoles(): Array<any> {
    return this.roles;
  }

  /**
   * Retorna el detalle de una posición espefica.
   * @param posicion el número de posición.
   * @return un objeto del tipo roles.
   */
  public getRolesInfo(posicion: number): any {
    if (posicion < 1 || posicion > this.roles.length) {
      throw new Error('Posición fuera de rango');
    }
    return this.roles[posicion - 1];
  }
  tieneNumeros(texto: string): boolean {
    var numeros = '0123456789';
    for (var i = 0; i < texto.length; i++) {
      if (numeros.indexOf(texto.charAt(i), 0) != -1) {
        return true;
      }
    }
    return false;
  }

  tieneLetras(texto: string): boolean {
    var numeros = 'abcdefghyjklmnñopqrstuvwxyz';
    for (var i = 0; i < texto.length; i++) {
      if (numeros.indexOf(texto.charAt(i), 0) != -1) {
        return true;
      }
    }
    return false;
  }

  tieneLetraMayuscula(texto: string): boolean {
    var numeros = 'ABCDEFGHYJKLMNÑOPQRSTUVWXYZ';
    for (var i = 0; i < texto.length; i++) {
      if (numeros.indexOf(texto.charAt(i), 0) != -1) {
        return true;
      }
    }
    return false;
  }

  tieneCaracteresEspeciales(texto: string): boolean {
    var numeros = '!@#$%^&*';
    for (var i = 0; i < texto.length; i++) {
      if (numeros.indexOf(texto.charAt(i), 0) != -1) {
        return true;
      }
    }
    return false;
  }

  /*El password debe tener al menos 10 caracteres, formado por números, letras mayúsculas y minúsculas*/
  validatePassword(pas1: any): boolean {
    if (pas1.length < 10) {
      throw new Error('La contraseña necesita al menos 10 caracteres');
    } else if (!this.tieneNumeros(pas1)) {
      throw new Error('La contraseña debe tener al menos un número');
    } else if (!this.tieneLetras(pas1)) {
      throw new Error('La contraseña debe tener al menos una letra minúscula');
    } else if (!this.tieneLetraMayuscula(pas1)) {
      throw new Error(
        'La contraseña debe tener al menos una letra en mayúscula'
      );
    } else if (this.tieneCaracteresEspeciales(pas1)) {
      throw new Error('La contraseña no puede contener caracteres especiales');
    } else {
      return true;
    }
  }
}
