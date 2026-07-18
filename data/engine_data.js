/* Länder × Krankheits-Datenmatrix (window.ENGINE_DATA) — AUTORITATIVE Laufzeitquelle der Empfehlungen.
   Wird von engine.js (getRisk) UND engine_rules.js (deriveCategory) gelesen.
   Handgepflegt: direkt hier editieren (der ursprüngliche Generator tools/build/build_engine_data.py
   liegt nicht im Repo). Bei Änderungen die Engine-Tests laufen lassen (tests/engine.test.js). */
window.ENGINE_DATA = {
 "_meta": {
  "generated_from": "tools/master_data",
  "source": "RKI/DTG 2026, WHO, ECDC, STIKO, Tropimed"
 },
 "specialPopulations": [
  {
   "population": "pregnancy",
   "population_de": "Schwangerschaft",
   "applies_to": "live_vaccines",
   "rule": "contraindicated",
   "condition": "",
   "note_de": "Lebendimpfstoffe grundsätzlich kontraindiziert (MMR, Varizellen, Zoster-Lebend/Zostavax, Rotaviren, orale Typhusimpfung Ty21a, nasale Influenza)",
   "source": "Tropimed2026"
  },
  {
   "population": "pregnancy",
   "population_de": "Schwangerschaft",
   "applies_to": "yellow_fever",
   "rule": "caution",
   "condition": "unvermeidbare Reise in Endemiegebiet",
   "note_de": "Nur nach strenger Nutzen-Risiko-Abwägung; wenn möglich Reise verschieben",
   "source": "Tropimed2026"
  },
  {
   "population": "pregnancy",
   "population_de": "Schwangerschaft",
   "applies_to": "inactivated_vaccines",
   "rule": "allowed",
   "condition": "",
   "note_de": "Totimpfstoffe unbedenklich",
   "source": "Tropimed2026"
  },
  {
   "population": "pregnancy",
   "population_de": "Schwangerschaft",
   "applies_to": "pertussis",
   "rule": "recommended",
   "condition": "jede Schwangerschaft",
   "note_de": "Tdap in JEDER Schwangerschaft (ab 28. SSW, früher bei Frühgeburtsrisiko)",
   "source": "RKI2026-Empfehlungen"
  },
  {
   "population": "pregnancy",
   "population_de": "Schwangerschaft",
   "applies_to": "influenza",
   "rule": "recommended",
   "condition": "ab 2. Trimenon (bei Grundleiden ab 1.)",
   "note_de": "Influenza-Totimpfstoff empfohlen",
   "source": "RKI2026-Empfehlungen"
  },
  {
   "population": "breastfeeding",
   "population_de": "Stillzeit",
   "applies_to": "live_vaccines",
   "rule": "allowed",
   "condition": "",
   "note_de": "I.d.R. möglich; Ausnahme Gelbfieber",
   "source": "Tropimed2026"
  },
  {
   "population": "breastfeeding",
   "population_de": "Stillzeit",
   "applies_to": "yellow_fever",
   "rule": "caution",
   "condition": "",
   "note_de": "Nur nach individueller Nutzen-Risiko-Abwägung (theoret. Übertragung über Muttermilch)",
   "source": "Tropimed2026"
  },
  {
   "population": "immunosuppression_high",
   "population_de": "Hochgradige Immunsuppression",
   "applies_to": "live_vaccines",
   "rule": "contraindicated",
   "condition": "",
   "note_de": "Kontraindiziert (unkontrollierte Virusreplikation). Falls möglich >=4 Wochen vor Therapiebeginn impfen",
   "source": "Tropimed2026"
  },
  {
   "population": "immunosuppression_high",
   "population_de": "Hochgradige Immunsuppression",
   "applies_to": "inactivated_vaccines",
   "rule": "allowed",
   "condition": "",
   "note_de": "Totimpfstoffe ungefährlich; Immunantwort ggf. reduziert -> ggf. höhere Dosis / mehr Booster / Titerkontrolle",
   "source": "Tropimed2026"
  },
  {
   "population": "immunodeficiency",
   "population_de": "Immundefizienz",
   "applies_to": "live_vaccines",
   "rule": "contraindicated",
   "condition": "",
   "note_de": "Kongenital/Neoplasien/Immunsuppressiva: Lebendimpfstoffe meiden",
   "source": "Tropimed2026"
  },
  {
   "population": "high_dose_steroids",
   "population_de": "Hochdosis-Kortikosteroide",
   "applies_to": "live_vaccines",
   "rule": "contraindicated",
   "condition": ">=20 mg Prednisolonäquivalent/Tag >=2 Wochen (Kinder >=2 mg/kg/Tag)",
   "note_de": "Lebendimpfstoffe kontraindiziert; Gelbfieber (Stamaril FI): >=20 mg oder >=2 mg/kg >=2 Wochen bzw. >=40 mg/Tag",
   "source": "Tropimed2026"
  },
  {
   "population": "immunosuppression_low",
   "population_de": "Niedriggradige Immunsuppression",
   "applies_to": "live_vaccines",
   "rule": "caution",
   "condition": "",
   "note_de": "I.d.R. möglich; wenn möglich >=4 Wochen vor Therapiebeginn",
   "source": "Tropimed2026"
  },
  {
   "population": "hiv_cd4_low",
   "population_de": "HIV mit CD4 <200/µl",
   "applies_to": "live_vaccines",
   "rule": "contraindicated",
   "condition": "CD4 <200/µl",
   "note_de": "Lebendimpfstoffe (MMR, Varizellen, Gelbfieber) kontraindiziert",
   "source": "Tropimed2026"
  },
  {
   "population": "hiv_cd4_ok",
   "population_de": "HIV mit CD4 >=200/µl",
   "applies_to": "mmr",
   "rule": "allowed",
   "condition": "CD4 >=200/µl",
   "note_de": "MMR möglich bei ausreichender CD4-Zahl",
   "source": "Tropimed2026"
  },
  {
   "population": "hiv_cd4_ok",
   "population_de": "HIV mit CD4 >=200/µl",
   "applies_to": "varicella",
   "rule": "allowed",
   "condition": "CD4 >=200/µl",
   "note_de": "Varizellen möglich bei ausreichender CD4-Zahl",
   "source": "Tropimed2026"
  },
  {
   "population": "hiv_cd4_ok",
   "population_de": "HIV mit CD4 >=200/µl",
   "applies_to": "yellow_fever",
   "rule": "caution",
   "condition": "CD4 >=200/µl",
   "note_de": "Gelbfieber bei CD4 >=200 möglich; Nutzen-Risiko abwägen, ggf. Titerkontrolle",
   "source": "Tropimed2026"
  },
  {
   "population": "hiv",
   "population_de": "HIV",
   "applies_to": "inactivated_vaccines",
   "rule": "allowed",
   "condition": "",
   "note_de": "Totimpfstoffe unbedenklich; Immunantwort ggf. reduziert",
   "source": "Tropimed2026"
  },
  {
   "population": "hiv",
   "population_de": "HIV",
   "applies_to": "mpox",
   "rule": "recommended",
   "condition": "CD4 >100/µl",
   "note_de": "Imvanex bei HIV mit CD4 >100 möglich; bei relevantem Risiko empfohlen",
   "source": "ChariteReisemed2025"
  },
  {
   "population": "asplenia",
   "population_de": "Asplenie",
   "applies_to": "meningococcal_acwy",
   "rule": "indicated",
   "condition": "",
   "note_de": "ACWY Grundimmunisierung + Auffrischung",
   "source": "RKI2026-Empfehlungen"
  },
  {
   "population": "asplenia",
   "population_de": "Asplenie",
   "applies_to": "meningococcal_b",
   "rule": "indicated",
   "condition": "",
   "note_de": "MenB Grundimmunisierung",
   "source": "RKI2026-Empfehlungen"
  },
  {
   "population": "asplenia",
   "population_de": "Asplenie",
   "applies_to": "pneumococcal_pcv20",
   "rule": "indicated",
   "condition": "",
   "note_de": "PCV20 + PPSV23",
   "source": "RKI2026-Empfehlungen"
  },
  {
   "population": "asplenia",
   "population_de": "Asplenie",
   "applies_to": "hib",
   "rule": "indicated",
   "condition": "",
   "note_de": "Hib bei Asplenie erwägen",
   "source": "RKI2026-Empfehlungen"
  },
  {
   "population": "age_60plus",
   "population_de": "Senioren >=60 J.",
   "applies_to": "influenza",
   "rule": "recommended",
   "condition": "",
   "note_de": "Standardimpfung ab 60 J. (Hochdosis Efluelda)",
   "source": "RKI2026-Impfkalender"
  },
  {
   "population": "age_60plus",
   "population_de": "Senioren >=60 J.",
   "applies_to": "zoster",
   "rule": "recommended",
   "condition": "",
   "note_de": "Herpes zoster (Shingrix) Standard ab 60 J.",
   "source": "RKI2026-Impfkalender"
  },
  {
   "population": "age_60plus",
   "population_de": "Senioren >=60 J.",
   "applies_to": "covid",
   "rule": "recommended",
   "condition": "",
   "note_de": "COVID-19 jährlich ab 60 J.",
   "source": "RKI2026-Impfkalender"
  },
  {
   "population": "age_60plus",
   "population_de": "Senioren >60 J.",
   "applies_to": "yellow_fever",
   "rule": "caution",
   "condition": "Erstimpfung >60 J.",
   "note_de": "Erhöhtes Risiko schwerer Nebenwirkungen bei YF-Erstimpfung >60 J.; strenge Indikation",
   "source": "Tropimed2026"
  },
  {
   "population": "age_75plus",
   "population_de": "Senioren >=75 J.",
   "applies_to": "pneumococcal_pcv20",
   "rule": "recommended",
   "condition": "",
   "note_de": "PCV20 Standard-Altersimpfung ab 75 J.",
   "source": "RKI2026-Impfkalender"
  },
  {
   "population": "age_75plus",
   "population_de": "Senioren >=75 J.",
   "applies_to": "rsv_adult",
   "rule": "recommended",
   "condition": "",
   "note_de": "RSV-Impfung Standard ab 75 J. (60-74 J. nach Indikation)",
   "source": "RKI2026-Impfkalender"
  },
  {
   "population": "infant",
   "population_de": "Säuglinge",
   "applies_to": "rotavirus",
   "rule": "recommended",
   "condition": "6-24/32 Wochen",
   "note_de": "Rotavirus-Schluckimpfung frühzeitig beginnen",
   "source": "RKI2026-Impfkalender"
  },
  {
   "population": "child",
   "population_de": "Kinder",
   "applies_to": "yellow_fever",
   "rule": "caution",
   "condition": "<9 Monate kontraindiziert",
   "note_de": "YF <9 Monate kontraindiziert (Enzephalitis-Risiko); 6-8 Mon nur in Ausnahmefällen",
   "source": "Tropimed2026"
  },
  {
   "population": "child",
   "population_de": "Kinder",
   "applies_to": "japanese_encephalitis",
   "rule": "allowed",
   "condition": "ab 2 Monate",
   "note_de": "Ixiaro ab 2 Mon (0,25 ml bei 2 M-<3 J.)",
   "source": "Tropimed2026"
  },
  {
   "population": "child",
   "population_de": "Kinder",
   "applies_to": "rabies",
   "rule": "recommended",
   "condition": "großzügige Indikation",
   "note_de": "Kinder großzügig impfen (erhöhtes Bissrisiko, unklare Expositionsangabe)",
   "source": "Tropimed2026"
  },
  {
   "population": "child",
   "population_de": "Kinder",
   "applies_to": "cholera",
   "rule": "allowed",
   "condition": "ab 2 J.",
   "note_de": "Dukoral ab 2 J. (2-6 J. 3 Dosen)",
   "source": "Tropimed2026"
  }
 ],
 "countries": {
  "AF": {
   "iso_a3": "AFG",
   "name": "Afghanistan",
   "region": "Asia",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "1",
   "mening_belt": ""
  },
  "AL": {
   "iso_a3": "ALB",
   "name": "Albania",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "DZ": {
   "iso_a3": "DZA",
   "name": "Algeria",
   "region": "Middle East & North Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "1|2",
   "mening_belt": ""
  },
  "AS": {
   "iso_a3": "ASM",
   "name": "American Samoa",
   "region": "Oceania",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "AD": {
   "iso_a3": "AND",
   "name": "Andorra",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "AO": {
   "iso_a3": "AGO",
   "name": "Angola",
   "region": "Africa",
   "who_region": "",
   "yf_cert": true,
   "polio_category": "2",
   "mening_belt": ""
  },
  "AI": {
   "iso_a3": "AIA",
   "name": "Anguilla",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "AG": {
   "iso_a3": "ATG",
   "name": "Antigua and Barbuda",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "AR": {
   "iso_a3": "ARG",
   "name": "Argentina",
   "region": "South America",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "AM": {
   "iso_a3": "ARM",
   "name": "Armenia",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "AW": {
   "iso_a3": "ABW",
   "name": "Aruba",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "AU": {
   "iso_a3": "AUS",
   "name": "Australia",
   "region": "Oceania",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "AT": {
   "iso_a3": "AUT",
   "name": "Austria",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "AZ": {
   "iso_a3": "AZE",
   "name": "Azerbaijan",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "BS": {
   "iso_a3": "BHS",
   "name": "Bahamas",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "BH": {
   "iso_a3": "BHR",
   "name": "Bahrain",
   "region": "Middle East & North Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "BD": {
   "iso_a3": "BGD",
   "name": "Bangladesh",
   "region": "Asia",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "BB": {
   "iso_a3": "BRB",
   "name": "Barbados",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "BY": {
   "iso_a3": "BLR",
   "name": "Belarus",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "BE": {
   "iso_a3": "BEL",
   "name": "Belgium",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "BZ": {
   "iso_a3": "BLZ",
   "name": "Belize",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "BJ": {
   "iso_a3": "BEN",
   "name": "Benin",
   "region": "Africa",
   "who_region": "",
   "yf_cert": true,
   "polio_category": "2",
   "mening_belt": "December–June"
  },
  "BM": {
   "iso_a3": "BMU",
   "name": "Bermuda",
   "region": "North America",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "BT": {
   "iso_a3": "BTN",
   "name": "Bhutan",
   "region": "Asia",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "BO": {
   "iso_a3": "BOL",
   "name": "Bolivia",
   "region": "South America",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "BQ": {
   "iso_a3": "BES",
   "name": "Bonaire, Sint Eustatius and Saba",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "BA": {
   "iso_a3": "BIH",
   "name": "Bosnia & Herzegovina",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "BW": {
   "iso_a3": "BWA",
   "name": "Botswana",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "BR": {
   "iso_a3": "BRA",
   "name": "Brazil",
   "region": "South America",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "BN": {
   "iso_a3": "BRN",
   "name": "Brunei",
   "region": "Asia",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "BG": {
   "iso_a3": "BGR",
   "name": "Bulgaria",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "BF": {
   "iso_a3": "BFA",
   "name": "Burkina Faso",
   "region": "Africa",
   "who_region": "",
   "yf_cert": true,
   "polio_category": "2",
   "mening_belt": "December–June"
  },
  "BI": {
   "iso_a3": "BDI",
   "name": "Burundi",
   "region": "Africa",
   "who_region": "",
   "yf_cert": true,
   "polio_category": "",
   "mening_belt": "December–June"
  },
  "KH": {
   "iso_a3": "KHM",
   "name": "Cambodia",
   "region": "Asia",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "CM": {
   "iso_a3": "CMR",
   "name": "Cameroon",
   "region": "Africa",
   "who_region": "",
   "yf_cert": true,
   "polio_category": "1|2",
   "mening_belt": "December–June"
  },
  "CA": {
   "iso_a3": "CAN",
   "name": "Canada",
   "region": "North America",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "CV": {
   "iso_a3": "CPV",
   "name": "Cape Verde",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "KY": {
   "iso_a3": "CYM",
   "name": "Cayman Islands",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "CF": {
   "iso_a3": "CAF",
   "name": "Central African Rep.",
   "region": "Africa",
   "who_region": "",
   "yf_cert": true,
   "polio_category": "2",
   "mening_belt": "December–June"
  },
  "TD": {
   "iso_a3": "TCD",
   "name": "Chad",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "1|2",
   "mening_belt": "December–June"
  },
  "CL": {
   "iso_a3": "CHL",
   "name": "Chile",
   "region": "South America",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "CN": {
   "iso_a3": "CHN",
   "name": "China",
   "region": "Asia",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "CX": {
   "iso_a3": "CXR",
   "name": "Christmas Island",
   "region": "Oceania",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "CC": {
   "iso_a3": "CCK",
   "name": "Cocos (Keeling) Islands",
   "region": "Oceania",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "CO": {
   "iso_a3": "COL",
   "name": "Colombia",
   "region": "South America",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "KM": {
   "iso_a3": "COM",
   "name": "Comoros",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "CG": {
   "iso_a3": "COG",
   "name": "Congo",
   "region": "Africa",
   "who_region": "",
   "yf_cert": true,
   "polio_category": "3",
   "mening_belt": "December–June"
  },
  "CK": {
   "iso_a3": "COK",
   "name": "Cook Islands",
   "region": "Oceania",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "CR": {
   "iso_a3": "CRI",
   "name": "Costa Rica",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "HR": {
   "iso_a3": "HRV",
   "name": "Croatia",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "CU": {
   "iso_a3": "CUB",
   "name": "Cuba",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "CW": {
   "iso_a3": "CUW",
   "name": "Curaçao",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "CY": {
   "iso_a3": "CYP",
   "name": "Cyprus",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "CZ": {
   "iso_a3": "CZE",
   "name": "Czechia",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "CI": {
   "iso_a3": "CIV",
   "name": "Côte d’Ivoire",
   "region": "Africa",
   "who_region": "",
   "yf_cert": true,
   "polio_category": "2",
   "mening_belt": "December–June"
  },
  "CD": {
   "iso_a3": "COD",
   "name": "DR Congo",
   "region": "Africa",
   "who_region": "",
   "yf_cert": true,
   "polio_category": "1|2",
   "mening_belt": "December–June"
  },
  "DK": {
   "iso_a3": "DNK",
   "name": "Denmark",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "DJ": {
   "iso_a3": "DJI",
   "name": "Djibouti",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "1|2",
   "mening_belt": ""
  },
  "DM": {
   "iso_a3": "DMA",
   "name": "Dominica",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "DO": {
   "iso_a3": "DOM",
   "name": "Dominican Republic",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "EC": {
   "iso_a3": "ECU",
   "name": "Ecuador",
   "region": "South America",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "EG": {
   "iso_a3": "EGY",
   "name": "Egypt",
   "region": "Middle East & North Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "3",
   "mening_belt": ""
  },
  "SV": {
   "iso_a3": "SLV",
   "name": "El Salvador",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "GQ": {
   "iso_a3": "GNQ",
   "name": "Equatorial Guinea",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "3",
   "mening_belt": "December–June"
  },
  "ER": {
   "iso_a3": "ERI",
   "name": "Eritrea",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": "December–June"
  },
  "EE": {
   "iso_a3": "EST",
   "name": "Estonia",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "SZ": {
   "iso_a3": "SWZ",
   "name": "Eswatini",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "ET": {
   "iso_a3": "ETH",
   "name": "Ethiopia",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "2",
   "mening_belt": "December–June"
  },
  "FK": {
   "iso_a3": "FLK",
   "name": "Falkland Islands (Malvinas)",
   "region": "South America",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "FO": {
   "iso_a3": "FRO",
   "name": "Faroe Islands",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "FJ": {
   "iso_a3": "FJI",
   "name": "Fiji",
   "region": "Oceania",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "FI": {
   "iso_a3": "FIN",
   "name": "Finland",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "3",
   "mening_belt": ""
  },
  "FR": {
   "iso_a3": "FRA",
   "name": "France",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "GF": {
   "iso_a3": "GUF",
   "name": "French Guiana",
   "region": "South America",
   "who_region": "",
   "yf_cert": true,
   "polio_category": "3",
   "mening_belt": ""
  },
  "PF": {
   "iso_a3": "PYF",
   "name": "French Polynesia",
   "region": "Oceania",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "GA": {
   "iso_a3": "GAB",
   "name": "Gabon",
   "region": "Africa",
   "who_region": "",
   "yf_cert": true,
   "polio_category": "",
   "mening_belt": ""
  },
  "GM": {
   "iso_a3": "GMB",
   "name": "Gambia",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "3",
   "mening_belt": "December–June"
  },
  "GE": {
   "iso_a3": "GEO",
   "name": "Georgia",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "DE": {
   "iso_a3": "DEU",
   "name": "Germany",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "1|2",
   "mening_belt": ""
  },
  "GH": {
   "iso_a3": "GHA",
   "name": "Ghana",
   "region": "Africa",
   "who_region": "",
   "yf_cert": true,
   "polio_category": "3",
   "mening_belt": "December–June"
  },
  "GI": {
   "iso_a3": "GIB",
   "name": "Gibraltar",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "GR": {
   "iso_a3": "GRC",
   "name": "Greece",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "GL": {
   "iso_a3": "GRL",
   "name": "Greenland",
   "region": "North America",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "GD": {
   "iso_a3": "GRD",
   "name": "Grenada",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "GP": {
   "iso_a3": "GLP",
   "name": "Guadeloupe",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "GU": {
   "iso_a3": "GUM",
   "name": "Guam",
   "region": "Oceania",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "GT": {
   "iso_a3": "GTM",
   "name": "Guatemala",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "GG": {
   "iso_a3": "GGY",
   "name": "Guernsey",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "GN": {
   "iso_a3": "GIN",
   "name": "Guinea",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "1|3",
   "mening_belt": "December–June"
  },
  "GW": {
   "iso_a3": "GNB",
   "name": "Guinea-Bissau",
   "region": "Africa",
   "who_region": "",
   "yf_cert": true,
   "polio_category": "",
   "mening_belt": "December–June"
  },
  "GY": {
   "iso_a3": "GUY",
   "name": "Guyana",
   "region": "South America",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "HT": {
   "iso_a3": "HTI",
   "name": "Haiti",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "unclear",
   "mening_belt": ""
  },
  "VA": {
   "iso_a3": "VAT",
   "name": "Holy See (Vatican City State)",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "HN": {
   "iso_a3": "HND",
   "name": "Honduras",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "HK": {
   "iso_a3": "HKG",
   "name": "Hong Kong SAR",
   "region": "Asia",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "HU": {
   "iso_a3": "HUN",
   "name": "Hungary",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "IS": {
   "iso_a3": "ISL",
   "name": "Iceland",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "IN": {
   "iso_a3": "IND",
   "name": "India",
   "region": "Asia",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "ID": {
   "iso_a3": "IDN",
   "name": "Indonesia",
   "region": "Asia",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "3",
   "mening_belt": ""
  },
  "IR": {
   "iso_a3": "IRN",
   "name": "Iran",
   "region": "Middle East & North Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "IQ": {
   "iso_a3": "IRQ",
   "name": "Iraq",
   "region": "Middle East & North Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "IE": {
   "iso_a3": "IRL",
   "name": "Ireland",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "IM": {
   "iso_a3": "IMN",
   "name": "Isle of Man",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "IL": {
   "iso_a3": "ISR",
   "name": "Israel",
   "region": "Middle East & North Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "1|2",
   "mening_belt": ""
  },
  "IT": {
   "iso_a3": "ITA",
   "name": "Italy",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "JM": {
   "iso_a3": "JAM",
   "name": "Jamaica",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "JP": {
   "iso_a3": "JPN",
   "name": "Japan",
   "region": "Asia",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "JE": {
   "iso_a3": "JEY",
   "name": "Jersey",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "JO": {
   "iso_a3": "JOR",
   "name": "Jordan",
   "region": "Middle East & North Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "KZ": {
   "iso_a3": "KAZ",
   "name": "Kazakhstan",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "KE": {
   "iso_a3": "KEN",
   "name": "Kenya",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "3",
   "mening_belt": "December–June"
  },
  "KI": {
   "iso_a3": "KIR",
   "name": "Kiribati",
   "region": "Oceania",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "XK": {
   "iso_a3": "XKX",
   "name": "Kosovo",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "KW": {
   "iso_a3": "KWT",
   "name": "Kuwait",
   "region": "Middle East & North Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "KG": {
   "iso_a3": "KGZ",
   "name": "Kyrgyzstan",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "LA": {
   "iso_a3": "LAO",
   "name": "Laos",
   "region": "Asia",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "1",
   "mening_belt": ""
  },
  "LV": {
   "iso_a3": "LVA",
   "name": "Latvia",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "LB": {
   "iso_a3": "LBN",
   "name": "Lebanon",
   "region": "Middle East & North Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "LS": {
   "iso_a3": "LSO",
   "name": "Lesotho",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "LR": {
   "iso_a3": "LBR",
   "name": "Liberia",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "3",
   "mening_belt": ""
  },
  "LY": {
   "iso_a3": "LBY",
   "name": "Libya",
   "region": "Middle East & North Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "LI": {
   "iso_a3": "LIE",
   "name": "Liechtenstein",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "LT": {
   "iso_a3": "LTU",
   "name": "Lithuania",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "LU": {
   "iso_a3": "LUX",
   "name": "Luxembourg",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "MO": {
   "iso_a3": "MAC",
   "name": "Macau SAR",
   "region": "Asia",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "MG": {
   "iso_a3": "MDG",
   "name": "Madagascar",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "MW": {
   "iso_a3": "MWI",
   "name": "Malawi",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "MY": {
   "iso_a3": "MYS",
   "name": "Malaysia",
   "region": "Asia",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "MV": {
   "iso_a3": "MDV",
   "name": "Maldives",
   "region": "Asia",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "ML": {
   "iso_a3": "MLI",
   "name": "Mali",
   "region": "Africa",
   "who_region": "",
   "yf_cert": true,
   "polio_category": "3",
   "mening_belt": "December–June"
  },
  "MT": {
   "iso_a3": "MLT",
   "name": "Malta",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "MH": {
   "iso_a3": "MHL",
   "name": "Marshall Islands",
   "region": "Oceania",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "MQ": {
   "iso_a3": "MTQ",
   "name": "Martinique",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "MR": {
   "iso_a3": "MRT",
   "name": "Mauritania",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "3",
   "mening_belt": "December–June"
  },
  "MU": {
   "iso_a3": "MUS",
   "name": "Mauritius",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "YT": {
   "iso_a3": "MYT",
   "name": "Mayotte",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "MX": {
   "iso_a3": "MEX",
   "name": "Mexico",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "FM": {
   "iso_a3": "FSM",
   "name": "Micronesia",
   "region": "Oceania",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "MD": {
   "iso_a3": "MDA",
   "name": "Moldova",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "MC": {
   "iso_a3": "MCO",
   "name": "Monaco",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "MN": {
   "iso_a3": "MNG",
   "name": "Mongolia",
   "region": "Asia",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "ME": {
   "iso_a3": "MNE",
   "name": "Montenegro",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "MS": {
   "iso_a3": "MSR",
   "name": "Montserrat",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "MA": {
   "iso_a3": "MAR",
   "name": "Morocco",
   "region": "Middle East & North Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "MZ": {
   "iso_a3": "MOZ",
   "name": "Mozambique",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "3",
   "mening_belt": ""
  },
  "MM": {
   "iso_a3": "MMR",
   "name": "Myanmar",
   "region": "Asia",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "NA": {
   "iso_a3": "NAM",
   "name": "Namibia",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "2",
   "mening_belt": ""
  },
  "NR": {
   "iso_a3": "NRU",
   "name": "Nauru",
   "region": "Oceania",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "NP": {
   "iso_a3": "NPL",
   "name": "Nepal",
   "region": "Asia",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "NL": {
   "iso_a3": "NLD",
   "name": "Netherlands",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "NC": {
   "iso_a3": "NCL",
   "name": "New Caledonia",
   "region": "Oceania",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "NZ": {
   "iso_a3": "NZL",
   "name": "New Zealand",
   "region": "Oceania",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "NI": {
   "iso_a3": "NIC",
   "name": "Nicaragua",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "NE": {
   "iso_a3": "NER",
   "name": "Niger",
   "region": "Africa",
   "who_region": "",
   "yf_cert": true,
   "polio_category": "2",
   "mening_belt": "December–June"
  },
  "NG": {
   "iso_a3": "NGA",
   "name": "Nigeria",
   "region": "Africa",
   "who_region": "",
   "yf_cert": true,
   "polio_category": "2",
   "mening_belt": "December–June"
  },
  "NU": {
   "iso_a3": "NIU",
   "name": "Niue",
   "region": "Oceania",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "NF": {
   "iso_a3": "NFK",
   "name": "Norfolk Island",
   "region": "Oceania",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "KP": {
   "iso_a3": "PRK",
   "name": "North Korea",
   "region": "Asia",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "MK": {
   "iso_a3": "MKD",
   "name": "North Macedonia",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "MP": {
   "iso_a3": "MNP",
   "name": "Northern Mariana Islands",
   "region": "Oceania",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "NO": {
   "iso_a3": "NOR",
   "name": "Norway",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "OM": {
   "iso_a3": "OMN",
   "name": "Oman",
   "region": "Middle East & North Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "PK": {
   "iso_a3": "PAK",
   "name": "Pakistan",
   "region": "Asia",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "1",
   "mening_belt": ""
  },
  "PW": {
   "iso_a3": "PLW",
   "name": "Palau",
   "region": "Oceania",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "PS": {
   "iso_a3": "PSE",
   "name": "Palestine",
   "region": "Middle East & North Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "2",
   "mening_belt": ""
  },
  "PA": {
   "iso_a3": "PAN",
   "name": "Panama",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "PG": {
   "iso_a3": "PNG",
   "name": "Papua New Guinea",
   "region": "Oceania",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "2",
   "mening_belt": "December–June"
  },
  "PY": {
   "iso_a3": "PRY",
   "name": "Paraguay",
   "region": "South America",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "PE": {
   "iso_a3": "PER",
   "name": "Peru",
   "region": "South America",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "PH": {
   "iso_a3": "PHL",
   "name": "Philippines",
   "region": "Asia",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "PN": {
   "iso_a3": "PCN",
   "name": "Pitcairn",
   "region": "Oceania",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "PL": {
   "iso_a3": "POL",
   "name": "Poland",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "2",
   "mening_belt": ""
  },
  "PT": {
   "iso_a3": "PRT",
   "name": "Portugal",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "PR": {
   "iso_a3": "PRI",
   "name": "Puerto Rico",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "QA": {
   "iso_a3": "QAT",
   "name": "Qatar",
   "region": "Middle East & North Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "RO": {
   "iso_a3": "ROU",
   "name": "Romania",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "RU": {
   "iso_a3": "RUS",
   "name": "Russia",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "RW": {
   "iso_a3": "RWA",
   "name": "Rwanda",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": "December–June"
  },
  "RE": {
   "iso_a3": "REU",
   "name": "Réunion",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "BL": {
   "iso_a3": "BLM",
   "name": "Saint Barthélemy",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "SH": {
   "iso_a3": "SHN",
   "name": "Saint Helena, Ascension and Tristan da Cunha",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "KN": {
   "iso_a3": "KNA",
   "name": "Saint Kitts and Nevis",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "LC": {
   "iso_a3": "LCA",
   "name": "Saint Lucia",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "MF": {
   "iso_a3": "MAF",
   "name": "Saint Martin (French part)",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "PM": {
   "iso_a3": "SPM",
   "name": "Saint Pierre and Miquelon",
   "region": "North America",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "VC": {
   "iso_a3": "VCT",
   "name": "Saint Vincent and the Grenadines",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "WS": {
   "iso_a3": "WSM",
   "name": "Samoa",
   "region": "Oceania",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "SM": {
   "iso_a3": "SMR",
   "name": "San Marino",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "SA": {
   "iso_a3": "SAU",
   "name": "Saudi Arabia",
   "region": "Middle East & North Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "SN": {
   "iso_a3": "SEN",
   "name": "Senegal",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "2",
   "mening_belt": "December–June"
  },
  "RS": {
   "iso_a3": "SRB",
   "name": "Serbia",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "SC": {
   "iso_a3": "SYC",
   "name": "Seychelles",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "SL": {
   "iso_a3": "SLE",
   "name": "Sierra Leone",
   "region": "Africa",
   "who_region": "",
   "yf_cert": true,
   "polio_category": "3",
   "mening_belt": ""
  },
  "SG": {
   "iso_a3": "SGP",
   "name": "Singapore",
   "region": "Asia",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "SX": {
   "iso_a3": "SXM",
   "name": "Sint Maarten (Dutch part)",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "SK": {
   "iso_a3": "SVK",
   "name": "Slovakia",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "SI": {
   "iso_a3": "SVN",
   "name": "Slovenia",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "SB": {
   "iso_a3": "SLB",
   "name": "Solomon Islands",
   "region": "Oceania",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "SO": {
   "iso_a3": "SOM",
   "name": "Somalia",
   "region": "Africa",
   "who_region": "",
   "yf_cert": true,
   "polio_category": "2",
   "mening_belt": "December–June"
  },
  "ZA": {
   "iso_a3": "ZAF",
   "name": "South Africa",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "KR": {
   "iso_a3": "KOR",
   "name": "South Korea",
   "region": "Asia",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "SS": {
   "iso_a3": "SSD",
   "name": "South Sudan",
   "region": "Africa",
   "who_region": "",
   "yf_cert": true,
   "polio_category": "2",
   "mening_belt": "December–June"
  },
  "ES": {
   "iso_a3": "ESP",
   "name": "Spain",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "3",
   "mening_belt": ""
  },
  "LK": {
   "iso_a3": "LKA",
   "name": "Sri Lanka",
   "region": "Asia",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "SD": {
   "iso_a3": "SDN",
   "name": "Sudan",
   "region": "Africa",
   "who_region": "",
   "yf_cert": true,
   "polio_category": "2",
   "mening_belt": "December–June"
  },
  "SR": {
   "iso_a3": "SUR",
   "name": "Suriname",
   "region": "South America",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "SJ": {
   "iso_a3": "SJM",
   "name": "Svalbard and Jan Mayen",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "SE": {
   "iso_a3": "SWE",
   "name": "Sweden",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "CH": {
   "iso_a3": "CHE",
   "name": "Switzerland",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "SY": {
   "iso_a3": "SYR",
   "name": "Syria",
   "region": "Middle East & North Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "unclear",
   "mening_belt": ""
  },
  "ST": {
   "iso_a3": "STP",
   "name": "São Tomé & Príncipe",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "TW": {
   "iso_a3": "TWN",
   "name": "Taiwan",
   "region": "Asia",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "TJ": {
   "iso_a3": "TJK",
   "name": "Tajikistan",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "TZ": {
   "iso_a3": "TZA",
   "name": "Tanzania",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "2",
   "mening_belt": "December–June"
  },
  "TH": {
   "iso_a3": "THA",
   "name": "Thailand",
   "region": "Asia",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "TL": {
   "iso_a3": "TLS",
   "name": "Timor-Leste",
   "region": "Asia",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "TG": {
   "iso_a3": "TGO",
   "name": "Togo",
   "region": "Africa",
   "who_region": "",
   "yf_cert": true,
   "polio_category": "",
   "mening_belt": "December–June"
  },
  "TK": {
   "iso_a3": "TKL",
   "name": "Tokelau",
   "region": "Oceania",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "TO": {
   "iso_a3": "TON",
   "name": "Tonga",
   "region": "Oceania",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "TT": {
   "iso_a3": "TTO",
   "name": "Trinidad & Tobago",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "TN": {
   "iso_a3": "TUN",
   "name": "Tunisia",
   "region": "Middle East & North Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "TR": {
   "iso_a3": "TUR",
   "name": "Turkey",
   "region": "Middle East & North Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "TM": {
   "iso_a3": "TKM",
   "name": "Turkmenistan",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "TC": {
   "iso_a3": "TCA",
   "name": "Turks and Caicos Islands",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "TV": {
   "iso_a3": "TUV",
   "name": "Tuvalu",
   "region": "Oceania",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "VI": {
   "iso_a3": "VIR",
   "name": "US Virgin Islands",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "UG": {
   "iso_a3": "UGA",
   "name": "Uganda",
   "region": "Africa",
   "who_region": "",
   "yf_cert": true,
   "polio_category": "3",
   "mening_belt": "December–June"
  },
  "UA": {
   "iso_a3": "UKR",
   "name": "Ukraine",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "AE": {
   "iso_a3": "ARE",
   "name": "United Arab Emirates",
   "region": "Middle East & North Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "GB": {
   "iso_a3": "GBR",
   "name": "United Kingdom",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "2",
   "mening_belt": ""
  },
  "US": {
   "iso_a3": "USA",
   "name": "United States",
   "region": "North America",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "UY": {
   "iso_a3": "URY",
   "name": "Uruguay",
   "region": "South America",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "UZ": {
   "iso_a3": "UZB",
   "name": "Uzbekistan",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "VU": {
   "iso_a3": "VUT",
   "name": "Vanuatu",
   "region": "Oceania",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "VE": {
   "iso_a3": "VEN",
   "name": "Venezuela",
   "region": "South America",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "VN": {
   "iso_a3": "VNM",
   "name": "Vietnam",
   "region": "Asia",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "VG": {
   "iso_a3": "VGB",
   "name": "Virgin Islands, British",
   "region": "Central America & Caribbean",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "WF": {
   "iso_a3": "WLF",
   "name": "Wallis and Futuna",
   "region": "Oceania",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "EH": {
   "iso_a3": "ESH",
   "name": "Western Sahara",
   "region": "Middle East & North Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "YE": {
   "iso_a3": "YEM",
   "name": "Yemen",
   "region": "Middle East & North Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "2",
   "mening_belt": ""
  },
  "ZM": {
   "iso_a3": "ZMB",
   "name": "Zambia",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  },
  "ZW": {
   "iso_a3": "ZWE",
   "name": "Zimbabwe",
   "region": "Africa",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "3",
   "mening_belt": ""
  },
  "AX": {
   "iso_a3": "ALA",
   "name": "Åland Islands",
   "region": "Europe",
   "who_region": "",
   "yf_cert": false,
   "polio_category": "",
   "mening_belt": ""
  }
 },
 "countryDisease": {
  "AF": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "mandatory",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Impfnachweispflicht (WHO). ≤4 Wochen: Auffrischimpfung (>10 Jahre). >4 Wochen: Impfung 4 Wochen bis 12 Monate vor Ausreise."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "AL": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "European",
    "stay_days": null,
    "schedule_note": "TBE present in defined foci; vaccinate only for prolonged rural/outdoor exposure."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "DZ": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "mandatory",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Impfnachweispflicht (WHO). ≤4 Wochen: Auffrischimpfung (>10 Jahre). >4 Wochen: Impfung 4 Wochen bis 12 Monate vor Ausreise."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "AS": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "AD": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "AO": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": "≤4 Wochen: Auffrischimpfung (>10 Jahre). >4 Wochen: Impfung 4 Wochen bis 12 Monate vor Ausreise."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 30,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "AI": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "AG": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "AR": {
   "chikungunya": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "consider",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 180,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "AM": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "AW": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "AU": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 180,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "AT": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "European",
    "stay_days": null,
    "schedule_note": "TBE endemic; vaccinate travellers to risk areas."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "AZ": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "BS": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "BH": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "BD": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "BB": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "BY": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "European",
    "stay_days": null,
    "schedule_note": "TBE endemic; vaccinate travellers to risk areas."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "BE": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "European",
    "stay_days": null,
    "schedule_note": "TBE present in defined foci; vaccinate only for prolonged rural/outdoor exposure."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "BZ": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "BJ": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "≤4 Wochen: Auffrischimpfung (>10 Jahre). >4 Wochen: Impfung 4 Wochen bis 12 Monate vor Ausreise."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "BM": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "BT": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "BO": {
   "chikungunya": {
    "risk": "high",
    "endemic": true,
    "outbreak": true,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 180,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "BQ": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "BA": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "unknown",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "European",
    "stay_days": null,
    "schedule_note": "TBE present in defined foci; vaccinate only for prolonged rural/outdoor exposure."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "BW": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 30,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "BR": {
   "chikungunya": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "consider",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 180,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "BN": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "BG": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "European",
    "stay_days": null,
    "schedule_note": "TBE endemic; vaccinate travellers to risk areas."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "BF": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "≤4 Wochen: Auffrischimpfung (>10 Jahre). >4 Wochen: Impfung 4 Wochen bis 12 Monate vor Ausreise."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "BI": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "KH": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 30,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "CM": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "mandatory",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Impfnachweispflicht (WHO). ≤4 Wochen: Auffrischimpfung (>10 Jahre). >4 Wochen: Impfung 4 Wochen bis 12 Monate vor Ausreise."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 180,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "CA": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "CV": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "KY": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "CF": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "≤4 Wochen: Auffrischimpfung (>10 Jahre). >4 Wochen: Impfung 4 Wochen bis 12 Monate vor Ausreise."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "unknown",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "TD": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "mandatory",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Impfnachweispflicht (WHO). ≤4 Wochen: Auffrischimpfung (>10 Jahre). >4 Wochen: Impfung 4 Wochen bis 12 Monate vor Ausreise."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "CL": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "CN": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "Far-Eastern",
    "stay_days": null,
    "schedule_note": "TBE present in defined foci; vaccinate only for prolonged rural/outdoor exposure."
   },
   "japanese_encephalitis": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "CX": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "CC": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "CO": {
   "chikungunya": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "consider",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 180,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "KM": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "CG": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Auffrischimpfung (>10 Jahre) unabhängig von Reisedauer."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "CK": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "CR": {
   "chikungunya": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "HR": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "European",
    "stay_days": null,
    "schedule_note": "TBE endemic; vaccinate travellers to risk areas."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "CU": {
   "chikungunya": {
    "risk": "high",
    "endemic": true,
    "outbreak": true,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "CW": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "CY": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "CZ": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "European",
    "stay_days": null,
    "schedule_note": "TBE endemic; vaccinate travellers to risk areas."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "CI": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "≤4 Wochen: Auffrischimpfung (>10 Jahre). >4 Wochen: Impfung 4 Wochen bis 12 Monate vor Ausreise."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "CD": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "mandatory",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "mandatory",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": "Impfnachweispflicht (WHO). ≤4 Wochen: Auffrischimpfung (>10 Jahre). >4 Wochen: Impfung 4 Wochen bis 12 Monate vor Ausreise."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 30,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "DK": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "European",
    "stay_days": null,
    "schedule_note": "TBE present in defined foci; vaccinate only for prolonged rural/outdoor exposure."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "DJ": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "mandatory",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Impfnachweispflicht (WHO). ≤4 Wochen: Auffrischimpfung (>10 Jahre). >4 Wochen: Impfung 4 Wochen bis 12 Monate vor Ausreise."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "DM": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "DO": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "EC": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 180,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "EG": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Auffrischimpfung (>10 Jahre) unabhängig von Reisedauer."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "SV": {
   "chikungunya": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "GQ": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Auffrischimpfung (>10 Jahre) unabhängig von Reisedauer."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "ER": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "EE": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "European; Siberian",
    "stay_days": null,
    "schedule_note": "TBE endemic; vaccinate travellers to risk areas."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "SZ": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "ET": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "≤4 Wochen: Auffrischimpfung (>10 Jahre). >4 Wochen: Impfung 4 Wochen bis 12 Monate vor Ausreise."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 180,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "FK": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "FO": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "FJ": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "FI": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "European; Siberian",
    "stay_days": null,
    "schedule_note": "TBE endemic; vaccinate travellers to risk areas."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "FR": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "European",
    "stay_days": null,
    "schedule_note": "TBE present in defined foci; vaccinate only for prolonged rural/outdoor exposure."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "GF": {
   "chikungunya": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "consider",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Auffrischimpfung (>10 Jahre) unabhängig von Reisedauer."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "PF": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "GA": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "GM": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Auffrischimpfung (>10 Jahre) unabhängig von Reisedauer."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "GE": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "DE": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "European",
    "stay_days": null,
    "schedule_note": "TBE endemic; vaccinate travellers to risk areas."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "GH": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "mandatory",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Impfnachweispflicht (WHO). ≤4 Wochen: Auffrischimpfung (>10 Jahre). >4 Wochen: Impfung 4 Wochen bis 12 Monate vor Ausreise."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "GI": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "GR": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "European",
    "stay_days": null,
    "schedule_note": "TBE present in defined foci; vaccinate only for prolonged rural/outdoor exposure."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "GL": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "GD": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "GP": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "GU": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "GT": {
   "chikungunya": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "GG": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "unknown",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "GN": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "mandatory",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Impfnachweispflicht (WHO). ≤4 Wochen: Auffrischimpfung (>10 Jahre). >4 Wochen: Impfung 4 Wochen bis 12 Monate vor Ausreise."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "GW": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "GY": {
   "chikungunya": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "HT": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Auffrischimpfung (>10 Jahre) unabhängig von Reisedauer."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "VA": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "HN": {
   "chikungunya": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "HK": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "HU": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "European",
    "stay_days": null,
    "schedule_note": "TBE endemic; vaccinate travellers to risk areas."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "IS": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "IN": {
   "chikungunya": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "consider",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "consider",
    "tbe_subtype": "",
    "stay_days": 180,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "ID": {
   "chikungunya": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "consider",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Auffrischimpfung (>10 Jahre) unabhängig von Reisedauer."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 180,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "IR": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 30,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "IQ": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "IE": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "IM": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "IL": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "mandatory",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Impfnachweispflicht (WHO). ≤4 Wochen: Auffrischimpfung (>10 Jahre). >4 Wochen: Impfung 4 Wochen bis 12 Monate vor Ausreise."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "IT": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "European",
    "stay_days": null,
    "schedule_note": "TBE present in defined foci; vaccinate only for prolonged rural/outdoor exposure."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "JM": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "JP": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "Far-Eastern",
    "stay_days": null,
    "schedule_note": "TBE present in defined foci; vaccinate only for prolonged rural/outdoor exposure."
   },
   "japanese_encephalitis": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "JE": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "unknown",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "JO": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "KZ": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 30,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "Siberian",
    "stay_days": null,
    "schedule_note": "TBE endemic; vaccinate travellers to risk areas."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "KE": {
   "chikungunya": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "consider",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Auffrischimpfung (>10 Jahre) unabhängig von Reisedauer."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 30,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "KI": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "XK": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "KW": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "KG": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "Siberian",
    "stay_days": null,
    "schedule_note": "TBE present in defined foci; vaccinate only for prolonged rural/outdoor exposure."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "LA": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "mandatory",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Impfnachweispflicht (WHO). ≤4 Wochen: Auffrischimpfung (>10 Jahre). >4 Wochen: Impfung 4 Wochen bis 12 Monate vor Ausreise."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "LV": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "European; Siberian",
    "stay_days": null,
    "schedule_note": "TBE endemic; vaccinate travellers to risk areas."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "LB": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "LS": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "LR": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Auffrischimpfung (>10 Jahre) unabhängig von Reisedauer."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "LY": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "LI": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "European",
    "stay_days": null,
    "schedule_note": "TBE present in defined foci; vaccinate only for prolonged rural/outdoor exposure."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "LT": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "European; Siberian",
    "stay_days": null,
    "schedule_note": "TBE endemic; vaccinate travellers to risk areas."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "LU": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "European",
    "stay_days": null,
    "schedule_note": "TBE present in defined foci; vaccinate only for prolonged rural/outdoor exposure."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "MO": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "MG": {
   "chikungunya": {
    "risk": "high",
    "endemic": true,
    "outbreak": true,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "MW": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "MY": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "MV": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "ML": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Auffrischimpfung (>10 Jahre) unabhängig von Reisedauer."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 180,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "MT": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "MH": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "MQ": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "MR": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Auffrischimpfung (>10 Jahre) unabhängig von Reisedauer."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "MU": {
   "chikungunya": {
    "risk": "high",
    "endemic": true,
    "outbreak": true,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "YT": {
   "chikungunya": {
    "risk": "high",
    "endemic": true,
    "outbreak": true,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "MX": {
   "chikungunya": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "consider",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 180,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "FM": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "MD": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "European",
    "stay_days": null,
    "schedule_note": "TBE present in defined foci; vaccinate only for prolonged rural/outdoor exposure."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "MC": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "MN": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "Siberian",
    "stay_days": null,
    "schedule_note": "TBE endemic; vaccinate travellers to risk areas."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "ME": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "European",
    "stay_days": null,
    "schedule_note": "TBE present in defined foci; vaccinate only for prolonged rural/outdoor exposure."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "MS": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "MA": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 180,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "MZ": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Auffrischimpfung (>10 Jahre) unabhängig von Reisedauer."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "MM": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "NA": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "≤4 Wochen: Auffrischimpfung (>10 Jahre). >4 Wochen: Impfung 4 Wochen bis 12 Monate vor Ausreise."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 180,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "NR": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "NP": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "NL": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "European",
    "stay_days": null,
    "schedule_note": "TBE present in defined foci; vaccinate only for prolonged rural/outdoor exposure."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "NC": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "NZ": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "NI": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 180,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "NE": {
   "chikungunya": {
    "risk": "unknown",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "≤4 Wochen: Auffrischimpfung (>10 Jahre). >4 Wochen: Impfung 4 Wochen bis 12 Monate vor Ausreise."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "NG": {
   "chikungunya": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "consider",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "≤4 Wochen: Auffrischimpfung (>10 Jahre). >4 Wochen: Impfung 4 Wochen bis 12 Monate vor Ausreise."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 30,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "NU": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "NF": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "KP": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "MK": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "European",
    "stay_days": null,
    "schedule_note": "TBE present in defined foci; vaccinate only for prolonged rural/outdoor exposure."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "MP": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "NO": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "European",
    "stay_days": null,
    "schedule_note": "TBE present in defined foci; vaccinate only for prolonged rural/outdoor exposure."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "OM": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "PK": {
   "chikungunya": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "consider",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "mandatory",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Impfnachweispflicht (WHO). ≤4 Wochen: Auffrischimpfung (>10 Jahre). >4 Wochen: Impfung 4 Wochen bis 12 Monate vor Ausreise."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "PW": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "PS": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "≤4 Wochen: Auffrischimpfung (>10 Jahre). >4 Wochen: Impfung 4 Wochen bis 12 Monate vor Ausreise."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "PA": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "PG": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "≤4 Wochen: Auffrischimpfung (>10 Jahre). >4 Wochen: Impfung 4 Wochen bis 12 Monate vor Ausreise."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "PY": {
   "chikungunya": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 180,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "PE": {
   "chikungunya": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "consider",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 180,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "PH": {
   "chikungunya": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "consider",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "PN": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "unknown",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "PL": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "European",
    "stay_days": null,
    "schedule_note": "TBE endemic; vaccinate travellers to risk areas."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "PT": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "PR": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "QA": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "RO": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "European",
    "stay_days": null,
    "schedule_note": "TBE endemic; vaccinate travellers to risk areas."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "RU": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 180,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "European; Siberian; Far-Eastern",
    "stay_days": null,
    "schedule_note": "TBE endemic; vaccinate travellers to risk areas."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "RW": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "RE": {
   "chikungunya": {
    "risk": "high",
    "endemic": true,
    "outbreak": true,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "unknown",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "BL": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "unknown",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "SH": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "KN": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "LC": {
   "chikungunya": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "MF": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "PM": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "VC": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "WS": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "SM": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "SA": {
   "chikungunya": {
    "risk": "unknown",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Risk groups (in der südlichen Hälfte des Landes)"
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Recommended. fehlende Grundimmunisierung nachholen bzw. komplettieren; Polio-Impfbescheinigung erforderlich bei Einreise aus Risikoländern (4 Wo. bis 12 Mon. Aufenthalt)."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Risk groups (Impfung allen männlichen Pilgern wegen Kopfrasur empfohlen)"
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Risk groups (hohes Individualrisiko und Aufenthalt > 30 Tage)"
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "mandatory",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Mandatory (Pflichtimpfung für alle Reisenden ab 2 Jahren)"
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "SN": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "≤4 Wochen: Auffrischimpfung (>10 Jahre). >4 Wochen: Impfung 4 Wochen bis 12 Monate vor Ausreise."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "RS": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "European",
    "stay_days": null,
    "schedule_note": "TBE endemic; vaccinate travellers to risk areas."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "SC": {
   "chikungunya": {
    "risk": "high",
    "endemic": true,
    "outbreak": true,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "SL": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Auffrischimpfung (>10 Jahre) unabhängig von Reisedauer."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "SG": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "SX": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "SK": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "European",
    "stay_days": null,
    "schedule_note": "TBE endemic; vaccinate travellers to risk areas."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "SI": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "European",
    "stay_days": null,
    "schedule_note": "TBE endemic; vaccinate travellers to risk areas."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "SB": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "SO": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "≤4 Wochen: Auffrischimpfung (>10 Jahre). >4 Wochen: Impfung 4 Wochen bis 12 Monate vor Ausreise."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "ZA": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 180,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "KR": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "Far-Eastern",
    "stay_days": null,
    "schedule_note": "TBE present in defined foci; vaccinate only for prolonged rural/outdoor exposure."
   },
   "japanese_encephalitis": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "SS": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "≤4 Wochen: Auffrischimpfung (>10 Jahre). >4 Wochen: Impfung 4 Wochen bis 12 Monate vor Ausreise."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "ES": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "LK": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "SD": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "≤4 Wochen: Auffrischimpfung (>10 Jahre). >4 Wochen: Impfung 4 Wochen bis 12 Monate vor Ausreise."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "SR": {
   "chikungunya": {
    "risk": "high",
    "endemic": true,
    "outbreak": true,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "SJ": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "unknown",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "SE": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "European",
    "stay_days": null,
    "schedule_note": "TBE endemic; vaccinate travellers to risk areas."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "CH": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "European",
    "stay_days": null,
    "schedule_note": "TBE endemic; vaccinate travellers to risk areas."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "SY": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Auffrischimpfung (>10 Jahre) unabhängig von Reisedauer."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "ST": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "TW": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "TJ": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "TZ": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": "≤4 Wochen: Auffrischimpfung (>10 Jahre). >4 Wochen: Impfung 4 Wochen bis 12 Monate vor Ausreise."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 30,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "TH": {
   "chikungunya": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "consider",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 30,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "TL": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "TG": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "TK": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "TO": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "TT": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "TN": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 30,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "TR": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "TM": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "TC": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "TV": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "VI": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "UG": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Auffrischimpfung (>10 Jahre) unabhängig von Reisedauer."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "UA": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "European",
    "stay_days": null,
    "schedule_note": "TBE endemic; vaccinate travellers to risk areas."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "AE": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "GB": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "European",
    "stay_days": null,
    "schedule_note": "TBE present in defined foci; vaccinate only for prolonged rural/outdoor exposure."
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "US": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 180,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "UY": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 180,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "UZ": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "VU": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "VE": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 180,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "VN": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "VG": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "WF": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "EH": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "YE": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "≤4 Wochen: Auffrischimpfung (>10 Jahre). >4 Wochen: Impfung 4 Wochen bis 12 Monate vor Ausreise."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "ZM": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 28,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": 30,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "ZW": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": "Auffrischimpfung (>10 Jahre) unabhängig von Reisedauer."
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "moderate",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "high",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "risk_groups",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  },
  "AX": {
   "chikungunya": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "dengue": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "yellow_fever": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tetanus": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "diphtheria": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "polio": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "measles": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_a": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "recommended",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "hepatitis_b": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "typhoid": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "rabies": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "unknown",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "meningococcal": {
    "risk": "low",
    "endemic": true,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "tbe": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "japanese_encephalitis": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   },
   "cholera": {
    "risk": "none",
    "endemic": false,
    "outbreak": false,
    "recommendation": "not_indicated",
    "tbe_subtype": "",
    "stay_days": null,
    "schedule_note": ""
   }
  }
 },
 "stiko": [
  {
   "vaccine": "Rotavirus",
   "code": "rotavirus",
   "type": "standard",
   "group": "age_infant",
   "age_from_m": 1.5,
   "age_to_m": 8,
   "schedule": "2 Dosen (Rotarix) bzw. 3 Dosen (RotaTeq), Beginn ab 6 Wo, Abschluss bis 24/32 Wo",
   "booster_years": null,
   "live": true,
   "note": "Schluckimpfung; frühzeitig beginnen"
  },
  {
   "vaccine": "Tetanus",
   "code": "tetanus",
   "type": "standard",
   "group": "all",
   "age_from_m": 2,
   "age_to_m": null,
   "schedule": "Grundimmunisierung 2+1 (2/4/11 Mon)",
   "booster_years": 10,
   "live": false,
   "note": "Auffrischung alle 10 Jahre (Td)"
  },
  {
   "vaccine": "Diphtherie",
   "code": "diphtheria",
   "type": "standard",
   "group": "all",
   "age_from_m": 2,
   "age_to_m": null,
   "schedule": "Grundimmunisierung 2+1 (2/4/11 Mon)",
   "booster_years": 10,
   "live": false,
   "note": "Kombiniert mit Tetanus (Td) auffrischen"
  },
  {
   "vaccine": "Pertussis",
   "code": "pertussis",
   "type": "standard",
   "group": "all",
   "age_from_m": 2,
   "age_to_m": null,
   "schedule": "Grundimmunisierung 2+1; Auffrischung Vorschulalter + 9–16 J",
   "booster_years": null,
   "live": false,
   "note": "1× als Erwachsener (Tdap); zusätzlich in JEDER Schwangerschaft"
  },
  {
   "vaccine": "Haemophilus influenzae b",
   "code": "hib",
   "type": "standard",
   "group": "age_infant",
   "age_from_m": 2,
   "age_to_m": null,
   "schedule": "2+1 (bei Reifgeborenen)",
   "booster_years": null,
   "live": false,
   "note": "Frühgeborene 3+1"
  },
  {
   "vaccine": "Poliomyelitis",
   "code": "polio",
   "type": "standard",
   "group": "all",
   "age_from_m": 2,
   "age_to_m": null,
   "schedule": "Grundimmunisierung 2+1; Auffrischung 9–16 J",
   "booster_years": null,
   "live": false,
   "note": "Weitere Auffrischung nur bei Indikation/Reise"
  },
  {
   "vaccine": "Hepatitis B",
   "code": "hepatitis_b",
   "type": "standard",
   "group": "age_infant",
   "age_from_m": 2,
   "age_to_m": null,
   "schedule": "2+1 (hexavalent)",
   "booster_years": null,
   "live": false,
   "note": "Titerkontrolle bei Risikogruppen"
  },
  {
   "vaccine": "Pneumokokken (Konjugat)",
   "code": "pneumococcal_conjugate",
   "type": "standard",
   "group": "age_infant",
   "age_from_m": 2,
   "age_to_m": null,
   "schedule": "2+1 (Reifgeborene)",
   "booster_years": null,
   "live": false,
   "note": "PCV; Frühgeborene 3+1"
  },
  {
   "vaccine": "Meningokokken B",
   "code": "meningococcal_b",
   "type": "standard",
   "group": "age_infant",
   "age_from_m": 2,
   "age_to_m": 23,
   "schedule": "Säuglinge 2+1 (2/4/11 Mon); ab 24 Mon 2 Dosen",
   "booster_years": null,
   "live": false,
   "note": "STIKO-Standard für Säuglinge"
  },
  {
   "vaccine": "Meningokokken ACWY",
   "code": "meningococcal_acwy",
   "type": "standard",
   "group": "age_9_14",
   "age_from_m": 144,
   "age_to_m": 168,
   "schedule": "1 Dosis mit 12–14 J (J1)",
   "booster_years": null,
   "live": false,
   "note": "Ersetzt frühere MenC-Impfung; Nachhol bis <18 J"
  },
  {
   "vaccine": "Masern-Mumps-Röteln",
   "code": "mmr",
   "type": "standard",
   "group": "age_infant",
   "age_from_m": 11,
   "age_to_m": null,
   "schedule": "2 Dosen (11 & 15 Mon)",
   "booster_years": null,
   "live": true,
   "note": "Lebendimpfstoff; 2 Dosen lebenslang"
  },
  {
   "vaccine": "Varizellen",
   "code": "varicella",
   "type": "standard",
   "group": "age_infant",
   "age_from_m": 11,
   "age_to_m": null,
   "schedule": "2 Dosen (11 & 15 Mon)",
   "booster_years": null,
   "live": true,
   "note": "Lebendimpfstoff"
  },
  {
   "vaccine": "HPV",
   "code": "hpv",
   "type": "standard",
   "group": "age_9_14",
   "age_from_m": 108,
   "age_to_m": 168,
   "schedule": "2 Dosen (0/5 Mon)",
   "booster_years": null,
   "live": false,
   "note": "Mädchen UND Jungen 9–14 J"
  },
  {
   "vaccine": "HPV",
   "code": "hpv",
   "type": "catch_up",
   "group": "age_15_17",
   "age_from_m": 180,
   "age_to_m": 216,
   "schedule": "3 Dosen (0/1-2/6 Mon)",
   "booster_years": null,
   "live": false,
   "note": "Nachholung bis 17 J (bei Start ≥15 J: 3 Dosen)"
  },
  {
   "vaccine": "Influenza",
   "code": "influenza",
   "type": "standard",
   "group": "age_60plus",
   "age_from_m": 720,
   "age_to_m": null,
   "schedule": "jährlich (Totimpfstoff; ≥60 J Hochdosis)",
   "booster_years": 1,
   "live": false,
   "note": "Standardimpfung ab 60 J"
  },
  {
   "vaccine": "Herpes zoster",
   "code": "zoster",
   "type": "standard",
   "group": "age_60plus",
   "age_from_m": 720,
   "age_to_m": null,
   "schedule": "2 Dosen (Shingrix, 0/2–6 Mon)",
   "booster_years": null,
   "live": false,
   "note": "Totimpfstoff; Standard ab 60 J"
  },
  {
   "vaccine": "COVID-19",
   "code": "covid",
   "type": "standard",
   "group": "age_60plus",
   "age_from_m": 720,
   "age_to_m": null,
   "schedule": "jährlich (Herbst) ab 60 J; Grundimmunität ≥3 Antigenkontakte (≥1 Impfung)",
   "booster_years": 1,
   "live": false,
   "note": "Standard ab 60 J"
  },
  {
   "vaccine": "Pneumokokken (PCV20)",
   "code": "pneumococcal_pcv20",
   "type": "standard",
   "group": "age_75plus",
   "age_from_m": 900,
   "age_to_m": null,
   "schedule": "1 Dosis PCV20",
   "booster_years": null,
   "live": false,
   "note": "Standard-Altersimpfung ab 75 J"
  },
  {
   "vaccine": "Respiratorische Synzytial-Viren",
   "code": "rsv_infant",
   "type": "standard",
   "group": "age_infant",
   "age_from_m": 0,
   "age_to_m": 8,
   "schedule": "Nirsevimab 1× (monoklonaler Antikörper, saisonabhängig)",
   "booster_years": null,
   "live": false,
   "note": "Passive Immunisierung Säuglinge; April–Sept Geborene im Herbst"
  },
  {
   "vaccine": "Respiratorische Synzytial-Viren",
   "code": "rsv_adult",
   "type": "standard",
   "group": "age_75plus",
   "age_from_m": 900,
   "age_to_m": null,
   "schedule": "1 Dosis (Protein-/mRNA-RSV-Impfstoff, Spätsommer/Herbst)",
   "booster_years": null,
   "live": false,
   "note": "Standard ab 75 J; 60–74 J nach Indikation"
  },
  {
   "vaccine": "Respiratorische Synzytial-Viren",
   "code": "rsv_adult",
   "type": "indication",
   "group": "age_60plus",
   "age_from_m": 720,
   "age_to_m": 899,
   "schedule": "1 Dosis (RSV-Impfstoff)",
   "booster_years": null,
   "live": false,
   "note": "60–74 J bei erhöhtem Risiko"
  },
  {
   "vaccine": "Tetanus/Diphtherie (Auffrischung)",
   "code": "td_booster",
   "type": "booster",
   "group": "age_18plus",
   "age_from_m": 216,
   "age_to_m": null,
   "schedule": "Td alle 10 Jahre; nächste fällige Dosis als Tdap/Tdap-IPV",
   "booster_years": 10,
   "live": false,
   "note": "Pertussis 1× als Erwachsener mitimpfen"
  },
  {
   "vaccine": "Masern (Nachhol Erwachsene)",
   "code": "mmr",
   "type": "catch_up",
   "group": "seronegative_measles",
   "age_from_m": 216,
   "age_to_m": null,
   "schedule": "1 Dosis MMR",
   "booster_years": null,
   "live": true,
   "note": "Nach 1970 Geborene ≥18 J mit unklarem/fehlendem Schutz"
  },
  {
   "vaccine": "Influenza",
   "code": "influenza",
   "type": "indication",
   "group": "diabetes",
   "age_from_m": null,
   "age_to_m": null,
   "schedule": "jährlich",
   "booster_years": 1,
   "live": false,
   "note": "Chronische Erkrankung → Indikation"
  },
  {
   "vaccine": "Influenza",
   "code": "influenza",
   "type": "indication",
   "group": "chronic_heart",
   "age_from_m": null,
   "age_to_m": null,
   "schedule": "jährlich",
   "booster_years": 1,
   "live": false,
   "note": ""
  },
  {
   "vaccine": "Influenza",
   "code": "influenza",
   "type": "indication",
   "group": "chronic_lung",
   "age_from_m": null,
   "age_to_m": null,
   "schedule": "jährlich",
   "booster_years": 1,
   "live": false,
   "note": ""
  },
  {
   "vaccine": "Influenza",
   "code": "influenza",
   "type": "indication",
   "group": "chronic_kidney",
   "age_from_m": null,
   "age_to_m": null,
   "schedule": "jährlich",
   "booster_years": 1,
   "live": false,
   "note": ""
  },
  {
   "vaccine": "Influenza",
   "code": "influenza",
   "type": "indication",
   "group": "chronic_liver",
   "age_from_m": null,
   "age_to_m": null,
   "schedule": "jährlich",
   "booster_years": 1,
   "live": false,
   "note": ""
  },
  {
   "vaccine": "Influenza",
   "code": "influenza",
   "type": "indication",
   "group": "immunodeficiency",
   "age_from_m": null,
   "age_to_m": null,
   "schedule": "jährlich",
   "booster_years": 1,
   "live": false,
   "note": ""
  },
  {
   "vaccine": "Influenza",
   "code": "influenza",
   "type": "indication",
   "group": "pregnancy",
   "age_from_m": null,
   "age_to_m": null,
   "schedule": "ab 2. Trimenon (bei Grundleiden ab 1.)",
   "booster_years": null,
   "live": false,
   "note": "Totimpfstoff"
  },
  {
   "vaccine": "Influenza",
   "code": "influenza",
   "type": "indication",
   "group": "hcw",
   "age_from_m": null,
   "age_to_m": null,
   "schedule": "jährlich",
   "booster_years": 1,
   "live": false,
   "note": "Berufliche Indikation"
  },
  {
   "vaccine": "Pneumokokken (PCV20)",
   "code": "pneumococcal_pcv20",
   "type": "indication",
   "group": "diabetes",
   "age_from_m": null,
   "age_to_m": null,
   "schedule": "1 Dosis PCV20",
   "booster_years": null,
   "live": false,
   "note": "PCV20; PPSV23 nur noch zur Revakzinierung (Abstand ≥6 J)"
  },
  {
   "vaccine": "Pneumokokken (PCV20)",
   "code": "pneumococcal_pcv20",
   "type": "indication",
   "group": "chronic_heart",
   "age_from_m": null,
   "age_to_m": null,
   "schedule": "1 Dosis PCV20",
   "booster_years": null,
   "live": false,
   "note": ""
  },
  {
   "vaccine": "Pneumokokken (PCV20)",
   "code": "pneumococcal_pcv20",
   "type": "indication",
   "group": "chronic_lung",
   "age_from_m": null,
   "age_to_m": null,
   "schedule": "1 Dosis PCV20",
   "booster_years": null,
   "live": false,
   "note": ""
  },
  {
   "vaccine": "Pneumokokken (PCV20)",
   "code": "pneumococcal_pcv20",
   "type": "indication",
   "group": "immunodeficiency",
   "age_from_m": null,
   "age_to_m": null,
   "schedule": "1 Dosis PCV20 (Immundefizienz: ggf. Folgeschema)",
   "booster_years": null,
   "live": false,
   "note": ""
  },
  {
   "vaccine": "Pneumokokken (PCV20)",
   "code": "pneumococcal_pcv20",
   "type": "indication",
   "group": "asplenia",
   "age_from_m": null,
   "age_to_m": null,
   "schedule": "PCV + PPSV23",
   "booster_years": null,
   "live": false,
   "note": ""
  },
  {
   "vaccine": "Herpes zoster",
   "code": "zoster",
   "type": "indication",
   "group": "immunosuppression",
   "age_from_m": 600,
   "age_to_m": null,
   "schedule": "2 Dosen (Shingrix)",
   "booster_years": null,
   "live": false,
   "note": "Indikation ab 50 J bei erhöhtem Risiko"
  },
  {
   "vaccine": "Herpes zoster",
   "code": "zoster",
   "type": "indication",
   "group": "immunodeficiency",
   "age_from_m": 600,
   "age_to_m": null,
   "schedule": "2 Dosen",
   "booster_years": null,
   "live": false,
   "note": ""
  },
  {
   "vaccine": "Hepatitis B",
   "code": "hepatitis_b",
   "type": "indication",
   "group": "chronic_kidney",
   "age_from_m": null,
   "age_to_m": null,
   "schedule": "3–4 Dosen; Titerkontrolle (Dialyse)",
   "booster_years": null,
   "live": false,
   "note": ""
  },
  {
   "vaccine": "Hepatitis B",
   "code": "hepatitis_b",
   "type": "indication",
   "group": "immunodeficiency",
   "age_from_m": null,
   "age_to_m": null,
   "schedule": "Grundimmunisierung + Titerkontrolle",
   "booster_years": null,
   "live": false,
   "note": ""
  },
  {
   "vaccine": "Hepatitis B",
   "code": "hepatitis_b",
   "type": "indication",
   "group": "hcw",
   "age_from_m": null,
   "age_to_m": null,
   "schedule": "Grundimmunisierung + Titer (Anti-HBs ≥100)",
   "booster_years": null,
   "live": false,
   "note": "Berufliche Indikation"
  },
  {
   "vaccine": "Hepatitis B",
   "code": "hepatitis_b",
   "type": "indication",
   "group": "msm",
   "age_from_m": null,
   "age_to_m": null,
   "schedule": "Grundimmunisierung",
   "booster_years": null,
   "live": false,
   "note": ""
  },
  {
   "vaccine": "Hepatitis A",
   "code": "hepatitis_a",
   "type": "indication",
   "group": "chronic_liver",
   "age_from_m": null,
   "age_to_m": null,
   "schedule": "2 Dosen (0/6 Mon)",
   "booster_years": null,
   "live": false,
   "note": ""
  },
  {
   "vaccine": "Hepatitis A",
   "code": "hepatitis_a",
   "type": "indication",
   "group": "msm",
   "age_from_m": null,
   "age_to_m": null,
   "schedule": "2 Dosen",
   "booster_years": null,
   "live": false,
   "note": ""
  },
  {
   "vaccine": "Hepatitis A",
   "code": "hepatitis_a",
   "type": "indication",
   "group": "occupation_food",
   "age_from_m": null,
   "age_to_m": null,
   "schedule": "2 Dosen",
   "booster_years": null,
   "live": false,
   "note": ""
  },
  {
   "vaccine": "Meningokokken ACWY",
   "code": "meningococcal_acwy",
   "type": "indication",
   "group": "asplenia",
   "age_from_m": null,
   "age_to_m": null,
   "schedule": "Grundimmunisierung + Auffrischung",
   "booster_years": 5,
   "live": false,
   "note": ""
  },
  {
   "vaccine": "Meningokokken ACWY",
   "code": "meningococcal_acwy",
   "type": "indication",
   "group": "complement_deficiency",
   "age_from_m": null,
   "age_to_m": null,
   "schedule": "Grundimmunisierung + Auffrischung",
   "booster_years": 5,
   "live": false,
   "note": ""
  },
  {
   "vaccine": "Meningokokken ACWY",
   "code": "meningococcal_acwy",
   "type": "indication",
   "group": "immunodeficiency",
   "age_from_m": null,
   "age_to_m": null,
   "schedule": "Grundimmunisierung",
   "booster_years": null,
   "live": false,
   "note": ""
  },
  {
   "vaccine": "Meningokokken ACWY",
   "code": "meningococcal_acwy",
   "type": "catch_up",
   "group": "age_15_17",
   "age_from_m": 180,
   "age_to_m": 216,
   "schedule": "1 Dosis (Nachhol bis <18 J)",
   "booster_years": null,
   "live": false,
   "note": "Nachholung der Jugend-Standardimpfung bis zum 18. Geburtstag"
  },
  {
   "vaccine": "Meningokokken B",
   "code": "meningococcal_b",
   "type": "indication",
   "group": "asplenia",
   "age_from_m": null,
   "age_to_m": null,
   "schedule": "Grundimmunisierung",
   "booster_years": null,
   "live": false,
   "note": ""
  },
  {
   "vaccine": "Meningokokken B",
   "code": "meningococcal_b",
   "type": "indication",
   "group": "complement_deficiency",
   "age_from_m": null,
   "age_to_m": null,
   "schedule": "Grundimmunisierung",
   "booster_years": null,
   "live": false,
   "note": ""
  },
  {
   "vaccine": "FSME (TBE)",
   "code": "tbe",
   "type": "indication",
   "group": "outdoor_exposure",
   "age_from_m": 12,
   "age_to_m": null,
   "schedule": "3 Dosen (0/1–3/9–12 Mon); Auffrischung",
   "booster_years": 5,
   "live": false,
   "note": "Wohnhaft/exponiert in Risikogebiet"
  },
  {
   "vaccine": "Pertussis",
   "code": "pertussis",
   "type": "indication",
   "group": "pregnancy",
   "age_from_m": null,
   "age_to_m": null,
   "schedule": "1 Dosis Tdap (ab 28. SSW, früher bei Frühgeburtsrisiko)",
   "booster_years": null,
   "live": false,
   "note": "In JEDER Schwangerschaft"
  },
  {
   "vaccine": "Pertussis",
   "code": "pertussis",
   "type": "indication",
   "group": "close_contacts",
   "age_from_m": null,
   "age_to_m": null,
   "schedule": "1 Dosis Tdap (Kokonstrategie)",
   "booster_years": null,
   "live": false,
   "note": "Enge Kontaktpersonen von Neugeborenen"
  },
  {
   "vaccine": "Varizellen",
   "code": "varicella",
   "type": "indication",
   "group": "pregnancy_planned",
   "age_from_m": null,
   "age_to_m": null,
   "schedule": "2 Dosen vor geplanter SS",
   "booster_years": null,
   "live": true,
   "note": "Bei fehlender Immunität; nicht in SS"
  },
  {
   "vaccine": "Varizellen",
   "code": "varicella",
   "type": "indication",
   "group": "hcw",
   "age_from_m": null,
   "age_to_m": null,
   "schedule": "2 Dosen bei fehlender Immunität",
   "booster_years": null,
   "live": true,
   "note": ""
  },
  {
   "vaccine": "MMR",
   "code": "mmr",
   "type": "indication",
   "group": "hcw",
   "age_from_m": null,
   "age_to_m": null,
   "schedule": "2 Dosen bei unklarem Schutz",
   "booster_years": null,
   "live": true,
   "note": ""
  },
  {
   "vaccine": "Mpox",
   "code": "mpox",
   "type": "indication",
   "group": "msm",
   "age_from_m": 144,
   "age_to_m": null,
   "schedule": "2 Dosen (Imvanex, ≥28 Tage)",
   "booster_years": null,
   "live": false,
   "note": "Nicht-replizierender Impfstoff; nach Risiko"
  }
 ],
 "categories": [
  {
   "category": "Pflicht",
   "rank": 1,
   "rule_id": "P1",
   "condition": "Zielland fordert gültigen Impfnachweis (IHR)",
   "applies_to": "Gelbfieber"
  },
  {
   "category": "Pflicht",
   "rank": 1,
   "rule_id": "P2",
   "condition": "Länderspezifische Impf-Pflicht (Pilger/Einreise)",
   "applies_to": "Meningokokken ACWY"
  },
  {
   "category": "Pflicht",
   "rank": 1,
   "rule_id": "P3",
   "condition": "Polio-Impfnachweis bei Ausreise aus Endemie-/Ausbruchsland (>4 Wo)",
   "applies_to": "Poliomyelitis"
  },
  {
   "category": "Dringend empfohlen",
   "rank": 2,
   "rule_id": "D1",
   "condition": "Aktiver Ausbruch am Zielort",
   "applies_to": "Chikungunya"
  },
  {
   "category": "Dringend empfohlen",
   "rank": 2,
   "rule_id": "D2",
   "condition": "Patient hatte die Erkrankung bereits (Seropositivität) + endemisches Ziel",
   "applies_to": "Dengue"
  },
  {
   "category": "Dringend empfohlen",
   "rank": 2,
   "rule_id": "D3",
   "condition": "Keine/unklare Grundimmunisierung",
   "applies_to": "Masern (MMR)"
  },
  {
   "category": "Dringend empfohlen",
   "rank": 2,
   "rule_id": "D4",
   "condition": "Keine Grundimmunisierung Tdap-IPV",
   "applies_to": "Tdap-IPV"
  },
  {
   "category": "Dringend empfohlen",
   "rank": 2,
   "rule_id": "D5",
   "condition": "Fehlende Immunität + geplante Schwangerschaft",
   "applies_to": "Varizellen"
  },
  {
   "category": "Dringend empfohlen",
   "rank": 2,
   "rule_id": "D6",
   "condition": "Zielland ist Gelbfieber-endemisch (auch ohne Nachweispflicht)",
   "applies_to": "Gelbfieber"
  },
  {
   "category": "Dringend empfohlen",
   "rank": 2,
   "rule_id": "D7",
   "condition": "Hohe Exposition (Tierkontakt/abgelegen) im Risikoland",
   "applies_to": "Tollwut"
  },
  {
   "category": "Empfohlen",
   "rank": 3,
   "rule_id": "E1",
   "condition": "Fällige & relevante Auffrischung (Booster-Intervall überschritten)",
   "applies_to": "alle mit booster_interval"
  },
  {
   "category": "Empfohlen",
   "rank": 3,
   "rule_id": "E2",
   "condition": "Reise-relevante Auffrischung",
   "applies_to": "Polio / FSME"
  },
  {
   "category": "Empfohlen",
   "rank": 3,
   "rule_id": "E3",
   "condition": "Reiseimpfung für erhöhtes Ziel-Risiko (kein Ausbruch)",
   "applies_to": "Hep A/B, Typhus, JE"
  },
  {
   "category": "Generell empfohlen",
   "rank": 4,
   "rule_id": "G1",
   "condition": "STIKO-Standardimpfung nach Alter",
   "applies_to": "HPV / Influenza / Zoster / Pneumokokken"
  },
  {
   "category": "Generell empfohlen",
   "rank": 4,
   "rule_id": "G2",
   "condition": "STIKO-Nachholimpfung",
   "applies_to": "Meningokokken ACWY"
  },
  {
   "category": "Generell empfohlen",
   "rank": 4,
   "rule_id": "G3",
   "condition": "STIKO-Indikationsimpfung bei Vorerkrankung/Risikogruppe",
   "applies_to": "Influenza/Pneumokokken/Zoster/HepB"
  },
  {
   "category": "Generell empfohlen",
   "rank": 4,
   "rule_id": "G4",
   "condition": "Masern-Einzeldosis bei unklarem Schutz (nach 1970 geboren)",
   "applies_to": "Masern (MMR)"
  },
  {
   "category": "Erwägen",
   "rank": 5,
   "rule_id": "EW1",
   "condition": "Krankheit im Zielland vorhanden, aber Expositions-/Dauerkriterium nur grenzwertig erfüllt (Schwelle nicht als harte Grenze)",
   "applies_to": "Japanische Enzephalitis"
  },
  {
   "category": "Erwägen",
   "rank": 5,
   "rule_id": "EW2",
   "condition": "Erreger im Land prävalent, aber kein expliziter Expositionsgrund geplant",
   "applies_to": "Tollwut"
  },
  {
   "category": "Erwägen",
   "rank": 5,
   "rule_id": "EW3",
   "condition": "Reiseimpfung erwägbar, aber keine klare Indikation (Nutzen individuell abwägen)",
   "applies_to": "diverse Reiseimpfungen (z. B. Cholera)"
  }
 ],
 "riskGroups": {
  "all": {
   "de": "Alle (Standardimpfung)",
   "en": "Everyone (routine)",
   "category": "age",
   "notes": "STIKO-Standardimpfung unabhängig von Risiko"
  },
  "age_infant": {
   "de": "Säuglinge/Kleinkinder",
   "en": "Infants/toddlers",
   "category": "age",
   "notes": "Impfkalender U-Untersuchungen"
  },
  "age_9_14": {
   "de": "9–14 Jahre",
   "en": "Age 9–14",
   "category": "age",
   "notes": "HPV-Zielaltersgruppe (2 Dosen)"
  },
  "age_15_17": {
   "de": "15–17 Jahre (Nachhol)",
   "en": "Age 15–17 (catch-up)",
   "category": "age",
   "notes": "HPV-Nachholung (3 Dosen)"
  },
  "age_18plus": {
   "de": "Erwachsene ≥18",
   "en": "Adults ≥18",
   "category": "age",
   "notes": ""
  },
  "age_60plus": {
   "de": "Alter ≥60 Jahre",
   "en": "Age ≥60",
   "category": "age",
   "notes": "Standard für Influenza/Herpes zoster/COVID-19"
  },
  "age_75plus": {
   "de": "Alter ≥75 Jahre",
   "en": "Age ≥75",
   "category": "age",
   "notes": "Standard für Pneumokokken (PCV20) und RSV"
  },
  "diabetes": {
   "de": "Diabetes mellitus",
   "en": "Diabetes mellitus",
   "category": "chronic_disease",
   "notes": "Indikation Influenza/Pneumokokken (+Zoster ≥50)"
  },
  "chronic_heart": {
   "de": "Chronische Herz-Kreislauf-Erkrankung",
   "en": "Chronic cardiovascular disease",
   "category": "chronic_disease",
   "notes": ""
  },
  "chronic_lung": {
   "de": "Chronische Atemwegs-/Lungenerkrankung",
   "en": "Chronic respiratory disease",
   "category": "chronic_disease",
   "notes": "inkl. Asthma/COPD"
  },
  "chronic_liver": {
   "de": "Chronische Lebererkrankung",
   "en": "Chronic liver disease",
   "category": "chronic_disease",
   "notes": "+ Hep A/B erwägen"
  },
  "chronic_kidney": {
   "de": "Chronische Nierenerkrankung/Dialyse",
   "en": "Chronic kidney disease/dialysis",
   "category": "chronic_disease",
   "notes": "+ Hep B (Dialyse)"
  },
  "chronic_neuro": {
   "de": "Chronische neurologische Erkrankung",
   "en": "Chronic neurological disease",
   "category": "chronic_disease",
   "notes": ""
  },
  "immunodeficiency": {
   "de": "Angeborene/erworbene Immundefizienz",
   "en": "Congenital/acquired immunodeficiency",
   "category": "immune",
   "notes": "Lebendimpfstoffe kontraindiziert/prüfen"
  },
  "immunosuppression": {
   "de": "Immunsuppressive Therapie",
   "en": "Immunosuppressive therapy",
   "category": "immune",
   "notes": "Lebendimpfstoffe meiden; Timing beachten"
  },
  "hiv": {
   "de": "HIV-Infektion",
   "en": "HIV infection",
   "category": "immune",
   "notes": "je nach CD4; Lebendimpfung nur bei ausreichender Immunität"
  },
  "asplenia": {
   "de": "Asplenie/Hyposplenie",
   "en": "Asplenia/hyposplenia",
   "category": "anatomical",
   "notes": "Pneumokokken + MenACWY + MenB + Hib + Influenza"
  },
  "complement_deficiency": {
   "de": "Komplement-/Properdindefekt",
   "en": "Complement/properdin deficiency",
   "category": "immune",
   "notes": "MenACWY + MenB"
  },
  "cochlear_implant": {
   "de": "Cochlea-Implantat/Liquorfistel",
   "en": "Cochlear implant/CSF leak",
   "category": "anatomical",
   "notes": "Pneumokokken"
  },
  "pregnancy": {
   "de": "Schwangerschaft",
   "en": "Pregnancy",
   "category": "pregnancy",
   "notes": "Influenza (2. Trim.) + Pertussis (jede SS); Lebendimpfung kontraindiziert"
  },
  "pregnancy_planned": {
   "de": "Kinderwunsch/geplante SS",
   "en": "Planned pregnancy",
   "category": "pregnancy",
   "notes": "MMR/Varizellen-Immunität vor SS sichern"
  },
  "prematurity": {
   "de": "Frühgeborene",
   "en": "Preterm infants",
   "category": "age",
   "notes": "3+1-Schema statt 2+1"
  },
  "hcw": {
   "de": "Medizinisches Personal",
   "en": "Healthcare workers",
   "category": "occupational",
   "notes": "MMR/Varizellen/Influenza/Pertussis/Hep B"
  },
  "lab_exposure": {
   "de": "Labor-/Erregerkontakt",
   "en": "Lab/pathogen exposure",
   "category": "occupational",
   "notes": "je nach Erreger"
  },
  "outdoor_exposure": {
   "de": "Zeckenexposition (Beruf/Freizeit)",
   "en": "Tick exposure",
   "category": "occupational",
   "notes": "FSME in Risikogebieten"
  },
  "close_contacts": {
   "de": "Enge Kontaktpersonen/Haushalt",
   "en": "Close contacts/household",
   "category": "contact",
   "notes": "z. B. Pertussis-Kokon, Influenza, VZV bei Immunsupprimierten im Haushalt"
  },
  "seronegative_measles": {
   "de": "Nach 1970 geboren, unklarer Masernschutz",
   "en": "Born after 1970, unclear measles status",
   "category": "catch_up",
   "notes": "1× MMR als Erwachsener"
  },
  "no_basic_immunisation": {
   "de": "Keine/unklare Grundimmunisierung",
   "en": "No/unclear primary series",
   "category": "catch_up",
   "notes": "Nachholimpfung nach STIKO-Schema"
  },
  "msm": {
   "de": "Männer, die Sex mit Männern haben",
   "en": "Men who have sex with men",
   "category": "lifestyle",
   "notes": "Hep A/B; Mpox nach Indikation"
  },
  "occupation_food": {
   "de": "Lebensmittel-/Küchenpersonal",
   "en": "Food handlers",
   "category": "occupational",
   "notes": "Hep A"
  }
 },
 "availableVaccines": {
  "chikungunya": [
   {
    "brand": "Vimkunya",
    "type": "T",
    "route": "i.m.",
    "age_min": "12 J",
    "age_max": "",
    "primary_series": "1 Dosis",
    "booster": "Keine Datenlage"
   }
  ],
  "cholera": [
   {
    "brand": "Dukoral",
    "type": "T",
    "route": "Schluckimpfung",
    "age_min": "2 J",
    "age_max": "",
    "primary_series": "2-6 J: 3 Dosen (>=1 W Abstand); ab 6 J: 2 Dosen (>=1 W Abstand); Maximalabstand je 6 W",
    "booster": "2-6 J: nach 6 M; ab 6 J: nach 2 J"
   }
  ],
  "dengue": [
   {
    "brand": "Qdenga",
    "type": "L",
    "route": "s.c.",
    "age_min": "4 J",
    "age_max": "",
    "primary_series": "2 Dosen im Schema 0-3 M",
    "booster": "Keine Angabe zur Boosterfaehigkeit"
   }
  ],
  "tbe": [
   {
    "brand": "Encepur Erwachsene",
    "type": "T",
    "route": "i.m.",
    "age_min": "12 J",
    "age_max": "",
    "primary_series": "Konventionell 0/1-3 M/9-12 M; Schnell 0/d14/9-12 M; Express d0/d7/d21",
    "booster": "<50 J: nach 3 J, dann alle 5-10 J; >50 J: nach 3 J, dann alle 3 J"
   },
   {
    "brand": "Encepur Kinder",
    "type": "T",
    "route": "i.m.",
    "age_min": "1 J",
    "age_max": "11 J",
    "primary_series": "Konventionell 0/1-3 M/9-12 M; Schnell 0/d14/9-12 M; Express d0/d7/d21",
    "booster": "nach 3 J, dann alle 5 J"
   }
  ],
  "yellow_fever": [
   {
    "brand": "Stamaril",
    "type": "L",
    "route": "s.c.",
    "age_min": "9 M",
    "age_max": "60 J",
    "primary_series": "1 Dosis",
    "booster": "<2 J: nach 5 J; >2 J: einmalig nach 10 J"
   }
  ],
  "zoster": [
   {
    "brand": "Shingrix",
    "type": "T",
    "route": "i.m.",
    "age_min": "18 J",
    "age_max": "",
    "primary_series": "2 Dosen Abstand 2 M (bis max 6 M)",
    "booster": "Keine Daten fuer Booster"
   }
  ],
  "influenza": [
   {
    "brand": "Efluelda (HD) 2025/2026",
    "type": "T",
    "route": "i.m./s.c.",
    "age_min": "60 J",
    "age_max": "",
    "primary_series": "1 saisonale Dosis",
    "booster": "Saisonal"
   },
   {
    "brand": "Influsplit (SD) 25/26",
    "type": "T",
    "route": "i.m.",
    "age_min": "6 M",
    "age_max": "",
    "primary_series": "Ab 18 J: 1 Dosis; 6 M-<18 J: 1 Dosis (bis 9 J: 2. Dosis nach >=4 W wenn erstmals geimpft)",
    "booster": "Saisonal"
   }
  ],
  "hpv": [
   {
    "brand": "Gardasil9",
    "type": "T",
    "route": "i.m.",
    "age_min": "9 J",
    "age_max": "",
    "primary_series": "9-14 J: 2 Dosen (0/6-12 M); ab 15 J: 3 Dosen (0/2/6 M)",
    "booster": "Nach Indikation"
   }
  ],
  "hepatitis_a": [
   {
    "brand": "Avaxim",
    "type": "T",
    "route": "i.m.",
    "age_min": "16 J",
    "age_max": "",
    "primary_series": "1 Dosis",
    "booster": "1 Dosis nach 6-12 M"
   },
   {
    "brand": "Havrix 720 Kinder",
    "type": "T",
    "route": "i.m.",
    "age_min": "1 J",
    "age_max": "15 J",
    "primary_series": "1 Dosis",
    "booster": "1 Dosis nach 6-12 M"
   }
  ],
  "hepatitis_ab": [
   {
    "brand": "Twinrix Erwachsene",
    "type": "T",
    "route": "i.m.",
    "age_min": "16 J",
    "age_max": "",
    "primary_series": "3 Dosen 0/1/6 M; Schnell 4 Dosen d0/d7/d21/12 M",
    "booster": "Nach Indikation"
   },
   {
    "brand": "Twinrix Kinder",
    "type": "T",
    "route": "i.m.",
    "age_min": "1 J",
    "age_max": "16 J",
    "primary_series": "3 Dosen 0/1/6 M",
    "booster": "Nach Indikation"
   }
  ],
  "hepatitis_b": [
   {
    "brand": "Engerix B Erwachsene",
    "type": "T",
    "route": "i.m.",
    "age_min": "16 J",
    "age_max": "",
    "primary_series": "3 Dosen 0/1/6 M; Schnell 0/1/2/12 M; ab 18 J zusaetzl. altern. Schnell d0/d7/d21/12 M",
    "booster": "Nach Indikation"
   }
  ],
  "japanese_encephalitis": [
   {
    "brand": "Ixiaro",
    "type": "T",
    "route": "i.m.",
    "age_min": "2 M",
    "age_max": "",
    "primary_series": "2 M-<3 J: 2x0,25 ml (Abstand 28 d); 3-<18 J: 2x0,5 ml (28 d); 18-<65 J: 2x0,5 ml (konv. 28 d / schnell 7 d); >65 J: konv. 28 d",
    "booster": "12-24 M nach GI (Erwachsene ~10 J Schutz); Kinder keine Langzeitprotektion"
   }
  ],
  "mmr": [
   {
    "brand": "MMRvaxPro",
    "type": "L",
    "route": "s.c./i.m.",
    "age_min": "9 M",
    "age_max": "",
    "primary_series": "2 Dosen (Mindestabstand 1 M); STIKO Standard LM 11 u. 15",
    "booster": ""
   }
  ],
  "meningococcal_acwy": [
   {
    "brand": "Nimenrix",
    "type": "T",
    "route": "i.m.",
    "age_min": "6 W",
    "age_max": "",
    "primary_series": "6 W-6 M: 2 Dosen (2 M Abstand); 6-<12 M: 1 Dosis; ab 1 J: 1 Dosis",
    "booster": "Saeuglinge: 1x mit 12 M; ab 1 J: nach 10 J"
   }
  ],
  "meningococcal_b": [
   {
    "brand": "Bexsero",
    "type": "T",
    "route": "i.m.",
    "age_min": "2 M",
    "age_max": "",
    "primary_series": "2-5 M: 3 od. 2 Dosen; 6-11 M: 2 Dosen (2 M); 12-23 M: 2 Dosen (2 M); ab 2 J: 2 Dosen (1 M)",
    "booster": "altersabhaengig (12-15 M / 2. Lj)"
   }
  ],
  "mpox": [
   {
    "brand": "Imvanex",
    "type": "L",
    "route": "s.c.",
    "age_min": "12 J",
    "age_max": "",
    "primary_series": "Ohne Vorpockenimpfung: 2 Dosen (>=28 d); mit Vorimpfung immunkompetent: 1 Dosis",
    "booster": "Keine Daten"
   }
  ],
  "pneumococcal_pcv20": [
   {
    "brand": "Prevenar20",
    "type": "T",
    "route": "i.m.",
    "age_min": "6 W",
    "age_max": "",
    "primary_series": "Ab 18 J: einmalig; ab 60 J Standard (>=6 J Abstand zu PPSV23); ab 18 J Indikation (>=1 J Abstand zu PPSV23)",
    "booster": "Keine Angabe"
   }
  ],
  "polio": [
   {
    "brand": "IPV Merieux",
    "type": "T",
    "route": "i.m./s.c.",
    "age_min": "2 M",
    "age_max": "",
    "primary_series": "Siehe Impfkalender",
    "booster": "Gemaess STIKO u. laenderspezifisch"
   }
  ],
  "tdap": [
   {
    "brand": "Boostrix",
    "type": "T",
    "route": "i.m.",
    "age_min": "4 J",
    "age_max": "",
    "primary_series": "Siehe Impfkalender",
    "booster": "Gemaess STIKO u. laenderspezifisch"
   }
  ],
  "tdap_ipv": [
   {
    "brand": "Repevax",
    "type": "T",
    "route": "i.m.",
    "age_min": "3 J",
    "age_max": "",
    "primary_series": "Siehe Impfkalender",
    "booster": "Gemaess STIKO u. laenderspezifisch"
   }
  ],
  "td_ipv": [
   {
    "brand": "Revaxis",
    "type": "T",
    "route": "i.m.",
    "age_min": "5 J",
    "age_max": "",
    "primary_series": "Siehe Impfkalender",
    "booster": "Gemaess STIKO u. laenderspezifisch"
   }
  ],
  "rabies": [
   {
    "brand": "Rabipur",
    "type": "T",
    "route": "i.m.",
    "age_min": "",
    "age_max": "",
    "primary_series": "Standard 3 Dosen 0/d7/d21-28; Schnell (18-65 J) 3 Dosen d0/d3/d7; immunkompetent 2 Dosen (7 d Abstand)",
    "booster": "Lebenslange Boosterfaehigkeit; PEP 2 Dosen (d0/d3); FI alle 2-5 J ggf. Ak-Test"
   },
   {
    "brand": "Verorab",
    "type": "T",
    "route": "i.m.",
    "age_min": "",
    "age_max": "",
    "primary_series": "Standard 3 Dosen 0/d7/d21-28; Schnell (immunkompetent) 2 Dosen 0/d7",
    "booster": "Lebenslange Boosterfaehigkeit; PEP 2 Dosen; Booster nach Expositionsrisiko/Ak"
   }
  ],
  "typhoid": [
   {
    "brand": "Typhim Vi",
    "type": "T",
    "route": "i.m.",
    "age_min": "2 J",
    "age_max": "",
    "primary_series": "1 Dosis",
    "booster": "Nach spaetestens 3 J erneut"
   }
  ],
  "varicella": [
   {
    "brand": "Varilrix",
    "type": "L",
    "route": "s.c./i.m.",
    "age_min": "9 M",
    "age_max": "",
    "primary_series": "<12 M: 2 Dosen (3 M Abstand); ab 12 M: 2 Dosen (6 W, min. 4 W)",
    "booster": ""
   }
  ]
 }
};
