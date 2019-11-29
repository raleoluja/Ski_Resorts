export class SkiResort {
    _id: number;
    name: string;
    description: string;
    country: string;
    highest_point: string;
    top_elevation_m: number;
    picture: string;
    base_elevation_m: string;

    constructor(obj?: any){
        this._id = obj._id;
        this.name = obj.name;
        this.description= obj.description;
        this.country = obj.country;
        this.highest_point= obj.highest_point;
        this.top_elevation_m = obj.top_elevation_m;
        this.picture = obj.picture;
        this.base_elevation_m = obj.base_elevation_m;
    }
}