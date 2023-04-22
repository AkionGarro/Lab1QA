import { Course } from './course';
import { User } from './user';
export class Activity {
  private idActivity: number;
  private titleActivity: string;
  private course: Course | null;
  private users: Array<User>;
  private createAt: string;
  private instructions: string;

  constructor() {
    this.titleActivity = '';
    this.createAt = '';
    this.instructions = '';
    this.idActivity = 0;
    this.course = null;
    this.users = new Array<User>();
  }

  setCreateAt(createAt: string) {
    this.createAt = createAt;
  }
  getCreateAt(): string {
    return this.createAt;
  }
  setTitleActivity(titleActivity: string) {
    this.titleActivity = titleActivity;
  }
  getTitleActivity(): string {
    return this.titleActivity;
  }
  setInstructions(instructions: string) {
    this.instructions = instructions;
  }
  getInstructions(): string {
    return this.instructions;
  }
  setIdActivity(idActivity: number) {
    this.idActivity = idActivity;
  }
  getIdActivity(): number {
    return this.idActivity;
  }
  setCourse(course: Course) {
    this.course = course;
  }
  getCourse(): Course | null {
    return this.course;
  }
  setUsers(d: User): void {
    this.users.push(d);
  }
  getUsers(): Array<User> {
    return this.users;
  }

  /**
   * Retorna el detalle de una posición espefica.
   * @param posicion el número de posición.
   * @return un objeto del tipo roles.
   */
  public getUsersInfo(posicion: number): any {
    if (posicion < 1 || posicion > this.users.length) {
      throw new Error('Posición fuera de rango');
    }
    return this.users[posicion - 1];
  }
}
