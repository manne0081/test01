import { Partner } from "./partner";
import { Projects } from "./projects";

export interface Task {
    id: number;                                 // Eindeutige Ticket-ID

    title: string;                              // Titel oder Betreff des Tickets
    description: string;                        // Detaillierte Beschreibung des Problems oder der Anfrage
    creator: string;                            // Name oder ID des Erstellers des Tickets
    status: 'open' | 'in-progress' | 'closed';  // Aktueller Status des Tickets
    priority: 'low' | 'medium' | 'high';        // Priorität des Tickets
    category: string;                           // Kategorie des Tickets (z.B. Technisch, Kundensupport, Bug)
    isRunning: boolean;
    isPaused: boolean;
    assignedTo?: string;                        // Mitarbeiter, dem das Ticket zugewiesen ist (optional)
    createdAt: Date;                            // Datum und Uhrzeit, wann das Ticket erstellt wurde
    dueDate?: Date;                             // Optionales Fälligkeitsdatum für das Ticket
    attachments?: string[];                     // Liste der Dateipfade oder URLs für Anhänge (optional)
    note?: Comment[];                       // Liste von Kommentaren zum Ticket (optional)
}

export interface Comment {
    user: string;               // Name oder ID des Benutzers, der den Kommentar hinterlässt
    message: string;            // Inhalt des Kommentars
    timestamp: Date;            // Datum und Uhrzeit des Kommentars
}

export const taskFieldNames: (keyof Task)[] = ['id', 'title', 'description', 'creator', 'status', 'priority',
    'category', 'assignedTo', 'createdAt', 'dueDate', 'attachments', 'note'
];

export const TASK_MOCK: Task[] = [
    {
        id: 0,
        title: 'Login-Probleme',
        description: 'Benutzer kann sich nicht in das System einloggen.',
        creator: 'Max Mustermann',
        status: 'open',
        priority: 'high',
        category: 'Technisch',
        isRunning: false,
        isPaused: false,
        assignedTo: 'Lisa Schmidt',
        createdAt: new Date('2024-01-01T09:00:00'),
        dueDate: new Date('2024-01-05'),
        note: [
        {
            user: 'Lisa Schmidt',
            message: 'Überprüfung des Benutzerkontos läuft.',
            timestamp: new Date('2024-01-01T10:00:00')
        }
        ],
        attachments: ['screenshot1.png']
    },
    {
        id: 1,
        title: 'Falsche Rechnungsadresse',
        description: 'Die Rechnungsadresse ist im System falsch hinterlegt.',
        creator: 'Julia Fischer',
        status: 'in-progress',
        priority: 'medium',
        category: 'Kundensupport',
        isRunning: false,
        isPaused: false,
        assignedTo: 'Peter Müller',
        createdAt: new Date('2024-01-02T08:30:00'),
        dueDate: new Date('2024-01-10'),
        note: [
        {
            user: 'Peter Müller',
            message: 'Kontakt mit dem Kunden zur Korrekturaufnahme.',
            timestamp: new Date('2024-01-02T09:15:00')
        }
        ],
        attachments: []
    },
    {
        id: 2,
        title: 'Fehler bei der Produktseite',
        description: 'Auf der Produktseite wird ein Fehler beim Laden der Bilder angezeigt.',
        creator: 'Anna Bauer',
        status: 'open',
        priority: 'high',
        category: 'Bug',
        isRunning: false,
        isPaused: false,
        assignedTo: 'Max Mustermann',
        createdAt: new Date('2024-01-03T10:00:00'),
        dueDate: new Date('2024-01-07'),
        note: [],
        attachments: ['error_log.txt']
    },
    {
        id: 3,
        title: 'Neues Feature für das Dashboard',
        description: 'Bitte ein neues Diagramm für das Benutzer-Dashboard hinzufügen.',
        creator: 'Sabine Neumann',
        status: 'closed',
        priority: 'low',
        category: 'Feature-Anfrage',
        isRunning: true,
        isPaused: false,
        assignedTo: 'Frank Meyer',
        createdAt: new Date('2024-01-04T11:00:00'),
        dueDate: new Date('2024-01-20'),
        note: [
        {
            user: 'Frank Meyer',
            message: 'Das neue Feature wurde implementiert und getestet.',
            timestamp: new Date('2024-01-15T14:00:00')
        }
        ],
        attachments: []
    },
    {
        id: 4,
        title: 'Performance-Probleme im Backend',
        description: 'Die Antwortzeiten des Backends sind stark verzögert.',
        creator: 'Jens Bauer',
        status: 'open',
        priority: 'high',
        category: 'Technisch',
        isRunning: false,
        isPaused: false,
        assignedTo: 'Lisa Schmidt',
        createdAt: new Date('2024-01-05T09:30:00'),
        dueDate: new Date('2024-01-08'),
        note: [],
        attachments: ['performance_report.pdf']
    },
    {
        id: 5,
        title: 'E-Mail-Benachrichtigung funktioniert nicht',
        description: 'Benachrichtigungen werden nicht an die Benutzer gesendet.',
        creator: 'Laura Bergmann',
        status: 'in-progress',
        priority: 'medium',
        category: 'Bug',
        isRunning: false,
        isPaused: false,
        assignedTo: 'Peter Müller',
        createdAt: new Date('2024-01-06T08:00:00'),
        dueDate: new Date('2024-01-12'),
        note: [
        {
            user: 'Peter Müller',
            message: 'Prüfung der E-Mail-Einstellungen gestartet.',
            timestamp: new Date('2024-01-06T09:00:00')
        }
        ],
        attachments: []
    },
    {
        id: 6,
        title: 'Neues Design für die Startseite',
        description: 'Entwicklung eines neuen Designs für die Startseite.',
        creator: 'Martin Schulz',
        status: 'open',
        priority: 'low',
        category: 'Feature-Anfrage',
        isRunning: false,
        isPaused: false,
        assignedTo: 'Anna Bauer',
        createdAt: new Date('2024-01-07T10:30:00'),
        dueDate: new Date('2024-02-01'),
        note: [],
        attachments: ['design_mockup.pdf']
    },
    {
        id: 7,
        title: 'Datenbank-Migration',
        description: 'Migration der Datenbank auf einen neuen Server.',
        creator: 'Oliver Becker',
        status: 'open',
        priority: 'high',
        category: 'Technisch',
        isRunning: false,
        isPaused: false,
        assignedTo: 'Jens Bauer',
        createdAt: new Date('2024-01-08T09:00:00'),
        dueDate: new Date('2024-01-15'),
        note: [
        {
            user: 'Jens Bauer',
            message: 'Planung der Migration läuft.',
            timestamp: new Date('2024-01-08T10:00:00')
        }
        ],
        attachments: []
    },
    {
        id: 8,
        title: 'Problem mit Zahlungsabwicklung',
        description: 'Zahlungen werden nicht korrekt verarbeitet.',
        creator: 'Heike Fischer',
        status: 'in-progress',
        priority: 'high',
        category: 'Kundensupport',
        isRunning: false,
        isPaused: false,
        assignedTo: 'Frank Meyer',
        createdAt: new Date('2024-01-09T11:00:00'),
        dueDate: new Date('2024-01-13'),
        note: [],
        attachments: ['payment_issue_report.pdf']
    },
    {
        id: 9,
        title: 'Anpassung der Datenschutzerklärung',
        description: 'Aktualisierung der Datenschutzerklärung aufgrund neuer Vorschriften.',
        creator: 'Lena Wagner',
        status: 'closed',
        priority: 'medium',
        category: 'Rechtlich',
        isRunning: false,
        isPaused: false,
        assignedTo: 'Lisa Schmidt',
        createdAt: new Date('2024-01-10T12:00:00'),
        dueDate: new Date('2024-01-30'),
        note: [
        {
            user: 'Lisa Schmidt',
            message: 'Datenschutzerklärung wurde angepasst.',
            timestamp: new Date('2024-01-28T14:30:00')
        }
        ],
        attachments: ['new_privacy_policy.pdf']
    },
    {
        id: 10,
        title: 'Überprüfung der Datenschutzerklärung durch Rechtsabteilung',
        description: 'Finale Überprüfung der aktualisierten Datenschutzerklärung durch die Rechtsabteilung.',
        creator: 'Lena Wagner',
        status: 'open',
        priority: 'high',
        category: 'Rechtlich',
        isRunning: false,
        isPaused: false,
        assignedTo: 'Maximilian Bauer',
        createdAt: new Date('2024-02-01T09:00:00'),
        dueDate: new Date('2024-02-15'),
        note: [
            {
                user: 'Maximilian Bauer',
                message: 'Dokument zur Prüfung erhalten.',
                timestamp: new Date('2024-02-01T10:15:00')
            }
        ],
        attachments: ['privacy_policy_review.pdf']
    },
    {
        id: 11,
        title: 'Einbindung der neuen Datenschutzerklärung auf der Website',
        description: 'Die überarbeitete Datenschutzerklärung soll auf der Unternehmenswebsite veröffentlicht werden.',
        creator: 'Lena Wagner',
        status: 'in-progress',
        priority: 'medium',
        category: 'IT',
        isRunning: true,
        isPaused: false,
        assignedTo: 'Jonas Meier',
        createdAt: new Date('2024-02-16T08:30:00'),
        dueDate: new Date('2024-02-20'),
        note: [
            {
                user: 'Jonas Meier',
                message: 'Begonnen mit der Integration ins CMS.',
                timestamp: new Date('2024-02-16T10:00:00')
            }
        ],
        attachments: ['datenschutzerklaerung_final.pdf']
    },
    {
        id: 12,
        title: 'Schulung zum Umgang mit neuen Datenschutzrichtlinien',
        description: 'Interne Schulung für Mitarbeiter zur Umsetzung der neuen Datenschutzvorgaben.',
        creator: 'Lena Wagner',
        status: 'open',
        priority: 'low',
        category: 'HR',
        isRunning: false,
        isPaused: false,
        assignedTo: 'Sophie Keller',
        createdAt: new Date('2024-03-01T11:00:00'),
        dueDate: new Date('2024-03-15'),
        note: [
            {
                user: 'Sophie Keller',
                message: 'Teilnehmerliste vorbereitet.',
                timestamp: new Date('2024-03-02T09:45:00')
            }
        ],
        attachments: ['schulungsunterlagen.pdf']
    },
];



export interface TimeStamp {
    id: number;  // Verknüpfte ID, z.B. die ID des Kunden, Projekts oder Tasks
    task?: Task;
    partner?: Partner;
    project?: Projects;
    start: Date;
    pause?: Date;
    stop?: Date;
}

export const TIMESTAMP_MOCK: TimeStamp[] = [
    // Beispielzeitstempel
    { id: 0, start: new Date('2023-01-01T10:00:00') },
    { id: 1, start: new Date('2023-01-01T11:00:00'), pause: new Date('2023-01-01T11:30:00') },
];
