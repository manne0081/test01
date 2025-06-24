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
          { id: 0, name: 'Google', value: 'https://www.google.com' },
          { id: 1, name: 'Wikipedia', value: 'https://de.wikipedia.org' },
          { id: 2, name: 'YouTube', value: 'https://www.youtube.com' },
          { id: 3, name: 'GitHub', value: 'https://github.com' },
        ]
    },
    {
        id: 1,
        name: 'Workspace',
        expanded: false,
        children: [
            { id: 0, name: 'Stack Overflow', value: 'https://stackoverflow.com' },
            { id: 1, name: 'Gmail', value: 'https://mail.google.com' },
            { id: 2, name: 'Amazon', value: 'https://www.amazon.de' },
            { id: 3, name: 'Twitter', value: 'https://twitter.com' },
            { id: 4, name: 'LinkedIn', value: 'https://www.linkedin.com' },
            { id: 5, name: 'Spotify', value: 'https://www.spotify.com' },
            { id: 6, name: 'Reddit', value: 'https://www.reddit.com' },
        ]
    },
    {
        id: 2,
        name: 'Team',
        expanded: false,
        children: [
            { id: 0, name: 'Stack Overflow', value: 'https://stackoverflow.com' },
            { id: 1, name: 'Gmail', value: 'https://mail.google.com' },
            { id: 2, name: 'Amazon', value: 'https://www.amazon.de' },
            { id: 3, name: 'Twitter', value: 'https://twitter.com' },
        ]
    },
    {
        id: 3,
        name: 'Partner',
        expanded: false,
        children: [
            { id: 0, name: 'Stack Overflow', value: 'https://stackoverflow.com' },
            { id: 1, name: 'Gmail', value: 'https://mail.google.com' },
            { id: 2, name: 'Amazon', value: 'https://www.amazon.de' },
            { id: 3, name: 'Twitter', value: 'https://twitter.com' },
            { id: 4, name: 'LinkedIn', value: 'https://www.linkedin.com' },
            { id: 5, name: 'Spotify', value: 'https://www.spotify.com' },
            { id: 6, name: 'Reddit', value: 'https://www.reddit.com' },
        ]
    },
    {
        id: 4,
        name: 'Projekte',
        expanded: false,
        children: [
            { id: 0, name: 'Stack Overflow', value: 'https://stackoverflow.com' },
            { id: 1, name: 'Gmail', value: 'https://mail.google.com' },
            { id: 2, name: 'Amazon', value: 'https://www.amazon.de' },
        ]
    },
];
