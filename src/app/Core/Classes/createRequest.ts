export class createRequestClass {
    RequestId: number;
    RequestNo: string;
    EmployeeId: number;
    State: string;
    CreatedDate: string;
    ExpectedEndDate: string;
    Severity: string;
    CompletedDate: string;
    AssignedUserName: string;
    EmployeeName: string;
    DeptId: number;
    DeptName: string;

    constructor(){
        this.RequestId = 0,
        this.RequestNo = '',
        this.EmployeeId = 0,
        this.State ='',
        this.CreatedDate ='',
        this.ExpectedEndDate = '',
        this.Severity = '',
        this.CompletedDate = '',
        this.AssignedUserName ='',
        this.EmployeeName = '',
        this.DeptId = 0,
        this.DeptName = ''
    }
}