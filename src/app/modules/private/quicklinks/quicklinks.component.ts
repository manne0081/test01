import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

// import { CdkTreeModule } from '@angular/cdk/tree';

/** Flat node with expandable and level information */
interface TreeNode {
    name: string;
    expanded?: boolean;
    children?: TreeNode[];
    value?: string;
}

@Component({
    selector: 'app-quicklinks',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        DragDropModule,
        // CdkTreeModule,
    ],
    templateUrl: './quicklinks.component.html',
    styleUrl: './quicklinks.component.scss',

})

export class QuicklinksComponent {
    // quicklinks = Array.from({ length: 30 }, (_, i) => `Quicklink ${i + 1}`);
    tree: TreeNode[] = [
        {
          name: 'Standard',
          expanded: true,
          children: [
            { name: 'Google', value: 'https://www.google.com' },
            { name: 'Wikipedia', value: 'https://de.wikipedia.org' },
            { name: 'YouTube', value: 'https://www.youtube.com' },
            { name: 'GitHub', value: 'https://github.com' },
          ]
        },
        {
          name: 'Favoriten',
          expanded: true,
          children: [
            { name: 'Stack Overflow', value: 'https://stackoverflow.com' },
            { name: 'Gmail', value: 'https://mail.google.com' },
            { name: 'Amazon', value: 'https://www.amazon.de' },
            { name: 'Twitter', value: 'https://twitter.com' },
            { name: 'LinkedIn', value: 'https://www.linkedin.com' },
            { name: 'Spotify', value: 'https://www.spotify.com' },
            { name: 'Reddit', value: 'https://www.reddit.com' },
            { name: 'Dropbox', value: 'https://www.dropbox.com' },
            { name: 'Netflix', value: 'https://www.netflix.com' },
            { name: 'eBay', value: 'https://www.ebay.de' },
            { name: 'Pinterest', value: 'https://www.pinterest.de' },
            { name: 'Instagram', value: 'https://www.instagram.com' },
            { name: 'Facebook', value: 'https://www.facebook.com' },
            { name: 'Xing', value: 'https://www.xing.com' },
            { name: 'Heise', value: 'https://www.heise.de' },
            { name: 'Tagesschau', value: 'https://www.tagesschau.de' },
            { name: 'SZ', value: 'https://www.sueddeutsche.de' },
            { name: 'FAZ', value: 'https://www.faz.net' },
            { name: 'Zeit Online', value: 'https://www.zeit.de' },
            { name: 'ARD Mediathek', value: 'https://www.ardmediathek.de' },
            { name: 'ZDF Mediathek', value: 'https://www.zdf.de/mediathek' },
            { name: 'Booking', value: 'https://www.booking.com' },
            { name: 'TripAdvisor', value: 'https://www.tripadvisor.de' },
            { name: 'Twitch', value: 'https://www.twitch.tv' },
            { name: 'Coursera', value: 'https://www.coursera.org' },
            { name: 'Udemy', value: 'https://www.udemy.com' },
            { name: 'Codecademy', value: 'https://www.codecademy.com' },
            { name: 'Replit', value: 'https://replit.com' },
            { name: 'OpenAI', value: 'https://openai.com' },
            { name: 'Perplexity', value: 'https://www.perplexity.ai' },
          ]
        }
      ];

    constructor(
    ) {}

    toggle(node: TreeNode) {
        node.expanded = !node.expanded;
    }

    drop(event: CdkDragDrop<TreeNode[]>, parent: TreeNode) {
        if (!parent.children) return;
        moveItemInArray(parent.children, event.previousIndex, event.currentIndex);
    }
}
