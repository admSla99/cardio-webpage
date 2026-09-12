# Nastavenie Sanity

Obsah, ktorý mení zákazník, je uložený v Sanity. Ide o oznamy, ordinačné hodiny
a kontaktné údaje. Ostatný obsah zostáva v `src/lib/content.ts`.

Ak Sanity nie je nakonfigurované, stránka sa vykreslí z `src/lib/content.ts`.
Build preto prejde aj bez premenných prostredia.

## 1. Vytvorenie projektu

1. Prihláste sa na <https://www.sanity.io> cez Google.
2. Vytvorte nový projekt. Ako názov použite `MEDEPH`.
3. Zvoľte dataset `production` a nastavte ho ako verejný.
4. V nastaveniach projektu si skopírujte `Project ID`.

## 2. Premenné prostredia

Vytvorte súbor `.env.local` s týmito premennými:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-09-01
SANITY_REVALIDATE_SECRET=
SANITY_API_WRITE_TOKEN=
```

`SANITY_REVALIDATE_SECRET` je ľubovoľný náhodný reťazec. Vygenerovať ho môžete takto:

```bash
node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))"
```

Rovnaké premenné pridajte aj vo Verceli v `Settings → Environment Variables`.
Výnimkou je `SANITY_API_WRITE_TOKEN`, ktorý patrí len na lokálny počítač.

## 3. Povolenie domény

V Sanity otvorte `API → CORS origins` a pridajte:

- `http://localhost:3000`
- `https://www.medeph.sk`

Pri oboch nechajte `Allow credentials` zapnuté, inak sa Studio neprihlási.

## 4. Naplnenie počiatočného obsahu

Na <https://www.sanity.io/manage> vytvorte token s právom `Editor` a vložte ho
do `.env.local` ako `SANITY_API_WRITE_TOKEN`. Potom spustite:

```bash
npm run sanity:seed
```

Skript vytvorí tri dokumenty s aktuálnym obsahom stránky. Existujúce dokumenty
nechá nezmenené. Prepísať ich viete cez `npm run sanity:seed -- --force`.

## 5. Okamžité prejavenie zmien

Bez webhooku sa obsah obnoví najneskôr do minúty. Pre okamžitú zmenu nastavte
v Sanity `API → Webhooks` nový webhook:

| Pole | Hodnota |
| --- | --- |
| URL | `https://www.medeph.sk/api/revalidate` |
| Dataset | `production` |
| Trigger on | Create, Update, Delete |
| HTTP method | `POST` |
| API version | `v2021-03-25` |
| Secret | rovnaká hodnota ako `SANITY_REVALIDATE_SECRET` |

## 6. Prístup pre zákazníka

V `Manage → Members` pozvite zákazníka e-mailom a priraďte mu rolu `Editor`.
Prihlási sa cez Google alebo e-mail, GitHub účet nepotrebuje.

Obsah potom upravuje na adrese <https://www.medeph.sk/studio>. Rozhranie Studia
je v češtine, názvy polí sú po slovensky.

Zmena sa na stránke prejaví až po stlačení tlačidla `Publikovat`. Rozpracovaný
koncept zostáva viditeľný len v Studiu.

## Čo zákazník vidí

| Dokument | Obsahuje |
| --- | --- |
| Oznamy | Zoznam oznamov a prepínač zobrazenia vyskakovacieho okna |
| Ordinačné hodiny | Rozvrh pre sedem dní |
| Kontakt | Telefóny, e-mail, adresa, poisťovne, IČO |

Nové dokumenty vytvárať nemôže a tieto tri sa nedajú zmazať.
