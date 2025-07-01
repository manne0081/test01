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
            { id: 0, name: 'Angebot erstellen', value: '/' },
            { id: 1, name: 'Rechnung prüfen', value: '/' },
            { id: 2, name: 'Meeting vorbereiten', value: '/' },
            { id: 3, name: 'Kundenfeedback einholen', value: '/' },
        ]
    },
    {
        id: 1,
        name: 'Workspace',
        expanded: false,
        children: [
            { id: 0, name: 'Enthält pro', value: '/tasks?search=pro&sort=' },
            { id: 1, name: 'Enthält login', value: '/tasks?search=login&sort=' },
            { id: 2, name: 'Enthält fehler', value: '/tasks?search=fehler&sort=' },
            { id: 3, name: 'Enthält mail', value: '/tasks?search=mail&sort=' },
            { id: 4, name: 'Enthält daten', value: '/tasks?search=daten&sort=' },
            { id: 5, name: 'Enthält neu', value: '/tasks?search=neu&sort=' },
            { id: 6, name: 'Enthält prüfung', value: '/tasks?search=prüfung&sort=' },
        ]
    },
    {
        id: 2,
        name: 'Team',
        expanded: false,
        children: [
            { id: 0, name: 'Max Mustermann', value: '/' },
            { id: 1, name: 'Erika Musterfrau', value: '/' },
            { id: 2, name: 'Lars Beispiel', value: '/' },
            { id: 3, name: 'Sven Teamlead', value: '/' },
        ]
    },
    {
        id: 3,
        name: 'Partner',
        expanded: false,
        children: [
            { id: 0, name: 'Acme GmbH', value: '/' },
            { id: 1, name: 'Muster AG', value: '/' },
            { id: 2, name: 'Beispiel Solutions', value: '/' },
        ]
    },
    {
        id: 4,
        name: 'Projekte',
        expanded: false,
        children: [
            { id: 0, name: 'Website Relaunch', value: '/' },
            { id: 1, name: 'App Entwicklung', value: '/' },
            { id: 2, name: 'Cloud Migration', value: '/' },
        ]
    },
];
