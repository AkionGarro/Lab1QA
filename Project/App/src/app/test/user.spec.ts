import { User } from './user';



describe('Casos de prueba con asignar el email', function () {
  let component: User;
  beforeEach(() => {
    component = new User();
  });

  
  // Caso de prueba 1: Asignar email valido
  // Objetivo: Verificar que el método setEmail asigne correctamente el valor del correo electrónico si el correo es válido.
  // Datos de prueba:
  // email: "usuario@dominio.com"
  // Resultado esperado:"usuario@dominio.com"
  // El método setEmail debe asignar el valor "usuario@dominio.com" al atributo this.email.
  it('Asignar email valido', () => {
    component.setEmail('usuario@dominio.com');
    expect(component.getEmail()).toEqual('usuario@dominio.com');
  });

  // Caso de prueba 2: Asignar email invalido
  // Objetivo: Verificar que el método setEmail lance un error si el correo no es válido.
  // Datos de prueba:
  // email: "correo_invalido"
  // Resultado esperado: 'El formato del correo es incorrecto'
  // El método setEmail debe lanzar un error con el mensaje "El formato del correo es incorrecto".
  it('Asignar email invalido', () => {
    expect(() => {
      component.setEmail('correo_invalido');
    }).toThrowError('El formato del correo es incorrecto');
  });
});

describe('Casos de prueba de la contraseña', function () {
  let component: User;
  beforeEach(() => {
    component = new User();
  });

  // Caso de prueba 3: Asignar contraseña valido
  // Objetivo: Verificar que una contraseña válida sea aceptada por el método
  // Datos de prueba:
  // contraseña: "Carlos12334"''
  // Resultado esperado: true
  it('Asignar contraseña valida', () => {
    expect(component.validatePassword('Carlos12334')).toEqual(true);
  });

  // Caso de prueba 4: Rechazar contraseña de poca longitud
  // Objetivo: Verificar que una contraseña tenga por lo menos 10 caracteres
  // Datos de prueba:
  // contraseña: 'Car12'
  // Resultado esperado: 'La contraseña necesita al menos 10 caracteres'
  it('Rechazar contraseña de poca longitud', () => {
    expect(() => {
      component.validatePassword('Car12');
    }).toThrowError('La contraseña necesita al menos 10 caracteres');
    });
  });

describe('Casos de prueba que contenga letras en una cadena', function () {
  let component: User;
  beforeEach(() => {
    component = new User();
  });

  // Objetivo: verificar que el método tieneLetras() retorne true para un texto que contiene letras .
  // Datos de prueba: 
  //text 1 = '1234' 
  //text 2 = 'aasd643531'
  //text 3 = '234234'
  //Resultado esperado:
  //res 1 = false
  //res 2 = true 
  //res 3 = false
  it('Comprobar si hay letras', () => {
    [
      { text: '1234', res: false },
      { text: 'aasd643531', res: true },
      { text: '234234', res: false },
    ].forEach(({ text, res }) => {
      expect(component.tieneLetras(text)).toBe(res);
    });
  });

  afterEach(() => {
    component =
  });



});
