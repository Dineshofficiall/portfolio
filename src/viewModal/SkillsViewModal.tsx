import { SkillsIcon } from "../assets/Images/SkillsIcon";
import { TechnologyCategory } from "../types/SkillsTypes";

export const SkillsViewModal = (): TechnologyCategory[] => {

    const icons = SkillsIcon();

    return [
        {
            technology: 'Frontend',
            programmingLanguage : [
                {
                    skill: 'React Js',
                    image: icons.reactIcon,
                    imgAlt: 'reactIcon',
                },
                {
                    skill: 'Redux',
                    image: icons.reduxIcon,
                    imgAlt: 'reduxIcon',
                },
                {
                    skill: 'html',
                    image: icons.htmlIcon,
                    imgAlt: 'htmlIcon',
                },
                {
                    skill: 'BootStrap',
                    image: icons.bootStrapIcon,
                    imgAlt: 'BootstrapIcon',
                },
                {
                    skill: 'React Native',
                    image: icons.reactIcon,
                    imgAlt: 'ReactNativeIcon',
                },
                {
                    skill: 'Css',
                    image: icons.cssIcon,
                    imgAlt: 'CssIcon',
                },
                {
                    skill: 'Java Script',
                    image: icons.jsIcon,
                    imgAlt: 'JsIcon',
                },
            ],
        },
        {
            technology: 'Backend',
            programmingLanguage : [
                {
                    skill: 'Java',
                    image: icons.javaIcon,
                    imgAlt: 'javaIcon',
                },
                {
                    skill: 'Node Js',
                    image: icons.nodeJsIcon,
                    imgAlt: 'nodeJsIcon',
                },
                {
                    skill: 'Spring Boot',
                    image: icons.springBootIcon,
                    imgAlt: 'springBootIcon',
                },
                {
                    skill: 'PostgreSql',
                    image: icons.postgreSqlIcon,
                    imgAlt: 'postgreSqlIcon',
                },
                {
                    skill: 'Firebase',
                    image: icons.fireBase,
                    imgAlt: 'postgreSqlIcon',
                },
                {
                    skill: 'SqLite',
                    image: icons.sqlite,
                    imgAlt: 'postgreSqlIcon',
                },
            ],
        },
        {
            technology: 'Others',
            programmingLanguage : [
                {
                    skill: 'Git',
                    image: icons.gitIcon,
                    imgAlt: 'gitIcon',
                },
                {
                    skill: 'GitHub',
                    image: icons.gitHubIcon,
                    imgAlt: 'gitHubIcon',
                },
                {
                    skill: 'IntelliJ',
                    image: icons.intellijIcon,
                    imgAlt: 'intellijIcon',
                },
                {
                    skill: 'Vs Code',
                    image: icons.vsCodeIcon,
                    imgAlt: 'vsCodeIcon',
                },
                {
                    skill: 'Postman',
                    image: icons.postmanIcon,
                    imgAlt: 'postmanIcon',
                },
            ],
        },
    ];   
};