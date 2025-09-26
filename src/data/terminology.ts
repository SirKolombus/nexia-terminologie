/**
 * Terminology data structure for financial audit add-in
 */

export interface TerminologyEntry {
  id: string;
  term: string;
  definition: string;
  description?: string;
  examples?: string[];
  relatedTerms?: string[];
  category: string;
  subcategory?: string;
}

export interface TerminologyCategory {
  id: string;
  name: string;
  subcategories?: TerminologySubcategory[];
  entries?: TerminologyEntry[];
}

export interface TerminologySubcategory {
  id: string;
  name: string;
  entries: TerminologyEntry[];
}

export interface TerminologyTree {
  categories: TerminologyCategory[];
}

// Sample terminology data for financial auditing
export const terminologyData: TerminologyTree = {
  categories: [
    {
      id: "basic-links",
      name: "Důležité odkazy",
      entries: [
      {
        id: "webs",
        term: "Důležité weby",
        definition: "Nejsvatější weby co můžou být",
        examples: [
          "Nexia - https://nexiaap.cz/",
          "KAČR - https://www.kacr.cz/",
          "Kočkopes - https://www.youtube.com/watch?v=xsQo9Z1V8L8",
          "Pondělní nálady - https://www.facebook.com/reel/1199968667695826",
        ],
        category: "basic-links"
      },
      {
        id: "Metodika 2025-2026",
        term: "Metodika 2025-2026",
        definition: "Uložiště všech důležitých podkladů co máme -od interní metodiky, přes šablony až po návody s nástroji.",
        examples: [
            "Odkaz na sharepoint: https://nexiaprague.sharepoint.com/:f:/s/SHP_D1/EidzB_6faIxPnQi6FDX8lzcBKCcv1uw_I39cSACuOBNXOA?e=sXfqpS"
          ],
          category: "basic-links"
        },
        {
          id:"nastroje",
          term: "Kontrolní weby",
          definition: "Základní weby které používáme při kontrole",
          examples: [
            "Kontrola subjektů: https://ares.gov.cz/",
            "Kontrola právnických osob: https://or.justice.cz/ias/ui/rejstrik",
            "Kontrola katastru nemovitostí: https://nahlizenidokn.cuzk.gov.cz/",
          ],
          category: "basic-links"
        }
      ]
    },
    {
      id: "contracts",
      name: "Zakázky",
      subcategories: [
        {
          id: "contract-types",
          name: "Typy zakázek",
          entries: [
            {
              id: "basic-audit",
              term: "Audit",
              definition: "N/A",
              description: "N/A",
              category: "contracts",
              subcategory: "contract-types"
            },
            {
              id: "prezkum",
              term: "Přezkum hospodaření",
              definition: "N/A",
              description: "N/A",
              category: "contracts",
              subcategory: "contract-types"
            }
          ]
        },
      ]
    }
  ],
};

// Helper functions for searching and filtering
export function searchTerminology(query: string, data: TerminologyTree): TerminologyEntry[] {
  const results: TerminologyEntry[] = [];
  const searchLower = query.toLowerCase();

  data.categories.forEach(category => {
    category.subcategories?.forEach(subcategory => {
      subcategory.entries.forEach(entry => {
        if (
          entry.term.toLowerCase().includes(searchLower) ||
          entry.definition.toLowerCase().includes(searchLower) ||
          entry.description?.toLowerCase().includes(searchLower)
        ) {
          results.push(entry);
        }
      });
    });

    category.entries?.forEach(entry => {
      if (
        entry.term.toLowerCase().includes(searchLower) ||
        entry.definition.toLowerCase().includes(searchLower) ||
        entry.description?.toLowerCase().includes(searchLower)
      ) {
        results.push(entry);
      }
    });
  });

  return results;
}

export function getTerminologyById(id: string, data: TerminologyTree): TerminologyEntry | null {
  for (const category of data.categories) {
    if (category.subcategories) {
      for (const subcategory of category.subcategories) {
        const entry = subcategory.entries.find(e => e.id === id);
        if (entry) return entry;
      }
    }
    if (category.entries) {
      const entry = category.entries.find(e => e.id === id);
      if (entry) return entry;
    }
  }
  return null;
}