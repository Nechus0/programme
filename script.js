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
 s1Title:{de:'Stammdaten',en:'Master data'},s1Desc:{de:'Persönliche Daten und Kontakt.',en:'Personal details and contact.'},
 s2Title:{de:'Reise',en:'Travel'},s2Desc:{de:'Reiseziel(e), Aufenthaltsdauer und besondere Bedingungen.',en:'Destination(s), duration and special conditions.'},
 s5Title:{de:'Geplante Impfungen',en:'Planned vaccinations'},s5Desc:{de:'Termine für die ausgewählten Impfungen festlegen.',en:'Set appointments for the selected vaccinations.'},
 fName:{de:'Nachname',en:'Last name'},fDob:{de:'Geburtsdatum',en:'Date of birth'},ageEmpty:{de:'Alter: bitte Geburtsdatum eingeben',en:'Age: please enter date of birth'},
 fSex:{de:'Geschlecht',en:'Sex'},sexF:{de:'weiblich',en:'female'},sexM:{de:'männlich',en:'male'},sexD:{de:'divers',en:'diverse'},
 fDuration:{de:'Aufenthaltsdauer',en:'Duration of stay'},fDeparture:{de:'Abreisedatum',en:'Departure date'},fDest:{de:'Reiseziel(e) hinzufügen',en:'Add destination(s)'},
 fDestHint:{de:'Mehrere Ziele möglich. Überseegebiete separat (*).',en:'Multiple destinations possible. Overseas territories separate (*).'},
 fConditions:{de:'Besondere Bedingungen / Exposition',en:'Special conditions / exposure'},
 condRural:{de:'Ländlich / einfache Unterkunft',en:'Rural / basic accommodation'},condAnimal:{de:'Tierkontakt / Höhlen / Fledermäuse',en:'Animal contact / caves / bats'},condHealth:{de:'Gesundheitswesen / Blutkontakt',en:'Healthcare / blood contact'},condHajj:{de:'Hajj / Umrah (Saudi-Arabien)',en:'Hajj / Umrah (Saudi Arabia)'},
 childhoodToggle:{de:'Übrige Standardimpfungen laut STIKO-Impfkalender beim Kinderarzt fortführen (erscheint im Impfplan)',en:'Continue remaining standard vaccinations per STIKO schedule at the paediatrician (appears on the plan)'},
 s3Title:{de:'Immunstatus',en:'Immune status'},s3Desc:{de:'Allergien, Schwangerschaft und immunrelevante Medikation. Das Medikament wird gegen eine Wirkstoff-Datenbank geprüft.',en:'Allergies, pregnancy and immune-relevant medication. The drug is checked against a substance database.'},
 fPregnant:{de:'Schwangerschaft / Stillen',en:'Pregnancy / breastfeeding'},optNo:{de:'nein',en:'no'},optYes:{de:'ja',en:'yes'},optPlanning:{de:'geplant (<3 Mon)',en:'planned (<3 mo)'},optWish:{de:'Kinderwunsch (>3 Mon)',en:'Planning pregnancy (>3 mo)'},
 fAllergy:{de:'Allergien',en:'Allergies'},fImmuno:{de:'Immunsuppressive Medikation',en:'Immunosuppressive medication'},
 notesTitle:{de:'Länder- & Gesundheitshinweise',en:'Country & health advisories'},notesDesc:{de:'Pflichtimpfungen, Ausbrüche und Gesundheitshinweise des Auswärtigen Amts (Deep-Link je Land).',en:'Mandatory vaccines, outbreaks and German Foreign Office health advisories (per-country deep link).'},
 noDest:{de:'Noch kein Reiseziel gewählt.',en:'No destination selected yet.'},
 s4Title:{de:'Impfstatus',en:'Vaccination status'},s4Desc:{de:'Vorimpfungen per Klick eintragen (nur Jahr). Farbe = Handlungsbedarf. Für geplante Impfungen „Planen" anklicken.',en:'Enter prior vaccinations by click (year only). Colour = action needed. Click "Plan" for planned vaccinations.'},
 noPlan:{de:'Noch keine Impfungen zur Planung markiert.',en:'No vaccinations marked for planning yet.'},
 lgRed:{de:'Dringend empfohlen',en:'Strongly recommended'},lgYellow:{de:'Erwägen',en:'Consider'},lUseful:{de:'Empfohlen (Reise)',en:'Recommended (Travel)'},
 lGeneral:{de:'Generell empfohlen (STIKO)',en:'Generally recommended (STIKO)'},lgGreen:{de:'Geschützt',en:'Protected'},lgBlue:{de:'Generell empfohlen',en:'Generally advised'},lgGrey:{de:'Nicht relevant',en:'Not relevant'},lgPlan:{de:'Geplant (noch kein Schutz)',en:'Planned (not yet protected)'},
 fChronic:{de:'Chronische Erkrankung',en:'Chronic illness'},fImmunodef:{de:'Immundefizienz',en:'Immune deficiency'},travelWarn:{de:'Reisewarnung des Auswärtigen Amts – von Reisen wird abgeraten.',en:'German Foreign Office travel warning — travel is advised against.'},sourcesLbl:{de:'Datenbasis:',en:'Sources:'},
 loggedIn:{de:'Eingeloggt:',en:'Logged in:'},savedStamp:{de:'Gespeichert',en:'Saved'},physicianLbl:{de:'Behandler/in',en:'Physician'},
 serLabel:{de:'Serologie (Titer bekannt & ausreichend / immun)',en:'Serology (titre known & sufficient / immune)'},serMeasles:{de:'Masern-IgG ausreichend',en:'Measles IgG sufficient'},serVzv:{de:'Varizellen-IgG ausreichend',en:'Varicella IgG sufficient'},serHbs:{de:'Anti-HBs ausreichend',en:'Anti-HBs sufficient'},serHint:{de:'Nicht angehakt = unbekannt bzw. nicht ausreichend → ggf. impfen.',en:'Unchecked = unknown or insufficient → vaccinate if indicated.'},
 thVax:{de:'Impfung',en:'Vaccine'},thDone:{de:'Vorimpfungen',en:'Prior doses'},thLast:{de:'Zuletzt geimpft (Jahr)',en:'Last vaccinated (year)'},thStatus:{de:'Empfehlung',en:'Recommendation'},thPlan:{de:'Planen',en:'Plan'},thSchedule:{de:'Termine & Ort',en:'Appointments & site'},thInfo:{de:'Info',en:'Info'},
 fComment:{de:'Kommentar / Notiz zum Patienten',en:'Comment / note on the patient'},
 btnReset:{de:'Formular leeren',en:'Clear form'},btnSave:{de:'Patient speichern',en:'Save patient'},btnSaveEdit:{de:'Änderungen speichern',en:'Save changes'},btnPrint:{de:'Impfplan drucken',en:'Print schedule'},btnCancelEdit:{de:'Bearbeitung abbrechen',en:'Cancel editing'},
 listTitle:{de:'Ambulanzliste',en:'Clinic list'},listDesc:{de:'',en:''},emptyList:{de:'Noch keine Patienten gespeichert.',en:'No patients saved yet.'},
 icTitle:{de:'Willkommen in der Reisemedizinischen Ambulanz',en:'Welcome to the Travel Medicine Clinic'},
 icSub:{de:'Bitte wählen Sie den Grund Ihres Besuchs.',en:'Please choose the reason for your visit.'},
 icBeratung:{de:'Reiseberatung',en:'Travel consultation'},
 icBeratungDesc:{de:'Für die reisemedizinische Beratung: Sie planen eine Reise und möchten sich zu empfohlenen Impfungen und Schutzmaßnahmen beraten lassen.',en:'For travel-medicine advice: you are planning a trip and want guidance on recommended vaccinations and precautions.'},
 icFolge:{de:'Folgeimpfung',en:'Follow-up vaccination'},
 icFolgeDesc:{de:'Für bereits beratene Patienten mit Termin: Sie kommen nur zur nächsten Impfdosis Ihrer laufenden Impfserie.',en:'For already-advised patients with an appointment: you are only here for the next dose of your ongoing vaccination series.'},
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
/* ---------- VACCINES & CHRONIC DB ---------- */
const RECENT_VAX_DB = [
  { disease: 'Gelbfieber', substance: 'Stamaril', live_vaccine: true },
  { disease: 'Masern, Mumps, Röteln', substance: 'Priorix, M-M-RVAXPRO', live_vaccine: true },
  { disease: 'Varizellen (Windpocken)', substance: 'Varilrix, Varivax', live_vaccine: true },
  { disease: 'Dengue', substance: 'Qdenga', live_vaccine: true },
  { disease: 'Typhus (Schluckimpfung)', substance: 'Vivotif', live_vaccine: true },
  { disease: 'Tollwut', substance: 'Rabipur, Tollwut-Impfstoff Mérieux', live_vaccine: false },
  { disease: 'FSME', substance: 'Encepur, FSME-Immun', live_vaccine: false },
  { disease: 'Typhus (Spritze)', substance: 'Typhim Vi, Typherix', live_vaccine: false },
  { disease: 'Hepatitis A', substance: 'Havrix, Avaxim', live_vaccine: false },
  { disease: 'Hepatitis B', substance: 'Engerix-B, HBVAXPRO', live_vaccine: false },
  { disease: 'Hepatitis A+B', substance: 'Twinrix', live_vaccine: false },
  { disease: 'Japanische Enzephalitis', substance: 'Ixiaro', live_vaccine: false },
  { disease: 'Pneumokokken', substance: 'Apexxnar / Prevenar 20', live_vaccine: false },
  { disease: 'Meningokokken ACWY', substance: 'Nimenrix, Menveo', live_vaccine: false },
  { disease: 'Meningokokken B', substance: 'Bexsero, Trumenba', live_vaccine: false },
  { disease: 'Herpes Zoster (Gürtelrose)', substance: 'Shingrix', live_vaccine: false },
  { disease: 'Influenza', substance: 'Vaxigrip, Efluelda, Flucelvax', live_vaccine: false },
  { disease: 'COVID-19', substance: 'Comirnaty, Spikevax', live_vaccine: false },
  { disease: 'Tetanus, Diphtherie, Pertussis', substance: 'Boostrix, Covaxis', live_vaccine: false },
  { disease: 'Tetanus, Diphtherie, Pertussis, Polio', substance: 'Boostrix Polio, Repevax', live_vaccine: false },
  { disease: 'Polio', substance: 'IPV Mérieux', live_vaccine: false },
  { disease: 'HPV', substance: 'Gardasil 9, Cervarix', live_vaccine: false },
  { disease: 'Cholera', substance: 'Dukoral, Vaxchora', live_vaccine: false }
];

const CHRONIC_DB = [
  { name: 'Diabetes Mellitus Typ II', warning: false, context: 'Unkritisch. Empfehlung Pneumokokken prüfen.' },
  { name: 'Diabetes Mellitus Typ I', warning: false, context: 'Unkritisch. Empfehlung Pneumokokken prüfen.' },
  { name: 'HIV / AIDS', warning: true, context: 'CD4-Zellzahl prüfen. Lebendimpfstoffe ab <200/µl kontraindiziert.' },
  { name: 'Leukämie', warning: true, context: 'Immunsuppression wahrscheinlich. Lebendimpfstoffe kontraindiziert. Totimpfstoff-Antwort reduziert.' },
  { name: 'Rheumatoide Arthritis', warning: true, context: 'Immunsuppressive Therapie (Biologika/MTX) prüfen. Lebendimpfstoffe ggf. kontraindiziert.' },
  { name: 'Chronisch entzündliche Darmerkrankung (Morbus Crohn, Colitis Ulcerosa)', warning: true, context: 'Immunsuppressive Therapie prüfen. Lebendimpfstoffe ggf. kontraindiziert.' },
  { name: 'Asthma bronchiale', warning: false, context: 'Unkritisch. Empfehlung Pneumokokken prüfen.' },
  { name: 'COPD', warning: false, context: 'Unkritisch. Empfehlung Pneumokokken prüfen.' },
  { name: 'Niereninsuffizienz', warning: true, context: 'Immunantwort oft reduziert (v.a. Hep B). Titerkontrollen sinnvoll.' },
  { name: 'Asplenie (fehlende/funktionslose Milz)', warning: true, context: 'Dringende Indikation für Pneumokokken, Meningokokken (ACWY+B), Haemophilus influenzae.' },
  { name: 'Multiple Sklerose', warning: true, context: 'Krankheitsmodifizierende Therapie prüfen (z.B. Ocrelizumab). Lebendimpfstoffe ggf. kontraindiziert.' },
  { name: 'Psoriasis', warning: true, context: 'Systemische Therapie (Biologika) prüfen. Lebendimpfstoffe ggf. kontraindiziert.' }
];

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
var destinations=[];
var vaxState = typeof freshVaxState === "function" ? freshVaxState() : {};
var serologyState = typeof freshSerologyState === "function" ? freshSerologyState() : { measles: false, vzv: false, hbs: false };
var medsList=[];

function freshVaxState(){
  let vs = {};
  VACCINES.forEach(v=>{
    if(v.tdap_polio)vs[v.k]={gi_tdap:false,gi_ipv:false,y_td:"",y_ap:"",y_ipv:"",doses_hexa:"",y_hexa:"",planned_prod:"",planned:false,prov:"charite"};
    else if(v.hep)vs[v.k]={aMono:"",aYear:"",bMono:"",bYear:"",twin:"",twYear:"",plannedA:false,plannedB:false,plannedAB:false,provA:"charite",provB:"charite",provAB:"charite"};
    else if(v.menacwy)vs[v.k]={done:"",type:"acwy",year:"",planned:false,prov:"charite"};
    else vs[v.k]={done:"",year:"",disease:false,dengueHad:false,planned:false,prov:"charite"};
  });
  return vs;
}
const APPTS=['today','t2','t3','far'];
const APPT_LABEL={today:{de:'Heute',en:'Today'},t2:{de:'2. Termin',en:'2nd appt.'},t3:{de:'3. Termin',en:'3rd appt.'},far:{de:'Späterer Termin',en:'Later appt.'}};
const APPT_SHORT={today:{de:'Heute',en:'Today'},t2:{de:'2.',en:'2nd'},t3:{de:'3.',en:'3rd'},far:{de:'Später',en:'Later'}};
const APPT_COLOR={today:'#2e7d32',t2:'#1565c0',t3:'#6a1b9a',far:'#b26a00'};
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
  updateLeistungen();
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
         <div style="cursor:grab;flex:1;"><b>${it.displayName}</b> ${it.live ? '<span class="live-dot" title="Lebendimpfstoff">L</span>' : ''}</div>
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

const IMMUNODEF_KW=['hiv','aids','asplen','splenekt','milzentfern','ohne milz','leukämie','leukamie','lymphom','myelom','transplant','stammzell','knochenmark','chemo','angeboren','kongenital','immundefekt','immundefizienz','scid','agammaglobulin','neutropenie','ctla','komplementdefekt','digeorge','di-george','sichelzell','graft'];
function chronicTextVal(){const e=el('p-chronic-text');return e?e.value.trim().toLowerCase():'';}
function hasChronic(){return chronicTextVal().length>0;}
function hasImmuneDef(){const s=chronicTextVal();return s?IMMUNODEF_KW.some(k=>s.includes(k)):false;}
function conds(){return [...document.querySelectorAll('.cond:checked')].map(c=>c.value);}
function childhoodOn(){const a=ageYears(el('p-dob').value);return a!==null&&a<18;}
// Überschneidet sich der Aufenthalt (Abreise + Dauer) mit der Meningitis-Epidemiesaison (Trockenzeit Dez–Jun)?
// null = Abreisedatum unbekannt (Aufrufer nutzt dann Fallback auf Abreisemonat)
function toggleSerology(key, checked) { serologyState[key] = checked; recompute(); }

/* ---------- Medikamente als Pillen (ein Feld, Immunsuppressiva rot) ---------- */
var medsList = [];
// VacCheck: Wirkstoff-/Handelsnamen-Suche in der Medikamenten-DB
// blockt Lebendimpfungen, wenn ein Immunsuppressivum ohne klare Lebendimpf-Freigabe eingetragen ist
function _esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
// Eine einheitliche Medikamentenliste: Patient = schlichte weiße Einträge (Wirkstoff + Handelsnamen);
// Personal = farbig kategorisiert (unkritisch / immunsuppressiv) mit VacCheck-Infos. Ersetzt die Pillen.
function renderMedList(){
  const box=el('med-vaccheck'); if(!box) return;
  if(!medsList.length){ box.innerHTML=''; return; }
  const staff=document.body.classList.contains('clinic');
  const brands=d=>(d&&d.brand_names&&d.brand_names.length)?' <span class="vc-brands">('+_esc(d.brand_names.slice(0,4).join(', '))+')</span>':'';
  const title = staff ? (LANG==='de'?'Medikamenten-Übersicht (VacCheck · DTG 2026)':'Medication overview (VacCheck · DTG 2026)') : (LANG==='de'?'Ihre Medikamente':'Your medication');
  if(!staff){
    box.innerHTML = '<div class="white-pill-wrap">' + medsList.map((m,i)=>{
      const d=lookupDrug(m);
      const rm='<button class="vc-rm" onclick="removeMed('+i+')" title="'+(LANG==='de'?'Entfernen':'Remove')+'">✕</button>';
      const nm=d?d.substance:m;
      return '<div class="white-pill"><span class="vc-name">'+_esc(nm)+brands(d)+'</span>'+rm+'</div>';
    }).join('') + '</div>';
    return;
  }
  box.innerHTML='<div class="vc-title">'+title+'</div>'+medsList.map((m,i)=>{
    const d=lookupDrug(m);
    const rm='<button class="vc-rm" onclick="removeMed('+i+')" title="'+(LANG==='de'?'Entfernen':'Remove')+'">✕</button>';
    if(!d) return '<div class="vc-card grey"><div class="vc-h"><span class="vc-name">'+_esc(m)+'</span><span class="vc-hr"><span class="vc-badge grey">'+(LANG==='de'?'nicht in DB':'not in DB')+'</span>'+rm+'</span></div><div class="vc-note">'+(LANG==='de'?'Immunsuppressive Wirkung manuell prüfen.':'Check immunosuppressive effect manually.')+'</div></div>';
    if(!d.is_immunosuppressant) return '<div class="vc-card green"><div class="vc-h"><span class="vc-name">'+_esc(d.substance)+brands(d)+'</span><span class="vc-hr"><span class="vc-badge green">'+(LANG==='de'?'unkritisch':'no concern')+'</span>'+rm+'</span></div></div>';
    return '<div class="vc-card red"><div class="vc-h"><span class="vc-name">'+_esc(d.substance)+brands(d)+'</span><span class="vc-hr"><span class="vc-badge red">'+(LANG==='de'?'Immunsuppressivum':'Immunosuppressant')+'</span>'+rm+'</span></div>'+
      (d.drug_class?'<div class="vc-row"><b>'+(LANG==='de'?'Substanzklasse':'Class')+':</b> '+_esc(d.drug_class)+'</div>':'')+
      (d.class_abstract?'<div class="vc-abstract">'+_esc(d.class_abstract)+'</div>':'')+
      '<div class="vc-grid"><div><b>'+(LANG==='de'?'Lebendimpfung':'Live vaccine')+':</b> '+_esc(d.live_vaccine_allowed||'—')+'</div><div><b>'+(LANG==='de'?'Therapiepause':'Therapy pause')+':</b> '+_esc(d.therapy_pause_needed||'—')+'</div><div><b>'+(LANG==='de'?'Totimpfstoff-Antwort':'Inactivated response')+':</b> '+_esc(d.immune_response_dead_vaccine||'—')+'</div></div></div>';
  }).join('');
}
function renderMedVacCheck(){ renderMedList(); }
let _medAcItems=[], _medAcIdx=-1;
function medAcHighlight(){ const ac=el('med-ac'); if(!ac)return; const items=ac.querySelectorAll('.med-ac-item'); items.forEach((it,i)=>it.classList.toggle('active', i===_medAcIdx)); const act=ac.querySelector('.med-ac-item.active'); if(act&&act.scrollIntoView) act.scrollIntoView({block:'nearest'}); }
function medKey(e){
  const ac=el('med-ac'); const open=ac && ac.style.display==='block' && _medAcItems.length>0;
  if(e.key==='ArrowDown'){ if(open){ e.preventDefault(); _medAcIdx=Math.min(_medAcIdx+1, _medAcItems.length-1); medAcHighlight(); } }
  else if(e.key==='ArrowUp'){ if(open){ e.preventDefault(); _medAcIdx=Math.max(_medAcIdx-1, 0); medAcHighlight(); } }
  else if(e.key==='Enter'){ e.preventDefault(); if(open && _medAcIdx>=0){ addMedName(_medAcItems[_medAcIdx].add); } else { addMedFromInput(); } }
  else if(e.key==='Escape'){ if(ac){ ac.style.display='none'; } _medAcIdx=-1; }
}
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
  if(!top.length){ ac.innerHTML=''; ac.style.display='none'; _medAcItems=[]; _medAcIdx=-1; return; }
  _medAcItems=top; _medAcIdx=-1;
  ac.innerHTML=top.map((o,i)=>'<div class="med-ac-item" data-idx="'+i+'" onmousedown="addMedName(\''+o.add.replace(/'/g,"\\'")+'\')">'+_esc(o.label)+'</div>').join('');
  ac.style.display='block';
}
function addMedName(name){ if(name && !medsList.some(m=>m.toLowerCase()===name.toLowerCase())) medsList.push(name); const inp=el('p-med-input'); if(inp)inp.value=''; const ac=el('med-ac'); if(ac){ac.innerHTML='';ac.style.display='none';} syncMeds(); }
function medAcHide(){ const ac=el('med-ac'); if(ac) setTimeout(()=>{ac.style.display='none';},150); }
/* ---------- Autocomplete: Recent Vaccines ---------- */
let recentVaxList = [];
let _rvAcItems=[], _rvAcIdx=-1;
function renderRecentVaxList(){
  const box=el('recentvax-vaccheck'); if(!box) return;
  if(!recentVaxList.length){ box.innerHTML=''; return; }
  const staff=document.body.classList.contains('clinic');
  if(!staff){
    box.innerHTML = '<div class="white-pill-wrap">' + recentVaxList.map((vax,i)=>{
      const d=RECENT_VAX_DB.find(x=>x.disease.toLowerCase()===vax.toLowerCase() || (x.disease+' ('+x.substance+')').toLowerCase()===vax.toLowerCase() || x.substance.toLowerCase()===vax.toLowerCase());
      const rm='<button class="vc-rm" onclick="removeRecentVax('+i+')" title="Entfernen">✕</button>';
      const label = d ? (d.disease+' ('+d.substance+')') : vax;
      return '<div class="white-pill"><span class="vc-name">'+_esc(label)+'</span>'+rm+'</div>';
    }).join('') + '</div>';
    return;
  }
  box.innerHTML=recentVaxList.map((vax,i)=>{
    const d=RECENT_VAX_DB.find(x=>x.disease.toLowerCase()===vax.toLowerCase() || (x.disease+' ('+x.substance+')').toLowerCase()===vax.toLowerCase() || x.substance.toLowerCase()===vax.toLowerCase());
    const rm='<button class="vc-rm" onclick="removeRecentVax('+i+')" title="Entfernen">✕</button>';
    const label = d ? (d.disease+' ('+d.substance+')') : vax;
    if(d && d.live_vaccine) {
      return '<div class="vc-card red"><div class="vc-h"><span class="vc-name">'+_esc(label)+'</span><span class="vc-hr"><span class="vc-badge red">Lebendimpfstoff</span>'+rm+'</span></div><div class="vc-note">Achtung: Lebendimpfstoff in den letzten 4 Wochen! Abstand zu anderen Lebendimpfstoffen (z.B. Gelbfieber, MMR, Varizellen) von mind. 4 Wochen einhalten.</div></div>';
    }
    return '<div class="vc-card green"><div class="vc-h"><span class="vc-name">'+_esc(label)+'</span><span class="vc-hr"><span class="vc-badge green">Totimpfstoff / Unkritisch</span>'+rm+'</span></div></div>';
  }).join('');
}
function recentVaxAcHighlight(){ const ac=el('recentvax-ac'); if(!ac)return; const items=ac.querySelectorAll('.med-ac-item'); items.forEach((it,i)=>it.classList.toggle('active', i===_rvAcIdx)); const act=ac.querySelector('.med-ac-item.active'); if(act&&act.scrollIntoView) act.scrollIntoView({block:'nearest'}); }
function recentVaxKey(e){
  const ac=el('recentvax-ac'); const open=ac && ac.style.display==='block' && _rvAcItems.length>0;
  if(e.key==='ArrowDown'){ if(open){ e.preventDefault(); _rvAcIdx=Math.min(_rvAcIdx+1, _rvAcItems.length-1); recentVaxAcHighlight(); } }
  else if(e.key==='ArrowUp'){ if(open){ e.preventDefault(); _rvAcIdx=Math.max(_rvAcIdx-1, 0); recentVaxAcHighlight(); } }
  else if(e.key==='Enter'){ e.preventDefault(); if(open && _rvAcIdx>=0){ addRecentVaxName(_rvAcItems[_rvAcIdx].add); } else { addRecentVaxFromInput(); } }
  else if(e.key==='Escape'){ if(ac){ ac.style.display='none'; } _rvAcIdx=-1; }
}
function addRecentVaxFromInput(){
  const inp=el('p-recentvax-input'); if(!inp) return;
  inp.value.split(',').forEach(part=>{ const n=part.trim(); if(n && !recentVaxList.some(m=>m.toLowerCase()===n.toLowerCase())) recentVaxList.push(n); });
  inp.value=''; syncRecentVax();
}
function removeRecentVax(i){ recentVaxList.splice(i,1); syncRecentVax(); }
function syncRecentVax(){ const h=el('p-recentvax'); if(h) h.value = recentVaxList.join(', '); renderRecentVaxList(); recompute(); }
function recentVaxAutocomplete(){
  const inp=el('p-recentvax-input'), ac=el('recentvax-ac'); if(!inp||!ac) return;
  const v=inp.value.trim().toLowerCase();
  if(v.length<1){ ac.innerHTML=''; ac.style.display='none'; return; }
  const out=[];
  for(const d of RECENT_VAX_DB){
    const label=d.disease+' ('+d.substance+')';
    if(label.toLowerCase().includes(v)){
      out.push({label, add:label, starts:label.toLowerCase().startsWith(v)});
    }
  }
  out.sort((a,b)=>(b.starts-a.starts)|| a.label.localeCompare(b.label));
  const top=out.slice(0,8);
  if(!top.length){ ac.innerHTML=''; ac.style.display='none'; _rvAcItems=[]; _rvAcIdx=-1; return; }
  _rvAcItems=top; _rvAcIdx=-1;
  ac.innerHTML=top.map((o,i)=>'<div class="med-ac-item" data-idx="'+i+'" onmousedown="addRecentVaxName(\''+o.add.replace(/'/g,"\\'")+'\')">'+_esc(o.label)+'</div>').join('');
  ac.style.display='block';
}
function addRecentVaxName(name){ if(name && !recentVaxList.some(m=>m.toLowerCase()===name.toLowerCase())) recentVaxList.push(name); const inp=el('p-recentvax-input'); if(inp)inp.value=''; const ac=el('recentvax-ac'); if(ac){ac.innerHTML='';ac.style.display='none';} syncRecentVax(); }
function recentVaxAcHide(){ const ac=el('recentvax-ac'); if(ac) setTimeout(()=>{ac.style.display='none';},150); }

/* ---------- Autocomplete: Chronic Illnesses ---------- */
let chronicList = [];
let _crAcItems=[], _crAcIdx=-1;
function renderChronicList(){
  const box=el('chronic-vaccheck'); if(!box) return;
  if(!chronicList.length){ box.innerHTML=''; return; }
  const staff=document.body.classList.contains('clinic');
  if(!staff){
    box.innerHTML = '<div class="white-pill-wrap">' + chronicList.map((cr,i)=>{
      const rm='<button class="vc-rm" onclick="removeChronic('+i+')" title="Entfernen">✕</button>';
      return '<div class="white-pill"><span class="vc-name">'+_esc(cr)+'</span>'+rm+'</div>';
    }).join('') + '</div>';
    return;
  }
  box.innerHTML=chronicList.map((cr,i)=>{
    const d=CHRONIC_DB.find(x=>x.name.toLowerCase()===cr.toLowerCase());
    const rm='<button class="vc-rm" onclick="removeChronic('+i+')" title="Entfernen">✕</button>';
    if(d && d.warning) {
      return '<div class="vc-card red"><div class="vc-h"><span class="vc-name">'+_esc(cr)+'</span><span class="vc-hr"><span class="vc-badge red">Warnung</span>'+rm+'</span></div><div class="vc-note">'+_esc(d.context)+'</div></div>';
    } else if(d && !d.warning) {
      return '<div class="vc-card green"><div class="vc-h"><span class="vc-name">'+_esc(cr)+'</span><span class="vc-hr"><span class="vc-badge green">Unkritisch</span>'+rm+'</span></div><div class="vc-note">'+_esc(d.context)+'</div></div>';
    }
    return '<div class="vc-card grey"><div class="vc-h"><span class="vc-name">'+_esc(cr)+'</span><span class="vc-hr"><span class="vc-badge grey">nicht in DB</span>'+rm+'</span></div></div>';
  }).join('');
}
function chronicAcHighlight(){ const ac=el('chronic-ac'); if(!ac)return; const items=ac.querySelectorAll('.med-ac-item'); items.forEach((it,i)=>it.classList.toggle('active', i===_crAcIdx)); const act=ac.querySelector('.med-ac-item.active'); if(act&&act.scrollIntoView) act.scrollIntoView({block:'nearest'}); }
function chronicKey(e){
  const ac=el('chronic-ac'); const open=ac && ac.style.display==='block' && _crAcItems.length>0;
  if(e.key==='ArrowDown'){ if(open){ e.preventDefault(); _crAcIdx=Math.min(_crAcIdx+1, _crAcItems.length-1); chronicAcHighlight(); } }
  else if(e.key==='ArrowUp'){ if(open){ e.preventDefault(); _crAcIdx=Math.max(_crAcIdx-1, 0); chronicAcHighlight(); } }
  else if(e.key==='Enter'){ e.preventDefault(); if(open && _crAcIdx>=0){ addChronicName(_crAcItems[_crAcIdx].add); } else { addChronicFromInput(); } }
  else if(e.key==='Escape'){ if(ac){ ac.style.display='none'; } _crAcIdx=-1; }
}
function addChronicFromInput(){
  const inp=el('p-chronic-input'); if(!inp) return;
  inp.value.split(',').forEach(part=>{ const n=part.trim(); if(n && !chronicList.some(m=>m.toLowerCase()===n.toLowerCase())) chronicList.push(n); });
  inp.value=''; syncChronic();
}
function removeChronic(i){ chronicList.splice(i,1); syncChronic(); }
function syncChronic(){ const h=el('p-chronic-text'); if(h) h.value = chronicList.join(', '); renderChronicList(); recompute(); }
function chronicAutocomplete(){
  const inp=el('p-chronic-input'), ac=el('chronic-ac'); if(!inp||!ac) return;
  const v=inp.value.trim().toLowerCase();
  if(v.length<1){ ac.innerHTML=''; ac.style.display='none'; return; }
  const out=[];
  for(const d of CHRONIC_DB){
    if(d.name.toLowerCase().includes(v)){
      out.push({label:d.name, add:d.name, starts:d.name.toLowerCase().startsWith(v)});
    }
  }
  out.sort((a,b)=>(b.starts-a.starts)|| a.label.localeCompare(b.label));
  const top=out.slice(0,8);
  if(!top.length){ ac.innerHTML=''; ac.style.display='none'; _crAcItems=[]; _crAcIdx=-1; return; }
  _crAcItems=top; _crAcIdx=-1;
  ac.innerHTML=top.map((o,i)=>'<div class="med-ac-item" data-idx="'+i+'" onmousedown="addChronicName(\''+o.add.replace(/'/g,"\\'")+'\')">'+_esc(o.label)+'</div>').join('');
  ac.style.display='block';
}
function addChronicName(name){ if(name && !chronicList.some(m=>m.toLowerCase()===name.toLowerCase())) chronicList.push(name); const inp=el('p-chronic-input'); if(inp)inp.value=''; const ac=el('chronic-ac'); if(ac){ac.innerHTML='';ac.style.display='none';} syncChronic(); }
function chronicAcHide(){ const ac=el('chronic-ac'); if(ac) setTimeout(()=>{ac.style.display='none';},150); }


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
function tbeForm(){const a=ageExact(el('p-dob').value);if(a===null||a<1)return null;return a<12?{de:'Encepur Kinder (0,25 ml)',en:'Encepur paediatric (0.25 ml)'}:{de:'Encepur Erwachsene (0,5 ml)',en:'Encepur adult (0.5 ml)'};}
function hepForm(kind){
  const age=ageExact(el('p-dob').value);const child=age!==null&&age<16;const infant=age!==null&&age<1;
  if(kind==='a')return child?(infant?'Havrix (Säugling – FI)':'Havrix 720 Kinder'):'Avaxim (Erw.)';
  if(kind==='b')return child?'Engerix-B Kinder':'Engerix-B Erwachsene';
  return child?(infant?'<1 J.: Einzelimpfstoffe':'Twinrix Kinder'):'Twinrix Erwachsene';
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

// Baut die Dosis-Chips. Endet die Liste auf eine „>N"-Option, wird sie mit der
// exakten N-Option zu EINEM Umschalt-Chip zusammengefasst: Klick zyklisch  „—“ → N → >N → „—“.
function buildDoseChips(spec, cur, mkClick){
  let items=spec.slice(); let combo=null;
  if(items.length>=2 && String(items[items.length-1][1]).trim().charAt(0)==='>'){
    const gt=items.pop(); const ex=items.pop(); combo={ex,gt};
  }
  let h='<div class="dose-chips">';
  items.forEach(o=>{ const sel=cur===o[0]; h+='<span class="dose-chip'+(sel?' selected':'')+'" '+mkClick(o[0])+'>'+o[1]+'</span>'; });
  if(combo){
    const isEx=cur===combo.ex[0], isGt=cur===combo.gt[0], sel=isEx||isGt;
    const next=isEx?combo.gt[0]:(isGt?'':combo.ex[0]);
    const label=isGt?combo.gt[1]:combo.ex[1];
    const tip=isGt?(LANG==='de'?'mehr als '+combo.ex[1]+' – erneut klicken zum Abwählen':'more than '+combo.ex[1]):(LANG==='de'?'genau '+combo.ex[1]+' – erneut klicken für „>'+combo.ex[1]+'“':'exactly '+combo.ex[1]+' – click again for ">'+combo.ex[1]+'"');
    h+='<span class="dose-chip combo'+(sel?' selected':'')+(isGt?' gt':'')+'" '+mkClick(next)+' title="'+tip+'">'+label+'</span>';
  }
  return h+'</div>';
}
function renderDoseChips(k){
  if(YEAR_ONLY.includes(k))return '<span class="mini-note">'+(LANG==='de'?'nur „zuletzt geimpft" →':'only “last vaccinated” →')+'</span>';
  const cur=vaxState[k].done||'';const spec=DOSE_MAP[k]||DEFAULT_DOSE;
  return buildDoseChips(spec,cur,(val)=>'onclick="setDose(\''+k+'\',\''+val+'\')"');}
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
    const liveBadge=v.live?'<span class="live-dot" title="'+t('live')+'">L</span>':'';
    let availBadge='';
    if(av.flag==='na')availBadge='<span class="badge grey">'+(LANG==='de'?av.badgeDe:av.badgeEn)+'</span>';
    else if(av.flag==='age')availBadge='<span class="badge red">'+(LANG==='de'?av.badgeDe:av.badgeEn)+'</span>';
    else if(av.flag==='caution')availBadge='<span class="badge yellow">'+(LANG==='de'?av.badgeDe:av.badgeEn)+'</span>';
    const availNote=(av.flag==='na'||av.flag==='age')?'<div class="reason" style="margin-top:4px;">'+(LANG==='de'?av.noteDe:av.noteEn)+'</div>':(av.flag==='caution'?'<div class="reason" style="margin-top:4px;">'+(LANG==='de'?av.noteDe:av.noteEn)+'</div>':'');
    const liveNote=la?'<div class="reason" style="color:'+(la.level==='block'?'var(--red)':'var(--yellow)')+';font-weight:600">'+(LANG==='de'?la.de:la.en)+'</div>':'';
    const infoBtn=(DISEASE_MAPS[v.k]?'<button class="map-btn" onclick="showMap(\''+v.k+'\')" title="'+(LANG==='de'?'Verbreitungskarte':'Distribution map')+'">K</button>':'')+'<button class="info-btn" onclick="showInfo(\''+v.k+'\')" title="Info">i</button>';

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

      html+='<tr class="combo-row"><td data-label="'+t('thVax')+'"><div class="vname" style="display:flex;align-items:center;">'+(LANG==='de'?v.de:v.en)+availBadge+'</div><div class="vsub">'+(LANG==='de'?'Basis-Impfschutz':'Core vaccines')+'</div></td>'+
        '<td data-label="'+t('thDone')+'">'+col2+'</td>'+
        '<td data-label="'+t('thLast')+'">'+col3+'</td>'+
        '<td class="status" data-label="'+t('thStatus')+'"><div class="row-info">'+infoBtn+'</div><div style="min-height:48px;">'+compBadges+(a.ipvNote&&a.ipvNote.de?'<div class="reason" style="margin-top:6px;border-top:1px solid var(--line);padding-top:4px"><b>Polio:</b> '+(LANG==='de'?a.ipvNote.de:a.ipvNote.en)+'</div>':'')+'</div></td></tr>';return;
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

      const aBadge='<div class="hep-stat"><span class="badge '+ha.A+'">'+aBadgeTxt+'</span></div>'+
        '<div class="reason">'+(LANG==='de'?ha.aNote.de:ha.aNote.en)+'</div>';
      const bBadge='<div class="hep-stat"><span class="badge '+ha.B+'">'+bBadgeTxt+'</span></div>'+
        '<div class="reason">'+(LANG==='de'?ha.bNote.de:ha.bNote.en)+'</div>';
      const hbsChk='<div class="ctrl-box"><label style="display:flex; align-items:flex-start; cursor:pointer"><input type="checkbox" style="margin-top:2px; margin-right:6px" '+(serologyState.hbs?'checked':'')+' onchange="toggleSerology(\'hbs\', this.checked)"> <span style="flex:1; line-height:1.3">Anti-HBs ≥ 100 IU/l</span></label></div>';
      
      function yrSel(f){return yearInput('hepatitis',f);}
      
      html+=`<tr>
        <td data-label="${t('thVax')}">
          <div class="vname" style="display:flex; align-items:center;">Hepatitis A</div>
        </td>
        <td data-label="${LANG==='de'?'Vorimpfungen':'Previous doses'}"><div class="hep-group-row"><div class="hep-doses">${renderDoseChips2(v.k, 'aMono')}</div></div></td>
        <td data-label="${LANG==='de'?'Jahr':'Year'}"><div class="hep-group-row"><div class="hep-year">${yrSel('aYear')}</div></div></td>
        <td class="status" data-label="${t('thStatus')}"><div class="row-info">${infoBtn}</div>
          ${aBadge}
        </td>
      </tr>`;
      html+=`<tr>
        <td data-label="${t('thVax')}">
          <div class="vname" style="display:flex; align-items:center;">Hepatitis B</div>
          ${hbsChk}
        </td>
        <td data-label="${LANG==='de'?'Vorimpfungen':'Previous doses'}"><div class="hep-group-row"><div class="hep-doses">${renderDoseChips2(v.k, 'bMono')}</div></div></td>
        <td data-label="${LANG==='de'?'Jahr':'Year'}"><div class="hep-group-row"><div class="hep-year">${yrSel('bYear')}</div></div></td>
        <td class="status" data-label="${t('thStatus')}"><div class="row-info">${infoBtn}</div>
          ${bBadge}
        </td>
      </tr>`;
      html+=`<tr>
        <td data-label="${t('thVax')}">
          <div class="vname" style="display:flex; align-items:center;">Hepatitis A+B</div>
        </td>
        <td data-label="${LANG==='de'?'Vorimpfungen':'Previous doses'}"><div class="hep-group-row"><div class="hep-doses">${renderDoseChips2(v.k, 'twin')}</div></div></td>
        <td data-label="${LANG==='de'?'Jahr':'Year'}"><div class="hep-group-row"><div class="hep-year">${yrSel('twYear')}</div></div></td>
        <td class="status" data-label="${t('thStatus')}"></td>
      </tr>`;
      return;
    }
    if(v.menacwy){
      const ma=menacwyAssess();
      const typeOpts=[['','— Typ —'],['acwy','ACWY'],['c','C']];
      const typeSel=typeOpts.map(o=>'<option value="'+o[0]+'"'+(st.type===o[0]?' selected':'')+'>'+o[1]+'</option>').join('');
      const mandBadge=ma.mand?'<span class="badge mand">'+t('mandatory')+'</span>':'';
      html+='<tr><td data-label="'+t('thVax')+'"><div class="vname" style="display:flex;align-items:center;">'+(LANG==='de'?v.de:v.en)+mandBadge+availBadge+'</div><select class="mini" onchange="setField(\'menacwy\',\'type\',this.value)">'+typeSel+'</select></td>'+
        '<td data-label="'+t('thDone')+'">'+renderDoseChips(v.k)+'</td>'+
        '<td data-label="'+t('thLast')+'">'+yearInput('menacwy','year')+'</td>'+
        '<td class="status" data-label="'+t('thStatus')+'"><div class="row-info">'+infoBtn+'</div><span class="badge '+ma.status+'">'+({red:t('lgRed'),yellow:t('lgYellow'),violet:t('lUseful'),green:t('lgGreen'),blue:t('lgBlue'),grey:t('lgGrey')}[ma.status])+'</span><div class="reason">'+(LANG==='de'?ma.noteDe:ma.noteEn)+'</div></td></tr>';return;
    }
    const a=assess(v);let badgeTxt={red:t('lgRed'),yellow:t('lgYellow'),violet:t('lUseful'),green:t('lgGreen'),blue:t('lgBlue'),grey:t('lgGrey')}[a.status];
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
    html+='<tr><td data-label="'+t('thVax')+'"><div class="vname" style="display:flex;align-items:center;">'+(LANG==='de'?v.de:v.en)+liveBadge+mandBadge+availBadge+'</div>'+(note?'<div class="reason"'+noteStyle+'>'+note+'</div>':'')+liveNote+availNote+alNote+mmrChk+extraChk+'</td>'+
      '<td data-label="'+t('thDone')+'">'+renderDoseChips(v.k)+'</td>'+
      '<td data-label="'+t('thLast')+'">'+yearInput(v.k,'year')+'</td>'+
      '<td class="status" data-label="'+t('thStatus')+'"><div class="row-info">'+infoBtn+'</div><span class="badge '+a.status+'">'+badgeTxt+'</span></td></tr>';
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
        // Ein dokumentierter Booster setzt eine abgeschlossene Grundimmunisierung voraus (überschreibbar via Checkbox)
        vaxState.tdap_polio.gi_tdap = true;
        if (type === 'tdap_ipv') { vaxState.tdap_polio.y_ipv = String(full); vaxState.tdap_polio.gi_ipv = true; }
        renderVaxTable();
    }
};
const HEP_DOSE=[['1','1'],['2','2'],['3','3'],['4','>3']];
function renderDoseChips2(k,field){const cur=vaxState[k][field]||'';return buildDoseChips(HEP_DOSE,cur,(val)=>'onclick="setSub(\''+k+'\',\''+field+'\',\''+val+'\')"');}
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
function recompute(){updatePregVisibility();renderAge();updateDepartureHint();renderVaxTable();renderApptOverview();renderNotes();renderImmunoWarn();renderContraWarn();}
// Hinweise zu Akuterkrankung / Thrombose / Ohnmacht – nur für Personal, nichts für Patienten
function renderContraWarn(){
  const box=el('contra-warn'); if(!box) return;
  const staff=(typeof roleSeesClinic==='function') && roleSeesClinic((CURRENT_PROFILE||{role:'arzt'}).role);
  const acute=el('p-acute')&&el('p-acute').checked;
  const thromb=el('p-thrombosis')&&el('p-thrombosis').checked;
  const faint=el('p-faint')&&el('p-faint').checked;
  if(!staff || (!acute&&!thromb&&!faint)){ box.innerHTML=''; return; }
  const items=[];
  if(acute) items.push(LANG==='de'?'<b>Akute Erkrankung:</b> Impfung bei behandlungsbedürftiger akuter Erkrankung (≥38,5 °C) verschieben; leichte Infekte ohne Fieber sind i. d. R. kein Hindernis.':'<b>Acute illness:</b> postpone if acute illness needing treatment (≥38.5 °C); mild infections without fever are usually no barrier.');
  if(thromb) items.push(LANG==='de'?'<b>Thrombose / Antikoagulation:</b> i. m. Injektion mit sehr feiner Kanüle, danach ≥2 Min. komprimieren; ggf. Rücksprache bei hoher Blutungsneigung.':'<b>Thrombosis / anticoagulation:</b> use a fine needle for i.m. injection, then compress ≥2 min; consult if high bleeding risk.');
  if(faint) items.push(LANG==='de'?'<b>Ohnmachtsneigung:</b> im Liegen impfen und anschließend ≥15 Min. nachbeobachten.':'<b>Fainting tendency:</b> vaccinate lying down and observe ≥15 min afterwards.');
  box.innerHTML='<div class="warn-box" style="margin-top:12px;"><h4>'+(LANG==='de'?'Hinweise zur Durchführung':'Procedure notes')+'</h4><ul style="margin:4px 0 0 18px;padding:0;">'+items.map(i=>'<li>'+i+'</li>').join('')+'</ul></div>';
}

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
    '<h3>'+(LANG==='de'?v.de:v.en)+(v.live?' <span class="live-dot" title="'+t('live')+'">L</span>':'')+'</h3>'+
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

async function savePatient(finish){
  finish = finish!==false;   // Standard: abschließen (Status → done im Klinikmodus). false = Zwischenspeichern.
  const name=el('p-name').value.trim();const dob=el('p-dob').value;
  if(!name||!dob){await uiAlert(t('needName'));return false;}
  
  if (finish && document.body.classList.contains('clinic')) {
     const warn = el('leistung-warning');
     if (warn && warn.style.display === 'block') {
         if (!(await uiConfirm('Es wurde keine Leistung (Beratung/Impfung) ausgewählt. Patient dennoch abschließen?', {title:'Keine Leistung', ok:'Trotzdem abschließen', danger:true}))) {
             return false;
         }
     }
  }
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
    status: ((finish && document.body.classList.contains('clinic')) ? 'done' : ((existing&&existing.status)||(document.body.classList.contains('clinic')?'treatment':'waiting'))),
    group:(existing&&existing.group)||'',
    treatmentType:(existing&&existing.treatmentType)||INTAKE_TYPE||undefined,
    claimedBy:(existing&&existing.claimedBy)||(document.body.classList.contains('clinic')?myUserKey():null),
    claimedByName:(existing&&existing.claimedByName)||((CURRENT_PROFILE&&CURRENT_PROFILE.full_name)||''),
    claimedByRole:(existing&&existing.claimedByRole)||(document.body.classList.contains('clinic')?((CURRENT_PROFILE&&CURRENT_PROFILE.role)||''):''),
    treatmentAt:(existing&&existing.treatmentAt)||null,
    editLog:(existing&&existing.editLog)?existing.editLog.slice():[],
    deleted:(existing&&existing.deleted)||undefined,
    savedAt:(existing&&existing.savedAt)||new Date().toISOString(), updatedAt:new Date().toISOString()
  };
  // Änderungsprotokoll: bearbeitete Abschnitte (1–3) beim Speichern eines bestehenden Patienten festhalten
  if(existing){
    const touched=LOCK_SECTIONS.filter(id=>SECTION_EDIT[id]);
    if(touched.length){
      const oldSnap = window._patientSnapshot ? JSON.parse(window._patientSnapshot) : null;
      const ts=new Date().toISOString();
      const title = CURRENT_PROFILE&&CURRENT_PROFILE.title?CURRENT_PROFILE.title+' ':'';
      const fName = CURRENT_PROFILE&&CURRENT_PROFILE.full_name||'';
      const roleRaw = (CURRENT_PROFILE&&CURRENT_PROFILE.role)||'';
      const gender = (CURRENT_PROFILE&&CURRENT_PROFILE.gender)||'';
      const roleDisplay = typeof formatRoleTitle === 'function' ? formatRoleTitle(roleRaw, gender) : roleRaw;
      const who = ((title + fName).trim() + (roleDisplay ? ' ('+roleDisplay+')' : '')) || myUserKey();
      
      const fMap = {
        'step1': { name:'Nachname', firstname:'Vorname', dob:'Geburtsdatum', sex:'Geschlecht', phone:'Telefon', email:'E-Mail', insurance:'Versicherung', profession:'Beruf', address:'Adresse', zip:'PLZ', city:'Ort' },
        'step2': { duration:'Reisedauer', departure:'Abreise', destinations:'Reiseziele' },
        'step3': { pregnant:'Schwangerschaft', allergy:'Allergien', meds:'Medikamente', immuno:'Immunsuppression', recentVax:'Kürzliche Impfungen', conds:'Vorerkrankungen', acute:'Akute Erkrankung', thrombosis:'Thrombose', faint:'Ohnmachtsneigung', comment:'Kommentar' }
      };
      
      touched.forEach(id=>{
        let changed = [];
        if(oldSnap && fMap[id]) {
           for(const [k, lbl] of Object.entries(fMap[id])) {
              if(JSON.stringify(oldSnap[k]) !== JSON.stringify(snap[k])) changed.push(lbl);
           }
        }
        if(id==='step3' && oldSnap && oldSnap.vax && snap.vax) {
           let vChanged=false;
           for(const v of VACCINES) {
             if(JSON.stringify(oldSnap.vax[v.k]) !== JSON.stringify(snap.vax[v.k])) vChanged=true;
           }
           if(vChanged) changed.push('Impfplan');
        }
        snap.editLog.push({ts,who,role:roleRaw,section:id,fields:changed});
      });
    }
  }
  LOCK_SECTIONS.forEach(id=>SECTION_EDIT[id]=false);
  if(USE_DB){
    const res = editingId ? await dbUpdatePatient(editingId, snap) : await dbInsertPatient(snap);
    if(res && res.error){ await uiAlert('Speichern fehlgeschlagen: '+(res.error.message||res.error)); return false; }
    if(roleSeesClinic((CURRENT_PROFILE||{}).role)) await loadPatientsFromDB();
  } else {
    if(editingId){const i=patients.findIndex(p=>p.id===editingId);if(i>=0)patients[i]=snap;else patients.push(snap);}else patients.push(snap);
    storeSet('charite_patients',JSON.stringify(patients));
    renderPatients();
  }
  
  if (typeof dbAuditLog === 'function') {
      dbAuditLog('save_patient', { patient_id: snap.id, name: snap.name, finish: finish });
  }
  
  if(finish){
    if(document.body.classList.contains('clinic')) exitToList();
    else resetForm();
  }
  return true;
}
function fuzzyNameMatch(n1, f1, n2, f2) {
  const normalize = s => (s||'').toLowerCase().replace(/[^a-zäöüß ]/g, ' ').split(/\s+/).filter(Boolean);
  let p1 = normalize((f1||'') + ' ' + (n1||''));
  let p2 = normalize((f2||'') + ' ' + (n2||''));
  if (p1.length === 0 || p2.length === 0) return false;
  if (p1.slice().sort().join('') === p2.slice().sort().join('')) return true;
  const levenshtein = (s, t) => {
    if (!s.length) return t.length;
    if (!t.length) return s.length;
    const arr = [];
    for (let i = 0; i <= t.length; i++) {
      arr[i] = [i];
      for (let j = 1; j <= s.length; j++) {
        arr[i][j] = i === 0 ? j : Math.min(arr[i-1][j]+1, arr[i][j-1]+1, arr[i-1][j-1] + (s[j-1] === t[i-1] ? 0 : 1));
      }
    }
    return arr[t.length][s.length];
  };
  let s1 = p1.slice().sort().join('');
  let s2 = p2.slice().sort().join('');
  let dist = levenshtein(s1, s2);
  if (dist <= 2 && Math.max(s1.length, s2.length) > 3) return true;
  if (dist <= 3 && Math.max(s1.length, s2.length) >= 8) return true;
  for (let part of p1) { if (part.length >= 4 && p2.includes(part)) return true; }
  for (let part of p2) { if (part.length >= 4 && p1.includes(part)) return true; }
  return false;
}

function loadPatient(id){
  const p=patients.find(x=>x.id===id);if(!p)return;
  if(p.status === 'treatment' && p.claimedBy && p.claimedBy !== myUserKey()) {
    uiAlert('Patient wird derzeit von ' + (p.claimedByName || 'anderem Personal') + ' behandelt und ist gesperrt.');
    return;
  }
  window._patientSnapshot = JSON.stringify(p);
  el('p-name').value=p.name||'';el('p-dob').value=p.dob||'';el('p-sex').value=p.sex||'f';el('p-duration').value=p.duration||'<1w';el('p-departure').value=p.departure||'';el('p-pregnant').value=p.pregnant||'no';el('p-allergy').value=p.allergy||'';el('p-immuno').value=p.immuno||'';el('p-comment').value=p.comment||'';
  _sv('p-firstname',p.firstname||'');_sv('p-phone',p.phone||'');_sv('p-insurance',p.insurance||'');_sv('p-profession',p.profession||'');_sv('p-address',p.address||'');_sv('p-zip',p.zip||'');_sv('p-city',p.city||'');
  recentVaxList = p.recentVax ? String(p.recentVax).split(/,\s*/).filter(Boolean) : [];
  _sv('p-recentvax-input',''); _sv('p-recentvax', recentVaxList.join(', ')); renderRecentVaxList();
  medsList = Array.isArray(p.meds)?[...p.meds]:(p.meds?String(p.meds).split(/,\s*/).filter(Boolean):(p.immuno?String(p.immuno).split(/,\s*/).filter(Boolean):[]));
  _sv('p-med-input',''); _sv('p-immuno',medsList.join(', ')); renderMedPills(); renderMedVacCheck();
  const cT = p.chronicText || (p.chronic&&!p.chronicText?'chronische Erkrankung':'');
  chronicList = cT ? String(cT).split(/,\s*/).filter(Boolean) : [];
  _sv('p-chronic-input',''); _sv('p-chronic-text', chronicList.join(', ')); renderChronicList();
  _sv('p-email', p.email||'');
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
  
  // Rendere Change Logs
  ['step1','step2','step3'].forEach(sid=>{
    let logEl=el('log-'+sid);
    if(!logEl){
      logEl=document.createElement('div');
      logEl.id='log-'+sid;
      logEl.className='change-log';
      const sec=el(sid);
      if(sec)sec.appendChild(logEl);
    }
    logEl.innerHTML='';
    if(p.editLog){
      const logs=p.editLog.filter(l=>l.section===sid&&l.fields&&l.fields.length>0);
      if(logs.length){
        logEl.innerHTML='<div class="log-title">'+(LANG==='de'?'Änderungsprotokoll':'Change log')+'</div>'+logs.slice().reverse().map(l=>'<div class="log-entry"><span class="log-ts">'+fmtDateTime(l.ts)+'</span> <span class="log-who">'+_esc(l.who)+'</span> <span class="log-fields">'+_esc(l.fields.join(', '))+'</span></div>').join('');
      }
    }
  });
  
  if (p.treatmentType === 'folgeimpfung' && !p.vaxMerged) {
     const past = patients.filter(x => 
       x.id !== p.id && 
       x.status === 'done' && 
       x.dob === p.dob &&
       fuzzyNameMatch(p.name, p.firstname, x.name, x.firstname)
     ).sort((a,b) => (a.savedAt < b.savedAt) ? 1 : -1);
     
     if (past.length > 0) {
        const lastP = past[0];
        p.vaxMerged = true;
        Object.keys(lastP.vax || {}).forEach(k => {
           if (vaxState[k]) {
              vaxState[k] = Object.assign(vaxState[k], JSON.parse(JSON.stringify(lastP.vax[k])));
              vaxState[k].planned = false; vaxState[k].planned_ipv = false;
              vaxState[k].plannedA = false; vaxState[k].plannedB = false; vaxState[k].plannedAB = false;
           }
        });
        if (lastP.customSchedule) customSchedule = JSON.parse(JSON.stringify(lastP.customSchedule));
        p.customSchedule = customSchedule;
        
        if (customSchedule && lastP.savedAt) {
           const today = new Date();
           const startD = new Date(lastP.savedAt);
           let earlyWarning = false;
           customSchedule.forEach(b => {
              const targetD = new Date(startD.getTime() + b.offset * 24*60*60*1000);
              const diffDays = (targetD - today) / (1000 * 60 * 60 * 24);
              if (diffDays > 14) earlyWarning = true;
              
              if (Math.abs(diffDays) <= 14) {
                 b.items.forEach(it => {
                    let st = vaxState[it.k];
                    if (st) {
                       if (it.sub) st[it.sub] = true;
                       else st.planned = true;
                    }
                 });
              }
           });
           if (earlyWarning) {
              setTimeout(() => uiAlert('Achtung: Der Patient erscheint deutlich zu früh für mindestens eine geplante Impfung!'), 500);
           }
        }
        
        setTimeout(() => {
           const rad = document.querySelector('input[name="leistung_beratung"][value="none"]');
           if (rad) rad.checked = true;
           updateLeistungen();
        }, 100);
     }
  }

  renderDestChips();recompute();
  lockAllSections();   // Abschnitte 1–3 gesperrt öffnen; Bearbeiten erst per Stift
  if(document.body.classList.contains('clinic')) enterPatient();
  else if(window.scrollTo)try{window.scrollTo({top:0,behavior:'smooth'});}catch(e){}
}
function cancelEdit(){editingId=null;el('editing-banner').classList.remove('show');el('save-btn').textContent=t('btnFinish');resetForm();
  if(document.body.classList.contains('clinic'))document.body.classList.add('clinic-idle');}
async function deletePatient(id){
  if(!(await uiConfirm(t('confirmDel'),{title:LANG==='de'?'Patient löschen':'Delete patient',ok:LANG==='de'?'Löschen':'Delete',danger:true})))return;
  const p=patients.find(x=>x.id===id); if(!p)return;
  // Soft-Delete: Datensatz bleibt erhalten (für Admin sichtbar), mit Protokoll wann/von wem
  const who=((CURRENT_PROFILE&&CURRENT_PROFILE.title?CURRENT_PROFILE.title+' ':'')+((CURRENT_PROFILE&&CURRENT_PROFILE.full_name)||'')).trim()||myUserKey();
  p.deleted={ts:new Date().toISOString(), who, role:(CURRENT_PROFILE&&CURRENT_PROFILE.role)||''};
  const ok=await persistPatient(p);
  if(!ok) return;
  if(editingId===id) cancelEdit();
  if(USE_DB && roleSeesClinic((CURRENT_PROFILE||{}).role)) await loadPatientsFromDB();
  renderPatients();
}
async function restorePatient(id){
  const p=patients.find(x=>x.id===id); if(!p)return;
  delete p.deleted;
  const ok=await persistPatient(p); if(!ok)return;
  if(USE_DB && roleSeesClinic((CURRENT_PROFILE||{}).role)) await loadPatientsFromDB();
  renderPatients();
}
function togglePatient(id){const e=el('pi-'+id);if(e)e.classList.toggle('open');}

/* ================= AMBULANZLISTE: Tag / Suche / Status / Gruppen ================= */
function ymd(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
let listDay = ymd(new Date());
let listSearch = '';
let SEC_COLLAPSE={};   // gemerkter Auf-/Zuklapp-Zustand der Ambulanz-Sektionen
function loadSecCollapse(){ try{ const s=localStorage.getItem('charite_seccollapse'); SEC_COLLAPSE=s?JSON.parse(s):{}; }catch(e){ SEC_COLLAPSE={}; } }
function saveSecCollapse(){ try{ localStorage.setItem('charite_seccollapse', JSON.stringify(SEC_COLLAPSE)); }catch(e){} }
let INTAKE_TYPE=null;  // Kiosk-Auswahl: 'beratung' | 'folgeimpfung'
function icLang(l){ if(typeof setLang==='function') setLang(l); const de=el('ic-de'),en=el('ic-en'); if(de)de.classList.toggle('active',l==='de'); if(en)en.classList.toggle('active',l==='en'); }
function showIntakeChoice(){ INTAKE_TYPE=null; const o=el('intake-choice'); if(o)o.classList.add('show'); icLang(typeof LANG!=='undefined'?LANG:'de'); }
function chooseIntake(t){ INTAKE_TYPE=t; const o=el('intake-choice'); if(o)o.classList.remove('show'); try{window.scrollTo({top:0});}catch(e){} }
const AMB_SECTIONS=[
  {status:'waiting',   type:'beratung',     de:'Beratung · Wartend',        en:'Consultation · Waiting'},
  {status:'treatment', type:'beratung',     de:'Beratung · In Behandlung',  en:'Consultation · In treatment'},
  {status:'waiting',   type:'folgeimpfung', de:'Folgeimpfung · Wartend',    en:'Follow-up · Waiting'},
  {status:'treatment', type:'folgeimpfung', de:'Folgeimpfung · In Behandlung', en:'Follow-up · In treatment'},
  {status:'done', de:'Behandelt', en:'Treated'}
];
function myTreatmentMode(){ let m=null; try{m=localStorage.getItem('charite_treatmentmode');}catch(e){} if(m==='beratung'||m==='folgeimpfung')return m; return ((CURRENT_PROFILE||{}).role==='mfa')?'folgeimpfung':'beratung'; }
function setMyTreatmentMode(m){ if(m!=='beratung'&&m!=='folgeimpfung')return; try{localStorage.setItem('charite_treatmentmode',m);}catch(e){} }
function patientTreatType(p){ return (p.treatmentType==='folgeimpfung'||p.treatmentType==='beratung')?p.treatmentType:'beratung'; }
function patientDay(p){const s=p.savedAt||p.updatedAt;if(!s)return listDay;try{return ymd(new Date(s));}catch(e){return listDay;}}
function patientStatus(p){return p.status||'waiting';}

function updateLeistungen() {
   const listDiv = el('leistung-vax-list');
   if (!listDiv) return;

   const planned = [];
   VACCINES.forEach(v => {
      const st = vaxState[v.k];
      if (!st) return;
      if (v.hep) {
         if (st.plannedA) planned.push({ name: 'Hepatitis A', k: 'hepA', live: false, stKey: v.k, planField: 'plannedA' });
         if (st.plannedB) planned.push({ name: 'Hepatitis B', k: 'hepB', live: false, stKey: v.k, planField: 'plannedB' });
         if (st.plannedAB) planned.push({ name: 'Twinrix (A+B)', k: 'hepAB', live: false, stKey: v.k, planField: 'plannedAB' });
      } else if (v.tdap_polio) {
         if (st.planned) planned.push({ name: 'Tetanus Diphtherie Pertussis', k: 'tdap_combo', live: false, stKey: v.k, planField: 'planned' });
         if (st.planned_ipv) planned.push({ name: 'Polio (IPV)', k: 'ipv_mono', live: false, stKey: v.k, planField: 'planned_ipv' });
      } else {
         if (st.planned) planned.push({ name: typeof getPlanName==='function'?getPlanName(v,st):(LANG==='de'?v.de:v.en), k: v.k, live: !!v.live, stKey: v.k, planField: 'planned' });
      }
   });

   let buckets = customSchedule;
   if (!buckets && planned.length > 0) {
      const dep = el('p-departure').value;
      buckets = buildOptimalSchedule(planned, dep);
   }

   let todaysItems = [];
   if (buckets && buckets.length > 0) {
      const todayBucket = buckets.find(b => b.offset === 0 && !b.isExternal);
      if (todayBucket && todayBucket.items) {
         todaysItems = todayBucket.items;
      }
   }

   let list = [];
   todaysItems.forEach(item => {
      // name in item.name might include " - Dosis 1", we can keep it or strip it. Let's keep it.
      list.push({k: item.stKey, sub: item.planField || 'planned', name: item.name});
   });

   let html = '';
   if (list.length === 0) {
      html = '<div class="leistung-empty">' + (LANG==='de'?'Keine Impfungen für heute geplant.':'No vaccinations planned for today.') + '</div>';
   } else {
      list.forEach(item => {
         html += '<span class="leistung-chip">'+_esc(item.name)+'<span class="lc-x" title="'+(LANG==='de'?'Entfernen':'Remove')+'" onclick="removeLeistungVax(\''+item.k+'\', \''+item.sub+'\')">✕</span></span>';
      });
   }
   listDiv.innerHTML = html;
   
   const impfCheckbox = el('leistung_impf');
   if (impfCheckbox) {
      impfCheckbox.checked = list.length > 0;
   }
   checkLeistungWarning();
}
function removeLeistungVax(k, sub) {
   if (vaxState[k]) vaxState[k][sub] = false;
   renderApptOverview();
}
function checkLeistungWarning() {
   const warn = el('leistung-warning');
   if (!warn) return;
   const rad = document.querySelector('input[name="leistung_beratung"]:checked');
   const folge = el('leistung_folge') ? el('leistung_folge').checked : false;
   const besch = el('leistung_bescheinigung') ? el('leistung_bescheinigung').checked : false;
   const impf = el('leistung_impf') ? el('leistung_impf').checked : false;
   
   if ((!rad || rad.value === 'none') && !folge && !besch && !impf) {
      warn.style.display = 'block';
   } else {
      warn.style.display = 'none';
   }
}
function listDayPick(v){if(v){listDay=v;renderPatients();}}
function listDayShift(n){const d=new Date(listDay+'T00:00:00');d.setDate(d.getDate()+n);listDay=ymd(d);const i=el('list-date');if(i)i.value=listDay;renderPatients();}
function listDayToday(){listDay=ymd(new Date());const i=el('list-date');if(i)i.value=listDay;renderPatients();}
function listSearchChange(v){listSearch=(v||'').trim().toLowerCase();renderPatients();}
function myUserKey(){return (CURRENT_PROFILE&&(CURRENT_PROFILE.id||CURRENT_PROFILE.full_name))||'me';}
async function persistPatient(p){
  if(USE_DB){const res=await dbUpdatePatient(p.id,p);if(res&&res.error){await uiAlert('Speichern fehlgeschlagen: '+(res.error.message||res.error));return false;}}
  else{storeSet('charite_patients',JSON.stringify(patients));}
  return true;
}
function claimPatient(p,type){ 
  p.claimedBy=myUserKey(); 
  p.claimedByName=(CURRENT_PROFILE&&CURRENT_PROFILE.full_name)||''; 
  p.claimedByRole=(CURRENT_PROFILE&&CURRENT_PROFILE.role)||''; 
  p.claimedByGender=(CURRENT_PROFILE&&CURRENT_PROFILE.gender)||'';
  if(!p.handlers) p.handlers = [];
  const existing = p.handlers.findIndex(h => h.id === p.claimedBy);
  if(existing > -1) p.handlers.splice(existing, 1);
  p.handlers.push({id: p.claimedBy, name: p.claimedByName, role: p.claimedByRole, gender: p.claimedByGender});
  if(!p.treatmentAt)p.treatmentAt=new Date().toISOString(); 
  p.treatmentType=type||p.treatmentType||myTreatmentMode(); 
}
async function setPatientStatus(id,status,type,claim){
  const p=patients.find(x=>x.id===id);if(!p)return;
  p.status=status;
  if(type) p.treatmentType=type;   // Drop in Beratung/Folgeimpfung setzt den Typ
  if(status==='treatment'){ if(claim) claimPatient(p,type); }
  else if(status==='waiting'){ p.claimedBy=null; p.claimedByName=''; p.claimedByRole=''; p.treatmentAt=null; }
  await persistPatient(p); renderPatients();
}
// Rechter Pfeil: Patient in die EIGENE Behandlung nehmen (claim) und öffnen
// MFA darf keine Beratung durchführen (nur Folgeimpfungen)
function canTreatType(type){ return !((CURRENT_PROFILE||{}).role==='mfa' && type==='beratung'); }
async function takeIntoTreatment(id){
  const p=patients.find(x=>x.id===id); const type=p?patientTreatType(p):myTreatmentMode();
  if(!canTreatType(type)){ uiAlert(LANG==='de'?'Als MFA können Sie keine Beratung übernehmen. Nur Ärztinnen/Ärzte führen Beratungen durch.':'As MFA you cannot take a consultation; only physicians consult.'); return; }
  await setPatientStatus(id,'treatment',type,true); loadPatient(id);
}
async function takeGroupIntoTreatment(g){
  const first=patients.find(p=>patientDay(p)===listDay&&(p.group||'').trim().toLowerCase()===g.trim().toLowerCase());
  const type=first?patientTreatType(first):myTreatmentMode();
  if(!canTreatType(type)){ uiAlert(LANG==='de'?'Als MFA können Sie keine Beratung übernehmen. Nur Ärztinnen/Ärzte führen Beratungen durch.':'As MFA you cannot take a consultation; only physicians consult.'); return; }
  await moveGroupStatus(g,'treatment',type,true); if(first)loadPatient(first.id);
}
async function startTreatment(id){ await takeIntoTreatment(id); }
// Behandlung abschließen (grüner Haken): aktuellen Patienten + ggf. ganze Gruppe auf „behandelt"
async function finishTreatment(){
  if(!editingId){ exitToList(); return; }
  const cur=patients.find(p=>p.id===editingId);
  const grp=(cur&&cur.group)?cur.group.trim().toLowerCase():'';
  const isGrp=!!grp && patients.filter(p=>patientDay(p)===listDay&&(p.group||'').trim().toLowerCase()===grp).length>1;
  const msg=isGrp
    ? (LANG==='de'?'Behandlung der ganzen Gruppe „'+(cur.group)+'" abschließen und nach „Behandelt" verschieben?':'Complete treatment for the whole group and move to "Treated"?')
    : (LANG==='de'?'Behandlung abschließen und Patient nach „Behandelt" verschieben?':'Complete treatment and move patient to "Treated"?');
  if(!(await uiConfirm(msg,{title:LANG==='de'?'Behandlung abschließen':'Complete treatment',ok:LANG==='de'?'Abschließen':'Complete'}))) return;
  const ok=await savePatient();   // speichert aktuellen Patienten als „done" + exitToList()
  if(!ok) return;
  if(grp){
    const mates=patients.filter(p=>patientDay(p)===listDay && (p.group||'').trim().toLowerCase()===grp && p.status!=='done');
    for(const m of mates){ m.status='done'; await persistPatient(m); }
    renderPatients();
  }
}
async function assignGroup(id){
  closeCardMenus();
  const p=patients.find(x=>x.id===id);if(!p)return;
  const g=await uiPrompt(LANG==='de'?'Gruppen-/Familienname (leer = Gruppe entfernen):':'Group/family name (empty = remove):',{title:LANG==='de'?'Gruppe':'Group',def:p.group||''});
  if(g===null)return; p.group=g.trim();
  await persistPatient(p); renderPatients();
}
// Drag&Drop: auf eine Spalte = Status ändern; auf einen anderen Patienten = gruppieren
async function ungroup(id){
  const p=patients.find(x=>x.id===id);if(!p)return; p.group='';
  await persistPatient(p); renderPatients();
}
let _dragPid=null, _dragGroup=null;
document.addEventListener('dragend', () => {
  document.querySelectorAll('.drag-over, .group-target').forEach(el => el.classList.remove('drag-over', 'group-target'));
  hideTpTooltip();
});
function pDragStart(e,id){hideTpTooltip();_dragPid=id;_dragGroup=null;try{e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',id);}catch(_){}}
function gDragStart(e,g){ if(e.target.closest('.patient-item'))return; _dragGroup=g;_dragPid=null;try{e.dataTransfer.effectAllowed='move';}catch(_){}}
function pDragOver(e){e.preventDefault();e.currentTarget.classList.add('drag-over');const sec=e.currentTarget.closest('.amb-section');if(sec)sec.classList.remove('collapsed');}
function pDragLeave(e){e.currentTarget.classList.remove('drag-over');}
function pDrop(e,status,type){
  // Drag&Drop in „In Behandlung" übernimmt den Patienten in die eigene Behandlung (claim=true).
  e.preventDefault();e.currentTarget.classList.remove('drag-over');
  // MFA darf niemanden in „Beratung · In Behandlung" ziehen (keine Beratung durch MFA)
  if(status==='treatment' && !canTreatType(type)){ _dragGroup=null;_dragPid=null; uiAlert(LANG==='de'?'Als MFA können Sie keine Beratung übernehmen. Nur Ärztinnen/Ärzte führen Beratungen durch.':'As MFA you cannot take a consultation; only physicians consult.'); return; }
  if(_dragGroup){ const g=_dragGroup;_dragGroup=null;_dragPid=null;moveGroupStatus(g,status,type,true);return; }
  let id=_dragPid;if(!id){try{id=e.dataTransfer.getData('text/plain');}catch(_){}}_dragPid=null;if(id)setPatientStatus(id,status,type,true);
}
async function moveGroupStatus(groupName,status,type,claim){
  const gl=groupName.trim().toLowerCase();
  const members=patients.filter(p=>patientDay(p)===listDay && (p.group||'').trim().toLowerCase()===gl);
  for(const p of members){ p.status=status;
    if(type) p.treatmentType=type;
    if(status==='treatment'){ if(claim) claimPatient(p,type); }
    else if(status==='waiting'){p.claimedBy=null;p.claimedByName='';p.claimedByRole='';p.treatmentAt=null;}
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
  if(!(await uiConfirm((LANG==='de'?'„'+nm(src)+'" zur Gruppe „'+(tgt.name||'')+'" hinzufügen?':'Add "'+nm(src)+'" to group "'+(tgt.name||'')+'"?'),{title:LANG==='de'?'Gruppieren':'Group'})))return;
  const grp=(tgt.name||'Gruppe').trim();   // Gruppenname = Nachname des Ziels
  src.group=grp; tgt.group=grp;
  await persistPatient(tgt); await persistPatient(src); renderPatients();
}
// Rechter Pfeil: Patient in die eigene Behandlung nehmen. Nur für Wartend/In Behandlung.
function arrowBtn(id){ return '<button class="amb-arrow" onclick="event.stopPropagation();takeIntoTreatment(\''+id+'\')" title="'+(LANG==='de'?'In Behandlung nehmen':'Take into treatment')+'">→</button>'; }
function groupArrowBtn(gesc){ return '<button class="amb-arrow" onclick="event.stopPropagation();takeGroupIntoTreatment(\''+gesc+'\')" title="'+(LANG==='de'?'Gruppe in Behandlung nehmen':'Take group into treatment')+'">→</button>'; }
function elapsedStr(iso){ if(!iso)return''; const min=Math.max(0,Math.round((Date.now()-new Date(iso).getTime())/60000)); if(isNaN(min))return''; if(min<1)return LANG==='de'?'gerade eben':'just now'; if(min<60)return min+' min'; const h=Math.floor(min/60),m=min%60; return h+' h'+(m?' '+m:'')+(m?' min':''); }
function initials(name){ if(!name)return '?'; const parts=String(name).trim().split(/\s+/).filter(Boolean); if(!parts.length)return '?'; if(parts.length===1)return parts[0].slice(0,2).toUpperCase(); return (parts[0][0]+parts[parts.length-1][0]).toUpperCase(); }
function roleColor(role){ switch(role){ case 'arzt':return '#2563eb'; case 'mfa':return '#0e9e8e'; case 'admin':return '#111827'; case 'kasse':return '#b45309'; case 'patient':return '#6b7280'; default:return '#6b7280'; } }
function formatRoleTitle(role, gender){
  if(role==='arzt'){
    if(gender==='m') return LANG==='de'?'Arzt':'Doctor';
    if(gender==='w') return LANG==='de'?'Ärztin':'Doctor';
    return LANG==='de'?'Arzt / Ärztin':'Doctor';
  }
  if(role==='mfa') return 'MFA';
  if(role==='admin') return 'Admin';
  if(role==='kasse') return LANG==='de'?'Kasse':'Reception';
  return role||'';
}
function initialsCircle(name,role,gender){ const rTitle=formatRoleTitle(role,gender); return '<span class="ini-circle" style="background:'+roleColor(role)+'" title="'+_esc(name||'')+(rTitle?' · '+rTitle:'')+'">'+_esc(initials(name))+'</span>'; }
function toggleCardMenu(id){ const m=el('cm-'+id); const open=m&&m.style.display==='block'; closeCardMenus(); if(m&&!open)m.style.display='block'; }
function closeCardMenus(){ document.querySelectorAll('.card-menu').forEach(m=>m.style.display='none'); }
document.addEventListener('click',function(e){ if(!e.target.closest('.card-menu')&&!e.target.closest('.menu-btn')) closeCardMenus(); });
let AMB_TIMER=null;
function startAmbRefresh(){ if(AMB_TIMER)return; AMB_TIMER=setInterval(()=>{ if(USE_DB && typeof roleSeesClinic==='function' && roleSeesClinic((CURRENT_PROFILE||{}).role)) loadPatientsFromDB(); },15000); }
function renderPatients(){
  const listEl=el('patient-list');if(!listEl)return;
  const di=el('list-date');if(di&&di.value!==listDay)di.value=listDay;
  const dayPats=patients.filter(p=>patientDay(p)===listDay);
  const q=listSearch;
  const filt=q?dayPats.filter(p=>((p.name||'')+' '+(p.firstname||'')).toLowerCase().includes(q)||((p.firstname||'')+' '+(p.name||'')).toLowerCase().includes(q)):dayPats;
  // Offene Schnellansichten merken, damit sie beim Neu-Rendern (Auto-Refresh) nicht zuklappen
  const openIds=Array.from(listEl.querySelectorAll('.patient-item.open')).map(e=>e.dataset.pid);
  // Eine Sektion (Lane) rendern: Wartend / In Behandlung / Behandelt
  const lane=(s)=>{
    const inSec=filt.filter(p=>{ if(p.deleted)return false; if(patientStatus(p)!==s.status)return false; if(s.type)return patientTreatType(p)===s.type; return true; });
    const key=secKey(s);
    let collapsed=false;
    let clickAttr='';
    let toggleArrow='';
    if(s.status==='done'){
      if(key in SEC_COLLAPSE) collapsed=SEC_COLLAPSE[key];
      else collapsed=true;
      clickAttr=' onclick="toggleSection(\''+key+'\',this)"';
      toggleArrow='<span class="amb-toggle">▾</span>';
    }
    const dropAttr='data-status="'+s.status+'"'+(s.type?' data-type="'+s.type+'"':'');
    const typeArg=s.type?("'"+s.type+"'"):'null';
    let h='<div class="amb-section'+(collapsed?' collapsed':'')+(s.type?' amb-lane':'')+'" '+dropAttr+'>';
    h+='<div class="amb-sec-h"'+clickAttr+' ondragover="pDragOver(event)" ondragleave="pDragLeave(event)" ondrop="pDrop(event,\''+s.status+'\','+typeArg+')"><span>'+(LANG==='de'?s.de:s.en)+' <span class="count-pill">'+inSec.length+'</span></span>'+toggleArrow+'</div>';
    h+='<div class="patient-list drop-zone" '+dropAttr+' ondragover="pDragOver(event)" ondragleave="pDragLeave(event)" ondrop="pDrop(event,\''+s.status+'\','+typeArg+')">';
    h+= inSec.length ? renderSectionCards(inSec) : '<div class="amb-empty">'+(LANG==='de'?'Hierher ziehen …':'Drop here …')+'</div>';
    h+='</div></div>';
    return h;
  };
  let cols='';
  [{type:'beratung',de:'Beratung',en:'Consultation'},{type:'folgeimpfung',de:'Folgeimpfung',en:'Follow-up'}].forEach(g=>{
    const wCount=filt.filter(p=>patientStatus(p)==='waiting'&&patientTreatType(p)===g.type).length;
    const tCount=filt.filter(p=>patientStatus(p)==='treatment'&&patientTreatType(p)===g.type).length;
    cols+='<div class="amb-typegroup '+g.type+'"><div class="amb-tg-h"><span class="type-badge '+g.type+'">'+(g.type==='folgeimpfung'?'F':'B')+'</span>'+(LANG==='de'?g.de:g.en)+'<span class="amb-tg-count">'+(wCount+tCount)+'</span></div>';
    cols+=lane({status:'waiting',type:g.type,de:'Wartend',en:'Waiting'});
    cols+=lane({status:'treatment',type:g.type,de:'In Behandlung',en:'In treatment'});
    cols+='</div>';
  });
  let html='<div class="amb-board2">'+cols+'</div>';
  // Gelöschte Patienten – nur für Admin sichtbar, klar als gelöscht markiert
  if((CURRENT_PROFILE||{}).role==='admin'){
    const del=dayPats.filter(p=>p.deleted);
    if(del.length){
      const collapsed=('del' in SEC_COLLAPSE)?SEC_COLLAPSE.del:true;
      html+='<div class="amb-section amb-deleted'+(collapsed?' collapsed':'')+'"><div class="amb-sec-h" onclick="toggleSection(\'del\',this)"><span>'+(LANG==='de'?'Gelöscht':'Deleted')+' <span class="count-pill">'+del.length+'</span></span><span class="amb-toggle">▾</span></div><div class="patient-list">'+
        del.map(p=>{const nm=(p.firstname?p.name+', '+p.firstname:p.name);const d=p.deleted||{};return '<div class="del-row"><div class="del-main"><div class="del-name">'+_esc(nm)+'</div><div class="del-sub">'+(LANG==='de'?'gelöscht von ':'deleted by ')+_esc(d.who||'—')+' · '+fmtDateTime(d.ts)+'</div></div><button class="btn sec sm" onclick="restorePatient(\''+p.id+'\')">'+(LANG==='de'?'Wiederherstellen':'Restore')+'</button></div>';}).join('')+
        '</div></div>';
    }
  }
  listEl.innerHTML=html;
  openIds.forEach(id=>{ const e=el('pi-'+id); if(e) e.classList.add('open'); });   // Schnellansichten wiederherstellen
  renderTreatPanel();
}
function secKey(s){ return s.status+(s.type?'·'+s.type:''); }
function toggleSection(key,hdr){ const sec=hdr.parentNode; sec.classList.toggle('collapsed'); SEC_COLLAPSE[key]=sec.classList.contains('collapsed'); saveSecCollapse(); }

function tpTooltipHTML(p) {
  const dest=(p.destinations||[]).map(c=>CBY[c]?(LANG==='de'?CBY[c].de:CBY[c].en):c).join(', ')||'—';
  const durLbl={'<1w':'< 1 '+(LANG==='de'?'Woche':'week'),'1-2w':'1–2 '+(LANG==='de'?'Wochen':'weeks'),'<2w':'< 2 '+(LANG==='de'?'Wochen':'weeks'),'2-4w':'2–4 '+(LANG==='de'?'Wochen':'weeks'),'0-7':'0–7 d','7-14':'7–14 d','14-21':'14–21 d','21-28':'21–28 d','1-3m':'1–3 '+(LANG==='de'?'Mon':'mo'),'3-6m':'3–6 '+(LANG==='de'?'Mon':'mo'),'>6m':'>6 '+(LANG==='de'?'Mon':'mo')}[p.duration]||p.duration||'—';
  const preg = p.pregnant==='pregnant'?(LANG==='de'?'Ja':'Yes'):(p.pregnant==='breastfeeding'?(LANG==='de'?'Stillend':'Breastfeeding'):(p.pregnant==='planned'?(LANG==='de'?'Geplant':'Planned'):(LANG==='de'?'Nein':'No')));
  const fld=(lbl,val)=>'<div class="pb-field"><span class="pb-lbl">'+lbl+'</span><span class="pb-val">'+val+'</span></div>';
  return fld(LANG==='de'?'Reisedauer':'Duration', durLbl) +
         fld(LANG==='de'?'Reiseziel(e)':'Destination(s)', dest) +
         fld(LANG==='de'?'Allergien':'Allergies', _esc(p.allergy||'—')) +
         fld(LANG==='de'?'Schwangerschaft':'Pregnancy', preg) +
         fld(LANG==='de'?'Chron. Erkrankung':'Chronic Illness', _esc(p.chronicText||'—')) +
         fld(LANG==='de'?'Medikamente':'Medication', _esc(p.meds&&p.meds.length?p.meds.join(', '):'—'));
}
function showTpTooltip(e, id) {
  let tooltip = document.getElementById('tp-tooltip');
  if(!tooltip) {
    tooltip = document.createElement('div');
    tooltip.id = 'tp-tooltip';
    tooltip.className = 'tp-tooltip';
    document.body.appendChild(tooltip);
  }
  const p = patients.find(x=>x.id===id);
  if(!p) return;
  tooltip.innerHTML = tpTooltipHTML(p);
  const rect = e.currentTarget.getBoundingClientRect();
  tooltip.style.top = Math.max(10, rect.top) + 'px';
  tooltip.style.left = (rect.right + 10) + 'px';
  tooltip.style.display = 'block';
}
function hideTpTooltip() {
  const tooltip = document.getElementById('tp-tooltip');
  if(tooltip) tooltip.style.display = 'none';
}

// Linkes Behandlungsfeld des behandelnden Arztes: eigene Patienten in Behandlung + Sektions-Navigation
function tpItem(p){ const nm=(p.firstname?p.name+', '+p.firstname:p.name); const act=(p.id===editingId)?' active':''; return '<div class="tp-item'+act+'" tabindex="0" onmouseenter="showTpTooltip(event,\''+p.id+'\')" onmouseleave="hideTpTooltip()" draggable="true" ondragstart="pDragStart(event,\''+p.id+'\')" onclick="tpSwitch(\''+p.id+'\')"><span class="tp-nm">'+_esc(nm)+'</span></div>'; }
function tpItemDone(p){ const nm=(p.firstname?p.name+', '+p.firstname:p.name); const act=(p.id===editingId)?' active':''; return '<div class="tp-item tp-done'+act+'" tabindex="0" onmouseenter="showTpTooltip(event,\''+p.id+'\')" onmouseleave="hideTpTooltip()" draggable="true" ondragstart="pDragStart(event,\''+p.id+'\')" onclick="tpSwitch(\''+p.id+'\')"><span class="tp-nm" style="font-weight:400;color:var(--grey)">'+_esc(nm)+'</span></div>'; }
// Patient im Behandlungsfeld wechseln – aktuelle Eingaben vorher zwischenspeichern (ohne Abschluss)
async function tpSwitch(id){ if(id===editingId){ if(document.body.classList.contains('clinic-idle')) enterPatient(); return; } if(editingId){ try{ await savePatient(false); }catch(_){} } loadPatient(id); }
function renderTreatPanel(){
  const box=el('treat-panel'); if(!box) return;
  const clinic=document.body.classList.contains('clinic');
  const editing=!!editingId && !document.body.classList.contains('clinic-idle');
  if(!clinic){ box.innerHTML=''; box.classList.remove('show'); return; }
  const mine=patients.filter(p=>patientDay(p)===listDay && patientStatus(p)==='treatment' && p.claimedBy===myUserKey());
  const docName=(CURRENT_PROFILE&&CURRENT_PROFILE.full_name)||'';
  const docRole=(CURRENT_PROFILE&&CURRENT_PROFILE.role)||'';
  let h='';
  if(editing) h+='<button class="tp-home" onclick="showList()">&larr; '+(LANG==='de'?'Ambulanzliste':'Clinic list')+'</button>';
  h+='<div class="tp-head"><span class="tp-title">'+(LANG==='de'?'In Behandlung':'In treatment')+'</span>'+(docName?initialsCircle(docName,docRole,CURRENT_PROFILE?CURRENT_PROFILE.gender:''):'')+'</div>';
  if(mine.length){
    const groups={},order=[];
    mine.forEach(p=>{const g=(p.group||'').trim();const k=g?('g:'+g.toLowerCase()):('p:'+p.id);if(!groups[k]){groups[k]={g:g,items:[]};order.push(k);}groups[k].items.push(p);});
    h+='<div class="tp-list">';
    order.forEach(k=>{const grp=groups[k];
      if(grp.g&&grp.items.length>1) h+='<div class="tp-group"><div class="tp-gname">'+(LANG==='de'?'Gruppe: ':'Group: ')+_esc(grp.g)+'</div>'+grp.items.map(tpItem).join('')+'</div>';
      else h+=grp.items.map(tpItem).join('');
    });
    h+='</div>';
  } else {
    h+='<div class="tp-empty">'+(LANG==='de'?'Kein Patient in Behandlung.':'No patient in treatment.')+'</div>';
  }
  
  if(!editing) {
    const done=patients.filter(p=>patientDay(p)===listDay && patientStatus(p)==='done');
    h+='<div class="tp-done-zone" data-status="done" ondragover="pDragOver(event)" ondragleave="pDragLeave(event)" ondrop="pDrop(event,\'done\',null)" style="margin-top:20px; flex:1; display:flex; flex-direction:column; min-height:0;">';
    h+='<div class="tp-head"><span class="tp-title">'+(LANG==='de'?'Behandelt':'Treated')+' <span class="count-pill">'+done.length+'</span></span></div>';
    h+='<div class="tp-list drop-zone" style="min-height:80px; padding:4px; overflow-y:auto; flex:1;" data-status="done" ondragover="pDragOver(event)" ondragleave="pDragLeave(event)" ondrop="pDrop(event,\'done\',null)">';
    h+= done.length ? done.map(tpItemDone).join('') : '<div class="tp-empty" style="text-align:center; padding-top:20px;">'+(LANG==='de'?'Hierher ziehen …':'Drop here …')+'</div>';
    h+='</div></div>';
  }

  if(editing) h+='<div class="tp-sep"></div><div class="tp-sections">'+secNavHtml()+'</div>';
  box.innerHTML=h; box.classList.add('show');
  updateSecNav();
}
function renderSectionCards(list){
  const groups={},order=[];
  list.forEach(p=>{const g=(p.group||'').trim();const key=g?('g:'+g.toLowerCase()):('p:'+p.id);if(!groups[key]){groups[key]={g:g,items:[]};order.push(key);}groups[key].items.push(p);});
  let h='';
  order.forEach(key=>{const grp=groups[key];
    if(grp.g&&grp.items.length>1){
      const gesc=_esc(grp.g).replace(/'/g,"\\'");
      const st=patientStatus(grp.items[0]);
      let gIcon='';
      const claimed=grp.items.find(p=>p.claimedByName);
      if(st==='treatment'||st==='done'){
        if(grp.items[0].handlers && grp.items[0].handlers.length > 0) gIcon='<div class="handlers-circles" style="margin-left:8px;">'+grp.items[0].handlers.map(h=>initialsCircle(h.name,h.role,h.gender)).join('')+'</div>';
        else if(claimed) gIcon=initialsCircle(claimed.claimedByName,claimed.claimedByRole,claimed.claimedByGender);
      }
      const gBehandeln=(st==='waiting'&&canTreatType(patientTreatType(grp.items[0])))?'<button class="btn sm amb-behandeln" onclick="event.stopPropagation();takeGroupIntoTreatment(\''+gesc+'\')">'+(LANG==='de'?'Behandeln':'Treat')+'</button>':'';
      h+='<div class="amb-group" draggable="true" ondragstart="gDragStart(event,\''+gesc+'\')"><div class="amb-group-h"><span>'+(LANG==='de'?'Gruppe: ':'Group: ')+_esc(grp.g)+' <span class="amb-group-hint">'+(LANG==='de'?'(ganze Gruppe ziehen)':'(drag whole group)')+'</span></span><span class="amb-group-act">'+gBehandeln+gIcon+'</span></div>'+grp.items.map(p=>renderPatientCard(p,true)).join('')+'</div>';
    }
    else h+=grp.items.map(p=>renderPatientCard(p,false)).join('');
  });
  return h;
}
function renderPatientCard(p,inGroup){
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
               <div style="font-size:11.5px;"><b>${n}</b> ${it.live ? '<span class="live-dot" title="Lebendimpfstoff">L</span>' : ''}</div>
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
    const cmt=p.comment?'<div class="pb-comment"><span class="pb-lbl">'+(LANG==='de'?'Kommentar':'Comment')+'</span><span class="pb-val">'+_esc(p.comment)+'</span></div>':'';
    const upd=(p.updatedAt&&p.updatedAt!==p.savedAt)?' · '+(LANG==='de'?'geändert':'edited')+' '+fmtDateTime(p.updatedAt):'';
    const stampTxt=t('savedStamp')+': '+fmtDateTime(p.savedAt)+upd+' · '+t('physicianLbl')+': '+_esc(p.physician||'—');
    const dobStr=p.dob?fmtDate(new Date(p.dob)):'—';const ageParen=(p.age!==null&&p.age!==undefined)?' ('+p.age+' '+(LANG==='de'?'J.':'yrs')+')':'';
    const dispName=_esc(p.firstname?p.name+', '+p.firstname:p.name);
    const grpBadge=(p.group&&!inGroup)?' <span class="grp-badge">'+_esc(p.group)+'</span>':'';
    const s=patientStatus(p); const mine=p.claimedBy&&p.claimedBy===myUserKey();
    let timeMeta='';
    if(s==='waiting') timeMeta=' · '+(LANG==='de'?'wartet ':'waiting ')+elapsedStr(p.savedAt);
    else if(s==='treatment') timeMeta=(mine?' · '+(LANG==='de'?'von mir':'by me'):'')+(p.treatmentAt?' · '+elapsedStr(p.treatmentAt):'');
    // Behandler-Icon in der Liste (damit anderes Personal sieht, wer behandelt) – bei Gruppen nur im Gruppenkopf
    let ini = '';
    if (!inGroup) {
      if (p.handlers && p.handlers.length > 0) {
        ini = '<div class="handlers-circles">' + p.handlers.map(h => initialsCircle(h.name, h.role, h.gender)).join('') + '</div>';
      } else if ((s==='treatment'||s==='done')&&p.claimedByName) {
        ini = initialsCircle(p.claimedByName, p.claimedByRole, p.claimedByGender);
      }
    }
    // „Behandeln"-Button bei wartenden Einzelpatienten → in eigene Behandlung übernehmen
    const behandeln=(!inGroup&&s==='waiting'&&canTreatType(patientTreatType(p)))?'<button class="btn sm amb-behandeln" onclick="event.stopPropagation();takeIntoTreatment(\''+p.id+'\')">'+(LANG==='de'?'Behandeln':'Treat')+'</button>':'';
    const tt=patientTreatType(p);
    const typeBadge='<span class="type-badge '+tt+'" title="'+(tt==='folgeimpfung'?'Folgeimpfung':'Beratung')+'">'+(tt==='folgeimpfung'?'F':'B')+'</span>';
    const actionsBtns=(p.group?'<button class="btn sec sm" onclick="event.stopPropagation();ungroup(\''+p.id+'\')">'+(LANG==='de'?'Entgruppieren':'Ungroup')+'</button>':'')+'<button class="btn danger sm" onclick="event.stopPropagation();deletePatient(\''+p.id+'\')">'+(LANG==='de'?'Löschen':'Delete')+'</button>';
    const fld=(lbl,val)=>'<div class="pb-field"><span class="pb-lbl">'+lbl+'</span><span class="pb-val">'+val+'</span></div>';
    const body='<div class="patient-body">'
      +'<div class="pb-grid">'
        +fld(LANG==='de'?'Reisedauer':'Duration', durLbl)
        +fld(LANG==='de'?'Reiseziel(e)':'Destination(s)', dest)
        +fld(LANG==='de'?'Allergien':'Allergies', _esc(p.allergy||'—'))
        +fld(LANG==='de'?'Schwangerschaft':'Pregnancy', p.pregnant==='pregnant'?(LANG==='de'?'Ja':'Yes'):(p.pregnant==='breastfeeding'?(LANG==='de'?'Stillend':'Breastfeeding'):(p.pregnant==='planned'?(LANG==='de'?'Geplant':'Planned'):(LANG==='de'?'Nein':'No'))))
        +fld(LANG==='de'?'Chron. Erkrankung':'Chronic Illness', _esc(p.chronicText||'—'))
        +fld(LANG==='de'?'Medikamente':'Medication', _esc(p.meds&&p.meds.length?p.meds.join(', '):'—'))
      +'</div>'
      +'<div class="pb-footer"><div class="pb-stamp">'+stampTxt+'</div><div class="pb-actions">'+actionsBtns+'</div></div>'
      +'</div>';
    return '<div class="patient-item'+(mine&&s==='treatment'?' mine':'')+'" id="pi-'+p.id+'" data-pid="'+p.id+'" draggable="true" ondragstart="pDragStart(event,\''+p.id+'\')" ondragover="pCardOver(event)" ondragleave="pCardLeave(event)" ondrop="pCardDrop(event)"><div class="patient-head" onclick="togglePatient(\''+p.id+'\')"><span class="caret" onclick="event.stopPropagation();togglePatient(\''+p.id+'\')" title="'+(LANG==='de'?'Schnellansicht':'Preview')+'">▶</span>'+typeBadge+'<span class="pl-name">'+dispName+grpBadge+'</span><span class="pl-meta">'+(LANG==='de'?'geb. ':'b. ')+dobStr+ageParen+' · '+dest+timeMeta+'</span><span class="pl-spacer"></span>'+behandeln+ini+'</div>'+body+'</div>';
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
  const w=window.open('','_blank');if(!w){uiAlert(LANG==='de'?'Bitte Pop-ups erlauben, um den Impfplan zu drucken.':'Please allow pop-ups to print.');return;}
  w.document.write(h);w.document.close();w.focus();setTimeout(()=>{try{w.print();}catch(e){}},300);
}

/* ---------- RESET ---------- */
function _sv(id,v){const e=el(id);if(e)e.value=v;}
function _sc(id,v){const e=el(id);if(e)e.checked=v;}
function resetForm(){
  el('p-name').value='';el('p-dob').value='';el('p-sex').value='f';el('p-duration').value='<1w';el('p-departure').value='';el('p-pregnant').value='no';el('p-allergy').value='';el('p-immuno').value='';el('p-comment').value='';
  ['p-firstname','p-email','p-phone','p-insurance','p-profession','p-address','p-zip','p-city','p-chronic-text','p-chronic-input','p-med-input','p-recentvax','p-recentvax-input'].forEach(id=>_sv(id,''));
  ['p-acute','p-thrombosis','p-faint'].forEach(id=>_sc(id,false));
  medsList=[]; renderMedPills(); renderMedVacCheck();
  recentVaxList=[]; renderRecentVaxList();
  chronicList=[]; renderChronicList();
  serologyState = { measles: false, vzv: false, hbs: false };
  document.querySelectorAll('.cond').forEach(c=>c.checked=false);
  destinations=[];freshVaxState();editingId=null;el('editing-banner').classList.remove('show');el('save-btn').textContent=t('btnFinish');
  if(typeof kioskUpdateView === 'function'){ kioskStep=1; kioskUpdateView(); }
  // Leistungen zurücksetzen; MFA startet mit „Keine Beratung"
  const bDefault=((CURRENT_PROFILE||{}).role==='mfa')?'none':'1';
  const bRad=document.querySelector('input[name="leistung_beratung"][value="'+bDefault+'"]'); if(bRad) bRad.checked=true;
  ['leistung_folge','leistung_bescheinigung'].forEach(id=>_sc(id,false));
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
    ['step4','step5','step6','list-card','kasse-card'].forEach(id=>show(id,false));
    kioskStep = 1;
    kioskUpdateView();
    show('notes-block',false);   // Länder-/Gesundheitshinweise nur für Personal, nicht auf dem Patienten-Tablet
    if(ub) ub.style.display='none';
    const kb=el('kiosk-bar'); if(kb) kb.classList.add('show');
    showIntakeChoice();   // zuerst Reiseberatung / Folgeimpfung wählen lassen
    return;
  }
  // Kasse verhält sich vorerst wie Arzt/Ärztin (voller Klinikzugriff)
  ['step1','step2','step3','step4','step5','step6','list-card'].forEach(id=>show(id,true));
  show('kasse-card',false);
  document.body.classList.add('clinic');
  document.body.classList.add('clinic-idle');       // Start: kein Patient gewählt → Abschnitte eingeklappt
  const npb=el('new-patient-btn'); if(npb) npb.style.display='inline-block';
  loadSecCollapse();   // gemerkten Auf-/Zuklapp-Zustand wiederherstellen (bleibt auch bei manuellem Refresh)
  moveListToTop();
  if(USE_DB){ loadPatientsFromDB(); startAmbRefresh(); } else renderPatients();
  renderTreatPanel();
}
function moveListToTop(){
  const main=document.querySelector('main'); const lc=el('list-card'), s1=el('step1'), eb=el('editing-banner');
  if(main&&lc&&s1){ try{ main.insertBefore(lc, s1); if(eb) main.insertBefore(eb, s1); }catch(e){} }
}
function enterPatient(){
  document.body.classList.remove('clinic-idle');
  try{ el('step1').scrollIntoView({behavior:'smooth',block:'start'}); }catch(e){}
  renderTreatPanel();
}
function exitToList(){
  resetForm();
  document.body.classList.add('clinic-idle');
  try{ el('list-card').scrollIntoView({behavior:'smooth',block:'start'}); }catch(e){}
  renderTreatPanel();
}
// Zur Ambulanzliste zurück, ohne die Behandlung zu beenden (Patient bleibt geladen/in Behandlung)
function showList(){
  document.body.classList.add('clinic-idle');
  try{ window.scrollTo({top:0,behavior:'smooth'}); }catch(e){}
  renderTreatPanel();
}

/* ---------- Bearbeitungssperre + Änderungsprotokoll (Abschnitte 1–3) ---------- */
const LOCK_SECTIONS=['step1','step2','step3'];
const SECTION_TITLES={step1:{de:'Stammdaten',en:'Master data'},step2:{de:'Reise',en:'Travel'},step3:{de:'Immunstatus',en:'Immune status'}};
let SECTION_LOCKED={}, SECTION_EDIT={}, LOCK_LISTENERS=false;
function isStaff(){ return (typeof roleSeesClinic==='function') && roleSeesClinic((CURRENT_PROFILE||{}).role); }
function lockAllSections(){ LOCK_SECTIONS.forEach(id=>{SECTION_LOCKED[id]=true;SECTION_EDIT[id]=false;}); applyLocks(); }
function unlockAllSections(){ LOCK_SECTIONS.forEach(id=>{SECTION_LOCKED[id]=false;SECTION_EDIT[id]=false;}); applyLocks(); }
function toggleLock(id){ SECTION_LOCKED[id]=!(SECTION_LOCKED[id]!==false); applyLocks(); }
function applyLocks(){
  const staff=isStaff();
  LOCK_SECTIONS.forEach(id=>{
    const sec=el(id); if(!sec)return;
    const locked = staff && SECTION_LOCKED[id]!==false;   // Patienten (Kiosk): nie gesperrt
    sec.classList.toggle('locked', locked);
    const btn=el('lock-'+id); if(btn){ btn.classList.toggle('active', !locked); btn.title=locked?(LANG==='de'?'Bearbeiten':'Edit'):(LANG==='de'?'Bearbeitung aktiv':'Editing'); }
  });
  if(!LOCK_LISTENERS){
    LOCK_SECTIONS.forEach(id=>{ const sec=el(id); if(sec) sec.addEventListener('input',()=>{ if(SECTION_LOCKED[id]===false) SECTION_EDIT[id]=true; }); });
    LOCK_LISTENERS=true;
  }
}
function editLogHtml(p){
  const log=(p.editLog||[]).slice().reverse();
  const del=p.deleted;
  if(!log.length && !del) return '';
  let h='<div class="pb-log"><div class="pb-lbl">'+(LANG==='de'?'Änderungsprotokoll':'Change log')+'</div>';
  if(del) h+='<div class="pb-log-row del"><b>'+(LANG==='de'?'Gelöscht':'Deleted')+'</b> · '+_esc(del.who||'—')+' · '+fmtDateTime(del.ts)+'</div>';
  log.slice(0,12).forEach(e=>{ const sn=SECTION_TITLES[e.section]?(LANG==='de'?SECTION_TITLES[e.section].de:SECTION_TITLES[e.section].en):e.section; const flds=(e.fields&&e.fields.length)?' · '+e.fields.join(', '):''; h+='<div class="pb-log-row">'+fmtDateTime(e.ts)+' · '+_esc(e.who||'—')+' · '+_esc(sn)+_esc(flds)+'</div>'; });
  return h+'</div>';
}
function startNewPatient(){ resetForm(); unlockAllSections(); const et=el('editing-text'); if(et) et.textContent=(LANG==='de'?'Neuer Patient':'New patient'); enterPatient(); }
async function cancelEditConfirm(){
  if(!(await uiConfirm(LANG==='de'?'Bearbeitung wirklich abbrechen? Nicht gespeicherte Änderungen gehen verloren.':'Really cancel editing? Unsaved changes will be lost.',{title:LANG==='de'?'Bearbeitung abbrechen':'Cancel editing',ok:LANG==='de'?'Verwerfen':'Discard',danger:true}))) return;
  cancelEdit();
}

/* ---------- Dialoge im App-Design (Ersatz für confirm/prompt/alert) ---------- */
function openDialog(opts, cb){
  const bg=el('ui-dialog-bg');
  if(!bg){ cb(opts.input?window.prompt(opts.msg,opts.def||''):(window.confirm(opts.msg)?true:null)); return; }
  const tt=el('ui-dialog-title'); tt.textContent=opts.title||''; tt.style.display=opts.title?'':'none';
  el('ui-dialog-msg').textContent=opts.msg||'';
  const inp=el('ui-dialog-input');
  if(opts.input){ inp.style.display=''; inp.value=opts.def||''; } else { inp.style.display='none'; inp.value=''; }
  const okBtn=el('ui-dialog-ok'), cancelBtn=el('ui-dialog-cancel');
  okBtn.textContent=opts.ok||'OK';
  cancelBtn.textContent=opts.cancel||(LANG==='de'?'Abbrechen':'Cancel');
  cancelBtn.style.display=(opts.cancel===null)?'none':'';
  okBtn.className='btn'+(opts.danger?' danger':'');
  const done=(val)=>{ bg.classList.remove('show'); okBtn.onclick=null; cancelBtn.onclick=null; bg.onclick=null; document.removeEventListener('keydown',key); cb(val); };
  const key=(e)=>{ if(e.key==='Escape') done(null); else if(e.key==='Enter') done(opts.input?inp.value:true); };
  okBtn.onclick=()=>done(opts.input?inp.value:true);
  cancelBtn.onclick=()=>done(null);
  bg.onclick=(e)=>{ if(e.target===bg) done(null); };
  document.addEventListener('keydown',key);
  bg.classList.add('show');
  if(opts.input) setTimeout(()=>{ try{ inp.focus(); inp.select(); }catch(_){} },30);
}
function uiConfirm(msg,o){ o=o||{}; return new Promise(r=>openDialog({title:o.title||(LANG==='de'?'Bestätigen':'Confirm'),msg,ok:o.ok||(LANG==='de'?'Bestätigen':'Confirm'),cancel:o.cancel,danger:o.danger},v=>r(v!==null))); }
function uiPrompt(msg,o){ o=o||{}; return new Promise(r=>openDialog({title:o.title||'',msg,def:o.def||'',input:true,ok:o.ok||'OK',cancel:o.cancel},v=>r(v))); }
function uiAlert(msg,o){ o=o||{}; return new Promise(r=>openDialog({title:o.title||(LANG==='de'?'Hinweis':'Notice'),msg,cancel:null,ok:o.ok||'OK'},()=>r())); }

/* ---------- Sektions-Navigation (im linken Behandlungsfeld) ---------- */
const SEC_NAV_ITEMS=[
  {id:'step1',label:'1',de:'Stammdaten',en:'Master data'},
  {id:'step2',label:'2',de:'Reise',en:'Travel'},
  {id:'step3',label:'3',de:'Immunstatus',en:'Immune status'},
  {id:'step4',label:'4',de:'Impfstatus',en:'Vaccination status'},
  {id:'step5',label:'5',de:'Geplante Impfungen',en:'Planned'}
];
function secNavHtml(){
  const vis=SEC_NAV_ITEMS.filter(it=>{const e=el(it.id); return e && e.offsetParent!==null;});
  return vis.map(it=>'<button type="button" data-target="'+it.id+'" onclick="secNavJump(\''+it.id+'\')"><span class="sn-dot">'+it.label+'</span><span class="sn-lbl">'+(LANG==='de'?it.de:it.en)+'</span></button>').join('');
}
function secNavJump(id){ const e=el(id); if(e) try{ e.scrollIntoView({behavior:'smooth',block:'start'}); }catch(err){} }
function updateSecNav(){
  const nav=el('treat-panel'); if(!nav) return;
  const btns=nav.querySelectorAll('.tp-sections button'); if(!btns.length) return;
  const mid=window.innerHeight*0.32; let activeId=null;
  btns.forEach(b=>{const e=el(b.dataset.target); if(!e||e.offsetParent===null) return;
    const r=e.getBoundingClientRect(); if(r.top<=mid) activeId=b.dataset.target;});
  if(!activeId) activeId=btns[0].dataset.target;
  btns.forEach(b=>b.classList.toggle('active', b.dataset.target===activeId));
}
window.addEventListener('scroll',()=>{ updateSecNav(); },{passive:true});

/* ---------- Kiosk (Patientenaccount) ---------- */
var kioskStep = 1;
function kioskUpdateView(){
  if(document.body.classList.contains('clinic')) return;
  ['step1','step2','step3'].forEach((id,idx)=>{
    const e = document.getElementById(id);
    if(e) e.style.display = (idx+1 === kioskStep) ? 'block' : 'none';
  });
  const prev = document.getElementById('kiosk-prev');
  const next = document.getElementById('kiosk-next');
  const sub = document.getElementById('kiosk-submit');
  const hint = document.getElementById('kiosk-hint');
  if(prev) prev.style.display = (kioskStep > 1) ? 'block' : 'none';
  if(next) next.style.display = (kioskStep < 3) ? 'block' : 'none';
  if(sub) sub.style.display = (kioskStep === 3) ? 'block' : 'none';
  if(hint) hint.style.display = (kioskStep === 1) ? 'block' : 'none';
}
function kioskNext(){ if(kioskStep < 3){ kioskStep++; kioskUpdateView(); window.scrollTo({top:0,behavior:'smooth'}); } }
function kioskPrev(){ if(kioskStep > 1){ kioskStep--; kioskUpdateView(); window.scrollTo({top:0,behavior:'smooth'}); } }

async function kioskSubmit(){
  const ok = await savePatient();
  if(ok){
    try{window.scrollTo({top:0,behavior:'smooth'});}catch(e){}
    await uiAlert(LANG==='de'?'Vielen Dank! Ihre Angaben wurden übermittelt.':'Thank you! Your data has been submitted.',{title:LANG==='de'?'Übermittelt':'Submitted'});
    showIntakeChoice();   // für den nächsten Patienten wieder die Auswahl zeigen
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
  if(isAdmin){ renderAdminUsers(); }
  p.classList.add('show');
}
function openSettings(){ openAdminPanel(); }
function closeAdminPanel(){ const p=el('admin-panel'); if(p) p.classList.remove('show'); }
function adminMsg(text,type){ const e=el('admin-msg'); if(e) e.innerHTML = text?('<div class="msg '+(type||'err')+'">'+text+'</div>'):''; }

// Nutzer-Board: Spalten „Pending" + Rollen; Freischalten per Drag&Drop
const ADMIN_BOARD=[
  {role:'', de:'Wartet auf Freischaltung', en:'Awaiting approval'},
  {role:'admin', de:'Admin', en:'Admin'},
  {role:'arzt', de:'Arzt / Ärztin', en:'Doctor'},
  {role:'mfa', de:'MFA', en:'MFA'},
  {role:'kasse', de:'Kasse', en:'Reception'}
];
let _adminUsers=[];
async function renderAdminUsers(){
  const box=el('admin-users'); if(!box) return;
  const { data, error } = await adminListUsers();
  if(error){ box.innerHTML='<div class="msg err">'+(error.message||error)+'</div>'; return; }
  _adminUsers=data||[];
  const activeUsers = _adminUsers.filter(u => !u.deleted_at);
  const deletedUsers = _adminUsers.filter(u => u.deleted_at);
  const byRole={}; activeUsers.forEach(u=>{const k=u.role||''; (byRole[k]=byRole[k]||[]).push(u);});
  let html='';
  ADMIN_BOARD.forEach(col=>{
    const list=byRole[col.role]||[];
    const pending=col.role==='';
    html+='<div class="ab-sec'+(pending?' ab-pending':'')+'" data-role="'+col.role+'" ondragover="adminColOver(event)" ondragleave="adminColLeave(event)" ondrop="adminColDrop(event)">';
    html+='<div class="ab-sec-h">'+(LANG==='de'?col.de:col.en)+' <span class="count-pill">'+list.length+'</span></div>';
    html+='<div class="ab-rows">';
    if(!list.length){ html+='<div class="ab-empty">'+(pending?(LANG==='de'?'Keine offenen Registrierungen':'None'):(LANG==='de'?'Person hierher ziehen …':'Drop person here …'))+'</div>'; }
    list.forEach(u=>{
      const nm=((u.title?u.title+' ':'')+(u.full_name||'—')).trim();
      html+='<div class="ab-row" draggable="true" data-uid="'+u.id+'" ondragstart="adminUserDragStart(event,\''+u.id+'\')">'+initialsCircle(u.full_name||u.email,u.role,u.gender)+'<div class="ab-main"><div class="ab-name">'+_esc(nm)+'</div><div class="ab-sub">'+_esc(u.email||'')+' · '+genderLabel(u.gender,'de')+'</div></div><span class="icon-btn del" title="Zugang deaktivieren" onclick="adminSoftDeleteUI(\''+u.id+'\')">✕</span></div>';
    });
    html+='</div></div>';
  });
  if(deletedUsers.length > 0) {
    html+='<div class="ab-sec">';
    html+='<div class="ab-sec-h" style="cursor:pointer; display:flex; justify-content:space-between;" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display===\'none\'?\'block\':\'none\'"><div>Entfernt <span class="count-pill">'+deletedUsers.length+'</span></div><span style="font-size:0.8em;opacity:0.6">▼</span></div>';
    html+='<div class="ab-rows" style="display:none;">';
    deletedUsers.forEach(u=>{
      const nm=((u.title?u.title+' ':'')+(u.full_name||'—')).trim();
      html+='<div class="ab-row" style="opacity:0.8;">'+initialsCircle(u.full_name||u.email,u.role,u.gender)+'<div class="ab-main"><div class="ab-name" style="text-decoration:line-through;">'+_esc(nm)+'</div><div class="ab-sub">'+_esc(u.email||'')+'</div></div><span class="icon-btn del" title="Komplett löschen" onclick="adminHardDeleteUI(\''+u.id+'\')">✕</span></div>';
    });
    html+='</div></div>';
  }
  box.innerHTML=html;
}
let _adminDragUid=null;
function adminUserDragStart(e,uid){ _adminDragUid=uid; try{e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',uid);}catch(_){}}
function adminColOver(e){ e.preventDefault(); e.currentTarget.classList.add('drag-over'); }
function adminColLeave(e){ e.currentTarget.classList.remove('drag-over'); }
async function adminColDrop(e){
  e.preventDefault(); e.currentTarget.classList.remove('drag-over');
  let uid=_adminDragUid; if(!uid){try{uid=e.dataTransfer.getData('text/plain');}catch(_){}} _adminDragUid=null;
  if(!uid) return;
  const role=e.currentTarget.dataset.role||'';
  const u=_adminUsers.find(x=>x.id===uid); if(u && (u.role||'')===role) return;   // keine Änderung
  if(uid===(CURRENT_PROFILE&&CURRENT_PROFILE.id) && role!=='admin'){ adminMsg('Sie können Ihre eigene Admin-Rolle nicht ändern.','err'); return; }
  const { error } = await adminSetRole(uid, role);
  if(error){ adminMsg('Fehler: '+(error.message||error),'err'); return; }
  adminMsg(role?('Nutzer freigeschaltet: '+(roleLabel(role,'de'))+'.'):'Nutzer auf „Wartet auf Freischaltung" gesetzt.','ok');
  renderAdminUsers();
}
async function adminSoftDeleteUI(uid){
  if(uid===(CURRENT_PROFILE&&CURRENT_PROFILE.id)){ adminMsg('Sie können Ihren eigenen Zugang nicht deaktivieren.','err'); return; }
  const u=_adminUsers.find(x=>x.id===uid); const nm=u?((u.full_name||u.email||'')):'';
  if(!(await uiConfirm('Zugang von „'+nm+'" deaktivieren? Der Datensatz bleibt 30 Tage erhalten und wird dann automatisch gelöscht.',{title:'Zugang deaktivieren',ok:'Deaktivieren',danger:true}))) return;
  const { error } = await adminSoftDeleteUser(uid);
  if(error){ adminMsg('Fehler: '+(error.message||error),'err'); return; }
  adminMsg('Zugang deaktiviert.','ok');
  renderAdminUsers();
}
async function adminHardDeleteUI(uid){
  const u=_adminUsers.find(x=>x.id===uid); const nm=u?((u.full_name||u.email||'')):'';
  if(!(await uiConfirm('Nutzer „'+nm+'" komplett aus dem System löschen? Dies kann nicht rückgängig gemacht werden.',{title:'Komplett löschen',ok:'Endgültig löschen',danger:true}))) return;
  const { error } = await adminHardDeleteUser(uid);
  if(error){ adminMsg('Fehler: '+(error.message||error),'err'); return; }
  adminMsg('Nutzer endgültig gelöscht.','ok');
  renderAdminUsers();
}

/* ---------- INIT ---------- */
buildDestSelect();freshVaxState();setLang('de');recompute();renderPatients();