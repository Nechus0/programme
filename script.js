/* ============================================================
   CHARITÉ REISEIMPF-ASSISTENT — Mockup v3
   STIKO · Verfügbare Impfstoffe Reisemed. Ambulanz Berlin 11/2025
   RKI Immunsuppression · CDC Chikungunya Q2/2026 · AA Deep-Links
   ============================================================ */
let LANG='de';
const I18N={
 appTitle:{de:'Reisemedizinische Ambulanz',en:'Travel Medicine Clinic'},appSub:{de:'Institut für Internationale Gesundheit · Reiseimpf-Assistent',en:'Institute of International Health · Travel Vaccination Assistant'},
 fFirstname:{de:'Vorname',en:'First name'},fPhone:{de:'Telefon',en:'Phone'},fInsurance:{de:'Krankenkasse',en:'Health insurance'},fProfession:{de:'Beruf (freiwillig)',en:'Profession (optional)'},fAddress:{de:'Anschrift',en:'Address'},fZip:{de:'PLZ',en:'Postal code'},fCity:{de:'Wohnort',en:'City'},
 fMeds:{de:'Aktuelle Medikamente (welche?)',en:'Current medication (which?)'},fRecentVax:{de:'Impfung/Injektion in den letzten 4 Wochen (welche, wann?)',en:'Vaccination/injection in the last 4 weeks (which, when?)'},fAcute:{de:'Akute Erkrankung (z. B. fieberhafter Infekt)',en:'Acute illness (e.g. febrile infection)'},fThrombosis:{de:'Thrombose in der Vorgeschichte',en:'History of thrombosis'},fFaint:{de:'Schwäche/Ohnmacht bei Impfung/Blutabnahme',en:'Weakness/fainting during vaccination/blood draw'},
 adminBack:{de:'Zurück',en:'Back'},adminTitle:{de:'Nutzerverwaltung',en:'User management'},settingsTitle:{de:'Einstellungen',en:'Settings'},setGeneral:{de:'Allgemein',en:'General'},setTreatModeDesc:{de:'Standard-Behandlungsart, wenn du einen Patienten in Behandlung nimmst.',en:'Default treatment type when you take a patient into treatment.'},treatBeratung:{de:'Beratung',en:'Consultation'},treatFolge:{de:'Folgeimpfung',en:'Follow-up vaccination'},adminNewUser:{de:'Neuen Nutzer anlegen',en:'Create new user'},adminNewDesc:{de:'Der Nutzer erhält Zugriff, sobald er sich mit dieser E-Mail über die Registrierungsseite ein Passwort vergibt.',en:'The user gains access once they set a password with this email via the registration page.'},adminUserList:{de:'Angelegte Nutzer',en:'Created users'},
 fEmail:{de:'E-Mail',en:'Email'},fTitle:{de:'Titel',en:'Title'},fRole:{de:'Funktion',en:'Role'},fFullname:{de:'Name (Vor- und Nachname)',en:'Name (first and last)'},fGender:{de:'Geschlecht',en:'Gender'},btnCreateUser:{de:'Nutzer anlegen',en:'Create user'},
 thName:{de:'Name',en:'Name'},thTitle:{de:'Titel',en:'Title'},thGender:{de:'Geschlecht',en:'Gender'},thRole:{de:'Funktion',en:'Role'},thStatusReg:{de:'Status',en:'Status'},
 kasseTitle:{de:'Kasse',en:'Reception / Billing'},kasseDesc:{de:'Für die Rolle „Kasse" ist derzeit keine Funktion hinterlegt.',en:'No function is assigned to the "Reception/Billing" role yet.'},
 kioskHint:{de:'Bitte füllen Sie Ihre Angaben aus und senden Sie sie ab.',en:'Please fill in your details and submit.'},kioskSubmit:{de:'Daten absenden',en:'Submit data'},
 subMasterData:{de:'Stammdaten',en:'Master data'},subTravel:{de:'Reisedaten',en:'Travel data'},
 fEmailAddr:{de:'E-Mail',en:'Email'},fChronicText:{de:'Chronische Erkrankung / Immundefizienz (welche?)',en:'Chronic illness / immunodeficiency (which?)'},
 fMedication:{de:'Aktuelle Medikamente',en:'Current medication'},optPregnant:{de:'schwanger',en:'pregnant'},optBreastfeeding:{de:'stillend',en:'breastfeeding'},optPlanned:{de:'Schwangerschaft geplant',en:'pregnancy planned'},
 btnNewPatient:{de:'+ Neuer Patient',en:'+ New patient'},backToList:{de:'Zurück zur Ambulanzliste',en:'Back to clinic list'},btnToday:{de:'Heute',en:'Today'},btnFinish:{de:'Behandlung abschließen',en:'Finish treatment'},adminUserListDesc:{de:'Nach Funktion gruppiert.',en:'Grouped by role.'},adminTabletTitle:{de:'Patienten-Tablet (Selbstanmeldung)',en:'Patient tablet (self check-in)'},adminTabletDesc:{de:'Für das ausgelegte iPad wird kein eigenes Konto benötigt. Auf der Anmeldeseite „Patienten-Tablet öffnen" wählen – das Gerät meldet sich anonym an, und Patienten füllen ihre Daten (Abschnitt 1 & 2) selbst aus. Diese erscheinen anschließend in der Ambulanzliste.',en:'The tablet needs no account. On the login page choose "Open patient tablet" — the device signs in anonymously and patients fill in their data (sections 1 & 2), which then appear in the clinic list.'},
 disclaimer:{de:'Mockup zur Demonstration. Empfehlungen folgen der STIKO-Systematik und ersetzen nicht die ärztliche Beurteilung. Ausbruchs- und Reisehinweise (RKI, Auswärtiges Amt) vor jeder Beratung prüfen; Live-Abruf erfordert eine Server-Anbindung.',en:'Demonstration mockup. Recommendations follow STIKO methodology and do not replace clinical judgement. Verify outbreak/travel advisories (RKI, German Foreign Office) before each consultation; live retrieval needs a server backend.'},
 s1Title:{de:'Patient & Reise',en:'Patient & Travel'},s1Desc:{de:'Grunddaten, Reiseziel(e) und Aufenthaltsdauer erfassen.',en:'Enter basic data, destination(s) and duration.'},
 fName:{de:'Name',en:'Name'},fDob:{de:'Geburtsdatum',en:'Date of birth'},ageEmpty:{de:'Alter: bitte Geburtsdatum eingeben',en:'Age: please enter date of birth'},
 fSex:{de:'Geschlecht',en:'Sex'},sexF:{de:'weiblich',en:'female'},sexM:{de:'männlich',en:'male'},sexD:{de:'divers',en:'diverse'},
 fDuration:{de:'Aufenthaltsdauer',en:'Duration of stay'},fDeparture:{de:'Abreisedatum',en:'Departure date'},fDest:{de:'Reiseziel(e) hinzufügen',en:'Add destination(s)'},
 fDestHint:{de:'Mehrere Ziele möglich. Überseegebiete separat (*).',en:'Multiple destinations possible. Overseas territories separate (*).'},
 fConditions:{de:'Besondere Bedingungen / Exposition',en:'Special conditions / exposure'},
 condRural:{de:'Ländlich / einfache Unterkunft',en:'Rural / basic accommodation'},condAnimal:{de:'Tierkontakt / Höhlen / Fledermäuse',en:'Animal contact / caves / bats'},condHealth:{de:'Gesundheitswesen / Blutkontakt',en:'Healthcare / blood contact'},condHajj:{de:'Hajj / Umrah (Saudi-Arabien)',en:'Hajj / Umrah (Saudi Arabia)'},
 childhoodToggle:{de:'Übrige Standardimpfungen laut STIKO-Impfkalender beim Kinderarzt fortführen (erscheint im Impfplan)',en:'Continue remaining standard vaccinations per STIKO schedule at the paediatrician (appears on the plan)'},
 s2Title:{de:'Kontraindikationen & Immunstatus',en:'Contraindications & immune status'},s2Desc:{de:'Allergien und immunrelevante Medikation. Das Medikament wird gegen eine Wirkstoff-Datenbank geprüft.',en:'Allergies and immune-relevant medication. The drug is checked against a substance database.'},
 fPregnant:{de:'Schwangerschaft / Stillen',en:'Pregnancy / breastfeeding'},optNo:{de:'nein',en:'no'},optYes:{de:'ja',en:'yes'},optPlanning:{de:'geplant (<3 Mon)',en:'planned (<3 mo)'},optWish:{de:'Kinderwunsch (>3 Mon)',en:'Planning pregnancy (>3 mo)'},
 fAllergy:{de:'Allergien',en:'Allergies'},fImmuno:{de:'Immunsuppressive Medikation',en:'Immunosuppressive medication'},
 notesTitle:{de:'Länder- & Gesundheitshinweise',en:'Country & health advisories'},notesDesc:{de:'Pflichtimpfungen, Ausbrüche und Gesundheitshinweise des Auswärtigen Amts (Deep-Link je Land).',en:'Mandatory vaccines, outbreaks and German Foreign Office health advisories (per-country deep link).'},
 noDest:{de:'Noch kein Reiseziel gewählt.',en:'No destination selected yet.'},
 s3Title:{de:'Impfstatus',en:'Vaccination status'},s3Desc:{de:'Vorimpfungen per Klick eintragen (nur Jahr). Farbe = Handlungsbedarf. Für geplante Impfungen „Planen" anklicken.',en:'Enter prior vaccinations by click (year only). Colour = action needed. Click "Plan" for planned vaccinations.'},
 s4Title:{de:'Geplante Impfungen (Terminierung)',en:'Planned vaccinations (Scheduling)'},s4Desc:{de:'Automatische Terminbündelung für geplante Impfungen auf Basis der STIKO-Mindestabstände.',en:'Automated appointment bundling for planned vaccinations based on STIKO minimum intervals.'},
 noPlan:{de:'Noch keine Impfungen zur Planung markiert.',en:'No vaccinations marked for planning yet.'},
 lgRed:{de:'Dringend empfohlen',en:'Strongly recommended'},lgYellow:{de:'Erwägen',en:'Consider'},lUseful:{de:'Empfohlen (Reise)',en:'Recommended (Travel)'},
 lGeneral:{de:'Generell empfohlen (STIKO)',en:'Generally recommended (STIKO)'},lgGreen:{de:'Geschützt',en:'Protected'},lgBlue:{de:'Generell empfohlen',en:'Generally advised'},lgGrey:{de:'Nicht relevant',en:'Not relevant'},lgPlan:{de:'Geplant (noch kein Schutz)',en:'Planned (not yet protected)'},
 fChronic:{de:'Chronische Erkrankung',en:'Chronic illness'},fImmunodef:{de:'Immundefizienz',en:'Immune deficiency'},travelWarn:{de:'Reisewarnung des Auswärtigen Amts – von Reisen wird abgeraten.',en:'German Foreign Office travel warning — travel is advised against.'},sourcesLbl:{de:'Datenbasis:',en:'Sources:'},
 loggedIn:{de:'Eingeloggt:',en:'Logged in:'},savedStamp:{de:'Gespeichert',en:'Saved'},physicianLbl:{de:'Behandler/in',en:'Physician'},
 serLabel:{de:'Serologie (Titer bekannt & ausreichend / immun)',en:'Serology (titre known & sufficient / immune)'},serMeasles:{de:'Masern-IgG ausreichend',en:'Measles IgG sufficient'},serVzv:{de:'Varizellen-IgG ausreichend',en:'Varicella IgG sufficient'},serHbs:{de:'Anti-HBs ausreichend',en:'Anti-HBs sufficient'},serHint:{de:'Nicht angehakt = unbekannt bzw. nicht ausreichend → ggf. impfen.',en:'Unchecked = unknown or insufficient → vaccinate if indicated.'},
 thVax:{de:'Impfung',en:'Vaccine'},thDone:{de:'Vorimpfungen',en:'Prior doses'},thLast:{de:'Zuletzt geimpft (Jahr)',en:'Last vaccinated (year)'},thStatus:{de:'Empfehlung',en:'Recommendation'},thPlan:{de:'Planen',en:'Plan'},thSchedule:{de:'Termine & Ort',en:'Appointments & site'},thInfo:{de:'Info',en:'Info'},
 fComment:{de:'Kommentar / Notiz zum Patienten',en:'Comment / note on the patient'},
 btnReset:{de:'Formular leeren',en:'Clear form'},btnSave:{de:'Patient speichern',en:'Save patient'},btnSaveEdit:{de:'Änderungen speichern',en:'Save changes'},btnPrint:{de:'Impfplan drucken',en:'Print schedule'},btnCancelEdit:{de:'Bearbeitung abbrechen',en:'Cancel editing'},
 listTitle:{de:'Patientenliste heute',en:'Patient list today'},listDesc:{de:'Neueste zuerst. Aufklappen zum Ansehen, „Bearbeiten" zum Weiterbearbeiten.',en:'Newest first. Expand to view, “Edit” to continue.'},emptyList:{de:'Noch keine Patienten gespeichert.',en:'No patients saved yet.'},
 del:{de:'Löschen',en:'Delete'},edit:{de:'Bearbeiten',en:'Edit'},mandatory:{de:'Pflicht',en:'Mandatory'},live:{de:'Lebendimpfstoff',en:'Live vaccine'},
 planToday:{de:'heute',en:'today'},planFuture:{de:'geplant',en:'planned'},
 mDisease:{de:'Krankheitsbild',en:'Clinical picture'},mEpi:{de:'Epidemiologie',en:'Epidemiology'},mSide:{de:'Nebenwirkungen (vereinfacht)',en:'Side effects (simplified)'},mSchedInfo:{de:'Impfschema (inkl. Schnellschema)',en:'Schedule (incl. rapid)'},
 confirmDel:{de:'Diesen Patienten löschen?',en:'Delete this patient?'},needName:{de:'Bitte Name und Geburtsdatum eingeben.',en:'Please enter name and date of birth.'},
 giLabel:{de:'Grundimmun. komplett',en:'Primary series complete'},diseaseLabel:{de:'Erkrankung durchgemacht',en:'Had the disease'},dengueHadLabel:{de:'Dengue bestätigt durchgemacht',en:'Prior dengue (confirmed)'},
 warnToday3:{de:'Hinweis: Mehr als 3 Impfungen heute geplant – Verträglichkeit/Reihenfolge beachten.',en:'Note: more than 3 vaccinations planned today—consider tolerability/sequence.'},
 warnToday5:{de:'Hinweis: Viele (≥5) Impfungen heute geplant – auf mehrere Termine verteilen erwägen.',en:'Note: many (≥5) vaccinations today—consider spreading across visits.'},
 editingNow:{de:'Bearbeite Patient: ',en:'Editing patient: '},aaLinkTxt:{de:'Reise- & Gesundheitshinweise (Auswärtiges Amt) ↗',en:'Travel & health advisories (Foreign Office) ↗'},
 healthLive:{de:'Gesundheits-Live-Abruf: Server-Integration erforderlich.',en:'Live health retrieval: server integration required.'},
 provCharite:{de:'Charité Reisemedizin',en:'Charité Travel Med.'},provGP:{de:'Hausarzt',en:'GP'},provPaed:{de:'Kinderarzt',en:'Paediatrician'},
 hepA:{de:'Hep A',en:'Hep A'},hepB:{de:'Hep B',en:'Hep B'},
 printTitle:{de:'Impfplan',en:'Vaccination schedule'},printToday:{de:'Heute verabreicht',en:'Given today'},printFuture:{de:'Geplante Folgetermine',en:'Scheduled follow-ups'},printNone:{de:'Keine Einträge.',en:'No entries.'},
 printDoctolib:{de:'Bitte buchen Sie Ihre Folgetermine selbst über Doctolib.',en:'Please book your follow-up appointments yourself via Doctolib.'},
 printCharite:{de:'Mit „Charité" gekennzeichnete Impfungen werden in der Reisemedizinischen Ambulanz durchgeführt.',en:'Vaccinations marked “Charité” are administered at the Travel Medicine Clinic.'},
 printChildhood:{de:'Standard-/Grundimmunisierung laut STIKO-Impfkalender – bitte beim Kinderarzt fortführen.',en:'Standard/primary immunisation per STIKO schedule — please continue at the paediatrician.'},
};
function t(k){const e=I18N[k];return e?e[LANG]:k;}

/* ---------- COUNTRIES ---------- */
const COUNTRIES=[
 ['AT','Österreich','Austria','WEUR'],['BE','Belgien','Belgium','WEUR'],['CH','Schweiz','Switzerland','WEUR'],['DE','Deutschland','Germany','WEUR'],['DK','Dänemark','Denmark','WEUR'],['ES','Spanien','Spain','WEUR'],['FI','Finnland','Finland','WEUR'],['FR','Frankreich','France','WEUR'],['GB','Vereinigtes Königreich','United Kingdom','WEUR'],['GR','Griechenland','Greece','WEUR'],['IE','Irland','Ireland','WEUR'],['IS','Island','Iceland','WEUR'],['IT','Italien','Italy','WEUR'],['LU','Luxemburg','Luxembourg','WEUR'],['MT','Malta','Malta','WEUR'],['NL','Niederlande','Netherlands','WEUR'],['NO','Norwegen','Norway','WEUR'],['PT','Portugal','Portugal','WEUR'],['SE','Schweden','Sweden','WEUR'],['CY','Zypern','Cyprus','WEUR'],
 ['AL','Albanien','Albania','EEUR'],['AM','Armenien','Armenia','EEUR'],['AZ','Aserbaidschan','Azerbaijan','EEUR'],['BA','Bosnien-Herzegowina','Bosnia & Herzegovina','EEUR'],['BG','Bulgarien','Bulgaria','EEUR'],['BY','Belarus','Belarus','EEUR'],['CZ','Tschechien','Czechia','EEUR'],['EE','Estland','Estonia','EEUR'],['GE','Georgien','Georgia','EEUR'],['HR','Kroatien','Croatia','EEUR'],['HU','Ungarn','Hungary','EEUR'],['KZ','Kasachstan','Kazakhstan','EEUR'],['KG','Kirgisistan','Kyrgyzstan','EEUR'],['LT','Litauen','Lithuania','EEUR'],['LV','Lettland','Latvia','EEUR'],['MD','Moldau','Moldova','EEUR'],['ME','Montenegro','Montenegro','EEUR'],['MK','Nordmazedonien','North Macedonia','EEUR'],['PL','Polen','Poland','EEUR'],['RO','Rumänien','Romania','EEUR'],['RS','Serbien','Serbia','EEUR'],['RU','Russland','Russia','EEUR'],['SI','Slowenien','Slovenia','EEUR'],['SK','Slowakei','Slovakia','EEUR'],['TJ','Tadschikistan','Tajikistan','EEUR'],['TM','Turkmenistan','Turkmenistan','EEUR'],['UA','Ukraine','Ukraine','EEUR'],['UZ','Usbekistan','Uzbekistan','EEUR'],['XK','Kosovo','Kosovo','EEUR'],
 ['AE','Vereinigte Arab. Emirate','United Arab Emirates','NAFME'],['BH','Bahrain','Bahrain','NAFME'],['DZ','Algerien','Algeria','NAFME'],['EG','Ägypten','Egypt','NAFME'],['IL','Israel','Israel','NAFME'],['IQ','Irak','Iraq','NAFME'],['IR','Iran','Iran','NAFME'],['JO','Jordanien','Jordan','NAFME'],['KW','Kuwait','Kuwait','NAFME'],['LB','Libanon','Lebanon','NAFME'],['LY','Libyen','Libya','NAFME'],['MA','Marokko','Morocco','NAFME'],['OM','Oman','Oman','NAFME'],['PS','Palästina','Palestine','NAFME'],['QA','Katar','Qatar','NAFME'],['SA','Saudi-Arabien','Saudi Arabia','NAFME'],['SY','Syrien','Syria','NAFME'],['TN','Tunesien','Tunisia','NAFME'],['TR','Türkei','Turkey','NAFME'],['YE','Jemen','Yemen','NAFME'],
 ['AO','Angola','Angola','SSAF'],['BF','Burkina Faso','Burkina Faso','SSAF'],['BI','Burundi','Burundi','SSAF'],['BJ','Benin','Benin','SSAF'],['BW','Botswana','Botswana','SSAF'],['CD','DR Kongo','DR Congo','SSAF'],['CF','Zentralafrik. Republik','Central African Rep.','SSAF'],['CG','Kongo','Congo','SSAF'],['CI','Côte d’Ivoire','Côte d’Ivoire','SSAF'],['CM','Kamerun','Cameroon','SSAF'],['CV','Kap Verde','Cape Verde','SSAF'],['DJ','Dschibuti','Djibouti','SSAF'],['ER','Eritrea','Eritrea','SSAF'],['ET','Äthiopien','Ethiopia','SSAF'],['GA','Gabun','Gabon','SSAF'],['GH','Ghana','Ghana','SSAF'],['GM','Gambia','Gambia','SSAF'],['GN','Guinea','Guinea','SSAF'],['GQ','Äquatorialguinea','Equatorial Guinea','SSAF'],['GW','Guinea-Bissau','Guinea-Bissau','SSAF'],['KE','Kenia','Kenya','SSAF'],['KM','Komoren','Comoros','SSAF'],['LR','Liberia','Liberia','SSAF'],['LS','Lesotho','Lesotho','SSAF'],['MG','Madagaskar','Madagascar','SSAF'],['ML','Mali','Mali','SSAF'],['MR','Mauretanien','Mauritania','SSAF'],['MU','Mauritius','Mauritius','SSAF'],['MW','Malawi','Malawi','SSAF'],['MZ','Mosambik','Mozambique','SSAF'],['NA','Namibia','Namibia','SSAF'],['NE','Niger','Niger','SSAF'],['NG','Nigeria','Nigeria','SSAF'],['RW','Ruanda','Rwanda','SSAF'],['SC','Seychellen','Seychelles','SSAF'],['SD','Sudan','Sudan','SSAF'],['SL','Sierra Leone','Sierra Leone','SSAF'],['SN','Senegal','Senegal','SSAF'],['SO','Somalia','Somalia','SSAF'],['SS','Südsudan','South Sudan','SSAF'],['ST','São Tomé & Príncipe','São Tomé & Príncipe','SSAF'],['SZ','Eswatini','Eswatini','SSAF'],['TD','Tschad','Chad','SSAF'],['TG','Togo','Togo','SSAF'],['TZ','Tansania','Tanzania','SSAF'],['UG','Uganda','Uganda','SSAF'],['ZA','Südafrika','South Africa','SSAF'],['ZM','Sambia','Zambia','SSAF'],['ZW','Simbabwe','Zimbabwe','SSAF'],
 ['AF','Afghanistan','Afghanistan','SAS'],['BD','Bangladesch','Bangladesh','SAS'],['BT','Bhutan','Bhutan','SAS'],['IN','Indien','India','SAS'],['LK','Sri Lanka','Sri Lanka','SAS'],['MV','Malediven','Maldives','SAS'],['NP','Nepal','Nepal','SAS'],['PK','Pakistan','Pakistan','SAS'],
 ['BN','Brunei','Brunei','SEA'],['ID','Indonesien','Indonesia','SEA'],['KH','Kambodscha','Cambodia','SEA'],['LA','Laos','Laos','SEA'],['MM','Myanmar','Myanmar','SEA'],['MY','Malaysia','Malaysia','SEA'],['PH','Philippinen','Philippines','SEA'],['SG','Singapur','Singapore','SEA'],['TH','Thailand','Thailand','SEA'],['TL','Timor-Leste','Timor-Leste','SEA'],['VN','Vietnam','Vietnam','SEA'],
 ['CN','China','China','EAS'],['JP','Japan','Japan','EAS'],['KP','Nordkorea','North Korea','EAS'],['KR','Südkorea','South Korea','EAS'],['MN','Mongolei','Mongolia','EAS'],['TW','Taiwan','Taiwan','EAS'],
 ['CA','Kanada','Canada','NAM'],['US','USA','United States','NAM'],
 ['BS','Bahamas','Bahamas','CAM'],['BZ','Belize','Belize','CAM'],['CR','Costa Rica','Costa Rica','CAM'],['CU','Kuba','Cuba','CAM'],['DO','Dominikanische Republik','Dominican Republic','CAM'],['GT','Guatemala','Guatemala','CAM'],['HN','Honduras','Honduras','CAM'],['HT','Haiti','Haiti','CAM'],['JM','Jamaika','Jamaica','CAM'],['MX','Mexiko','Mexico','CAM'],['NI','Nicaragua','Nicaragua','CAM'],['PA','Panama','Panama','CAM'],['SV','El Salvador','El Salvador','CAM'],['TT','Trinidad & Tobago','Trinidad & Tobago','CAM'],['BB','Barbados','Barbados','CAM'],['LC','St. Lucia','Saint Lucia','CAM'],['GD','Grenada','Grenada','CAM'],['DM','Dominica','Dominica','CAM'],
 ['AR','Argentinien','Argentina','SAM'],['BO','Bolivien','Bolivia','SAM'],['BR','Brasilien','Brazil','SAM'],['CL','Chile','Chile','SAM'],['CO','Kolumbien','Colombia','SAM'],['EC','Ecuador','Ecuador','SAM'],['GY','Guyana','Guyana','SAM'],['PE','Peru','Peru','SAM'],['PY','Paraguay','Paraguay','SAM'],['SR','Suriname','Suriname','SAM'],['UY','Uruguay','Uruguay','SAM'],['VE','Venezuela','Venezuela','SAM'],
 ['AU','Australien','Australia','OCE'],['FJ','Fidschi','Fiji','OCE'],['NZ','Neuseeland','New Zealand','OCE'],['PG','Papua-Neuguinea','Papua New Guinea','OCE'],['SB','Salomonen','Solomon Islands','OCE'],['VU','Vanuatu','Vanuatu','OCE'],['WS','Samoa','Samoa','OCE'],['TO','Tonga','Tonga','OCE'],['KI','Kiribati','Kiribati','OCE'],['FM','Mikronesien','Micronesia','OCE'],
];
const TERRITORIES=[
 ['GF','Französisch-Guayana','French Guiana','SAM'],['MQ','Martinique','Martinique','CAM'],['GP','Guadeloupe','Guadeloupe','CAM'],['RE','Réunion','Réunion','SSAF'],['YT','Mayotte','Mayotte','SSAF'],['PF','Französisch-Polynesien','French Polynesia','OCE'],['NC','Neukaledonien','New Caledonia','OCE'],['PR','Puerto Rico','Puerto Rico','CAM'],['VI','Amerik. Jungferninseln','US Virgin Islands','CAM'],['AW','Aruba','Aruba','CAM'],['CW','Curaçao','Curaçao','CAM'],['KY','Cayman Islands','Cayman Islands','CAM'],['GU','Guam','Guam','OCE'],['HK','Hongkong (SVR)','Hong Kong SAR','EAS'],['MO','Macau (SVR)','Macau SAR','EAS'],['GL','Grönland','Greenland','NAM'],['BM','Bermuda','Bermuda','NAM'],['CK','Cookinseln','Cook Islands','OCE'],
 ['AD','Andorra','Andorra','WEUR'],['AG','Antigua und Barbuda','Antigua and Barbuda','CAM'],['AI','Anguilla (UK)','Anguilla','CAM'],['AS','Amerikanisch-Samoa (USA)','American Samoa','OCE'],['AX','Åland-Inseln (Finnland)','Åland Islands','WEUR'],['BL','St. Barthélemy (Frankreich)','Saint Barthélemy','CAM'],['BQ','Bonaire, Sint Eustatius, Saba','Bonaire, Sint Eustatius and Saba','CAM'],['CC','Kokosinseln (Australien)','Cocos (Keeling) Islands','OCE'],['CX','Weihnachtsinsel (Australien)','Christmas Island','OCE'],['EH','Westsahara','Western Sahara','NAFME'],['FK','Falklandinseln (UK)','Falkland Islands (Malvinas)','SAM'],['FO','Färöer (Dänemark)','Faroe Islands','WEUR'],['GG','Guernsey','Guernsey','WEUR'],['GI','Gibraltar (UK)','Gibraltar','WEUR'],['IM','Isle of Man','Isle of Man','WEUR'],['JE','Jersey','Jersey','WEUR'],['KN','St. Kitts und Nevis','Saint Kitts and Nevis','CAM'],['LI','Liechtenstein','Liechtenstein','WEUR'],['MC','Monaco','Monaco','WEUR'],['MF','St. Martin (Frankreich)','Saint Martin (French part)','CAM'],['MH','Marshallinseln','Marshall Islands','OCE'],['MP','Nördliche Marianen-Inseln (USA)','Northern Mariana Islands','OCE'],['MS','Montserrat (UK)','Montserrat','CAM'],['NF','Norfolkinsel (Australien)','Norfolk Island','OCE'],['NR','Nauru','Nauru','OCE'],['NU','Niue (Neuseeland)','Niue','OCE'],['PM','St. Pierre und Miquelon (Frankreich)','Saint Pierre and Miquelon','NAM'],['PN','Pitcairninseln (UK)','Pitcairn','OCE'],['PW','Palau','Palau','OCE'],['SH','St. Helena (UK)','Saint Helena, Ascension and Tristan da Cunha','SSAF'],['SJ','Svalbard und Jan Mayen (Norwegen)','Svalbard and Jan Mayen','WEUR'],['SM','San Marino','San Marino','WEUR'],['SX','Sint Maarten (Niederlande)','Sint Maarten (Dutch part)','CAM'],['TC','Turks- und Caicosinseln (UK)','Turks and Caicos Islands','CAM'],['TK','Tokelau (Neuseeland)','Tokelau','OCE'],['TV','Tuvalu','Tuvalu','OCE'],['VA','Vatikanstadt (Heiliger Stuhl)','Holy See (Vatican City State)','WEUR'],['VC','St. Vincent und die Grenadinen','Saint Vincent and the Grenadines','CAM'],['VG','Britische Jungferninseln (UK)','Virgin Islands, British','CAM'],['WF','Wallis und Futuna (Frankreich)','Wallis and Futuna','OCE'],
];
const ALL_COUNTRIES=[...COUNTRIES.map(c=>({code:c[0],de:c[1],en:c[2],region:c[3],terr:false})),...TERRITORIES.map(c=>({code:c[0],de:c[1],en:c[2],region:c[3],terr:true}))];
const CBY={}; ALL_COUNTRIES.forEach(c=>CBY[c.code]=c);

/* ---------- RISK SETS ---------- */
window.countryData = window.countryData || {};

function anyDest(prop) {
    return destinations.some(c => window.countryData[c] && window.countryData[c][prop]);
}

/* ---------- AA DEEP LINKS ---------- */
const AA_SLUG={US:'vereinigte-staaten',GB:'vereinigtes-koenigreich',AE:'vereinigte-arabische-emirate',KR:'korea-republik',KP:'korea-demokratische-volksrepublik',CD:'kongo-demokratische-republik',CG:'kongo-republik',CI:'cote-d-ivoire',DO:'dominikanische-republik',CF:'zentralafrikanische-republik',CZ:'tschechische-republik',BA:'bosnien-und-herzegowina',ST:'sao-tome-und-principe',MK:'nordmazedonien',TL:'timor-leste',CV:'kap-verde',GF:'frankreich',MQ:'frankreich',GP:'frankreich',RE:'frankreich',YT:'frankreich',PF:'frankreich',NC:'frankreich'};
function slugify(s){return s.toLowerCase().replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss').replace(/[’'`]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');}
function aaLink(code){const c=CBY[code];if(!c)return 'https://www.auswaertiges-amt.de/de/reiseundsicherheit/reise-und-sicherheitshinweise';return 'https://www.auswaertiges-amt.de/de/service/laender/'+(AA_SLUG[code]||slugify(c.de))+'-node';}
const HEALTH_DEMO={
 TH:{stand:'Stand 11/2025 · Demo-Auszug',de:'Durchfallerkrankungen häufigste Reisekrankheit – nur sicheres Trinkwasser. Dengue landesweit, v.a. Regenzeit.',en:'Diarrhoeal disease most common—safe water only. Dengue nationwide, esp. rainy season.'},
 IN:{stand:'Stand 11/2025 · Demo-Auszug',de:'Hohes Risiko für Durchfall/Typhus, Dengue und Tollwut. Luftverschmutzung in Großstädten.',en:'High risk of diarrhoea/typhoid, dengue and rabies. Air pollution in megacities.'},
 BO:{stand:'Stand Q2/2026 · Demo-Auszug',de:'Aktueller Chikungunya-Ausbruch (Santa Cruz, Cochabamba). Gelbfieber im Tiefland. Höhenkrankheit im Altiplano.',en:'Active chikungunya outbreak (Santa Cruz, Cochabamba). Yellow fever in lowlands. Altitude sickness on the Altiplano.'},
 BR:{stand:'Stand Q2/2026 · Demo-Auszug',de:'Dengue/Chikungunya landesweit erhöht. Gelbfieber in weiten Teilen. Tollwutrisiko (auch Fledermäuse).',en:'Dengue/chikungunya elevated nationwide. Yellow fever across large areas. Rabies risk (incl. bats).'},
};

/* ---------- VACCINES (rows) ---------- */
const VACCINES=[
 {k:'tdap_polio',de:'Tetanus Diphtherie Pertussis Polio',en:'Tetanus Diphtheria Pertussis Polio',tdap_polio:true},
 {k:'mmr',de:'Masern, Mumps, Röteln',en:'Measles, Mumps, Rubella',live:true},
 {k:'varicella',de:'Varizellen (Windpocken)',en:'Varicella (Chickenpox)',live:true},
 {k:'hepatitis',de:'Hepatitis A + B',en:'Hepatitis A + B',hep:true},
 {k:'tbe',de:'FSME',en:'TBE (FSME)'},
 {k:'menacwy',de:'Meningokokken ACWY',en:'Meningococcal ACWY',menacwy:true},
 {k:'menb',de:'Meningokokken B',en:'Meningococcal B'},
 {k:'yellowfever',de:'Gelbfieber',en:'Yellow fever',live:true},
 {k:'typhoid',de:'Typhus',en:'Typhoid fever'},
 {k:'rabies',de:'Tollwut',en:'Rabies'},
 {k:'jev',de:'Japanische Enzephalitis',en:'Japanese encephalitis'},
 {k:'dengue',de:'Dengue-Fieber',en:'Dengue fever',live:true,dengue:true},
 {k:'chikungunya',de:'Chikungunya',en:'Chikungunya',live:false},
 {k:'cholera',de:'Cholera',en:'Cholera'},
 {k:'influenza',de:'Influenza',en:'Influenza'},
 {k:'covid',de:'COVID-19',en:'COVID-19'},
 {k:'pneumo',de:'Pneumokokken',en:'Pneumococcal'},
 {k:'hpv',de:'HPV',en:'HPV'},
 {k:'zoster',de:'Herpes Zoster',en:'Herpes zoster'},
 {k:'mpox',de:'Mpox',en:'Mpox'}
];
const PROD_COMPS={tdap_ipv:['T','D','aP','IPV'],tdap:['T','D','aP'],td_ipv:['T','D','IPV'],td:['T','D'],t:['T'],hexa:['T','D','aP','IPV'],penta:['T','D','aP','IPV']};

/* ---------- AVAILABILITY (min = Jahre, präzise auf den Monat) ---------- */
const AVAIL={
 yellowfever:{prod:'Stamaril',min:0.75,max:60,de:'9 Monate – 60 Jahre. Über 60 J. nur nach individueller Nutzen-Risiko-Abwägung. Auffrischung nach 10 J. (5 J. bei Erstimpfung <2 J.).',en:'9 months – 60 years. Over 60 only after individual assessment. Booster after 10 yrs (5 yrs if first dose <2 yrs).'},
 tdap_polio:{prod:'Boostrix / Repevax / Hexavalent / IPV Mérieux',min:0.115,de:'Säuglinge: hexavalent ab 6 Wochen. Auffrischungen: Boostrix ab 4 J., Repevax (Tdap-IPV) ab 3 J. Auffrischung Td (bzw. Tdap/IPV) alle 10 J. (Pertussis 1× als Erw. + in jeder SS). Polio Auffrischung nur bei Reise in Risikogebiete.',en:'Infants: hexavalent from 6 wks. Boosters: Boostrix from 4 yrs, Repevax (Tdap-IPV) from 3 yrs. Booster Td (or Tdap/IPV) every 10 yrs (pertussis once adult + each pregnancy). Polio booster only for travel to risk areas.'},
 mmr:{prod:'MMRvaxPro / Priorix',min:0.75,de:'Ab (9–)12 Monaten. Lebendimpfstoff. Nach 1970 Geborene ≥18 J. mit unklarem Status: 1 × MMR.',en:'From (9–)12 months. Live vaccine. Adults born after 1970, unclear status: 1 × MMR.'},
 varicella:{prod:'Varilrix / ProVarivax',min:0.9,de:'Ab 11 Monaten. Lebendimpfstoff. 2 Dosen. Serologie-Check nach Möglichkeit.',en:'From 11 months. Live vaccine. 2 doses. Serology check if possible.'},
 hepatitis:{prod:'Avaxim/Havrix · Engerix B Erwachsene · Twinrix',min:0,de:'Hep A: Havrix Kinder 1–15 J., Avaxim ab 16 J. Hep B: ab Geburt (Twinrix Kinder ab 1 J., Erw. ab 16 J.).',en:'Hep A: Havrix paed 1–15 yrs, Avaxim from 16. Hep B: from birth (Twinrix paed from 1 yr, adult from 16).'},
 typhoid:{prod:'Typhim Vi',min:2,de:'Injektion (Totimpfstoff) ab 2 J., 1 Dosis, Auffrischung spätestens nach 3 J.',en:'Injectable from age 2, 1 dose, revaccinate within 3 yrs.'},
 menacwy:{prod:'Nimenrix',min:0.115,de:'Nimenrix (konjugiert) ab 6 Wochen. STIKO-Standard/Nachhol bis <25 J. Auffrischung nach 10 J.',en:'Nimenrix (conjugate) from 6 weeks. STIKO standard/catch-up until <25 yrs. Booster after 10 yrs.'},
 menb:{prod:'Bexsero',min:0.167,de:'Bexsero ab 2 Monaten. STIKO-Standard für Säuglinge; sonst nach Indikation.',en:'Bexsero from 2 months. STIKO standard for infants; otherwise per indication.'},
 jev:{prod:'Ixiaro',min:0.167,de:'Ab 2 Monaten. WICHTIG: 2 M – <3 J. je 0,25 ml; ab 3 J. je 0,5 ml. >65 J.: keine Langzeitdaten.',en:'From 2 months. IMPORTANT: 2 mo – <3 yrs 0.25 ml; from 3 yrs 0.5 ml. >65 yrs: no long-term data.'},
 rabies:{prod:'Rabipur / Verorab',min:0,de:'Keine Altersbegrenzung. Schnellschema präexpositionell: Rabipur 3 Dosen (d0/d3/d7); Verorab 2 Dosen (d0/d7).',en:'No age limit. Pre-exposure rapid schedule: Rabipur 3 doses (d0/d3/d7); Verorab 2 doses (d0/d7).'},
 cholera:{prod:'Dukoral',min:2,de:'Schluckimpfung (Totimpfstoff) ab 2 J. 2–6 J.: 3 Dosen; ab 6 J.: 2 Dosen (je ≥1 Woche Abstand, max. 6 Wochen). Auffrischung ab 6 J. nach 2 J.',en:'Oral (inactivated) from age 2. 2–6 yrs: 3 doses; from 6 yrs: 2 doses (≥1 week apart, max 6 weeks). Booster from 6 yrs after 2 yrs.'},
 tbe:{prod:'Encepur',min:1,de:'Encepur Kinder 1–11 J. (0,25 ml), Erwachsene ab 12 J. (0,5 ml). Booster >50 J. alle 3 J.',en:'Encepur paed 1–11 yrs (0.25 ml), adult from 12 yrs (0.5 ml). Booster >50 yrs every 3 yrs.'},
 hpv:{prod:'Gardasil 9',min:9,de:'Ab 9 J. 9–14 J.: 2 Dosen; ab 15 J.: 3 Dosen.',en:'From age 9. Age 9–14: 2 doses; from 15: 3 doses.'},
 influenza:{prod:'Influsplit (≥6 M) / Efluelda HD (≥60 J.)',min:0.5,de:'Influsplit ab 6 Monaten; Efluelda Hochdosis ab 60 J.',en:'Influsplit from 6 months; Efluelda high-dose from 60 yrs.'},
 covid:{prod:'—',avail:false,de:'(Standardversorgung / Hausarzt)',en:'(Standard supply / GP)'},
 zoster:{prod:'Shingrix',min:18,de:'Totimpfstoff ab 18 J. 2 Dosen (Abstand 2 M). Standard ab 60 J.; ab 18 J. bei Risiko.',en:'Inactivated, from 18 yrs. 2 doses (2 mo apart). Standard from 60; from 18 if at risk.'},
 pneumo:{prod:'Prevenar 20',min:0.115,de:'Ab 6 Wochen. Erwachsene: einmalige Dosis (Indikation ab 18 J., Standard ab 60 J.).',en:'From 6 weeks. Adults: single dose (indication from 18, standard from 60).'},
 mpox:{prod:'Imvanex',min:12,de:'Nicht-replizierender Lebendimpfstoff ab 12 J., 2 Dosen (≥28 d).',en:'Non-replicating live vaccine from 12 yrs, 2 doses (≥28 d).'},
 dengue:{prod:'Qdenga',min:4,de:'Lebendimpfstoff ab 4 J. 2 Dosen (0, 3 M). Nur bei durchgemachter Dengue-Infektion empfohlen.',en:'Live vaccine from age 4. 2 doses (0, 3 mo). Recommended only after prior dengue infection.'},
 chikungunya:{prod:'Vimkunya',min:12,de:'Vimkunya = Totimpfstoff (VLP), ab 12 J., 1 Dosis. (IXCHIQ = Lebendimpfstoff, Vorsicht ≥65 J.)',en:'Vimkunya = inactivated (VLP), from 12 yrs, 1 dose. (IXCHIQ = live, caution ≥65 yrs.)'},
};

/* ---------- INFO (mit Schnellschema) ---------- */
const INFO={
 yellowfever:{disease:{de:'Virale hämorrhagische Erkrankung durch Mücken; Fieber, Gelbsucht, Organversagen.',en:'Mosquito-borne viral haemorrhagic disease; fever, jaundice, organ failure.'},epi:{de:'Tropisches Afrika und Südamerika. Teils Impfpflicht.',en:'Tropical Africa and South America. Entry proof sometimes required.'},side:{de:'Meist mild. Sehr selten schwere Reaktionen (>60 J., Immunschwäche).',en:'Usually mild. Very rarely serious reactions (>60 yrs, immunocompromised).'},sched:{de:'1 Dosis, langjähriger/lebenslanger Schutz. Nur in zugelassenen Impfstellen. Frühestens 10 Tage vor Einreise gültig.',en:'1 dose, long-term/lifelong protection. Approved centres only. Valid from 10 days before entry.'}},
 tdap_polio:{disease:{de:'Tetanus (Wundstarrkrampf), Diphtherie, Pertussis (Keuchhusten), Poliomyelitis (Kinderlähmung).',en:'Tetanus, diphtheria, pertussis, poliomyelitis.'},epi:{de:'Pertussis zirkuliert weltweit. Polio endemisch in AF/PK (WPV1); cVDPV in Afrika/Asien.',en:'Pertussis circulates worldwide. Polio endemic in AF/PK (WPV1); cVDPV in Africa/Asia.'},side:{de:'Lokalreaktion, gelegentlich Fieber.',en:'Local reaction, occasional fever.'},sched:{de:'<ul style="margin:4px 0 0 20px;padding:0"><li>Säuglinge: hexavalent 2+1 oder 3+1 Schema</li><li>Auffrischung alle 10 J. (Td)</li><li>1× Pertussis als Erwachsener und in jeder Schwangerschaft</li><li>Polio Auffrischung (IPV) bei Reise in Polio-Risikoländer (WHO verlangt Dosis 4 Wo–12 Mon vor Ausreise bei Aufenthalt >4 Wochen in Kat-1-Land)</li></ul>',en:'<ul style="margin:4px 0 0 20px;padding:0"><li>Infants: hexavalent 2+1 or 3+1 schedule</li><li>Booster every 10 yrs (Td)</li><li>Pertussis once as adult and each pregnancy</li><li>Polio booster (IPV) for travel to polio-risk countries (WHO requires dose 4 wks–12 mo before exit for stay >4 weeks in cat 1 country)</li></ul>'}},
 mmr:{disease:{de:'Masern (hochansteckend), Röteln in SS teratogen.',en:'Measles (highly contagious), rubella teratogenic in pregnancy.'},epi:{de:'Weltweite Ausbrüche, auch Europa.',en:'Outbreaks worldwide incl. Europe.'},side:{de:'Leichte „Impfmasern" 5–12 Tage möglich.',en:'Mild fever/rash 5–12 days possible.'},sched:{de:'2 Dosen (Mindestabstand 4 Wochen – Schnellschema möglich). Vor 1971 Geborene i.d.R. immun. Durchgemachte Masern = Immunität.',en:'2 doses (min. 4 weeks apart—rapid possible). Born before 1971 usually immune. Prior measles = immunity.'}},
 hepatitis:{disease:{de:'Hep A: Leberentzündung über Wasser/Nahrung. Hep B: über Blut/Sexualkontakt, kann chronisch werden.',en:'Hep A: hepatitis via water/food. Hep B: via blood/sexual contact, can become chronic.'},epi:{de:'Hep A erhöht außerhalb West-/Nordeuropas; Hep B höhere Prävalenz Afrika/Asien.',en:'Hep A elevated outside W/N Europe; Hep B higher prevalence Africa/Asia.'},side:{de:'Lokalreaktion, gelegentlich Kopfschmerz.',en:'Local reaction, occasional headache.'},sched:{de:'<strong>Hep A (mono, Avaxim/Havrix)</strong><br>• 1 Dosis → ~1 Jahr Schutz<br>• 2 Dosen (0 / 6–12 Mon) → Langzeitschutz<br>• bei fortbestehender Exposition Auffrischung ~alle 10 Jahre<br><br><strong>Hep B (mono, Engerix)</strong><br>• 3 Dosen (0 / 1 / 6 Mon)<br>• nach erfolgreicher Grundimmunisierung (Anti-HBs &gt;100) keine Auffrischung<br><br><strong>Twinrix (Hep A + B)</strong><br>• Grundimmunisierung: 3 Dosen (0 / 1 / 6 Mon)<br>• Schnellschema: 0 / 7 / 21 Tage + Auffrischung nach 12 Mon<br>• <strong>1× Twinrix reicht für Hep A NICHT</strong> (halbe A-Antigenmenge)<br>• Kinder 1–15 J. / Erwachsene ≥16 J. – Formulierung beachten',en:'<strong>Hep A (mono, Avaxim/Havrix)</strong><br>• 1 dose → ~1 year protection<br>• 2 doses (0 / 6–12 mo) → long-term<br>• booster ~every 10 years if ongoing exposure<br><br><strong>Hep B (mono, Engerix)</strong><br>• 3 doses (0 / 1 / 6 mo)<br>• after successful primary series (anti-HBs &gt;100) no booster<br><br><strong>Twinrix (Hep A + B)</strong><br>• primary series: 3 doses (0 / 1 / 6 mo)<br>• Rapid schedule: 0 / 7 / 21 days + booster at 12 mo<br>• <strong>a single Twinrix is NOT enough for Hep A</strong> (half the A antigen)<br>• paediatric 1–15 yrs / adult ≥16 yrs — mind the formulation'}},
 typhoid:{disease:{de:'Bakterielle Darminfektion über Wasser/Nahrung.',en:'Bacterial gut infection via water/food.'},epi:{de:'Höchstes Risiko Südasien.',en:'Highest risk South Asia.'},side:{de:'Injektion: Lokalreaktion.',en:'Injectable: local reaction.'},sched:{de:'Typhim Vi: 1 Dosis, ~3 Jahre. Schutz nach ~1–2 Wochen.',en:'Typhim Vi: 1 dose, ~3 years. Protection after ~1–2 weeks.'}},
 menacwy:{disease:{de:'Bakterielle Hirnhautentzündung/Sepsis, rasch lebensbedrohlich.',en:'Bacterial meningitis/sepsis, rapidly life-threatening.'},epi:{de:'Afrik. Meningitisgürtel; ACWY-Nachweis Pflicht für Hajj/Umrah.',en:'African meningitis belt; ACWY proof mandatory for Hajj/Umrah.'},side:{de:'Lokalreaktion, Fieber möglich.',en:'Local reaction, fever possible.'},sched:{de:'Nimenrix (konjugiert): 1 Dosis, Schutz nach ~10–14 Tagen, Auffrischung nach 10 J. Ältere Polysaccharid- oder reine C-Impfungen decken ACWY nicht vollständig.',en:'Nimenrix (conjugate): 1 dose, protection after ~10–14 days, booster after 10 yrs. Older polysaccharide or C-only vaccines do not fully cover ACWY.'}},
 menb:{disease:{de:'Meningokokken B – Hirnhautentzündung/Sepsis.',en:'Meningococcal B — meningitis/sepsis.'},epi:{de:'Häufigste Serogruppe in Europa; höchstes Risiko Säuglinge/Kleinkinder.',en:'Most common serogroup in Europe; highest risk infants/toddlers.'},side:{de:'Ausgeprägte Lokalreaktion und Fieber v.a. bei Säuglingen. <strong>Wichtig:</strong> Bei zeitgleicher Gabe mit anderen Impfstoffen zwingend an getrennten Körperstellen (z.B. anderer Arm) impfen.',en:'Marked local reaction and fever esp. in infants. <strong>Important:</strong> If given simultaneously with other vaccines, strictly use separate injection sites (e.g., different arm).'},sched:{de:'Bexsero: Säuglinge 2+1 (bzw. 3+1), ab 2 J. 2 Dosen. STIKO-Standard für Säuglinge, sonst Indikationsimpfung.',en:'Bexsero: infants 2+1 (or 3+1), from 2 yrs 2 doses. STIKO standard for infants, otherwise indication.'}},
 jev:{disease:{de:'Virale Gehirnentzündung durch Mücken; selten, aber schwer.',en:'Mosquito-borne viral encephalitis; rare but severe.'},epi:{de:'Ländliches Süd-/Südostasien, Reisfelder/Schweinehaltung, Regenzeit.',en:'Rural South/Southeast Asia, rice fields/pig farming, rainy season.'},side:{de:'Lokalreaktion, Kopf-/Muskelschmerz.',en:'Local reaction, head/muscle ache.'},sched:{de:'<ul style="margin:4px 0 0 20px;padding:0"><li>Ixiaro: 2 Dosen</li><li>Konventionell: 0 / 28 Tage</li><li>Schnellschema: 0 / 7 Tage (NUR 18–65 Jahre!)</li><li>2 M – &lt;3 J.: 0,25 ml / ab 3 J.: 0,5 ml</li><li>Booster nach 12–24 M (~10 J. Schutz)</li></ul>',en:'<ul style="margin:4px 0 0 20px;padding:0"><li>Ixiaro: 2 doses</li><li>Conventional: 0 / 28 days</li><li>Rapid schedule: 0 / 7 days (ONLY 18–65 yrs!)</li><li>2 mo – &lt;3 yrs: 0.25 ml / from 3 yrs: 0.5 ml</li><li>Booster after 12–24 mo (~10 yrs protection)</li></ul>'}},
 rabies:{disease:{de:'Nach Tierbiss nahezu immer tödlich, sobald Symptome auftreten.',en:'Almost always fatal once symptoms appear after an animal bite.'},epi:{de:'Asien, Afrika, Lateinamerika (Hunde, auch Fledermäuse). Kinder besonders gefährdet (Mobilität, Kopf-/Handbisse).',en:'Asia, Africa, Latin America (dogs, also bats). Children especially at risk.'},side:{de:'Lokalreaktion, selten Fieber.',en:'Local reaction, rarely fever.'},sched:{de:'<ul style="margin:4px 0 0 20px;padding:0"><li>Präexpositionell konventionell: 3 Dosen (0 / 7 / 21–28 d)</li><li>Schnellschema Rabipur: 3 Dosen (0 / 3 / 7 d)</li><li>Schnellschema Verorab: 2 Dosen (0 / 7 d)</li><li>Vereinfacht die PEP nach Biss: nur 2 Dosen, kein Immunglobulin nötig</li></ul>',en:'<ul style="margin:4px 0 0 20px;padding:0"><li>Pre-exposure conventional: 3 doses (0 / 7 / 21–28 d)</li><li>Rapid schedule Rabipur: 3 doses (0 / 3 / 7 d)</li><li>Rapid schedule Verorab: 2 doses (0 / 7 d)</li><li>Simplifies PEP after bite: only 2 doses, no immunoglobulin needed</li></ul>'}},
 cholera:{disease:{de:'Schwere wässrige Durchfallerkrankung über verunreinigtes Wasser/Nahrung; rasche Dehydratation.',en:'Severe watery diarrhoea via contaminated water/food; rapid dehydration.'},epi:{de:'Ausbruchs-/Epidemiegebiete, v.a. bei Katastrophen/Flüchtlingslagern. Für normale Touristen selten indiziert – v.a. Helfer/Langzeit in Hochrisikogebieten.',en:'Outbreak/epidemic areas, esp. disasters/refugee camps. Rarely indicated for ordinary tourists — mainly aid workers/long-term in high-risk areas.'},side:{de:'Magen-Darm-Beschwerden. Bietet teilweisen Kreuzschutz gegen ETEC-Reisedurchfall.',en:'GI upset. Provides partial cross-protection against ETEC travellers’ diarrhoea.'},sched:{de:'<ul style="margin:4px 0 0 20px;padding:0"><li>Dukoral Schluckimpfung</li><li>Ab 6 J.: 2 Dosen (≥1 Woche, max. 6 Wochen Abstand)</li><li>2–6 J.: 3 Dosen</li><li>Auffrischung nach 2 J. (bei 2–6 J. nach 6 Monaten)</li></ul>',en:'<ul style="margin:4px 0 0 20px;padding:0"><li>Dukoral oral vaccine</li><li>From 6 yrs: 2 doses (≥1 week, max 6 weeks apart)</li><li>2–6 yrs: 3 doses</li><li>Booster after 2 yrs (for 2–6 yrs after 6 months)</li></ul>'}},
 tbe:{disease:{de:'Zeckenübertragene Hirnhaut-/Gehirnentzündung (FSME).',en:'Tick-borne meningoencephalitis (TBE).'},epi:{de:'Endemiegebiete Mittel-/Osteuropas, Süddeutschland, Baltikum; Frühjahr–Herbst.',en:'Endemic Central/Eastern Europe, S Germany, Baltics; spring–autumn.'},side:{de:'Lokalreaktion, Fieber v.a. nach 1. Dosis.',en:'Local reaction, fever esp. after 1st dose.'},sched:{de:'<ul style="margin:4px 0 0 20px;padding:0"><li>Encepur Kinder 1–11 J. (0,25 ml)</li><li>Erwachsene ab 12 J. (0,5 ml)</li><li>Grundimmunisierung 3 Dosen: konventionell 0 / 1–3 M / 9–12 M</li><li>Schnellschema 0 / d7 / d21 (in ALLEN zugelassenen Altersgruppen)</li><li>1. Auffrischung 3 Jahre nach GI</li><li>Danach &lt;50 J. alle 5–10 J., &gt;50 J. alle 3 J.</li></ul>',en:'<ul style="margin:4px 0 0 20px;padding:0"><li>Encepur paediatric 1–11 yrs (0.25 ml)</li><li>Adult from 12 yrs (0.5 ml)</li><li>Primary 3 doses: conventional 0 / 1–3 mo / 9–12 mo</li><li>Rapid schedule 0 / d7 / d21 (in ALL approved age groups)</li><li>1st booster 3 yrs after primary</li><li>Then &lt;50 yrs every 5–10 yrs, &gt;50 yrs every 3 yrs</li></ul>'}},
 hpv:{disease:{de:'Humane Papillomviren; Gebärmutterhals-/weitere Karzinome, Genitalwarzen.',en:'HPV; cervical/other cancers, genital warts.'},epi:{de:'Sexuell übertragen, weltweit.',en:'Sexually transmitted, worldwide.'},side:{de:'Lokalreaktion, gelegentlich Kreislaufreaktion (im Sitzen impfen).',en:'Local reaction, occasional fainting (vaccinate seated).'},sched:{de:'9–14 J.: 2 Dosen (0, 6–12 M); ab 15 J.: 3 Dosen (0, 2, 6 M).',en:'9–14 yrs: 2 doses; from 15: 3 doses (0, 2, 6 mo).'}},
 influenza:{disease:{de:'Saisonale Grippe; für Ältere/Vorerkrankte gefährlich.',en:'Seasonal influenza; dangerous for elderly/chronically ill.'},epi:{de:'Saisonal weltweit, Tropen ganzjährig.',en:'Seasonal worldwide, year-round in tropics.'},side:{de:'Lokalreaktion, kurze Abgeschlagenheit.',en:'Local reaction, brief malaise.'},sched:{de:'Jährlich; STIKO-Standard ab 60 J., Schwangere, Risikogruppen.',en:'Annually; STIKO standard from 60, pregnancy, risk groups.'}},
 covid:{disease:{de:'SARS-CoV-2; Risiko steigt mit Alter/Vorerkrankung.',en:'SARS-CoV-2; risk rises with age/comorbidity.'},epi:{de:'Weltweit endemisch, saisonale Wellen.',en:'Endemic worldwide, seasonal waves.'},side:{de:'Lokalreaktion, Abgeschlagenheit 1–2 Tage. Bei zeitgleicher Gabe (z.B. mit Influenza) zwingend an getrennten Körperstellen (z.B. anderer Arm) impfen.',en:'Local reaction, fatigue 1–2 days. If co-administered (e.g. with influenza), strictly use separate injection sites.'},sched:{de:'Auffrischung nach STIKO für ≥60 J. und Risikogruppen.',en:'Booster per STIKO for ≥60 yrs and risk groups.'}},
 zoster:{disease:{de:'Gürtelrose durch Reaktivierung des Windpockenvirus; Nervenschmerzen.',en:'Shingles from reactivated varicella virus; nerve pain.'},epi:{de:'Risiko steigt mit Alter/Immunschwäche.',en:'Risk rises with age/immunocompromise.'},side:{de:'Ausgeprägte Lokalreaktion, Muskelschmerz, Fieber häufig. <strong>Wichtig:</strong> Bei zeitgleicher Gabe mit anderen Impfstoffen zwingend an getrennten Körperstellen (z.B. anderer Arm) impfen.',en:'Marked local reaction, muscle ache, fever common. <strong>Important:</strong> If given simultaneously with other vaccines, strictly use separate injection sites (e.g., different arm).'},sched:{de:'Shingrix: 2 Dosen (Abstand 2–6 M). Standard ab 60 J., ab 50 J. bei Risiko.',en:'Shingrix: 2 doses (2–6 mo apart). Standard from 60, from 50 if at risk.'}},
 pneumo:{disease:{de:'Pneumokokken; Lungenentzündung, Sepsis, Meningitis.',en:'Pneumococcus; pneumonia, sepsis, meningitis.'},epi:{de:'Weltweit; höchstes Risiko Ältere/chron. Kranke/Säuglinge.',en:'Worldwide; highest risk elderly/chronically ill/infants.'},side:{de:'Lokalreaktion, selten Fieber. Bei zeitgleicher Gabe mit z.B. Influenza oder COVID-19 an getrennten Körperstellen (anderer Arm) impfen.',en:'Local reaction, rarely fever. If co-administered with flu or COVID-19, use separate injection sites (different arm).'},sched:{de:'PCV20: Erwachsene 1 Dosis (Standard ab 60 J.). Säuglinge nach Impfkalender (nicht Prevenar20).',en:'PCV20: adults 1 dose (standard from 60). Infants per schedule (not Prevenar20).'}},
 mpox:{disease:{de:'Pockenähnliche Erkrankung mit Hautläsionen; meist selbstlimitierend.',en:'Smallpox-like illness; usually self-limiting.'},epi:{de:'Ausbrüche u.a. Zentral-/Westafrika; enger Kontakt.',en:'Outbreaks incl. Central/West Africa; close contact.'},side:{de:'Lokalreaktion; MVA-BN nicht-replizierend, auch bei Immunschwäche einsetzbar.',en:'Local reaction; MVA-BN non-replicating, usable in immunocompromise.'},sched:{de:'MVA-BN: 2 Dosen (≥28 d). Für Indikationsgruppen.',en:'MVA-BN: 2 doses (≥28 d). For indication groups.'}},
 dengue:{disease:{de:'Mückenübertragenes Fieber; Zweitinfektion kann schwer verlaufen.',en:'Mosquito-borne fever; second infection can be severe.'},epi:{de:'Tropen/Subtropen weltweit.',en:'Tropics/subtropics worldwide.'},side:{de:'Lokalreaktion. Lebendimpfstoff (Qdenga). Bei zeitgleicher Gabe mit anderen Impfstoffen an getrennten Körperstellen (anderer Arm) impfen.',en:'Local reaction. Live vaccine (Qdenga). If co-administered, use separate injection sites (different arm).'},sched:{de:'<ul style="margin:4px 0 0 20px;padding:0"><li>Qdenga: 2 Dosen (0 / 3 Mon)</li><li>Empfehlung NUR nach durchgemachter Dengue-Infektion</li><li>Risiko schwererer Verläufe bei Erstinfektion nach Impfung Seronegativer!</li></ul>',en:'<ul style="margin:4px 0 0 20px;padding:0"><li>Qdenga: 2 doses (0 / 3 mo)</li><li>Recommended ONLY after prior dengue infection</li><li>Risk of severe disease in seronegatives upon first natural infection!</li></ul>'}},
 chikungunya:{disease:{de:'Mückenübertragenes Fieber mit teils langanhaltenden Gelenkschmerzen.',en:'Mosquito-borne fever with sometimes prolonged joint pain.'},epi:{de:'Aktuelle Ausbrüche (Q2 2026): Bolivien, Franz.-Guayana, Mauritius, Mayotte, Seychellen, Suriname.',en:'Current outbreaks (Q2 2026): Bolivia, French Guiana, Mauritius, Mayotte, Seychelles, Suriname.'},side:{de:'Lokalreaktion; Vimkunya = Totimpfstoff. <strong>Wichtig:</strong> Bei zeitgleicher Gabe mit anderen Impfstoffen zwingend an getrennten Körperstellen (z.B. anderer Arm) impfen. (IXCHIQ = Lebendimpfstoff, Vorsicht ≥65 J.)',en:'Local reaction; Vimkunya = inactivated. <strong>Important:</strong> If given simultaneously with other vaccines, strictly use separate injection sites (e.g., different arm). (IXCHIQ = live, caution ≥65 yrs.)'},sched:{de:'Vimkunya: 1 Dosis. Indikation je nach Ziel/Ausbruchslage.',en:'Vimkunya: 1 dose. Indication per destination/outbreak.'}},
};

/* ---------- IMMUNO DRUG DB ---------- */
const IMMUNO_DB=[
 {n:'adalimumab',g:'high'},{n:'infliximab',g:'high'},{n:'etanercept',g:'high'},{n:'certolizumab',g:'high'},{n:'golimumab',g:'high'},
 {n:'rituximab',g:'high'},{n:'ocrelizumab',g:'high'},{n:'ofatumumab',g:'high'},{n:'tocilizumab',g:'high'},{n:'sarilumab',g:'high'},
 {n:'secukinumab',g:'high'},{n:'ixekizumab',g:'high'},{n:'ustekinumab',g:'high'},{n:'guselkumab',g:'high'},{n:'risankizumab',g:'high'},
 {n:'vedolizumab',g:'high'},{n:'natalizumab',g:'high'},{n:'abatacept',g:'high'},{n:'belimumab',g:'high'},{n:'anakinra',g:'high'},{n:'canakinumab',g:'high'},
 {n:'tofacitinib',g:'high'},{n:'baricitinib',g:'high'},{n:'upadacitinib',g:'high'},{n:'filgotinib',g:'high'},{n:'fingolimod',g:'high'},{n:'alemtuzumab',g:'high'},
 {n:'azathioprin',g:'high'},{n:'mycophenolat',g:'high'},{n:'mmf',g:'high'},{n:'tacrolimus',g:'high'},{n:'cyclophosphamid',g:'high'},{n:'ciclosporin',g:'dose'},{n:'cyclosporin',g:'dose'},{n:'leflunomid',g:'high'},{n:'sirolimus',g:'high'},{n:'everolimus',g:'high'},{n:'mercaptopurin',g:'high'},
 {n:'methotrexat',g:'dose'},{n:'mtx',g:'dose'},
 {n:'prednisolon',g:'dose'},{n:'prednison',g:'dose'},{n:'methylprednisolon',g:'dose'},{n:'dexamethason',g:'dose'},{n:'cortison',g:'dose'},{n:'kortison',g:'dose'},{n:'hydrocortison',g:'dose'},
 {n:'hydroxychloroquin',g:'low'},{n:'plaquenil',g:'low'},{n:'quensyl',g:'low'},{n:'sulfasalazin',g:'low'},{n:'azulfidine',g:'low'},{n:'mesalazin',g:'low'},{n:'apremilast',g:'low'},{n:'dimethylfumarat',g:'low'},{n:'glatiramer',g:'low'},{n:'interferon',g:'low'},{n:'dupilumab',g:'low'},
];

/* ---------- STATE ---------- */
let destinations=[];
const vaxState={};
let serologyState = { measles: false, vzv: false, hbs: false };

function freshVaxState(){VACCINES.forEach(v=>{
  if(v.tdap_polio)vaxState[v.k]={gi_tdap:false,gi_ipv:false,y_td:'',y_ap:'',y_ipv:'',doses_hexa:'',y_hexa:'',planned_prod:'',planned:false,prov:'charite'};
  else if(v.hep)vaxState[v.k]={aMono:'',aYear:'',bMono:'',bYear:'',twin:'',twYear:'',plannedA:false,plannedB:false,plannedAB:false,provA:'charite',provB:'charite',provAB:'charite'};
  else if(v.menacwy)vaxState[v.k]={done:'',type:'acwy',year:'',planned:false,prov:'charite'};
  else vaxState[v.k]={done:'',year:'',disease:false,dengueHad:false,planned:false,prov:'charite'};
});}
const APPTS=['today','t2','t3','far'];
const APPT_LABEL={today:{de:'Heute',en:'Today'},t2:{de:'2. Termin',en:'2nd appt.'},t3:{de:'3. Termin',en:'3rd appt.'},far:{de:'Späterer Termin',en:'Later appt.'}};
const APPT_SHORT={today:{de:'Heute',en:'Today'},t2:{de:'2.',en:'2nd'},t3:{de:'3.',en:'3rd'},far:{de:'Später',en:'Later'}};
const APPT_COLOR={today:'#2e7d32',t2:'#1565c0',t3:'#6a1b9a',far:'#b26a00'};
function vGaps(k){
  if(k==='rabies')return [7,14];
  if(k==='jev')return [28];
  if(k==='dengue')return [90];  // Qdenga: 0, 3 Monate
  if(k==='hepB'||k==='hepAB')return [28,150];
  if(k==='hepA')return [180];
  if(k==='tbe')return [30,240];  // Encepur Standard: 0, 1, 9 Monate
  if(k==='tdap_polio' || k==='tdap_combo' || k==='ipv_mono')return [28,150];
  if(k==='menacwy')return [28];
  return [28];
}
function gapText(d){
  if(d<=1)return {de:'gleicher Termin möglich',en:'same visit possible'};
  if(d<=7)return {de:'Mindestabstand 1 Woche',en:'min. interval 1 week'};
  if(d<=14)return {de:'Mindestabstand 2 Wochen',en:'min. 2 weeks'};
  if(d<=21)return {de:'Mindestabstand 3 Wochen',en:'min. 3 weeks'};
  if(d<=31)return {de:'Mindestabstand 1 Monat',en:'min. 1 month'};
  if(d<=62)return {de:'Mindestabstand 2 Monate',en:'min. 2 months'};
  if(d<=100)return {de:'Mindestabstand 3 Monate',en:'min. 3 months'};
  if(d<=200)return {de:'Mindestabstand ca. 6 Monate',en:'min. ~6 months'};
  return {de:'Mindestabstand ca. '+Math.round(d/30)+' Monate',en:'min. ~'+Math.round(d/30)+' months'};
}
let _planDob=null;
function ctxDob(){return _planDob!==null?_planDob:el('p-dob').value;}
function togglePillPlan(k, field) {
  field = field || 'planned';
  vaxState[k][field] = !vaxState[k][field];
  renderApptOverview();
}
let customSchedule = null;
let scheduleLastPlannedKeys = '';

function buildOptimalSchedule(planned, departureStr) {
  let allDoses = [];
  planned.forEach(item => {
    const gaps = vGaps(item.k);
    const st = vaxState[item.stKey];
    let doseCount = 1;
    if (item.k === 'hepB' || item.k === 'hepAB') { if (!st.bMono && !st.twin) doseCount = 3; }
    else if (item.k === 'hepA') { if (!st.aMono && !st.twin) doseCount = 2; }
    else if (item.k === 'tbe' || item.k === 'rabies' || item.k === 'hpv') { if (st.done === '') doseCount = 3; }
    else if (['jev', 'dengue', 'mpox', 'zoster', 'menb', 'varicella', 'mmr'].includes(item.k)) { if (st.done === '') doseCount = 2; }
    else if (item.k === 'tdap_combo') { const dh = st.doses_hexa==='>3'?4:parseInt(st.doses_hexa||0,10); if (!(st.gi_tdap || dh>=3)) doseCount = 3; }
    else if (item.k === 'ipv_mono') { const dh = st.doses_hexa==='>3'?4:parseInt(st.doses_hexa||0,10); if (!(st.gi_ipv || dh>=3)) doseCount = 3; }
    else if (item.k === 'menacwy') { if (st.done === '') doseCount = 1; }

    let currentMinOffset = 0;
    for (let i = 0; i < doseCount; i++) {
       if (i > 0) currentMinOffset += (gaps[i-1] || 28);
       allDoses.push({
          id: item.k + '_' + i,
          name: item.name + (doseCount > 1 ? ` - Dosis ${i+1}` : ''),
          k: item.k,
          stKey: item.stKey,
          planField: item.planField,
          live: item.live,
          doseIdx: i,
          minOffset: currentMinOffset,
          isReacto: ['chikungunya', 'dengue', 'menacwy'].includes(item.k)
       });
    }
  });

  if (!allDoses.length) return [];

  let bucketDays = new Set([0]);
  allDoses.forEach(d => bucketDays.add(d.minOffset));
  bucketDays = Array.from(bucketDays).sort((a,b)=>a-b);

  let buckets = bucketDays.map(offset => ({ offset, items: [], live: false, reactoCount: 0 }));

  function findValidBucket(dose, minOffset = 0) {
    for (let pass = 0; pass < 2; pass++) {
       let maxItems = pass === 0 ? 2 : 3; 
       for (let i = 0; i < buckets.length; i++) {
          let b = buckets[i];
          if (b.offset < minOffset || b.offset < dose.minOffset) continue;
          if (b.items.length > maxItems) continue; 
          if (b.items.some(it => it.k === dose.k)) continue;
          if (dose.isReacto && b.reactoCount >= 2) continue; 
          if (dose.live) {
             let conflict = false;
             for (let j = 0; j < buckets.length; j++) {
                if (i === j) continue;
                if (buckets[j].live && Math.abs(buckets[j].offset - b.offset) < 28) { conflict = true; break; }
             }
             if (conflict) continue;
          }
          return i;
       }
    }
    let lastBucket = buckets.length > 0 ? buckets[buckets.length - 1] : null;
    let newDay = (lastBucket ? lastBucket.offset : 0) + (dose.live ? 28 : 7);
    buckets.push({ offset: newDay, items: [], live: false, reactoCount: 0 });
    return buckets.length - 1;
  }

  let sortedDoses = allDoses.filter(d => d.k !== 'typhoid').sort((a, b) => {
     if (a.k === 'yellowfever') return -1;
     if (b.k === 'yellowfever') return 1;
     const prioA = ['rabies','jev','hepB','hepAB'].includes(a.k) ? 1 : 2;
     const prioB = ['rabies','jev','hepB','hepAB'].includes(b.k) ? 1 : 2;
     if (prioA !== prioB) return prioA - prioB;
     return a.minOffset - b.minOffset;
  });

  const assignedDays = {};
  sortedDoses.forEach(dose => {
     let minStart = 0;
     if (dose.doseIdx > 0) {
        let prevDay = assignedDays[dose.k][dose.doseIdx - 1];
        let reqGap = vGaps(dose.k)[dose.doseIdx - 1] || 28;
        minStart = prevDay + reqGap;
        if (!buckets.some(b => b.offset >= minStart)) {
           buckets.push({ offset: minStart, items: [], live: false, reactoCount: 0 });
        }
     }
     
     let bIdx = findValidBucket(dose, minStart);
     buckets[bIdx].items.push(dose);
     if (dose.live) buckets[bIdx].live = true;
     if (dose.isReacto) buckets[bIdx].reactoCount++;
     
     if (!assignedDays[dose.k]) assignedDays[dose.k] = [];
     assignedDays[dose.k].push(buckets[bIdx].offset);
  });

  let typhoidDoses = allDoses.filter(d => d.k === 'typhoid');
  if (typhoidDoses.length > 0) {
     let typhoid = typhoidDoses[0];
     let targetDay = buckets[buckets.length-1].offset;
     if (departureStr) {
        let daysToDep = Math.round((new Date(departureStr) - new Date()) / 86400000);
        let idealDay = daysToDep - 14;
        if (idealDay < 0) idealDay = 0;
        let validBuckets = buckets.filter(b => b.offset <= idealDay && b.items.length < 4);
        if (validBuckets.length > 0) targetDay = validBuckets[validBuckets.length - 1].offset;
     }
     let tIdx = buckets.findIndex(b => b.offset === targetDay);
     if (tIdx === -1 || buckets[tIdx].items.length >= 5) tIdx = findValidBucket(typhoid, 0); 
     buckets[tIdx].items.push(typhoid);
  }

  for(let i=0; i<buckets.length-1; i++) {
     if(buckets[i].items.length === 4 && buckets[i+1].items.length === 1) {
        // Niemals eine Impfung in einen Termin verschieben, der dieselbe Impfung (k) schon enthält
        const notDup = it => !buckets[i+1].items.some(x => x.k === it.k);
        let movable = buckets[i].items.filter(it => it.k !== 'yellowfever' && !it.live && notDup(it));
        if(movable.length === 0) movable = buckets[i].items.filter(it => it.k !== 'yellowfever' && notDup(it));
        if(movable.length >= 1) {
           buckets[i+1].items.push(movable[0]);
           buckets[i].items = buckets[i].items.filter(it => it.id !== movable[0].id);
        }
     }
  }
  // Absoluter Sicherheitsgurt: keine zwei Dosen derselben Impfung am selben Termin.
  // Duplikate werden NICHT verworfen, sondern in einen späteren gültigen Termin verschoben.
  for (let bi = 0; bi < buckets.length; bi++) {
     const b = buckets[bi];
     const seen = {};
     const dups = [];
     b.items = b.items.filter(it => { if (seen[it.k]) { dups.push(it); return false; } seen[it.k] = true; return true; });
     dups.forEach(it => {
        const minGap = (vGaps(it.k)[0]) || 28;
        let target = buckets.find(bb => bb.offset >= b.offset + minGap && !bb.items.some(x => x.k === it.k));
        if (!target) { target = { offset: b.offset + minGap, items: [], live: false, reactoCount: 0 }; buckets.push(target); }
        target.items.push(it);
     });
  }
  buckets.sort((a, c) => a.offset - c.offset);

  return buckets.filter(b => b.items.length > 0);
}

window.hDragStart = function(e) { e.dataTransfer.setData('text/plain', e.target.id); e.target.classList.add('dragging'); setTimeout(()=>e.target.style.opacity='0.5', 0); };
window.hDragEnd = function(e) { e.target.classList.remove('dragging'); e.target.style.opacity='1'; saveCustomSchedule(); };
window.hDragOver = function(e) { e.preventDefault(); const bucket = e.target.closest('.sched-body'); if (bucket) bucket.classList.add('drag-over'); };
window.hDragLeave = function(e) { const bucket = e.target.closest('.sched-body'); if (bucket) bucket.classList.remove('drag-over'); };
window.hDrop = function(e) { 
  e.preventDefault(); 
  const bucket = e.target.closest('.sched-body'); 
  if (bucket) { 
    bucket.classList.remove('drag-over'); 
    const id = e.dataTransfer.getData('text/plain'); 
    const elId = document.getElementById(id); 
    if (elId) { 
      const k = elId.dataset.k;
      const existing = bucket.querySelector(`[data-k="${k}"]`);
      if (existing && existing.id !== elId.id) return;
      bucket.appendChild(elId); 
      saveCustomSchedule(); 
    } 
  } 
};

window.hRemoveItem = function(id) {
   let el = document.getElementById(id);
   if (el) {
       let k = el.dataset.k;
       let stKey = el.dataset.stkey;
       let planField = el.dataset.planfield;
       el.remove();
       saveCustomSchedule();
       
       let stillExists = false;
       if (customSchedule) {
           customSchedule.forEach(b => {
               b.items.forEach(it => {
                   if (it.k === k) stillExists = true;
               });
           });
       }
       if (!stillExists && vaxState[stKey] && typeof vaxState[stKey][planField] !== 'undefined') {
           vaxState[stKey][planField] = false;
           renderApptOverview();
           renderVaxTable();
       }
   }
};

window.hRemoveBucket = function(idx) {
    let buckets = document.querySelectorAll('.sched-bucket');
    if (buckets[idx]) {
        buckets[idx].remove();
        saveCustomSchedule();
    }
};

window.bucketEditMode = {};
window.toggleBucketEdit = function(idx) {
    window.bucketEditMode[idx] = !window.bucketEditMode[idx];
    renderApptOverview();
};

window.hUpdateBucketOffset = function(inputEl, idx, prevOffset) {
    if (!customSchedule || !customSchedule[idx]) return;
    let relW = parseInt(inputEl.value, 10);
    if (isNaN(relW) || relW < 0) relW = 0;
    let bucketEl = inputEl.closest('.sched-bucket');
    if (bucketEl) {
        bucketEl.dataset.offset = prevOffset + (relW * 7);
        window.saveCustomSchedule();
    }
};

window.hAddAppt = function(isExternal) {
    if (!customSchedule) {
        saveCustomSchedule();
    }
    let lastOffset = customSchedule.length > 0 ? customSchedule[customSchedule.length - 1].offset : 0;
    customSchedule.push({
        origOffset: lastOffset,
        offset: lastOffset,
        items: [],
        isExternal: isExternal,
        live: false,
        reactoCount: 0
    });
    renderApptOverview();
};

window.saveCustomSchedule = function() {
  const buckets = document.querySelectorAll('.sched-bucket');
  let newCustom = [];
  
  buckets.forEach(b => {
     let offset = parseInt(b.dataset.offset, 10);
     let isExternal = b.dataset.external === 'true';
     let items = [];
     b.querySelectorAll('.sched-item').forEach(it => {
         let baseName = it.dataset.name.replace(/\s*-?\s*Dosis\s*\d+/g, '').replace(/\s*-?\s*\(Dosis\s*\d+\)/g, '');
         items.push({ id: it.id, name: baseName, k: it.dataset.k, stKey: it.dataset.stkey, live: it.dataset.live==='true', isReacto: it.dataset.reacto==='true' });
     });
     if(items.length > 0 || isExternal) newCustom.push({ origOffset: offset, offset, items, isExternal });
  });

  let lastDoseOffset = {};
  let lastLiveOffset = null;
  let currentMinOffset = 0;

  for (let i = 0; i < newCustom.length; i++) {
     let b = newCustom[i];
     let requiredOffset = currentMinOffset;

      b.items.forEach(it => {
         if (it.live && lastLiveOffset !== null) {
             let needed = lastLiveOffset + 28;
             if (needed > requiredOffset) requiredOffset = needed;
         }
         if (lastDoseOffset[it.k] !== undefined) {
             let prevOffset = lastDoseOffset[it.k].offset;
             let prevCount = lastDoseOffset[it.k].count;
             let gaps = vGaps(it.k);
             let gapNeeded = gaps[prevCount - 1] || 28;
             let needed = prevOffset + gapNeeded;
             if (needed > requiredOffset) requiredOffset = needed;
         }
      });
      if (b.items.length === 0) {
          requiredOffset = 0;
      }
      
      b.minAllowedOffset = requiredOffset;
      b.offset = Math.max(b.origOffset, requiredOffset);
      
      b.items.forEach(it => {
         if (it.live) lastLiveOffset = b.offset;
         if (!lastDoseOffset[it.k]) lastDoseOffset[it.k] = { count: 1, offset: b.offset };
         else {
             lastDoseOffset[it.k].count++;
             lastDoseOffset[it.k].offset = b.offset;
         }
      });
      if (b.items.length > 0) {
          currentMinOffset = b.offset;
      }
   }
   customSchedule = newCustom;
   renderApptOverview();
};


function cleanVaxName(name){ if(!name) return ''; let m=name.match(/\(([^)]+)\)/); let s = m ? name.replace('('+m[1]+')','') : name; return s.replace(/\s*-?\s*\(?Dosis\s*\d+\)?/gi,'').trim(); }
function enrichScheduleForDisplay(schedule) {
    if(!schedule) return [];
    let enriched = JSON.parse(JSON.stringify(schedule));
    let totalDoses = {};
    enriched.forEach(b => {
       b.items.forEach(it => { totalDoses[it.k] = (totalDoses[it.k] || 0) + 1; });
    });
    let lastDoseOffset = {};
    let lastLiveOffset = null;
    enriched.forEach(b => {
       let medicalRequiredOffset = 0;
       let reason = null; // bindende Ursache für den Mindestabstand (welche Impfung, welcher Abstand, welcher Vor-Dosis-Termin)
       b.items.forEach(it => {
          if (it.live && lastLiveOffset !== null) {
              let needed = lastLiveOffset + 28;
              if (needed > medicalRequiredOffset) { medicalRequiredOffset = needed; reason = { type:'live', gap:28, prevOffset:lastLiveOffset }; }
          }
          if (lastDoseOffset[it.k] !== undefined) {
              let prevDoses = lastDoseOffset[it.k].count;
              let gaps = vGaps(it.k);
              let gapNeeded = gaps[prevDoses - 1] || 28;
              let needed = lastDoseOffset[it.k].offset + gapNeeded;
              if (needed > medicalRequiredOffset) { medicalRequiredOffset = needed; reason = { type:'dose', name: cleanVaxName(it.name), gap: gapNeeded, prevOffset: lastDoseOffset[it.k].offset }; }
          }
       });
       b.minAllowedOffset = medicalRequiredOffset;
       b._isIndependent = (medicalRequiredOffset === 0);
       b.reason = reason;
       b.items.forEach(it => {
           if (it.live) lastLiveOffset = b.offset;
           if (!lastDoseOffset[it.k]) lastDoseOffset[it.k] = { count: 1, offset: b.offset };
           else { lastDoseOffset[it.k].count++; lastDoseOffset[it.k].offset = b.offset; }
           it.dynamicDoseCount = lastDoseOffset[it.k].count;
           
           let vaxPart = it.name;
           let prodPart = '';
           let match = it.name.match(/\(([^)]+)\)/);
           if (match) {
               prodPart = match[1];
               vaxPart = it.name.replace(`(${prodPart})`, '');
           }
           vaxPart = vaxPart.replace(/\s*-?\s*\(?Dosis\s*\d+\)?/g, '').trim();
           
           let displayDose = (totalDoses[it.k] > 1) ? ` - Dosis ${it.dynamicDoseCount}` : '';
           it.displayName = vaxPart + displayDose;
           if (prodPart) {
               it.displayName += ` <span style="color:var(--grey);font-style:italic;font-weight:normal">(${prodPart})</span>`;
           }
        });
    });
    return enriched;
}
function autoTdapProduct(st, a) {
    if (st && st.planned_prod && st.planned_prod !== 'auto') return st.planned_prod;
    const age = ageExact(el('p-dob').value);
    if (age !== null && age < 5) return 'hexa';
    
    let needsT = (a.T === 'red' || a.T === 'yellow');
    let needsD = (a.D === 'red' || a.D === 'yellow');
    let needsAP = (a.aP === 'red' || a.aP === 'yellow');
    let needsIPV = (a.IPV === 'red' || a.IPV === 'yellow');

    if (needsT && needsD && needsAP && needsIPV) return 'tdap_ipv';
    if (needsT && needsD && !needsAP && needsIPV) return 'tdap_ipv'; // Ambulanz führt kein Revaxis → Repevax (Tdap-IPV)
    if (needsT && needsD && needsAP && !needsIPV) return 'tdap';
    if (needsT && needsD && !needsAP && !needsIPV) return 'tdap';    // kein Td-Einzelprodukt → Boostrix (Tdap)
    if (!needsT && !needsD && !needsAP && needsIPV) return 'ipv';
    if (!needsT && !needsD && needsAP && !needsIPV) return 'tdap';
    
    return 'tdap_ipv';
}

function getPlanName(v, st) {
    let planName = (LANG==='de'?v.de:v.en);
    if (v.k === 'tdap_polio') {
       let prod = autoTdapProduct(st, tdapPolioAssess());
       if (prod === 'tdap_ipv') planName = 'Tetanus Diphtherie Pertussis Polio (Repevax)';
       else if (prod === 'hexa') planName = 'Hexavalent (Hexyon / Infanrix hexa)';
       else if (prod === 'tdap') planName = 'Tetanus Diphtherie Pertussis (Boostrix)';
       else if (prod === 'td_ipv') planName = 'Tetanus Diphtherie Polio (Revaxis)';
       else if (prod === 'td') planName = 'Tetanus Diphtherie Pertussis Polio (Repevax)';
       else if (prod === 'ipv') planName = 'Polio (IPV Mérieux)';
       else planName = 'Tetanus-Diphtherie-Pertussis-Polio';
    } else if (v.k === 'jev') {
       let a = ageExact(el('p-dob').value);
       if (a !== null && a < 3) planName += ' (Ixiaro 0.25ml)';
       else planName += ' (Ixiaro 0.5ml)';
    } else if (v.k === 'tbe') {
       let tF = tbeForm();
       if (tF) planName += ' (' + (LANG==='de'?tF.de:tF.en).split('(')[0].trim() + ')';
     } else if (v.k === 'mmr') { planName = (LANG==='de'?'Masern, Mumps, Röteln':'Measles, Mumps, Rubella') + ' (MMRvaxPro)';
     } else if (v.k === 'rabies') { planName += ' (Rabipur / Verorab)';
     } else if (v.k === 'yellowfever') { planName += ' (Stamaril)';
     } else if (v.k === 'hepA') { planName += ' (Avaxim / Havrix 720)';
     } else if (v.k === 'hepB') { planName += ' (Engerix B)';
     } else if (v.k === 'hepAB') { planName += ' (Twinrix)';
     } else if (v.k === 'typhoid') { planName += ' (Typhim Vi)';
     } else if (v.k === 'cholera') { planName += ' (Dukoral)';
     } else if (v.k === 'menacwy') { planName += ' (Nimenrix)';
     } else if (v.k === 'dengue') { planName += ' (Qdenga)';
     } else if (v.k === 'chikungunya') { planName += ' (Vimkunya)';
     } else if (v.k === 'zoster') { planName += ' (Shingrix)';
     } else if (v.k === 'hpv') { planName += ' (Gardasil 9)';
     } else if (v.k === 'mpox') { planName += ' (Imvanex)';
     } else if (v.k === 'pneumo') { planName += ' (Prevenar 20)';
     } else if (v.k === 'menb') { planName += ' (Bexsero)';
     } else if (v.k === 'varicella') { planName += ' (Varilrix)';
     } else if (v.k === 'influenza') { planName += ' (Efluelda / Influsplit)';
     }
    return planName;
}

function renderApptOverview() {
  const container = el('appt-overview');
  if (!container) return;

  let quickHTML = '<div class="card-desc" style="margin-bottom:12px;font-weight:600">' + (LANG==='de'?'Klicken Sie auf Impfstoffe, um sie in den Terminplan aufzunehmen.':'Click vaccines to add them to the schedule.') + '</div><div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:24px;padding-bottom:16px;border-bottom:1px solid var(--line);">';
  
  VACCINES.forEach(v => {
      const st = vaxState[v.k];
      if (!st) return;
      
      const renderPill = (name, status, subKey, plannedStatus) => {
         if (!status || !['green','red','yellow','grey','blue'].includes(status)) return '';
         let isPlanned = st[plannedStatus] ? true : false;
         let bg = 'var(--grey-xl)', fg = 'var(--text)', border = 'var(--line)';
         if (isPlanned) { bg = '#f3e5f5'; fg = '#6a1b9a'; border = '#ce93d8'; }
         else {
             if(status === 'red') { bg = '#ffebee'; fg = '#d32f2f'; border = '#ffcdd2'; }
             else if(status === 'green') { bg = '#e8f5e9'; fg = '#2e7d32'; border = '#c8e6c9'; }
             else if(status === 'yellow') { bg = '#fff8e1'; fg = '#f57f17'; border = '#ffecb3'; }
             else if(status === 'blue') { bg = '#e3f2fd'; fg = '#1565c0'; border = '#90caf9'; }
         }
         let checkIcon = isPlanned ? `<span style="font-size:10px;margin-right:2px;font-weight:bold">✓</span>` : `<div style="width:6px;height:6px;border-radius:50%;background:${fg};margin-right:2px;"></div>`;
         return `<div class="plan-pill" onclick="togglePillPlan('${v.k}', '${plannedStatus}')" style="font-size:12px;padding:6px 12px;border-radius:14px;background:${bg};color:${fg};border:1px solid ${border};display:flex;align-items:center;gap:4px;cursor:pointer;transition:all 0.2s;user-select:none;">
           ${checkIcon} ${name}
         </div>`;
      };

      if (v.hep) {
         const ha = hepAssess();
        quickHTML += renderPill('Hepatitis A', ha.A, 'hepA', 'plannedA');
        quickHTML += renderPill('Hepatitis B', ha.B, 'hepB', 'plannedB');
        
        let twinStatus = 'grey';
        if (ha.A === 'red' || ha.B === 'red') twinStatus = 'red';
        else if (ha.A === 'yellow' || ha.B === 'yellow') twinStatus = 'yellow';
        else if (ha.A === 'blue' || ha.B === 'blue') twinStatus = 'blue';
        else if (ha.A === 'green' || ha.B === 'green') twinStatus = 'green';
        
        quickHTML += renderPill('Twinrix (A+B)', twinStatus, 'hepAB', 'plannedAB'); 
     } else {
        if (v.tdap_polio) {
            const a = tdapPolioAssess();
            
            // Combo Pill
            let comboStt = 'grey';
            if (a.T === 'red' || a.D === 'red' || a.aP === 'red') comboStt = 'red';
            else if (a.T === 'yellow' || a.D === 'yellow' || a.aP === 'yellow') comboStt = 'yellow';
            else comboStt = 'green';
            
            quickHTML += renderPill('Tetanus Diphtherie Pertussis Polio', comboStt, 'planned', 'planned');
            
            // IPV mono Pill
            let ipvStt = a.IPV;
            if (['green','red','yellow','grey','blue'].includes(ipvStt)) {
                quickHTML += renderPill('Polio (IPV)', ipvStt, 'planned_ipv', 'planned_ipv');
            }
            return;
        }

        let stt = 'grey';
        if (v.menacwy) stt = menacwyAssess().status;
        else stt = assess(v).status;
        
        if (!['green','red','yellow','grey','blue'].includes(stt)) return;
        let isPlanned = st.planned ? true : false;
        let bg = 'var(--grey-xl)', fg = 'var(--text)', border = 'var(--line)';
        if (isPlanned) { bg = '#f3e5f5'; fg = '#6a1b9a'; border = '#ce93d8'; }
        else {
            if(stt === 'red') { bg = '#ffebee'; fg = '#d32f2f'; border = '#ffcdd2'; }
            else if(stt === 'green') { bg = '#e8f5e9'; fg = '#2e7d32'; border = '#c8e6c9'; }
            else if(stt === 'yellow') { bg = '#fff8e1'; fg = '#f57f17'; border = '#ffecb3'; }
            else if(stt === 'blue') { bg = '#e3f2fd'; fg = '#1565c0'; border = '#90caf9'; }
        }
        let name = (LANG==='de'?v.de:v.en);
        if (v.k === 'mmr') name = (LANG==='de'?'Masern, Mumps, Röteln':'Measles, Mumps, Rubella');
        let checkIcon = isPlanned ? `<span style="font-size:10px;margin-right:2px;font-weight:bold">✓</span>` : `<div style="width:6px;height:6px;border-radius:50%;background:${fg};margin-right:2px;"></div>`;
        quickHTML += `<div class="plan-pill" onclick="togglePillPlan('${v.k}', 'planned')" style="font-size:12px;padding:6px 12px;border-radius:14px;background:${bg};color:${fg};border:1px solid ${border};display:flex;align-items:center;gap:4px;cursor:pointer;transition:all 0.2s;user-select:none;">
             ${checkIcon} ${name}
           </div>`;
     }
  });
  quickHTML += '</div>';

  const planned = [];
  VACCINES.forEach(v => {
    const st = vaxState[v.k];
    if (!st) return;

    if (v.hep) {
      if (st.plannedA) planned.push({ name: 'Hepatitis A (' + hepForm('a').split('(')[0].trim() + ')', k: 'hepA', live: false, stKey: v.k, planField: 'plannedA' });
      if (st.plannedB) planned.push({ name: 'Hepatitis B (' + hepForm('b').split('(')[0].trim() + ')', k: 'hepB', live: false, stKey: v.k, planField: 'plannedB' });
      if (st.plannedAB) planned.push({ name: 'Hepatitis A+B (' + hepForm('ab').split('(')[0].trim() + ')', k: 'hepAB', live: false, stKey: v.k, planField: 'plannedAB' });
    } else if (v.tdap_polio) {
      if (st.planned) planned.push({ name: getPlanName(v, st), k: 'tdap_combo', live: false, stKey: v.k, planField: 'planned' });
      if (st.planned_ipv) planned.push({ name: 'Polio (IPV Mérieux)', k: 'ipv_mono', live: false, stKey: v.k, planField: 'planned_ipv' });
    } else {
      if (st.planned) planned.push({ name: getPlanName(v, st), k: v.k, live: !!v.live, stKey: v.k, planField: 'planned' });
    }
  });

  if (planned.length === 0) {
    container.innerHTML = quickHTML + '<div class="empty" data-i18n="noPlan">'+(LANG==='de'?'Noch keine Impfungen zur Planung markiert.':'No vaccinations planned yet.')+'</div>';
    customSchedule = null;
    return;
  }

  const plannedKeys = planned.map(p=>p.k).sort().join('|');
  if (scheduleLastPlannedKeys !== plannedKeys) {
     customSchedule = null;
     scheduleLastPlannedKeys = plannedKeys;
  }

  const departure = el('p-departure').value;
  let buckets = customSchedule;
  if (!buckets) {
     buckets = buildOptimalSchedule(planned, departure);
  }

  buckets = enrichScheduleForDisplay(buckets);

  let html = '';
  const daysDep = departure ? Math.round((new Date(departure)-new Date())/86400000) : null;
  
  let nearDays = 0;
  buckets.forEach(b => {
     if (!b.isExternal) nearDays = Math.max(nearDays, b.offset);
  });
  
  if (buckets.length > 0) {
      let depAlert = '';
      if (daysDep !== null) {
          depAlert = LANG==='de' ? ` | Tage bis Abreise: ${daysDep}` : ` | Days to departure: ${daysDep}`;
          if (daysDep < nearDays) {
              depAlert += ` <span style="color:var(--red);font-weight:bold;margin-left:8px;">${LANG==='de'?'Zeit reicht evtl. nicht!':'May be insufficient!'}</span>`;
          }
      }
      html += `<div style="padding:10px 14px; background:var(--grey-xl); border:1px solid var(--line); border-radius:6px; margin-bottom:16px; font-size:13px; color:var(--text);display:flex;align-items:center;justify-content:center;">
        <strong>${LANG==='de'?'Benötigte Zeit vor Ort: ca.':'Time needed on site: ~'} ${nearDays} ${LANG==='de'?'Tage':'days'}</strong>${depAlert}
      </div>`;
  }
  
  buckets.forEach((b, idx) => {
    let offset = b.offset;
    let title = (LANG === 'de' ? 'Termin ' : 'Appt ') + (idx + 1);
    if (b.isExternal) title += (LANG === 'de' ? ' (Extern)' : ' (External)');
    let isEdit = !!window.bucketEditMode[idx];
    
    let subtitle = '';
    let w = Math.round(offset/7);
    let prevOffset = idx > 0 ? buckets[idx-1].offset : 0;
    let diffW = Math.round((offset - prevOffset)/7);
    
    if (isEdit) {
        let inputHtml = ` <input type="number" value="${diffW}" min="0" max="150" style="width:45px;height:20px;font-size:11px;text-align:center;border:1px solid var(--line);border-radius:3px;margin:0 4px;" title="${LANG==='de'?'Wochen':'Weeks'}" onchange="window.hUpdateBucketOffset(this, ${idx}, ${prevOffset})"> <span style="font-weight:normal">${LANG==='de'?'Wochen':'weeks'}</span>`;
        let delBtn = `<span style="cursor:pointer;color:var(--red);margin-left:16px;font-weight:600;" onclick="window.hRemoveBucket(${idx})">✕ ${LANG==='de'?'Termin löschen':'Delete Appt'}</span>`;
        let doneBtn = `<span style="cursor:pointer;color:var(--primary);margin-left:16px;font-weight:600;text-decoration:underline" onclick="window.toggleBucketEdit(${idx})">${LANG==='de'?'Fertig':'Done'}</span>`;
        let minW = b.minAllowedOffset !== undefined ? Math.round(b.minAllowedOffset/7) : 0;
        let minText = minW > 0 ? (LANG==='de'?`${minW} Wochen ab heute`:`${minW} weeks from today`) : (LANG==='de'?'Unabhängig':'Independent');
        let minHtml = `<div style="font-size:11px;color:var(--grey);margin-bottom:4px;display:inline-block;margin-right:12px">${LANG==='de'?'Mindestabstand:':'Minimum interval:'} <span style="font-weight:600">${minText}</span></div>`;
        subtitle = `<div>${minHtml}</div><div style="font-size:12px;color:var(--text);display:flex;align-items:center;">${LANG==='de'?'Abstand (Wochen):':'Interval (weeks):'}${inputHtml} ${delBtn} ${doneBtn}</div>`;
    } else {
        if (offset === 0 && idx === 0) {
            subtitle = `<div style="font-size:13px;color:var(--grey);font-weight:500;">${LANG==='de'?'Heute (0 Wochen)':'Today (0 weeks)'}</div>`;
        } else {
            // Absolute Zeit ab heute – Monate als echte Kalendermonate (~30,44 Tage),
            // damit z. B. 180 Tage = 6 Monate (nicht 6 Monate + 2 Wochen).
            let absM = Math.floor(offset / 30.44);
            let absRem = Math.round((offset - Math.round(absM * 30.44)) / 7);
            if (absRem >= 4) { absM += 1; absRem -= 4; }   // fast voller Monat -> aufrunden
            let absText = '';
            if (offset === 0) absText = LANG==='de'?'Heute':'Today';
            else {
                let amTxt = absM === 1 ? (LANG==='de'?'1 Monat':'1 month') : (absM > 1 ? (LANG==='de'?`${absM} Monaten`:`${absM} months`) : '');
                let awTxt = absRem === 1 ? (LANG==='de'?'1 Woche':'1 week') : (absRem > 1 ? (LANG==='de'?`${absRem} Wochen`:`${absRem} weeks`) : '');
                if (absM > 0 && absRem > 0) absText = `In ${amTxt} + ${awTxt}`;
                else if (absM > 0) absText = `In ${amTxt}`;
                else if (absRem > 0) absText = `In ${awTxt}`;
                else absText = LANG==='de'?'In Kürze':'Soon';
            }
            // Bindende Ursache: Abstand zur vorherigen DOSIS derselben Impfung (nicht zum vorherigen Termin)
            let reasonHtml = '';
            if (b.reason) {
                if (b.reason.type === 'live') {
                    reasonHtml = LANG==='de' ? '2 Lebendimpfstoffe: mind. 4 Wochen Abstand' : '2 live vaccines: min. 4 weeks apart';
                } else {
                    let gt = gapText(b.reason.gap); gt = LANG==='de'?gt.de:gt.en;
                    let prevIdx = buckets.findIndex(bb => bb.offset === b.reason.prevOffset);
                    let prevLbl = prevIdx >= 0 ? ((LANG==='de'?'Termin ':'Appt ')+(prevIdx+1)) : '';
                    reasonHtml = `${b.reason.name}: ${gt} ${LANG==='de'?'nach vorheriger Dosis':'after previous dose'}${prevLbl?` (${prevLbl})`:''}`;
                }
            }
            if (reasonHtml) {
                subtitle = `<div style="font-size:13px;color:var(--grey);font-weight:500;">${reasonHtml} <span style="color:var(--text);font-weight:bold;margin-left:8px">• ${absText}</span></div>`;
            } else {
                // Flexibel = keine feste Zeitvorgabe → keine widersprüchliche "In X"-Angabe
                subtitle = `<div style="font-size:13px;color:var(--grey);font-style:italic;">${LANG==='de'?'Flexibel terminierbar':'Flexible'}</div>`;
            }
        }
    }
    
    let editIcon = !isEdit ? `<span class="icon-btn" onclick="window.toggleBucketEdit(${idx})" title="${LANG==='de'?'Bearbeiten':'Edit'}">${PENCIL_SVG}</span>` : '';
    let dateAlert = (daysDep !== null && offset > daysDep) ? '<span style="color:var(--red);font-weight:bold;font-size:12px;margin-left:8px">Nach Abreise</span>' : '';

    let itemsHtml = b.items.map(it => {
       return `<div class="sched-item" id="${it.id}" draggable="true" ondragstart="hDragStart(event)" ondragend="hDragEnd(event)" data-name="${it.name}" data-k="${it.k}" data-stkey="${it.stKey}" data-planfield="${it.planField}" data-live="${it.live}" data-reacto="${it.isReacto}">
         <div style="cursor:grab;flex:1;"><b>${it.displayName}</b> ${it.live ? '<span class="badge live">Lebend</span>' : ''}</div>
         <div style="display:flex; gap:12px; align-items:center;">
            <span class="icon-btn del" onclick="hRemoveItem('${it.id}'); event.stopPropagation();" title="${LANG==='de'?'Impfung entfernen':'Remove vaccine'}">✕</span>
            <div style="color:var(--grey);font-size:14px;cursor:grab;">☰</div>
         </div>
       </div>`;
    }).join('');

    if (itemsHtml === '') {
       itemsHtml = `<div style="color:var(--grey);font-size:12px;text-align:center;padding:10px;">${LANG==='de'?'Impfungen hierhin ziehen':'Drag vaccinations here'}</div>`;
    }

    html += `<div class="sched-bucket" data-offset="${offset}" data-external="${!!b.isExternal}">
      <div class="sched-header" style="display:flex; justify-content:space-between; align-items:flex-start;">
        <div>
           <div style="display:flex;align-items:center;">${title} ${dateAlert}</div>
           <div style="color:var(--grey);font-weight:normal;font-size:13px;margin-top:4px">${subtitle}</div>
        </div>
        ${editIcon}
      </div>
      <div class="sched-body" ondragover="hDragOver(event)" ondragleave="hDragLeave(event)" ondrop="hDrop(event)" style="min-height:40px;padding:6px 16px;">${itemsHtml}</div>
    </div>`;
  });

  html += `<div style="display:flex;gap:12px;margin-bottom:16px;">
    <button class="btn sec" style="flex:1;border:1px dashed var(--line);font-size:12px;padding:6px" onclick="hAddAppt(false)">+ ${LANG==='de'?'Charité-Termin':'Add Appt'}</button>
    <button class="btn sec" style="flex:1;border:1px dashed var(--line);font-size:12px;padding:6px" onclick="hAddAppt(true)">+ ${LANG==='de'?'Externer Termin':'Add Ext. Appt'}</button>
  </div>`;

  let maxItems = 0;
  buckets.forEach(b => { if(b.items.length > maxItems) maxItems = b.items.length; });
  if (maxItems >= 5) {
      html += '<div class="warn-box red" style="margin-top:12px;margin-bottom:0"><strong>Achtung:</strong> ' + 
              (LANG==='de'?'Viele (≥5) Impfungen an einem Tag geplant. Es wird empfohlen, die Impfungen besser aufzuteilen.':'Warning: Many (≥5) vaccinations planned for one day. It is recommended to split them up.') + 
              '</div>';
  } else if (maxItems >= 3) {
      html += '<div class="warn-box amber" style="margin-top:12px;margin-bottom:0"><strong>Hinweis:</strong> ' + 
              (LANG==='de'?`${maxItems} Impfungen an einem Tag geplant. Es wird empfohlen, die Impfungen ggf. besser aufzuteilen.`:`${maxItems} vaccinations planned for one day. It is recommended to split them up if possible.`) + 
              '</div>';
  }

  const lives = planned.filter(p => p.live);
  if (lives.length >= 2) {
     html += '<div class="warn-box info" style="margin-top:12px;margin-bottom:0">' + 
             (LANG==='de'?'Bei Lebendimpfstoffen gilt: Entweder am selben Tag impfen oder mind. 4 Wochen Abstand einhalten.':'Live vaccines must be given on the same day or ≥4 weeks apart.') + 
             '</div>';
  }
  if (childhoodOn && childhoodOn()) {
     html += '<div class="warn-box amber" style="margin-top:12px;margin-bottom:0"><strong>'+t('provPaed')+':</strong> '+t('printChildhood')+'</div>';
  }

  container.innerHTML = quickHTML + html;
}

freshVaxState();
let editingId=null;
const _memStore={};
function storeGet(k){try{return localStorage.getItem(k);}catch(e){return _memStore[k]||null;}}
function storeSet(k,v){try{localStorage.setItem(k,v);}catch(e){_memStore[k]=v;}}
let patients=[]; try{patients=JSON.parse(storeGet('charite_patients')||'[]');}catch(e){patients=[];}
const DOSE_OPTS=['1','2','3','4','5','6'];
const DEFAULT_DOSE=[['1','1'],['2','2'],['3','3'],['4','4'],['5','5'],['6','>5']];
 const DOSE_MAP={
  menb:[['1','1'],['2','2'],['3','>2']],
  mmr:[['1','1'],['2','2'],['3','>2']],
  varicella:[['1','1'],['2','2'],['3','>2']],
 dengue:[['1','1'],['2','2'],['3','>2']],
 hpv:[['1','1'],['2','2'],['3','3'],['4','>3']],
 zoster:[['1','1'],['2','2'],['3','>2']],
 mpox:[['1','1'],['2','2'],['3','>2']],
 cholera:[['1','1'],['2','2'],['3','3']],
 rabies:[['1','1'],['2','2'],['3','3'],['4','>3']],
 jev:[['1','1'],['2','2'],['3','3'],['4','>3']],
 tbe:[['1','1'],['2','2'],['3','3'],['4','>3']],
 menacwy:[['1','1'],['2','2'],['3','>2']],
 tdap:[['1','1'],['2','2'],['3','3'],['4','>3']],
 polio:[['1','1'],['2','2'],['3','3'],['4','>3']],
 yellowfever:[['1','1'],['2','>1']],
 pneumo:[['1','1'],['2','2'],['3','3'],['4','>3']],
 covid:[['1','1'],['2','2'],['3','3'],['4','>3']],
};
const YEAR_ONLY=['influenza','typhoid','chikungunya'];
const FUTURE_OPTS=[['1w','+1 Wo','+1 wk','w',1],['2w','+2 Wo','+2 wk','w',2],['3w','+3 Wo','+3 wk','w',3],['1m','+1 Mon','+1 mo','m',1],['2m','+2 Mon','+2 mo','m',2],['3m','+3 Mon','+3 mo','m',3],['4m','+4 Mon','+4 mo','m',4],['5m','+5 Mon','+5 mo','m',5],['6m','+6 Mon','+6 mo','m',6],['9m','+9 Mon','+9 mo','m',9],['12m','+12 Mon','+12 mo','m',12]];
const FUT_BY={}; FUTURE_OPTS.forEach(o=>FUT_BY[o[0]]=o);
const PROVIDERS=[['charite','provCharite'],['gp','provGP'],['paed','provPaed']];

function el(id){return document.getElementById(id);}
function ageExact(dob){
  if(!dob)return null;
  const a = (new Date()-new Date(dob))/(1000*60*60*24*365.25);
  return a < 0 ? 0 : a;
}
function ageYears(dob){const e=ageExact(dob);return e===null?null:Math.floor(e);}
function birthYear(){const v=el('p-dob').value;return v?new Date(v).getFullYear():null;}
function ageDetail(dob){
  if(!dob)return null;const b=new Date(dob),n=new Date();let y=n.getFullYear()-b.getFullYear(),m=n.getMonth()-b.getMonth(),d=n.getDate()-b.getDate();
  if(d<0){m--;const pm=new Date(n.getFullYear(),n.getMonth(),0).getDate();d+=pm;}if(m<0){y--;m+=12;}return {y,m,d};
}
function yearsSince(yr){if(!yr)return null;return (new Date().getFullYear())-parseInt(yr,10);}
function doseNum(v){const d=parseInt(v||'0',10);return isNaN(d)?0:d;}
function durIndex(v){return ['<1w','1-2w','2-4w','1-3m','3-6m','>6m'].indexOf(v);}
function longStay(){return durIndex(el('p-duration').value)>=3;}
function conds(){return [...document.querySelectorAll('.cond:checked')].map(c=>c.value);}
function regionsSelected(){return new Set(destinations.map(c=>CBY[c].region));}
function isChild(){const a=ageExact(el('p-dob').value);return a!==null&&a<18;}
function childhoodOn(){const a=ageYears(el('p-dob').value);return a!==null&&a<18;}

function immunoText(){return el('p-immuno').value.trim().toLowerCase();}
function matchedDrugs(){const s=immunoText();if(!s)return [];return IMMUNO_DB.filter(d=>s.includes(d.n));}
function hasHighImmuno(){return matchedDrugs().some(d=>d.g==='high'||d.g==='dose');}
function hasLowImmuno(){return matchedDrugs().some(d=>d.g==='low');}
function drugRecognized(){return matchedDrugs().length>0;}
function isLowGradeOnly(){return hasLowImmuno()&&!hasHighImmuno();}
function isPregnant(){return el('p-pregnant').value==='pregnant';}
function isBreastfeeding(){return el('p-pregnant').value==='breastfeeding';}
const IMMUNODEF_KW=['hiv','aids','asplen','splenekt','milzentfern','ohne milz','leukämie','leukamie','lymphom','myelom','transplant','stammzell','knochenmark','chemo','angeboren','kongenital','immundefekt','immundefizienz','scid','agammaglobulin','neutropenie','ctla','komplementdefekt','digeorge','di-george','sichelzell','graft'];
function chronicTextVal(){const e=el('p-chronic-text');return e?e.value.trim().toLowerCase():'';}
function hasChronic(){return chronicTextVal().length>0;}
function hasImmuneDef(){const s=chronicTextVal();return s?IMMUNODEF_KW.some(k=>s.includes(k)):false;}
function allergyEgg(){const s=(el('p-allergy').value||'').toLowerCase();return /h(ü|ue)hnerei|hühnereiwei|huehnereiwei|\begg\b|eiwei|ovalbumin|eiklar/.test(s);}
function allergyNote(v){
  if(v.k==='yellowfever'&&allergyEgg())return {de:'Hühnereiweißallergie: Gelbfieber ist hühnerei-basiert – bei schwerer Allergie kontraindiziert, Rücksprache.',en:'Egg allergy: yellow fever is egg-based — contraindicated if severe; seek advice.'};
  if(v.k==='influenza'&&allergyEgg())return {de:'Bei schwerer Hühnereiweißallergie Vorsicht (Influenza).',en:'Caution in severe egg allergy (influenza).'};
  return null;
}
function departureMonth(){const d=el('p-departure').value;return d?new Date(d).getMonth():null;}
// Überschneidet sich der Aufenthalt (Abreise + Dauer) mit der Meningitis-Epidemiesaison (Trockenzeit Dez–Jun)?
// null = Abreisedatum unbekannt (Aufrufer nutzt dann Fallback auf Abreisemonat)
function staySpansDrySeason(){
  const dep=el('p-departure').value; if(!dep) return null;
  const start=new Date(dep+'T00:00:00'); if(isNaN(start.getTime())) return null;
  const durDays={'<1w':6,'1-2w':13,'2-4w':27,'1-3m':75,'3-6m':150,'>6m':240}[el('p-duration').value]||14;
  const dry=[11,0,1,2,3,4,5];
  for(let d=0; d<=durDays; d+=5){ if(dry.includes(new Date(start.getTime()+d*86400000).getMonth())) return true; }
  return false;
}
function serMeasles(){return serologyState.measles;}
function serVZV(){return serologyState.vzv;}
function serHBs(){return serologyState.hbs;}
function toggleSerology(key, checked) { serologyState[key] = checked; recompute(); }
function immunocompromised(){return hasHighImmuno()||hasImmuneDef()||(typeof dbImmunoBlocking==='function'&&dbImmunoBlocking());}
function livesBlocked(){return isPregnant()||immunocompromised();}

/* ---------- Medikamente als Pillen (ein Feld, Immunsuppressiva rot) ---------- */
let medsList = [];
// VacCheck: Wirkstoff-/Handelsnamen-Suche in der Medikamenten-DB
function lookupDrug(name){
  const DB=window.DRUGS_DB; if(!DB||!name) return null;
  const s=String(name).trim().toLowerCase(); if(!s) return null;
  for(const d of DB){ if((d.substance||'').toLowerCase()===s) return d; if((d.brand_names||[]).some(b=>b.toLowerCase()===s)) return d; }
  if(s.length>=3){ for(const d of DB){ if((d.substance||'').toLowerCase().includes(s)) return d; if((d.brand_names||[]).some(b=>b.toLowerCase().includes(s))) return d; } }
  return null;
}
function medIsImmuno(name){ const d=lookupDrug(name); if(d) return !!d.is_immunosuppressant; const s=(name||'').toLowerCase(); return IMMUNO_DB.some(k=>s.includes(k.n)); }
// blockt Lebendimpfungen, wenn ein Immunsuppressivum ohne klare Lebendimpf-Freigabe eingetragen ist
function dbImmunoBlocking(){ return medsList.some(m=>{const d=lookupDrug(m); return d && d.is_immunosuppressant && !/^\s*ja/i.test(d.live_vaccine_allowed||''); }); }
function _esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
// Eine einheitliche Medikamentenliste: Patient = schlichte weiße Einträge (Wirkstoff + Handelsnamen);
// Personal = farbig kategorisiert (unkritisch / immunsuppressiv) mit VacCheck-Infos. Ersetzt die Pillen.
function renderMedList(){
  const box=el('med-vaccheck'); if(!box) return;
  if(!medsList.length){ box.innerHTML=''; return; }
  const staff=(typeof roleSeesClinic==='function') && roleSeesClinic((CURRENT_PROFILE||{role:'arzt'}).role);
  const brands=d=>(d&&d.brand_names&&d.brand_names.length)?' <span class="vc-brands">('+_esc(d.brand_names.slice(0,4).join(', '))+')</span>':'';
  const title = staff ? (LANG==='de'?'Medikamenten-Übersicht (VacCheck · DTG 2026)':'Medication overview (VacCheck · DTG 2026)') : (LANG==='de'?'Ihre Medikamente':'Your medication');
  box.innerHTML='<div class="vc-title">'+title+'</div>'+medsList.map((m,i)=>{
    const d=lookupDrug(m);
    const rm='<button class="vc-rm" onclick="removeMed('+i+')" title="'+(LANG==='de'?'Entfernen':'Remove')+'">✕</button>';
    if(!staff){ const nm=d?d.substance:m; return '<div class="vc-card plain"><div class="vc-h"><span class="vc-name">'+_esc(nm)+brands(d)+'</span>'+rm+'</div></div>'; }
    if(!d) return '<div class="vc-card grey"><div class="vc-h"><span class="vc-name">'+_esc(m)+'</span><span class="vc-hr"><span class="vc-badge grey">'+(LANG==='de'?'nicht in DB':'not in DB')+'</span>'+rm+'</span></div><div class="vc-note">'+(LANG==='de'?'Immunsuppressive Wirkung manuell prüfen.':'Check immunosuppressive effect manually.')+'</div></div>';
    if(!d.is_immunosuppressant) return '<div class="vc-card green"><div class="vc-h"><span class="vc-name">'+_esc(d.substance)+brands(d)+'</span><span class="vc-hr"><span class="vc-badge green">'+(LANG==='de'?'unkritisch':'no concern')+'</span>'+rm+'</span></div></div>';
    return '<div class="vc-card red"><div class="vc-h"><span class="vc-name">'+_esc(d.substance)+brands(d)+'</span><span class="vc-hr"><span class="vc-badge red">'+(LANG==='de'?'Immunsuppressivum':'Immunosuppressant')+'</span>'+rm+'</span></div>'+
      (d.drug_class?'<div class="vc-row"><b>'+(LANG==='de'?'Substanzklasse':'Class')+':</b> '+_esc(d.drug_class)+'</div>':'')+
      (d.class_abstract?'<div class="vc-abstract">'+_esc(d.class_abstract)+'</div>':'')+
      '<div class="vc-grid"><div><b>'+(LANG==='de'?'Lebendimpfung':'Live vaccine')+':</b> '+_esc(d.live_vaccine_allowed||'—')+'</div><div><b>'+(LANG==='de'?'Therapiepause':'Therapy pause')+':</b> '+_esc(d.therapy_pause_needed||'—')+'</div><div><b>'+(LANG==='de'?'Totimpfstoff-Antwort':'Inactivated response')+':</b> '+_esc(d.immune_response_dead_vaccine||'—')+'</div></div></div>';
  }).join('');
}
function renderMedVacCheck(){ renderMedList(); }
function medKey(e){ if(e.key==='Enter'){ e.preventDefault(); addMedFromInput(); } }
function addMedFromInput(){
  const inp=el('p-med-input'); if(!inp) return;
  inp.value.split(',').forEach(part=>{ const n=part.trim(); if(n && !medsList.some(m=>m.toLowerCase()===n.toLowerCase())) medsList.push(n); });
  inp.value=''; syncMeds();
}
function removeMed(i){ medsList.splice(i,1); syncMeds(); }
function syncMeds(){ const h=el('p-immuno'); if(h) h.value = medsList.join(', '); renderMedPills(); renderMedVacCheck(); recompute(); }
function renderMedPills(){ renderMedList(); }
// Autocomplete (wie in der Standalone-App)
function medAutocomplete(){
  const inp=el('p-med-input'), ac=el('med-ac'); if(!inp||!ac) return;
  const v=inp.value.trim().toLowerCase();
  if(v.length<2 || !window.DRUGS_DB){ ac.innerHTML=''; ac.style.display='none'; return; }
  const seen=new Set(), out=[];
  for(const d of window.DRUGS_DB){
    let label='';
    if((d.substance||'').toLowerCase().includes(v)) label=d.substance;
    else { const b=(d.brand_names||[]).find(x=>x.toLowerCase().includes(v)); if(b) label=b+' ('+d.substance+')'; }
    if(label && !seen.has(label)){ seen.add(label); out.push({label, add:d.substance, starts:(d.substance||'').toLowerCase().startsWith(v)||(d.brand_names||[]).some(x=>x.toLowerCase().startsWith(v))}); }
    if(out.length>80) break;
  }
  out.sort((a,b)=>(b.starts-a.starts)|| a.label.localeCompare(b.label));
  const top=out.slice(0,8);
  if(!top.length){ ac.innerHTML=''; ac.style.display='none'; return; }
  ac.innerHTML=top.map(o=>'<div class="med-ac-item" onmousedown="addMedName(\''+o.add.replace(/'/g,"\\'")+'\')">'+_esc(o.label)+'</div>').join('');
  ac.style.display='block';
}
function addMedName(name){ if(name && !medsList.some(m=>m.toLowerCase()===name.toLowerCase())) medsList.push(name); const inp=el('p-med-input'); if(inp)inp.value=''; const ac=el('med-ac'); if(ac){ac.innerHTML='';ac.style.display='none';} syncMeds(); }
function medAcHide(){ const ac=el('med-ac'); if(ac) setTimeout(()=>{ac.style.display='none';},150); }

function availability(v){
  const a=AVAIL[v.k];const age=ageExact(el('p-dob').value);
  if(!a)return {flag:'ok',noteDe:'',noteEn:''};
  if(a.avail===false)return {flag:'na',badgeDe:'nicht vorrätig',badgeEn:'not stocked',noteDe:a.de,noteEn:a.en};
  if(age!==null&&a.min!==undefined&&age<a.min)return {flag:'age',badgeDe:'Alter zu jung',badgeEn:'below min. age',noteDe:'Noch nicht zugelassen. '+a.de,noteEn:'Not yet licensed. '+a.en};
  if(v.k==='yellowfever'&&age!==null&&age>60)return {flag:'caution',badgeDe:'>60 J.',badgeEn:'>60 yrs',noteDe:a.de,noteEn:a.en};
  if(v.k==='jev'&&age!==null&&age<3)return {flag:'caution',badgeDe:'0,25 ml',badgeEn:'0.25 ml',noteDe:a.de,noteEn:a.en};
  if(v.k==='jev'&&age!==null&&age>65)return {flag:'caution',badgeDe:'>65 J.',badgeEn:'>65 yrs',noteDe:a.de,noteEn:a.en};
  return {flag:'ok',noteDe:a.de,noteEn:a.en};
}
function liveAdvice(v){
  if(!v.live)return null;
  if(isPregnant())return {level:'block',de:'In Schwangerschaft/Stillzeit Vorsicht – Lebendimpfstoff (Gelbfieber: Nutzen-Risiko abwägen).',en:'Caution in pregnancy/breastfeeding — live vaccine (yellow fever: weigh risk-benefit).'};
  if(hasHighImmuno()||hasImmuneDef())return {level:'block',de:'Bei relevanter Immunsuppression/Immundefizienz kontraindiziert. Falls möglich ≥4 Wochen vor Therapiebeginn impfen.',en:'Contraindicated under relevant immunosuppression/immune deficiency. If feasible, vaccinate ≥4 weeks before therapy.'};
  if(isLowGradeOnly())return {level:'caution',de:'Niedriggradige Immunsuppression – i.d.R. möglich; ≥4 Wochen vor Therapiebeginn.',en:'Low-grade immunosuppression — usually possible; ≥4 weeks before therapy.'};
  return null;
}

function getRisk(dKey) {
  let highest = 'none';
  let hasTransit = false;
  let hasHighRisk = false;
  let hasOutbreak = false;
  for(let c of destinations) {
     if(!window.countryData[c] || !window.countryData[c].diseases || !window.countryData[c].diseases[dKey]) {
        console.log("getRisk loop skip", c, dKey, !!window.countryData[c], !!(window.countryData[c]&&window.countryData[c].diseases));
        continue;
     }
     let d = window.countryData[c].diseases[dKey];
     let r = d.risk_level;
     console.log("getRisk match:", c, dKey, r);
     if(r === 'mandatory_all') highest = 'mandatory_all';
     else if(r === 'recommended' && highest !== 'mandatory_all') highest = 'recommended';
     else if(r === 'risk_based' && highest !== 'mandatory_all' && highest !== 'recommended') highest = 'risk_based';
     else if(r === 'standard' && highest === 'none') highest = 'standard';
     
     if(d.details && d.details.includes('mandatory_transit')) hasTransit = true;
     if(d.details && d.details.includes('high_risk')) hasHighRisk = true;
     if(d.details && d.details.includes('outbreak')) hasOutbreak = true;
  }
  return { level: highest, transit: hasTransit, highRisk: hasHighRisk, outbreak: hasOutbreak };
}

function baseLevel(v){
  const age=ageExact(el('p-dob').value);const c=conds();const ls=longStay();const k=v.k;const di=durIndex(el('p-duration').value);
  let level='none',mand=false,noteDe='',noteEn='';
  
  const dMap = {
    'yellowfever': 'yellow_fever', 'mmr': 'mmr', 'typhoid': 'typhoid', 
    'menb': 'meningitis', 'jev': 'je', 'rabies': 'rabies', 'cholera': 'cholera',
    'tbe': 'tbe', 'hpv': 'hpv', 'influenza': 'influenza', 'covid': 'covid',
    'mpox': 'mpox', 'dengue': 'dengue', 'chikungunya': 'chikungunya',
    'hepatitis': null, 'polio': 'polio', 'zoster': 'zoster', 'pneumo': 'pneumokokken'
  };
  
  const dKey = dMap[k];
  const risk = dKey ? getRisk(dKey) : null;
  const rl = risk ? risk.level : 'none';

  switch(k){
   case 'yellowfever':
     let yfNoteDe = []; let yfNoteEn = [];
     if(rl === 'mandatory_all'){
         level='strong';mand=true;
         yfNoteDe.push('Impfnachweis Pflicht');yfNoteEn.push('Proof required');
     }
     
     if(risk && risk.transit){
         yfNoteDe.push('Nachweis bei Einreise aus Endemiegebiet / Transit');
         yfNoteEn.push('Proof if arriving from endemic area / transit');
     }
     
     let fallbackYF = false;
     for(let dest of destinations) { if(window.countryData[dest] && window.countryData[dest].YF_RECOMMENDED) fallbackYF = true; }
     if(rl === 'recommended' || rl === 'risk_based' || fallbackYF){
         level='strong';
         yfNoteDe.push('Dringend empfohlen (Endemiegebiet)');
         yfNoteEn.push('Strongly recommended (Endemic area)');
     }
     
     if(age !== null && age < 2) {
         yfNoteDe.push('Hinweis: Bei Erstimpfung unter 2 Jahren ist bei fortgesetztem Risiko eine spätere Auffrischung nötig (DTG)');
         yfNoteEn.push('Note: If first dose < 2 years, a later booster is needed for ongoing risk (DTG)');
     }
     if(isBreastfeeding()) {
         yfNoteDe.push('Stillzeit: Gelbfieber (Lebendimpfstoff) nur nach individueller Nutzen-Risiko-Abwägung');
         yfNoteEn.push('Breastfeeding: yellow fever (live vaccine) only after individual risk-benefit assessment');
     }
     if(yfNoteDe.length > 0) { noteDe = yfNoteDe.join(' / '); noteEn = yfNoteEn.join(' / '); }
     break;
   case 'hepatitis':
     const hepa = getRisk('hepatitis_a');
     const hepb = getRisk('hepatitis_b');
     let hDe = []; let hEn = [];
     if(hepa.level === 'recommended' || hepa.level === 'risk_based') { hDe.push('Hep A: Empfohlen'); hEn.push('Hep A: Recommended'); level='strong'; }
     if(hepb.level === 'risk_based' && (ls || c.includes('health'))) { hDe.push('Hep B: Langzeit/Med.Personal'); hEn.push('Hep B: Long-term/Med'); level='strong'; }
     else if(hepb.level === 'recommended' || hepb.level === 'risk_based') { hDe.push('Hep B: Endemiegebiet'); hEn.push('Hep B: Endemic area'); if(level!=='strong') level='useful'; }
     noteDe = hDe.join(' | '); noteEn = hEn.join(' | ');
     break;
   case 'polio': {
      const pCat1 = ['AF','PK','DE','DZ','CD','DJ','IL','LA','CM','GN','TD'];
      const pCat2 = ['AO','ET','BJ','BF','CI','YE','NA','NE','NG','PS','PG','PL','SN','SO','SD','SS','TZ','GB','CF'];
      const pCat3 = ['EG','GQ','FI','GF','GM','GH','ID','KE','LR','ML','MR','MZ','SL','CG','ZW','ES','UG','HT','SY'];
      let isC1=false, isC2=false, isC3=false;
      destinations.forEach(d => { if(pCat1.includes(d)) isC1=true; else if(pCat2.includes(d)) isC2=true; else if(pCat3.includes(d)) isC3=true; });
      
      if(isC1){level='strong';mand=true;noteDe='Polio Kat. 1: Impfnachweis Pflicht bei >4 Wo';noteEn='Cat 1: Proof required if >4 wks';}
      else if(isC2){level='general';noteDe='Polio Kat. 2: Auffrischung (alle 10J)';noteEn='Cat 2: Booster (q 10y)';}
      else if(isC3){level='general';noteDe='Polio Kat. 3: Vulnerabel (alle 10J)';noteEn='Cat 3: Vulnerable (q 10y)';}
      else {level='general';noteDe='STIKO-Standard';noteEn='STIKO standard';}
      break;
   }
   case 'mmr':
     const mmrDone = doseNum(vaxState.mmr.done);
     const mths = age !== null ? age * 12 : null;
     
     if (mths !== null && mths < 9) {
         level = 'none';
     } else if (mths !== null && mths >= 9 && mths < 11) {
         level = 'useful';
         noteDe = 'Erwägen ab 9 Monaten (z.B. vor Reise/Kita)'; noteEn = 'Consider from 9 mo (e.g. before travel/daycare)';
     } else {
         if (mmrDone === 0) {
             level = 'strong';
         } else {
             level = 'general';
         }
         
         if(age!==null && age<18){
             noteDe='Kinder: STIKO-Standard 2 Dosen (1. ab 11 Mon, 2. ab 15 Mon)';noteEn='Children: STIKO standard 2 doses (1st 11mo, 2nd 15mo)';
         } else if(age!==null && age>=18 && birthYear() && birthYear()>1970){
             if(serMeasles()){noteDe='Nach 1970 geb. + immun. '+(serVZV()?'(VZV immun)':'(VZV unklar)');noteEn='Born >1970 + immune. '+(serVZV()?'(VZV immune)':'(VZV unclear)');}
             else{noteDe='Nach 1970 geb: 1-2 Dosen MMR. '+(serVZV()?'(VZV immun)':'(VZV unklar)');noteEn='Born >1970: 1-2 doses MMR. '+(serVZV()?'(VZV immune)':'(VZV unclear)');}
         } else {
             noteDe='Vor 1970 geb. (Masern-immun). STIKO-Standard.';noteEn='Born <1970 (Measles-immune). STIKO standard.';
         }
     }
     break;
   case 'typhoid':
     const isHighRiskTyph = (risk && risk.highRisk) || destinations.some(d => ['IN', 'PK', 'BD', 'NP', 'AF'].includes(d));
     if(isHighRiskTyph) {
       if(di >= 1) { level='strong'; noteDe='Hohes Risiko (Südasien) – ab 1 Woche Aufenthalt'; noteEn='High risk (South Asia) - from 1 week stay'; }
       else { level='none'; }
     }
     else if(rl === 'risk_based' || rl === 'recommended') {
       if(di >= 4) { level='strong'; noteDe='Langzeitaufenthalt im Endemiegebiet (>1 Monat)'; noteEn='Long-term stay in endemic area (>1 month)'; }
       else if (di >= 1) { level='useful'; noteDe='Endemiegebiet / ländlich – erwägen bei <1 Monat'; noteEn='Endemic area / rural - consider for <1 month'; }
       else { level='none'; }
     }
     break;
   case 'menb':
     if(age!==null&&age<2){level='general';noteDe='STIKO-Standard für Säuglinge/Kleinkinder';noteEn='STIKO standard for infants/toddlers';}
     else if(immunocompromised()){level='general';noteDe='Indikationsimpfung (Risiko/Asplenie)';noteEn='Indication vaccination (risk/asplenia)';}
     break;
   case 'jev':
     if((rl === 'risk_based' || rl === 'recommended') &&(ls||c.includes('rural'))){level='strong';noteDe='Langzeit / ländlich in Endemiegebiet';noteEn='Langzeit / ländlich in Endemiegebiet';}
     else if(rl === 'risk_based' || rl === 'recommended'){level='useful';noteDe='Endemiegebiet, kurzer Stadtaufenthalt';noteEn='Endemic area, short urban stay';}
     break;
   case 'rabies':{
     const rabies6mCountries = ['MX']; // Specific countries where Rabies is only > 6 months
     let hasNormalRisk = false;
     let has6mRisk = false;
     
     destinations.forEach(d => {
         if(rabies6mCountries.includes(d)) has6mRisk = true;
         else {
             const cData = window.countryData[d];
             if(cData && cData.diseases && cData.diseases.rabies) {
                 const lvl = cData.diseases.rabies.risk_level;
                 if(lvl === 'risk_based' || lvl === 'recommended' || lvl === 'mandatory_all') hasNormalRisk = true;
             } else {
                 const safeZones = ['US','CA','AU','NZ','JP','SG','GB','IE','IS','MT','CY','CH','NO','SE','FI','DK','DE','FR','IT','ES','PT','NL','BE','AT','PL','CZ','SK','HU','RO','BG','GR','HR','SI','EE','LV','LT'];
                 if(!safeZones.includes(d)) hasNormalRisk = true;
             }
         }
     });

     const youngChild=age!==null&&age>=1&&age<=12;
     
     if(hasNormalRisk) {
         if(di>=4||c.includes('rural')||c.includes('animal')||youngChild){level='strong';noteDe=youngChild?'Kind: erhöhtes Bissrisiko – präexpositionell empfohlen':'Präexpositionell (Langzeitreise / ländlich / Tierkontakt)';noteEn=youngChild?'Child: higher bite risk — pre-exposure recommended':'Pre-exposure (long stay / rural / animal contact)';}
         else {level='useful';noteDe='Risikoabwägung (Reisedauer ≤ 4 Wochen) – bei Langzeitreise generell empfohlen';noteEn='Risk assessment (trip ≤ 4 weeks) — generally advised for long stays';}
     } else if (has6mRisk) {
         if(di>=6) { level='strong'; noteDe='Präexpositionell (Langzeitreise > 6 Monate)'; noteEn='Pre-exposure (long stay > 6 months)'; }
         else { level='none'; }
     } else {
         level='none';
     }
     break;}
   case 'cholera':
     if((rl==='risk_based'||rl==='recommended')&&(c.includes('health')||ls)){level='useful';noteDe='Ausbruchsland + Helfer/Langzeit – erwägen (Dukoral)';noteEn='Outbreak country + aid/long-term — consider (Dukoral)';}
     else if(rl==='risk_based'||rl==='recommended'){level='useful';noteDe='Ausbruchsland – nur bei erhöhtem Expositionsrisiko';noteEn='Outbreak country — only with elevated exposure';}
     break;
   case 'tbe':
     if(rl === 'risk_based' || rl === 'recommended') {
         if(c.includes('rural')){level='strong';noteDe='Endemiegebiet, Outdoor-Exposition';noteEn='Endemic area, outdoor exposure';}
         else{level='general';noteDe='Endemiegebiet (generell empfohlen)';noteEn='Endemic area (generally recommended)';}
     }
     break;
    case 'hpv': {
      const hpvDone = doseNum(vaxState['hpv'].done);
      if (hpvDone > 0 && !isProtected(v)) {
        level='general'; noteDe='Begonnene Impfserie vervollständigen (STIKO)'; noteEn='Complete started series (STIKO)';
      }
      else if(age!==null&&age>=9&&age<=14){level='general';noteDe='STIKO-Standard 9-14 J.';noteEn='STIKO standard 9-14 yrs';}
      else if(age!==null&&age>14&&age<=17){level='general';noteDe='STIKO: Nachholimpfung bis 17 J.';noteEn='STIKO: catch-up until 17 yrs';}
      else {level='none';noteDe='Keine generelle STIKO-Empfehlung ab 18 J.';noteEn='No general STIKO recommendation from 18 yrs';}
      break;
    }
   case 'influenza':
     if(age!==null&&age>=60){level='general';noteDe='STIKO-Standard ab 60 J. (saisonal)';noteEn='STIKO standard from 60 (seasonal)';}
     else if(isPregnant()){level='general';noteDe='In der Schwangerschaft empfohlen';noteEn='Recommended in pregnancy';}
     else if(hasChronic()||immunocompromised()){level='general';noteDe='Indikation bei chron. Erkrankung/Immunschwäche';noteEn='Indicated in chronic illness/immunocompromise';}
     else if(rl==='standard'){level='useful';noteDe='STIKO Standard / Menschenansammlungen';noteEn='STIKO Standard / crowds';}
     break;
   case 'covid':
     if(age!==null&&age>=60){level='general';noteDe='Auffrischung ab 60 J. / Risikogruppen';noteEn='Booster from 60 / risk groups';}
     else if(hasChronic()||immunocompromised()||isPregnant()){level='general';noteDe='Risikogruppe – Auffrischung nach STIKO';noteEn='Risk group — booster per STIKO';}
     break;
   case 'zoster':
     if(age!==null&&age>=60){level='general';noteDe='STIKO-Standard ab 60 J.';noteEn='STIKO standard from 60';}
     else if(age!==null&&age>=50&&(immunocompromised()||hasChronic())){level='general';noteDe='Ab 50 J. bei Grundkrankheit/Immunschwäche';noteEn='From 50 if comorbidity/immunocompromised';}
     break;
   case 'pneumo':
     if(age!==null&&age>=60){level='general';noteDe='STIKO-Standard ab 60 J. (PCV20)';noteEn='STIKO standard from 60 (PCV20)';}
     else if(immunocompromised()||hasChronic()){level='general';noteDe='Indikation bei Grundkrankheit/Immunschwäche';noteEn='Indicated in comorbidity/immunocompromise';}
     break;
   case 'mpox':
     if((rl==='risk_based'||rl==='recommended')&&(ls||c.includes('health'))){level='useful';noteDe='Ausbruchsregion, enger Kontakt';noteEn='Outbreak region, close contact';}
     break;
   case 'dengue':{
     const had=vaxState.dengue.dengueHad;const endemic=(rl==='risk_based'||rl==='recommended');const done=doseNum(vaxState.dengue.done);
     if(done >= 1){level='strong';noteDe='Impfserie (2 Dosen) komplettieren';noteEn='Complete vaccination series (2 doses)';}
     else if(!had){level='none';noteDe='Nur nach durchgemachter Dengue-Infektion empfohlen';noteEn='Only recommended after prior dengue infection';}
     else if(endemic){level='strong';noteDe='Nach durchgemachter Dengue-Infektion bei Reise in Endemiegebiet empfohlen';noteEn='Recommended after prior dengue infection for travel to endemic area';}
     else{level='none';}
     break;}
   case 'chikungunya':
     if(risk && risk.outbreak){level='strong';noteDe='Aktueller Ausbruch';noteEn='Active outbreak';}
     else if(rl==='risk_based'||rl==='recommended'){level='useful';noteDe='Erhöhtes Hintergrundrisiko';noteEn='Elevated background risk';}
     break;
   case 'varicella':
     let isWish = el('p-pregnant').value === 'planned';
     if(isWish && age !== null && (age < 13 || age > 50)) isWish = false;
     
     if(c.includes('health') || isWish){level='strong';noteDe='Indiziert bei med. Personal oder Kinderwunsch im gebärfähigen Alter (falls ungeschützt)';noteEn='Indicated for medical staff or planned pregnancy in childbearing age (if unprotected)';}
     else{level='none';noteDe='Nur bei Risiko oder Kinderwunsch indiziert';noteEn='Only indicated with risk/planned pregnancy';}
     break;
  }
  return {level,mand,noteDe,noteEn};
}
function isProtected(v){
  const st=vaxState[v.k];
  if(v.disease&&st.disease)return true;
  if(v.k==='mmr'&&(serMeasles()||(birthYear()!==null&&birthYear()<=1970)))return true;
  if(v.k==='varicella'&&serVZV())return true;
  const done=doseNum(st.done);const yrs=yearsSince(st.year);
  if(v.k==='influenza')return yrs!==null&&yrs<1;
  if(v.k==='covid')return yrs!==null&&yrs<1;
  if(v.k==='typhoid')return yrs!==null&&yrs<3;
  if(v.k==='yellowfever'){
    const yfDone=doseNum(st.done);
    if(yfDone>=2) return true; // ≥2 doses = lifelong (WHO/STIKO)
    if(yfDone===1 && yrs!==null && yrs<10) return true;
    return false;
  }
  if(v.k==='pneumo')return yrs!==null;
  if(v.k==='chikungunya')return yrs!==null;
  if(!done)return false;
  switch(v.k){
    case 'mmr':return done>=2;
    case 'jev':return (done>=3&&yrs!==null&&yrs<10)||(done>=2&&yrs!==null&&yrs<2);
    case 'rabies':return done>=2;
    case 'tbe':return done>=3&&yrs!==null&&yrs<5;
    case 'hpv':{
      if(done>=3)return true;
      if(done===2){
        const by=birthYear();const st=vaxState.hpv;
        if(by!==null&&st.year){
          const ageAtLast=parseInt(st.year,10)-by;
          return ageAtLast<=15;
        }
        return true;
      }
      return false;
    }
    case 'influenza':return yrs!==null&&yrs<1;
    case 'covid':return done>=1&&yrs!==null&&yrs<1;
    case 'zoster':return done>=2;
    case 'pneumo':return done>=1;
    case 'mpox':return done>=2;
    case 'dengue':return done>=2;
    case 'chikungunya':return done>=1;
    case 'menb':return done>=2;
    case 'cholera':return done>=2&&yrs!==null&&yrs<2;
    case 'varicella':return done>=2||serVZV();
  }
  return false;
}
const BOOSTER={
 yellowfever:{de:'1 Dosis: WHO betrachtet als lebenslangen Schutz. STIKO empfiehlt Auffrischung nach 10 J. ≥2 Dosen: lebenslanger Schutz.',en:'1 dose: WHO considers lifelong. STIKO recommends booster after 10 yrs. ≥2 doses: lifelong protection.'},
 mmr:{de:'2 Dosen lebenslang – kein Booster',en:'2 doses lifelong — no booster'},
 varicella:{de:'2 Dosen lebenslang – kein Booster',en:'2 doses lifelong — no booster'},
 typhoid:{de:'Schutz ~3 Jahre – Wiederholung nur bei erneuter Reiseindikation',en:'~3 years — repeat only on renewed travel indication'},
 jev:{de:'Nach Booster (12–24 M) ~10 Jahre; nach Grundimmunisierung 1–2 Jahre',en:'~10 yrs after booster (12–24 mo); 1–2 yrs after primary series'},
 rabies:{de:'Grundimmunisiert – lebenslang „primed", kein routinemäßiger Booster (bei Biss 2 Dosen PEP, kein Immunglobulin)',en:'Primed for life — no routine booster (2-dose PEP if bitten, no immunoglobulin)'},
 tbe:{de:'Auffrischung alle 3–5 Jahre (>50 J.: alle 3 J.) bei fortbestehender Exposition',en:'Booster every 3–5 yrs (>50: every 3) with ongoing exposure'},
 hpv:{de:'Serie abgeschlossen – kein Booster',en:'Series complete — no booster'},
 influenza:{de:'Jährlich (saisonal)',en:'Annually (seasonal)'},
 covid:{de:'Saisonal / risikoabhängig (STIKO)',en:'Seasonal / risk-based (STIKO)'},
 zoster:{de:'2 Dosen – kein Booster',en:'2 doses — no booster'},
 pneumo:{de:'PCV20 einmalig – kein routinemäßiger Booster',en:'PCV20 once — no routine booster'},
 mpox:{de:'2 Dosen – kein etablierter Booster',en:'2 doses — no established booster'},
 dengue:{de:'2 Dosen – keine Booster-Daten',en:'2 doses — no booster data'},
 chikungunya:{de:'1 Dosis – keine Booster-Daten',en:'1 dose — no booster data'},
 menb:{de:'Serie abgeschlossen – kein routinemäßiger Booster',en:'Series complete — no routine booster'},
 cholera:{de:'Schutz ~2 Jahre – Auffrischung nur bei erneuter Exposition',en:'~2 years — booster only on renewed exposure'},
 polio:{de:'Grundimmunisierung + 1 Auffrischung: lebenslang. Für Risikoländer Auffrischung alle 10 J.',en:'Primary series + 1 booster: lifelong. Booster every 10 yrs for risk countries.'},
};
function assess(v){
  const b=baseLevel(v);let status;
  if(isProtected(v))status='green';
  else if(v.k==='yellowfever'){
    const yfSt=vaxState[v.k];
    const yfDone=doseNum(yfSt.done);
    const yfYrs=yearsSince(yfSt.year);
    if(yfDone>=1 && yfYrs!==null && yfYrs>=10){
      status='yellow';
      b.noteDe='WHO: Einmaldosis gilt als lebenslanger Schutz. STIKO empfiehlt Auffrischung nach 10 J. \u2013 erwägen.';
      b.noteEn='WHO: single dose considered lifelong. STIKO recommends booster after 10 yrs \u2014 consider.';
    } else if(b.level==='strong')status='red';
    else if(b.level==='useful')status='yellow';
    else if(b.level==='general')status='blue';
    else status='grey';
  }
  else if(b.level==='strong')status='red';
  else if(b.level==='useful')status='yellow';
  else if(b.level==='general')status='blue';
  else status='grey';
  return {status,mand:b.mand,noteDe:b.noteDe,noteEn:b.noteEn};
}
function tdapPolioAssess(){
  const st = vaxState.tdap_polio;
  const cy = new Date().getFullYear();
  const preg = isPregnant();
  const age = ageExact(el('p-dob').value);
  const infant = age !== null && age < 5;
  const adult = age !== null && age >= 18;
  
  const y_td = st.y_td ? parseInt(st.y_td, 10) : null;
  const y_ap = st.y_ap ? parseInt(st.y_ap, 10) : null;
  const y_ipv = st.y_ipv ? parseInt(st.y_ipv, 10) : null;
  
  const yrs_td = y_td ? cy - y_td : null;
  const yrs_ap = y_ap ? cy - y_ap : null;
  const yrs_ipv = y_ipv ? cy - y_ipv : null;
  
  const d_hexa = st.doses_hexa === '>3' ? 4 : parseInt(st.doses_hexa || 0, 10);
  const gi_tdap = st.gi_tdap || d_hexa >= 3;
  const gi_ipv = st.gi_ipv || d_hexa >= 3;

  let T = 'grey', D = 'grey', aP = 'grey', IPV = 'grey';
  let unvaxxed = false, infantOngoing = false;
  let ipvNote = {de:'', en:''};

  if (infant && !gi_tdap && d_hexa > 0) { infantOngoing = true; T='blue'; D='blue'; aP='blue'; IPV='blue'; }
  else if (!gi_tdap && d_hexa === 0 && !y_td && !y_ap && !y_ipv) { unvaxxed = true; T='red'; D='red'; aP='red'; IPV='red'; }
  else {
    if (!gi_tdap) { T='red'; D='red'; }
    else if (yrs_td !== null && yrs_td < 10) { T='green'; D='green'; }
    else { T='red'; D='red'; }
    
    if (!gi_tdap) { aP='red'; }
    else if (preg) { aP = (yrs_ap !== null && yrs_ap < 10) ? 'yellow' : 'red'; }
    else if (yrs_ap !== null && y_ap !== null) {
      const dob = new Date(el('p-dob').value).getFullYear();
      if (adult && (y_ap >= dob + 18)) aP='green';
      else if (yrs_ap < 10) aP='green';
      else aP='blue';
    } else { aP='blue'; }

    const polioCat1 = ['AF','PK','DE','DZ','CD','DJ','IL','LA','CM','GN','TD'];
    const polioCat2 = ['AO','ET','BJ','BF','CI','YE','NA','NE','NG','PS','PG','PL','SN','SO','SD','SS','TZ','GB','CF'];
    const polioCat3 = ['EG','GQ','FI','GF','GM','GH','ID','KE','LR','ML','MR','MZ','SL','CG','ZW','ES','UG'];
    let isCat1 = false, isCat2 = false, isCat3 = false;
    destinations.forEach(d => {
        if(polioCat1.includes(d)) isCat1 = true;
        else if(polioCat2.includes(d)) isCat2 = true;
        else if(polioCat3.includes(d)) isCat3 = true;
    });
    const risk = isCat1 || isCat2 || isCat3;
    const longM = longStay();

    if (!gi_ipv) { IPV = risk ? 'red' : 'blue'; ipvNote = risk ? {de:'Grundimmunisierung unvollständig – für Polio-Risikoland zwingend',en:'Primary series incomplete — mandatory for polio-risk country'} : {de:'Grundimmunisierung/Auffrischung nach STIKO',en:'Primary series/booster per STIKO'}; }
    else if (isCat1) {
      if (longM) { if (yrs_ipv !== null && yrs_ipv < 1) { IPV='green'; ipvNote={de:'Aktuell (Kat-1, ≥4 Wo: Impfung <12 Mon.)',en:'Current (cat 1, ≥4 wks stay: dose <12 mo)'}; } else { IPV='red'; ipvNote={de:'ZWINGEND: Aufenthalt ≥4 Wochen in Kat-1-Land – Impfung 4 Wo–12 Mon vor Ausreise!',en:'MANDATORY: ≥4 wks stay in cat 1 — dose 4 wks–12 mo before exit required'}; } }
      else { if (yrs_ipv !== null && yrs_ipv < 10) { IPV='green'; ipvNote={de:'Aktuell (Kat-1: letzte <10 J.)',en:'Current (cat 1: last <10 yrs)'}; } else { IPV='red'; ipvNote={de:'Auffrischung nötig (Kat-1: letzte >10 J. / unbekannt)',en:'Booster needed (cat 1: last >10 yrs/unknown)'}; } }
    }
    else if (isCat2) {
      if (yrs_ipv !== null && yrs_ipv < 10) { IPV='green'; ipvNote={de:'Aktuell (Kat-2: letzte <10 J.)',en:'Current (cat 2: last <10 yrs)'}; } else { IPV='red'; ipvNote={de:'Auffrischung empfohlen (Kat-2: letzte >10 J.)',en:'Booster recommended (cat 2: last >10 yrs)'}; }
    }
    else if (isCat3) {
      if (yrs_ipv !== null && yrs_ipv < 10) { IPV='green'; ipvNote={de:'Aktuell (Kat-3: letzte <10 J.)',en:'Current (cat 3: last <10 yrs)'}; } else { IPV='yellow'; ipvNote={de:'Auffrischung erwägen (Kat-3: letzte >10 J.)',en:'Consider booster (cat 3: last >10 yrs)'}; }
    }
    else { IPV='green'; ipvNote={de:'Grundimmunisierung komplett: lebenslanger Schutz (STIKO)',en:'Primary series complete: lifelong protection (STIKO)'}; }
  }

  return { T, D, aP, IPV, infantOngoing, unvaxxed, ipvNote };
}
function hepAssess(){
  const st=vaxState.hepatitis;const a=doseNum(st.aMono),b=doseNum(st.bMono),tw=doseNum(st.twin);
  const hexaB=vaxState.tdap_polio.doses_hexa === '>3' ? 4 : parseInt(vaxState.tdap_polio.doses_hexa || 0, 10);
  const ls=longStay();const c=conds();const age=ageExact(el('p-dob').value);const cy=new Date().getFullYear();
  const aYs=[];if(a>=1&&st.aYear)aYs.push(cy-parseInt(st.aYear,10));if(tw>=1&&st.twYear)aYs.push(cy-parseInt(st.twYear,10));
  const yrsA=aYs.length?Math.min(...aYs):null;
  let A,aNote;const aFull=(a>=2)||(tw>=2)||(a>=1&&tw>=1);
  if(aFull){ if(yrsA!==null&&yrsA>10){A='yellow';aNote={de:'Serie vollständig, aber letzte Dosis >10 J. – Auffrischung bei fortbestehender Exposition',en:'Series complete but last dose >10 yrs — booster if ongoing exposure'};} else {A='green';aNote={de:'Langzeitschutz (vollständige Serie)',en:'Long-term protection (complete series)'};} }
  else if(a===1){ if(yrsA!==null&&yrsA>1){A='yellow';aNote={de:'2. Dosis überfällig (Erstschutz ~1 Jahr)',en:'2nd dose overdue (initial ~1 yr)'};} else {A='green';aNote={de:'1 Dosis: ~1 Jahr Schutz; 2. Dosis für Langzeitschutz',en:'1 dose: ~1 yr; 2nd dose for long-term'};} }
  else if(tw===1){A='yellow';aNote={de:'1× Twinrix reicht für Hep A NICHT (halbe Antigenmenge) – Serie vervollständigen',en:'1× Twinrix insufficient for Hep A (half antigen) — complete series'};}
  else {
    const hepaR = getRisk('hepatitis_a');
    const destEndemic = hepaR ? (hepaR.level === 'recommended' || hepaR.level === 'risk_based' || hepaR.level === 'mandatory_all') : false;
    A=destEndemic?'red':'grey';aNote={de:destEndemic?'Dringend empfohlen für die meisten Reiseziele':'',en:destEndemic?'Strongly recommended for most destinations':''};
  }
  const bDoses=b+tw+hexaB;let B,bNote;
  if(serHBs()){B='green';bNote={de:'Immun – Anti-HBs ausreichend, keine weitere Impfung nötig',en:'Immune — anti-HBs sufficient, no further vaccination needed'};}
  else if(bDoses>=3){B='green';bNote={de:'Grundimmunisierung komplett ('+bDoses+' Dosen; STIKO: keine Auffrischung bei Anti-HBs >100)',en:'Primary series complete ('+bDoses+' doses; STIKO: no booster if anti-HBs >100)'};}
  else if(bDoses>=1){B='yellow';bNote={de:'Grundimmunisierung unvollständig ('+bDoses+' von 3 Dosen)',en:'Primary series incomplete ('+bDoses+' of 3 doses)'};}
  else {
    const hepbR = getRisk('hepatitis_b');
    const destEndemicB = hepbR ? (hepbR.level === 'recommended' || hepbR.level === 'risk_based' || hepbR.level === 'mandatory_all') : false;
    const strong=(ls&&destEndemicB)||c.includes('health')||c.includes('animal');B=strong?'red':'blue';bNote={de:strong?'Langzeit/Exposition – Grundimmunisierung':'',en:strong?'Long stay/exposure — primary series':''};
  }
  const needA=(A!=='green'),needB=(B!=='green');const childForm=age!==null&&age<16;const infant=age!==null&&age<1;
  function form(kind){
    if(kind==='a')return childForm?(infant?'Havrix (Säugling – FI prüfen)':'Havrix 720 Kinder'):'Avaxim (Erw.)';
    if(kind==='b')return childForm?'Engerix-B Kinder':'Engerix-B Erwachsene';
    return childForm?(infant?'<1 J.: Einzelimpfstoffe':'Twinrix Kinder'):'Twinrix Erwachsene';
  }
  let rec=null;
  if(needA&&needB)rec={de:'→ Heute: '+form('ab')+' (Hep A+B)',en:'→ Today: '+form('ab')+' (Hep A+B)'};
  else if(needA)rec={de:'→ Heute: '+form('a')+' (Hep A)',en:'→ Today: '+form('a')+' (Hep A)'};
  else if(needB)rec={de:'→ Heute: '+form('b')+' (Hep B)',en:'→ Today: '+form('b')+' (Hep B)'};
  return {A,B,aNote,bNote,rec,childForm};
}
function tbeForm(){const a=ageExact(el('p-dob').value);if(a===null||a<1)return null;return a<12?{de:'Encepur Kinder (0,25 ml)',en:'Encepur paediatric (0.25 ml)'}:{de:'Encepur Erwachsene (0,5 ml)',en:'Encepur adult (0.5 ml)'};}
function hepForm(kind){
  const age=ageExact(el('p-dob').value);const child=age!==null&&age<16;const infant=age!==null&&age<1;
  if(kind==='a')return child?(infant?'Havrix (Säugling – FI)':'Havrix 720 Kinder'):'Avaxim (Erw.)';
  if(kind==='b')return child?'Engerix-B Kinder':'Engerix-B Erwachsene';
  return child?(infant?'<1 J.: Einzelimpfstoffe':'Twinrix Kinder'):'Twinrix Erwachsene';
}
function hepTodayWarn(){
  const st=vaxState.hepatitis;const age=ageExact(el('p-dob').value);if(age===null)return null;
  const planned=(st.apptsA||[]).length||(st.apptsAB||[]).length;
  if(planned&&age<1)return {de:'Twinrix/Havrix Kinder erst ab 1 Jahr – bei <1 J. Hep B als Einzelimpfstoff.',en:'Twinrix/Havrix paediatric from 1 year — under 1 yr use monovalent Hep B.'};
  return null;
}
function menacwyAssess(){
  const st=vaxState.menacwy;const done=doseNum(st.done);const yrs=yearsSince(st.year);const age=ageExact(el('p-dob').value);const c=conds();
  let status,mand=false,note;
  const protectedNow=(st.type==='acwy'&&done>=1&&yrs!==null&&yrs<10);
  
  if(destinations.includes('SA')){ if(protectedNow){status='green';note={de:'ACWY aktuell – Nachweis für Hajj/Umrah',en:'ACWY current — proof for Hajj/Umrah'};} else {status='red';mand=true;note={de:'ACWY Pflicht für Hajj/Umrah',en:'ACWY mandatory for Hajj/Umrah'};} }
  else {
    const menR = getRisk('meningitis');
    if(menR && (menR.level === 'recommended' || menR.level === 'risk_based')){
        const spans=staySpansDrySeason();
        const dm=departureMonth();
        const dry = spans===null ? (dm!==null&&[11,0,1,2,3,4,5].includes(dm)) : spans;
        if(dry) {
            status=protectedNow?'green':'red';
            note={de:'Meningitisgürtel – Reise fällt in die Epidemiesaison (Trockenzeit Dez–Jun, höchstes Risiko): dringend empfohlen.',en:'Meningitis belt — travel falls in the epidemic season (dry season Dec–Jun, highest risk): strongly recommended.'};
        } else {
            status=protectedNow?'green':'yellow';
            note={de:'Meningitisgürtel – nur erwogen: gesamter Aufenthalt außerhalb der Epidemiesaison (Trockenzeit Dez–Jun). In der Trockenzeit dringend empfohlen.',en:'Meningitis belt — optional only: entire stay outside the epidemic season (dry season Dec–Jun). Strongly recommended during the dry season.'};
        }
    }
    else if(st.type==='acwy'&&done>=1&&yrs!==null&&yrs>=10){status='grey';note={de:'Früher ACWY geimpft (>10 J.) – Auffrischung nur bei Reiseindikation nötig',en:'ACWY given >10 yrs ago — booster only needed with travel indication'};}
    else if(st.type==='c'){status='yellow';note={de:'Nur MenC dokumentiert – ACWY empfohlen',en:'Only MenC documented — ACWY recommended'};}
    else if(st.type==='poly'){status='yellow';note={de:'Alte Polysaccharid-Impfung – Konjugat (ACWY) empfohlen',en:'Old polysaccharide vaccine — conjugate (ACWY) recommended'};}
    else if(age!==null&&age>=12&&age<15){ status=protectedNow?'green':'blue';note={de:'STIKO: Standardimpfung 12–14 J.',en:'STIKO: standard 12–14 yrs'}; }
    else if(age!==null&&age>=15&&age<25){ status=protectedNow?'green':'blue';note={de:'STIKO: Nachholimpfung bis <25 J.',en:'STIKO: catch-up until <25 yrs'}; }
    else if(age!==null&&age<12){ status=protectedNow?'green':'yellow';note={de:'STIKO-Standard (ab 12 J.) – vorgezogene Impfung erwägen',en:'STIKO standard (from 12) — consider early vaccination'}; }
    else if(immunocompromised()){ status=protectedNow?'green':'yellow';note={de:'Indikation bei Risiko/Labor/Ausland',en:'Indicated for risk/lab/travel'}; }
    else{status=protectedNow?'green':'grey';note={de:'',en:''};}
  }
  return {status,noteDe:note.de,noteEn:note.en,mand};
}

function buildDestSelect(){
  const sel=el('dest-select');const list=[...ALL_COUNTRIES].sort((a,b)=>(LANG==='de'?a.de.localeCompare(b.de,'de'):a.en.localeCompare(b.en,'en')));
  const countries=list.filter(c=>!c.terr),terrs=list.filter(c=>c.terr);
  let html='<option value="">— '+(LANG==='de'?'Land wählen':'Select country')+' —</option><optgroup label="'+(LANG==='de'?'Länder':'Countries')+'">';
  countries.forEach(c=>html+='<option value="'+c.code+'">'+(LANG==='de'?c.de:c.en)+'</option>');
  html+='</optgroup><optgroup label="'+(LANG==='de'?'Überseegebiete':'Overseas territories')+'">';
  terrs.forEach(c=>html+='<option value="'+c.code+'">'+(LANG==='de'?c.de:c.en)+'</option>');
  html+='</optgroup>';sel.innerHTML=html;
}
function addDest(code){
  console.log("addDest called with code:", code);
  if(code&&!destinations.includes(code)){
    destinations.push(code);
    if (!window.countryData[code]) {
      window.countryData[code] = (window.ALL_COUNTRY_DATA && window.ALL_COUNTRY_DATA[code]) ? window.ALL_COUNTRY_DATA[code] : {};
    }
  }
  el('dest-select').value='';
  renderDestChips();
  recompute();
}
function removeDest(code){destinations=destinations.filter(c=>c!==code);renderDestChips();recompute();}
function flagImg(code){return '<img class="flag" src="https://flagcdn.com/w40/'+code.toLowerCase()+'.png" onerror="this.remove()" alt="" loading="lazy">';}
function renderDestChips(){el('dest-chips').innerHTML=destinations.map(code=>{const c=CBY[code];const d=window.countryData[code] ? window.countryData[code].diseases : null;const isYFMand = d && d.yellow_fever && d.yellow_fever.risk_level === 'mandatory_all';const isMenMand = (code === 'SA');const mand = isYFMand || isMenMand;return '<div class="chip'+(mand?' mand':'')+'">'+flagImg(code)+(LANG==='de'?c.de:c.en)+(c.terr?' *':'')+' <span onclick="removeDest(\''+code+'\')">×</span></div>';}).join('');}

function renderDoseChips(k){
  if(YEAR_ONLY.includes(k))return '<span class="mini-note">'+(LANG==='de'?'nur „zuletzt geimpft" →':'only “last vaccinated” →')+'</span>';
  const cur=vaxState[k].done||'';const spec=DOSE_MAP[k]||DEFAULT_DOSE;
  return '<div class="dose-chips">'+spec.map(o=>{const sel=cur===o[0];return '<span class="dose-chip'+(sel?' selected':'')+'" onclick="setDose(\''+k+'\',\''+o[0]+'\')">'+o[1]+'</span>';}).join('')+'</div>';}
function setDose(k,val){vaxState[k].done=(vaxState[k].done===val)?'':val;renderVaxTable();}
function yearInput(k,field){const y=vaxState[k][field];return '<input type="text" inputmode="numeric" maxlength="4" class="year-in" placeholder="JJJJ" value="'+(y||'')+'" onchange="setYear(\''+k+'\',\''+field+'\',this.value)">';}
function setYear(k,field,raw){const s=(raw||'').replace(/\D/g,'');const cur=new Date().getFullYear();let full='';
  if(s.length===0)full='';
  else if(s.length<=2){const yy=parseInt(s,10);const curYY=cur%100;full=(yy<=curYY?2000+yy:1900+yy);}
  else if(s.length===4)full=parseInt(s,10);
  else full=parseInt(s.slice(-4),10);
  if(full&&(full<1900||full>cur))full='';
  vaxState[k][field]=full?String(full):'';renderVaxTable();}
function providerSelect(k,field){field=field||'prov';const on=(vaxState[k][field]&&vaxState[k][field]!=='charite');const who=t(provResolve('ext')==='paed'?'provPaed':'provGP');
  return '<button class="ext-btn'+(on?' on':'')+'" onclick="toggleExtern(\''+k+'\',\''+field+'\')">'+(on?'✓ '+(LANG==='de'?'Extern: ':'External: ')+who:(LANG==='de'?'Extern':'External'))+'</button>';}
function toggleExtern(k,field){field=field||'prov';vaxState[k][field]=(vaxState[k][field]&&vaxState[k][field]!=='charite')?'charite':'ext';renderVaxTable();renderApptOverview();}
function provResolve(prov){if(prov==='charite')return 'charite';if(prov==='gp')return 'gp';if(prov==='paed')return 'paed';const a=ageYears(ctxDob());return (a!==null&&a<18)?'paed':'gp';}
function setField(k,f,val){vaxState[k][f]=val;renderVaxTable();}

function renderVaxTable(){
  const tb=el('vax-body');if(!tb)return;
  let html='';
  VACCINES.forEach(v=>{
    const st=vaxState[v.k];const av=availability(v);const la=liveAdvice(v);
    const liveBadge=v.live?'<span class="badge live">'+t('live')+'</span>':'';
    let availBadge='';
    if(av.flag==='na')availBadge='<span class="badge grey">'+(LANG==='de'?av.badgeDe:av.badgeEn)+'</span>';
    else if(av.flag==='age')availBadge='<span class="badge red">'+(LANG==='de'?av.badgeDe:av.badgeEn)+'</span>';
    else if(av.flag==='caution')availBadge='<span class="badge yellow">'+(LANG==='de'?av.badgeDe:av.badgeEn)+'</span>';
    const availNote=(av.flag==='na'||av.flag==='age')?'<div class="reason" style="margin-top:4px;">'+(LANG==='de'?av.noteDe:av.noteEn)+'</div>':(av.flag==='caution'?'<div class="reason" style="margin-top:4px;">'+(LANG==='de'?av.noteDe:av.noteEn)+'</div>':'');
    const liveNote=la?'<div class="reason" style="color:'+(la.level==='block'?'var(--red)':'var(--yellow)')+';font-weight:600">'+(LANG==='de'?la.de:la.en)+'</div>':'';
    const infoBtn='<button class="info-btn" onclick="showInfo(\''+v.k+'\')" title="Info">i</button>'+(DISEASE_MAPS[v.k]?'<button class="map-btn" onclick="showMap(\''+v.k+'\')" title="'+(LANG==='de'?'Verbreitungskarte':'Distribution map')+'">K</button>':'');

    if(v.tdap_polio){
      const a = tdapPolioAssess();
      const age = ageExact(el('p-dob').value);
      const infant = age !== null && age < 5;
      
      const lbls={T:t('T'),D:t('D'),aP:t('aP'),IPV:'IPV'};
      const compBadges='<div class="comp-badges" style="margin-bottom:8px;">'+['T','D','aP','IPV'].map(cc=>'<span class="comp '+a[cc]+'">'+lbls[cc]+'</span>').join('')+'</div>'+
        (a.unvaxxed?'<div class="reason"><span class="badge red" style="margin-bottom:4px;display:inline-block">'+(LANG==='de'?'Dringend empfohlen':'Strongly recommended')+'</span><br>'+(LANG==='de'?'Bisher keine Impfung erfolgt':'No prior vaccination')+'</div>':'')+
        (a.infantOngoing?'<div class="reason">'+(LANG==='de'?'Altersgerechte, laufende Grundimmunisierung':'Age-appropriate, ongoing primary series')+'</div>':'');

      const dOpts=[['0','0'],['1','1'],['2','2'],['3','3'],['>3','>3']];
      const dSel=dOpts.map(o=>'<option value="'+o[0]+'"'+(st.doses_hexa===o[0]?' selected':'')+'>'+o[1]+'</option>').join('');

      function yrIn(f){return '<input type="text" inputmode="numeric" maxlength="4" class="year-in" placeholder="JJJJ" value="'+(st[f]||'')+'" onchange="setYear(\'tdap_polio\',\''+f+'\',this.value)">';}

      let col2 = '<div class="ctrl-box" style="margin-bottom:6px;"><label class="chk-line" style="margin-top:0; font-size:11px; color:var(--grey); cursor:pointer"><input type="checkbox" '+(st.gi_tdap?'checked':'')+' onchange="setField(\'tdap_polio\',\'gi_tdap\',this.checked)"> '+(LANG==='de'?'GI TDaP komplett':'Primary TDaP complete')+'</label></div>'+
                 '<div class="ctrl-box" style="margin-bottom:10px;"><label class="chk-line" style="margin-top:0; font-size:11px; color:var(--grey); cursor:pointer"><input type="checkbox" '+(st.gi_ipv?'checked':'')+' onchange="setField(\'tdap_polio\',\'gi_ipv\',this.checked)"> '+(LANG==='de'?'GI IPV komplett':'Primary IPV complete')+'</label></div>'+
                 '<div style="margin-bottom:4px;font-size:11px;color:var(--grey)">'+(LANG==='de'?'Hexavalent-Dosen (Kindheit):':'Hexavalent doses (childhood):')+'</div>'+
                 '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">'+
                   '<select class="hexa-sel" onchange="setField(\'tdap_polio\',\'doses_hexa\',this.value)"><option value="">—</option>'+dSel+'</select>'+
                   '<span style="font-size:11px;color:var(--grey)">'+(LANG==='de'?'Jahr':'Year')+'</span>'+yrIn('y_hexa')+
                 '</div>';

      let col3 = '<div style="display:flex; flex-direction:column; gap:6px; font-size:11px;">'+
                   '<div style="display:flex; flex-direction:column; margin-bottom:6px; padding-bottom:8px; border-bottom:1px dashed var(--line);">'+
                     '<div style="font-size:10px; color:var(--grey); margin-bottom:4px; text-transform:uppercase; letter-spacing:0.05em;">'+(LANG==='de'?'Kombi-Schnelleingabe':'Quick-Fill Combo')+'</div>'+
                     '<div style="display:flex; gap:4px; align-items:center; flex-wrap:wrap;">'+
                       '<input type="text" inputmode="numeric" maxlength="4" class="year-in" placeholder="JJJJ" id="quick_tdap_yr" onchange="quickFillTdap(this.value)">'+
                       '<button class="ext-btn'+(st.quick_type==='tdap_ipv'?' on':'')+'" style="margin-top:0;padding:4px 6px;font-size:10px;" onclick="setQuickTdapType(\'tdap_ipv\')">Tdap-IPV</button>'+
                       '<button class="ext-btn'+(st.quick_type==='tdap'?' on':'')+'" style="margin-top:0;padding:4px 6px;font-size:10px;" onclick="setQuickTdapType(\'tdap\')">Tdap</button>'+
                     '</div>'+
                   '</div>'+
                   '<div class="yr-row"><span>'+(LANG==='de'?'Letzte Td':'Last Td')+'</span>'+yrIn('y_td')+'</div>'+
                   '<div class="yr-row"><span>'+(LANG==='de'?'Letzte aP':'Last aP')+'</span>'+yrIn('y_ap')+'</div>'+
                   '<div class="yr-row"><span>'+(LANG==='de'?'Letzte IPV':'Last IPV')+'</span>'+yrIn('y_ipv')+'</div>'+
                 '</div>';

      html+='<tr class="combo-row"><td data-label="'+t('thVax')+'"><div class="vname" style="display:flex;align-items:center;">'+(LANG==='de'?v.de:v.en)+availBadge+infoBtn+'</div><div class="vsub">'+(LANG==='de'?'Basis-Impfschutz':'Core vaccines')+'</div></td>'+
        '<td data-label="'+t('thDone')+'">'+col2+'</td>'+
        '<td data-label="'+t('thLast')+'">'+col3+'</td>'+
        '<td class="status" data-label="'+t('thStatus')+'"><div style="min-height:48px;">'+compBadges+(a.ipvNote&&a.ipvNote.de?'<div class="reason" style="margin-top:6px;border-top:1px solid var(--line);padding-top:4px"><b>Polio:</b> '+(LANG==='de'?a.ipvNote.de:a.ipvNote.en)+'</div>':'')+'</div></td></tr>';return;
    }
    if(v.hep){
      const ha=hepAssess();
      const hepLbl=(s)=>{
        if(s==='green') return LANG==='de'?'Geschützt':'Protected';
        if(s==='yellow') return LANG==='de'?'Unvollständig':'Incomplete';
        if(s==='blue') return LANG==='de'?'Empfohlen':'Recommended';
        if(s==='red') return LANG==='de'?'Empfohlen':'Recommended';
        return LANG==='de'?'Nicht relevant':'Not relevant';
      };
      const aBadgeTxt = hepLbl(ha.A);
      let bBadgeTxt = hepLbl(ha.B);
      if (ha.B === 'red' && conds().includes('health')) {
          bBadgeTxt = LANG === 'de' ? 'Dringend empfohlen' : 'Strongly recommended';
      }

      const aBadge='<div class="comp-badges" style="margin-bottom:6px"><span class="comp '+ha.A+'">Hep A</span></div>'+
        '<div style="margin-bottom:6px"><span class="badge '+ha.A+'">'+aBadgeTxt+'</span></div>'+
        '<div class="reason">'+(LANG==='de'?ha.aNote.de:ha.aNote.en)+'</div>';
      const bBadge='<div class="comp-badges" style="margin-bottom:6px; margin-top:6px"><span class="comp '+ha.B+'">Hep B</span></div>'+
        '<div style="margin-bottom:6px"><span class="badge '+ha.B+'">'+bBadgeTxt+'</span></div>'+
        '<div class="reason">'+(LANG==='de'?ha.bNote.de:ha.bNote.en)+'</div>';
      const hbsChk='<div class="ctrl-box"><label style="display:flex; align-items:flex-start; cursor:pointer"><input type="checkbox" style="margin-top:2px; margin-right:6px" '+(serologyState.hbs?'checked':'')+' onchange="toggleSerology(\'hbs\', this.checked)"> <span style="flex:1; line-height:1.3">Anti-HBs ≥ 100 IU/l</span></label></div>';
      
      function yrSel(f){return yearInput('hepatitis',f);}
      
      const colCombined = `
        <div class="hep-group">
          <div class="hep-group-title">Hep A mono <span>Avaxim/Havrix</span></div>
          <div class="hep-group-row">
            <div class="hep-doses">${renderDoseChips2(v.k, 'aMono')}</div>
            <div class="hep-year">${yrSel('aYear')}</div>
          </div>
        </div>
        <div class="hep-group">
          <div class="hep-group-title">Hep B mono <span>Engerix</span></div>
          <div class="hep-group-row">
            <div class="hep-doses">${renderDoseChips2(v.k, 'bMono')}</div>
            <div class="hep-year">${yrSel('bYear')}</div>
          </div>
        </div>
        <div class="hep-group">
          <div class="hep-group-title">Twinrix (A+B)</div>
          <div class="hep-group-row">
            <div class="hep-doses">${renderDoseChips2(v.k, 'twin')}</div>
            <div class="hep-year">${yrSel('twYear')}</div>
          </div>
        </div>
      `;
      
      html+=`<tr>
        <td data-label="${t('thVax')}">
          <div class="vname" style="display:flex; justify-content:space-between; align-items:flex-start;">
            <span style="display:flex; align-items:center;">${LANG==='de'?v.de:v.en}${availBadge}${infoBtn}</span>
          </div>
          <div class="vsub">${LANG==='de'?'A + B getrennt impfbar; Twinrix zählt für beide':'A + B separately possible; Twinrix counts for both'}</div>
          ${hbsChk}
        </td>
        <td colspan="2" data-label="${LANG==='de'?'Vorimpfungen & Jahr':'Previous doses & Year'}">${colCombined}</td>
        <td class="status" data-label="${t('thStatus')}">
          <div style="margin-bottom:12px; padding-bottom:12px; border-bottom:1px dashed var(--line);">${aBadge}</div>
          <div>${bBadge}</div>
        </td>
      </tr>`;
      return;
    }
    if(v.menacwy){
      const ma=menacwyAssess();
      const typeOpts=[['','— Typ —'],['acwy','ACWY'],['c','C']];
      const typeSel=typeOpts.map(o=>'<option value="'+o[0]+'"'+(st.type===o[0]?' selected':'')+'>'+o[1]+'</option>').join('');
      const mandBadge=ma.mand?'<span class="badge mand">'+t('mandatory')+'</span>':'';
      html+='<tr><td data-label="'+t('thVax')+'"><div class="vname" style="display:flex;align-items:center;">'+(LANG==='de'?v.de:v.en)+mandBadge+availBadge+infoBtn+'</div><select class="mini" onchange="setField(\'menacwy\',\'type\',this.value)">'+typeSel+'</select></td>'+
        '<td data-label="'+t('thDone')+'">'+renderDoseChips(v.k)+'</td>'+
        '<td data-label="'+t('thLast')+'">'+yearInput('menacwy','year')+'</td>'+
        '<td class="status" data-label="'+t('thStatus')+'"><span class="badge '+ma.status+'">'+({red:t('lgRed'),yellow:t('lgYellow'),green:t('lgGreen'),blue:t('lgBlue'),grey:t('lgGrey')}[ma.status])+'</span><div class="reason">'+(LANG==='de'?ma.noteDe:ma.noteEn)+'</div></td></tr>';return;
    }
    const a=assess(v);let badgeTxt={red:t('lgRed'),yellow:t('lgYellow'),green:t('lgGreen'),blue:t('lgBlue'),grey:t('lgGrey')}[a.status];
    if((v.k === 'rabies' || v.k === 'tbe') && a.status === 'red') {
      const c = conds();
      if(v.k === 'rabies' && !c.includes('animal')) {
        badgeTxt = LANG === 'de' ? 'Empfohlen' : 'Recommended';
      }
      if(v.k === 'tbe') {
        badgeTxt = LANG === 'de' ? 'Empfohlen' : 'Recommended';
      }
    }
    if (a.status === 'green') {
      let lifelong = false;
      const st = vaxState[v.k];
      const d = doseNum(st.done);
      if (v.k === 'mmr' || v.k === 'varicella' || v.k === 'hpv') lifelong = true;
      if (v.k === 'yellowfever' && (d >= 2 || st.disease)) lifelong = true;
      if (v.k === 'chikungunya' && d >= 1) lifelong = true;
      if (v.k === 'dengue' && d >= 2) lifelong = true;
      if (lifelong) {
        badgeTxt = LANG === 'de' ? 'Geschützt' : 'Protected';
      }
    }
    let note=(LANG==='de'?a.noteDe:a.noteEn);let noteStyle='';
    if(a.status==='green'&&BOOSTER[v.k]){note=(LANG==='de'?BOOSTER[v.k].de:BOOSTER[v.k].en);noteStyle=' style="color:var(--green)"';}
    const mandBadge=a.mand?'<span class="badge mand">'+t('mandatory')+'</span>':'';
    const alN=allergyNote(v);const alNote=alN?'<div class="reason" style="color:var(--red);font-weight:600">'+(LANG==='de'?alN.de:alN.en)+'</div>':'';
    let extraChk='';
    if(v.disease)extraChk+='<div class="ctrl-box"><label class="chk-line" style="margin-top:0"><input type="checkbox" '+(st.disease?'checked':'')+' onchange="setField(\''+v.k+'\',\'disease\',this.checked)"> '+t('diseaseLabel')+'</label></div>';
    if(v.dengue)extraChk+='<div class="ctrl-box"><label class="chk-line" style="margin-top:0"><input type="checkbox" '+(st.dengueHad?'checked':'')+' onchange="setField(\''+v.k+'\',\'dengueHad\',this.checked)"> '+t('dengueHadLabel')+'</label></div>';
    const tbeF=(v.k==='tbe')?tbeForm():null;
    let mmrChk='';
    if(v.k === 'mmr') {
      mmrChk = '<div class="ctrl-box"><label style="display:flex; align-items:flex-start; cursor:pointer"><input type="checkbox" style="margin-top:2px; margin-right:6px" '+(serologyState.measles?'checked':'')+' onchange="toggleSerology(\'measles\', this.checked)"> <span style="flex:1; line-height:1.3">Masern-IgG ausreichend</span></label></div>';
    } else if (v.k === 'varicella') {
      mmrChk = '<div class="ctrl-box"><label style="display:flex; align-items:flex-start; cursor:pointer"><input type="checkbox" style="margin-top:2px; margin-right:6px" '+(serologyState.vzv?'checked':'')+' onchange="toggleSerology(\'vzv\', this.checked)"> <span style="flex:1; line-height:1.3">Varizellen-IgG ausreichend</span></label></div>';
    }
    html+='<tr><td data-label="'+t('thVax')+'"><div class="vname" style="display:flex;align-items:center;">'+(LANG==='de'?v.de:v.en)+liveBadge+mandBadge+availBadge+infoBtn+'</div>'+(tbeF?'<div class="mini-note" style="margin-top:4px;font-weight:700;color:#333">→ '+(LANG==='de'?tbeF.de:tbeF.en)+'</div>':'')+(note?'<div class="reason"'+noteStyle+'>'+note+'</div>':'')+liveNote+availNote+alNote+mmrChk+extraChk+'</td>'+
      '<td data-label="'+t('thDone')+'">'+renderDoseChips(v.k)+'</td>'+
      '<td data-label="'+t('thLast')+'">'+yearInput(v.k,'year')+'</td>'+
      '<td class="status" data-label="'+t('thStatus')+'"><span class="badge '+a.status+'">'+badgeTxt+'</span></td></tr>';
  });
  tb.innerHTML=html;
  renderApptOverview();
}
window.setQuickTdapType = function(type) {
    if (vaxState.tdap_polio.quick_type === type) {
        vaxState.tdap_polio.quick_type = null;
    } else {
        vaxState.tdap_polio.quick_type = type;
    }
    renderVaxTable();
};

window.quickFillTdap = function(raw) {
    const type = vaxState.tdap_polio.quick_type;
    if(!type) return;
    raw = raw.replace(/\D/g,'');
    if(!raw) return;
    const cur = new Date().getFullYear();
    let full = '';
    if(raw.length === 2) full = (parseInt(raw,10) <= cur%100 ? 2000+parseInt(raw,10) : 1900+parseInt(raw,10));
    else if(raw.length === 4) full = parseInt(raw,10);
    
    if(full && full >= 1900 && full <= cur) {
        vaxState.tdap_polio.y_td = String(full);
        vaxState.tdap_polio.y_ap = String(full);
        if (type === 'tdap_ipv') vaxState.tdap_polio.y_ipv = String(full);
        renderVaxTable();
    }
};
const HEP_DOSE=[['1','1'],['2','2'],['3','3'],['4','>3']];
function renderDoseChips2(k,field){const cur=vaxState[k][field]||'';return '<div class="dose-chips">'+HEP_DOSE.map(o=>{const sel=cur===o[0];return '<span class="dose-chip'+(sel?' selected':'')+'" onclick="setSub(\''+k+'\',\''+field+'\',\''+o[0]+'\')">'+o[1]+'</span>';}).join('')+'</div>';}
function setSub(k,field,val){vaxState[k][field]=(vaxState[k][field]===val)?'':val;renderVaxTable();}

function countToday(){let n=0;VACCINES.forEach(v=>{const st=vaxState[v.k];if(v.hep){['apptsA','apptsB','apptsAB'].forEach(f=>{if((st[f]||[]).includes('today'))n++;});}else if((st.appts||[]).includes('today'))n++;});return n;}

function renderNotes(){
  const box=el('country-notes');if(!destinations.length){box.innerHTML='<div class="empty">'+t('noDest')+'</div>';return;}
  let html='';
  destinations.forEach(code=>{const c=CBY[code];const name=(LANG==='de'?c.de:c.en);let items=[];
    const data = window.countryData[code] || {};
    const d = data.diseases || {};
    
    // YF
    const yf = d.yellow_fever || {};
    if(yf.risk_level === 'mandatory_all') items.push({t:'red',de:'Gelbfieber-Impfnachweis bei Einreise verpflichtend.',en:'Yellow fever certificate mandatory for entry.'});
    else if(yf.risk_level === 'recommended' || yf.risk_level === 'risk_based') items.push({t:'amber',de:'Gelbfieber-Endemiegebiet – Impfung empfohlen.',en:'Yellow fever endemic area—vaccination recommended.'});
    
    // Meningitis
    if(code === 'SA') items.push({t:'red',de:'Meningokokken ACWY für Hajj/Umrah verpflichtend.',en:'Meningococcal ACWY mandatory for Hajj/Umrah.'});
    const men = d.meningococcal || {};
    if(men.risk_level === 'recommended' || men.risk_level === 'risk_based'){
      const dm=departureMonth();const dry=dm!==null&&[11,0,1,2,3,4,5].includes(dm);
      items.push({t:dry?'red':'amber',de:'Meningitisgürtel – ACWY'+(dry?' (Abreise in der Trockenzeit Dez–Jun: erhöhtes Risiko)':' je nach Saison/Aufenthalt')+'.',en:'Meningitis belt — ACWY'+(dry?' (departure in dry season Dec–Jun: elevated risk)':' depending on season/stay')+'.'});
    }
    
    // Chikungunya
    const chik = d.chikungunya || {};
    if(chik.details && chik.details.includes('outbreak')) items.push({t:'red',de:'Aktueller Chikungunya-Ausbruch.',en:'Active chikungunya outbreak.'});
    else if(chik.risk_level === 'recommended' || chik.risk_level === 'risk_based') items.push({t:'amber',de:'Erhöhtes Chikungunya-Hintergrundrisiko.',en:'Elevated chikungunya background risk.'});

    const cls=items.length?(items[0].t==='red'?'':items[0].t):'info';let inner='<h4><img class="flag" src="https://flagcdn.com/w40/'+code.toLowerCase()+'.png" onerror="this.remove()" alt="" loading="lazy">'+name+(c.terr?' *':'')+'</h4>';
    if(items.length)inner+='<ul>'+items.map(i=>'<li>'+(LANG==='de'?i.de:i.en)+'</li>').join('')+'</ul>';
    const hd=HEALTH_DEMO[code];if(hd)inner+='<div class="health-snap"><div class="hs-date">'+hd.stand+'</div>'+(LANG==='de'?hd.de:hd.en)+'</div>';else inner+='<div class="mini-note" style="margin-top:6px;">'+t('healthLive')+'</div>';
    inner+='<a class="aa-link" href="'+aaLink(code)+'" target="_blank" rel="noopener">'+t('aaLinkTxt')+'</a>';
    html+='<div class="warn-box '+cls+'" style="margin-top:10px;">'+inner+'</div>';});
  box.innerHTML=html;
}

function renderImmunoWarn(){
  const box=el('immuno-warn');const recog=el('drug-recog');const idr=el('immunodef-recog');
  const staff=(typeof roleSeesClinic==='function') && roleSeesClinic((CURRENT_PROFILE||{role:'arzt'}).role);
  if(typeof renderMedVacCheck==='function') renderMedVacCheck();
  const immunoMeds=medsList.filter(medIsImmuno);
  // Immundefizienz-Hinweis (nur Personal)
  if(idr){ idr.style.color=hasImmuneDef()?'var(--red)':'var(--grey)'; idr.textContent=(staff && chronicTextVal() && hasImmuneDef())?(LANG==='de'?'Hinweis auf Immundefizienz – Lebendimpfstoffe kontraindiziert/prüfen':'Possible immunodeficiency — check live vaccines'):''; }
  // Medikamenten-Hinweis (nur Personal, nur die immunsuppressiven)
  if(recog){
    if(!staff || !medsList.length) recog.textContent='';
    else if(immunoMeds.length){ recog.style.color='var(--red)'; recog.textContent=(LANG==='de'?'Immunsuppressiv: ':'Immunosuppressive: ')+immunoMeds.join(', '); }
    else { recog.style.color='var(--green)'; recog.textContent=(LANG==='de'?'Keine immunsuppressiven Medikamente erkannt.':'No immunosuppressive medication detected.'); }
  }
  if(!box) return;
  if(!staff || !livesBlocked()){ box.innerHTML=''; return; }
  const lives=VACCINES.filter(v=>v.live).map(v=>LANG==='de'?v.de:v.en).join(', ');
  const immunoStr=immunoMeds.join(', ');
  const reason=isPregnant()?(LANG==='de'?'Schwangerschaft':'Pregnancy'):((hasImmuneDef()&&!immunoStr)?(LANG==='de'?'Immundefizienz':'Immunodeficiency'):(LANG==='de'?('Immunsuppression'+(immunoStr?' ('+immunoStr+')':'')):('Immunosuppression'+(immunoStr?' ('+immunoStr+')':''))));
  box.innerHTML='<div class="warn-box"><h4>'+(LANG==='de'?'Lebendimpfstoffe – kontraindiziert / Vorsicht':'Live vaccines — contraindicated / caution')+'</h4><p>'+(LANG==='de'?('Wegen '+reason+' sind Lebendimpfstoffe kontraindiziert bzw. nur nach individueller Abwägung: '):('Because of '+reason+', live vaccines are contraindicated or only after individual assessment: '))+'<strong>'+lives+'</strong>.</p><p class="mini-note">'+(LANG==='de'?'Falls indiziert: Lebendimpfung möglichst ≥4 Wochen vor Therapiebeginn; Details je Substanz siehe Medikamenten-Übersicht.':'If indicated: complete live vaccination ≥4 weeks before therapy; per-drug details see the medication overview.')+'</p></div>';
}

function renderAge(){
  const dob=el('p-dob').value;const box=el('age-box');const ex=ageExact(dob);
  if(ex===null){box.className='age-box empty';box.textContent=t('ageEmpty');return;}
  const yr=new Date(dob).getFullYear();const det=ageDetail(dob);
  let txt;
  if(ex<5){
    if(ex<1)txt=det.m+' '+(LANG==='de'?'Mon.':'mo')+' '+det.d+' '+(LANG==='de'?'Tage':'d');
    else txt=det.y+' '+(LANG==='de'?'J.':'yr')+' '+det.m+' '+(LANG==='de'?'Mon.':'mo');
    box.className='age-box child';
  } else {txt=det.y+' '+(LANG==='de'?'Jahre':'years');box.className='age-box';}
  box.innerHTML='<span>'+txt+'</span><span class="yob">('+(LANG==='de'?'geb.':'b.')+' '+yr+')</span>';
}
function updatePregVisibility(){const male=el('p-sex').value==='m';const f=el('preg-field');if(f)f.style.display=male?'none':'';if(male)el('p-pregnant').value='no';}
function updateDepartureHint(){const d=el('p-departure').value;const h=el('departure-hint');if(!h)return;h.textContent=d?((LANG==='de'?'Tage bis Abreise: ':'Days to departure: ')+Math.round((new Date(d)-new Date())/86400000)):'';}
function recompute(){updatePregVisibility();renderAge();updateDepartureHint();renderVaxTable();renderApptOverview();renderNotes();renderImmunoWarn();}

const DISEASE_MAPS = {
  yellowfever:'yellowfever.png', tdap_polio:'polio.png', hepatitis:'hepatitis_a.png',
  menacwy:'menacwy.png', jev:'jev.png', rabies:'rabies.png', tbe:'tbe.png',
  dengue:'dengue.png', influenza:'influenza.png'
};
const PENCIL_SVG = '<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style="vertical-align:middle"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm1.414 1.06a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path></svg>';
function showInfo(k){
  const v=VACCINES.find(x=>x.k===k);const inf=INFO[k];const a=AVAIL[k];
  const availHtml=a?('<div class="m-sec"><h4>'+(LANG==='de'?'Verfügbarkeit & Alter (Ambulanz)':'Availability & age (clinic)')+'</h4><p>'+(a.avail===false?'':('<strong>'+a.prod+'</strong> · '))+(LANG==='de'?a.de:a.en)+'</p></div>'):'';
  const mapBtn=DISEASE_MAPS[k]?'<button class="m-mapbtn" onclick="showMap(\''+k+'\')">'+(LANG==='de'?'Verbreitungskarte ansehen':'View distribution map')+'</button>':'';
  el('modal-content').innerHTML='<button class="modal-close" onclick="closeModal()">×</button>'+
    '<h3>'+(LANG==='de'?v.de:v.en)+(v.live?' <span class="badge live">'+t('live')+'</span>':'')+'</h3>'+
    '<div class="m-sub">'+(LANG==='de'?'Vereinfachte Kurzinformation für das Patientengespräch':'Simplified summary for the patient conversation')+'</div>'+
    '<div class="m-sec"><h4>'+t('mDisease')+'</h4><p>'+inf.disease[LANG]+'</p></div>'+
    '<div class="m-sec"><h4>'+t('mEpi')+'</h4><p>'+inf.epi[LANG]+'</p></div>'+
    '<div class="m-sec"><h4>'+t('mSide')+'</h4><p>'+inf.side[LANG]+'</p></div>'+
    '<div class="m-sec"><h4>'+t('mSchedInfo')+'</h4><p>'+inf.sched[LANG]+'</p></div>'+
    availHtml+mapBtn;
  el('modal-bg').classList.add('show');
}
function closeModal(){el('modal-bg').classList.remove('show');}
function showMap(k){
  const f=DISEASE_MAPS[k];if(!f)return;
  const v=VACCINES.find(x=>x.k===k);const name=v?(LANG==='de'?v.de:v.en):'';
  el('map-bg').innerHTML='<button class="map-close" onclick="closeMap()" title="Schließen">×</button>'+
    '<div class="map-inner">'+
      '<div class="map-head">'+name+' — '+(LANG==='de'?'Geografische Verbreitung':'Geographic distribution')+'</div>'+
      '<img src="assets/karten/'+f+'" alt="'+name+'" class="map-full">'+
      '<div class="map-foot">'+(LANG==='de'?'Quelle: RKI, Epidemiologisches Bulletin 14/2025':'Source: RKI, Epidemiological Bulletin 14/2025')+'</div>'+
    '</div>';
  el('map-bg').classList.add('show');
}
function closeMap(){el('map-bg').classList.remove('show');el('map-bg').innerHTML='';}
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeMap();closeModal();}});

async function savePatient(){
  const name=el('p-name').value.trim();const dob=el('p-dob').value;
  if(!name||!dob){alert(t('needName'));return false;}
  const g=id=>{const e=el(id);return e?(''+e.value).trim():'';};
  const c=id=>{const e=el(id);return e?!!e.checked:false;};
  const vaxCopy=JSON.parse(JSON.stringify(vaxState));
  VACCINES.forEach(v => {
      if(!vaxCopy[v.k]) return;
      if (v.menacwy) { vaxCopy[v.k].status = menacwyAssess().status; }
      else if (v.poliovax) { vaxCopy[v.k].status = polioAssess().status; }
      else if (v.tdap_polio) {
         const tpa = tdapPolioAssess();
         vaxCopy[v.k].status = 'combo';
         vaxCopy[v.k].comps = { T: tpa.T, D: tpa.D, aP: tpa.aP, IPV: tpa.IPV };
      }
      else if (v.hep) {
         const ha = hepAssess();
         if (ha.A === 'red' || ha.B === 'red') vaxCopy[v.k].status = 'red';
         else if (ha.A === 'yellow' || ha.B === 'yellow') vaxCopy[v.k].status = 'yellow';
         else vaxCopy[v.k].status = 'green';
      }
      else {
         vaxCopy[v.k].status = assess(v).status;
      }
  });
  const existing = patients.find(p=>p.id===editingId);
  const snap={
    id: editingId || (window.crypto&&crypto.randomUUID?crypto.randomUUID():String(Date.now())),
    name, firstname:g('p-firstname'), dob, age:ageYears(dob), sex:el('p-sex').value,
    phone:g('p-phone'), email:g('p-email'), insurance:g('p-insurance'), profession:g('p-profession'),
    address:g('p-address'), zip:g('p-zip'), city:g('p-city'),
    duration:el('p-duration').value, departure:el('p-departure').value, destinations:[...destinations],
    pregnant:el('p-pregnant').value, allergy:g('p-allergy'),
    meds:[...medsList], immuno: medsList.filter(medIsImmuno).join(', '), recentVax:g('p-recentvax'),
    conds:conds(), acute:c('p-acute'), chronicText:g('p-chronic-text'), chronic:(chronicTextVal().length>0), immunodef:hasImmuneDef(),
    thrombosis:c('p-thrombosis'), faint:c('p-faint'),
    serology:JSON.parse(JSON.stringify(serologyState)), childhood:childhoodOn(),
    comment:g('p-comment'), physician:el('p-physician').value.trim(), vax:vaxCopy,
    customSchedule:customSchedule?JSON.parse(JSON.stringify(customSchedule)):null,
    status: (document.body.classList.contains('clinic') ? 'done' : ((existing&&existing.status)||'waiting')),
    group:(existing&&existing.group)||'',
    treatmentType:(existing&&existing.treatmentType)||undefined,
    claimedBy:(existing&&existing.claimedBy)||(document.body.classList.contains('clinic')?myUserKey():null),
    claimedByName:(existing&&existing.claimedByName)||((CURRENT_PROFILE&&CURRENT_PROFILE.full_name)||''),
    treatmentAt:(existing&&existing.treatmentAt)||null,
    savedAt:(existing&&existing.savedAt)||new Date().toISOString(), updatedAt:new Date().toISOString()
  };
  if(USE_DB){
    const res = editingId ? await dbUpdatePatient(editingId, snap) : await dbInsertPatient(snap);
    if(res && res.error){ alert('Speichern fehlgeschlagen: '+(res.error.message||res.error)); return false; }
    if(roleSeesClinic((CURRENT_PROFILE||{}).role)) await loadPatientsFromDB();
  } else {
    if(editingId){const i=patients.findIndex(p=>p.id===editingId);if(i>=0)patients[i]=snap;else patients.push(snap);}else patients.push(snap);
    storeSet('charite_patients',JSON.stringify(patients));
    renderPatients();
  }
  if(document.body.classList.contains('clinic')) exitToList();
  else resetForm();
  return true;
}
function loadPatient(id){
  const p=patients.find(x=>x.id===id);if(!p)return;
  el('p-name').value=p.name||'';el('p-dob').value=p.dob||'';el('p-sex').value=p.sex||'f';el('p-duration').value=p.duration||'<1w';el('p-departure').value=p.departure||'';el('p-pregnant').value=p.pregnant||'no';el('p-allergy').value=p.allergy||'';el('p-immuno').value=p.immuno||'';el('p-comment').value=p.comment||'';
  _sv('p-firstname',p.firstname||'');_sv('p-phone',p.phone||'');_sv('p-insurance',p.insurance||'');_sv('p-profession',p.profession||'');_sv('p-address',p.address||'');_sv('p-zip',p.zip||'');_sv('p-city',p.city||'');_sv('p-recentvax',p.recentVax||'');
  medsList = Array.isArray(p.meds)?[...p.meds]:(p.meds?String(p.meds).split(/,\s*/).filter(Boolean):(p.immuno?String(p.immuno).split(/,\s*/).filter(Boolean):[]));
  _sv('p-med-input',''); _sv('p-immuno',medsList.join(', ')); renderMedPills(); renderMedVacCheck();
  _sv('p-chronic-text', p.chronicText || (p.chronic&&!p.chronicText?'chronische Erkrankung':'') ); _sv('p-email', p.email||'');
  _sc('p-acute',!!p.acute);_sc('p-thrombosis',!!p.thrombosis);_sc('p-faint',!!p.faint);
  const ser=p.serology||{};
  serologyState.measles=!!ser.measles;serologyState.vzv=!!ser.vzv;serologyState.hbs=!!ser.hbs;
  document.querySelectorAll('.cond').forEach(c=>c.checked=(p.conds||[]).includes(c.value));
  destinations=[...(p.destinations||[])];freshVaxState();
  if(p.vax) {
    if (p.vax.tdap || p.vax.polio) {
      if (!p.vax.tdap_polio) p.vax.tdap_polio = {gi_tdap:false,gi_ipv:false,y_td:'',y_ap:'',y_ipv:'',doses_hexa:'',y_hexa:'',planned_prod:'',planned:false,prov:'charite'};
      const oldT = p.vax.tdap || {}; const oldP = p.vax.polio || {};
      if (oldT.gi || parseInt(oldT.done||0)>=3) p.vax.tdap_polio.gi_tdap = true;
      if (oldP.gi || parseInt(oldP.done||0)>=3) p.vax.tdap_polio.gi_ipv = true;
      if (oldT.year) { p.vax.tdap_polio.y_td = oldT.year; p.vax.tdap_polio.y_ap = oldT.year; }
      if (oldP.year) { p.vax.tdap_polio.y_ipv = oldP.year; }
      if (oldT.planned) { p.vax.tdap_polio.planned = true; p.vax.tdap_polio.planned_prod = oldT.product || 'tdap_ipv'; p.vax.tdap_polio.prov = oldT.prov || 'charite'; }
      delete p.vax.tdap; delete p.vax.polio;
    }
    Object.keys(p.vax).forEach(k=>{if(vaxState[k])vaxState[k]=Object.assign(vaxState[k],JSON.parse(JSON.stringify(p.vax[k])));});
  }
  editingId=id;el('editing-banner').classList.add('show');el('editing-text').textContent=t('editingNow')+p.name;el('save-btn').textContent=t('btnFinish');
  customSchedule=p.customSchedule?JSON.parse(JSON.stringify(p.customSchedule)):null;
  renderDestChips();recompute();
  if(document.body.classList.contains('clinic')) enterPatient();
  else if(window.scrollTo)try{window.scrollTo({top:0,behavior:'smooth'});}catch(e){}
}
function cancelEdit(){editingId=null;el('editing-banner').classList.remove('show');el('save-btn').textContent=t('btnFinish');resetForm();
  if(document.body.classList.contains('clinic'))document.body.classList.add('clinic-idle');}
async function deletePatient(id){
  if(!confirm(t('confirmDel')))return;
  if(USE_DB){
    const res=await dbDeletePatient(id);
    if(res&&res.error){alert('Löschen fehlgeschlagen: '+(res.error.message||res.error));return;}
    if(editingId===id)cancelEdit();
    await loadPatientsFromDB();
  } else {
    patients=patients.filter(p=>p.id!==id);storeSet('charite_patients',JSON.stringify(patients));
    if(editingId===id)cancelEdit();renderPatients();
  }
}
function togglePatient(id){const e=el('pi-'+id);if(e)e.classList.toggle('open');}

/* ================= AMBULANZLISTE: Tag / Suche / Status / Gruppen ================= */
function ymd(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
let listDay = ymd(new Date());
let listSearch = '';
const AMB_SECTIONS=[
  {status:'waiting', de:'Wartend', en:'Waiting'},
  {status:'treatment', type:'beratung', de:'In Behandlung · Beratung', en:'In treatment · Consultation'},
  {status:'treatment', type:'folgeimpfung', de:'In Behandlung · Folgeimpfung', en:'In treatment · Follow-up'},
  {status:'done', de:'Behandelt', en:'Treated'}
];
function myTreatmentMode(){ let m=null; try{m=localStorage.getItem('charite_treatmentmode');}catch(e){} if(m==='beratung'||m==='folgeimpfung')return m; return ((CURRENT_PROFILE||{}).role==='mfa')?'folgeimpfung':'beratung'; }
function setMyTreatmentMode(m){ if(m!=='beratung'&&m!=='folgeimpfung')return; try{localStorage.setItem('charite_treatmentmode',m);}catch(e){} }
function patientTreatType(p){ return (p.treatmentType==='folgeimpfung'||p.treatmentType==='beratung')?p.treatmentType:'beratung'; }
function patientDay(p){const s=p.savedAt||p.updatedAt;if(!s)return listDay;try{return ymd(new Date(s));}catch(e){return listDay;}}
function patientStatus(p){return p.status||'waiting';}
function listDayPick(v){if(v){listDay=v;renderPatients();}}
function listDayShift(n){const d=new Date(listDay+'T00:00:00');d.setDate(d.getDate()+n);listDay=ymd(d);const i=el('list-date');if(i)i.value=listDay;renderPatients();}
function listDayToday(){listDay=ymd(new Date());const i=el('list-date');if(i)i.value=listDay;renderPatients();}
function listSearchChange(v){listSearch=(v||'').trim().toLowerCase();renderPatients();}
function myUserKey(){return (CURRENT_PROFILE&&(CURRENT_PROFILE.id||CURRENT_PROFILE.full_name))||'me';}
async function persistPatient(p){
  if(USE_DB){const res=await dbUpdatePatient(p.id,p);if(res&&res.error){alert('Speichern fehlgeschlagen: '+(res.error.message||res.error));return false;}}
  else{storeSet('charite_patients',JSON.stringify(patients));}
  return true;
}
async function setPatientStatus(id,status,type){
  const p=patients.find(x=>x.id===id);if(!p)return;
  p.status=status;
  if(status==='treatment'){ p.claimedBy=myUserKey(); p.claimedByName=(CURRENT_PROFILE&&CURRENT_PROFILE.full_name)||''; if(!p.treatmentAt)p.treatmentAt=new Date().toISOString(); p.treatmentType=type||p.treatmentType||myTreatmentMode(); }
  else if(status==='waiting'){ p.claimedBy=null; p.claimedByName=''; p.treatmentAt=null; }
  await persistPatient(p); renderPatients();
}
async function startTreatment(id){ await setPatientStatus(id,'treatment',myTreatmentMode()); loadPatient(id); }
async function assignGroup(id){
  closeCardMenus();
  const p=patients.find(x=>x.id===id);if(!p)return;
  const g=prompt(LANG==='de'?'Gruppen-/Familienname (leer = Gruppe entfernen):':'Group/family name (empty = remove):', p.group||'');
  if(g===null)return; p.group=g.trim();
  await persistPatient(p); renderPatients();
}
// Drag&Drop: auf eine Spalte = Status ändern; auf einen anderen Patienten = gruppieren
async function ungroup(id){
  const p=patients.find(x=>x.id===id);if(!p)return; p.group='';
  await persistPatient(p); renderPatients();
}
let _dragPid=null, _dragGroup=null;
function pDragStart(e,id){_dragPid=id;_dragGroup=null;try{e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',id);}catch(_){}}
function gDragStart(e,g){ if(e.target.closest('.patient-item'))return; _dragGroup=g;_dragPid=null;try{e.dataTransfer.effectAllowed='move';}catch(_){}}
function pDragOver(e){e.preventDefault();e.currentTarget.classList.add('drag-over');const sec=e.currentTarget.closest('.amb-section');if(sec)sec.classList.remove('collapsed');}
function pDragLeave(e){e.currentTarget.classList.remove('drag-over');}
function pDrop(e,status,type){
  e.preventDefault();e.currentTarget.classList.remove('drag-over');
  if(_dragGroup){ const g=_dragGroup;_dragGroup=null;_dragPid=null;moveGroupStatus(g,status,type);return; }
  let id=_dragPid;if(!id){try{id=e.dataTransfer.getData('text/plain');}catch(_){}}_dragPid=null;if(id)setPatientStatus(id,status,type);
}
async function moveGroupStatus(groupName,status,type){
  const gl=groupName.trim().toLowerCase();
  const members=patients.filter(p=>patientDay(p)===listDay && (p.group||'').trim().toLowerCase()===gl);
  for(const p of members){ p.status=status;
    if(status==='treatment'){p.claimedBy=myUserKey();p.claimedByName=(CURRENT_PROFILE&&CURRENT_PROFILE.full_name)||'';if(!p.treatmentAt)p.treatmentAt=new Date().toISOString();p.treatmentType=type||p.treatmentType||myTreatmentMode();}
    else if(status==='waiting'){p.claimedBy=null;p.claimedByName='';p.treatmentAt=null;}
    await persistPatient(p);
  }
  renderPatients();
}
function pCardOver(e){ if(_dragPid && _dragPid!==e.currentTarget.dataset.pid){ e.preventDefault(); e.stopPropagation(); e.currentTarget.classList.add('group-target'); } }
function pCardLeave(e){ e.currentTarget.classList.remove('group-target'); }
async function pCardDrop(e){
  e.currentTarget.classList.remove('group-target');
  if(_dragGroup){ return; }        // Gruppen werden nur auf Spalten fallengelassen
  e.preventDefault(); e.stopPropagation();
  const targetId=e.currentTarget.dataset.pid; const srcId=_dragPid; _dragPid=null;
  if(!srcId||srcId===targetId)return;
  const src=patients.find(x=>x.id===srcId), tgt=patients.find(x=>x.id===targetId);
  if(!src||!tgt)return;
  const nm=(p)=>(p.firstname?p.name+', '+p.firstname:p.name);
  if(!confirm((LANG==='de'?'„'+nm(src)+'" zur Gruppe „'+(tgt.name||'')+'" hinzufügen?':'Add "'+nm(src)+'" to group "'+(tgt.name||'')+'"?')))return;
  const grp=(tgt.name||'Gruppe').trim();   // Gruppenname = Nachname des Ziels
  src.group=grp; tgt.group=grp;
  await persistPatient(tgt); await persistPatient(src); renderPatients();
}
function actionBtns(p){
  const id=p.id,s=patientStatus(p);let b='';
  const mk=(fn,lbl,cls)=>'<button class="btn sec sm amb-move'+(cls?' '+cls:'')+'" onclick="event.stopPropagation();'+fn+'">'+lbl+'</button>';
  if(s==='waiting') b+=mk("startTreatment('"+id+"')",(LANG==='de'?'Behandeln':'Treat'),'primary');
  else if(s==='treatment') b+=mk("setPatientStatus('"+id+"','done')",(LANG==='de'?'Behandelt':'Done'),'primary');
  else b+=mk("setPatientStatus('"+id+"','treatment')",(LANG==='de'?'Zurückholen':'Reopen'));
  return b;
}
function elapsedStr(iso){ if(!iso)return''; const min=Math.max(0,Math.round((Date.now()-new Date(iso).getTime())/60000)); if(isNaN(min))return''; if(min<1)return LANG==='de'?'gerade eben':'just now'; if(min<60)return min+' min'; const h=Math.floor(min/60),m=min%60; return h+' h'+(m?' '+m:'')+(m?' min':''); }
function initials(name){ if(!name)return '?'; const parts=String(name).trim().split(/\s+/).filter(Boolean); if(!parts.length)return '?'; if(parts.length===1)return parts[0].slice(0,2).toUpperCase(); return (parts[0][0]+parts[parts.length-1][0]).toUpperCase(); }
function initialsCircle(name){ return '<span class="ini-circle" title="'+_esc(name||'')+'">'+_esc(initials(name))+'</span>'; }
function toggleCardMenu(id){ const m=el('cm-'+id); const open=m&&m.style.display==='block'; closeCardMenus(); if(m&&!open)m.style.display='block'; }
function closeCardMenus(){ document.querySelectorAll('.card-menu').forEach(m=>m.style.display='none'); }
document.addEventListener('click',function(e){ if(!e.target.closest('.card-menu')&&!e.target.closest('.menu-btn')) closeCardMenus(); });
let AMB_TIMER=null;
function startAmbRefresh(){ if(AMB_TIMER)return; AMB_TIMER=setInterval(()=>{ if(USE_DB && typeof roleSeesClinic==='function' && roleSeesClinic((CURRENT_PROFILE||{}).role)) loadPatientsFromDB(); },15000); }
function renderPatients(){
  const listEl=el('patient-list');if(!listEl)return;
  const di=el('list-date');if(di&&di.value!==listDay)di.value=listDay;
  const dayPats=patients.filter(p=>patientDay(p)===listDay);
  el('list-count').textContent=dayPats.length;
  const q=listSearch;
  const filt=q?dayPats.filter(p=>((p.name||'')+' '+(p.firstname||'')).toLowerCase().includes(q)||((p.firstname||'')+' '+(p.name||'')).toLowerCase().includes(q)):dayPats;
  let html='';
  AMB_SECTIONS.forEach(s=>{
    const inSec=filt.filter(p=>{ if(patientStatus(p)!==s.status)return false; if(s.status==='treatment')return patientTreatType(p)===s.type; return true; });
    const collapsed=(s.status==='done');
    const dropAttr='data-status="'+s.status+'"'+(s.type?' data-type="'+s.type+'"':'');
    const typeArg=s.type?("'"+s.type+"'"):'null';
    html+='<div class="amb-section'+(collapsed?' collapsed':'')+(s.type?' amb-treat':'')+'" '+dropAttr+'>';
    html+='<div class="amb-sec-h" onclick="this.parentNode.classList.toggle(\'collapsed\')" ondragover="pDragOver(event)" ondragleave="pDragLeave(event)" ondrop="pDrop(event,\''+s.status+'\','+typeArg+')"><span>'+(LANG==='de'?s.de:s.en)+' <span class="count-pill">'+inSec.length+'</span></span><span class="amb-toggle">▾</span></div>';
    html+='<div class="patient-list drop-zone" '+dropAttr+' ondragover="pDragOver(event)" ondragleave="pDragLeave(event)" ondrop="pDrop(event,\''+s.status+'\','+typeArg+')">';
    html+= inSec.length ? renderSectionCards(inSec) : '<div class="amb-empty">'+(LANG==='de'?'Hierher ziehen …':'Drop here …')+'</div>';
    html+='</div></div>';
  });
  listEl.innerHTML=html;
}
function renderSectionCards(list){
  const groups={},order=[];
  list.forEach(p=>{const g=(p.group||'').trim();const key=g?('g:'+g.toLowerCase()):('p:'+p.id);if(!groups[key]){groups[key]={g:g,items:[]};order.push(key);}groups[key].items.push(p);});
  let h='';
  order.forEach(key=>{const grp=groups[key];
    if(grp.g&&grp.items.length>1){ const gesc=_esc(grp.g).replace(/'/g,"\\'"); h+='<div class="amb-group" draggable="true" ondragstart="gDragStart(event,\''+gesc+'\')"><div class="amb-group-h">'+(LANG==='de'?'Gruppe: ':'Group: ')+_esc(grp.g)+' <span class="amb-group-hint">'+(LANG==='de'?'(ganze Gruppe ziehen)':'(drag whole group)')+'</span></div>'+grp.items.map(renderPatientCard).join('')+'</div>'; }
    else h+=grp.items.map(renderPatientCard).join('');
  });
  return h;
}
function renderPatientCard(p){
    const dest=(p.destinations||[]).map(c=>CBY[c]?(LANG==='de'?CBY[c].de:CBY[c].en):c).join(', ')||'—';
    const durLbl={'<1w':'< 1 '+(LANG==='de'?'Woche':'week'),'1-2w':'1–2 '+(LANG==='de'?'Wochen':'weeks'),'<2w':'< 2 '+(LANG==='de'?'Wochen':'weeks'),'2-4w':'2–4 '+(LANG==='de'?'Wochen':'weeks'),'0-7':'0–7 d','7-14':'7–14 d','14-21':'14–21 d','21-28':'21–28 d','1-3m':'1–3 '+(LANG==='de'?'Mon':'mo'),'3-6m':'3–6 '+(LANG==='de'?'Mon':'mo'),'>6m':'>6 '+(LANG==='de'?'Mon':'mo')}[p.duration]||p.duration||'—';
    const vax=p.vax||{};
    // Impfstatus (Sektion 3)
    let statusHTML = '<div style="font-size:12px;font-weight:700;margin-top:12px;margin-bottom:6px;">' + (LANG==='de'?'Impfstatus':'Vaccination Status') + '</div><div style="display:flex;flex-wrap:wrap;gap:6px;">';
    let hasStatus = false;
    VACCINES.forEach(sv => {
       const svSt = vax[sv.k];
       if (!svSt) return;
       if (sv.tdap_polio && svSt.comps) {
         hasStatus = true;
         ['T','D','aP','IPV'].forEach(c => {
             statusHTML += `<span class="comp ${svSt.comps[c]||'grey'}">${c}</span>`;
         });
      } else if (['green','red','yellow','blue'].includes(svSt.status)) {
         hasStatus = true;
         let name = (LANG==='de'?sv.de:sv.en);
         if(sv.hep && (svSt.plannedA || (svSt.done && svSt.done.includes('A')))) name = 'Hepatitis A';
         statusHTML += `<span class="badge ${svSt.status}">${name}</span>`;
      }
    });
    statusHTML += '</div>';
    if (!hasStatus) statusHTML = '<div style="margin-top:10px;" class="mini-note">'+(LANG==='de'?'Kein Impfstatus erfasst.':'No vaccination status recorded.')+'</div>';

    // Impfplan (Sektion 4)
    let schedHTML = '';
    const savedPlanned = [];
    VACCINES.forEach(sv => {
      const svSt = vax[sv.k];
      if (!svSt) return;
      if (sv.hep) {
        if (svSt.plannedA) savedPlanned.push('Hepatitis A');
        if (svSt.plannedB) savedPlanned.push('Hepatitis B');
        if (svSt.plannedAB) savedPlanned.push('Twinrix');
      } else if (sv.tdap_polio) {
        if (svSt.planned) savedPlanned.push(LANG==='de'?sv.de:sv.en);
        if (svSt.planned_ipv) savedPlanned.push('Polio (IPV)');
      } else if (svSt.planned) {
        savedPlanned.push(LANG==='de'?sv.de:sv.en);
      }
    });

    if (p.customSchedule && p.customSchedule.length > 0) {
      schedHTML = '<div style="font-size:12px;font-weight:700;margin-top:12px;margin-bottom:6px;">'+(LANG==='de'?'Geplante Impfungen':'Planned vaccinations')+'</div><div style="display:flex;flex-direction:column;gap:8px;">';
      p.customSchedule.forEach((b, idx) => {
         let title = (LANG === 'de' ? 'Termin ' : 'Appt ') + (idx + 1);
         if (b.isExternal) title += (LANG === 'de' ? ' (Extern)' : ' (External)');
         let offset = b.offset;
         let subtitle = '';
         if (offset === 0) subtitle = LANG === 'de' ? 'Heute' : 'Today';
         else if (b._isIndependent) subtitle = LANG === 'de' ? 'Unabhängig' : 'Independent';
         else if (offset % 7 === 0) subtitle = `~${offset/7} ${LANG==='de'?'Wochen':'weeks'}`;
         else subtitle = `~${Math.round(offset/7)} ${LANG==='de'?'Wochen':'weeks'}`;
         
         let itemsHtml = b.items.length ? b.items.map(it => {
            let n = it.displayName || it.name;
            return `<div style="background:#fff;border:1px solid var(--line);border-radius:4px;padding:4px 8px;margin-bottom:4px;display:flex;justify-content:space-between;align-items:center;">
               <div style="font-size:11.5px;"><b>${n}</b> ${it.live ? '<span class="badge live" style="font-size:10px;padding:1px 4px;margin-left:4px;">Lebend</span>' : ''}</div>
            </div>`;
         }).join('') : '<div style="color:var(--grey);font-size:11px;font-style:italic;padding:4px;">'+(LANG==='de'?'Keine Impfungen':'No vaccinations')+'</div>';

         schedHTML += `<div style="background:var(--grey-xl);border:1px solid var(--line);border-radius:6px;overflow:hidden;">
           <div style="background:#f8f9fa;padding:4px 8px;border-bottom:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;">
              <strong style="font-size:11.5px;">${title}</strong>
              <span style="font-size:11px;color:var(--grey);">${subtitle}</span>
           </div>
           <div style="padding:4px 8px;">${itemsHtml}</div>
         </div>`;
      });
      schedHTML += '</div>';
    } else if (savedPlanned.length > 0) {
      schedHTML = '<div style="font-size:12px;font-weight:700;margin-top:12px;margin-bottom:6px;">'+(LANG==='de'?'Geplante Impfungen':'Planned vaccinations')+'</div><div style="display:flex;flex-direction:column;gap:4px;">';
      savedPlanned.forEach(sp => {
          schedHTML += `<div style="background:#fff;border:1px solid var(--line);border-radius:4px;padding:4px 8px;font-size:11.5px;"><b>${sp}</b></div>`;
      });
      schedHTML += '</div>';
    }
    
    const schedBlock=schedHTML?('<div style="margin-top:10px;">'+schedHTML+'</div>'):('<div style="margin-top:10px;" class="mini-note">'+(LANG==='de'?'Keine Impfungen geplant.':'No vaccinations planned.')+'</div>');
    const cmt=p.comment?'<div style="margin-top:10px;"><strong>'+(LANG==='de'?'Kommentar':'Comment')+':</strong> '+p.comment+'</div>':'';
    const upd=(p.updatedAt&&p.updatedAt!==p.savedAt)?' · '+(LANG==='de'?'geändert':'edited')+' '+fmtDateTime(p.updatedAt):'';
    const stamp='<div style="margin-top:12px;font-size:11.5px;color:var(--grey);border-top:1px solid var(--line);padding-top:8px;">'+t('savedStamp')+': '+fmtDateTime(p.savedAt)+upd+' · '+t('physicianLbl')+': '+(p.physician||'—')+'</div>';
    const dobStr=p.dob?fmtDate(new Date(p.dob)):'—';const ageParen=(p.age!==null&&p.age!==undefined)?' ('+p.age+' '+(LANG==='de'?'J.':'yrs')+')':'';
    const dispName=(p.firstname?p.name+', '+p.firstname:p.name);
    const grpBadge=p.group?' <span class="grp-badge">'+p.group+'</span>':'';
    const s=patientStatus(p); const mine=p.claimedBy&&p.claimedBy===myUserKey();
    let timeMeta='';
    if(s==='waiting') timeMeta=' · '+(LANG==='de'?'wartet ':'waiting ')+elapsedStr(p.savedAt);
    else if(s==='treatment') timeMeta=(mine?' · '+(LANG==='de'?'von mir':'by me'):'')+(p.treatmentAt?' · '+elapsedStr(p.treatmentAt):'');
    const ini=((s==='treatment'||s==='done')&&p.claimedByName)?initialsCircle(p.claimedByName):'';
    const bodyActions='<div class="pb-actions"><button class="btn sec sm" onclick="event.stopPropagation();assignGroup(\''+p.id+'\')">'+(LANG==='de'?'Gruppieren':'Group')+'</button>'+(p.group?'<button class="btn sec sm" onclick="event.stopPropagation();ungroup(\''+p.id+'\')">'+(LANG==='de'?'Entgruppieren':'Ungroup')+'</button>':'')+'<button class="btn danger sm" onclick="event.stopPropagation();deletePatient(\''+p.id+'\')">'+(LANG==='de'?'Löschen':'Delete')+'</button></div>';
    return '<div class="patient-item'+(mine&&s==='treatment'?' mine':'')+'" id="pi-'+p.id+'" data-pid="'+p.id+'" draggable="true" ondragstart="pDragStart(event,\''+p.id+'\')" ondragover="pCardOver(event)" ondragleave="pCardLeave(event)" ondrop="pCardDrop(event)"><div class="patient-head" onclick="togglePatient(\''+p.id+'\')"><span class="caret" onclick="event.stopPropagation();loadPatient(\''+p.id+'\')" title="'+(LANG==='de'?'Öffnen':'Open')+'">▶</span><span class="pl-name">'+dispName+grpBadge+'</span><span class="pl-meta">'+(LANG==='de'?'geb. ':'b. ')+dobStr+ageParen+' · '+dest+timeMeta+'</span><span class="pl-spacer"></span>'+actionBtns(p)+ini+'</div>'+
      '<div class="patient-body">'+bodyActions+'<div class="grid g3" style="margin-top:10px;"><div><strong>'+(LANG==='de'?'Reisedauer':'Duration')+':</strong> '+durLbl+'</div><div><strong>'+(LANG==='de'?'Krankenkasse':'Insurance')+':</strong> '+(p.insurance||'—')+'</div><div><strong>'+(LANG==='de'?'Telefon':'Phone')+':</strong> '+(p.phone||'—')+'</div></div><div style="margin-top:8px;"><strong>'+(LANG==='de'?'Allergien':'Allergies')+':</strong> '+(p.allergy||'—')+' · <strong>'+(LANG==='de'?'Immunsuppression':'Immunosuppression')+':</strong> '+(p.immuno||'—')+'</div>'+statusHTML+schedBlock+cmt+stamp+'</div></div>';
}

function fmtDate(d){return String(d.getDate()).padStart(2,'0')+'.'+String(d.getMonth()+1).padStart(2,'0')+'.'+d.getFullYear();}
function fmtDateTime(iso){if(!iso)return '';const d=new Date(iso);return fmtDate(d)+', '+String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')+' '+(LANG==='de'?'Uhr':'');}
function provName(p){const c=provResolve(p);return t(c==='paed'?'provPaed':c==='gp'?'provGP':'provCharite');}
function printSchedule() {
  const name = el('p-name').value.trim() || '—';
  const dob = el('p-dob').value;
  const det = dob ? ageDetail(dob) : null;
  const dest = destinations.map(c => LANG==='de' ? CBY[c].de : CBY[c].en).join(', ') || '—';
  const base = new Date();
  const comment = el('p-comment').value.trim();
  const dep = el('p-departure').value;
  const daysDep = dep ? Math.round((new Date(dep)-base)/86400000) : null;
  const ageStr = det ? (det.y<5 ? (det.y<1 ? det.m+' '+(LANG==='de'?'Mon.':'mo')+' '+det.d+' '+(LANG==='de'?'Tage':'d') : det.y+' '+(LANG==='de'?'J.':'yr')+' '+det.m+' '+(LANG==='de'?'Mon.':'mo')) : det.y+' '+(LANG==='de'?'Jahre':'yrs')) : '';
  
  const css = 'body{font-family:Helvetica,Arial,sans-serif;color:#111;margin:32px;} h1{font-size:20px;border-bottom:2px solid #000;padding-bottom:8px;} h2{font-size:14px;margin-top:20px;padding:6px 10px;background:#eef5fc;border:1px solid #bcd6f2;border-radius:4px;color:#000;} .gap{font-weight:400;font-size:12px;opacity:.8;margin-left:6px;} .prov{margin:5px 0 0 10px;font-size:13px;} .prov b{display:inline-block;min-width:150px;} .meta{color:#555;font-size:13px;margin-top:6px;} .box{margin-top:14px;padding:10px 14px;border:1px solid #bcd6f2;background:#eef5fc;border-radius:8px;font-size:12.5px;} .foot{margin-top:26px;font-size:11px;color:#888;}';
  
  let h = '<html><head><meta charset="utf-8"><title>'+t('printTitle')+'</title><style>'+css+'</style></head><body>';
  h += '<h1>Charité · Reisemedizinische Ambulanz · '+t('printTitle')+'</h1><div class="meta"><strong>'+name+'</strong>'+(ageStr?' · '+ageStr:'')+(dob?' ('+(LANG==='de'?'geb.':'b.')+' '+fmtDate(new Date(dob))+')':'')+'<br>'+(LANG==='de'?'Reiseziel(e)':'Destination(s)')+': '+dest+(dep?'<br>'+(LANG==='de'?'Abreise':'Departure')+': '+fmtDate(new Date(dep)):'')+'<br>'+(LANG==='de'?'Erstellt':'Created')+': '+fmtDateTime(base.toISOString())+'</div>';

  const planned = [];
  VACCINES.forEach(v => {
    const st = vaxState[v.k];
    if (!st) return;
    if (v.hep) {
      if (st.plannedA) planned.push({ name: 'Hepatitis A', k: 'hepA', live: false, stKey: v.k });
      if (st.plannedB) planned.push({ name: 'Hepatitis B', k: 'hepB', live: false, stKey: v.k });
      if (st.plannedAB) planned.push({ name: 'Twinrix (A+B)', k: 'hepAB', live: false, stKey: v.k });
    } else {
      if (st.planned) planned.push({ name: getPlanName(v, st), k: v.k, live: !!v.live, stKey: v.k });
    }
  });

  let buckets = customSchedule;
  if (!buckets && planned.length > 0) {
    buckets = buildOptimalSchedule(planned, dep);
  }

  if (!buckets || buckets.length === 0) {
    h += '<p>'+t('printNone')+'</p>';
  } else {
    let nearDays = 0;
    
    buckets.forEach((b, idx) => {
      let offset = b.offset;
      nearDays = Math.max(nearDays, offset);
      let title = (LANG === 'de' ? 'Termin ' : 'Appt ') + (idx + 1);
      if (b.isExternal) title += (LANG === 'de' ? ' (Extern)' : ' (External)');
      
      let subtitle = '';
      if (offset === 0) subtitle = LANG === 'de' ? '(Heute, 0 Wochen)' : '(Today, 0 weeks)';
      else if (offset % 7 === 0) subtitle = LANG === 'de' ? `(~${offset/7} Wochen)` : `(~${offset/7} weeks)`;
      else subtitle = LANG === 'de' ? `(~${Math.round(offset/7)} Wochen)` : `(~${Math.round(offset/7)} weeks)`;
      
      h += '<h2>' + title + ' <span class="gap">' + subtitle + '</span></h2>';
      
      let provNameStr = b.isExternal ? (LANG==='de'?'Hausarzt/Extern':'External provider') : 'Charité';
      if (b.items && b.items.length) {
          let names = b.items.map(it => it.name).join(', ');
          h += '<div class="prov"><b>' + provNameStr + ':</b> ' + names + '</div>';
      } else {
          h += '<div class="prov"><b>' + provNameStr + ':</b> <i>' + (LANG==='de'?'Keine Impfungen zugeordnet':'No vaccinations assigned') + '</i></div>';
      }
    });

    const lives = planned.filter(p => p.live);
    if (lives.length >= 2) {
      h += '<div class="box" style="border-color:#f5c2c2;background:#fdecec"><strong>'+(LANG==='de'?'Bei Lebendimpfstoffen (z.B. '+lives.map(l=>l.name).join(', ')+') gilt: Entweder am selben Tag impfen oder mind. 4 Wochen Abstand einhalten.':'Live vaccines must be given on the same day or ≥4 weeks apart.')+'</strong></div>';
    }

    h += '<div class="box"><strong>'+(LANG==='de'?'Benötigte Zeit vor Ort (ohne späteren Termin): ca. '+nearDays+' Tage.':'Time needed on site (excl. later appt): ~'+nearDays+' days.')+'</strong>'+(daysDep!==null?' '+(LANG==='de'?'Tage bis Abreise: '+daysDep+'.':'Days to departure: '+daysDep+'.')+(daysDep<nearDays?' <span style="color:#b00">'+(LANG==='de'?'Zeit reicht evtl. nicht – Schnellschema/Priorisierung prüfen.':'May be insufficient — consider rapid schedule.')+'</span>':''):'')+'</div>';
  }

  if (childhoodOn && childhoodOn()) h += '<div class="box"><strong>'+t('provPaed')+':</strong> '+t('printChildhood')+'</div>';
  if (comment) h += '<div class="box"><strong>'+(LANG==='de'?'Kommentar':'Comment')+':</strong> '+comment+'</div>';
  h += '<div class="box">'+t('printCharite')+'<br><strong>'+t('printDoctolib')+'</strong></div>';
  h+='<div class="foot">'+(LANG==='de'?'Angegeben sind Mindestabstände, keine festen Termine. Bitte Folgetermine selbst über Doctolib buchen.':'Minimum intervals shown, not fixed dates. Please book follow-ups via Doctolib.')+'</div></body></html>';
  const w=window.open('','_blank');if(!w){alert(LANG==='de'?'Bitte Pop-ups erlauben, um den Impfplan zu drucken.':'Please allow pop-ups to print.');return;}
  w.document.write(h);w.document.close();w.focus();setTimeout(()=>{try{w.print();}catch(e){}},300);
}

/* ---------- RESET ---------- */
function _sv(id,v){const e=el(id);if(e)e.value=v;}
function _sc(id,v){const e=el(id);if(e)e.checked=v;}
function resetForm(){
  el('p-name').value='';el('p-dob').value='';el('p-sex').value='f';el('p-duration').value='<1w';el('p-departure').value='';el('p-pregnant').value='no';el('p-allergy').value='';el('p-immuno').value='';el('p-comment').value='';
  ['p-firstname','p-email','p-phone','p-insurance','p-profession','p-address','p-zip','p-city','p-chronic-text','p-med-input','p-recentvax'].forEach(id=>_sv(id,''));
  ['p-acute','p-thrombosis','p-faint'].forEach(id=>_sc(id,false));
  medsList=[]; renderMedPills();
  serologyState = { measles: false, vzv: false, hbs: false };
  document.querySelectorAll('.cond').forEach(c=>c.checked=false);
  destinations=[];freshVaxState();editingId=null;el('editing-banner').classList.remove('show');el('save-btn').textContent=t('btnFinish');
  renderDestChips();recompute();
}

/* ---------- LANGUAGE ---------- */
function setLang(l){
  LANG=l;document.documentElement.lang=l;
  el('lang-de').classList.toggle('active',l==='de');el('lang-en').classList.toggle('active',l==='en');
  document.querySelectorAll('[data-i18n]').forEach(e=>{const k=e.getAttribute('data-i18n');if(I18N[k])e.textContent=I18N[k][l];});
  const durLabels={'0-7':'0–7 '+(l==='de'?'Tage':'days'),'7-14':'7–14 '+(l==='de'?'Tage':'days'),'14-21':'14–21 '+(l==='de'?'Tage':'days'),'21-28':'21–28 '+(l==='de'?'Tage':'days'),'1-3m':'1–3 '+(l==='de'?'Monate':'months'),'3-6m':'3–6 '+(l==='de'?'Monate':'months'),'>6m':'>6 '+(l==='de'?'Monate':'months')};
  [...el('p-duration').options].forEach(o=>{if(durLabels[o.value])o.textContent=durLabels[o.value];});
  if(editingId)el('save-btn').textContent=t('btnFinish');
  buildDestSelect();renderDestChips();recompute();renderPatients();
}

/* ================= ROLLEN / AUTH-INTEGRATION ================= */
let USE_DB = false;
let CURRENT_PROFILE = null;

async function loadPatientsFromDB(){
  if(typeof dbListPatients!=='function') return;
  const { data, error } = await dbListPatients();
  if(error){ console.warn('Ambulanzliste laden:', error.message||error); return; }
  patients = (data||[]).map(row=>{
    const p = Object.assign({}, row.data||{});
    p.id = row.id;
    if(!p.savedAt) p.savedAt = row.created_at;
    p.updatedAt = row.updated_at || p.updatedAt;
    return p;
  });
  renderPatients();
}

function applyRole(profile){
  CURRENT_PROFILE = profile || { role:'arzt' };
  const role = CURRENT_PROFILE.role || 'arzt';
  const nameFull = ((CURRENT_PROFILE.title?CURRENT_PROFILE.title+' ':'')+(CURRENT_PROFILE.full_name||'')).trim();
  const ub=el('user-box'); if(ub) ub.style.display='flex';
  const un=el('user-name'); if(un) un.textContent = nameFull || (CURRENT_PROFILE.email||'');
  const ur=el('user-role'); if(ur) ur.textContent = roleLabel(role,'de');
  const ph=el('p-physician'); if(ph) ph.value = nameFull;
  const hb=el('admin-menu-btn'); if(hb) hb.style.display = roleSeesClinic(role)?'inline-flex':'none';

  USE_DB = (typeof AUTH_ENABLED!=='undefined') && AUTH_ENABLED && !!supabaseClient && (roleSeesClinic(role) || role==='patient');
  const show=(id,on)=>{const e=el(id); if(e) e.style.display = on?'':'none';};

  if(role==='patient'){
    document.body.classList.add('kiosk');
    ['notes-card','step3','step-schedule','list-card','kasse-card'].forEach(id=>show(id,false));
    ['step1','step2'].forEach(id=>show(id,true));
    if(ub) ub.style.display='none';
    const kb=el('kiosk-bar'); if(kb) kb.classList.add('show');
    return;
  }
  if(role==='kasse'){
    ['step1','step2','notes-card','step3','step-schedule','list-card'].forEach(id=>show(id,false));
    show('kasse-card',true);
    return;
  }
  ['step1','step2','notes-card','step3','step-schedule','list-card'].forEach(id=>show(id,true));
  show('kasse-card',false);
  document.body.classList.add('clinic');
  document.body.classList.add('clinic-idle');       // Start: kein Patient gewählt → Abschnitte eingeklappt
  const npb=el('new-patient-btn'); if(npb) npb.style.display='inline-block';
  moveListToTop();
  if(USE_DB){ loadPatientsFromDB(); startAmbRefresh(); } else renderPatients();
}
function moveListToTop(){
  const main=document.querySelector('main'); const lc=el('list-card'), s1=el('step1'), eb=el('editing-banner');
  if(main&&lc&&s1){ try{ main.insertBefore(lc, s1); if(eb) main.insertBefore(eb, s1); }catch(e){} }
}
function enterPatient(){
  document.body.classList.remove('clinic-idle');
  const eb=el('editing-banner'); if(eb) eb.classList.add('show');
  try{ el('step1').scrollIntoView({behavior:'smooth',block:'start'}); }catch(e){}
}
function exitToList(){
  resetForm();
  document.body.classList.add('clinic-idle');
  const eb=el('editing-banner'); if(eb) eb.classList.remove('show');
  try{ el('list-card').scrollIntoView({behavior:'smooth',block:'start'}); }catch(e){}
}
function startNewPatient(){ resetForm(); const et=el('editing-text'); if(et) et.textContent=(LANG==='de'?'Neuer Patient':'New patient'); enterPatient(); }

/* ---------- Kiosk (Patientenaccount) ---------- */
async function kioskSubmit(){
  const ok = await savePatient();
  if(ok){
    try{window.scrollTo({top:0,behavior:'smooth'});}catch(e){}
    alert(LANG==='de'?'Vielen Dank! Ihre Angaben wurden übermittelt.':'Thank you! Your data has been submitted.');
  }
}

/* ================= ADMIN-PANEL ================= */
function _fillSelect(id, items, valfn, labfn, sel){
  const e=el(id); if(!e) return;
  e.innerHTML = items.map(it=>'<option value="'+valfn(it)+'"'+(sel===valfn(it)?' selected':'')+'>'+labfn(it)+'</option>').join('');
}
function openAdminPanel(){
  const p=el('admin-panel'); if(!p) return;
  const mode=myTreatmentMode(); document.querySelectorAll('input[name=treatmode]').forEach(r=>{r.checked=(r.value===mode);});
  const isAdmin=(CURRENT_PROFILE||{}).role==='admin';
  const ao=el('admin-only'); if(ao) ao.style.display=isAdmin?'':'none';
  if(isAdmin){
    _fillSelect('au-title', TITLES.map(x=>({v:x})), x=>x.v, x=>x.v||'—');
    _fillSelect('au-gender', GENDERS, x=>x.value, x=>LANG==='de'?x.de:x.en);
    _fillSelect('au-role', CREATABLE_ROLES, x=>x.value, x=>LANG==='de'?x.de:x.en, 'mfa');
    renderAdminUsers();
  }
  p.classList.add('show');
}
function openSettings(){ openAdminPanel(); }
function closeAdminPanel(){ const p=el('admin-panel'); if(p) p.classList.remove('show'); }
function adminMsg(text,type){ const e=el('admin-msg'); if(e) e.innerHTML = text?('<div class="msg '+(type||'err')+'">'+text+'</div>'):''; }

async function renderAdminUsers(){
  const box=el('admin-users'); if(!box) return;
  const { data, error } = await adminListUsers();
  if(error){ box.innerHTML='<div class="msg err">'+(error.message||error)+'</div>'; return; }
  if(!data.length){ box.innerHTML='<div class="mini-note">Noch keine Nutzer angelegt.</div>'; return; }
  const order=['admin','arzt','mfa','kasse','patient'];
  const byRole={}; data.forEach(u=>{(byRole[u.role]=byRole[u.role]||[]).push(u);});
  let html='';
  order.forEach(r=>{
    const list=byRole[r]; if(!list||!list.length) return;
    html+='<div class="admin-group"><div class="admin-group-h">'+roleLabel(r,'de')+' <span>('+list.length+')</span></div>';
    list.forEach(u=>{
      const em=(u.email||'').replace(/'/g,"\\'");
      const reg=u.registered?'<span class="badge green">registriert</span>':'<span class="badge yellow">offen</span>';
      const nm=((u.title?u.title+' ':'')+(u.full_name||'—')).trim();
      html+='<div class="admin-row">'+initialsCircle(u.full_name||u.email)+'<div class="ar-main"><div class="ar-name">'+nm+'</div><div class="ar-sub">'+(u.email||'')+' · '+genderLabel(u.gender,'de')+'</div></div><div class="ar-status">'+reg+'</div><span class="icon-btn del" title="Entfernen" onclick="adminRemoveUser(\''+em+'\')">✕</span></div>';
    });
    html+='</div>';
  });
  box.innerHTML=html;
}
async function adminSaveUser(){
  const email=el('au-email').value.trim();
  const full_name=el('au-name').value.trim();
  const title=el('au-title').value, gender=el('au-gender').value, role=el('au-role').value;
  if(!email||!full_name){ adminMsg('Bitte E-Mail und Name angeben.','err'); return; }
  const { error } = await adminCreateUser({ email, full_name, title, gender, role });
  if(error){ adminMsg('Fehler: '+(error.message||error),'err'); return; }
  adminMsg('Nutzer angelegt. Er kann sich nun über den Registrierungslink ein Passwort vergeben.','ok');
  el('au-email').value=''; el('au-name').value='';
  renderAdminUsers();
}
async function adminRemoveUser(email){
  if(!confirm('Nutzer „'+email+'" aus der Freigabe entfernen?'))return;
  const { error } = await adminDeleteUser(email);
  if(error){ adminMsg('Fehler: '+(error.message||error),'err'); return; }
  renderAdminUsers();
}

/* ---------- INIT ---------- */
buildDestSelect();setLang('de');recompute();renderPatients();