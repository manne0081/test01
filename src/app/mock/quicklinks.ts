export interface Quicklinks {
    id: number;
    name: string;
    value?: string;
    expanded?: boolean;
    children?: Quicklinks[];
}

export const QUICKLINKS_MOCK: Quicklinks[] = [
    {
        id: 0,
        name: 'Standard',
        expanded: true,
        children: [
            { id: 0, name: 'Angebot erstellen', value: 'TASK-101' },
            { id: 1, name: 'Rechnung prüfen', value: 'TASK-102' },
            { id: 2, name: 'Meeting vorbereiten', value: 'TASK-103' },
            { id: 3, name: 'Kundenfeedback einholen', value: 'TASK-104' },
        ]
    },
    {
        id: 1,
        name: 'Workspace',
        expanded: false,
        children: [
            { id: 0, name: 'Projektplan Q3', value: 'DOC-201' },
            { id: 1, name: 'Urlaubsantrag', value: 'FORM-202' },
            { id: 2, name: 'Firmenhandbuch', value: 'DOC-203' },
            { id: 3, name: 'Onboarding-Checkliste', value: 'CHECK-204' },
            { id: 4, name: 'Meetingraum buchen', value: 'TOOL-205' },
            { id: 5, name: 'Zeiterfassung', value: 'TOOL-206' },
            { id: 6, name: 'Abteilungs-Chat', value: 'CHAT-207' },
        ]
    },
    {
        id: 2,
        name: 'Team',
        expanded: false,
        children: [
            { id: 0, name: 'Max Mustermann', value: 'USER-301' },
            { id: 1, name: 'Erika Musterfrau', value: 'USER-302' },
            { id: 2, name: 'Lars Beispiel', value: 'USER-303' },
            { id: 3, name: 'Sven Teamlead', value: 'USER-304' },
        ]
    },
    {
        id: 3,
        name: 'Partner',
        expanded: false,
        children: [
            { id: 0, name: 'Acme GmbH', value: 'PARTNER-401' },
            { id: 1, name: 'Muster AG', value: 'PARTNER-402' },
            { id: 2, name: 'Beispiel Solutions', value: 'PARTNER-403' },
            { id: 3, name: 'Partner IT', value: 'PARTNER-404' },
            { id: 4, name: 'Netzwerk GmbH', value: 'PARTNER-405' },
            { id: 5, name: 'Consulting AG', value: 'PARTNER-406' },
            { id: 6, name: 'Marketing Experts', value: 'PARTNER-407' },
        ]
    },
    {
        id: 4,
        name: 'Projekte',
        expanded: false,
        children: [
            { id: 0, name: 'Website Relaunch', value: 'PROJECT-501' },
            { id: 1, name: 'App Entwicklung', value: 'PROJECT-502' },
            { id: 2, name: 'Cloud Migration', value: 'PROJECT-503' },
        ]
    },
];
