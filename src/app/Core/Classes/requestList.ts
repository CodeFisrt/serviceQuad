export class requestListClass {
    RequestId: number;
    RequestNo:string;
    EmployeeId: number;
    State: string;
    CreatedDate: Date;
    ExpectedEndDate: Date;
    Severity: string;
    CompletedDate: Date;
    AssignedUserName: string;
    EmployeeName: string;
    DeptId: number;
    DeptName: string;
     
    constructor(){
        this.RequestId = 0,
        this.RequestNo = '',
        this.EmployeeId = 0,
        this.State = '',
        this.CreatedDate = new Date(),
        this.ExpectedEndDate = new Date(),
        this.Severity = '',
        this.CompletedDate = new Date(),
        this.AssignedUserName = '',
        this.EmployeeName = '',
        this.DeptId = 0,
        this.DeptName = ''
    }
}