/**
 * ═══════════════════════════════════════════════════════════════════════════
 * Dynamic Projects Data — Influencer Marketing & Video Editing
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * HOW TO ADD A NEW INSTAGRAM REEL:
 * 1. Copy the reel link from Instagram.
 * 2. Strip everything after the reel ID (remove ?utm_source=... etc.).
 * 3. Add a new object to INFLUENCER_REELS below with the clean URL.
 *    Example:
 *      { url: 'https://www.instagram.com/reel/YOUR_REEL_ID/' },
 *
 * HOW TO ADD A NEW VIDEO EDITING ENTRY:
 * 1. Import your video file at the top of WorkDetails.jsx (or use a glob).
 * 2. Add a new object to VIDEO_EDITING_ENTRIES below.
 *
 * ═══════════════════════════════════════════════════════════════════════════
 */

// ── Influencer Marketing Reels ───────────────────────────────────────────────
// Just add { url: 'https://www.instagram.com/reel/REEL_ID/' } to add a new reel.
export const INFLUENCER_REELS = [
    { url: 'https://www.instagram.com/reel/DZfIxfgMeXq/' },
    { url: 'https://www.instagram.com/reel/DYmPaLHovhr/' },
    { url: 'https://www.instagram.com/reel/DU8IY60CfG8/' },
    { url: 'https://www.instagram.com/reel/DU43ilMkVeE/' },
    { url: 'https://www.instagram.com/reel/DUugVoLkmOD/' },
    { url: 'https://www.instagram.com/reel/DULAxB5kXSO/' },
    { url: 'https://www.instagram.com/reel/DTDweGWkreN/' },
    { url: 'https://www.instagram.com/reel/DTAhrRDkx6z/' },
    { url: 'https://www.instagram.com/reel/DS_6AFHkV7Y/' },
    { url: 'https://www.instagram.com/reel/DRj1D5IjCg7/' },
    { url: 'https://www.instagram.com/reel/DQLvTN-jMYk/' },
    { url: 'https://www.instagram.com/reel/DQHUEf9jOUG/' },
    { url: 'https://www.instagram.com/reel/DQBrCQpEVIg/' },
    { url: 'https://www.instagram.com/reel/DP6c2YekcUw/' },
    { url: 'https://www.instagram.com/reel/DPwAdnrCCno/' },
    { url: 'https://www.instagram.com/reel/DPbWcLWCHkW/' },
    { url: 'https://www.instagram.com/reel/DPasRz2jGhO/' },
    { url: 'https://www.instagram.com/reel/DN0qoHT2N8Y/' },
    { url: 'https://www.instagram.com/reel/DNbIEU7Tq-w/' },
    { url: 'https://www.instagram.com/reel/DMcwMxJNvLR/' },
    { url: 'https://www.instagram.com/reel/DMXH69PPQ61/' },
    { url: 'https://www.instagram.com/reel/C-ptiBZtmhj/' },
    { url: 'https://www.instagram.com/reel/C5aOGzDP2Qo/' },
    { url: 'https://www.instagram.com/reel/C5-OO5_JyJN/' },
    { url: 'https://www.instagram.com/reel/DOd02wskosx/' },
];

// ── Video Editing Entries ────────────────────────────────────────────────────
// Add new video editing projects here. Set importFn to null — WorkDetails.jsx
// will wire up the actual import for the grid video.
export const VIDEO_EDITING_ENTRIES = [
    {
        title: 'Video Portfolio',
        type: 'youtube',
        videoId: '3n8GxAn1Uo8',
    },
];

export const VIDEO_CATEGORIES = [
    {
        id: 'ai-base',
        title: 'Ai Base Video',
        thumbnail: 'https://img.youtube.com/vi/3n8GxAn1Uo8/maxresdefault.jpg',
        videos: [
            '3n8GxAn1Uo8', 'zvAnewfmdjI', 'MgwESkzTqQ0', 'bO5ieVuyicg', 'C7Dr7sDQ7YI', 
            'p6RGZGucyl8', 'hwnGAsfRkHE', 'HmXrxA6yf3Q', 'LqeHxznCQcA', '9bw9W8I9MIs',
            'heQE2s3Rm7s', 'PRvutrpiHfk', 'bJbu_X1YvFw', 'zTQXlwLY7NA', 'yDgzVpOJI2w',
            '4ufnB0Es-CY', 'GcYmimybO1g', 'DBGaLEn68ek', 'vM-O8mkCdg', 'mhvpBd1akdw',
            'ClYFN9QlOw0', 'grRIHemXTGU', 'q7o3tvX6ks8', 'gWPFZoFJOGg', 'FVirP-cYdCw',
            'TTUn4dJSlzY', 'sMTPi7z7vhU', 'U1P-P6CW_5Q', '6VuFrlBPQjw', 'lVwwhXAlpV8'
        ]
    },
    {
        id: 'graphical-video',
        title: 'Graphical Video',
        thumbnail: 'https://img.youtube.com/vi/0m5LD2hDL8M/maxresdefault.jpg',
        videos: [
            '0m5LD2hDL8M', 'qhOALO1Y35o', 's6gBbOJ9ZJI', 'DZbndGpXNfE', 'AsAqa4-Oi68',
            'VkrpBNzCSoA', 'CWviUjPvwgo', 'KM1i3krbECE', 'nUV6hTdeAYg', 'VqoOkxrUlXI'
        ]
    },
    {
        id: 'shoot-base',
        title: 'Shoot Base Video',
        thumbnail: 'https://img.youtube.com/vi/43iHW_nz8pE/maxresdefault.jpg',
        videos: [
            '43iHW_nz8pE', 'VZJ5DHP2qHQ', 'Q20Gt9gy9Tw', '5HM2DR8WwM4', 'AnkrgVrT8Ss',
            'ucXq4Gegvuc', 'OWnzo74CbFw', 'rgufTxVI7O0', 'PGyHO5OqiXA'
        ]
    }
];

// ── Builder functions (used by WorkDetails.jsx) ─────────────────────────────

export function buildInfluencerMarketingProjects() {
    return INFLUENCER_REELS.map((reel, index) => ({
        id: `influencer-marketing-${index}`,
        title: `Influencer Campaign ${index + 1}`,
        category: 'INFLUENCER MARKETING',
        loaders: [
            {
                type: 'instagram',
                url: reel.url,
            }
        ],
        thumbnailOverride: null,
    }));
}

export function buildVideoEditingProjects(gridVideoPath) {
    return VIDEO_EDITING_ENTRIES.map((entry, index) => {
        if (entry.type === 'youtube') {
            return {
                id: `video-editing-${index}`,
                title: entry.title,
                category: 'VIDEO EDITING',
                loaders: [
                    {
                        type: 'youtube',
                        videoId: entry.videoId,
                        url: `https://www.youtube.com/embed/${entry.videoId}`,
                    }
                ],
                thumbnailOverride: {
                    url: `https://img.youtube.com/vi/${entry.videoId}/maxresdefault.jpg`,
                    type: 'image',
                },
            };
        }
        return {
            id: `video-editing-${index}`,
            title: entry.title,
            category: 'VIDEO EDITING',
            loaders: [
                {
                    glbPath: `../assets/images/${entry.fileName}`,
                    importFn: () => Promise.resolve({ default: gridVideoPath }),
                    fileName: entry.fileName,
                    type: 'video',
                }
            ],
            thumbnailOverride: null,
        };
    });
}
