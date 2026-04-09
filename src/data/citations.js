/**
 * Video citations registry for the /citations/:slug pages.
 * Each entry groups Chicago-style (Notes and Bibliography) references
 * by category for a given video episode.
 */
export const citations = [
  {
    slug: 'alien-and-sedition-acts',
    i18nKey: 'alienSedition',
    companionVideoSlug: 'sedition-1798',
    sections: [
      {
        heading: 'Archival Documents & Manuscripts',
        icon: 'archive',
        items: [
          {
            label: 'John Simms Alien Enemy Report',
            citation:
              'Report, John Simms, Adams County, as alien enemy, 11 September 1814. Series 0499: Territorial Records. Mississippi Department of Archives and History, Jackson, MS.',
            url: 'https://da.mdah.ms.gov/series/territorial/s499/detail/10756',
          },
        ],
      },
      {
        heading: 'Photographs & Visual Art',
        icon: 'photo_library',
        items: [
          {
            label: 'General John J. Pershing (Bain Collection)',
            citation:
              'Bain News Service. Gen. John J. Pershing. [Between 1910 and 1920]. Photograph. George Grantham Bain Collection, Library of Congress, Prints and Photographs Division.',
            url: 'https://www.loc.gov/item/ggb2006001117/',
          },
          {
            label: 'Ichiro Kataoka Arrest',
            citation:
              '"San Francisco Hotel Owner Ichiro Kataoka being arrested by the FBI." The San Francisco Examiner, December 8, 1941. Courtesy of the National Japanese American Historical Society.',
            url: 'https://njahs.org/enemy-alien-files/',
          },
          {
            label: 'Amache Concentration Camp Arrivals',
            citation:
              '"New arrivals disembarking from the train onto school buses waiting to take them to Amache." Photograph. History Colorado Collection, PH.PROP2328.',
            url: null,
          },
          {
            label: 'Congressional Pugilists (Etching)',
            citation:
              'Congressional pugilists. 1798. Etching. Library of Congress Prints and Photographs Division, Washington, D.C.',
            url: 'https://www.loc.gov/pictures/item/2008661719/',
          },
        ],
      },
      {
        heading: 'Posters & Political Cartoons',
        icon: 'image',
        items: [
          {
            label: 'Department of Justice Notice (WWII)',
            citation:
              'U.S. Department of Justice. Notice to Aliens of Enemy Nationalities. 1942. Poster. Enemy Alien Files. National Japanese American Historical Society, San Francisco, CA.',
            url: null,
          },
          {
            label: '"Stop! Alien Enemies Take Notice" Poster (WWI)',
            citation:
              '"Stop! Alien Enemies Take Notice." Poster. National Museum of American History, Smithsonian Institution, Washington, D.C. NMAH-AC0433-0006371.',
            url: null,
          },
          {
            label: '"Now for a Round-Up" Cartoon',
            citation:
              'Rogers, W.A. "Now for a Round-Up." New York Post, 1901. Library of Congress, Prints and Photographs Division, LC-DIG-cai-2a14550.',
            url: null,
          },
        ],
      },
      {
        heading: 'Articles & Web Sources',
        icon: 'language',
        items: [
          {
            label: 'History Colorado Essay',
            citation:
              'Wei, William. "A History of the Alien Enemies Act." History Colorado, February 7, 2025.',
            url: 'https://www.historycolorado.org/story/2025/02/07/history-alien-enemies-act',
          },
        ],
      },
      {
        heading: 'Legal Statutes',
        icon: 'gavel',
        items: [
          {
            label: 'U.S. Code',
            citation: '50 U.S.C. § 21.',
            url: null,
          },
        ],
      },
      {
        heading: 'Music',
        icon: 'music_note',
        items: [
          {
            label: 'Despair and Triumph',
            citation:
              'Despair and Triumph by Kevin MacLeod is licensed under a Creative Commons Attribution 4.0 license.',
            url: 'http://incompetech.com/music/royalty-free/index.html?isrc=USUAN1400012',
          },
          {
            label: 'Egmont Overture',
            citation:
              'Egmont Overture by Kevin MacLeod is licensed under a Creative Commons Attribution 4.0 license.',
            url: 'http://incompetech.com/music/royalty-free/index.html?isrc=USUAN1200069',
          },
          {
            label: 'Iron Horse - Distressed',
            citation:
              'Iron Horse - Distressed by Kevin MacLeod is licensed under a Creative Commons Attribution 4.0 license.',
            url: 'http://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100735',
          },
        ],
      },
    ],
  },
];

export function getCitationsBySlug(slug) {
  return citations.find((c) => c.slug === slug) ?? null;
}
