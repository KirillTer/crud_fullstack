import { AppService } from "./app.service";
export declare class AppController {
    private appService;
    constructor(appService: AppService);
    getCompanies(): {
        id: number;
        name: string;
    }[];
}
