import { TitleCasePipe, UpperCasePipe } from "@angular/common";

export interface sffflTeam {
    firstName: (string | TitleCasePipe);
    lastName: (string | TitleCasePipe);

    location: (string | TitleCasePipe);
    nickname: (string | TitleCasePipe);
    abbrev: (string | UpperCasePipe);

    division: (string | TitleCasePipe);

    wins: number;
    losses: number;

    preseasonRank: number;
    divisionRank: number;
    powerRank: number;
    projFinish: number;
}