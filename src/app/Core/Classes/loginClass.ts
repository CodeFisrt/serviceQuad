export class loginClasses {
    "UserId": number;
    "Role": string;
    "UserName": string;
    "Password": string;
    "ReportsTo": number;
    "EmployeeId": number;
    constructor() {
        this.UserId = 0,
            this.Role = '',
            this.UserName = '',
            this.Password = '',
            this.ReportsTo = 0,
            this.EmployeeId = 0
    }
}