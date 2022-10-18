import { Employer } from '../interfaces/EmployerInterface'
import {
    AMPLIFY,
    ANGULAR,
    CLOUDFORMATION,
    COGNITO,
    CSHARP,
    DB2,
    ECS,
    JAVAEE,
    JENKINS,
    JQUERY,
    JSP,
    KAFKA,
    LAMBDA,
    LIFERAY,
    MONGODB,
    MYSQL,
    NODE_JS,
    OPENSHIFT,
    ORACLE,
    PHP,
    REACT,
    REACT_NATIVE,
    REDUX,
    S3,
    SPRING,
    TRANSCRIBE,
} from './tags'

export const employerData: Employer[] = [
    {
        description: 'Bank of New Zealand',
        dateStart: '2018-11-01',
        dateEnd: 'Current day',
        role: 'Senior Developer',
        logo: 'data:image/jpeg;base64,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',
        endeavours: [
            {
                project: 'Transcribe',
                description: 'React UI exposing AWS Transcribe functionality',
                tags: [REACT, S3, TRANSCRIBE, LAMBDA],
            },
            {
                project: 'Application events integration',
                description:
                    'Bi-directional application information integration with 3rd party software',
                tags: [SPRING, KAFKA, OPENSHIFT, ORACLE],
            },
            {
                project: 'Staff Assisted Application Rewrite / Cloud Migration',
                description:
                    'New React webapp with Spring boot service from the ground up to replace existing on prem application',
                tags: [REACT, SPRING, REDUX, OPENSHIFT, ORACLE, JENKINS],
            },
            {
                project: 'Staff Assisted Application Maintenance ',
                description:
                    'Development, maintenance, testing of webapp used by staff members in branches across New Zealand',
                tags: [REACT, SPRING, REDUX, OPENSHIFT, ORACLE, JENKINS],
            },
            {
                project: 'BNZ Digital Onboarding',
                description:
                    'Development, maintenance and cloud migration of webapp for onboarding new customers to the bank.',
                tags: [REACT, SPRING, REDUX, OPENSHIFT, ORACLE, S3, JENKINS],
            },
            {
                project: 'BNZ Go',
                description: 'Creating a unified user experience for Bankers',
                tags: [REACT, ECS, CLOUDFORMATION],
            },
        ],
    },
    {
        description: 'Hiplee',
        dateStart: '2018-05-01',
        dateEnd: '2018-11-01',
        role: 'Senior Developer',
        logo: 'data:image/jpeg;base64,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',
        endeavours: [
            {
                project: 'HipLee WebApp',
                description:
                    'Building a React / Redux webapp application from the ground up, integrated with AWS.',
                tags: [REACT, COGNITO, AMPLIFY],
            },
        ],
    },
    {
        description: 'Solnet',
        dateStart: '2018-05-01',
        dateEnd: '2018-11-01',
        role: 'Senior Developer / Technical Team Lead',
        logo: 'data:image/jpeg;base64,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',
        endeavours: [
            {
                project: 'ACC - Business Customer Self Service (BCSS)',
                description:
                    'Building a Cloud based Web solution to enable ACC business customers to manage their levy payments online.',
                tags: [ANGULAR, NODE_JS, SPRING, ORACLE],
            },
            {
                project: 'ACC - Customer Self Service (CSS)',
                description:
                    'Building an enterprise web API to enable ACC customers to view and manage tasks related to ACC claims.',
                tags: [ORACLE, SPRING],
            },
        ],
    },
    {
        description: 'BBD',
        dateStart: '2010-03-01',
        dateEnd: '2017-04-01',
        role: 'Senior Developer / Technical Team Lead',
        logo: 'data:image/jpeg;base64,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',
        endeavours: [
            {
                project: 'Momentum - Quarterly statements',
                description:
                    'Development of an AngularJS application to provide clients the ability to view their quarterly statements online.',
                tags: [ANGULAR, NODE_JS, MONGODB],
            },
            {
                project: 'Vodacom - Business client portal.',
                description:
                    'Maintenance on and development of the Vodacom business web portal. My responsibilities included creating Liferay Portlets for customer management.',
                tags: [JAVAEE, LIFERAY, DB2],
            },
            {
                project: 'Vodacom - Oracle fusion middleware migration.',
                description:
                    'Migration of existing Websphere applications to Oracle Weblogic and Oracle fusion middleware.',
                tags: [JAVAEE, ORACLE],
            },
            {
                project: 'Vodacom - Metadata configuration application for vodacom.co.za',
                description:
                    'Development of portal page maintenance application for vodacom.co.za to enable Vodacom staff to manage common configuration tasks.',
                tags: [JQUERY, JSP, JAVAEE],
            },
            {
                project: 'Vodacom - online shopping basket, checkout and payment system.',
                description:
                    'Development of vodacom.co.za main purchase gateway from product selection to purchase.',
                tags: [ANGULAR, JAVAEE],
            },
            {
                project: 'Vodacom - Content synchronization tool.',
                description:
                    'Development of an application to allow content pages to be synchronized across WebLogic application environments.',
                tags: [JAVAEE],
            },
            {
                project: 'Vodacom - Instant upgrades.',
                description:
                    'Design and development of a C# based tablet application that allows users to upgrade via their Windows tablets.',
                tags: [CSHARP, JAVAEE],
            },
            {
                project: 'Vodacom - Windows mobile application.',
                description:
                    'Team lead, development of a C# windows phone application to allow customers the same functionality available through Vodacom’s self service portal.',
                tags: [CSHARP, JAVAEE],
            },
        ],
    },
    {
        description: 'Enerweb',
        dateStart: '2001-01-01',
        dateEnd: '2010-03-01',
        role: 'Senior Developer',
        logo: 'data:image/jpeg;base64,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',
        endeavours: [
            {
                project: 'Eskom - International electricity trader',
                description:
                    'Development of a real-time electricity trading system. Tasks included building an interface for traders to interact with the company.',
                tags: [PHP, ORACLE],
            },
            {
                project: 'Eskom - Transmission performance tracking',
                description:
                    'Project to track faults and their causes on electric transmission lines. Tasks included creating of a reports from-end and PDF generation.',
                tags: [PHP, ORACLE, MYSQL],
            },
            {
                project: 'Nampower - Energy trading system',
                description:
                    'Tasks included building a Java based visual transmission line viewer as well as porting a well known power systems market simulation tool called Plexos to a fully functional PHP / MySQL web application.',
                tags: [PHP, MYSQL, JAVAEE, JSP],
            },
            {
                project: 'Eskom - Data Hub',
                description:
                    'Eskom decided to embark on a self developed, enterprise wide data warehouse for financial, technical, HR and environmental data, My roles included developing a C# Excel plugin to view and manipulate data.',
                tags: [CSHARP, ORACLE],
            },
        ],
    },
    {
        description: 'FreeLance',
        dateStart: '2020',
        dateEnd: '2021',
        role: 'React Native Mobile App and API development ',
        logo: '',
        endeavours: [
            {
                project: 'Cypher Mobile App',
                description: 'Development of an React Native Mobile App and PHP API',
                tags: [REACT_NATIVE, PHP, MYSQL],
            },
        ],
    },
]
