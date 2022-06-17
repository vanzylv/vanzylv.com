import { DevTag } from '../interfaces/DevTagsInterface'

export const REACT_NATIVE = 'react-native'
export const REACT = 'react'
export const NODE_JS = 'nodejs'
export const ANGULAR = 'angular'
export const JQUERY = 'jquery'
export const REDUX = 'redux'
export const SPRING = 'spring'
export const JAVAEE = 'javaee'
export const LIFERAY = 'liferay'
export const JSP = 'JSP'
export const ASP = 'aspdotnet'
export const WINMOBILE = 'winmobile'
export const CSHARP = 'csharp'
export const S3 = 's3'
export const CLOUDFORMATION = 'cloudformation'
export const ECS = 'ecs'
export const COGNITO = 'cognito'
export const AMPLIFY = 'amplify'
export const ORACLE = 'oracle'
export const MYSQL = 'mysql'
export const MONGODB = 'mongodb'
export const OPENSHIFT = 'openshift'
export const KAFKA = 'kafka'
export const JENKINS = 'jenkins'
export const DB2 = 'db2'
export const PHP = 'php'

export const devTags: DevTag[] = [
    {
        category: 'javascript',
        description: 'Javascript',
        frameworks: [
            {
                name: REACT_NATIVE,
                description: 'React Native',
            },
            {
                name: REACT,
                description: 'React',
            },
            {
                name: NODE_JS,
                description: 'NodeJS',
            },
            {
                name: ANGULAR,
                description: 'Angular',
            },
            {
                name: JQUERY,
                description: 'jQuery',
            },
            {
                name: REDUX,
                description: 'Redux',
            },
        ],
    },
    {
        category: 'java',
        description: 'Java',
        frameworks: [
            {
                name: SPRING,
                description: 'Spring Boot',
            },
            {
                name: JAVAEE,
                description: 'Java EE',
            },
            {
                name: LIFERAY,
                description: 'Liferay',
            },
            {
                name: JSP,
                description: 'JSP',
            },
        ],
    },
    {
        category: 'dotnet',
        description: '.Net',
        frameworks: [
            {
                name: CSHARP,
                description: 'C#',
            },
            {
                name: ASP,
                description: 'ASP.net',
            },
            {
                name: WINMOBILE,
                description: 'Windows Mobile',
            },
        ],
    },
    {
        category: 'cloud',
        description: 'Cloud',
        frameworks: [
            {
                name: S3,
                description: 'Amazon S3',
            },
            {
                name: CLOUDFORMATION,
                description: 'AWS CloudFormation',
            },
            {
                name: ECS,
                description: 'Amazon ECS',
            },
            {
                name: COGNITO,
                description: 'AWS Cognito',
            },
            {
                name: AMPLIFY,
                description: 'AWS Amplify',
            },
        ],
    },
    {
        category: 'database',
        description: 'Database',
        frameworks: [
            {
                name: ORACLE,
                description: 'Oracle',
            },
            {
                name: MYSQL,
                description: 'MySQL',
            },
            {
                name: MONGODB,
                description: 'MongoDB',
            },
            {
                name: DB2,
                description: 'DB2',
            },
        ],
    },
    {
        category: 'misc',
        description: 'Other',
        frameworks: [
            {
                name: OPENSHIFT,
                description: 'OpenShift',
            },
            {
                name: KAFKA,
                description: 'Kafka',
            },
            {
                name: JENKINS,
                description: 'Jenkins',
            },            {
                name: PHP,
                description: 'PHP',
            },
        ],
    },
]
