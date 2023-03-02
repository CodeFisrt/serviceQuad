export class deptClass {
    DeptId: number;
  DeptName: string;
  DeptHead: string;
  CreatedDate: Date;

  constructor() {
    this.DeptId = 0,
    this.DeptName = '',
    this.DeptHead = '',
    this.CreatedDate = new Date()
  }
}