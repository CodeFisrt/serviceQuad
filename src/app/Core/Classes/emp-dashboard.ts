export class empDashboardClass {
    totReq:number;
    todaysReq:number;
    totCompleted:number;
    totOpen:number;
    totCompletedToday:number;
    totOpenToday:number;
    totLeavesTaken:number;
    totLeavesToApprove:number;

    constructor() {
        this.totReq=0,
        this.todaysReq=0,
        this.totCompleted=0,
        this.totOpen=0,
        this.totCompletedToday=0,
        this.totOpenToday=0,
        this.totLeavesToApprove=0,
        this.totLeavesTaken=0
    }
}