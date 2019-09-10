export interface iReport 
{
    testerNo: string;
    testDate: string;
    reportNo: string;
    stickerNo: string;
    farmID: string;
    county: string;
    dateAdded: string;
    rating: string;
    note?: string;
    open?:Boolean;
}
