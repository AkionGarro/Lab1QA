import { User } from './user';

export class Course {
  private nameCourse: string;
  private summaryCourse: string;
  private createAt: string;
  private startDateCourse: string;
  private endDateCourse: string;
  private isEnableCourse: boolean;
  private updateAt: string;
  private createById: number;
  private user: User | null;
  private idCourse: number;

  constructor() {
    this.nameCourse = '';
    this.summaryCourse = '';
    this.createAt = '';
    this.startDateCourse = '';
    this.endDateCourse = '';
    this.isEnableCourse = false;
    this.updateAt = '';
    this.idCourse = 0;
    this.createById = 0;
    this.user = null;
  }

  setNameCourse(nameCourse: string) {
    this.nameCourse = nameCourse;
  }
  getNameCourse(): string {
    return this.nameCourse;
  }
  setSummaryCourse(summaryCourse: string) {
    this.summaryCourse = summaryCourse;
  }
  getSummaryCourse(): string {
    return this.summaryCourse;
  }
  setCreateAt(createAt: string) {
    this.createAt = createAt;
  }
  getCreateAt(): string {
    return this.createAt;
  }
  setStartDateCourse(startDateCourse: string) {
    this.startDateCourse = startDateCourse;
  }
  getStartDateCourse(): string {
    return this.startDateCourse;
  }
  setEndDateCourse(endDateCourse: string) {
    this.endDateCourse = endDateCourse;
  }
  getEndDateCourse(): string {
    return this.endDateCourse;
  }
  setUpdateAt(updateAt: string) {
    this.updateAt = updateAt;
  }
  getUpdateAt(): string {
    return this.updateAt;
  }
  setIsEnableCourse(isEnableCourse: boolean) {
    this.isEnableCourse = isEnableCourse;
  }
  getIsEnableCourse(): boolean {
    return this.isEnableCourse;
  }
  setIdCourse(idCourse: number) {
    this.idCourse = idCourse;
  }
  getIdCourse(): number {
    return this.idCourse;
  }
  setCreateById(createById: number) {
    this.createById = createById;
  }
  getCreateById(): number {
    return this.createById;
  }
  setUser(user: User) {
    this.user = user;
  }
  getUser(): User | null {
    return this.user;
  }
}
