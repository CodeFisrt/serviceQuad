export class employeeClass {
    EmployeeId: number;
    EmployeeName: string;
    ContactNo: string;
    EmailId: string;
    DeptId : number;
    UserName: string;
    Password: string;
    ReportsTo: number;
    Role: string;

    constructor() {
        this.EmployeeId = 0,
        this.EmployeeName = '',
        this.ContactNo = '',
        this.EmailId = '',
        this.DeptId = 0,
        this.UserName = '',
        this.Password = '',
        this.ReportsTo = 0,
        this.Role = ''
    }

}