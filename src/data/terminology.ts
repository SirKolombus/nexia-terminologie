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
      id: "audit-concepts",
      name: "Auditní koncepty",
      subcategories: [
        {
          id: "audit-types",
          name: "Typy auditů",
          entries: [
            {
              id: "financial-audit",
              term: "Finanční audit",
              definition: "Nezávislé posouzení účetní závěrky organizace s cílem vyjádřit názor na její věrnost a poctivost.",
              description: "Finanční audit je systematické a nezávislé posouzení účetních výkazů a souvisejících informací za účelem vyjádření názoru na jejich věrnost a poctivost.",
              examples: [
                "Audit roční účetní závěrky",
                "Audit mezitímních finančních výkazů"
              ],
              relatedTerms: ["audit-opinion", "materiality"],
              category: "audit-concepts",
              subcategory: "audit-types"
            },
            {
              id: "compliance-audit",
              term: "Audit souladu",
              definition: "Audit zaměřený na ověření dodržování zákonů, předpisů a interních směrnic.",
              description: "Compliance audit se zaměřuje na posouzení, zda organizace dodržuje aplikovatelné zákony, předpisy, smlouvy a interní politiky.",
              examples: [
                "Audit dodržování daňových předpisů",
                "Audit souladu s GDPR"
              ],
              relatedTerms: ["regulatory-compliance", "internal-controls"],
              category: "audit-concepts",
              subcategory: "audit-types"
            }
          ]
        },
        {
          id: "audit-opinions",
          name: "Auditorské výroky",
          entries: [
            {
              id: "unqualified-opinion",
              term: "Výrok bez výhrad",
              definition: "Auditorský výrok vyjadřující, že účetní závěrka podává věrný a poctivý obraz finanční situace.",
              description: "Nejpříznivější typ auditorského výroku, kdy auditor konstatuje, že účetní závěrka je připravena ve všech významných ohledech v souladu s účetními standardy.",
              examples: [
                "Čistý výrok",
                "Standardní výrok"
              ],
              relatedTerms: ["qualified-opinion", "adverse-opinion"],
              category: "audit-concepts",
              subcategory: "audit-opinions"
            }
          ]
        }
      ]
    },
    {
      id: "risk-assessment",
      name: "Posouzení rizik",
      subcategories: [
        {
          id: "risk-types",
          name: "Typy rizik",
          entries: [
            {
              id: "inherent-risk",
              term: "Inherentní riziko",
              definition: "Riziko významné nesprávnosti na úrovni předpokladu před zohledněním jakýchkoliv souvisejících kontrol.",
              description: "Inherentní riziko je náchylnost předpokladu k významné nesprávnosti za předpokladu, že neexistují žádné související kontroly.",
              examples: [
                "Riziko v komplexních účetních oblastech",
                "Riziko při subjektivních odhadech"
              ],
              relatedTerms: ["control-risk", "detection-risk"],
              category: "risk-assessment",
              subcategory: "risk-types"
            },
            {
              id: "control-risk",
              term: "Kontrolní riziko",
              definition: "Riziko, že významná nesprávnost nebude včas předcházena nebo odhalena a opravena systémem interních kontrol.",
              description: "Kontrolní riziko je riziko, že významná nesprávnost, která by mohla nastat v předpokladu, nebude včas předcházena nebo detekována a opravena interním kontrolním systémem účetní jednotky.",
              examples: [
                "Nedostatečné schvalovací procesy",
                "Slabé kontroly nad IT systémy"
              ],
              relatedTerms: ["inherent-risk", "internal-controls"],
              category: "risk-assessment",
              subcategory: "risk-types"
            }
          ]
        }
      ]
    },
    {
      id: "financial-statements",
      name: "Účetní výkazy",
      subcategories: [
        {
          id: "primary-statements",
          name: "Základní výkazy",
          entries: [
            {
              id: "balance-sheet",
              term: "Rozvaha",
              definition: "Účetní výkaz zobrazující finanční pozici podniku k určitému datu.",
              description: "Rozvaha je účetní výkaz, který zachycuje stav aktiv, pasiv a vlastního kapitálu k určitému okamžiku (obvykle k rozvahovému dni).",
              examples: [
                "Aktiva = Pasiva + Vlastní kapitál",
                "Dlouhodobá aktiva, oběžná aktiva"
              ],
              relatedTerms: ["assets", "liabilities", "equity"],
              category: "financial-statements",
              subcategory: "primary-statements"
            },
            {
              id: "income-statement",
              term: "Výkaz zisku a ztráty",
              definition: "Účetní výkaz zobrazující výnosy a náklady za určité období.",
              description: "Výkaz zisku a ztráty zachycuje výsledek hospodaření podniku za určité účetní období prostřednictvím výnosů a nákladů.",
              examples: [
                "Tržby za prodej zboží",
                "Mzdové náklady"
              ],
              relatedTerms: ["revenue", "expenses", "profit"],
              category: "financial-statements",
              subcategory: "primary-statements"
            }
          ]
        }
      ]
    }
  ]
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