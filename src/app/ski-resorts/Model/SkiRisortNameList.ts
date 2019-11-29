import { SkiResortName } from './skiResortName';

export class SkiResortNameList {
    skiResortNameList: SkiResortName[];

    constructor(obj?: any){
        this.skiResortNameList = obj && obj.skiResortNameList || null;
    }
}