export class Group {
    private idGroup: number;
    private countNumber: number; 
    private createAt: string;
    private endDateGroup: string; 
    private enrolmentKey: string; 
    private isEnableGroup: boolean;
    private isStartGroup: boolean;
    private nameGroup: string;
    private numberMax: number; 
    private startDateGroup: string; 
    private summaryGroup: string;
    private updateAt: string;

    constructor(){
        this.endDateGroup = "";
        this.enrolmentKey = "";
        this.createAt = "";
        this.nameGroup = "";
        this.summaryGroup="";
        this.startDateGroup = "";
        this.isEnableGroup=false;
        this.isStartGroup=false;
        this.updateAt = "";
        this.idGroup = 0;
        this.numberMax = 0;
        this.countNumber = 0;
    }

    setEndDateGroup(endDateGroup:string){
        this.endDateGroup = endDateGroup;
    }
    getEndDateGroup():string{
        return this.endDateGroup;
    }
    setEnrolmentKey(enrolmentKey:string){
        this.enrolmentKey = enrolmentKey;
    }
    getEnrolmentKey():string{
        return this.enrolmentKey;
    }
    setCreateAt(createAt:string){
        this.createAt = createAt;
    }
    getCreateAt():string{
        return this.createAt;
    }
    setNameGroup(nameGroup:string){
        this.nameGroup = nameGroup;
    }
    getNameGroup():string{
        return this.nameGroup;
    }
    setSummaryGroup(summaryGroup:string){
        this.summaryGroup = summaryGroup;
    }
    getSummaryGroup():string{
        return this.summaryGroup;
    }
    setStartDateGroup(startDateGroup:string){
        this.startDateGroup = startDateGroup;
    }
    getStartDateGroup():string{
        return this.startDateGroup;
    }
    setUpdateAt(updateAt:string){
        this.updateAt = updateAt;
    }
    getUpdateAt():string{
        return this.updateAt;
    }
    setIsEnableGroup(isEnableGroup:boolean){
        this.isEnableGroup = isEnableGroup;
    }
    getIsEnableGroup():boolean{
        return this.isEnableGroup;
    }
    setIsStartGroup(isStartGroup:boolean){
        this.isStartGroup = isStartGroup;
    }
    getIsStartGroup():boolean{
        return this.isStartGroup;
    }
    setIdGroup(idGroup:number){
        this.idGroup = idGroup;
    }
    getIdGroup():number{
        return this.idGroup;
    }
    setNumberMax(numberMax:number){
        this.numberMax = numberMax;
    }
    getNumberMax():number{
        return this.numberMax;
    }
    setCountNumber(countNumber:number){
        this.countNumber = countNumber;
    }
    getCountNumber():number{
        return this.countNumber;
    }
}
