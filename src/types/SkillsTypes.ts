export interface ProgrammingLanguage {
    skill: string;
    image: string;
    imgAlt: string;
}
export interface TechnologyCategory {
    technology: string;
    programmingLanguage: ProgrammingLanguage[];
}