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
    { //důlezžité odkazy na firmě
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
          id: "metodika",
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
        },
        {
          id: "law",
          term: "Zákony a vyhlášky",
          definition: "Odkazy na nejčastější zákony a vyhlášky používané při auditech",
          examples: [
            "Zákon o auditorech: https://www.zakonyprolidi.cz/cs/2009-93",
            "Zákon o účetnictví: https://www.zakonyprolidi.cz/cs/1991-563",
            "Občanský zákoník: https://www.zakonyprolidi.cz/cs/2012-89",
            "Zákon o daních z příjmů: https://www.zakonyprolidi.cz/cs/1992-586",
            "Zákon o DPH: https://www.zakonyprolidi.cz/cs/2004-235",
            "Zákon o rezervách pro zjištění základu daně z příjmů: https://www.zakonyprolidi.cz/cs/1992-593",
            "Vyhláška č. 500/2002 Sb.,...",
            "Vyhláška č. 501/2002 Sb.,...",
            "Vyhláška č. 410/2009 Sb.,...",
          ],
          category: "basic-links"
        },
      ],
    },
    { //doplnit definice doplnit ISAE 3000 atd.
      id: "contract",
      name: "Zakázky",
      subcategories: [
        {
          id: "contract-types",
          name: "Typy zakázek",
          entries: [
            {
              id: "basic-audit",
              term: "Audit",
              definition: "Povinným auditem se rozumí ověření účetní závěrky (konsolidované účetní závěrky), zda podává věrný a poctivý obraz předmětu účetnictví podle příslušného rámce účetního výkaznictví.” (§ 2 pís. a) Zákon o auditorech - 93/2009 Sb.).",
              description: "Typicky jej vyžaduje zákon o účetnictví, zákon o obchodních korporacích nebo stanovy společnosti. Auditem se rozumí i ověření konsolidované účetní závěrky. Audit může být také na základě smlouvy (tzv. dobrovolný audit).",
              category: "contracts",
              subcategory: "contract-types"
            },
            {
              id: "prezkum",
              term: "Přezkum hospodaření",
              definition: "Přezkoumávání hospodaření územních samosprávných celků a dobrovolných svazků obcí (dále jen územní celek) či jejich zřízených příspěvkových organizací zahrnuje zkoumání ročního hospodaření uvedeného v závěrečném účtu a dalších vyjmenovaných oblastí.” (§ 1-2 Zákon č. 420/2004 Sb.)",
              description: "Přezkum hospodaření se zaměřuje na posouzení, zda územní celek hospodaří v souladu s právními předpisy a zda jsou jeho výdaje a příjmy v souladu s rozpočtem. Činnost provádí buď vládní orgán kontroly či externí auditor.",
              category: "contracts",
              subcategory: "contract-types"
            },
          ],
        },
      ],
    },
    { //Účetní minimum - nevidím důvod rozvíjet o další terminologii...
      id: "basic-acc",
      name: "Účetní minimum", // t
      subcategories: [
        {
        id: "basic-acc-basics",
        name: "Základní terminologie",
        entries: [
          {
            id: "basic-acc-basics-akt",
            term: "Aktiva",
            definition: "Všechna aktiva, která společnost vlastní. Suma aktiv je rovna součtu vlastního kapitálu a pasiv ÚJ.",
            description: "Aktiva zahrnují hotovost, pohledávky, zásoby, nemovitosti a další majetek.",
            category: "basic-acc",
            subcategory: "basic-acc-basics"
          },
          {
            id: "basic-acc-basics-pas",
            term: "Pasiva",
            definition: "Všechny závazky a dluhy společnosti.",
            description: "Pasiva zahrnují půjčky, závazky vůči dodavatelům, daně a další finanční povinnosti. Nedílnou součástí pasiv je i vlastní kapitál.",
            category: "basic-acc",
            subcategory: "basic-acc-basics"
          },
          {
            id: "basic-acc-basics-vk",
            term: "Vlastní kapitál",
            definition: "Částka, kterou vlastníci investovali do společnosti, plus zisky, které společnost reinvestovala.",
            description: "Vlastní kapitál zahrnuje základní kapitál, emisní ážio a nerozdělený zisk.",
            category: "basic-acc",
            subcategory: "basic-acc-basics"
          },
          {
            id: "basic-acc-basics-zk",
            term: "Základní kapitál",
            definition: "Počáteční investice vlastníků do společnosti.",
            description: "Základní kapitál je uveden v zakladatelské smlouvě nebo stanovách společnosti.",
            category: "basic-acc",
            subcategory: "basic-acc-basics"
          },
          {
            id: "basic-acc-basics-vn",
            term: "Výnosy a náklady",
            definition: "Výnosy představují příjmy společnosti z její hlavní činnosti, zatímco náklady jsou výdaje spojené s provozem společnosti.",
            description: "Výnosy zahrnují tržby z prodeje zboží nebo služeb, zatímco náklady zahrnují náklady na materiál, mzdy, nájem a další provozní výdaje.",
            category: "basic-acc",
            subcategory: "basic-acc-basics"
          },
          {
            id: "basic-acc-basics-bl",
            term: "Bilanční suma",
            definition: "Celková hodnota aktiv nebo pasiv společnosti.",
            description: "Bilanční suma je vždy stejná na straně aktiv i pasiv, což odráží základní účetní rovnost: Aktiva = Pasiva + Vlastní kapitál.",
            category: "basic-acc",
            subcategory: "basic-acc-basics"
          },
          {
            id: "basic-acc-basics-uj",
            term: "Účetní jednotka",
            definition: "Subjekt, pro který jsou vedeny účetní záznamy - mnohdy používáme při popisování transakce auditované osoby.",
            description: "Účetní jednotkou může být fyzická osoba, právnická osoba nebo jiný subjekt, který má povinnost vést účetnictví podle zákona.",
            category: "basic-acc",
            subcategory: "basic-acc-basics"
          },
          {
            id: "basic-acc-basics-uo",
            term: "Účetní období",
            definition: "Časové období, za které jsou sestavovány účetní závěrky.",
            description: "Účetní období je obvykle jeden rok, ale může být i kratší (např. čtvrtletí nebo pololetí) v závislosti na potřebách účetní jednotky. Účetní období nemusí nutně souhlasit na kalendářní období - v tomto případě hovoříme o hospodářském roce.",
            category: "basic-acc",
            subcategory: "basic-acc-basics",
            examples: [
              "Kalendářní rok - účetní období od 1. ledna do 31. prosince",
              "Hospodářský rok - účetní období, které nezačíná 1. ledna a nekončí 31. prosince (např. od 1. dubna do 31. března následujícího roku)",
              "Účetní období v závislosti na přeměně společnosti - může být kratší či delší než 12 měsíců"
            ],
          },
          {
            id: "basic-acc-basics-ud",
            term: "Účetní doklad",
            definition: "Dokument, který zaznamenává finanční transakci.",
            description: "Účetní doklad je základním prvkem účetnictví a slouží jako důkaz o provedení transakce.",
            category: "basic-acc",
            subcategory: "basic-acc-basics"
          },
        ],
        },
        {  
          id: "basic-acc-vykaz",
          name: "Výkazy a zprávy",
          entries: [
            {
              id: "basic-acc-vykaz-vykaznictvi",
              term: "Výkaznictví",
              definition: "Proces sestavování a prezentace finančních výkazů.",
              description: "Výkaznictví zahrnuje přípravu rozvahy, výkazu zisku a ztráty, přehledu o peněžních tocích a dalších finančních zpráv podle platných účetních standardů které poskytují informace o finanční situaci a výkonnosti společnosti - k vybranému datu nebo za určité období.",
              category: "basic-acc",
              subcategory: "basic-acc-vykaz"
            },
            {
              id: "basic-acc-vykaz-roz",
              term: "Rozvaha",
              definition: "Finanční výkaz, který poskytuje přehled o aktivech, pasivech a vlastním kapitálu společnosti k určitému datu.",
              description: "Rozvaha je rozdělena na dvě části: aktiva na jedné straně a pasiva plus vlastní kapitál na druhé straně. Celková hodnota aktiv musí být vždy rovna součtu pasiv a vlastního kapitálu. Vykazované hodnoty nemusí nutně být v účetním formátu, účetní jednotka si stanoví jednotku výkaznictví - v tis. Kč, set tisíc Kč atd.",
              category: "basic-acc",
              subcategory: "basic-acc-vykaz"
            },
            {
              id: "basic-acc-vykaz-vzz",
              term: "Výkaz zisku a ztráty",
              definition: "Finanční výkaz, který shrnuje výnosy, náklady a zisk nebo ztrátu společnosti za určité období.",
              description: "Výkaz zisku a ztráty poskytuje informace o tom, jak efektivně společnost generuje zisk ze svých operací. Výkaz může být sestaven ve formátu přehledném nebo kalkulačním.",
              category: "basic-acc",
              subcategory: "basic-acc-vykaz"
            },
            {
              id: "basic-acc-vykaz-cf",
              term: "Přehled o peněžních tocích",
              definition: "Finanční výkaz, který ukazuje příjmy a výdaje peněžních prostředků společnosti za určité období.",
              description: "Přehled o peněžních tocích je rozdělen do tří částí: provozní činnost, investiční činnost a finanční činnost. Tento výkaz pomáhá porozumět, jak společnost generuje a využívá peněžní prostředky.",
              examples: [
                "Přímá metoda - prostředky jsou sestaveny podle pohybů na bankovních účtech",
                "Nepřímá metoda - prostředky jsou sestaveny podle zisku a ztráty a úprav o nepeněžní operace"
              ],
              category: "basic-acc",
              subcategory: "basic-acc-vykaz"
            },
            {
              id: "basic-acc-vykaz-att",
              term: "Příloha účetní závěrky",
              definition: "Doplňující informace k účetní závěrce, které poskytují podrobnosti o jednotlivých položkách ve výkazech.",
              description: "Příloha účetní závěrky obsahuje informace o účetních metodách, významných událostech po datu účetní závěrky, podrobnosti o dlouhodobém majetku, závazcích, vlastním kapitálu a další relevantní informace.",
              category: "basic-acc",
              subcategory: "basic-acc-vykaz"
            },
            {
              id: "basic-acc-vykaz-vz",
              term: "Výroční zpráva",
              definition: "Komplexní zpráva, která shrnuje finanční a provozní výsledky společnosti za uplynulý rok.",
              description: "Výroční zpráva obvykle obsahuje finanční výkazy, zprávu o činnosti, zprávu auditora a další informace o strategii a plánech společnosti.",
              category: "basic-acc",
              subcategory: "basic-acc-vykaz"
            },
            {
              id: "basic-acc-vykaz-ud",
              term: "Účetní závěrka",
              definition: "Souhrn finančních výkazů společnosti, který poskytuje přehled o její finanční situaci a výkonnosti za určité období.",
              description: "Účetní závěrka zahrnuje rozvahu, výkaz zisku a ztráty, přehled o peněžních tocích a přílohu účetní závěrky. Účetní závěrka musí být sestavena v souladu s platnými účetními standardy a předpisy.",
              category: "basic-acc",
              subcategory: "basic-acc-vykaz"
            },
            {
              id: "basic-acc-vykaz-za",
              term: "Zpráva auditora",
              definition: "Oficiální dokument vydaný auditorem, který obsahuje jeho názor na účetní závěrku společnosti.",
              description: "Zpráva auditora může být bez výhrad, s výhradou, negativní nebo odmítavá, v závislosti na výsledcích auditu a souladu účetní závěrky s platnými účetními standardy.",
              category: "basic-acc",
              subcategory: "basic-acc-vykaz",
              examples: [
                "Dělíme na modifikované a nemodifikovanou",
                "Bez výhrad, nemodifikovaná - účetní závěrka poskytuje věrný a poctivý obraz finanční situace společnosti.",
                "S výhradou - existují určité oblasti, kde auditor nemůže potvrdit úplnou správnost účetní závěrky.",
                "Negativní - účetní závěrka neodráží věrně a poctivě finanční situaci společnosti.",
                "Odmítavá - auditor nebyl schopen získat dostatečné důkazy k vydání názoru na účetní závěrku."
              ],
            },
            {
              id: "basic-acc-vykaz-zv",
              term: "Zpráva o vztazích",
              definition: "Zpráva, která poskytuje informace o vztazích mezi společností a jejími spřízněnými stranami.",
              description: "Zpráva o vztazích zahrnuje informace o transakcích se spřízněnými stranami, jejich povaze a finančním dopadu na společnost.",
              category: "basic-acc",
              subcategory: "basic-acc-vykaz",
              examples: [
                "Spřízněné strany mohou zahrnovat mateřskou společnost, dceřiné společnosti, přidružené společnosti, klíčové manažery a jejich rodinné příslušníky.",
                "Kontrolujeme na registr skutečných majitelů (https://esm.justice.cz/ias/issm/rejstrik) i jiné veřejné zdroje."
              ],
            },
          ],
        },
        {
          id: "basic-acc-docs",
          name: "Účetní podklady",
          entries: [
            {
              id: "basic-acc-docs-ÚK",
              term: "Účetní kniha",
              definition: "Hlavní kniha, kde jsou zaznamenány všechny účetní transakce společnosti.",
              description: "Účetní kniha slouží jako základní zdroj informací pro sestavení účetní závěrky a dalších finančních výkazů.",
              category: "basic-acc",
              subcategory: "basic-acc-docs",
              examples: [
              "Účetní deník - chronologický záznam všech účetních transakcí",
              "Hlavní kniha - systematický záznam všech účetních transakcí podle jednotlivých účtů",
              "Analytické a syntetické evidence - podrobné záznamy o jednotlivých položkách aktiv, pasiv, nákladů a výnosů",
              "Kniha podrozvahových účtů - záznamy o položkách, které nejsou zahrnuty v hlavní knize, ale jsou důležité pro finanční řízení společnosti"
            ],
            },
            {
            id: "basic-acc-docs-kf",
            term: "Kniha faktur",
            definition: "Záznam všech přijatých a vydaných faktur společnosti.",
            description: "Kniha faktur slouží k evidenci pohledávek a závazků společnosti a je důležitým podkladem pro účetní záznamy.",
            category: "basic-acc",
            subcategory: "basic-acc-docs",
            examples: [
              "Přijaté faktury - faktury, které společnost obdržela od svých dodavatelů za zboží nebo služby",
              "Vydané faktury - faktury, které společnost vystavila svým zákazníkům za zboží nebo služby"
            ],
            },
            {
              id: "basic-acc-docs-km",
              term: "Kniha majetku",
              definition: "Záznam o veškerém dlouhodobém majetku společnosti.",
              description: "Kniha majetku obsahuje informace o pořízení, odpisování a vyřazování dlouhodobého majetku.",
              category: "basic-acc",
              subcategory: "basic-acc-docs",
              examples: [
                "Dlouhodobý hmotný majetek - budovy, stroje, zařízení",
                "Dlouhodobý nehmotný majetek - software, patenty, licence",
                "Dlouhodobý finanční majetek - investice do jiných společností, cenné papíry",
                "Dlouhodobý drobný majetek - menší položky dlouhodobého majetku, které jsou evidovány samostatně"
              ],
            },
            {
              id: "basic-acc-docs-ks",
              term: "Kniha skladu",
              definition: "Záznam o veškerém zboží a materiálu na skladě společnosti.",
              description: "Kniha skladu obsahuje informace o pohybu zboží a materiálu, jejich množství a hodnotě.",
              category: "basic-acc",
              subcategory: "basic-acc-docs",
              examples: [
                "Příjem zboží - záznam o přijatém zboží na sklad",
                "Výdej zboží - záznam o vydaném zboží ze skladu"
              ],
            },
            {
              id: "basic-acc-docs-kp",
              term: "Kniha pohledávek a závazků",
              definition: "Záznam o všech pohledávkách a závazcích společnosti.",
              description: "Kniha pohledávek a závazků slouží k evidenci finančních vztahů společnosti s jejími zákazníky a dodavateli.",
              category: "basic-acc",
              subcategory: "basic-acc-docs",
              examples: [
                "Pohledávky - částky, které jsou dluženy společnosti jejími zákazníky",
                "Závazky - částky, které společnost dluží svým dodavatelům"
              ]
            },
            {
              id: "basic-acc-docs-pod",
              term: "Podrozvaha",
              definition: "Záznam o položkách, které nejsou zahrnuty v hlavní knize, ale jsou důležité pro finanční řízení společnosti.",
              description: "Podrozvaha slouží k evidenci mimořádných a dočasných položek, které mohou ovlivnit finanční situaci společnosti.",
              category: "basic-acc",
              subcategory: "basic-acc-docs",
              examples: [
                "Mimořádné položky - jednorázové transakce, které nejsou součástí běžného hospodaření",
                "Dočasné položky - transakce, které budou v budoucnu přeřazeny do hlavní knihy"
              ],
            },
          ],
        },
      ],
    },
    { // into audit; není hotové
      id: "intro-audit",
      name: "Zásady auditu",
      subcategories: [
        {
          id: "intro-audit-rules",
          name: "Auditní rámec a standardy",
          entries: [
            {
              id: "intro-audit-rules-ISA",
              term: "Mezinárodní auditorské standardy (ISA)",
              definition: "Soubor standardů pro provádění auditů finančních výkazů.",
              description: "ISA poskytují rámec pro plánování, provádění a dokumentaci auditu, aby bylo zajištěno, že audit je proveden v souladu s nejlepšími praktikami a etickými normami.",
              category: "intro-audit",
              subcategory: "intro-audit-rules"
            },
          ],
        },
      ],
    },
    { //zásadní postupy na zakázce = není hotové
      id: "basics-audit",
      name: "Základní postupy na zakázce",
    },
    { //druhy rizik, standardy a postoj k rizikům - není hotové
      id: "risks-audit",
      name: "Rizika",
    },
    { //důkaznictví v auditu - není hotové
      id: "proof-audit",
      name: "Důkaznictví v auditu",
    },
    { //shromažďování auditních důkazů - není hotové
      id: "gather-audit",
      name: "Auditní nástroje a techniky",
    },
    { //závěr auditu - není hotové
      id: "final-audit",
      name: "Finalizace auditu",
    },
    { //ostatní doplňkové informace - není hotové
      id: "extras-audit",
      name: "Audit - extras",
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