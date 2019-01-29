export class Quote {
    public showDescription:boolean;
    constructor( public id:number ,public quot:string,public description:string,public upvote:number,public downvote:number){
     this.showDescription=false
    }
}
