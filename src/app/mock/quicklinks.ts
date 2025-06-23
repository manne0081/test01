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
        expanded: true,
        children: [
            { id: 0, name: 'Stack Overflow', value: 'https://stackoverflow.com' },
            { id: 1, name: 'Gmail', value: 'https://mail.google.com' },
            { id: 2, name: 'Amazon', value: 'https://www.amazon.de' },
            { id: 3, name: 'Twitter', value: 'https://twitter.com' },
            { id: 4, name: 'LinkedIn', value: 'https://www.linkedin.com' },
            { id: 5, name: 'Spotify', value: 'https://www.spotify.com' },
            { id: 6, name: 'Reddit', value: 'https://www.reddit.com' },
            { id: 7, name: 'Dropbox', value: 'https://www.dropbox.com' },
            { id: 8, name: 'Netflix', value: 'https://www.netflix.com' },
            { id: 9, name: 'eBay', value: 'https://www.ebay.de' },
            { id: 10, name: 'Pinterest', value: 'https://www.pinterest.de' },
            { id: 11, name: 'Instagram', value: 'https://www.instagram.com' },
            { id: 12, name: 'Facebook', value: 'https://www.facebook.com' },
            { id: 13, name: 'Xing', value: 'https://www.xing.com' },
            { id: 14, name: 'Heise', value: 'https://www.heise.de' },
            { id: 15, name: 'Tagesschau', value: 'https://www.tagesschau.de' },
        ]
    },
    {
        id: 2,
        name: 'Team',
        expanded: true,
        children: [
            { id: 0, name: 'Stack Overflow', value: 'https://stackoverflow.com' },
            { id: 1, name: 'Gmail', value: 'https://mail.google.com' },
            { id: 2, name: 'Amazon', value: 'https://www.amazon.de' },
            { id: 3, name: 'Twitter', value: 'https://twitter.com' },
            { id: 4, name: 'LinkedIn', value: 'https://www.linkedin.com' },
            { id: 5, name: 'Spotify', value: 'https://www.spotify.com' },
            { id: 6, name: 'Reddit', value: 'https://www.reddit.com' },
            { id: 7, name: 'Dropbox', value: 'https://www.dropbox.com' },
            { id: 8, name: 'Netflix', value: 'https://www.netflix.com' },
            { id: 9, name: 'eBay', value: 'https://www.ebay.de' },
            { id: 10, name: 'Pinterest', value: 'https://www.pinterest.de' },
            { id: 11, name: 'Instagram', value: 'https://www.instagram.com' },
            { id: 12, name: 'Facebook', value: 'https://www.facebook.com' },
        ]
    },
    {
        id: 3,
        name: 'Partner',
        expanded: true,
        children: [
            { id: 0, name: 'Stack Overflow', value: 'https://stackoverflow.com' },
            { id: 1, name: 'Gmail', value: 'https://mail.google.com' },
            { id: 2, name: 'Amazon', value: 'https://www.amazon.de' },
            { id: 3, name: 'Twitter', value: 'https://twitter.com' },
            { id: 4, name: 'LinkedIn', value: 'https://www.linkedin.com' },
        ]
    },
    {
        id: 4,
        name: 'Projekte',
        expanded: true,
        children: [
            { id: 0, name: 'Stack Overflow', value: 'https://stackoverflow.com' },
            { id: 1, name: 'Gmail', value: 'https://mail.google.com' },
            { id: 2, name: 'Amazon', value: 'https://www.amazon.de' },
            { id: 3, name: 'Twitter', value: 'https://twitter.com' },
            { id: 4, name: 'LinkedIn', value: 'https://www.linkedin.com' },
        ]
    },
];
