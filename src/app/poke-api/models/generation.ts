import {Model} from "../../ng-rapi/models/model";
import {Region, RegionResponse} from "./region";
import {Version, VersionResponse} from "./version";

export interface GenerationResponse {
    id: number;
    name: string;
    main_region: RegionResponse;
    version_groups: VersionResponse[];
}


export class Generation extends Model {
    private _id: number;
    private _name: string;
    private _mainRegion: Region;
    private _versionGroups: Version[];

    constructor(data: GenerationResponse) {
        super(data);
        let {id, name, main_region, version_groups} = data;

        this.id = id;
        this.name = name;
        this.setMainRegion(main_region);
        this.setVersionGroups(version_groups);
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    getMainRegion(): Region {
        return this._mainRegion;
    }

    setMainRegion(regionResponse: RegionResponse) {
        this._mainRegion = new Region(regionResponse);
    }

    getVersionGroups(): Version[] {
        return this._versionGroups;
    }

    setVersionGroups(versionResponses: VersionResponse[]) {
        this._versionGroups = versionResponses.map((versionResponse: VersionResponse) =>
            new Version(versionResponse)
        );
    }

    getVersionsName(): string {
        return this.getVersionGroups()
            .map((version) => version.name)
            .join(', ');
    }
}
