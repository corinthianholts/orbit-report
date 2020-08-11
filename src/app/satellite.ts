
export class Satellite {
name: string;
type: string;
launchDate: string;
orbitType: string;
operational: boolean;
styleCheck: boolean;

constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
this.name=name;
this.type=type;
this.launchDate=launchDate;
this.operational=operational;
this.orbitType=orbitType;


}

shouldShowWarning() {
    let typeCheck = this.type;
    let tC = typeCheck.toLowerCase();
    let check = 'space debris';
    if(tC == check){
        return true;
    }
    else {
        return false;
    }
    
}

}
