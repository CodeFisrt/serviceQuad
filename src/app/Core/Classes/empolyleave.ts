export class empolyLeavePageClass {
    LeaveId: number;
    EmployeeId: number;
    EmployeeName: string;
    FromDate: Date;
    ToDate: Date;
    IsHalfDay: string;
    NoOfDays: number;
    LeaveType: string;
    Details: string;
    ApprovedDate: Date;
    IsApproved: string;

    constructor() {
        this.LeaveId = 0,
            this.EmployeeId = 0,
            this.EmployeeName = '',
            this.FromDate = new Date,
            this.ToDate = new Date,
            this.IsHalfDay = '',
            this.NoOfDays = 0,
            this.LeaveType = '',
            this.Details = '',
            this.ApprovedDate = new Date,
            this.IsApproved = ''
    }
}