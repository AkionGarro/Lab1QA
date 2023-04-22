import { Activity } from "./activity";

export class Document {
    private idDocument: number;
    private isCheck: boolean;
    private pathDocument: string;
    private titleDocument: string;
    private isEnableDocument: boolean;
    private activity: Activity|null;
    private type: string;
    constructor(){
        this.idDocument=0;
        this.activity = null;
        this.type = "";
        this.titleDocument = "";
        this.isCheck = false;
        this.isEnableDocument = false;
        this.pathDocument = "";
    }
    seIdDocument(idDocument:number){
        this.idDocument = idDocument;
    }
    getIdDocument():number{
        return this.idDocument;
    }
    setIsCheck(isCheck:boolean){
        this.isCheck = isCheck;
    }
    getIsCheck():boolean{
        return this.isCheck;
    }
    setIsEnableDocument(isEnableDocument:boolean){
        this.isEnableDocument = isEnableDocument;
    }
    getIsEnableDocument():boolean{
        return this.isEnableDocument;
    }
    setPathDocument(pathDocument:string){
        this.pathDocument = pathDocument;
    }
    getPathDocument():string{
        return this.pathDocument;
    }
    setTitleDocument(titleDocument:string){
        this.titleDocument = titleDocument;
    }
    getTitleDocument():string{
        return this.titleDocument;
    }
    setType(type:string){
        this.type = type;
    }
    getType():string{
        return this.type;
    }
    setActivity(activity:Activity){
        this.activity = activity;
    }
    getActivity():Activity|null{
        return this.activity;
    }
}