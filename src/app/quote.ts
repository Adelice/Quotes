export class Quote {
    public showDescription:boolean;
    constructor( public quot:string,public description:string,public upvote:number,public downvote:number){
     this.showDescription=false
    }
}
