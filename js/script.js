/* ============================================================
   CHARITÉ REISEIMPF-ASSISTENT — Mockup v3
   STIKO · Verfügbare Impfstoffe Reisemed. Ambulanz Berlin 11/2025
   RKI Immunsuppression · CDC Chikungunya Q2/2026 · AA Deep-Links
   ============================================================ */
let LANG='de';
const IL_FR={"Masern, Mumps, Röteln": "Rougeole, oreillons, rubéole", "Klicken Sie auf Impfstoffe, um sie in den Terminplan aufzunehmen.": "Cliquez sur les vaccins pour les ajouter au calendrier.", "Noch keine Impfungen zur Planung markiert.": "Aucun vaccin marqué pour la planification.", "Zeit reicht evtl. nicht!": "Le temps est peut-être insuffisant !", "Benötigte Zeit vor Ort: ca.": "Temps nécessaire sur place : env.", "Tage": "jours", "Wochen": "semaines", "Termin löschen": "Supprimer le rendez-vous", "Fertig": "Terminé", "Unabhängig": "Indépendant", "Mindestabstand:": "Intervalle minimal :", "Abstand (Wochen):": "Intervalle (semaines) :", "Heute (0 Wochen)": "Aujourd'hui (0 semaine)", "Heute": "Aujourd'hui", "1 Monat": "1 mois", "1 Woche": "1 semaine", "In Kürze": "Prochainement", "Termin ": "Rendez-vous ", "nach vorheriger Dosis": "après la dose précédente", "Flexibel terminierbar": "Planifiable librement", "Bearbeiten": "Modifier", "Impfung entfernen": "Retirer le vaccin", "Impfungen hierhin ziehen": "Glisser les vaccins ici", "Charité-Termin": "Rendez-vous Charité", "Externer Termin": "Rendez-vous externe", "Viele (≥5) Impfungen an einem Tag geplant. Es wird empfohlen, die Impfungen besser aufzuteilen.": "De nombreux (≥5) vaccins prévus le même jour. Il est recommandé de mieux les répartir.", "Bei Lebendimpfstoffen gilt: Entweder am selben Tag impfen oder mind. 4 Wochen Abstand einhalten.": "Pour les vaccins vivants : soit le même jour, soit un intervalle d'au moins 4 semaines.", "Medikamenten-Übersicht (VacCheck · DTG 2026)": "Aperçu des médicaments (VacCheck · DTG 2026)", "Ihre Medikamente": "Vos médicaments", "Entfernen": "Retirer", "nicht in DB": "absent de la base", "Immunsuppressive Wirkung manuell prüfen.": "Vérifier manuellement l'effet immunosuppresseur.", "unkritisch": "non critique", "Immunsuppressivum": "Immunosuppresseur", "Substanzklasse": "Classe de substance", "Lebendimpfung": "Vaccin vivant", "Therapiepause": "Pause thérapeutique", "Totimpfstoff-Antwort": "Réponse au vaccin inactivé", "Land wählen": "Choisir un pays", "Länder": "Pays", "Überseegebiete": "Territoires d'outre-mer", "nur „zuletzt geimpft\" →": "seulement « dernière vaccination » →", "Extern: ": "Externe : ", "Extern": "Externe", "Verbreitungskarte": "Carte de répartition", "K": "C", "Dringend empfohlen": "Fortement recommandé", "Bisher keine Impfung erfolgt": "Aucune vaccination effectuée à ce jour", "Altersgerechte, laufende Grundimmunisierung": "Primovaccination en cours, adaptée à l'âge", "GI TDaP komplett": "Primovacc. TDaP complète", "GI IPV komplett": "Primovacc. VPI complète", "Hexavalent-Dosen (Kindheit):": "Doses hexavalentes (enfance) :", "Jahr": "Année", "Kombi-Schnelleingabe": "Saisie rapide combinée", "Letzte Td": "Dernier Td", "Letzte aP": "Dernier aP", "Letzte IPV": "Dernier VPI", "Basis-Impfschutz": "Protection vaccinale de base", "Vorimpfungen": "Vaccinations antérieures", "Hinweis auf Immundefizienz – Lebendimpfstoffe kontraindiziert/prüfen": "Signe d'immunodéficience – vaccins vivants contre-indiqués/à vérifier", "Immunsuppressiv: ": "Immunosuppresseur : ", "Keine immunsuppressiven Medikamente erkannt.": "Aucun médicament immunosuppresseur détecté.", "Schwangerschaft": "Grossesse", "Immundefizienz": "Immunodéficience", "Lebendimpfstoffe – kontraindiziert / Vorsicht": "Vaccins vivants – contre-indiqués / prudence", "Falls indiziert: Lebendimpfung möglichst ≥4 Wochen vor Therapiebeginn; Details je Substanz siehe Medikamenten-Übersicht.": "Si indiqué : vaccin vivant de préférence ≥4 semaines avant le début du traitement ; détails par substance dans l'aperçu des médicaments.", "Mon.": "mois", "J.": "ans", "Jahre": "ans", "geb.": "né(e)", "Tage bis Abreise: ": "Jours avant le départ : ", "<b>Akute Erkrankung:</b> Impfung bei behandlungsbedürftiger akuter Erkrankung (≥38,5 °C) verschieben; leichte Infekte ohne Fieber sind i. d. R. kein Hindernis.": "<b>Maladie aiguë :</b> reporter la vaccination en cas de maladie aiguë nécessitant un traitement (≥38,5 °C) ; les infections légères sans fièvre ne sont généralement pas un obstacle.", "<b>Thrombose / Antikoagulation:</b> i. m. Injektion mit sehr feiner Kanüle, danach ≥2 Min. komprimieren; ggf. Rücksprache bei hoher Blutungsneigung.": "<b>Thrombose / anticoagulation :</b> injection i.m. avec une aiguille très fine, puis comprimer ≥2 min ; consulter en cas de tendance hémorragique élevée.", "<b>Ohnmachtsneigung:</b> im Liegen impfen und anschließend ≥15 Min. nachbeobachten.": "<b>Tendance à l'évanouissement :</b> vacciner en position allongée puis surveiller ≥15 min.", "Hinweise zur Durchführung": "Consignes de réalisation", "Verfügbarkeit & Alter (Ambulanz)": "Disponibilité et âge (consultation)", "Vereinfachte Kurzinformation für das Patientengespräch": "Information brève simplifiée pour l'entretien avec le patient", "de": "fr", "Karte noch nicht hinterlegt.": "Carte pas encore disponible.", "Geografische Verbreitung": "Répartition géographique", "Änderungsprotokoll": "Journal des modifications", "Patient löschen": "Supprimer le patient", "Löschen": "Supprimer", "Keine Impfungen für heute geplant.": "Aucun vaccin prévu aujourd'hui.", "Als MFA können Sie keine Beratung übernehmen. Nur Ärztinnen/Ärzte führen Beratungen durch.": "En tant qu'AM, vous ne pouvez pas prendre en charge une consultation. Seuls les médecins réalisent les consultations.", "Behandlung abschließen und Patient nach „Behandelt\" verschieben?": "Terminer la prise en charge et déplacer le patient vers « Traité » ?", "Behandlung abschließen": "Terminer la prise en charge", "Abschließen": "Terminer", "Gruppen-/Familienname (leer = Gruppe entfernen):": "Nom de groupe/famille (vide = retirer le groupe) :", "Gruppe": "Groupe", "Gruppieren": "Grouper", "In Behandlung nehmen": "Prendre en charge", "Gruppe in Behandlung nehmen": "Prendre le groupe en charge", "gerade eben": "à l'instant", "Arzt": "Médecin", "Ärztin": "Médecin", "Arzt / Ärztin": "Médecin", "Kasse": "Accueil/Facturation", "Hierher ziehen …": "Glisser ici …", "Gelöscht": "Supprimé", "gelöscht von ": "supprimé par ", "Wiederherstellen": "Restaurer", "Woche": "semaine", "Mon": "mois", "Ja": "Oui", "Stillend": "Allaitement", "Geplant": "Planifié", "Nein": "Non", "Reisedauer": "Durée du voyage", "Reiseziel(e)": "Destination(s)", "Allergien": "Allergies", "Chron. Erkrankung": "Maladie chron.", "Medikamente": "Médicaments", "In Behandlung": "En traitement", "Ambulanzliste": "Liste de la consultation", "Gruppe: ": "Groupe : ", "Kein Patient in Behandlung.": "Aucun patient en traitement.", "Behandelt": "Traité", "Behandeln": "Traiter", "(ganze Gruppe ziehen)": "(glisser tout le groupe)", "Impfstatus": "Statut vaccinal", "Kein Impfstatus erfasst.": "Aucun statut vaccinal saisi.", "Geplante Impfungen": "Vaccins planifiés", "Keine Impfungen": "Aucun vaccin", "Keine Impfungen geplant.": "Aucun vaccin planifié.", "Kommentar": "Commentaire", "geändert": "modifié", "wartet ": "en attente ", "von mir": "par moi", "Entgruppieren": "Dégrouper", "Schnellansicht": "Aperçu rapide", "geb. ": "né(e) ", "Uhr": "h", "Abreise": "Départ", "Erstellt": "Créé", "Hausarzt/Extern": "Médecin traitant/externe", "Keine Impfungen zugeordnet": "Aucun vaccin attribué", "Zeit reicht evtl. nicht – Schnellschema/Priorisierung prüfen.": "Temps peut-être insuffisant – vérifier schéma rapide/priorisation.", "Angegeben sind Mindestabstände, keine festen Termine. Bitte Folgetermine selbst über Doctolib buchen.": "Ce sont des intervalles minimaux, pas des rendez-vous fixes. Veuillez réserver les rendez-vous de suivi via Doctolib.", "Bitte Pop-ups erlauben, um den Impfplan zu drucken.": "Veuillez autoriser les fenêtres pop-up pour imprimer le plan de vaccination.", "Bearbeitung aktiv": "Modification active", "Neuer Patient": "Nouveau patient", "Bearbeitung wirklich abbrechen? Nicht gespeicherte Änderungen gehen verloren.": "Vraiment annuler la modification ? Les changements non enregistrés seront perdus.", "Bearbeitung abbrechen": "Annuler la modification", "Verwerfen": "Abandonner", "Abbrechen": "Annuler", "Bestätigen": "Confirmer", "Hinweis": "Remarque", "Vielen Dank! Ihre Angaben wurden übermittelt.": "Merci ! Vos informations ont été transmises.", "Übermittelt": "Transmis", "Keine offenen Registrierungen": "Aucune inscription en attente", "Person hierher ziehen …": "Glisser une personne ici …"};
function LX(de,en){return LANG==='de'?de:(LANG==='fr'?(IL_FR[de]||en):en);}

const I18N={
 appTitle:{de:'Reisemedizinische Ambulanz',en:'Travel Medicine Clinic'},appSub:{de:'Institut für Internationale Gesundheit · Reiseimpf-Assistent',en:'Institute of International Health · Travel Vaccination Assistant'},
 fFirstname:{de:'Vorname',en:'First name'},fPhone:{de:'Telefon',en:'Phone'},fInsurance:{de:'Krankenkasse',en:'Health insurance'},fProfession:{de:'Beruf (freiwillig)',en:'Profession (optional)'},fAddress:{de:'Anschrift',en:'Address'},fZip:{de:'PLZ',en:'Postal code'},fCity:{de:'Wohnort',en:'City'},
 fMeds:{de:'Aktuelle Medikamente (welche?)',en:'Current medication (which?)'},fRecentVax:{de:'Impfung/Injektion in den letzten 4 Wochen (welche, wann?)',en:'Vaccination/injection in the last 4 weeks (which, when?)'},fAcute:{de:'Akute Erkrankung (z. B. fieberhafter Infekt)',en:'Acute illness (e.g. febrile infection)'},fThrombosis:{de:'Thrombose in der Vorgeschichte',en:'History of thrombosis'},fFaint:{de:'Ohnmacht bei Impfung/Blutabnahme',en:'Weakness/fainting during vaccination/blood draw'},
 adminBack:{de:'Zurück',en:'Back'},adminTitle:{de:'Nutzerverwaltung',en:'User management'},settingsTitle:{de:'Einstellungen',en:'Settings'},setGeneral:{de:'Allgemein',en:'General'},setTreatModeDesc:{de:'Standard-Behandlungsart, wenn du einen Patienten in Behandlung nimmst.',en:'Default treatment type when you take a patient into treatment.'},treatBeratung:{de:'Beratung',en:'Consultation'},treatFolge:{de:'Folgeimpfung',en:'Follow-up vaccination'},adminNewUser:{de:'Neuen Nutzer anlegen',en:'Create new user'},adminNewDesc:{de:'Der Nutzer erhält Zugriff, sobald er sich mit dieser E-Mail über die Registrierungsseite ein Passwort vergibt.',en:'The user gains access once they set a password with this email via the registration page.'},adminUserList:{de:'Angelegte Nutzer',en:'Created users'},
 fEmail:{de:'E-Mail',en:'Email'},fTitle:{de:'Titel',en:'Title'},fRole:{de:'Funktion',en:'Role'},fFullname:{de:'Name (Vor- und Nachname)',en:'Name (first and last)'},fGender:{de:'Geschlecht',en:'Gender'},btnCreateUser:{de:'Nutzer anlegen',en:'Create user'},
 thName:{de:'Name',en:'Name'},thTitle:{de:'Titel',en:'Title'},thGender:{de:'Geschlecht',en:'Gender'},thRole:{de:'Funktion',en:'Role'},thStatusReg:{de:'Status',en:'Status'},
 kasseTitle:{de:'Kasse',en:'Reception / Billing'},kasseDesc:{de:'Für die Rolle „Kasse" ist derzeit keine Funktion hinterlegt.',en:'No function is assigned to the "Reception/Billing" role yet.'},
 kioskHint:{de:'Bitte füllen Sie Ihre Angaben aus und senden Sie sie ab.',en:'Please fill in your details and submit.'},kioskSubmit:{de:'Daten absenden',en:'Submit data'},
 subMasterData:{de:'Stammdaten',en:'Master data'},subTravel:{de:'Reisedaten',en:'Travel data'},
 fEmailAddr:{de:'E-Mail',en:'Email'},fChronicText:{de:'Chronische Erkrankung / Immundefizienz (welche?)',en:'Chronic illness / immunodeficiency (which?)'},
 fMedication:{de:'Aktuelle Medikamente',en:'Current medication'},optPregnant:{de:'schwanger',en:'pregnant'},optBreastfeeding:{de:'stillend',en:'breastfeeding'},optPlanned:{de:'Schwangerschaft geplant',en:'pregnancy planned'},
 btnNewPatient:{de:'+ Neuer Patient',en:'+ New patient'},backToList:{de:'Zurück zur Ambulanzliste',en:'Back to clinic list'},btnToday:{de:'Heute',en:'Today'},btnFinish:{de:'Behandlung abschließen',en:'Finish treatment'},adminUserListDesc:{de:'Nach Funktion gruppiert.',en:'Grouped by role.'},adminTabletTitle:{de:'Patienten-Tablet (Selbstanmeldung)',en:'Patient tablet (self check-in)'},tabletLockTitle:{de:'Patienteneingabe am Tablet',en:'Patient input on tablet'},adminTabletDesc:{de:'Für das ausgelegte iPad wird kein eigenes Konto benötigt. Auf der Anmeldeseite „Patienten-Tablet öffnen" wählen – das Gerät meldet sich anonym an, und Patienten füllen ihre Daten (Abschnitt 1 & 2) selbst aus. Diese erscheinen anschließend in der Ambulanzliste.',en:'The tablet needs no account. On the login page choose "Open patient tablet" — the device signs in anonymously and patients fill in their data (sections 1 & 2), which then appear in the clinic list.'},
 disclaimer:{de:'Mockup zur Demonstration. Empfehlungen folgen der STIKO-Systematik und ersetzen nicht die ärztliche Beurteilung. Ausbruchs- und Reisehinweise (RKI, Auswärtiges Amt) vor jeder Beratung prüfen; Live-Abruf erfordert eine Server-Anbindung.',en:'Demonstration mockup. Recommendations follow STIKO methodology and do not replace clinical judgement. Verify outbreak/travel advisories (RKI, German Foreign Office) before each consultation; live retrieval needs a server backend.'},
 s1Title:{de:'Stammdaten',en:'Master data'},s1Desc:{de:'Persönliche Daten und Kontakt.',en:'Personal details and contact.'},
 s2Title:{de:'Reise',en:'Travel'},s2Desc:{de:'Reiseziel(e), Aufenthaltsdauer und besondere Bedingungen.',en:'Destination(s), duration and special conditions.'},
 s5Title:{de:'Geplante Impfungen',en:'Planned vaccinations'},s5Desc:{de:'Termine für die ausgewählten Impfungen festlegen.',en:'Set appointments for the selected vaccinations.'},
 s6Title:{de:'Leistungen',en:'Services'},s6Desc:{de:'Dokumentation der heute erbrachten Leistungen für die Abrechnung.',en:'Documentation of services provided today for billing.'},priceBtn:{de:'Preise',en:'Prices'},
 leistVaxToday:{de:'Impfungen heute',en:'Vaccinations today'},leistBeratHead:{de:'Beratung & Untersuchung',en:'Consultation & examination'},leistWeitereHead:{de:'Weitere Leistungen',en:'Other services'},
 leistBeratplan:{de:'Beratung mit Impfplan & Impftauglichkeit',en:'Consultation with vaccination plan & fitness'},leistBeratRezept:{de:'Beratung, ggf. mit Rezept',en:'Consultation, possibly with prescription'},leistBeratLang:{de:'Ausführliche Beratung > 20 min',en:'Detailed consultation > 20 min'},leistKeineBerat:{de:'Keine Beratung',en:'No consultation'},
 leistFolge:{de:'Folgeverordnung',en:'Follow-up prescription'},leistBescheinigung:{de:'Bescheinigung – Impfheft / Impfbefreiung',en:'Certificate – vaccination record / exemption'},leistImpf:{de:'Impfleistung',en:'Vaccination service'},leistWarn:{de:'Keine Leistung erfasst',en:'No service recorded'},
 kasseBillTitle:{de:'Abrechnung',en:'Billing'},kasseNoItems:{de:'Noch keine abrechenbaren Leistungen.',en:'No billable services yet.'},kassePriceManual:{de:'Preis manuell (Aushang)',en:'price manual (see notice)'},kasseTotal:{de:'Gesamtbetrag',en:'Total amount'},kasseUnpricedNote:{de:'Für mit „+" markierte Leistungen ist kein Festpreis hinterlegt – bitte Aushang/Homepage prüfen.',en:'Services marked "+" have no fixed price on file — please check the notice/homepage.'},kassePayTitle:{de:'Zahlungsart',en:'Payment method'},kassePaidTitle:{de:'Zahlungsstatus',en:'Payment status'},kassePaid:{de:'Bezahlt',en:'Paid'},kasseUnpaid:{de:'Nicht bezahlt',en:'Not paid'},priceInfoTitle:{de:'Preisübersicht',en:'Price list'},priceInfoLeist:{de:'Leistungen',en:'Services'},priceInfoVax:{de:'Impfstoffe (Preis je Injektion)',en:'Vaccines (price per injection)'},priceInfoBtn:{de:'Preise',en:'Prices'},shiftTitle:{de:'Im Dienst',en:'On shift'},kasseSection:{de:'Kasse',en:'Billing'},kasseSignoff:{de:'Zahlung bestätigen & abschließen',en:'Confirm payment & complete'},kassePayRequired:{de:'Bitte zuerst eine Zahlungsart wählen.',en:'Please select a payment method first.'},toKasseConfirm:{de:'Behandlung abschließen und Patient an die Kasse übergeben?',en:'Complete treatment and hand the patient over to billing?'},toKasseBtn:{de:'An Kasse übergeben',en:'Hand over to billing'},
 adminUsersTitle:{de:'Nutzerverwaltung',en:'User management'},adminUsersDesc:{de:'Neue Registrierungen erscheinen unter „Wartet auf Freischaltung". Ziehe eine Person in eine Funktion, um ihr die entsprechenden Rechte zu geben. Das ✕ deaktiviert den Zugang sofort – der Datensatz bleibt 30 Tage erhalten.',en:'New registrations appear under "Awaiting approval". Drag a person into a role to grant the corresponding rights. The ✕ disables access immediately — the record is kept for 30 days.'},
 phAllergy:{de:'z. B. Hühnereiweiß',en:'e.g. egg protein, neomycin'},phMed:{de:'Medikament eingeben…',en:'Enter medication…'},phRecentVax:{de:'Impfung eingeben…',en:'Enter vaccination…'},phChronic:{de:'z. B. Diabetes, Asplenie, HIV, Rheuma …',en:'e.g. diabetes, asplenia, HIV, rheuma …'},
 kioskPrev:{de:'Zurück',en:'Back'},kioskNext:{de:'Weiter',en:'Next'},
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
/* ---- Français (FR) — overlay, merged into I18N below. Untranslated keys fall back to EN via t(). ---- */
const I18N_FR={
 appTitle:'Consultation de médecine des voyages', appSub:'Institut de Santé Internationale · Assistant de vaccination du voyageur',
 fFirstname:'Prénom', fPhone:'Téléphone', fInsurance:'Assurance maladie', fProfession:'Profession (facultatif)', fAddress:'Adresse', fZip:'Code postal', fCity:'Ville',
 fMeds:'Médicaments actuels (lesquels ?)', fRecentVax:'Vaccination/injection au cours des 4 dernières semaines (laquelle, quand ?)', fAcute:'Maladie aiguë (p. ex. infection fébrile)', fThrombosis:'Antécédent de thrombose', fFaint:"Évanouissement lors d'une vaccination/prise de sang",
 adminBack:'Retour', adminTitle:'Gestion des utilisateurs', settingsTitle:'Paramètres', setGeneral:'Général', setTreatModeDesc:'Type de prise en charge par défaut lorsque vous prenez un patient en charge.', treatBeratung:'Consultation', treatFolge:'Vaccination de suivi', adminNewUser:'Créer un utilisateur', adminNewDesc:"L'utilisateur obtient l'accès dès qu'il définit un mot de passe avec cet e-mail via la page d'inscription.", adminUserList:'Utilisateurs créés',
 fEmail:'E-mail', fTitle:'Titre', fRole:'Fonction', fFullname:'Nom (prénom et nom)', fGender:'Sexe', btnCreateUser:"Créer l'utilisateur",
 thName:'Nom', thTitle:'Titre', thGender:'Sexe', thRole:'Fonction', thStatusReg:'Statut',
 kasseTitle:'Accueil / Facturation', kasseDesc:"Aucune fonction n'est encore associée au rôle « Accueil/Facturation ».",
 kioskHint:'Veuillez remplir vos informations et les envoyer.', kioskSubmit:'Envoyer les données',
 subMasterData:'Données personnelles', subTravel:'Données de voyage',
 fEmailAddr:'E-mail', fChronicText:'Maladie chronique / immunodéficience (laquelle ?)',
 fMedication:'Médicaments actuels', optPregnant:'enceinte', optBreastfeeding:'allaitement', optPlanned:'grossesse planifiée',
 btnNewPatient:'+ Nouveau patient', backToList:'Retour à la liste', btnToday:"Aujourd'hui", btnFinish:'Terminer la prise en charge', adminUserListDesc:'Groupés par fonction.', adminTabletTitle:'Tablette patient (auto-enregistrement)', tabletLockTitle:'Saisie patient sur tablette', adminTabletDesc:"La tablette ne nécessite pas de compte. Sur la page de connexion, choisissez « Ouvrir la tablette patient » — l'appareil se connecte de façon anonyme et les patients saisissent eux-mêmes leurs données (sections 1 et 2), qui apparaissent ensuite dans la liste.",
 disclaimer:"Maquette de démonstration. Les recommandations suivent la méthodologie STIKO et ne remplacent pas l'évaluation médicale. Vérifier les alertes épidémiques et de voyage (RKI, ministère des Affaires étrangères) avant chaque consultation ; la consultation en direct nécessite un serveur.",
 s1Title:'Données personnelles', s1Desc:'Coordonnées et contact.',
 s2Title:'Voyage', s2Desc:'Destination(s), durée du séjour et conditions particulières.',
 s5Title:'Vaccinations planifiées', s5Desc:'Définir les rendez-vous pour les vaccinations sélectionnées.',
 s6Title:'Prestations', s6Desc:"Documentation des prestations fournies aujourd'hui pour la facturation.", priceBtn:'Prix',
 leistVaxToday:"Vaccins aujourd'hui", leistBeratHead:'Consultation et examen', leistWeitereHead:'Autres prestations',
 leistBeratplan:"Consultation avec plan vaccinal et aptitude à la vaccination", leistBeratRezept:'Consultation, éventuellement avec ordonnance', leistBeratLang:'Consultation détaillée > 20 min', leistKeineBerat:'Aucune consultation',
 leistFolge:'Prescription de suivi', leistBescheinigung:'Attestation – carnet de vaccination / dispense', leistImpf:'Acte de vaccination', leistWarn:'Aucune prestation saisie',
 kasseBillTitle:'Facturation', kasseNoItems:'Aucune prestation facturable pour le moment.', kassePriceManual:'prix manuel (affichage)', kasseTotal:'Montant total', kasseUnpricedNote:'Les prestations marquées « + » n\'ont pas de prix fixe enregistré — veuillez vérifier l\'affichage/le site.', kassePayTitle:'Mode de paiement', kassePaidTitle:'Statut de paiement', kassePaid:'Payé', kasseUnpaid:'Non payé', priceInfoTitle:'Tarifs', priceInfoLeist:'Prestations', priceInfoVax:'Vaccins (prix par injection)', priceInfoBtn:'Tarifs', shiftTitle:'De service', kasseSection:'Caisse', kasseSignoff:'Confirmer le paiement et clôturer', kassePayRequired:'Veuillez d\'abord choisir un mode de paiement.', toKasseConfirm:'Terminer la prise en charge et transférer le patient à la caisse ?', toKasseBtn:'Transférer à la caisse',
 adminUsersTitle:'Gestion des utilisateurs', adminUsersDesc:"Les nouvelles inscriptions apparaissent sous « En attente d'activation ». Faites glisser une personne dans une fonction pour lui accorder les droits correspondants. Le ✕ désactive l'accès immédiatement – l'enregistrement est conservé 30 jours.",
 phAllergy:"p. ex. blanc d'œuf, néomycine", phMed:'Saisir un médicament…', phRecentVax:'Saisir une vaccination…', phChronic:'p. ex. diabète, asplénie, VIH, rhumatisme …',
 kioskPrev:'Retour', kioskNext:'Suivant',
 fName:'Nom', fDob:'Date de naissance', ageEmpty:'Âge : veuillez saisir la date de naissance',
 fSex:'Sexe', sexF:'féminin', sexM:'masculin', sexD:'divers',
 fDuration:'Durée du séjour', fDeparture:'Date de départ', fDest:'Ajouter une/des destination(s)',
 fDestHint:"Plusieurs destinations possibles. Territoires d'outre-mer séparés (*).",
 fConditions:'Conditions particulières / exposition',
 condRural:'Rural / hébergement sommaire', condAnimal:'Contact animal / grottes / chauves-souris', condHealth:'Santé / contact sanguin', condHajj:'Hajj / Omra (Arabie saoudite)',
 childhoodToggle:'Poursuivre les autres vaccinations standard du calendrier STIKO chez le pédiatre (apparaît dans le plan)',
 s3Title:'Statut immunitaire', s3Desc:"Allergies, grossesse et médicaments pertinents pour l'immunité. Le médicament est vérifié dans une base de données de substances.",
 fPregnant:'Grossesse / allaitement', optNo:'non', optYes:'oui', optPlanning:'planifiée (<3 mois)', optWish:'désir de grossesse (>3 mois)',
 fAllergy:'Allergies', fImmuno:'Traitement immunosuppresseur',
 notesTitle:'Informations pays & santé', notesDesc:'Vaccinations obligatoires, épidémies et conseils sanitaires du ministère des Affaires étrangères (lien par pays).',
 noDest:'Aucune destination sélectionnée.',
 s4Title:'Statut vaccinal', s4Desc:"Saisir les vaccinations antérieures d'un clic (année seulement). Couleur = action requise. Cliquer sur « Planifier » pour les vaccinations à venir.",
 noPlan:'Aucune vaccination planifiée pour le moment.',
 lgRed:'Fortement recommandé', lgYellow:'À envisager', lUseful:'Recommandé (voyage)',
 lGeneral:'Généralement recommandé (STIKO)', lgGreen:'Protégé', lgBlue:'Généralement recommandé', lgGrey:'Non pertinent', lgPlan:'Planifié (pas encore protégé)',
 fChronic:'Maladie chronique', fImmunodef:'Immunodéficience', travelWarn:'Avertissement de voyage du ministère des Affaires étrangères — voyage déconseillé.', sourcesLbl:'Sources :',
 loggedIn:'Connecté :', savedStamp:'Enregistré', physicianLbl:'Praticien',
 serLabel:'Sérologie (titre connu et suffisant / immun)', serMeasles:'IgG rougeole suffisantes', serVzv:'IgG varicelle suffisantes', serHbs:'Anti-HBs suffisants', serHint:'Non coché = inconnu ou insuffisant → vacciner si indiqué.',
 thVax:'Vaccin', thDone:'Vaccinations antérieures', thLast:'Dernière vaccination (année)', thStatus:'Recommandation', thPlan:'Planifier', thSchedule:'Rendez-vous & lieu', thInfo:'Info',
 fComment:'Commentaire / note sur le patient',
 btnReset:'Réinitialiser le formulaire', btnSave:'Enregistrer le patient', btnSaveEdit:'Enregistrer les modifications', btnPrint:'Imprimer le plan', btnCancelEdit:'Annuler la modification',
 listTitle:'Liste de la consultation', listDesc:'', emptyList:'Aucun patient enregistré.',
 icTitle:'Bienvenue à la consultation de médecine des voyages',
 icSub:'Veuillez choisir le motif de votre visite.',
 icBeratung:'Consultation voyage',
 icBeratungDesc:'Pour un conseil en médecine des voyages : vous planifiez un voyage et souhaitez des recommandations sur les vaccinations et les mesures de protection.',
 icFolge:'Vaccination de suivi',
 icFolgeDesc:'Pour les patients déjà conseillés avec rendez-vous : vous venez uniquement pour la prochaine dose de votre série en cours.',
 del:'Supprimer', edit:'Modifier', mandatory:'Obligatoire', live:'Vaccin vivant',
 planToday:"aujourd'hui", planFuture:'planifié',
 mDisease:'Tableau clinique', mEpi:'Épidémiologie', mSide:'Effets indésirables (simplifiés)', mSchedInfo:'Schéma vaccinal (y c. schéma rapide)',
 confirmDel:'Supprimer ce patient ?', needName:'Veuillez saisir le nom et la date de naissance.',
 giLabel:'Primovaccination complète', diseaseLabel:'Maladie contractée', dengueHadLabel:'Dengue antérieure confirmée',
 warnToday3:"Remarque : plus de 3 vaccinations prévues aujourd'hui — tenir compte de la tolérance/de l'ordre.",
 warnToday5:"Remarque : nombreuses (≥5) vaccinations aujourd'hui — envisager de les répartir sur plusieurs rendez-vous.",
 editingNow:'Modification du patient : ', aaLinkTxt:'Conseils voyage & santé (min. Affaires étrangères) ↗',
 healthLive:'Consultation santé en direct : intégration serveur requise.',
 provCharite:'Charité Médecine des voyages', provGP:'Médecin traitant', provPaed:'Pédiatre',
 hepA:'Hép A', hepB:'Hép B',
 printTitle:'Plan de vaccination', printToday:"Administré aujourd'hui", printFuture:'Rendez-vous de suivi planifiés', printNone:'Aucune entrée.',
 printDoctolib:'Veuillez réserver vous-même vos rendez-vous de suivi via Doctolib.',
 printCharite:'Les vaccinations marquées « Charité » sont réalisées à la consultation de médecine des voyages.',
 printChildhood:'Vaccinations standard/primovaccination selon le calendrier STIKO — à poursuivre chez le pédiatre.'
};
for(const k in I18N_FR){ if(I18N[k]) I18N[k].fr=I18N_FR[k]; }
function t(k){const e=I18N[k];return e?(e[LANG]||e.en||e.de):k;}

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
/* French country names (destination picker / chips). cName() picks by LANG with EN fallback. */
const COUNTRY_FR={AT:'Autriche',BE:'Belgique',CH:'Suisse',DE:'Allemagne',DK:'Danemark',ES:'Espagne',FI:'Finlande',FR:'France',GB:'Royaume-Uni',GR:'Grèce',IE:'Irlande',IS:'Islande',IT:'Italie',LU:'Luxembourg',MT:'Malte',NL:'Pays-Bas',NO:'Norvège',PT:'Portugal',SE:'Suède',CY:'Chypre',AL:'Albanie',AM:'Arménie',AZ:'Azerbaïdjan',BA:'Bosnie-Herzégovine',BG:'Bulgarie',BY:'Biélorussie',CZ:'Tchéquie',EE:'Estonie',GE:'Géorgie',HR:'Croatie',HU:'Hongrie',KZ:'Kazakhstan',KG:'Kirghizistan',LT:'Lituanie',LV:'Lettonie',MD:'Moldavie',ME:'Monténégro',MK:'Macédoine du Nord',PL:'Pologne',RO:'Roumanie',RS:'Serbie',RU:'Russie',SI:'Slovénie',SK:'Slovaquie',TJ:'Tadjikistan',TM:'Turkménistan',UA:'Ukraine',UZ:'Ouzbékistan',XK:'Kosovo',AE:'Émirats arabes unis',BH:'Bahreïn',DZ:'Algérie',EG:'Égypte',IL:'Israël',IQ:'Irak',IR:'Iran',JO:'Jordanie',KW:'Koweït',LB:'Liban',LY:'Libye',MA:'Maroc',OM:'Oman',PS:'Palestine',QA:'Qatar',SA:'Arabie saoudite',SY:'Syrie',TN:'Tunisie',TR:'Turquie',YE:'Yémen',AO:'Angola',BF:'Burkina Faso',BI:'Burundi',BJ:'Bénin',BW:'Botswana',CD:'RD Congo',CF:'Rép. centrafricaine',CG:'Congo',CI:'Côte d\'Ivoire',CM:'Cameroun',CV:'Cap-Vert',DJ:'Djibouti',ER:'Érythrée',ET:'Éthiopie',GA:'Gabon',GH:'Ghana',GM:'Gambie',GN:'Guinée',GQ:'Guinée équatoriale',GW:'Guinée-Bissau',KE:'Kenya',KM:'Comores',LR:'Liberia',LS:'Lesotho',MG:'Madagascar',ML:'Mali',MR:'Mauritanie',MU:'Maurice',MW:'Malawi',MZ:'Mozambique',NA:'Namibie',NE:'Niger',NG:'Nigeria',RW:'Rwanda',SC:'Seychelles',SD:'Soudan',SL:'Sierra Leone',SN:'Sénégal',SO:'Somalie',SS:'Soudan du Sud',ST:'Sao Tomé-et-Principe',SZ:'Eswatini',TD:'Tchad',TG:'Togo',TZ:'Tanzanie',UG:'Ouganda',ZA:'Afrique du Sud',ZM:'Zambie',ZW:'Zimbabwe',AF:'Afghanistan',BD:'Bangladesh',BT:'Bhoutan',IN:'Inde',LK:'Sri Lanka',MV:'Maldives',NP:'Népal',PK:'Pakistan',BN:'Brunei',ID:'Indonésie',KH:'Cambodge',LA:'Laos',MM:'Birmanie',MY:'Malaisie',PH:'Philippines',SG:'Singapour',TH:'Thaïlande',TL:'Timor oriental',VN:'Viêt Nam',CN:'Chine',JP:'Japon',KP:'Corée du Nord',KR:'Corée du Sud',MN:'Mongolie',TW:'Taïwan',CA:'Canada',US:'États-Unis',BS:'Bahamas',BZ:'Belize',CR:'Costa Rica',CU:'Cuba',DO:'République dominicaine',GT:'Guatemala',HN:'Honduras',HT:'Haïti',JM:'Jamaïque',MX:'Mexique',NI:'Nicaragua',PA:'Panama',SV:'Salvador',TT:'Trinité-et-Tobago',BB:'Barbade',LC:'Sainte-Lucie',GD:'Grenade',DM:'Dominique',AR:'Argentine',BO:'Bolivie',BR:'Brésil',CL:'Chili',CO:'Colombie',EC:'Équateur',GY:'Guyana',PE:'Pérou',PY:'Paraguay',SR:'Suriname',UY:'Uruguay',VE:'Venezuela',AU:'Australie',FJ:'Fidji',NZ:'Nouvelle-Zélande',PG:'Papouasie-Nouvelle-Guinée',SB:'Îles Salomon',VU:'Vanuatu',WS:'Samoa',TO:'Tonga',KI:'Kiribati',FM:'Micronésie',GF:'Guyane française',MQ:'Martinique',GP:'Guadeloupe',RE:'La Réunion',YT:'Mayotte',PF:'Polynésie française',NC:'Nouvelle-Calédonie',PR:'Porto Rico',VI:'Îles Vierges américaines',AW:'Aruba',CW:'Curaçao',KY:'Îles Caïmans',GU:'Guam',HK:'Hong Kong',MO:'Macao',GL:'Groenland',BM:'Bermudes',CK:'Îles Cook',AD:'Andorre',AG:'Antigua-et-Barbuda',AI:'Anguilla',AS:'Samoa américaines',AX:'Îles Åland',BL:'Saint-Barthélemy',BQ:'Bonaire, Saint-Eustache et Saba',CC:'Îles Cocos',CX:'Île Christmas',EH:'Sahara occidental',FK:'Îles Malouines',FO:'Îles Féroé',GG:'Guernesey',GI:'Gibraltar',IM:'Île de Man',JE:'Jersey',KN:'Saint-Kitts-et-Nevis',LI:'Liechtenstein',MC:'Monaco',MF:'Saint-Martin',MH:'Îles Marshall',MP:'Îles Mariannes du Nord',MS:'Montserrat',NF:'Île Norfolk',NR:'Nauru',NU:'Niue',PM:'Saint-Pierre-et-Miquelon',PN:'Pitcairn',PW:'Palaos',SH:'Sainte-Hélène',SJ:'Svalbard et Jan Mayen',SM:'Saint-Marin',SX:'Sint Maarten',TC:'Îles Turques-et-Caïques',TK:'Tokelau',TV:'Tuvalu',VA:'Saint-Siège (Vatican)',VC:'Saint-Vincent-et-les-Grenadines',VG:'Îles Vierges britanniques',WF:'Wallis-et-Futuna'};
function cName(c){ if(!c) return ''; return LANG==='de'?c.de:(LANG==='fr'?(COUNTRY_FR[c.code]||c.en):c.en); }

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
 TH:{stand:'Stand 11/2025 · Demo-Auszug',de:'Durchfallerkrankungen häufigste Reisekrankheit – nur sicheres Trinkwasser. Dengue landesweit, v.a. Regenzeit.',en:'Diarrhoeal disease most common—safe water only. Dengue nationwide, esp. rainy season.',fr:'Les diarrhées sont la maladie du voyageur la plus fréquente – uniquement de l\'eau potable sûre. Dengue dans tout le pays, surtout en saison des pluies.'},
 IN:{stand:'Stand 11/2025 · Demo-Auszug',de:'Hohes Risiko für Durchfall/Typhus, Dengue und Tollwut. Luftverschmutzung in Großstädten.',en:'High risk of diarrhoea/typhoid, dengue and rabies. Air pollution in megacities.',fr:'Risque élevé de diarrhée/typhoïde, dengue et rage. Pollution de l\'air dans les mégapoles.'},
 BO:{stand:'Stand Q2/2026 · Demo-Auszug',de:'Aktueller Chikungunya-Ausbruch (Santa Cruz, Cochabamba). Gelbfieber im Tiefland. Höhenkrankheit im Altiplano.',en:'Active chikungunya outbreak (Santa Cruz, Cochabamba). Yellow fever in lowlands. Altitude sickness on the Altiplano.',fr:'Épidémie de chikungunya en cours (Santa Cruz, Cochabamba). Fièvre jaune dans les basses terres. Mal des montagnes sur l\'Altiplano.'},
 BR:{stand:'Stand Q2/2026 · Demo-Auszug',de:'Dengue/Chikungunya landesweit erhöht. Gelbfieber in weiten Teilen. Tollwutrisiko (auch Fledermäuse).',en:'Dengue/chikungunya elevated nationwide. Yellow fever across large areas. Rabies risk (incl. bats).',fr:'Dengue/chikungunya en hausse dans tout le pays. Fièvre jaune sur de vastes zones. Risque de rage (y compris chauves-souris).'},
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
// Recommendation-category labels (engine categories -> badge text). FR falls back to EN for now.
const CATLBL={
 'Pflicht':{de:'Pflicht',en:'Mandatory',fr:'Obligatoire'},
 'Dringend empfohlen':{de:'Dringend empfohlen',en:'Strongly recommended',fr:'Fortement recommandé'},
 'Empfohlen':{de:'Empfohlen',en:'Recommended',fr:'Recommandé'},
 'Generell empfohlen':{de:'Generell empfohlen',en:'Generally recommended',fr:'Généralement recommandé'},
 'Erwägen':{de:'Erwägen',en:'Consider',fr:'À envisager'},
 'geschützt':{de:'Geschützt',en:'Protected',fr:'Protégé'},
 'nicht indiziert':{de:'Nicht indiziert',en:'Not indicated',fr:'Non indiqué'}
};
// FR overlay for the Meningokokken/Hepatitis assessor notes (keyed by German). Falls back to EN.
const MENHEP_FR={
 'ACWY aktuell – Nachweis für Hajj/Umrah':'ACWY à jour – certificat pour Hajj/Omra',
 'ACWY Pflicht für Hajj/Umrah':'ACWY obligatoire pour Hajj/Omra',
 'Meningitisgürtel – Reise fällt in die Epidemiesaison (Trockenzeit Dez–Jun, höchstes Risiko): dringend empfohlen.':'Ceinture de la méningite – le voyage tombe en saison épidémique (saison sèche déc.–juin, risque maximal) : fortement recommandé.',
 'Meningitisgürtel – nur erwogen: gesamter Aufenthalt außerhalb der Epidemiesaison (Trockenzeit Dez–Jun). In der Trockenzeit dringend empfohlen.':'Ceinture de la méningite – à envisager seulement : séjour entièrement hors saison épidémique (saison sèche déc.–juin). Fortement recommandé en saison sèche.',
 'Früher ACWY geimpft (>10 J.) – Auffrischung nur bei Reiseindikation nötig':"ACWY administré il y a >10 ans – rappel nécessaire uniquement en cas d'indication de voyage",
 'Nur MenC dokumentiert – ACWY empfohlen':'Seul MenC documenté – ACWY recommandé',
 'Alte Polysaccharid-Impfung – Konjugat (ACWY) empfohlen':'Ancien vaccin polyosidique – vaccin conjugué (ACWY) recommandé',
 'STIKO: Standardimpfung 12–14 J.':'STIKO : vaccination standard 12–14 ans',
 'STIKO: Nachholimpfung bis <25 J.':"STIKO : rattrapage jusqu'à <25 ans",
 'STIKO-Standard (ab 12 J.) – vorgezogene Impfung erwägen':'Standard STIKO (dès 12 ans) – envisager une vaccination anticipée',
 'Indikation bei Risiko/Labor/Ausland':'Indication en cas de risque/laboratoire/voyage',
 'Indikation (Immundefizienz/Asplenie)':'Indication (immunodéficience/asplénie)',
 'Serie vollständig, aber letzte Dosis >10 J. – Auffrischung bei fortbestehender Exposition':'Série complète, mais dernière dose >10 ans – rappel si exposition persistante',
 'Langzeitschutz (vollständige Serie)':'Protection à long terme (série complète)',
 '2. Dosis überfällig (Erstschutz ~1 Jahr)':'2ᵉ dose en retard (protection initiale ~1 an)',
 '1 Dosis: ~1 Jahr Schutz; 2. Dosis für Langzeitschutz':'1 dose : ~1 an de protection ; 2ᵉ dose pour une protection durable',
 '1× Twinrix reicht für Hep A NICHT (halbe Antigenmenge) – Serie vervollständigen':"1× Twinrix ne suffit PAS pour l'hép A (moitié de l'antigène) – compléter la série",
 'Für die meisten Reiseziele empfohlen':'Recommandé pour la plupart des destinations',
 'Immun – Anti-HBs ausreichend, keine weitere Impfung nötig':'Immun – anti-HBs suffisants, aucune vaccination supplémentaire nécessaire',
 'Langzeit/Exposition':'Long séjour/exposition'
};
function frNote(de,en){ return LANG==='de'?de:(LANG==='fr'?(MENHEP_FR[de]||en):en); }
// FR vaccine names (keyed by vaccine key). vName() picks by LANG with EN fallback.
const VAX_FR={tdap_polio:'Tétanos Diphtérie Coqueluche Polio',mmr:'Rougeole, oreillons, rubéole',varicella:'Varicelle (varicelle)',hepatitis:'Hépatite A + B',tbe:'Encéphalite à tiques (FSME)',menacwy:'Méningocoque ACWY',menb:'Méningocoque B',yellowfever:'Fièvre jaune',typhoid:'Typhoïde',rabies:'Rage',jev:'Encéphalite japonaise',dengue:'Dengue',chikungunya:'Chikungunya',cholera:'Choléra',influenza:'Grippe',covid:'COVID-19',pneumo:'Pneumocoque',hpv:'HPV',zoster:'Zona',mpox:'Mpox'};
function vName(v){ if(!v) return ''; return LANG==='de'?v.de:(LANG==='fr'?(VAX_FR[v.k]||v.en):v.en); }
// Generic de/en(/fr) object label picker (EN fallback if no fr present).
function L2(o){ return o?(LANG==='de'?o.de:(LANG==='fr'?(o.fr||o.en):o.en)):''; }
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
/* AVAIL – französische Verfügbarkeits-/Altershinweise (Overlay, wird unten in AVAIL[k].fr gemergt) */
const AVAIL_FR={
 yellowfever:'9 mois – 60 ans. Au-delà de 60 ans, uniquement après évaluation individuelle du rapport bénéfice/risque. Rappel après 10 ans (5 ans si primovaccination <2 ans).',
 tdap_polio:'Nourrissons : hexavalent dès 6 semaines. Rappels : Boostrix dès 4 ans, Repevax (Tdap-IPV) dès 3 ans. Rappel Td (ou Tdap/IPV) tous les 10 ans (coqueluche 1× à l\'âge adulte + à chaque grossesse). Rappel polio uniquement en cas de voyage en zone à risque.',
 mmr:'Dès (9–)12 mois. Vaccin vivant. Adultes nés après 1970 au statut incertain : 1 × ROR.',
 varicella:'Dès 11 mois. Vaccin vivant. 2 doses. Contrôle sérologique si possible.',
 hepatitis:'Hép. A : Havrix enfant 1–15 ans, Avaxim dès 16 ans. Hép. B : dès la naissance (Twinrix enfant dès 1 an, adulte dès 16 ans).',
 typhoid:'Injection (vaccin inactivé) dès 2 ans, 1 dose, rappel au plus tard après 3 ans.',
 menacwy:'Nimenrix (conjugué) dès 6 semaines. Standard/rattrapage STIKO jusqu\'à <25 ans. Rappel après 10 ans.',
 menb:'Bexsero dès 2 mois. Standard STIKO pour les nourrissons ; sinon selon l\'indication.',
 jev:'Dès 2 mois. IMPORTANT : 2 mois – <3 ans 0,25 ml ; dès 3 ans 0,5 ml. >65 ans : pas de données à long terme.',
 rabies:'Sans limite d\'âge. Schéma rapide pré-exposition : Rabipur 3 doses (j0/j3/j7) ; Verorab 2 doses (j0/j7).',
 cholera:'Vaccin oral (inactivé) dès 2 ans. 2–6 ans : 3 doses ; dès 6 ans : 2 doses (≥1 semaine d\'écart, max. 6 semaines). Rappel dès 6 ans après 2 ans.',
 tbe:'Encepur enfant 1–11 ans (0,25 ml), adulte dès 12 ans (0,5 ml). Rappel >50 ans tous les 3 ans.',
 hpv:'Dès 9 ans. 9–14 ans : 2 doses ; dès 15 ans : 3 doses.',
 influenza:'Influsplit dès 6 mois ; Efluelda haute dose dès 60 ans.',
 covid:'(Prise en charge standard / médecin traitant)',
 zoster:'Vaccin inactivé dès 18 ans. 2 doses (2 mois d\'écart). Standard dès 60 ans ; dès 18 ans en cas de risque.',
 pneumo:'Dès 6 semaines. Adultes : dose unique (indication dès 18 ans, standard dès 60 ans).',
 mpox:'Vaccin vivant non réplicatif dès 12 ans, 2 doses (≥28 j).',
 dengue:'Vaccin vivant dès 4 ans. 2 doses (0, 3 mois). Recommandé uniquement après une infection antérieure par la dengue.',
 chikungunya:'Vimkunya = vaccin inactivé (VLP), dès 12 ans, 1 dose. (IXCHIQ = vaccin vivant, prudence ≥65 ans.)'
};
for(const k in AVAIL_FR){ if(AVAIL[k]) AVAIL[k].fr=AVAIL_FR[k]; }

/* ---------- INFO (mit Schnellschema) ---------- */
const INFO={
 yellowfever:{disease:{de:'Virale hämorrhagische Erkrankung durch Mücken; Fieber, Gelbsucht, Organversagen.',en:'Mosquito-borne viral haemorrhagic disease; fever, jaundice, organ failure.'},epi:{de:'Tropisches Afrika und Südamerika. Teils Impfpflicht.',en:'Tropical Africa and South America. Entry proof sometimes required.'},side:{de:'Meist mild. Sehr selten schwere Reaktionen (>60 J., Immunschwäche).',en:'Usually mild. Very rarely serious reactions (>60 yrs, immunocompromised).'},sched:{de:'<strong>Zertifikat (IHR):</strong> 1 Dosis, lebenslang gültig. <strong>Individualschutz (STIKO 2022):</strong> bei fortgesetzter/erneuter Exposition 1× Auffrischung, wenn ≥10 J. seit Erstimpfung; nach 2. Dosis keine weitere. Sonderfälle: Schwangerschaft, Immundefizienz, Erstimpfung &lt;2 J. → 2. Dosis nötig. Nur in zugelassenen Impfstellen; gültig ab 10 Tage nach Impfung.',en:'<strong>Certificate (IHR):</strong> 1 dose, valid lifelong. <strong>Individual protection (STIKO 2022):</strong> for ongoing/renewed exposure one booster if ≥10 yrs since first dose; none after a 2nd dose. Special cases: pregnancy, immunodeficiency, first dose &lt;2 yrs → 2nd dose needed. Approved centres only; valid from 10 days after vaccination.'}},
 tdap_polio:{disease:{de:'Tetanus (Wundstarrkrampf), Diphtherie, Pertussis (Keuchhusten), Poliomyelitis (Kinderlähmung).',en:'Tetanus, diphtheria, pertussis, poliomyelitis.'},epi:{de:'Pertussis zirkuliert weltweit. Polio endemisch in AF/PK (WPV1); cVDPV in Afrika/Asien.',en:'Pertussis circulates worldwide. Polio endemic in AF/PK (WPV1); cVDPV in Africa/Asia.'},side:{de:'Lokalreaktion, gelegentlich Fieber.',en:'Local reaction, occasional fever.'},sched:{de:'<ul style="margin:4px 0 0 20px;padding:0"><li>Säuglinge: hexavalent 2+1 oder 3+1 Schema</li><li>Auffrischung alle 10 J. (Td)</li><li>1× Pertussis als Erwachsener und in jeder Schwangerschaft</li><li>Polio Auffrischung (IPV) bei Reise in Polio-Risikoländer (WHO verlangt Dosis 4 Wo–12 Mon vor Ausreise bei Aufenthalt >4 Wochen in Kat-1-Land)</li></ul>',en:'<ul style="margin:4px 0 0 20px;padding:0"><li>Infants: hexavalent 2+1 or 3+1 schedule</li><li>Booster every 10 yrs (Td)</li><li>Pertussis once as adult and each pregnancy</li><li>Polio booster (IPV) for travel to polio-risk countries (WHO requires dose 4 wks–12 mo before exit for stay >4 weeks in cat 1 country)</li></ul>'}},
 mmr:{disease:{de:'Masern (hochansteckend), Röteln in SS teratogen.',en:'Measles (highly contagious), rubella teratogenic in pregnancy.'},epi:{de:'Weltweite Ausbrüche, auch Europa.',en:'Outbreaks worldwide incl. Europe.'},side:{de:'Leichte „Impfmasern" 5–12 Tage möglich.',en:'Mild fever/rash 5–12 days possible.'},sched:{de:'2 Dosen (Mindestabstand 4 Wochen – Schnellschema möglich). Vor 1971 Geborene i.d.R. immun. Durchgemachte Masern = Immunität.',en:'2 doses (min. 4 weeks apart—rapid possible). Born before 1971 usually immune. Prior measles = immunity.'}},
 hepatitis:{disease:{de:'Hep A: Leberentzündung über Wasser/Nahrung. Hep B: über Blut/Sexualkontakt, kann chronisch werden.',en:'Hep A: hepatitis via water/food. Hep B: via blood/sexual contact, can become chronic.'},epi:{de:'Hep A erhöht außerhalb West-/Nordeuropas; Hep B höhere Prävalenz Afrika/Asien.<br><strong>Hep B Risikogruppen:</strong> i.v. Drogenkonsum, Patienten mit chronischen Lebererkrankungen, Sozialarbeiter, Polizei, Krankenhauspersonal, Humanitäre Einsätze, Sexarbeiter, Kampfsportler',en:'Hep A elevated outside W/N Europe; Hep B higher prevalence Africa/Asia.<br><strong>Hep B Risk groups:</strong> IV drug use, patients with chronic liver disease, social workers, police, hospital staff, humanitarian missions, sex workers, martial artists'},side:{de:'Lokalreaktion, gelegentlich Kopfschmerz.',en:'Local reaction, occasional headache.'},sched:{de:'<strong>Hep A (mono, Avaxim/Havrix)</strong><br>• 1 Dosis → ~1 Jahr Schutz<br>• 2 Dosen (0 / 6–12 Mon) → Langzeitschutz<br>• nach 2 Dosen langjähriger/lebenslanger Schutz – <strong>keine routinemäßige Auffrischung</strong> (STIKO/DTG); nur bei fortbestehender hoher Exposition individuell erwägen<br><br><strong>Hep B (mono, Engerix)</strong><br>• 3 Dosen (0 / 1 / 6 Mon)<br>• nach erfolgreicher Grundimmunisierung (Anti-HBs &gt;100) keine Auffrischung<br><br><strong>Twinrix (Hep A + B)</strong><br>• Grundimmunisierung: 3 Dosen (0 / 1 / 6 Mon)<br>• Schnellschema: 0 / 7 / 21 Tage + Auffrischung nach 12 Mon<br>• <strong>1× Twinrix reicht für Hep A NICHT</strong> (halbe A-Antigenmenge)<br>• Kinder 1–15 J. / Erwachsene ≥16 J. – Formulierung beachten',en:'<strong>Hep A (mono, Avaxim/Havrix)</strong><br>• 1 dose → ~1 year protection<br>• 2 doses (0 / 6–12 mo) → long-term<br>• after 2 doses long-term/lifelong protection – <strong>no routine booster</strong> (STIKO/DTG); consider individually only with ongoing high exposure<br><br><strong>Hep B (mono, Engerix)</strong><br>• 3 doses (0 / 1 / 6 mo)<br>• after successful primary series (anti-HBs &gt;100) no booster<br><br><strong>Twinrix (Hep A + B)</strong><br>• primary series: 3 doses (0 / 1 / 6 mo)<br>• Rapid schedule: 0 / 7 / 21 days + booster at 12 mo<br>• <strong>a single Twinrix is NOT enough for Hep A</strong> (half the A antigen)<br>• paediatric 1–15 yrs / adult ≥16 yrs — mind the formulation'}},
 hepA:{disease:{de:'Leberentzündung über verunreinigtes Wasser/Nahrung.',en:'Hepatitis via contaminated water/food.'},epi:{de:'Erhöht außerhalb West-/Nordeuropas.',en:'Elevated outside W/N Europe.'},side:{de:'Lokalreaktion, gelegentlich Kopfschmerz.',en:'Local reaction, occasional headache.'},sched:{de:'<strong>Hep A (mono, Avaxim/Havrix)</strong><br>• 1 Dosis → ~1 Jahr Schutz<br>• 2 Dosen (0 / 6–12 Mon) → Langzeitschutz<br>• nach 2 Dosen langjähriger/lebenslanger Schutz – <strong>keine routinemäßige Auffrischung</strong> (STIKO/DTG); nur bei fortbestehender hoher Exposition individuell erwägen<br><br><strong>Twinrix (Hep A + B)</strong><br>• Grundimmunisierung: 3 Dosen (0 / 1 / 6 Mon)<br>• Schnellschema: 0 / 7 / 21 Tage + Auffrischung nach 12 Mon<br>• <strong>1× Twinrix reicht für Hep A NICHT</strong> (halbe A-Antigenmenge)<br>• Kinder 1–15 J. / Erwachsene ≥16 J. – Formulierung beachten',en:'<strong>Hep A (mono, Avaxim/Havrix)</strong><br>• 1 dose → ~1 year protection<br>• 2 doses (0 / 6–12 mo) → long-term<br>• after 2 doses long-term/lifelong protection – <strong>no routine booster</strong> (STIKO/DTG); consider individually only with ongoing high exposure<br><br><strong>Twinrix (Hep A + B)</strong><br>• primary series: 3 doses (0 / 1 / 6 mo)<br>• Rapid schedule: 0 / 7 / 21 days + booster at 12 mo<br>• <strong>a single Twinrix is NOT enough for Hep A</strong> (half the A antigen)<br>• paediatric 1–15 yrs / adult ≥16 yrs — mind the formulation'}},
 hepB:{disease:{de:'Über Blut/Sexualkontakt, kann chronisch werden.',en:'Via blood/sexual contact, can become chronic.'},epi:{de:'Höhere Prävalenz in Afrika/Asien.<br><strong>Risikogruppen:</strong> i.v. Drogenkonsum, Patienten mit chronischen Lebererkrankungen, Sozialarbeiter, Polizei, Krankenhauspersonal, Humanitäre Einsätze, Sexarbeiter, Kampfsportler',en:'Higher prevalence in Africa/Asia.<br><strong>Risk groups:</strong> IV drug use, patients with chronic liver disease, social workers, police, hospital staff, humanitarian missions, sex workers, martial artists'},side:{de:'Lokalreaktion, gelegentlich Kopfschmerz.',en:'Local reaction, occasional headache.'},sched:{de:'<strong>Hep B (mono, Engerix)</strong><br>• 3 Dosen (0 / 1 / 6 Mon)<br>• nach erfolgreicher Grundimmunisierung (Anti-HBs &gt;100) keine Auffrischung<br><br><strong>Twinrix (Hep A + B)</strong><br>• Grundimmunisierung: 3 Dosen (0 / 1 / 6 Mon)<br>• Schnellschema: 0 / 7 / 21 Tage + Auffrischung nach 12 Mon<br>• Kinder 1–15 J. / Erwachsene ≥16 J. – Formulierung beachten',en:'<strong>Hep B (mono, Engerix)</strong><br>• 3 doses (0 / 1 / 6 mo)<br>• after successful primary series (anti-HBs &gt;100) no booster<br><br><strong>Twinrix (Hep A + B)</strong><br>• primary series: 3 doses (0 / 1 / 6 mo)<br>• Rapid schedule: 0 / 7 / 21 days + booster at 12 mo<br>• paediatric 1–15 yrs / adult ≥16 yrs — mind the formulation'}},
 typhoid:{disease:{de:'Bakterielle Darminfektion über Wasser/Nahrung.',en:'Bacterial gut infection via water/food.'},epi:{de:'Höchstes Risiko Südasien.<br><strong>Risikogruppen:</strong> Schlechte hygienische Bedingungen, Aufenthalte bei Freunden und Familie in Reiseländern (VFR).',en:'Highest risk South Asia.<br><strong>Risk groups:</strong> Poor hygiene conditions, visiting friends and relatives in travel destinations (VFR).'},side:{de:'Injektion: Lokalreaktion. Oral (Typhoral L): gelegentlich Magen-Darm-Beschwerden.',en:'Injectable: local reaction. Oral (Typhoral L): occasional GI upset.'},sched:{de:'<strong>Typhim Vi</strong> (parenteral, ab 2 J.): 1 Dosis i.m., Wirkung nach 10–14 Tagen, Wiederimpfung nach spätestens 3 J. <strong>Typhoral L</strong> (oral, Lebendimpfstoff Ty21a, ab 5 J.): 3 Kapseln an Tag 1/3/5 (1 h vor dem Essen), Schutz ~1 J. (bei Dauerexposition 3 J.). Wirksamkeit nur ~50–60 % – gute Nahrungs-/Wasserhygiene bleibt essenziell.',en:'<strong>Typhim Vi</strong> (parenteral, from 2 yrs): 1 dose i.m., effective after 10–14 days, revaccinate within 3 yrs. <strong>Typhoral L</strong> (oral live Ty21a, from 5 yrs): 3 capsules on days 1/3/5 (1 h before food), protection ~1 yr (3 yrs with continued exposure). Efficacy only ~50–60 % — good food/water hygiene remains essential.'}},
 menacwy:{disease:{de:'Bakterielle Hirnhautentzündung/Sepsis, rasch lebensbedrohlich.',en:'Bacterial meningitis/sepsis, rapidly life-threatening.'},epi:{de:'Afrik. Meningitisgürtel; ACWY-Nachweis Pflicht für Hajj/Umrah.<br><strong>Risikogruppen:</strong> für Reisen >7 Tage in Epidemiegebieten zu Epidemiezeiten (Dez - Mai/Juni) oder >30 Tage in Endemiegebieten des Meningitisgürtels in Afrika (Sahel).',en:'African meningitis belt; ACWY proof mandatory for Hajj/Umrah.<br><strong>Risk groups:</strong> travel >7 days in epidemic areas during epidemic seasons (Dec - May/June) or >30 days in endemic areas of the African meningitis belt (Sahel).'},side:{de:'Lokalreaktion, Fieber möglich.',en:'Local reaction, fever possible.'},sched:{de:'Nimenrix (konjugiert): 1 Dosis, Schutz nach ~10–14 Tagen, Auffrischung nach 10 J. Ältere Polysaccharid- oder reine C-Impfungen decken ACWY nicht vollständig.',en:'Nimenrix (conjugate): 1 dose, protection after ~10–14 days, booster after 10 yrs. Older polysaccharide or C-only vaccines do not fully cover ACWY.'}},
 menb:{disease:{de:'Meningokokken B – Hirnhautentzündung/Sepsis.',en:'Meningococcal B — meningitis/sepsis.'},epi:{de:'Häufigste Serogruppe in Europa; höchstes Risiko Säuglinge/Kleinkinder.',en:'Most common serogroup in Europe; highest risk infants/toddlers.'},side:{de:'Ausgeprägte Lokalreaktion und Fieber v.a. bei Säuglingen. <strong>Wichtig:</strong> Bei zeitgleicher Gabe mit anderen Impfstoffen zwingend an getrennten Körperstellen (z.B. anderer Arm) impfen.',en:'Marked local reaction and fever esp. in infants. <strong>Important:</strong> If given simultaneously with other vaccines, strictly use separate injection sites (e.g., different arm).'},sched:{de:'Bexsero: Säuglinge 2+1 (bzw. 3+1), ab 2 J. 2 Dosen. STIKO-Standard für Säuglinge, sonst Indikationsimpfung.',en:'Bexsero: infants 2+1 (or 3+1), from 2 yrs 2 doses. STIKO standard for infants, otherwise indication.'}},
 jev:{disease:{de:'Virale Gehirnentzündung durch Mücken; selten, aber schwer (hohe Letalität/Folgeschäden).',en:'Mosquito-borne viral encephalitis; rare but severe (high fatality/sequelae).'},epi:{de:'Südost-Asien, weite Teile Indiens, Korea, Japan, China, West-Pazifik, Nordaustralien – während der Übertragungszeit. Höheres Risiko: Aufenthalt ≥4 Wochen, wiederholte Kurzreisen, Nähe zu Reisfeldern/Schweinezucht (nicht auf ländliche Gebiete begrenzt).',en:'Southeast Asia, large parts of India, Korea, Japan, China, West Pacific, N Australia – during transmission season. Higher risk: stay ≥4 weeks, repeated short trips, proximity to rice fields/pig farming (not limited to rural areas).'},side:{de:'Lokalreaktion, Kopf-/Muskelschmerz.',en:'Local reaction, head/muscle ache.'},sched:{de:'<ul style="margin:4px 0 0 20px;padding:0"><li>Ixiaro: 2 Dosen</li><li>Konventionell: 0 / 28 Tage</li><li>Schnellschema: 0 / 7 Tage (NUR 18–65 Jahre!)</li><li>2 M – &lt;3 J.: 0,25 ml / ab 3 J.: 0,5 ml</li><li>Booster nach 12–24 M (~10 J. Schutz)</li></ul>',en:'<ul style="margin:4px 0 0 20px;padding:0"><li>Ixiaro: 2 doses</li><li>Conventional: 0 / 28 days</li><li>Rapid schedule: 0 / 7 days (ONLY 18–65 yrs!)</li><li>2 mo – &lt;3 yrs: 0.25 ml / from 3 yrs: 0.5 ml</li><li>Booster after 12–24 mo (~10 yrs protection)</li></ul>'}},
 rabies:{disease:{de:'Nach Tierbiss nahezu immer tödlich, sobald Symptome auftreten.',en:'Almost always fatal once symptoms appear after an animal bite.'},epi:{de:'Asien, Afrika, Lateinamerika (Hunde, auch Fledermäuse). Kinder besonders gefährdet (Mobilität, Kopf-/Handbisse).<br><strong>Risikogruppen:</strong> Arbeit mit Tollwutviren, Tierkontakte (Fledermäuse, Höhlenforscher etc.).',en:'Asia, Africa, Latin America (dogs, also bats). Children especially at risk.<br><strong>Risk groups:</strong> Work with rabies viruses, animal contact (bats, cavers, etc.).'},side:{de:'Lokalreaktion, selten Fieber.',en:'Local reaction, rarely fever.'},sched:{de:'<ul style="margin:4px 0 0 20px;padding:0"><li>Verfügbar: Rabipur/Verorab (HDC-Impfstoff seit 2024 nicht mehr im Handel)</li><li>Präexpositionell konventionell: 3 Dosen (0 / 7 / 21–28 d)</li><li>Schnellschema Rabipur: 3 Dosen (0 / 3 / 7 d)</li><li>Schnellschema Verorab: 2 Dosen (0 / 7 d)</li><li>Vereinfacht die PEP nach Biss: nur 2 Dosen, kein Immunglobulin nötig</li></ul>',en:'<ul style="margin:4px 0 0 20px;padding:0"><li>Available: Rabipur/Verorab (HDC vaccine discontinued since 2024)</li><li>Pre-exposure conventional: 3 doses (0 / 7 / 21–28 d)</li><li>Rapid schedule Rabipur: 3 doses (0 / 3 / 7 d)</li><li>Rapid schedule Verorab: 2 doses (0 / 7 d)</li><li>Simplifies PEP after bite: only 2 doses, no immunoglobulin needed</li></ul>'}},
 cholera:{disease:{de:'Schwere wässrige Durchfallerkrankung über verunreinigtes Wasser/Nahrung; rasche Dehydratation.',en:'Severe watery diarrhoea via contaminated water/food; rapid dehydration.'},epi:{de:'Ausbruchs-/Epidemiegebiete, v.a. bei Katastrophen/Flüchtlingslagern. Für normale Touristen selten indiziert – v.a. Helfer/Langzeit in Hochrisikogebieten.',en:'Outbreak/epidemic areas, esp. disasters/refugee camps. Rarely indicated for ordinary tourists — mainly aid workers/long-term in high-risk areas.'},side:{de:'Magen-Darm-Beschwerden. Bietet teilweisen Kreuzschutz gegen ETEC-Reisedurchfall.',en:'GI upset. Provides partial cross-protection against ETEC travellers’ diarrhoea.'},sched:{de:'<ul style="margin:4px 0 0 20px;padding:0"><li><strong>Dukoral</strong> (inaktiviert, oral, ab 2 J.): ab 6 J. 2 Dosen (≥1 Woche, max. 6 Wochen Abstand); 2–6 J.: 3 Dosen</li><li>Auffrischung nach 2 J. (bei 2–6 J. nach 6 Monaten)</li><li>Einnahme: 1 h vor/nach nichts essen/trinken; gleiches Intervall zur oralen Typhus-Schluckimpfung beachten</li><li>Alternative: <strong>Vaxchora</strong> (Lebendimpfstoff, 6–64 J., 1 Dosis ≥10 Tage vor Abreise)</li></ul>',en:'<ul style="margin:4px 0 0 20px;padding:0"><li><strong>Dukoral</strong> (inactivated, oral, from 2 yrs): from 6 yrs 2 doses (≥1 week, max 6 weeks apart); 2–6 yrs: 3 doses</li><li>Booster after 2 yrs (for 2–6 yrs after 6 months)</li><li>Intake: nothing to eat/drink 1 h before/after; keep the same interval to oral typhoid vaccine</li><li>Alternative: <strong>Vaxchora</strong> (live vaccine, 6–64 yrs, single dose ≥10 days before departure)</li></ul>'}},
 tbe:{disease:{de:'Zeckenübertragene Hirnhaut-/Gehirnentzündung (FSME).',en:'Tick-borne meningoencephalitis (TBE).'},epi:{de:'Endemiegebiete Mittel-/Osteuropas, Süddeutschland, Baltikum; Frühjahr–Herbst.',en:'Endemic Central/Eastern Europe, S Germany, Baltics; spring–autumn.'},side:{de:'Lokalreaktion, Fieber v.a. nach 1. Dosis.',en:'Local reaction, fever esp. after 1st dose.'},sched:{de:'<ul style="margin:4px 0 0 20px;padding:0"><li>Encepur Kinder 1–11 J. (0,25 ml)</li><li>Erwachsene ab 12 J. (0,5 ml)</li><li>Grundimmunisierung 3 Dosen: konventionell 0 / 1–3 M / 9–12 M</li><li>Schnellschema 0 / d7 / d21 (in ALLEN zugelassenen Altersgruppen)</li><li>1. Auffrischung 3 Jahre nach GI</li><li>Danach &lt;50 J. alle 5–10 J., &gt;50 J. alle 3 J.</li></ul>',en:'<ul style="margin:4px 0 0 20px;padding:0"><li>Encepur paediatric 1–11 yrs (0.25 ml)</li><li>Adult from 12 yrs (0.5 ml)</li><li>Primary 3 doses: conventional 0 / 1–3 mo / 9–12 mo</li><li>Rapid schedule 0 / d7 / d21 (in ALL approved age groups)</li><li>1st booster 3 yrs after primary</li><li>Then &lt;50 yrs every 5–10 yrs, &gt;50 yrs every 3 yrs</li></ul>'}},
 hpv:{disease:{de:'Humane Papillomviren; Gebärmutterhals-/weitere Karzinome, Genitalwarzen.',en:'HPV; cervical/other cancers, genital warts.'},epi:{de:'Sexuell übertragen, weltweit.',en:'Sexually transmitted, worldwide.'},side:{de:'Lokalreaktion, gelegentlich Kreislaufreaktion (im Sitzen impfen).',en:'Local reaction, occasional fainting (vaccinate seated).'},sched:{de:'9–14 J.: 2 Dosen (0, 6–12 M); ab 15 J.: 3 Dosen (0, 2, 6 M).',en:'9–14 yrs: 2 doses; from 15: 3 doses (0, 2, 6 mo).'}},
 influenza:{disease:{de:'Saisonale Grippe; für Ältere/Vorerkrankte gefährlich.',en:'Seasonal influenza; dangerous for elderly/chronically ill.'},epi:{de:'Saisonal weltweit, Tropen ganzjährig.',en:'Seasonal worldwide, year-round in tropics.'},side:{de:'Lokalreaktion, kurze Abgeschlagenheit.',en:'Local reaction, brief malaise.'},sched:{de:'Jährlich; STIKO-Standard ab 60 J., Schwangere, Risikogruppen.',en:'Annually; STIKO standard from 60, pregnancy, risk groups.'}},
 covid:{disease:{de:'SARS-CoV-2; Risiko steigt mit Alter/Vorerkrankung.',en:'SARS-CoV-2; risk rises with age/comorbidity.'},epi:{de:'Weltweit endemisch, saisonale Wellen.',en:'Endemic worldwide, seasonal waves.'},side:{de:'Lokalreaktion, Abgeschlagenheit 1–2 Tage. Bei zeitgleicher Gabe (z.B. mit Influenza) zwingend an getrennten Körperstellen (z.B. anderer Arm) impfen.',en:'Local reaction, fatigue 1–2 days. If co-administered (e.g. with influenza), strictly use separate injection sites.'},sched:{de:'Auffrischung nach STIKO für ≥60 J. und Risikogruppen.',en:'Booster per STIKO for ≥60 yrs and risk groups.'}},
 zoster:{disease:{de:'Gürtelrose durch Reaktivierung des Windpockenvirus; Nervenschmerzen.',en:'Shingles from reactivated varicella virus; nerve pain.'},epi:{de:'Risiko steigt mit Alter/Immunschwäche.',en:'Risk rises with age/immunocompromise.'},side:{de:'Ausgeprägte Lokalreaktion, Muskelschmerz, Fieber häufig. <strong>Wichtig:</strong> Bei zeitgleicher Gabe mit anderen Impfstoffen zwingend an getrennten Körperstellen (z.B. anderer Arm) impfen.',en:'Marked local reaction, muscle ache, fever common. <strong>Important:</strong> If given simultaneously with other vaccines, strictly use separate injection sites (e.g., different arm).'},sched:{de:'Shingrix: 2 Dosen (Abstand 2–6 M). Standard ab 60 J., ab 50 J. bei Risiko.',en:'Shingrix: 2 doses (2–6 mo apart). Standard from 60, from 50 if at risk.'}},
 pneumo:{disease:{de:'Pneumokokken; Lungenentzündung, Sepsis, Meningitis.',en:'Pneumococcus; pneumonia, sepsis, meningitis.'},epi:{de:'Weltweit; höchstes Risiko Ältere/chron. Kranke/Säuglinge.',en:'Worldwide; highest risk elderly/chronically ill/infants.'},side:{de:'Lokalreaktion, selten Fieber. Bei zeitgleicher Gabe mit z.B. Influenza oder COVID-19 an getrennten Körperstellen (anderer Arm) impfen.',en:'Local reaction, rarely fever. If co-administered with flu or COVID-19, use separate injection sites (different arm).'},sched:{de:'PCV20: Erwachsene 1 Dosis (Standard ab 60 J.). Säuglinge nach Impfkalender (nicht Prevenar20).',en:'PCV20: adults 1 dose (standard from 60). Infants per schedule (not Prevenar20).'}},
 mpox:{disease:{de:'Pockenähnliche Erkrankung mit Hautläsionen; meist selbstlimitierend.',en:'Smallpox-like illness; usually self-limiting.'},epi:{de:'Ausbrüche u.a. Zentral-/Westafrika; enger Kontakt.',en:'Outbreaks incl. Central/West Africa; close contact.'},side:{de:'Lokalreaktion; MVA-BN nicht-replizierend, auch bei Immunschwäche einsetzbar.',en:'Local reaction; MVA-BN non-replicating, usable in immunocompromise.'},sched:{de:'MVA-BN: 2 Dosen (≥28 d). Für Indikationsgruppen.',en:'MVA-BN: 2 doses (≥28 d). For indication groups.'}},
 dengue:{disease:{de:'Mückenübertragenes Fieber; Zweitinfektion kann schwer verlaufen.',en:'Mosquito-borne fever; second infection can be severe.'},epi:{de:'Tropen/Subtropen weltweit.',en:'Tropics/subtropics worldwide.'},side:{de:'Lokalreaktion. Lebendimpfstoff (Qdenga). Bei zeitgleicher Gabe mit anderen Impfstoffen an getrennten Körperstellen (anderer Arm) impfen.',en:'Local reaction. Live vaccine (Qdenga). If co-administered, use separate injection sites (different arm).'},sched:{de:'<ul style="margin:4px 0 0 20px;padding:0"><li>Qdenga: 2 Dosen (0 / 3 Mon)</li><li>Empfehlung NUR nach durchgemachter Dengue-Infektion</li><li>Risiko schwererer Verläufe bei Erstinfektion nach Impfung Seronegativer!</li></ul>',en:'<ul style="margin:4px 0 0 20px;padding:0"><li>Qdenga: 2 doses (0 / 3 mo)</li><li>Recommended ONLY after prior dengue infection</li><li>Risk of severe disease in seronegatives upon first natural infection!</li></ul>'}},
 chikungunya:{disease:{de:'Mückenübertragenes Fieber mit teils langanhaltenden Gelenkschmerzen.',en:'Mosquito-borne fever with sometimes prolonged joint pain.'},epi:{de:'Nur ECDC-gelistete Länder (Stand März 2026). Aktuelle Ausbrüche: Bolivien, Brasilien, Kuba, Madagaskar, Mauritius, Mayotte, Réunion, Seychellen, Suriname. Erhöhtes Risiko (fortlaufende Übertragung): Argentinien, Kolumbien, Mexiko, Pakistan, Franz.-Guayana. Andere Länder (z.B. Thailand, Indien, Indonesien) sind aktuell nicht gelistet. Verbreitungskarte über den „K"-Button.',en:'Only ECDC-listed countries (as of March 2026). Current outbreaks: Bolivia, Brazil, Cuba, Madagascar, Mauritius, Mayotte, Réunion, Seychelles, Suriname. Elevated risk (ongoing transmission): Argentina, Colombia, Mexico, Pakistan, French Guiana. Other countries (e.g. Thailand, India, Indonesia) are not currently listed. Distribution map via the "K" button.'},side:{de:'Lokalreaktion; Vimkunya = Totimpfstoff. <strong>Wichtig:</strong> Bei zeitgleicher Gabe mit anderen Impfstoffen zwingend an getrennten Körperstellen (z.B. anderer Arm) impfen. (IXCHIQ = Lebendimpfstoff, Vorsicht ≥65 J.)',en:'Local reaction; Vimkunya = inactivated. <strong>Important:</strong> If given simultaneously with other vaccines, strictly use separate injection sites (e.g., different arm). (IXCHIQ = live, caution ≥65 yrs.)'},sched:{de:'Vimkunya: 1 Dosis. Indikation je nach Ziel/Ausbruchslage.',en:'Vimkunya: 1 dose. Indication per destination/outbreak.'}},
 varicella:{disease:{de:'Windpocken (Varizellen): hochansteckende Viruserkrankung mit juckendem Bläschenausschlag und Fieber. Bei Erwachsenen, Immungeschwächten und in der Schwangerschaft (Fehlbildungsrisiko/schwere Verläufe) deutlich schwerer.',en:'Chickenpox (varicella): highly contagious viral illness with itchy blistering rash and fever. Markedly more severe in adults, the immunocompromised and in pregnancy (fetal malformation risk / severe course).'},epi:{de:'Weltweit verbreitet; ohne Impfung/durchgemachte Erkrankung erkranken fast alle. Übertragung per Tröpfchen/Schmierinfektion, sehr hohe Kontagiosität.',en:'Worldwide; without vaccination/prior disease nearly everyone becomes infected. Droplet/contact transmission, very high contagiousness.'},side:{de:'Lebendimpfstoff. Lokalreaktion, gelegentlich leichtes Fieber; 5–26 Tage nach Impfung selten milder varizellenähnlicher Ausschlag. <strong>Kontraindiziert</strong> in der Schwangerschaft und bei relevanter Immunsuppression.',en:'Live vaccine. Local reaction, occasional mild fever; rarely a mild varicella-like rash 5–26 days after vaccination. <strong>Contraindicated</strong> in pregnancy and relevant immunosuppression.'},sched:{de:'Varilrix / Varivax: 2 Dosen (Mindestabstand 4–6 Wochen). Indikation v.a. bei fehlender Immunität und med. Personal oder Kinderwunsch (gebärfähiges Alter). Bei unklarer Anamnese Serologie (VZV-IgG) erwägen; durchgemachte Windpocken = Immunität.',en:'Varilrix / Varivax: 2 doses (min. 4–6 weeks apart). Indicated esp. when non-immune and medical staff or planned pregnancy (childbearing age). Consider serology (VZV-IgG) if history unclear; prior chickenpox = immunity.'}},
};
/* ---- Français (FR) pour les fenêtres « i » (fusionné dans INFO ci-dessous). Repli EN via showInfo. ---- */
const INFO_FR={
 yellowfever:{disease:"Maladie hémorragique virale transmise par les moustiques ; fièvre, ictère, défaillance d'organes.",epi:"Afrique tropicale et Amérique du Sud. Certificat d'entrée parfois exigé.",side:"Généralement bénins. Très rarement des réactions graves (>60 ans, immunodéprimés).",sched:"<strong>Certificat (RSI) :</strong> 1 dose, valable à vie. <strong>Protection individuelle (STIKO 2022) :</strong> un rappel en cas d'exposition prolongée/renouvelée si ≥10 ans depuis la 1re dose ; aucun après une 2e dose. Cas particuliers : grossesse, immunodéficience, 1re dose &lt;2 ans → 2e dose nécessaire. Uniquement en centres agréés ; valable à partir de 10 jours après la vaccination."},
 tdap_polio:{disease:"Tétanos, diphtérie, coqueluche, poliomyélite.",epi:"La coqueluche circule dans le monde entier. Polio endémique en AF/PK (PVS1) ; cVDPV en Afrique/Asie.",side:"Réaction locale, fièvre occasionnelle.",sched:"<ul style=\"margin:4px 0 0 20px;padding:0\"><li>Nourrissons : schéma hexavalent 2+1 ou 3+1</li><li>Rappel tous les 10 ans (Td)</li><li>1× coqueluche à l'âge adulte et à chaque grossesse</li><li>Rappel polio (VPI) pour un voyage en pays à risque (l'OMS exige une dose 4 sem–12 mois avant la sortie pour un séjour >4 semaines en pays cat. 1)</li></ul>"},
 mmr:{disease:"Rougeole (très contagieuse), rubéole tératogène pendant la grossesse.",epi:"Épidémies dans le monde entier, y compris en Europe.",side:"Légère « éruption vaccinale » possible 5–12 jours après.",sched:"2 doses (intervalle min. 4 semaines – schéma rapide possible). Personnes nées avant 1971 généralement immunisées. Rougeole contractée = immunité."},
 hepatitis:{disease:"Hép A : hépatite transmise par l'eau/les aliments. Hép B : par le sang/contact sexuel, peut devenir chronique.",epi:"Hép A élevée hors d'Europe de l'Ouest/du Nord ; Hép B prévalence plus élevée en Afrique/Asie.<br><strong>Groupes à risque Hép B :</strong> usage de drogues i.v., hépatopathie chronique, travailleurs sociaux, police, personnel hospitalier, missions humanitaires, travailleurs du sexe, sports de combat",side:"Réaction locale, céphalées occasionnelles.",sched:"<strong>Hép A (mono, Avaxim/Havrix)</strong><br>• 1 dose → ~1 an de protection<br>• 2 doses (0 / 6–12 mois) → protection durable<br>• après 2 doses, protection à long terme/à vie – <strong>pas de rappel de routine</strong> (STIKO/DTG)<br><br><strong>Hép B (mono, Engerix)</strong><br>• 3 doses (0 / 1 / 6 mois)<br>• après primovaccination réussie (anti-HBs &gt;100) pas de rappel<br><br><strong>Twinrix (Hép A + B)</strong><br>• primovaccination : 3 doses (0 / 1 / 6 mois)<br>• schéma rapide : 0 / 7 / 21 jours + rappel à 12 mois<br>• <strong>1× Twinrix ne suffit PAS pour l'hép A</strong> (moitié de l'antigène)"},
 hepA:{disease:"Hépatite par eau/aliments contaminés.",epi:"Élevée hors d'Europe de l'Ouest/du Nord.",side:"Réaction locale, céphalées occasionnelles.",sched:"<strong>Hép A (mono)</strong><br>• 1 dose → ~1 an<br>• 2 doses (0 / 6–12 mois) → durable ; pas de rappel de routine (STIKO/DTG)<br><br><strong>Twinrix</strong> : 3 doses (0 / 1 / 6 mois) ; 1× Twinrix ne suffit PAS pour l'hép A."},
 hepB:{disease:"Par le sang/contact sexuel, peut devenir chronique.",epi:"Prévalence plus élevée en Afrique/Asie.",side:"Réaction locale, céphalées occasionnelles.",sched:"<strong>Hép B (mono, Engerix)</strong><br>• 3 doses (0 / 1 / 6 mois)<br>• après primovaccination réussie (anti-HBs &gt;100) pas de rappel"},
 typhoid:{disease:"Infection intestinale bactérienne par l'eau/les aliments.",epi:"Risque maximal en Asie du Sud.<br><strong>Groupes à risque :</strong> mauvaises conditions d'hygiène, séjours chez des proches au pays (VFR).",side:"Injectable : réaction locale. Oral (Typhoral L) : troubles digestifs occasionnels.",sched:"<strong>Typhim Vi</strong> (parentéral, dès 2 ans) : 1 dose i.m., effet après 10–14 jours, revaccination sous 3 ans max. <strong>Typhoral L</strong> (oral vivant Ty21a, dès 5 ans) : 3 gélules J1/3/5 (1 h avant le repas), protection ~1 an (3 ans si exposition continue). Efficacité ~50–60 % – hygiène de l'eau/des aliments essentielle."},
 menacwy:{disease:"Méningite/septicémie bactérienne, rapidement mortelle.",epi:"Ceinture africaine de la méningite ; certificat ACWY obligatoire pour Hajj/Omra.<br><strong>Groupes à risque :</strong> voyages >7 jours en zone épidémique en saison épidémique (déc.–mai/juin) ou >30 jours en zone endémique de la ceinture (Sahel).",side:"Réaction locale, fièvre possible.",sched:"Nimenrix (conjugué) : 1 dose, protection après ~10–14 jours, rappel après 10 ans. Les anciens vaccins polyosidiques ou C seuls ne couvrent pas complètement ACWY."},
 menb:{disease:"Méningocoque B – méningite/septicémie.",epi:"Sérogroupe le plus fréquent en Europe ; risque maximal chez les nourrissons/jeunes enfants.",side:"Réaction locale et fièvre marquées surtout chez le nourrisson. <strong>Important :</strong> en cas d'administration simultanée avec d'autres vaccins, utiliser impérativement des sites d'injection séparés (p. ex. autre bras).",sched:"Bexsero : nourrissons 2+1 (ou 3+1), dès 2 ans 2 doses. Standard STIKO pour nourrissons, sinon vaccination d'indication."},
 jev:{disease:"Encéphalite virale transmise par les moustiques ; rare mais grave (létalité/séquelles élevées).",epi:"Asie du Sud-Est, grande partie de l'Inde, Corée, Japon, Chine, Pacifique occidental, nord de l'Australie – pendant la saison de transmission. Risque accru : séjour ≥4 semaines, courts séjours répétés, proximité de rizières/élevages de porcs (pas limité au milieu rural).",side:"Réaction locale, céphalées/myalgies.",sched:"<ul style=\"margin:4px 0 0 20px;padding:0\"><li>Ixiaro : 2 doses</li><li>Conventionnel : 0 / 28 jours</li><li>Schéma rapide : 0 / 7 jours (UNIQUEMENT 18–65 ans !)</li><li>2 mois – &lt;3 ans : 0,25 ml / dès 3 ans : 0,5 ml</li><li>Rappel à 12–24 mois (~10 ans de protection)</li></ul>"},
 rabies:{disease:"Presque toujours mortelle une fois les symptômes apparus après une morsure animale.",epi:"Asie, Afrique, Amérique latine (chiens, aussi chauves-souris). Enfants particulièrement exposés.<br><strong>Groupes à risque :</strong> travail avec le virus rabique, contact animalier (chauves-souris, spéléologues, etc.).",side:"Réaction locale, rarement fièvre.",sched:"<ul style=\"margin:4px 0 0 20px;padding:0\"><li>Disponibles : Rabipur/Verorab (vaccin HDC retiré depuis 2024)</li><li>Préexposition conventionnel : 3 doses (0 / 7 / 21–28 j)</li><li>Schéma rapide Rabipur : 3 doses (0 / 3 / 7 j)</li><li>Schéma rapide Verorab : 2 doses (0 / 7 j)</li><li>Simplifie la prophylaxie post-exposition : 2 doses, sans immunoglobulines</li></ul>"},
 cholera:{disease:"Diarrhée aqueuse sévère par eau/aliments contaminés ; déshydratation rapide.",epi:"Zones d'épidémie, surtout catastrophes/camps de réfugiés. Rarement indiqué pour les touristes ordinaires – surtout secouristes/longs séjours en zone à haut risque.",side:"Troubles digestifs. Protection croisée partielle contre la diarrhée du voyageur à ETEC.",sched:"<ul style=\"margin:4px 0 0 20px;padding:0\"><li><strong>Dukoral</strong> (inactivé, oral, dès 2 ans) : dès 6 ans 2 doses (≥1 sem., max 6 sem.) ; 2–6 ans : 3 doses</li><li>Rappel après 2 ans (2–6 ans après 6 mois)</li><li>Prise : rien à manger/boire 1 h avant/après</li><li>Alternative : <strong>Vaxchora</strong> (vaccin vivant, 6–64 ans, 1 dose ≥10 jours avant le départ)</li></ul>"},
 tbe:{disease:"Méningo-encéphalite transmise par les tiques (FSME).",epi:"Zones d'endémie d'Europe centrale/de l'Est, sud de l'Allemagne, Baltique ; printemps–automne.",side:"Réaction locale, fièvre surtout après la 1re dose.",sched:"<ul style=\"margin:4px 0 0 20px;padding:0\"><li>Encepur enfants 1–11 ans (0,25 ml)</li><li>Adultes dès 12 ans (0,5 ml)</li><li>Primovaccination 3 doses : conventionnel 0 / 1–3 mois / 9–12 mois</li><li>Schéma rapide 0 / j7 / j21</li><li>1er rappel 3 ans après la primovaccination</li><li>Ensuite &lt;50 ans tous les 5–10 ans, &gt;50 ans tous les 3 ans</li></ul>"},
 hpv:{disease:"Papillomavirus humains ; cancers du col de l'utérus et autres, verrues génitales.",epi:"Transmission sexuelle, mondiale.",side:"Réaction locale, malaise vagal occasionnel (vacciner assis).",sched:"9–14 ans : 2 doses (0, 6–12 mois) ; dès 15 ans : 3 doses (0, 2, 6 mois)."},
 influenza:{disease:"Grippe saisonnière ; dangereuse pour les personnes âgées/à risque.",epi:"Saisonnière dans le monde, toute l'année sous les tropiques.",side:"Réaction locale, courte fatigue.",sched:"Annuelle ; standard STIKO dès 60 ans, grossesse, groupes à risque."},
 covid:{disease:"SARS-CoV-2 ; risque croissant avec l'âge/les comorbidités.",epi:"Endémique dans le monde, vagues saisonnières.",side:"Réaction locale, fatigue 1–2 jours. En cas d'administration simultanée (p. ex. avec la grippe), utiliser impérativement des sites d'injection séparés.",sched:"Rappel selon la STIKO pour les ≥60 ans et groupes à risque."},
 zoster:{disease:"Zona par réactivation du virus varicelle-zona ; douleurs nerveuses.",epi:"Risque croissant avec l'âge/l'immunodépression.",side:"Réaction locale marquée, myalgies, fièvre fréquente. <strong>Important :</strong> en cas d'administration simultanée, utiliser des sites d'injection séparés.",sched:"Shingrix : 2 doses (2–6 mois d'intervalle). Standard dès 60 ans, dès 50 ans si à risque."},
 pneumo:{disease:"Pneumocoque ; pneumonie, septicémie, méningite.",epi:"Mondial ; risque maximal personnes âgées/malades chroniques/nourrissons.",side:"Réaction locale, rarement fièvre. En cas d'administration avec la grippe ou le COVID-19, sites d'injection séparés.",sched:"PCV20 : adultes 1 dose (standard dès 75 ans). Nourrissons selon le calendrier."},
 mpox:{disease:"Maladie de type variolique avec lésions cutanées ; généralement spontanément résolutive.",epi:"Épidémies notamment en Afrique centrale/de l'Ouest ; contact étroit.",side:"Réaction locale ; MVA-BN non réplicatif, utilisable en cas d'immunodépression.",sched:"MVA-BN : 2 doses (≥28 j). Pour les groupes d'indication."},
 dengue:{disease:"Fièvre transmise par les moustiques ; une seconde infection peut être grave.",epi:"Tropiques/subtropiques dans le monde entier.",side:"Réaction locale. Vaccin vivant (Qdenga). En cas d'administration simultanée, sites d'injection séparés.",sched:"<ul style=\"margin:4px 0 0 20px;padding:0\"><li>Qdenga : 2 doses (0 / 3 mois)</li><li>Recommandé UNIQUEMENT après une infection dengue antérieure</li><li>Risque de formes graves chez les séronégatifs lors d'une 1re infection après vaccination !</li></ul>"},
 chikungunya:{disease:"Fièvre transmise par les moustiques, avec parfois des douleurs articulaires prolongées.",epi:"Épidémies actuelles (T2 2026) : Bolivie, Guyane française, Maurice, Mayotte, Seychelles, Suriname.",side:"Réaction locale ; Vimkunya = vaccin inactivé. <strong>Important :</strong> en cas d'administration simultanée, sites d'injection séparés. (IXCHIQ = vaccin vivant, prudence ≥65 ans.)",sched:"Vimkunya : 1 dose. Indication selon la destination/situation épidémique."}
};
for(const k in INFO_FR){ if(INFO[k]){ ['disease','epi','side','sched'].forEach(f=>{ if(INFO[k][f]&&INFO_FR[k][f]!==undefined) INFO[k][f].fr=INFO_FR[k][f]; }); } }
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

const CHR_U_PNEU = 'Unkritisch. Empfehlung Pneumokokken prüfen.';
const CHR_U_CHRON = 'Unkritisch. Bei chronischer Grunderkrankung Influenza- und Pneumokokken-Impfung prüfen.';
const CHR_U_NONE = 'Für die Reiseimpfung unkritisch.';
const CHR_IMMUNO = 'Immunsuppressive Therapie prüfen. Lebendimpfstoffe ggf. kontraindiziert.';
const CHR_TUMOR = 'Bei Chemo-/Immuntherapie Immunsuppression prüfen. Lebendimpfstoffe ggf. kontraindiziert.';
const CHRONIC_DB = [
  // — Immunologisch/impfrelevant (Warnung) —
  { name: 'HIV / AIDS', warning: true, context: 'CD4-Zellzahl prüfen. Lebendimpfstoffe ab <200/µl kontraindiziert.', syn:['HIV','AIDS'] },
  { name: 'Leukämie', warning: true, context: 'Immunsuppression wahrscheinlich. Lebendimpfstoffe kontraindiziert. Totimpfstoff-Antwort reduziert.', syn:['Blutkrebs'] },
  { name: 'Rheumatoide Arthritis', warning: true, context: 'Immunsuppressive Therapie (Biologika/MTX) prüfen. Lebendimpfstoffe ggf. kontraindiziert.', syn:['Rheuma','Gelenkrheuma','entzündliches Rheuma'] },
  { name: 'Chronisch entzündliche Darmerkrankung (Morbus Crohn, Colitis Ulcerosa)', warning: true, context: 'Immunsuppressive Therapie prüfen. Lebendimpfstoffe ggf. kontraindiziert.', syn:['Morbus Crohn','Colitis ulcerosa','Colitis','CED','Darmentzündung','chronische Darmentzündung'] },
  { name: 'Niereninsuffizienz', warning: true, context: 'Immunantwort oft reduziert (v.a. Hep B). Titerkontrollen sinnvoll.', syn:['Nierenschwäche','Nierenversagen','Dialyse','dialysepflichtig','chronische Niereninsuffizienz'] },
  { name: 'Asplenie (fehlende/funktionslose Milz)', warning: true, context: 'Dringende Indikation für Pneumokokken, Meningokokken (ACWY+B), Haemophilus influenzae.', syn:['Milzentfernung','Splenektomie','fehlende Milz','ohne Milz'] },
  { name: 'Multiple Sklerose', warning: true, context: 'Krankheitsmodifizierende Therapie prüfen (z.B. Ocrelizumab). Lebendimpfstoffe ggf. kontraindiziert.', syn:['MS'] },
  { name: 'Psoriasis', warning: true, context: 'Systemische Therapie (Biologika) prüfen. Lebendimpfstoffe ggf. kontraindiziert.', syn:['Schuppenflechte'] },
  { name: 'Lupus erythematodes / Kollagenose', warning: true, context: CHR_IMMUNO, syn:['Lupus','SLE','Kollagenose','Bindegewebserkrankung','Sklerodermie'] },
  { name: 'Maligne Tumorerkrankung (Krebs)', warning: true, context: CHR_TUMOR, syn:['Krebs','Tumor','Karzinom','Krebserkrankung','Chemotherapie','Mammakarzinom','Prostatakrebs','Darmkrebs','Lungenkrebs'] },
  // — Kardiopulmonal / metabolisch (Influenza-/Pneumokokken-Indikation prüfen) —
  { name: 'Diabetes Mellitus Typ II', warning: false, context: CHR_U_PNEU, syn:['Zucker','Zuckerkrankheit','Altersdiabetes','Diabetes','Blutzucker'] },
  { name: 'Diabetes Mellitus Typ I', warning: false, context: CHR_U_PNEU, syn:['Zuckerkrankheit','Diabetes'] },
  { name: 'Asthma bronchiale', warning: false, context: CHR_U_PNEU, syn:['Asthma'] },
  { name: 'COPD', warning: false, context: CHR_U_PNEU, syn:['chronische Bronchitis','Raucherlunge','chronisch obstruktive Lungenerkrankung'] },
  { name: 'Koronare Herzkrankheit', warning: false, context: CHR_U_CHRON, syn:['KHK','Herzkranzgefäßverengung','koronare Herzerkrankung'] },
  { name: 'Herzinsuffizienz', warning: false, context: CHR_U_CHRON, syn:['Herzschwäche','Herzmuskelschwäche'] },
  { name: 'Arterielle Hypertonie', warning: false, context: CHR_U_CHRON, syn:['Bluthochdruck','Hypertonie','hoher Blutdruck','Hochdruck'] },
  { name: 'Schlaganfall (Z. n.)', warning: false, context: CHR_U_CHRON, syn:['Schlaganfall','Apoplex','Hirninfarkt','Hirnschlag'] },
  { name: 'Adipositas', warning: false, context: CHR_U_CHRON, syn:['Übergewicht','Fettleibigkeit','Fettsucht'] },
  { name: 'Chronische Lebererkrankung (z. B. MASLD/Zirrhose)', warning: false, context: CHR_U_CHRON, syn:['Fettleber','MASLD','Leberzirrhose','Leberentzündung','Leberzirrose'] },
  { name: 'Chronische Pankreatitis', warning: false, context: CHR_U_CHRON, syn:['Bauchspeicheldrüsenentzündung','Pankreatitis'] },
  // — Orthopädisch / neurologisch / psychisch / sonstige (reiseimpf-unkritisch) —
  { name: 'Arthrose', warning: false, context: CHR_U_NONE, syn:['Gelenkverschleiß','Gelenkabnutzung'] },
  { name: 'Chronische Rückenschmerzen', warning: false, context: CHR_U_NONE, syn:['Rückenschmerzen','Rücken','Bandscheibe','Bandscheibenvorfall'] },
  { name: 'Osteoporose', warning: false, context: CHR_U_NONE, syn:['Knochenschwund'] },
  { name: 'Gicht', warning: false, context: CHR_U_NONE, syn:['Harnsäure','erhöhte Harnsäure'] },
  { name: 'Morbus Parkinson', warning: false, context: CHR_U_NONE, syn:['Parkinson','Schüttellähmung'] },
  { name: 'Demenz / Alzheimer', warning: false, context: CHR_U_NONE, syn:['Demenz','Alzheimer','Vergesslichkeit'] },
  { name: 'Epilepsie', warning: false, context: CHR_U_NONE, syn:['Krampfanfälle','Anfallsleiden','Krampfleiden'] },
  { name: 'Migräne', warning: false, context: CHR_U_NONE, syn:['Kopfschmerzen','Migraene'] },
  { name: 'Depression', warning: false, context: CHR_U_NONE, syn:['depressive Verstimmung','Depressionen'] },
  { name: 'Angststörung', warning: false, context: CHR_U_NONE, syn:['Angst','Panikstörung','Panikattacken','Angststörungen'] },
  { name: 'Suchterkrankung (Alkohol/Nikotin)', warning: false, context: CHR_U_CHRON, syn:['Alkohol','Alkoholismus','Nikotin','Rauchen','Sucht','Abhängigkeit'] },
  { name: 'Essstörung', warning: false, context: CHR_U_NONE, syn:['Magersucht','Anorexie','Bulimie','Essstörungen'] },
  { name: 'Chronisches Schmerzsyndrom', warning: false, context: CHR_U_NONE, syn:['chronische Schmerzen','Schmerzsyndrom','Dauerschmerzen'] },
  { name: 'Chronische Müdigkeit / Fatigue (CFS)', warning: false, context: CHR_U_NONE, syn:['Fatigue','chronische Müdigkeit','Erschöpfung','CFS','ME/CFS'] },
  { name: 'Allergien (Heuschnupfen u. a.)', warning: false, context: CHR_U_NONE, syn:['Allergie','Heuschnupfen','Pollenallergie','Hausstauballergie','Allergien'] },
  { name: 'Ekzem / Neurodermitis', warning: false, context: CHR_U_NONE, syn:['Neurodermitis','Ekzem','atopische Dermatitis','atopisches Ekzem'] },
  { name: 'Reizdarmsyndrom', warning: false, context: CHR_U_NONE, syn:['Reizdarm','RDS'] },
  { name: 'Chronische Gastritis', warning: false, context: CHR_U_NONE, syn:['Gastritis','Magenschleimhautentzündung'] },
  { name: 'Ulcus ventriculi / duodeni', warning: false, context: CHR_U_NONE, syn:['Magengeschwür','Zwölffingerdarmgeschwür','Ulcus','Geschwür'] },
  { name: 'Cholelithiasis (Gallensteine)', warning: false, context: CHR_U_NONE, syn:['Gallensteine','Gallenstein','Gallenblase'] },
  { name: 'Divertikulose / Divertikulitis', warning: false, context: CHR_U_NONE, syn:['Divertikel','Divertikulitis'] },
  { name: 'Zöliakie', warning: false, context: CHR_U_NONE, syn:['Glutenunverträglichkeit','Sprue','Zoeliakie'] },
  { name: 'Anämie (chronisch)', warning: false, context: CHR_U_NONE, syn:['Blutarmut','Anämie','Eisenmangel','Eisenmangelanämie'] },
  { name: 'Schlafapnoe', warning: false, context: CHR_U_NONE, syn:['Atemaussetzer','Schlafapnoe-Syndrom','Schnarchen'] },
  { name: 'Chronische Sinusitis', warning: false, context: CHR_U_NONE, syn:['Nasennebenhöhlenentzündung','Sinusitis'] },
  { name: 'Chronische Otitis media', warning: false, context: CHR_U_NONE, syn:['Mittelohrentzündung','Otitis'] },
  { name: 'Tinnitus', warning: false, context: CHR_U_NONE, syn:['Ohrgeräusche','Ohrensausen'] },
  { name: 'Altersbedingte Makuladegeneration (AMD)', warning: false, context: CHR_U_NONE, syn:['Makuladegeneration','AMD','Netzhauterkrankung'] },
  { name: 'Glaukom (Grüner Star)', warning: false, context: CHR_U_NONE, syn:['Grüner Star','Glaukom'] },
  { name: 'Katarakt (Grauer Star)', warning: false, context: CHR_U_NONE, syn:['Grauer Star','Katarakt'] }
];
/* Übersetzung der Kontext-Hinweise (EN/FR) für die chronischen Erkrankungen */
const CTX_TR={
 'Unkritisch. Empfehlung Pneumokokken prüfen.':{en:'No concern. Consider pneumococcal vaccination.',fr:'Non critique. Envisager la vaccination antipneumococcique.'},
 'CD4-Zellzahl prüfen. Lebendimpfstoffe ab <200/µl kontraindiziert.':{en:'Check CD4 count. Live vaccines contraindicated below <200/µl.',fr:'Vérifier le taux de CD4. Vaccins vivants contre-indiqués en dessous de <200/µl.'},
 'Immunsuppression wahrscheinlich. Lebendimpfstoffe kontraindiziert. Totimpfstoff-Antwort reduziert.':{en:'Immunosuppression likely. Live vaccines contraindicated. Reduced response to inactivated vaccines.',fr:'Immunosuppression probable. Vaccins vivants contre-indiqués. Réponse réduite aux vaccins inactivés.'},
 'Immunsuppressive Therapie (Biologika/MTX) prüfen. Lebendimpfstoffe ggf. kontraindiziert.':{en:'Check immunosuppressive therapy (biologics/MTX). Live vaccines possibly contraindicated.',fr:'Vérifier le traitement immunosuppresseur (biothérapies/MTX). Vaccins vivants éventuellement contre-indiqués.'},
 'Immunsuppressive Therapie prüfen. Lebendimpfstoffe ggf. kontraindiziert.':{en:'Check immunosuppressive therapy. Live vaccines possibly contraindicated.',fr:'Vérifier le traitement immunosuppresseur. Vaccins vivants éventuellement contre-indiqués.'},
 'Immunantwort oft reduziert (v.a. Hep B). Titerkontrollen sinnvoll.':{en:'Immune response often reduced (esp. Hep B). Titre checks advisable.',fr:'Réponse immunitaire souvent réduite (surtout hép. B). Contrôles de titre conseillés.'},
 'Dringende Indikation für Pneumokokken, Meningokokken (ACWY+B), Haemophilus influenzae.':{en:'Urgent indication for pneumococcal, meningococcal (ACWY+B), Haemophilus influenzae.',fr:'Indication urgente pour le pneumocoque, le méningocoque (ACWY+B), Haemophilus influenzae.'},
 'Krankheitsmodifizierende Therapie prüfen (z.B. Ocrelizumab). Lebendimpfstoffe ggf. kontraindiziert.':{en:'Check disease-modifying therapy (e.g. ocrelizumab). Live vaccines possibly contraindicated.',fr:'Vérifier le traitement de fond (p. ex. ocrélizumab). Vaccins vivants éventuellement contre-indiqués.'},
 'Systemische Therapie (Biologika) prüfen. Lebendimpfstoffe ggf. kontraindiziert.':{en:'Check systemic therapy (biologics). Live vaccines possibly contraindicated.',fr:'Vérifier le traitement systémique (biothérapies). Vaccins vivants éventuellement contre-indiqués.'},
 'Unkritisch. Bei chronischer Grunderkrankung Influenza- und Pneumokokken-Impfung prüfen.':{en:'No concern. With a chronic condition, consider influenza and pneumococcal vaccination.',fr:'Non critique. En cas de maladie chronique, envisager la vaccination antigrippale et antipneumococcique.'},
 'Für die Reiseimpfung unkritisch.':{en:'No concern for travel vaccination.',fr:'Sans conséquence pour la vaccination du voyageur.'},
 'Bei Chemo-/Immuntherapie Immunsuppression prüfen. Lebendimpfstoffe ggf. kontraindiziert.':{en:'Check for immunosuppression under chemo/immunotherapy. Live vaccines possibly contraindicated.',fr:'Vérifier l\'immunosuppression sous chimio/immunothérapie. Vaccins vivants éventuellement contre-indiqués.'}
};
function ctxT(de){const m=CTX_TR[de]; if(!m)return de||''; return LANG==='de'?de:(LANG==='fr'?m.fr:m.en);}

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
  if(d<=1)return {de:'gleicher Termin möglich',en:'same visit possible',fr:'même rendez-vous possible'};
  if(d<=7)return {de:'Mindestabstand 1 Woche',en:'min. interval 1 week',fr:'intervalle min. 1 semaine'};
  if(d<=14)return {de:'Mindestabstand 2 Wochen',en:'min. 2 weeks',fr:'intervalle min. 2 semaines'};
  if(d<=21)return {de:'Mindestabstand 3 Wochen',en:'min. 3 weeks',fr:'intervalle min. 3 semaines'};
  if(d<=35)return {de:'Mindestabstand 1 Monat',en:'min. 1 month',fr:'intervalle min. 1 mois'};
  // Ab hier auf ganze Monate runden (d/30,4), damit z.B. 150 Tage = „ca. 5 Monate" und nicht „6".
  const m=Math.round(d/30.4);
  return {de:'Mindestabstand ca. '+m+' Monate',en:'min. ~'+m+' months',fr:'intervalle min. ~'+m+' mois'};
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
    let planName = (vName(v));
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
       if (tF) planName += ' (' + L2(tF).split('(')[0].trim() + ')';
     } else if (v.k === 'mmr') { planName = (LX('Masern, Mumps, Röteln','Measles, Mumps, Rubella')) + ' (MMRvaxPro)';
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

  let quickHTML = '<div class="card-desc" style="margin-bottom:12px;font-weight:600">' + (LX('Klicken Sie auf Impfstoffe, um sie in den Terminplan aufzunehmen.','Click vaccines to add them to the schedule.')) + '</div><div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:24px;padding-bottom:16px;border-bottom:1px solid var(--line);">';
  
  VACCINES.forEach(v => {
      const st = vaxState[v.k];
      if (!st) return;
      
      const renderPill = (name, status, subKey, plannedStatus) => {
         if (!status || !['green','red','yellow','grey','blue','violet'].includes(status)) return '';
         let isPlanned = st[plannedStatus] ? true : false;
         let bg = 'var(--grey-xl)', fg = 'var(--text)', border = 'var(--line)';
         if (isPlanned) { bg = '#f3e5f5'; fg = '#6a1b9a'; border = '#ce93d8'; }
         else {
             if(status === 'red') { bg = '#ffebee'; fg = '#d32f2f'; border = '#ffcdd2'; }
             else if(status === 'green') { bg = '#e8f5e9'; fg = '#2e7d32'; border = '#c8e6c9'; }
             else if(status === 'yellow') { bg = '#fff8e1'; fg = '#f57f17'; border = '#ffecb3'; }
             else if(status === 'blue') { bg = '#e3f2fd'; fg = '#1565c0'; border = '#90caf9'; }
             else if(status === 'violet') { bg = '#f2e9fb'; fg = '#6a1b9a'; border = '#e1bee7'; }
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
            if (['green','red','yellow','grey','blue','violet'].includes(ipvStt)) {
                quickHTML += renderPill('Polio (IPV)', ipvStt, 'planned_ipv', 'planned_ipv');
            }
            return;
        }

        let stt = 'grey';
        if (v.menacwy) stt = menacwyAssess().status;
        else stt = assess(v).status;
        
        if (!['green','red','yellow','grey','blue','violet'].includes(stt)) return;
        let isPlanned = st.planned ? true : false;
        let bg = 'var(--grey-xl)', fg = 'var(--text)', border = 'var(--line)';
        if (isPlanned) { bg = '#f3e5f5'; fg = '#6a1b9a'; border = '#ce93d8'; }
        else {
            if(stt === 'red') { bg = '#ffebee'; fg = '#d32f2f'; border = '#ffcdd2'; }
            else if(stt === 'green') { bg = '#e8f5e9'; fg = '#2e7d32'; border = '#c8e6c9'; }
            else if(stt === 'yellow') { bg = '#fff8e1'; fg = '#f57f17'; border = '#ffecb3'; }
            else if(stt === 'blue') { bg = '#e3f2fd'; fg = '#1565c0'; border = '#90caf9'; }
            else if(stt === 'violet') { bg = '#f2e9fb'; fg = '#6a1b9a'; border = '#e1bee7'; }
        }
        let name = (vName(v));
        if (v.k === 'mmr') name = (LX('Masern, Mumps, Röteln','Measles, Mumps, Rubella'));
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
    container.innerHTML = quickHTML + '<div class="empty" data-i18n="noPlan">'+(LX('Noch keine Impfungen zur Planung markiert.','No vaccinations planned yet.'))+'</div>';
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
              depAlert += ` <span style="color:var(--red);font-weight:bold;margin-left:8px;">${LX('Zeit reicht evtl. nicht!','May be insufficient!')}</span>`;
          }
      }
      html += `<div style="padding:10px 14px; background:var(--grey-xl); border:1px solid var(--line); border-radius:6px; margin-bottom:16px; font-size:13px; color:var(--text);display:flex;align-items:center;justify-content:center;">
        <strong>${LX('Benötigte Zeit vor Ort: ca.','Time needed on site: ~')} ${nearDays} ${LX('Tage','days')}</strong>${depAlert}
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
        let inputHtml = ` <input type="number" value="${diffW}" min="0" max="150" style="width:45px;height:20px;font-size:11px;text-align:center;border:1px solid var(--line);border-radius:3px;margin:0 4px;" title="${LX('Wochen','Weeks')}" onchange="window.hUpdateBucketOffset(this, ${idx}, ${prevOffset})"> <span style="font-weight:normal">${LX('Wochen','weeks')}</span>`;
        let delBtn = `<span style="cursor:pointer;color:var(--red);margin-left:16px;font-weight:600;" onclick="window.hRemoveBucket(${idx})">✕ ${LX('Termin löschen','Delete Appt')}</span>`;
        let doneBtn = `<span style="cursor:pointer;color:var(--primary);margin-left:16px;font-weight:600;text-decoration:underline" onclick="window.toggleBucketEdit(${idx})">${LX('Fertig','Done')}</span>`;
        let minW = b.minAllowedOffset !== undefined ? Math.round(b.minAllowedOffset/7) : 0;
        let minText = minW > 0 ? (LANG==='de'?`${minW} Wochen ab heute`:(LANG==='fr'?`${minW} semaines à partir d'aujourd'hui`:`${minW} weeks from today`)) : (LX('Unabhängig','Independent'));
        let minHtml = `<div style="font-size:11px;color:var(--grey);margin-bottom:4px;display:inline-block;margin-right:12px">${LX('Mindestabstand:','Minimum interval:')} <span style="font-weight:600">${minText}</span></div>`;
        subtitle = `<div>${minHtml}</div><div style="font-size:12px;color:var(--text);display:flex;align-items:center;">${LX('Abstand (Wochen):','Interval (weeks):')}${inputHtml} ${delBtn} ${doneBtn}</div>`;
    } else {
        if (offset === 0 && idx === 0) {
            subtitle = `<div style="font-size:13px;color:var(--grey);font-weight:500;">${LX('Heute (0 Wochen)','Today (0 weeks)')}</div>`;
        } else {
            // Absolute Zeit ab heute – Monate als echte Kalendermonate (~30,44 Tage),
            // damit z. B. 180 Tage = 6 Monate (nicht 6 Monate + 2 Wochen).
            let absM = Math.floor(offset / 30.44);
            let absRem = Math.round((offset - Math.round(absM * 30.44)) / 7);
            if (absRem >= 4) { absM += 1; absRem -= 4; }   // fast voller Monat -> aufrunden
            let absText = '';
            if (offset === 0) absText = LX('Heute','Today');
            else {
                let amTxt = absM === 1 ? (LX('1 Monat','1 month')) : (absM > 1 ? (LANG==='de'?`${absM} Monaten`:(LANG==='fr'?`${absM} mois`:`${absM} months`)) : '');
                let awTxt = absRem === 1 ? (LX('1 Woche','1 week')) : (absRem > 1 ? (LANG==='de'?`${absRem} Wochen`:(LANG==='fr'?`${absRem} semaines`:`${absRem} weeks`)) : '');
                if (absM > 0 && absRem > 0) absText = `In ${amTxt} + ${awTxt}`;
                else if (absM > 0) absText = `In ${amTxt}`;
                else if (absRem > 0) absText = `In ${awTxt}`;
                else absText = LX('In Kürze','Soon');
            }
            // Bindende Ursache: Abstand zur vorherigen DOSIS derselben Impfung (nicht zum vorherigen Termin)
            let reasonHtml = '';
            if (b.reason) {
                if (b.reason.type === 'live') {
                    reasonHtml = LANG==='de' ? '2 Lebendimpfstoffe: mind. 4 Wochen Abstand' : (LANG==='fr' ? '2 vaccins vivants : min. 4 semaines d\'écart' : '2 live vaccines: min. 4 weeks apart');
                } else {
                    let gt = gapText(b.reason.gap); gt = L2(gt);
                    let prevIdx = buckets.findIndex(bb => bb.offset === b.reason.prevOffset);
                    let prevLbl = prevIdx >= 0 ? ((LX('Termin ','Appt '))+(prevIdx+1)) : '';
                    reasonHtml = `${b.reason.name}: ${gt} ${LX('nach vorheriger Dosis','after previous dose')}${prevLbl?` (${prevLbl})`:''}`;
                }
            }
            if (reasonHtml) {
                subtitle = `<div style="font-size:13px;color:var(--grey);font-weight:500;">${reasonHtml} <span style="color:var(--text);font-weight:bold;margin-left:8px">• ${absText}</span></div>`;
            } else {
                // Flexibel = keine feste Zeitvorgabe → keine widersprüchliche "In X"-Angabe
                subtitle = `<div style="font-size:13px;color:var(--grey);font-style:italic;">${LX('Flexibel terminierbar','Flexible')}</div>`;
            }
        }
    }
    
    let editIcon = !isEdit ? `<span class="icon-btn" onclick="window.toggleBucketEdit(${idx})" title="${LX('Bearbeiten','Edit')}">${PENCIL_SVG}</span>` : '';
    let dateAlert = (daysDep !== null && offset > daysDep) ? '<span style="color:var(--red);font-weight:bold;font-size:12px;margin-left:8px">Nach Abreise</span>' : '';

    let itemsHtml = b.items.map(it => {
       // COVID-19 wird an der Charité nicht verimpft → fest extern, nicht verschiebbar (kein Drag&Drop).
       if (it.k === 'covid') {
          return `<div class="sched-item covid-fixed" id="${it.id}" draggable="false" data-name="${it.name}" data-k="${it.k}" data-stkey="${it.stKey}" data-planfield="${it.planField}" data-live="${it.live}" data-reacto="${it.isReacto}" style="cursor:default;opacity:.9;">
            <div style="flex:1;"><b>${it.displayName}</b> <span class="grp-badge" title="${LX('Nur beim Hausarzt/extern','Only at GP/external')}">${LX('Extern','External')}</span></div>
            <div style="display:flex; gap:12px; align-items:center;">
               <span class="icon-btn del" onclick="hRemoveItem('${it.id}'); event.stopPropagation();" title="${LX('Impfung entfernen','Remove vaccine')}">✕</span>
            </div>
          </div>`;
       }
       return `<div class="sched-item" id="${it.id}" draggable="true" ondragstart="hDragStart(event)" ondragend="hDragEnd(event)" data-name="${it.name}" data-k="${it.k}" data-stkey="${it.stKey}" data-planfield="${it.planField}" data-live="${it.live}" data-reacto="${it.isReacto}">
         <div style="cursor:grab;flex:1;"><b>${it.displayName}</b> ${it.live ? '<span class="live-dot" title="Lebendimpfstoff">L</span>' : ''}</div>
         <div style="display:flex; gap:12px; align-items:center;">
            <span class="icon-btn del" onclick="hRemoveItem('${it.id}'); event.stopPropagation();" title="${LX('Impfung entfernen','Remove vaccine')}">✕</span>
            <div style="color:var(--grey);font-size:14px;cursor:grab;">☰</div>
         </div>
       </div>`;
    }).join('');

    if (itemsHtml === '') {
       itemsHtml = `<div style="color:var(--grey);font-size:12px;text-align:center;padding:10px;">${LX('Impfungen hierhin ziehen','Drag vaccinations here')}</div>`;
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
    <button class="btn sec" style="flex:1;border:1px dashed var(--line);font-size:12px;padding:6px" onclick="hAddAppt(false)">+ ${LX('Charité-Termin','Add Appt')}</button>
    <button class="btn sec" style="flex:1;border:1px dashed var(--line);font-size:12px;padding:6px" onclick="hAddAppt(true)">+ ${LX('Externer Termin','Add Ext. Appt')}</button>
  </div>`;

  let maxItems = 0;
  buckets.forEach(b => { if(b.items.length > maxItems) maxItems = b.items.length; });
  if (maxItems >= 5) {
      html += '<div class="warn-box red" style="margin-top:12px;margin-bottom:0"><strong>Achtung:</strong> ' + 
              (LX('Viele (≥5) Impfungen an einem Tag geplant. Es wird empfohlen, die Impfungen besser aufzuteilen.','Warning: Many (≥5) vaccinations planned for one day. It is recommended to split them up.')) + 
              '</div>';
  } else if (maxItems >= 3) {
      html += '<div class="warn-box amber" style="margin-top:12px;margin-bottom:0"><strong>Hinweis:</strong> ' + 
              (LANG==='de'?`${maxItems} Impfungen an einem Tag geplant. Es wird empfohlen, die Impfungen ggf. besser aufzuteilen.`:(LANG==='fr'?`${maxItems} vaccins prévus le même jour. Il est recommandé de mieux les répartir si possible.`:`${maxItems} vaccinations planned for one day. It is recommended to split them up if possible.`)) +
              '</div>';
  }

  const lives = planned.filter(p => p.live);
  if (lives.length >= 2) {
     html += '<div class="warn-box info" style="margin-top:12px;margin-bottom:0">' + 
             (LX('Bei Lebendimpfstoffen gilt: Entweder am selben Tag impfen oder mind. 4 Wochen Abstand einhalten.','Live vaccines must be given on the same day or ≥4 weeks apart.')) + 
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
  const title = staff ? (LX('Medikamenten-Übersicht (VacCheck · DTG 2026)','Medication overview (VacCheck · DTG 2026)')) : (LX('Ihre Medikamente','Your medication'));
  if(!staff){
    box.innerHTML = '<div class="white-pill-wrap">' + medsList.map((m,i)=>{
      const d=lookupDrug(m);
      const rm='<button class="vc-rm" onclick="removeMed('+i+')" title="'+(LX('Entfernen','Remove'))+'">✕</button>';
      const nm=d?d.substance:m;
      return '<div class="white-pill"><span class="vc-name">'+_esc(nm)+brands(d)+'</span>'+rm+'</div>';
    }).join('') + '</div>';
    return;
  }
  box.innerHTML='<div class="vc-title">'+title+'</div>'+medsList.map((m,i)=>{
    const d=lookupDrug(m);
    const rm='<button class="vc-rm" onclick="removeMed('+i+')" title="'+(LX('Entfernen','Remove'))+'">✕</button>';
    if(!d) return '<div class="vc-card grey"><div class="vc-h"><span class="vc-name">'+_esc(m)+'</span><span class="vc-hr"><span class="vc-badge grey">'+(LX('nicht in DB','not in DB'))+'</span>'+rm+'</span></div><div class="vc-note">'+(LX('Immunsuppressive Wirkung manuell prüfen.','Check immunosuppressive effect manually.'))+'</div></div>';
    if(!d.is_immunosuppressant) return '<div class="vc-card green"><div class="vc-h"><span class="vc-name">'+_esc(d.substance)+brands(d)+'</span><span class="vc-hr"><span class="vc-badge green">'+(LX('unkritisch','no concern'))+'</span>'+rm+'</span></div></div>';
    return '<div class="vc-card red"><div class="vc-h"><span class="vc-name">'+_esc(d.substance)+brands(d)+'</span><span class="vc-hr"><span class="vc-badge red">'+(LX('Immunsuppressivum','Immunosuppressant'))+'</span>'+rm+'</span></div>'+
      (d.drug_class?'<div class="vc-row"><b>'+(LX('Substanzklasse','Class'))+':</b> '+_esc(d.drug_class)+'</div>':'')+
      (d.class_abstract?'<div class="vc-abstract">'+_esc(d.class_abstract)+'</div>':'')+
      '<div class="vc-grid"><div><b>'+(LX('Lebendimpfung','Live vaccine'))+':</b> '+_esc(d.live_vaccine_allowed||'—')+'</div><div><b>'+(LX('Therapiepause','Therapy pause'))+':</b> '+_esc(d.therapy_pause_needed||'—')+'</div><div><b>'+(LX('Totimpfstoff-Antwort','Inactivated response'))+':</b> '+_esc(d.immune_response_dead_vaccine||'—')+'</div></div></div>';
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
      return '<div class="vc-card red"><div class="vc-h"><span class="vc-name">'+_esc(label)+'</span><span class="vc-hr"><span class="vc-badge red">'+(LANG==='de'?'Lebendimpfstoff':(LANG==='fr'?'Vaccin vivant':'Live vaccine'))+'</span>'+rm+'</span></div><div class="vc-note">'+(LANG==='de'?'Achtung: Lebendimpfstoff in den letzten 4 Wochen! Abstand zu anderen Lebendimpfstoffen (z.B. Gelbfieber, MMR, Varizellen) von mind. 4 Wochen einhalten.':(LANG==='fr'?'Attention : vaccin vivant au cours des 4 dernières semaines ! Respecter un intervalle d\'au moins 4 semaines avec d\'autres vaccins vivants (p. ex. fièvre jaune, ROR, varicelle).':'Caution: live vaccine within the last 4 weeks! Keep at least 4 weeks apart from other live vaccines (e.g. yellow fever, MMR, varicella).'))+'</div></div>';
    }
    return '<div class="vc-card green"><div class="vc-h"><span class="vc-name">'+_esc(label)+'</span><span class="vc-hr"><span class="vc-badge green">'+(LANG==='de'?'Totimpfstoff / Unkritisch':(LANG==='fr'?'Vaccin inactivé / non critique':'Inactivated / no concern'))+'</span>'+rm+'</span></div></div>';
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
      return '<div class="vc-card red"><div class="vc-h"><span class="vc-name">'+_esc(cr)+'</span><span class="vc-hr"><span class="vc-badge red">'+(LANG==='de'?'Warnung':(LANG==='fr'?'Avertissement':'Warning'))+'</span>'+rm+'</span></div><div class="vc-note">'+_esc(ctxT(d.context))+'</div></div>';
    } else if(d && !d.warning) {
      return '<div class="vc-card green"><div class="vc-h"><span class="vc-name">'+_esc(cr)+'</span><span class="vc-hr"><span class="vc-badge green">'+(LANG==='de'?'Unkritisch':(LANG==='fr'?'Non critique':'No concern'))+'</span>'+rm+'</span></div><div class="vc-note">'+_esc(ctxT(d.context))+'</div></div>';
    }
    return '<div class="vc-card grey"><div class="vc-h"><span class="vc-name">'+_esc(cr)+'</span><span class="vc-hr"><span class="vc-badge grey">'+(LX('nicht in DB','not in DB'))+'</span>'+rm+'</span></div></div>';
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
    const nm=d.name.toLowerCase();
    if(nm.includes(v)){
      out.push({label:d.name, add:d.name, starts:nm.startsWith(v)});
      continue;
    }
    // Umgangssprachliche Synonyme (z. B. „Bluthochdruck" → Arterielle Hypertonie)
    const syn=(d.syn||[]).find(s=>s.toLowerCase().includes(v));
    if(syn){
      out.push({label:d.name+' — '+syn, add:d.name, starts:syn.toLowerCase().startsWith(v)});
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
 yellowfever:{de:'1 Dosis: WHO betrachtet als lebenslangen Schutz. STIKO empfiehlt Auffrischung nach 10 J. ≥2 Dosen: lebenslanger Schutz.',en:'1 dose: WHO considers lifelong. STIKO recommends booster after 10 yrs. ≥2 doses: lifelong protection.',fr:'1 dose : l\'OMS considère la protection comme à vie. La STIKO recommande un rappel après 10 ans. ≥2 doses : protection à vie.'},
 mmr:{de:'2 Dosen lebenslang – kein Booster',en:'2 doses lifelong — no booster',fr:'2 doses à vie – pas de rappel'},
 varicella:{de:'2 Dosen lebenslang – kein Booster',en:'2 doses lifelong — no booster',fr:'2 doses à vie – pas de rappel'},
 typhoid:{de:'Schutz ~3 Jahre – Wiederholung nur bei erneuter Reiseindikation',en:'~3 years — repeat only on renewed travel indication',fr:'~3 ans – répéter uniquement en cas de nouvelle indication de voyage'},
 jev:{de:'Nach Booster (12–24 M) ~10 Jahre; nach Grundimmunisierung 1–2 Jahre',en:'~10 yrs after booster (12–24 mo); 1–2 yrs after primary series',fr:'~10 ans après rappel (12–24 mois) ; 1–2 ans après primovaccination'},
 rabies:{de:'Grundimmunisiert – lebenslang „primed", kein routinemäßiger Booster (bei Biss 2 Dosen PEP, kein Immunglobulin)',en:'Primed for life — no routine booster (2-dose PEP if bitten, no immunoglobulin)',fr:'Primo-immunisé à vie – pas de rappel de routine (2 doses PPE en cas de morsure, sans immunoglobuline)'},
 tbe:{de:'Auffrischung alle 3–5 Jahre (>50 J.: alle 3 J.) bei fortbestehender Exposition',en:'Booster every 3–5 yrs (>50: every 3) with ongoing exposure',fr:'Rappel tous les 3–5 ans (>50 ans : tous les 3 ans) en cas d\'exposition persistante'},
 hpv:{de:'Serie abgeschlossen – kein Booster',en:'Series complete — no booster',fr:'Série terminée – pas de rappel'},
 influenza:{de:'Jährlich (saisonal)',en:'Annually (seasonal)',fr:'Annuel (saisonnier)'},
 covid:{de:'Saisonal / risikoabhängig (STIKO)',en:'Seasonal / risk-based (STIKO)',fr:'Saisonnier / selon le risque (STIKO)'},
 zoster:{de:'2 Dosen – kein Booster',en:'2 doses — no booster',fr:'2 doses – pas de rappel'},
 pneumo:{de:'PCV20 einmalig – kein routinemäßiger Booster',en:'PCV20 once — no routine booster',fr:'PCV20 en une fois – pas de rappel de routine'},
 mpox:{de:'2 Dosen – kein etablierter Booster',en:'2 doses — no established booster',fr:'2 doses – pas de rappel établi'},
 dengue:{de:'2 Dosen – keine Booster-Daten',en:'2 doses — no booster data',fr:'2 doses – pas de données de rappel'},
 chikungunya:{de:'1 Dosis – keine Booster-Daten',en:'1 dose — no booster data',fr:'1 dose – pas de données de rappel'},
 menb:{de:'Serie abgeschlossen – kein routinemäßiger Booster',en:'Series complete — no routine booster',fr:'Série terminée – pas de rappel de routine'},
 cholera:{de:'Schutz ~2 Jahre – Auffrischung nur bei erneuter Exposition',en:'~2 years — booster only on renewed exposure',fr:'~2 ans – rappel uniquement en cas de nouvelle exposition'},
 polio:{de:'Grundimmunisierung + 1 Auffrischung: lebenslang. Für Risikoländer Auffrischung alle 10 J.',en:'Primary series + 1 booster: lifelong. Booster every 10 yrs for risk countries.',fr:'Primovaccination + 1 rappel : à vie. Rappel tous les 10 ans pour les pays à risque.'},
};
function tbeForm(){const a=ageExact(el('p-dob').value);if(a===null||a<1)return null;return a<12?{de:'Encepur Kinder (0,25 ml)',en:'Encepur paediatric (0.25 ml)',fr:'Encepur enfant (0,25 ml)'}:{de:'Encepur Erwachsene (0,5 ml)',en:'Encepur adult (0.5 ml)',fr:'Encepur adulte (0,5 ml)'};}
function hepForm(kind){
  const age=ageExact(el('p-dob').value);const child=age!==null&&age<16;const infant=age!==null&&age<1;
  if(kind==='a')return child?(infant?'Havrix (Säugling – FI)':'Havrix 720 Kinder'):'Avaxim (Erw.)';
  if(kind==='b')return child?'Engerix-B Kinder':'Engerix-B Erwachsene';
  return child?(infant?'<1 J.: Einzelimpfstoffe':'Twinrix Kinder'):'Twinrix Erwachsene';
}

function buildDestSelect(){
  const sel=el('dest-select');const list=[...ALL_COUNTRIES].sort((a,b)=>(LANG==='de'?a.de.localeCompare(b.de,'de'):a.en.localeCompare(b.en,'en')));
  const countries=list.filter(c=>!c.terr),terrs=list.filter(c=>c.terr);
  let html='<option value="">— '+(LX('Land wählen','Select country'))+' —</option><optgroup label="'+(LX('Länder','Countries'))+'">';
  countries.forEach(c=>html+='<option value="'+c.code+'">'+cName(c)+'</option>');
  html+='</optgroup><optgroup label="'+(LX('Überseegebiete','Overseas territories'))+'">';
  terrs.forEach(c=>html+='<option value="'+c.code+'">'+cName(c)+'</option>');
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
function renderDestChips(){el('dest-chips').innerHTML=destinations.map(code=>{const c=CBY[code];const d=window.countryData[code] ? window.countryData[code].diseases : null;const isYFMand = d && d.yellow_fever && d.yellow_fever.risk_level === 'mandatory_all';const isMenMand = (code === 'SA');const mand = isYFMand || isMenMand;return '<div class="chip'+(mand?' mand':'')+'">'+flagImg(code)+cName(c)+(c.terr?' *':'')+' <span onclick="removeDest(\''+code+'\')">×</span></div>';}).join('');}

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
    const tip=isGt?(LANG==='de'?'mehr als '+combo.ex[1]+' – erneut klicken zum Abwählen':(LANG==='fr'?'plus de '+combo.ex[1]+' – recliquer pour désélectionner':'more than '+combo.ex[1])):(LANG==='de'?'genau '+combo.ex[1]+' – erneut klicken für „>'+combo.ex[1]+'“':(LANG==='fr'?'exactement '+combo.ex[1]+' – recliquer pour « >'+combo.ex[1]+' »':'exactly '+combo.ex[1]+' – click again for ">'+combo.ex[1]+'"'));
    h+='<span class="dose-chip combo'+(sel?' selected':'')+(isGt?' gt':'')+'" '+mkClick(next)+' title="'+tip+'">'+label+'</span>';
  }
  return h+'</div>';
}
function renderDoseChips(k){
  if(YEAR_ONLY.includes(k))return '<span class="mini-note">'+(LX('nur „zuletzt geimpft" →','only “last vaccinated” →'))+'</span>';
  const cur=vaxState[k].done||'';const spec=DOSE_MAP[k]||DEFAULT_DOSE;
  return buildDoseChips(spec,cur,(val)=>'onclick="setDose(\''+k+'\',\''+val+'\')"');}
function setDose(k,val){vaxState[k].done=(vaxState[k].done===val)?'':val;renderVaxTable();}
function yrPh(){return LANG==='fr'?'AAAA':(LANG==='en'?'YYYY':'JJJJ');}
function yearInput(k,field){const y=vaxState[k][field];return '<input type="text" inputmode="numeric" maxlength="4" class="year-in" placeholder="'+yrPh()+'" value="'+(y||'')+'" onchange="setYear(\''+k+'\',\''+field+'\',this.value)">';}
function setYear(k,field,raw){const s=(raw||'').replace(/\D/g,'');const cur=new Date().getFullYear();let full='';
  if(s.length===0)full='';
  else if(s.length<=2){const yy=parseInt(s,10);const curYY=cur%100;full=(yy<=curYY?2000+yy:1900+yy);}
  else if(s.length===4)full=parseInt(s,10);
  else full=parseInt(s.slice(-4),10);
  if(full&&(full<1900||full>cur))full='';
  vaxState[k][field]=full?String(full):'';renderVaxTable();}
function providerSelect(k,field){field=field||'prov';const on=(vaxState[k][field]&&vaxState[k][field]!=='charite');const who=t(provResolve('ext')==='paed'?'provPaed':'provGP');
  return '<button class="ext-btn'+(on?' on':'')+'" onclick="toggleExtern(\''+k+'\',\''+field+'\')">'+(on?'✓ '+(LX('Extern: ','External: '))+who:(LX('Extern','External')))+'</button>';}
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
    if(av.flag==='na')availBadge='<span class="badge grey">'+(LANG==='de'?av.badgeDe:(LANG==='fr'?(av.badgeFr||av.badgeEn):av.badgeEn))+'</span>';
    else if(av.flag==='age')availBadge='<span class="badge red">'+(LANG==='de'?av.badgeDe:(LANG==='fr'?(av.badgeFr||av.badgeEn):av.badgeEn))+'</span>';
    else if(av.flag==='caution')availBadge='<span class="badge yellow">'+(LANG==='de'?av.badgeDe:(LANG==='fr'?(av.badgeFr||av.badgeEn):av.badgeEn))+'</span>';
    const availNote=(av.flag==='na'||av.flag==='age')?'<div class="reason" style="margin-top:4px;">'+(LANG==='de'?av.noteDe:(LANG==='fr'?(av.noteFr||av.noteEn):av.noteEn))+'</div>':(av.flag==='caution'?'<div class="reason" style="margin-top:4px;">'+(LANG==='de'?av.noteDe:(LANG==='fr'?(av.noteFr||av.noteEn):av.noteEn))+'</div>':'');
    const liveNote=la?'<div class="reason" style="color:'+(la.level==='block'?'var(--red)':'var(--yellow)')+';font-weight:600">'+L2(la)+'</div>':'';
    const infoBtn=(DISEASE_MAPS[v.k]?'<button class="map-btn" onclick="showMap(\''+v.k+'\')" title="'+(LX('Verbreitungskarte','Distribution map'))+'">'+(LX('K','M'))+'</button>':'')+'<button class="info-btn" onclick="showInfo(\''+v.k+'\')" title="Info">i</button>';

    if(v.tdap_polio){
      const a = tdapPolioAssess();
      const age = ageExact(el('p-dob').value);
      const infant = age !== null && age < 5;
      
      const lbls={T:t('T'),D:t('D'),aP:t('aP'),IPV:'IPV'};
      const compBadges='<div class="comp-badges" style="margin-bottom:8px;">'+['T','D','aP','IPV'].map(cc=>'<span class="comp '+a[cc]+'">'+lbls[cc]+'</span>').join('')+'</div>'+
        (a.unvaxxed?'<div class="reason"><span class="badge red" style="margin-bottom:4px;display:inline-block">'+(LX('Dringend empfohlen','Strongly recommended'))+'</span><br>'+(LX('Bisher keine Impfung erfolgt','No prior vaccination'))+'</div>':'')+
        (a.infantOngoing?'<div class="reason">'+(LX('Altersgerechte, laufende Grundimmunisierung','Age-appropriate, ongoing primary series'))+'</div>':'');

      const dOpts=[['0','0'],['1','1'],['2','2'],['3','3'],['>3','>3']];
      const dSel=dOpts.map(o=>'<option value="'+o[0]+'"'+(st.doses_hexa===o[0]?' selected':'')+'>'+o[1]+'</option>').join('');

      function yrIn(f){return '<input type="text" inputmode="numeric" maxlength="4" class="year-in" placeholder="'+yrPh()+'" value="'+(st[f]||'')+'" onchange="setYear(\'tdap_polio\',\''+f+'\',this.value)">';}

      let col2 = '<div class="ctrl-box" style="margin-bottom:6px;"><label class="chk-line" style="margin-top:0; font-size:11px; color:var(--grey); cursor:pointer"><input type="checkbox" '+(st.gi_tdap?'checked':'')+' onchange="setField(\'tdap_polio\',\'gi_tdap\',this.checked)"> '+(LX('GI TDaP komplett','Primary TDaP complete'))+'</label></div>'+
                 '<div class="ctrl-box" style="margin-bottom:10px;"><label class="chk-line" style="margin-top:0; font-size:11px; color:var(--grey); cursor:pointer"><input type="checkbox" '+(st.gi_ipv?'checked':'')+' onchange="setField(\'tdap_polio\',\'gi_ipv\',this.checked)"> '+(LX('GI IPV komplett','Primary IPV complete'))+'</label></div>'+
                 '<div style="margin-bottom:4px;font-size:11px;color:var(--grey)">'+(LX('Hexavalent-Dosen (Kindheit):','Hexavalent doses (childhood):'))+'</div>'+
                 '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">'+
                   '<select class="hexa-sel" onchange="setField(\'tdap_polio\',\'doses_hexa\',this.value)"><option value="">—</option>'+dSel+'</select>'+
                   '<span style="font-size:11px;color:var(--grey)">'+(LX('Jahr','Year'))+'</span>'+yrIn('y_hexa')+
                 '</div>';

      let col3 = '<div style="display:flex; flex-direction:column; gap:6px; font-size:11px;">'+
                   '<div style="display:flex; flex-direction:column; margin-bottom:6px; padding-bottom:8px; border-bottom:1px dashed var(--line);">'+
                     '<div style="font-size:10px; color:var(--grey); margin-bottom:4px; text-transform:uppercase; letter-spacing:0.05em;">'+(LX('Kombi-Schnelleingabe','Quick-Fill Combo'))+'</div>'+
                     '<div style="display:flex; gap:4px; align-items:center; flex-wrap:wrap;">'+
                       '<input type="text" inputmode="numeric" maxlength="4" class="year-in" placeholder="'+yrPh()+'" id="quick_tdap_yr" onchange="quickFillTdap(this.value)">'+
                       '<button class="ext-btn'+(st.quick_type==='tdap_ipv'?' on':'')+'" style="margin-top:0;padding:4px 6px;font-size:10px;" onclick="setQuickTdapType(\'tdap_ipv\')">Tdap-IPV</button>'+
                       '<button class="ext-btn'+(st.quick_type==='tdap'?' on':'')+'" style="margin-top:0;padding:4px 6px;font-size:10px;" onclick="setQuickTdapType(\'tdap\')">Tdap</button>'+
                     '</div>'+
                   '</div>'+
                   '<div class="yr-row"><span>'+(LX('Letzte Td','Last Td'))+'</span>'+yrIn('y_td')+'</div>'+
                   '<div class="yr-row"><span>'+(LX('Letzte aP','Last aP'))+'</span>'+yrIn('y_ap')+'</div>'+
                   '<div class="yr-row"><span>'+(LX('Letzte IPV','Last IPV'))+'</span>'+yrIn('y_ipv')+'</div>'+
                 '</div>';

      html+='<tr class="combo-row"><td data-label="'+t('thVax')+'"><div class="vname" style="display:flex;align-items:center;">'+(vName(v))+availBadge+'</div><div class="vsub">'+(LX('Basis-Impfschutz','Core vaccines'))+'</div></td>'+
        '<td data-label="'+t('thDone')+'">'+col2+'</td>'+
        '<td data-label="'+t('thLast')+'">'+col3+'</td>'+
        '<td class="status" data-label="'+t('thStatus')+'"><div class="row-info">'+infoBtn+'</div><div style="min-height:48px;">'+compBadges+(a.ipvNote&&a.ipvNote.de?'<div class="reason" style="margin-top:6px;border-top:1px solid var(--line);padding-top:4px"><b>Polio:</b> '+L2(a.ipvNote)+'</div>':'')+'</div></td></tr>';return;
    }
    if(v.hep){
      const ha=hepAssess();
      const hepLbl=(s)=>{
        if(s==='green') return LANG==='de'?'Geschützt':(LANG==='fr'?'Protégé':'Protected');
        if(s==='yellow') return LANG==='de'?'Empfohlen':(LANG==='fr'?'Recommandé':'Recommended');
        if(s==='blue') return LANG==='de'?'Empfohlen':(LANG==='fr'?'Recommandé':'Recommended');
        if(s==='red') return LANG==='de'?'Empfohlen':(LANG==='fr'?'Recommandé':'Recommended');
        return LANG==='de'?'Nicht relevant':(LANG==='fr'?'Non pertinent':'Not relevant');
      };
      const aBadgeTxt = hepLbl(ha.A);
      const bTierLbl = {
        dringend:{de:'Dringend empfohlen',en:'Strongly recommended',fr:'Fortement recommandé'},
        empfohlen:{de:'Empfohlen',en:'Recommended',fr:'Recommandé'},
        erwaegen:{de:'Erwägen',en:'Consider',fr:'À envisager'},
        standard:{de:'Empfohlen',en:'Recommended',fr:'Recommandé'},
        incomplete:{de:'Empfohlen',en:'Recommended',fr:'Recommandé'}
      };
      let bBadgeTxt;
      if (ha.B === 'green') bBadgeTxt = hepLbl('green');
      else if (ha.bTier && bTierLbl[ha.bTier]) bBadgeTxt = bTierLbl[ha.bTier][LANG] || bTierLbl[ha.bTier].en;
      else bBadgeTxt = hepLbl(ha.B);

      const aBadge='<div class="hep-stat"><span class="badge '+ha.A+'">'+aBadgeTxt+'</span></div>'+
        '<div class="reason">'+frNote(ha.aNote.de,ha.aNote.en)+'</div>';
      const bBadge='<div class="hep-stat"><span class="badge '+ha.B+'">'+bBadgeTxt+'</span></div>'+
        '<div class="reason">'+frNote(ha.bNote.de,ha.bNote.en)+'</div>';
      const hbsChk='<div class="ctrl-box"><label style="display:flex; align-items:flex-start; cursor:pointer"><input type="checkbox" style="margin-top:2px; margin-right:6px" '+(serologyState.hbs?'checked':'')+' onchange="toggleSerology(\'hbs\', this.checked)"> <span style="flex:1; line-height:1.3">Anti-HBs ≥ 100 IU/l</span></label></div>';
      
      const infoBtnA=(DISEASE_MAPS['hepatitis']?'<button class="map-btn" onclick="showMap(\'hepatitis\')" title="'+(LX('Verbreitungskarte','Distribution map'))+'">'+(LX('K','M'))+'</button>':'')+'<button class="info-btn" onclick="showInfo(\'hepA\')" title="Info">i</button>';
      const infoBtnB=(DISEASE_MAPS['hepatitis_b']?'<button class="map-btn" onclick="showMap(\'hepatitis_b\')" title="'+(LX('Verbreitungskarte','Distribution map'))+'">'+(LX('K','M'))+'</button>':'')+'<button class="info-btn" onclick="showInfo(\'hepB\')" title="Info">i</button>';
      
      function yrSel(f){return yearInput('hepatitis',f);}
      
      html+=`<tr>
        <td data-label="${t('thVax')}">
          <div class="vname" style="display:flex; align-items:center;">Hepatitis A</div>
        </td>
        <td data-label="${LX('Vorimpfungen','Previous doses')}"><div class="hep-group-row"><div class="hep-doses">${renderDoseChips2(v.k, 'aMono')}</div></div></td>
        <td data-label="${LX('Jahr','Year')}"><div class="hep-group-row"><div class="hep-year">${yrSel('aYear')}</div></div></td>
        <td class="status" data-label="${t('thStatus')}"><div class="row-info">${infoBtnA}</div>
          ${aBadge}
        </td>
      </tr>`;
      html+=`<tr>
        <td data-label="${t('thVax')}">
          <div class="vname" style="display:flex; align-items:center;">Hepatitis B</div>
          ${hbsChk}
        </td>
        <td data-label="${LX('Vorimpfungen','Previous doses')}"><div class="hep-group-row"><div class="hep-doses">${renderDoseChips2(v.k, 'bMono')}</div></div></td>
        <td data-label="${LX('Jahr','Year')}"><div class="hep-group-row"><div class="hep-year">${yrSel('bYear')}</div></div></td>
        <td class="status" data-label="${t('thStatus')}"><div class="row-info">${infoBtnB}</div>
          ${bBadge}
        </td>
      </tr>`;
      html+=`<tr>
        <td data-label="${t('thVax')}">
          <div class="vname" style="display:flex; align-items:center;">Hepatitis A+B</div>
        </td>
        <td data-label="${LX('Vorimpfungen','Previous doses')}"><div class="hep-group-row"><div class="hep-doses">${renderDoseChips2(v.k, 'twin')}</div></div></td>
        <td data-label="${LX('Jahr','Year')}"><div class="hep-group-row"><div class="hep-year">${yrSel('twYear')}</div></div></td>
        <td class="status" data-label="${t('thStatus')}"></td>
      </tr>`;
      return;
    }
    if(v.menacwy){
      const ma=menacwyAssess();
      const typeOpts=[['','— Typ —'],['acwy','ACWY'],['c','C']];
      const typeSel=typeOpts.map(o=>'<option value="'+o[0]+'"'+(st.type===o[0]?' selected':'')+'>'+o[1]+'</option>').join('');
      const mandBadge=ma.mand?'<span class="badge mand">'+t('mandatory')+'</span>':'';
      html+='<tr><td data-label="'+t('thVax')+'"><div class="vname" style="display:flex;align-items:center;">'+(vName(v))+mandBadge+availBadge+'</div><select class="mini" onchange="setField(\'menacwy\',\'type\',this.value)">'+typeSel+'</select></td>'+
        '<td data-label="'+t('thDone')+'">'+renderDoseChips(v.k)+'</td>'+
        '<td data-label="'+t('thLast')+'">'+yearInput('menacwy','year')+'</td>'+
        '<td class="status" data-label="'+t('thStatus')+'"><div class="row-info">'+infoBtn+'</div><span class="badge '+ma.status+'">'+({red:t('lgRed'),yellow:t('lgYellow'),violet:t('lUseful'),green:t('lgGreen'),blue:t('lgBlue'),grey:t('lgGrey')}[ma.status])+'</span><div class="reason">'+frNote(ma.noteDe,ma.noteEn)+'</div></td></tr>';return;
    }
    const a=assess(v);
    let badgeTxt = (a.category&&CATLBL[a.category]) ? (CATLBL[a.category][LANG]||CATLBL[a.category].en) : ({red:t('lgRed'),yellow:t('lgYellow'),green:t('lgGreen'),blue:t('lgBlue'),grey:t('lgGrey'),'red-strong':t('lgRed')}[a.status]);
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
    let note=(LANG==='de'?a.noteDe:(LANG==='fr'?(a.noteFr||a.noteEn):a.noteEn));let noteStyle='';
    if(a.status==='green'&&BOOSTER[v.k]){note=L2(BOOSTER[v.k]);noteStyle=' style="color:var(--green)"';}
    const mandBadge=a.mand?'<span class="badge mand">'+t('mandatory')+'</span>':'';
    const alN=allergyNote(v);const alNote=alN?'<div class="reason" style="color:var(--red);font-weight:600">'+L2(alN)+'</div>':'';
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
    html+='<tr><td data-label="'+t('thVax')+'"><div class="vname" style="display:flex;align-items:center;">'+(vName(v))+liveBadge+mandBadge+availBadge+'</div>'+(note?'<div class="reason"'+noteStyle+'>'+note+'</div>':'')+liveNote+availNote+alNote+mmrChk+extraChk+'</td>'+
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
  destinations.forEach(code=>{const c=CBY[code];const name=cName(c);let items=[];
    const data = window.countryData[code] || {};
    const d = data.diseases || {};
    
    // YF
    const yf = d.yellow_fever || {};
    if(yf.risk_level === 'mandatory_all') items.push({t:'red',de:'Gelbfieber-Impfnachweis bei Einreise verpflichtend.',en:'Yellow fever certificate mandatory for entry.',fr:'Certificat de fièvre jaune obligatoire à l\'entrée.'});
    else if(yf.risk_level === 'recommended' || yf.risk_level === 'risk_based') items.push({t:'amber',de:'Gelbfieber-Endemiegebiet – Impfung empfohlen.',en:'Yellow fever endemic area—vaccination recommended.',fr:'Zone d\'endémie de fièvre jaune – vaccination recommandée.'});
    
    // Meningitis
    if(code === 'SA') items.push({t:'red',de:'Meningokokken ACWY für Hajj/Umrah verpflichtend.',en:'Meningococcal ACWY mandatory for Hajj/Umrah.',fr:'Méningocoque ACWY obligatoire pour le Hajj/Oumra.'});
    const men = d.meningococcal || {};
    if(men.risk_level === 'recommended' || men.risk_level === 'risk_based'){
      const dm=departureMonth();const dry=dm!==null&&[11,0,1,2,3,4,5].includes(dm);
      items.push({t:dry?'red':'amber',de:'Meningitisgürtel – ACWY'+(dry?' (Abreise in der Trockenzeit Dez–Jun: erhöhtes Risiko)':' je nach Saison/Aufenthalt')+'.',en:'Meningitis belt — ACWY'+(dry?' (departure in dry season Dec–Jun: elevated risk)':' depending on season/stay')+'.',fr:'Ceinture de la méningite – ACWY'+(dry?' (départ en saison sèche déc.–juin : risque accru)':' selon la saison/le séjour')+'.'});
    }
    
    // Chikungunya
    const chik = d.chikungunya || {};
    if(chik.details && chik.details.includes('outbreak')) items.push({t:'red',de:'Aktueller Chikungunya-Ausbruch.',en:'Active chikungunya outbreak.',fr:'Épidémie de chikungunya en cours.'});
    else if(chik.risk_level === 'recommended' || chik.risk_level === 'risk_based') items.push({t:'amber',de:'Erhöhtes Chikungunya-Hintergrundrisiko.',en:'Elevated chikungunya background risk.',fr:'Risque de fond de chikungunya élevé.'});

    const cls=items.length?(items[0].t==='red'?'':items[0].t):'info';let inner='<h4><img class="flag" src="https://flagcdn.com/w40/'+code.toLowerCase()+'.png" onerror="this.remove()" alt="" loading="lazy">'+name+(c.terr?' *':'')+'</h4>';
    if(items.length)inner+='<ul>'+items.map(i=>'<li>'+L2(i)+'</li>').join('')+'</ul>';
    const hd=HEALTH_DEMO[code];if(hd)inner+='<div class="health-snap"><div class="hs-date">'+hd.stand+'</div>'+L2(hd)+'</div>';else inner+='<div class="mini-note" style="margin-top:6px;">'+t('healthLive')+'</div>';
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
  if(idr){ idr.style.color=hasImmuneDef()?'var(--red)':'var(--grey)'; idr.textContent=(staff && chronicTextVal() && hasImmuneDef())?(LX('Hinweis auf Immundefizienz – Lebendimpfstoffe kontraindiziert/prüfen','Possible immunodeficiency — check live vaccines')):''; }
  // Medikamenten-Hinweis (nur Personal, nur die immunsuppressiven)
  if(recog){
    if(!staff || !medsList.length) recog.textContent='';
    else if(immunoMeds.length){ recog.style.color='var(--red)'; recog.textContent=(LX('Immunsuppressiv: ','Immunosuppressive: '))+immunoMeds.join(', '); }
    else { recog.style.color='var(--green)'; recog.textContent=(LX('Keine immunsuppressiven Medikamente erkannt.','No immunosuppressive medication detected.')); }
  }
  if(!box) return;
  if(!staff || !livesBlocked()){ box.innerHTML=''; return; }
  const lives=VACCINES.filter(v=>v.live).map(v=>vName(v)).join(', ');
  const immunoStr=immunoMeds.join(', ');
  const reason=isPregnant()?(LX('Schwangerschaft','Pregnancy')):((hasImmuneDef()&&!immunoStr)?(LX('Immundefizienz','Immunodeficiency')):(LANG==='de'?('Immunsuppression'+(immunoStr?' ('+immunoStr+')':'')):('Immunosuppression'+(immunoStr?' ('+immunoStr+')':''))));
  box.innerHTML='<div class="warn-box"><h4>'+(LX('Lebendimpfstoffe – kontraindiziert / Vorsicht','Live vaccines — contraindicated / caution'))+'</h4><p>'+(LANG==='de'?('Wegen '+reason+' sind Lebendimpfstoffe kontraindiziert bzw. nur nach individueller Abwägung: '):(LANG==='fr'?('En raison de '+reason+', les vaccins vivants sont contre-indiqués ou possibles uniquement après évaluation individuelle : '):('Because of '+reason+', live vaccines are contraindicated or only after individual assessment: ')))+'<strong>'+lives+'</strong>.</p><p class="mini-note">'+(LX('Falls indiziert: Lebendimpfung möglichst ≥4 Wochen vor Therapiebeginn; Details je Substanz siehe Medikamenten-Übersicht.','If indicated: complete live vaccination ≥4 weeks before therapy; per-drug details see the medication overview.'))+'</p></div>';
}

function renderAge(){
  const dob=el('p-dob').value;const box=el('age-box');const ex=ageExact(dob);
  if(ex===null){box.className='age-box empty';box.textContent=t('ageEmpty');return;}
  const yr=new Date(dob).getFullYear();const det=ageDetail(dob);
  let txt;
  if(ex<5){
    if(ex<1)txt=det.m+' '+(LX('Mon.','mo'))+' '+det.d+' '+(LX('Tage','d'));
    else txt=det.y+' '+(LX('J.','yr'))+' '+det.m+' '+(LX('Mon.','mo'));
    box.className='age-box child';
  } else {txt=det.y+' '+(LX('Jahre','years'));box.className='age-box';}
  box.innerHTML='<span>'+txt+'</span><span class="yob">('+(LX('geb.','b.'))+' '+yr+')</span>';
}
function updatePregVisibility(){const male=el('p-sex').value==='m';const f=el('preg-field');if(f){f.style.display=male?'none':'';const g=f.parentElement;if(g&&g.classList.contains('grid')){g.classList.toggle('g3',!male);g.classList.toggle('g2',male);}}if(male)el('p-pregnant').value='no';}
function updateDepartureHint(){const d=el('p-departure').value;const h=el('departure-hint');if(!h)return;h.textContent=d?((LX('Tage bis Abreise: ','Days to departure: '))+Math.round((new Date(d)-new Date())/86400000)):'';}
function recompute(){updatePregVisibility();renderAge();updateDepartureHint();renderVaxTable();renderApptOverview();renderNotes();renderImmunoWarn();renderContraWarn();if(typeof renderMalaria==='function')renderMalaria();}
// Barrierefreiheit: jedes sichtbare Feldlabel programmatisch mit seinem Eingabefeld verknüpfen
// (Screenreader liest sonst nur den Platzhalter). WCAG 1.3.1 / 3.3.2 / 4.1.2.
function wireFieldLabels(){
  try{
    document.querySelectorAll('label.fld').forEach(function(lab){
      if(lab.htmlFor) return;
      var box=lab.closest('div')||lab.parentElement;
      var ctrl=box?box.querySelector('input:not([type=hidden]),select,textarea'):null;
      if(ctrl){ if(!ctrl.id){ ctrl.id='fld-'+Math.random().toString(36).slice(2,8); } lab.htmlFor=ctrl.id; }
    });
  }catch(e){}
}
if(document.readyState==='loading'){ document.addEventListener('DOMContentLoaded',wireFieldLabels); } else { setTimeout(wireFieldLabels,0); }
// Hinweise zu Akuterkrankung / Thrombose / Ohnmacht – nur für Personal, nichts für Patienten
function renderContraWarn(){
  const box=el('contra-warn'); if(!box) return;
  const staff=(typeof roleSeesClinic==='function') && roleSeesClinic((CURRENT_PROFILE||{role:'arzt'}).role);
  const acute=el('p-acute')&&el('p-acute').checked;
  const thromb=el('p-thrombosis')&&el('p-thrombosis').checked;
  const faint=el('p-faint')&&el('p-faint').checked;
  if(!staff || (!acute&&!thromb&&!faint)){ box.innerHTML=''; return; }
  const items=[];
  if(acute) items.push(LX('<b>Akute Erkrankung:</b> Impfung bei behandlungsbedürftiger akuter Erkrankung (≥38,5 °C) verschieben; leichte Infekte ohne Fieber sind i. d. R. kein Hindernis.','<b>Acute illness:</b> postpone if acute illness needing treatment (≥38.5 °C); mild infections without fever are usually no barrier.'));
  if(thromb) items.push(LX('<b>Thrombose / Antikoagulation:</b> i. m. Injektion mit sehr feiner Kanüle, danach ≥2 Min. komprimieren; ggf. Rücksprache bei hoher Blutungsneigung.','<b>Thrombosis / anticoagulation:</b> use a fine needle for i.m. injection, then compress ≥2 min; consult if high bleeding risk.'));
  if(faint) items.push(LX('<b>Ohnmachtsneigung:</b> im Liegen impfen und anschließend ≥15 Min. nachbeobachten.','<b>Fainting tendency:</b> vaccinate lying down and observe ≥15 min afterwards.'));
  box.innerHTML='<div class="warn-box" style="margin-top:12px;"><h4>'+(LX('Hinweise zur Durchführung','Procedure notes'))+'</h4><ul style="margin:4px 0 0 18px;padding:0;">'+items.map(i=>'<li>'+i+'</li>').join('')+'</ul></div>';
}

const DISEASE_MAPS = {
  yellowfever:'yellowfever.png', tdap_polio:'polio.png', hepatitis:'hepatitis_a.png', hepA:'hepatitis_a.png',
  menacwy:'menacwy.png', jev:'jev.png', rabies:'rabies.png', tbe:'tbe.png',
  dengue:'dengue.png', influenza:'influenza.png',
  // new (CDC Yellow Book 2026 maps – drop the PNGs into assets/karten to enable)
  typhoid:'typhoid.png', chikungunya:'chikungunya.png', hepatitis_b:'hepb.png',
  malaria:'malaria.png'
};
// map name + source overrides (keys without a VACCINES entry, and non-RKI sources)
const MAP_NAME = { hepatitis_b:{de:'Hepatitis B',en:'Hepatitis B'}, malaria:{de:'Malaria',en:'Malaria'} };
// Fallback-URL, falls die lokale Karte (assets/karten/…) noch nicht hinterlegt ist.
const MAP_REMOTE = { chikungunya:'https://www.ecdc.europa.eu/sites/default/files/images/Chikungunya-12-months-rate-march-2026.png' };
const MAP_SOURCE = {
  typhoid:{de:'Quelle: CDC Yellow Book 2026 (public domain)',en:'Source: CDC Yellow Book 2026 (public domain)'},
  cholera:{de:'Quelle: CDC Yellow Book 2026 (public domain)',en:'Source: CDC Yellow Book 2026 (public domain)'},
  chikungunya:{de:'Quelle: ECDC – Chikungunya, 12-Monats-Meldeinzidenz/100.000 (Stand März 2026)',en:'Source: ECDC – Chikungunya, 12-month notification rate/100,000 (as of March 2026)'},
  hepatitis_b:{de:'Quelle: CDC Yellow Book 2026 (public domain)',en:'Source: CDC Yellow Book 2026 (public domain)'},
  malaria:{de:'Quelle: CDC Yellow Book 2026 (public domain)',en:'Source: CDC Yellow Book 2026 (public domain)'}
};
const PENCIL_SVG = '<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style="vertical-align:middle"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm1.414 1.06a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path></svg>';
function showInfo(k){
  let v=VACCINES.find(x=>x.k===k);
  let a=AVAIL[k];
  if(k==='hepA'){ v={de:'Hepatitis A',en:'Hepatitis A',live:false}; a=AVAIL['hepatitis']; }
  if(k==='hepB'){ v={de:'Hepatitis B',en:'Hepatitis B',live:false}; a=AVAIL['hepatitis']; }
  const inf=INFO[k]||{disease:{de:'',en:''},epi:{de:'',en:''},side:{de:'',en:''},sched:{de:'',en:''}};
  const availHtml=a?('<div class="m-sec"><h4>'+(LX('Verfügbarkeit & Alter (Ambulanz)','Availability & age (clinic)'))+'</h4><p>'+(a.avail===false?'':('<strong>'+a.prod+'</strong> · '))+L2(a)+'</p></div>'):'';
  const mapBtn='';  // Verbreitungskarte separat über den K/M-Button in der Impfstatus-Zeile
  // Gelbfieber: Aufklärungsbogen (DTG) zum Drucken
  const doc=DISEASE_DOCS[k];
  const printSvg='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-right:6px"><path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2M6 14h12v7H6z"/></svg>';
  const docBtn=doc?('<div class="m-doc"><button class="btn sec sm" onclick="printDoc(\''+doc+'\')">'+printSvg+(LX('Aufklärungsbogen drucken','Print consent form'))+'</button></div>'):'';
  // Masern (MMR): ärztliche Masernschutz-Bescheinigung (§20 Abs. 9 IfSG) generieren
  const certBtn=(k==='mmr')?('<div class="m-doc"><button class="btn sec sm" onclick="openMeaslesCert()">'+printSvg+(LX('Impfbescheinigung drucken','Print immunity certificate'))+'</button></div>'):'';
  el('modal-content').innerHTML='<button class="modal-close" onclick="closeModal()">×</button>'+
    '<h3>'+(vName(v))+(v.live?' <span class="live-dot" title="'+t('live')+'">L</span>':'')+'</h3>'+
    '<div class="m-sub">'+(LX('Vereinfachte Kurzinformation für das Patientengespräch','Simplified summary for the patient conversation'))+'</div>'+
    '<div class="m-sec"><h4>'+t('mDisease')+'</h4><p>'+(inf.disease[LANG]||inf.disease.en)+'</p></div>'+
    '<div class="m-sec"><h4>'+t('mEpi')+'</h4><p>'+(inf.epi[LANG]||inf.epi.en)+'</p></div>'+
    '<div class="m-sec"><h4>'+t('mSide')+'</h4><p>'+(inf.side[LANG]||inf.side.en)+'</p></div>'+
    '<div class="m-sec"><h4>'+t('mSchedInfo')+'</h4><p>'+(inf.sched[LANG]||inf.sched.en)+'</p></div>'+
    availHtml+mapBtn+docBtn+certBtn;
  el('modal-bg').classList.add('show');
}
// Aufklärungs-/Infobögen je Erkrankung (im Ordner assets/docs)
const DISEASE_DOCS={ yellowfever:'gelbfieber-aufklaerung.pdf' };
// PDF in neuem Fenster öffnen und den Druckdialog auslösen
function printDoc(file){
  const url='assets/docs/'+file;
  const w=window.open(url,'_blank');
  if(w){ try{ w.addEventListener('load',function(){ setTimeout(function(){ try{ w.focus(); w.print(); }catch(_){} },300); }); }catch(_){} }
  else { window.open(url,'_blank'); }
}
/* ---- Masernschutz-Bescheinigung (§ 20 Abs. 9 IfSG), zweisprachig DE/EN ---- */
const MEASLES_CERT_OPTS=[
  {v:'v2',  group:'proof', de:'2 Masernschutzimpfungen (für Personen nach vollendetem 2. Lebensjahr)', en:'2 measles vaccinations (for persons after completion of the 2nd year of life)'},
  {v:'v1',  group:'proof', de:'1 Masernschutzimpfung (ausreichend für Kinder im 2. Lebensjahr)',     en:'1 measles vaccination (sufficient for children in their 2nd year of life)'},
  {v:'imm', group:'proof', de:'Immunität gegen Masern (serologischer Labornachweis) liegt vor',      en:'Immunity against measles confirmed by serological laboratory evidence'},
  {v:'ci',  group:'exempt', de:'Es liegt eine dauerhafte, medizinische Kontraindikation vor, aufgrund derer nicht gegen Masern geimpft werden kann.', en:'A permanent medical contraindication exists, preventing measles vaccination.'}
];
function openMeaslesCert(){
  const box=el('modal-content'); if(!box) return;
  box.classList.remove('pi-modal');
  const psvg='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-right:6px"><path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2M6 14h12v7H6z"/></svg>';
  let opts='';
  MEASLES_CERT_OPTS.forEach((o,i)=>{
    opts+='<label class="mc-opt"><input type="radio" name="measles_cert" value="'+o.v+'"'+(i===0?' checked':'')+'>'+
      '<span class="mc-opt-txt"><span class="mc-de">'+_esc(o.de)+'</span><span class="mc-en">'+_esc(o.en)+'</span></span></label>';
  });
  box.innerHTML='<button class="modal-close" onclick="closeModal()">×</button>'+
    '<h3>'+(LX('Masern-Impfbescheinigung','Measles immunity certificate'))+'</h3>'+
    '<div class="m-sub">'+(LX('Bitte den zutreffenden Nachweis auswählen (§ 20 Abs. 9 IfSG).','Please select the applicable evidence (Section 20 (9) IfSG).'))+'</div>'+
    '<div class="mc-opts">'+opts+'</div>'+
    '<div class="mc-actions"><button class="btn sec sm" onclick="showInfo(\'mmr\')">&larr; '+(LX('Zurück','Back'))+'</button>'+
      '<button class="btn sm" onclick="printMeaslesCertificate()">'+psvg+(LX('Bescheinigung drucken','Print certificate'))+'</button></div>';
  el('modal-bg').classList.add('show');
}
const CHARITE_LOGO_SVG='<svg viewBox="0 0 800 295.499" xmlns="http://www.w3.org/2000/svg" aria-label="Charité"><g transform="translate(97.142897,-21.75554)"><path d="m 679.23213,81.036291 -16.1875,22.312499 6.78125,3.78125 20.78125,-20.906249 -11.375,-5.1875 z m -383.59375,32.468749 -2.1875,4.78125 -45.125,102.4375 12.5,0 12.375,-29.0625 43.75,0 12.09375,29.0625 12.65625,0 -43.96875,-102.4375 -2.09375,-4.78125 z m -234.812497,2.6875 c -33.29988,-4.9e-4 -54.1250001,24.87159 -54.1250001,53.71875 0,28.84931 20.9853001,52.875 54.1250001,52.875 10.75929,-4.9e-4 21.50436,-3.61406 30.25,-9.9375 l 0,-13.71875 c -8.10513,8.10366 -19.14433,13.34375 -30.625,13.34375 -24.8887,0 -41.3125,-20.54883 -41.3125,-42.96875 0,-22.42092 16.12673,-42.96875 41.0625,-42.96875 11.75139,0 22.76987,4.97135 30.875,13.34375 l 0,-13.71875 c -9.00996,-6.72705 -18.94932,-9.96875 -30.25,-9.96875 z m 75.218747,2.09375 0,102.4375 11.4375,0 0,-50.28125 34.75,0 0,-10.59375 -34.75,0 0,-41.5625 -11.4375,0 z m 61.78125,0 0,102.4375 11.40625,0 0,-102.4375 -11.40625,0 z m 181.34375,0 0,102.4375 11.40625,0 0,-44.96875 15.40625,0 23.25,44.96875 13.25,0 -24.90625,-46.53125 c 10.60382,-3.11906 20.96922,-11.27951 20.96875,-27.59375 0,-20.62599 -15.45439,-28.3125 -32.3125,-28.3125 l -27.0625,0 z m 110.5625,0 0,102.4375 11.40625,0 0,-102.4375 -11.40625,0 z m 54.5,0 0,10.59375 24.75,0 0,91.84375 11.40625,0 0,-91.84375 25,0 0,-10.59375 -61.15625,0 z m 102.4375,0 0,102.4375 55.4375,0 0,-10.59375 -44.03125,0 0,-40.21875 37.78125,0 0,-10.59375 -37.78125,0 0,-30.4375 42.34375,0 0,-10.59375 -53.75,0 z m -256.09375,10.59375 14.15625,0 c 11.80432,0 22.37547,4.70602 22.375,17.71875 0,13.01964 -9.05974,19.09375 -22.25,19.09375 l -14.28125,0 0,-36.8125 z m -95.21875,11.125 17.125,41.03125 -34.65625,0 17.53125,-41.03125 z" style="fill:#000;fill-rule:evenodd"/><path d="m -97.142897,169.50441 c 0,-81.602649 65.736405,-147.74887 149.00748,-147.74887 36.46409,-4.91e-4 69.840447,13.206968 95.606777,35.096719 l 0,22.747509 C 123.691,54.368296 89.959283,38.621964 52.551213,38.621964 c -72.976915,0 -130.010455,58.391013 -130.010455,130.424396 0,72.03234 57.060795,130.42807 130.010455,130.42807 37.40812,0 71.139787,-15.74879 94.920147,-40.98027 l 0,23.66067 c -25.76607,21.89227 -59.143217,35.09971 -95.606777,35.09971 -83.202936,0 -149.00748,-66.14937 -149.00748,-147.75044 z" style="fill:#878787;fill-rule:evenodd"/></g></svg>';
function printMeaslesCertificate(){
  const sel=(document.querySelector('input[name="measles_cert"]:checked')||{}).value||'v2';
  const gv=id=>{const e=el(id);return e?(''+e.value).trim():'';};
  const p=patients.find(x=>x.id===editingId)||{};
  const nm=gv('p-name')||p.name||'';
  const fn=gv('p-firstname')||p.firstname||'';
  const fullName=(nm?(nm+(fn?', '+fn:'')):'')||'—';
  const dobRaw=gv('p-dob')||p.dob||'';
  const dob=dobRaw?fmtDate(new Date(dobRaw)):'—';
  const street=gv('p-address')||p.address||'';
  const cityline=((gv('p-zip')||p.zip||'')+' '+(gv('p-city')||p.city||'')).trim();
  const addr=[street,cityline].filter(Boolean).join(', ')||'—';
  const today=fmtDate(new Date());
  const physTitle=(CURRENT_PROFILE&&CURRENT_PROFILE.title)?CURRENT_PROFILE.title+' ':'';
  const physName=(p.claimedByName||(CURRENT_PROFILE&&CURRENT_PROFILE.full_name)||'').trim();
  const physRoleRaw=(p.claimedByRole||(CURRENT_PROFILE&&CURRENT_PROFILE.role)||'');
  const physGender=(p.claimedByGender||(CURRENT_PROFILE&&CURRENT_PROFILE.gender)||'');
  const physRole=(typeof formatRoleTitle==='function')?formatRoleTitle(physRoleRaw,physGender):'';
  const physFull=((physTitle+physName).trim()+((physName&&physRole)?', '+physRole:''))||'—';
  const cb=(v)=>(v===sel)?'☒':'☐';
  const optRow=(o)=>'<div class="c-opt"><span class="c-box">'+cb(o.v)+'</span><span class="c-txt"><span class="c-de">'+_esc(o.de)+'</span><span class="c-en">'+_esc(o.en)+'</span></span></div>';
  const proof=MEASLES_CERT_OPTS.filter(o=>o.group==='proof').map(optRow).join('');
  const exempt=MEASLES_CERT_OPTS.filter(o=>o.group==='exempt').map(optRow).join('');
  const css='@page{size:A4;margin:0;}*{box-sizing:border-box;}body{font-family:Helvetica,Arial,sans-serif;color:#111;font-size:12px;line-height:1.5;margin:0;padding:20mm 18mm;}'+
    '.lh{display:flex;align-items:flex-start;justify-content:space-between;gap:20px;margin-bottom:18px;}'+
    '.lh-logo svg{height:30px;width:auto;display:block;}'+
    '.lh-addr{font-size:9.5px;color:#333;text-align:right;line-height:1.5;}'+
    'h1{font-size:19px;margin:0 0 2px;}h1 .en{display:block;font-size:13px;font-weight:400;color:#333;}'+
    '.sub{font-size:11px;color:#333;border-bottom:2px solid #111;padding-bottom:10px;margin-bottom:16px;}'+
    '.pat{width:100%;border-collapse:collapse;margin-bottom:18px;}'+
    '.pat td{border:1px solid #999;padding:7px 10px;vertical-align:top;}'+
    '.pat .lbl{font-size:9.5px;color:#333;text-transform:uppercase;letter-spacing:.03em;display:block;margin-bottom:2px;font-weight:600;}'+
    '.pat .lbl .en{color:#555;font-weight:400;}'+
    '.intro{margin:6px 0 12px;}.intro .en{display:block;color:#333;font-style:italic;margin-top:2px;}'+
    '.c-head{font-weight:700;margin:14px 0 6px;}.c-head .en{display:block;font-weight:400;font-style:italic;color:#333;}'+
    '.c-opt{display:flex;gap:10px;align-items:flex-start;margin:7px 0;}'+
    '.c-box{font-size:16px;line-height:1.1;flex:none;}'+
    '.c-txt{flex:1;}.c-txt .c-de{display:block;}.c-txt .c-en{display:block;color:#333;font-style:italic;font-size:11px;}'+
    '.place{margin-top:34px;font-size:12px;color:#111;}'+
    '.sig-area{margin-top:66px;width:62%;max-width:340px;}'+
    '.sig-line{border-top:1px solid #111;}'+
    '.sig-cap{padding-top:6px;font-size:10.5px;color:#333;}'+
    '.sig-cap .sig-name{display:block;color:#111;font-size:12px;font-weight:600;margin-bottom:1px;}'+
    '.sig-cap .en{color:#555;font-style:italic;}'+
    '.foot{margin-top:34px;font-size:9.5px;color:#666;}';
  const html='<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><title>'+(LX('Masernschutz-Bescheinigung','Measles immunity certificate'))+'</title><style>'+css+'</style></head><body>'+
    '<div class="lh"><div class="lh-logo">'+CHARITE_LOGO_SVG+'</div>'+
      '<div class="lh-addr">Charité – Universitätsmedizin Berlin · Institut für Internationale Gesundheit<br>Campus Virchow-Klinikum<br>Augustenburger Platz 1, 13353 Berlin<br>Geländeadresse: Südring 2–3, Erdgeschoss</div></div>'+
    '<h1>Ärztliche Bescheinigung<span class="en">Medical certificate</span></h1>'+
    '<div class="sub">Nachweis gemäß § 20 Absatz 9 Infektionsschutzgesetz (IfSG) · Certificate pursuant to Section 20 (9) German Infection Protection Act</div>'+
    '<table class="pat"><tr>'+
      '<td style="width:60%"><span class="lbl">Name, Vorname <span class="en">/ Surname, first name</span></span>'+_esc(fullName)+'</td>'+
      '<td><span class="lbl">Geburtsdatum <span class="en">/ Date of birth</span></span>'+_esc(dob)+'</td>'+
    '</tr><tr>'+
      '<td colspan="2"><span class="lbl">Adresse <span class="en">/ Address</span></span>'+_esc(addr)+'</td>'+
    '</tr></table>'+
    '<div class="intro">Für die o.g. Person wird bescheinigt, dass folgender, altersentsprechender, den Anforderungen gemäß § 20 Absatz 9 IfSG genügender Masernschutz vorliegt:'+
      '<span class="en">It is hereby certified that the above-named person has the following age-appropriate measles protection meeting the requirements of Section 20 (9) IfSG:</span></div>'+
    proof+
    '<div class="c-head">Befreiung von einer Masern-Impfung:<span class="en">Exemption from measles vaccination:</span></div>'+
    exempt+
    '<div class="place">Berlin, den '+_esc(today)+'</div>'+
    '<div class="sig-area"><div class="sig-line"></div>'+
      '<div class="sig-cap"><span class="sig-name">'+_esc(physFull)+'</span>Unterschrift und Stempel · <span class="en">Signature and stamp</span></div>'+
    '</div>'+
    '<div class="foot">Charité · Reisemedizinische Ambulanz · Institut für Internationale Gesundheit</div>'+
    '<script>window.onload=function(){setTimeout(function(){try{window.focus();window.print();}catch(e){}},150);};<\/script>'+
    '</body></html>';
  const w=window.open('','_blank');
  if(!w){ uiAlert(LX('Bitte Pop-ups für diese Seite erlauben, um die Bescheinigung zu drucken.','Please allow pop-ups for this page to print the certificate.')); return; }
  w.document.open(); w.document.write(html); w.document.close();
  // Druck wird ausschließlich über das eingebettete window.onload im neuen Fenster ausgelöst (kein Doppeldruck)
  closeModal();
}
function closeModal(){el('modal-bg').classList.remove('show');const mc=el('modal-content');if(mc)mc.classList.remove('pi-modal');}
function showMap(k){
  const f=DISEASE_MAPS[k];if(!f)return;
  const v=VACCINES.find(x=>x.k===k);
  const name=(MAP_NAME[k]?MAP_NAME[k][LANG==='de'?'de':'en']:(v?(vName(v)):''));
  const src=(MAP_SOURCE[k]?MAP_SOURCE[k]:{de:'Quelle: RKI, Epidemiologisches Bulletin 14/2025',en:'Source: RKI, Epidemiological Bulletin 14/2025'})[LANG==='de'?'de':'en'];
  const missMsg=(LX('Karte noch nicht hinterlegt.','Map not yet available.'));
  const src_img=(/^https?:\/\//.test(f)?f:'assets/karten/'+f);
  const remote=MAP_REMOTE[k]||'';
  const onErr=remote
    ? "if(!this.dataset.fb){this.dataset.fb=1;this.src='"+remote+"';}else{this.outerHTML='<div class=&quot;map-missing&quot;>"+missMsg+"</div>';}"
    : "this.outerHTML='<div class=&quot;map-missing&quot;>"+missMsg+"</div>'";
  el('map-bg').innerHTML='<button class="map-close" onclick="closeMap()" title="Schließen">×</button>'+
    '<div class="map-inner">'+
      '<div class="map-head">'+name+' — '+(LX('Geografische Verbreitung','Geographic distribution'))+'</div>'+
      '<img src="'+src_img+'" alt="'+name+'" class="map-full" onerror="'+onErr+'">'+
      '<div class="map-foot">'+src+'</div>'+
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
  // Statusgesteuerter Abschluss: Patient an der Kasse → Abschluss bedeutet „bezahlt" (→ done),
  // sonst → Übergabe an die Kasse (→ kasse). So kann auch Medizin-Personal die Kasse vertreten.
  const _clinic = document.body.classList.contains('clinic');
  const _prevStatus = (existing&&existing.status)||(_clinic?'treatment':'waiting');
  const _atKasse = _prevStatus==='kasse';
  const _finalizing = finish && _clinic && _atKasse;   // Zahlung wird bestätigt (jede Personalrolle)
  const _me = ((CURRENT_PROFILE&&CURRENT_PROFILE.full_name)||myUserKey());
  const _myRole = (CURRENT_PROFILE&&CURRENT_PROFILE.role)||'';
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
    leistungen: document.body.classList.contains('clinic') ? readLeistungen() : ((existing&&existing.leistungen)||undefined),
    payment: (function(){ const m=paymentMethod(); const prevPaid=!!(existing&&existing.payment&&existing.payment.paid); if(!m && !(existing&&existing.payment)) return undefined; return {method:m||((existing&&existing.payment&&existing.payment.method)||''), label:payMethodLabel(m), paid: _finalizing?true:prevPaid}; })(),
    billing: (finish && _clinic) ? {total:computeBilling().total, hasUnpriced:computeBilling().hasUnpriced, method:(_atKasse?paymentMethod():((existing&&existing.billing&&existing.billing.method)||undefined)), at:new Date().toISOString(), by:_me, byRole:_myRole} : ((existing&&existing.billing)||undefined),
    // „Behandelt von" (Medizin-Personal, Übergabe an Kasse) und „Abgerechnet von" (Kasse/Vertretung, Zahlung)
    treatedBy: (finish && _clinic && !_atKasse) ? {name:((existing&&existing.claimedByName)||_me), role:((existing&&existing.claimedByRole)||_myRole), at:new Date().toISOString()} : ((existing&&existing.treatedBy)||undefined),
    billedBy: _finalizing ? {name:_me, role:_myRole, at:new Date().toISOString()} : ((existing&&existing.billedBy)||undefined),
    // Malaria-Plan (eigene Engine) – nur speichern, wenn ein Reiseziel mit Risiko gewählt ist
    malaria: (typeof malariaRelevant==='function' && malariaRelevant()) ? {days:malariaState.days, weight:malariaState.weight, drug:malariaState.drug} : ((existing&&existing.malaria)||undefined),
    // Patient an der Kasse → Abschluss = 'done' (bezahlt); sonst Abschluss durch Personal → 'kasse'
    status: ((finish && _clinic) ? (_atKasse ? 'done' : 'kasse') : _prevStatus),
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
    // Diff-basiert: erfasst JEDE tatsächliche Feldänderung (Text, Checkbox, Chip, Autocomplete …),
    // unabhängig davon, ob ein 'input'-Event gefeuert hat – so wird der Log zuverlässig geführt.
    const oldSnap = window._patientSnapshot ? JSON.parse(window._patientSnapshot) : null;
    if(oldSnap){
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

      ['step1','step2','step3','step4','step5','step6'].forEach(id=>{
        let changed = [];
        if(fMap[id]) {
           for(const [k, lbl] of Object.entries(fMap[id])) {
              if(JSON.stringify(oldSnap[k]) !== JSON.stringify(snap[k])) changed.push(lbl);
           }
        }
        if(id==='step4' && oldSnap.vax && snap.vax) {
           let vChanged=false;
           for(const v of VACCINES) {
             if(JSON.stringify(oldSnap.vax[v.k]) !== JSON.stringify(snap.vax[v.k])) vChanged=true;
           }
           if(vChanged) changed.push('Impfungen/Impfplan');
        }
        if(id==='step6') {
           // Nur inhaltliche Leistungsänderungen protokollieren – NICHT die Zahlungsart/-status (Kasse-Routine)
           if(JSON.stringify(oldSnap.leistungen) !== JSON.stringify(snap.leistungen)) changed.push('Leistungen');
        }
        if(changed.length) snap.editLog.push({ts,who,role:roleRaw,section:id,fields:changed});
      });
    }
  }
  LOCK_SECTIONS.forEach(id=>SECTION_EDIT[id]=false);
  // Baseline aktualisieren, damit der nächste Speichervorgang nur NEUE Änderungen protokolliert (keine Duplikate)
  window._patientSnapshot = JSON.stringify(snap);
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
  // Änderungsprotokoll sofort unter den Abschnitten anzeigen, wenn wir im Formular bleiben
  if(!finish) renderChangeLogs(snap);

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

function renderChangeLogs(p){
  ['step1','step2','step3','step4','step5','step6'].forEach(sid=>{
    let logEl=el('log-'+sid);
    if(!logEl){
      logEl=document.createElement('div');
      logEl.id='log-'+sid;
      logEl.className='change-log';
      const sec=el(sid);
      if(sec)sec.appendChild(logEl);
    }
    logEl.innerHTML='';
    if(p&&p.editLog){
      const logs=p.editLog.filter(l=>l.section===sid&&l.fields&&l.fields.length>0);
      if(logs.length){
        logEl.innerHTML='<div class="log-title">'+(LX('Änderungsprotokoll','Change log'))+'</div>'+logs.slice().reverse().map(l=>'<div class="log-entry"><span class="log-ts">'+fmtDateTime(l.ts)+'</span> <span class="log-who">'+_esc(l.who)+'</span> <span class="log-fields">'+_esc(l.fields.join(', '))+'</span></div>').join('');
      }
    }
  });
  // Vermerk unten in Abschnitt 6: Behandelt von … / Abgerechnet von …
  let rec=el('treat-record'); const s6=el('step6');
  if(!rec && s6){ rec=document.createElement('div'); rec.id='treat-record'; rec.className='treat-record'; s6.appendChild(rec); }
  if(rec){
    let rh='';
    if(p && p.treatedBy && p.treatedBy.name) rh+='<div class="tr-row"><span class="tr-lbl">'+LX('Behandelt von','Treated by')+'</span> <span class="tr-val">'+_esc(p.treatedBy.name)+'</span>'+(p.treatedBy.at?' <span class="tr-ts">· '+fmtDateTime(p.treatedBy.at)+'</span>':'')+'</div>';
    if(p && p.billedBy && p.billedBy.name) rh+='<div class="tr-row"><span class="tr-lbl">'+LX('Abgerechnet von','Billed by')+'</span> <span class="tr-val">'+_esc(p.billedBy.name)+'</span>'+(p.billedBy.at?' <span class="tr-ts">· '+fmtDateTime(p.billedBy.at)+'</span>':'')+'</div>';
    rec.innerHTML=rh;
  }
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
  renderChangeLogs(p);
  
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
     }
  }

  if (p.treatmentType === 'folgeimpfung' && !p.leistungen) {
     setTimeout(() => {
        const rad = document.querySelector('input[name="leistung_beratung"][value="none"]');
        if (rad) rad.checked = true;
        updateLeistungen();
     }, 100);
  }
  // Sektion 6 + Zahlungsart wiederherstellen (damit die Kasse die Auswahl des Personals sieht)
  _loadedPayment = (p.payment && p.payment.method) || '';
  _loadedPaid = p.payment ? (p.payment.paid?'paid':'unpaid') : '';
  if(p.leistungen) applyLeistungen(p.leistungen);

  // Malaria-Zustand wiederherstellen (eigene Engine)
  if(p.malaria && typeof p.malaria==='object'){ malariaState={ days:(p.malaria.days!=null?p.malaria.days:null), weight:(p.malaria.weight!=null?p.malaria.weight:70), drug:p.malaria.drug||'malarone' }; }
  else { resetMalariaState(); }
  renderDestChips();recompute();
  lockAllSections();   // Abschnitte sperren; Bearbeiten erst per Stift
  applySectionVisibility(p);   // Wartend → nur Abschnitte 1–3; ab „In Behandlung" existieren 4–6
  // An der Kasse (Rolle Kasse ODER Patient in Kasse-Stufe): Abschnitte 2–5 eingeklappt (aufklappbar), 1 & 6 offen
  if(roleIsKasse() || patientStatus(p)==='kasse') setupKasseFolds(); else clearFolds();
  if(document.body.classList.contains('clinic')) enterPatient();
  else if(window.scrollTo)try{window.scrollTo({top:0,behavior:'smooth'});}catch(e){}
}
function cancelEdit(){editingId=null;el('editing-banner').classList.remove('show');el('save-btn').textContent=t('btnFinish');resetForm();
  if(document.body.classList.contains('clinic'))document.body.classList.add('clinic-idle');}
async function deletePatient(id){
  if(!(await uiConfirm(t('confirmDel'),{title:LX('Patient löschen','Delete patient'),ok:LX('Löschen','Delete'),danger:true})))return;
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
  if(typeof renderDeletedPatients==='function') renderDeletedPatients();
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
function icLang(l){ if(typeof setLang==='function') setLang(l); ['de','en','fr'].forEach(x=>{const b=el('ic-'+x);if(b)b.classList.toggle('active',l===x);}); }
function showIntakeChoice(){ INTAKE_TYPE=null; const o=el('intake-choice'); if(o)o.classList.add('show'); icLang(typeof LANG!=='undefined'?LANG:'de'); }
function chooseIntake(t){ INTAKE_TYPE=t; const o=el('intake-choice'); if(o)o.classList.remove('show'); try{window.scrollTo({top:0});}catch(e){} }
const AMB_SECTIONS=[
  {status:'waiting',   type:'beratung',     de:'Beratung · Wartend',        en:'Consultation · Waiting'},
  {status:'treatment', type:'beratung',     de:'Beratung · In Behandlung',  en:'Consultation · In treatment'},
  {status:'waiting',   type:'folgeimpfung', de:'Folgeimpfung · Wartend',    en:'Follow-up · Waiting'},
  {status:'treatment', type:'folgeimpfung', de:'Folgeimpfung · In Behandlung', en:'Follow-up · In treatment'},
  {status:'done', de:'Behandelt', en:'Treated', fr:'Traité'}
];
function myTreatmentMode(){ let m=null; try{m=localStorage.getItem('charite_treatmentmode');}catch(e){} if(m==='beratung'||m==='folgeimpfung')return m; return ((CURRENT_PROFILE||{}).role==='mfa')?'folgeimpfung':'beratung'; }
function setMyTreatmentMode(m){ if(m!=='beratung'&&m!=='folgeimpfung')return; try{localStorage.setItem('charite_treatmentmode',m);}catch(e){} }
function patientTreatType(p){ return (p.treatmentType==='folgeimpfung'||p.treatmentType==='beratung')?p.treatmentType:'beratung'; }
function patientDay(p){const s=p.savedAt||p.updatedAt;if(!s)return listDay;try{return ymd(new Date(s));}catch(e){return listDay;}}
function patientStatus(p){return p.status||'waiting';}

/* ===== Preise (Charité Anmeldebogen / Gebührenübersicht, Stand 07.05.2026) ===== */
const PRICE_BERATUNG = { '1':30.82, '3':20.11, 'A34':40.22, 'none':0 };
const PRICE_FOLGE = 3.15;            // Folgeverordnung (2)
const PRICE_BESCHEINIGUNG = 5.36;    // Bescheinigung (70)
const PRICE_IMPFLEISTUNG = 10.72;    // je Injektion (375, auch Folgeimpfung)
const VAX_PRICE = {
  chikungunya:163.04, cholera:101.36, dengue:112.54, tbe:57.86, tbe_child:56.23,
  yellowfever:72.15, zoster:281.73, influenza:24.64, influenza_hd:35.84, hpv:209.62,
  hepA:65.68, hepA_child:43.97, hepB:69.38, hepAB:88.27, hepAB_child:56.39,
  jev:121.84, mmr:49.12, menacwy:61.23, menb:122.56, mpox:199.69,
  ipv_mono:28.87, pneumo:105.77, tdap_combo:44.82, rabies:86.54, typhoid:37.98, varicella:96.19
};   // Charité-Gebührenübersicht, Stand 22.05.2026. Rabies = Rabipur (Verorab: 80,02 €). Nur COVID nicht gelistet (Standardversorgung/Hausarzt).
function eur(n){ return (typeof n==='number' && !isNaN(n)) ? n.toLocaleString('de-DE',{minimumFractionDigits:2,maximumFractionDigits:2})+' €' : '—'; }
// (stKey, planField) → Preis-Schlüssel in VAX_PRICE
function vaxPriceKey(stKey, sub){
  if(stKey==='hepatitis'){ if(sub==='plannedA') return 'hepA'; if(sub==='plannedB') return 'hepB'; if(sub==='plannedAB') return 'hepAB'; }
  if(stKey==='tdap_polio'){ if(sub==='planned_ipv') return 'ipv_mono'; return 'tdap_combo'; }
  return stKey;
}
// Einzelpreis einer Impfung (altersabhängige Varianten: Hep A / Hep A+B / FSME / Grippe HD)
function vaxUnitPrice(priceKey){
  const a=(typeof ageExact==='function' && el('p-dob'))?ageExact(el('p-dob').value):null;
  if(priceKey==='hepA'      && a!==null && a<16) return VAX_PRICE.hepA_child;
  if(priceKey==='hepAB'     && a!==null && a<16) return VAX_PRICE.hepAB_child;
  if(priceKey==='tbe'       && a!==null && a<12) return VAX_PRICE.tbe_child;
  if(priceKey==='influenza' && a!==null && a>=60) return VAX_PRICE.influenza_hd;
  return VAX_PRICE[priceKey];
}
// Vollständige Abrechnung des aktuellen Formulars berechnen
function computeBilling(){
  const rows=[]; let total=0; let hasUnpriced=false;
  const berat = (document.querySelector('input[name="leistung_beratung"]:checked')||{}).value || 'none';
  if(berat && berat!=='none'){ const p=PRICE_BERATUNG[berat]||0; rows.push({label:L2(BERAT_LABEL[berat]), price:p}); total+=p; }
  if(el('leistung_folge') && el('leistung_folge').checked){ rows.push({label:L2(I18N.leistFolge), price:PRICE_FOLGE}); total+=PRICE_FOLGE; }
  if(el('leistung_bescheinigung') && el('leistung_bescheinigung').checked){ rows.push({label:L2(I18N.leistBescheinigung), price:PRICE_BESCHEINIGUNG}); total+=PRICE_BESCHEINIGUNG; }
  const vax = getTodaysLeistungVax();
  vax.forEach(it=>{
    const unit = vaxUnitPrice(it.priceKey);
    if(typeof unit==='number'){ rows.push({label:it.name, price:unit, vax:true}); total+=unit; }
    else { rows.push({label:it.name, price:null, vax:true, unpriced:true}); hasUnpriced=true; }
  });
  // Impfleistung (GOÄ 375) – einmal pro Besuch (nicht je Injektion)
  if(vax.length){ rows.push({label:L2(I18N.leistImpf), price:PRICE_IMPFLEISTUNG}); total+=PRICE_IMPFLEISTUNG; }
  return { rows, total, hasUnpriced, count:rows.length };
}
// Beratungs-Labels für die Abrechnung (Kurzform)
const BERAT_LABEL = {
  '1':{de:'Beratung mit Impfplan (A76)',en:'Consultation with vaccination plan (A76)',fr:'Consultation avec plan vaccinal (A76)'},
  '3':{de:'Beratung, ggf. mit Rezept',en:'Consultation, possibly with prescription',fr:'Consultation, évent. avec ordonnance'},
  'A34':{de:'Ausführliche Beratung (A34)',en:'Detailed consultation (A34)',fr:'Consultation détaillée (A34)'}
};
const PAY_METHODS = [
  {v:'rechnung', de:'Auf Rechnung', en:'Invoice', fr:'Sur facture'},
  {v:'sofort',   de:'Direktzahlung (EC/Bar)', en:'Direct payment (card/cash)', fr:'Paiement direct (carte/espèces)'}
];
let _loadedPayment='';
function paymentMethod(){ const r=document.querySelector('input[name="kasse_payment"]:checked'); return r?r.value:(_loadedPayment||''); }
function payMethodLabel(v){ const m=PAY_METHODS.find(x=>x.v===v); return m?L2(m):''; }
function roleIsKasse(){ return (CURRENT_PROFILE||{}).role==='kasse'; }
function isKasseView(){ return roleIsKasse() && document.body.classList.contains('clinic'); }
// Sektion-6-Auswahl lesen / anwenden (persistiert, damit die Kasse die Auswahl des Arztes sieht)
function readLeistungen(){
  return {
    beratung: (document.querySelector('input[name="leistung_beratung"]:checked')||{}).value || '1',
    folge: !!(el('leistung_folge') && el('leistung_folge').checked),
    bescheinigung: !!(el('leistung_bescheinigung') && el('leistung_bescheinigung').checked)
  };
}
function applyLeistungen(L){
  L = L || {};
  const b = L.beratung || '1';
  const br = document.querySelector('input[name="leistung_beratung"][value="'+b+'"]'); if(br) br.checked = true;
  if(el('leistung_folge')) el('leistung_folge').checked = !!L.folge;
  if(el('leistung_bescheinigung')) el('leistung_bescheinigung').checked = !!L.bescheinigung;
}
let _loadedPaid='';   // 'paid' sobald ein finalisierter (bezahlter) Patient geladen ist
// Zahlungs-Badge (Behandelt-Liste): € = Direktzahlung, Beleg = Rechnung; grün wenn bezahlt
function payBadge(p){
  if(!p || !p.payment || !p.payment.method) return '';
  const m=p.payment.method, paid=!!p.payment.paid;
  const sym = (m==='sofort') ? '<b>€</b>' : '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><path d="M14 3H7v18h11V8z"/><path d="M14 3v5h5"/></svg>';
  const title = payMethodLabel(m)+' · '+(paid?L2(I18N.kassePaid):L2(I18N.kasseUnpaid));
  return '<span class="pay-badge '+(paid?'paid':'unpaid')+'" title="'+_esc(title)+'">'+sym+'</span>';
}
// Preisübersicht (kompakt, ohne Scrollen) – für alle Rollen
const PRICE_VAX_LIST=[
  ['Chikungunya',163.04],['Cholera (Schluck)',101.36],['Dengue (Qdenga)',112.54],
  ['FSME/TBE (Erw.)',57.86],['FSME/TBE (Kinder)',56.23],['Gelbfieber',72.15],
  ['Gürtelrose (Zoster)',281.73],['Grippe (Standard)',24.64],['Grippe (Hochdosis)',35.84],
  ['Hepatitis A (Erw.)',65.68],['Hepatitis A (Kinder)',43.97],['Hepatitis B',69.38],
  ['Hepatitis A+B (Erw.)',88.27],['Hepatitis A+B (Kinder)',56.39],['HPV (Gardasil 9)',209.62],
  ['Japan. Enzephalitis',121.84],['MMR',49.12],['Meningok. ACWY',61.23],['Meningok. B',122.56],
  ['MPox',199.69],['Pneumokokken',105.77],['Poliomyelitis',28.87],
  ['Td-IPV',27.06],['Tdap-IPV',44.82],['Tdap',42.78],
  ['Tollwut (Rabipur)',86.54],['Tollwut (Verorab)',80.02],['Typhus',37.98],['Windpocken',96.19]
];
function showPriceInfo(){
  const box=el('modal-content'); if(!box) return;
  const leist=[
    [L2(BERAT_LABEL['1']),PRICE_BERATUNG['1']],[L2(BERAT_LABEL['3']),PRICE_BERATUNG['3']],[L2(BERAT_LABEL['A34']),PRICE_BERATUNG['A34']],
    [L2(I18N.leistFolge),PRICE_FOLGE],[L2(I18N.leistBescheinigung),PRICE_BESCHEINIGUNG],[L2(I18N.leistImpf)+' (375)',PRICE_IMPFLEISTUNG]
  ];
  const mkRows=(arr)=>arr.map(r=>'<div class="pi-row"><span>'+_esc(r[0])+'</span><span>'+eur(r[1])+'</span></div>').join('');
  const half=Math.ceil(PRICE_VAX_LIST.length/2);
  const vaxA=PRICE_VAX_LIST.slice(0,half), vaxB=PRICE_VAX_LIST.slice(half);
  box.classList.add('pi-modal');
  box.innerHTML='<button class="modal-close" onclick="closeModal()">×</button>'+
    '<h3 class="pi-h">'+L2(I18N.priceInfoTitle)+'</h3>'+
    '<div class="pi-2col">'+
      '<div class="pi-block"><div class="pi-sub">'+L2(I18N.priceInfoLeist)+'</div><div class="pi-list">'+mkRows(leist)+'</div></div>'+
      '<div class="pi-block"><div class="pi-sub">'+L2(I18N.priceInfoVax)+'</div><div class="pi-vaxgrid"><div class="pi-vaxcol">'+mkRows(vaxA)+'</div><div class="pi-vaxcol">'+mkRows(vaxB)+'</div></div></div>'+
    '</div>';
  const bg=el('modal-bg'); if(bg) bg.classList.add('show');
}
// Abrechnungsblock (Sektion 6) rendern – zentrale Ansicht der Kasse
// Gruppen-Umschalter an der Kasse: alle Mitglieder derselben Gruppe des Tages, mit Zahlstatus.
function kasseGroupBar(){
  const cur=patients.find(p=>p.id===editingId); if(!cur) return '';
  const grp=(cur.group||'').trim().toLowerCase(); if(!grp) return '';
  const members=patients.filter(p=>patientDay(p)===listDay && !p.deleted && (p.group||'').trim().toLowerCase()===grp && (p.status==='kasse'||p.status==='done'));
  if(members.length<2) return '';
  let h='<div class="kb-group"><div class="kb-group-h">'+(LX('Gruppe: ','Group: '))+_esc(cur.group)+' · '+(LX('an der Kasse','at billing'))+'</div><div class="kb-group-members">';
  members.forEach(m=>{
    const isCur=m.id===editingId;
    const paid=(m.status==='done')||!!(m.payment&&m.payment.paid);
    const settled=paid||!!(m.payment&&m.payment.method);
    const cls='kb-gm'+(isCur?' cur':'')+(paid?' paid':(settled?' settled':' open'));
    const nm=m.firstname? (m.name+', '+m.firstname):m.name;
    const dot=paid?'✓':(settled?'€':'○');
    h+='<button type="button" class="'+cls+'" '+(isCur?'disabled':('onclick="kasseSwitchMember(\''+m.id+'\')"'))+'><span class="kb-gm-dot">'+dot+'</span><span class="kb-gm-nm">'+_esc(nm)+'</span></button>';
  });
  h+='</div><div class="kb-group-hint">'+(LX('Jedes Mitglied abrechnen (bezahlt/auf Rechnung); beim Abschluss werden alle bezahlten Mitglieder gemeinsam auf „Behandelt" gesetzt.','Bill each member (paid/invoice); on sign-off all settled members move to “Done” together.'))+'</div></div>';
  return h;
}
// Zwischenspeichern und zum ausgewählten Gruppenmitglied wechseln (Zahlungsart bleibt erhalten).
async function kasseSwitchMember(id){
  if(!id||id===editingId) return;
  try{ await savePatient(false); }catch(_){}
  openPatientCard(id);
}
function renderKasseBilling(){
  const box=el('kasse-billing'); if(!box) return;
  // Grünes „Bezahlt"-Feld, sobald der Patient finalisiert wurde – in jeder Rolle sichtbar
  const paidField = (_loadedPaid==='paid') ? '<div class="kb-paid-field">'+L2(I18N.kassePaid)+'</div>' : '';
  if(!canBill()){ box.innerHTML = paidField; return; }   // Abrechnungsblock nur wenn Patient an der Kasse (Kasse ODER vertretendes Personal)
  const b=computeBilling();
  let h=kasseGroupBar()+'<div class="kb-title">'+L2(I18N.kasseBillTitle)+'</div>';
  if(!b.rows.length){ box.innerHTML=h+'<div class="leistung-empty">'+L2(I18N.kasseNoItems)+'</div>'+paidField; return; }
  h+='<div class="kb-rows">';
  b.rows.forEach(r=>{ h+='<div class="kb-row'+(r.vax?' kb-vax':'')+'"><span class="kb-l">'+_esc(r.label)+'</span><span class="kb-p">'+(r.unpriced?('<span class="kb-manual">'+L2(I18N.kassePriceManual)+'</span>'):eur(r.price))+'</span></div>'; });
  h+='</div>';
  h+='<div class="kb-total"><span>'+L2(I18N.kasseTotal)+'</span><span class="kb-total-val">'+eur(b.total)+(b.hasUnpriced?' +':'')+'</span></div>';
  if(b.hasUnpriced) h+='<div class="kb-note">'+L2(I18N.kasseUnpricedNote)+'</div>';
  const cur=paymentMethod()||_loadedPayment;
  h+='<div class="kb-pay-title">'+L2(I18N.kassePayTitle)+'</div><div class="kb-pay">';
  PAY_METHODS.forEach(m=>{ h+='<label class="chk-chip"><input type="radio" name="kasse_payment" value="'+m.v+'" '+(cur===m.v?'checked':'')+' onchange="renderKasseBilling()"> <span>'+L2(m)+'</span></label>'; });
  h+='</div>';
  h+=paidField;
  box.innerHTML=h;
}
// Heute zu verabreichende Impfungen (Bucket offset 0) als [{k:stKey, sub:planField, name, priceKey}]
function getTodaysLeistungVax() {
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
         if (st.planned) planned.push({ name: typeof getPlanName==='function'?getPlanName(v,st):(vName(v)), k: v.k, live: !!v.live, stKey: v.k, planField: 'planned' });
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
      if (todayBucket && todayBucket.items) todaysItems = todayBucket.items;
   }
   // Nur noch aktiv geplante Impfungen berücksichtigen – entfernte Impfungen dürfen die Abrechnung
   // nicht mehr beeinflussen, auch wenn ein alter customSchedule sie noch enthält.
   return todaysItems
      .filter(item => { if(!item.planField) return true; const st=vaxState[item.stKey]; return !!(st && st[item.planField]); })
      .map(item => {
         let pk = vaxPriceKey(item.stKey, item.planField || 'planned');
         // item.k ist bereits der korrekte Preis-Schlüssel (hepA/hepB/hepAB/tdap_combo/ipv_mono/…).
         // Fallback für ältere/gespeicherte Termine ohne planField, damit z.B. Hep A (Avaxim) immer einen Preis hat.
         if(!(pk in VAX_PRICE) && item.k && (item.k in VAX_PRICE)) pk = item.k;
         return { k: item.stKey, sub: item.planField || 'planned', name: item.name, priceKey: pk };
      });
}
function updateLeistungen() {
   const listDiv = el('leistung-vax-list');
   if (!listDiv) return;

   let list = getTodaysLeistungVax();

   let html = '';
   if (list.length === 0) {
      html = '<div class="leistung-empty">' + (LX('Keine Impfungen für heute geplant.','No vaccinations planned for today.')) + '</div>';
   } else {
      list.forEach(item => {
         html += '<span class="leistung-chip">'+_esc(item.name)+'<span class="lc-x" title="'+(LX('Entfernen','Remove'))+'" onclick="removeLeistungVax(\''+item.k+'\', \''+item.sub+'\')">✕</span></span>';
      });
   }
   listDiv.innerHTML = html;
   
   const impfCheckbox = el('leistung_impf');
   if (impfCheckbox) {
      impfCheckbox.checked = list.length > 0;
   }
   checkLeistungWarning();
   renderKasseBilling();
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
let listTypeFilter='all';   // 'all' | 'beratung' | 'folgeimpfung' – Filter im Fluss-Board
function setTypeFilter(t){ listTypeFilter=t; renderPatients(); }
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
// Kasse darf niemals behandeln / in „In Behandlung" verschieben (nur ins Wartezimmer)
function kasseNoTreatMsg(){ return LX('Als Kasse können Sie keine Patienten behandeln. Sie können Patienten nur ins Wartezimmer zurücklegen.','As billing staff you cannot treat patients. You can only move patients back to the waiting room.'); }
async function takeIntoTreatment(id){
  if(roleIsKasse()){ uiAlert(kasseNoTreatMsg()); return; }
  const p=patients.find(x=>x.id===id); const type=p?patientTreatType(p):myTreatmentMode();
  if(!canTreatType(type)){ uiAlert(LX('Als MFA können Sie keine Beratung übernehmen. Nur Ärztinnen/Ärzte führen Beratungen durch.','As MFA you cannot take a consultation; only physicians consult.')); return; }
  await setPatientStatus(id,'treatment',type,true); loadPatient(id);
}
async function takeGroupIntoTreatment(g){
  if(roleIsKasse()){ uiAlert(kasseNoTreatMsg()); return; }
  const first=patients.find(p=>patientDay(p)===listDay&&(p.group||'').trim().toLowerCase()===g.trim().toLowerCase());
  const type=first?patientTreatType(first):myTreatmentMode();
  if(!canTreatType(type)){ uiAlert(LX('Als MFA können Sie keine Beratung übernehmen. Nur Ärztinnen/Ärzte führen Beratungen durch.','As MFA you cannot take a consultation; only physicians consult.')); return; }
  await moveGroupStatus(g,'treatment',type,true); if(first)loadPatient(first.id);
}
async function startTreatment(id){ await takeIntoTreatment(id); }
// Grüner Haken: Medizin-Personal → Patient an die Kasse übergeben ('kasse'); Kasse → Zahlung bestätigen ('done')
async function finishTreatment(){
  if(!editingId){ exitToList(); return; }
  const cur=patients.find(p=>p.id===editingId);
  const curStatus = cur ? patientStatus(cur) : 'treatment';
  // Wartende Patienten (Patientenansicht, noch nicht übernommen) → nur zwischenspeichern, kein Abschluss
  if(curStatus==='waiting'){ try{ await savePatient(false); }catch(_){} showList(); return; }
  const kasse = (curStatus==='kasse');   // Patient an der Kasse → Abschluss = Zahlung bestätigen
  if(kasse && computeBilling().total>0 && !paymentMethod()){ await uiAlert(L2(I18N.kassePayRequired)); return; }
  const grp=(cur&&cur.group)?cur.group.trim().toLowerCase():'';
  const isGrp=!!grp && patients.filter(p=>patientDay(p)===listDay&&(p.group||'').trim().toLowerCase()===grp).length>1;
  const target = kasse ? 'done' : 'kasse';
  let msg, title, okLbl;
  if(kasse){
    const b=computeBilling();
    msg = (LANG==='de'?('Zahlung über '+eur(b.total)+(b.hasUnpriced?' (+ manuelle Positionen)':'')+' – '+payMethodLabel(paymentMethod())+' – bestätigen und Patienten abschließen?')
        : (LANG==='fr'?('Confirmer le paiement de '+eur(b.total)+(b.hasUnpriced?' (+ postes manuels)':'')+' – '+payMethodLabel(paymentMethod())+' – et clôturer le patient ?')
        : ('Confirm payment of '+eur(b.total)+(b.hasUnpriced?' (+ manual items)':'')+' – '+payMethodLabel(paymentMethod())+' – and complete the patient?')));
    title = L2(I18N.kasseBillTitle); okLbl = L2(I18N.kasseSignoff);
  } else {
    msg = isGrp
      ? (LANG==='de'?'Behandlung der ganzen Gruppe „'+(cur.group)+'" abschließen und an die Kasse übergeben?':(LANG==='fr'?'Terminer la prise en charge de tout le groupe « '+(cur.group)+' » et le transférer à la caisse ?':'Complete treatment for the whole group and hand over to billing?'))
      : L2(I18N.toKasseConfirm);
    title = L2(I18N.kasseSection); okLbl = L2(I18N.toKasseBtn);
  }
  if(!(await uiConfirm(msg,{title:title,ok:okLbl}))) return;
  const ok=await savePatient(true);   // setzt Status auf 'kasse' (Personal) bzw. 'done' (Kasse) + exitToList()
  if(!ok) return;
  if(grp){
    if(kasse){
      // Kasse: nur bereits abgerechnete Gruppenmitglieder (Zahlungsart hinterlegt) mit abschließen.
      // Noch nicht abgerechnete Mitglieder bleiben an der Kasse – die Gruppe wird erst „Behandelt", wenn alle bezahlt/auf Rechnung sind.
      const kasseMates=patients.filter(p=>patientDay(p)===listDay && p.id!==cur.id && (p.group||'').trim().toLowerCase()===grp && p.status==='kasse');
      const settled=kasseMates.filter(m=> m.payment && m.payment.method);
      const open=kasseMates.filter(m=> !(m.payment && m.payment.method));
      for(const m of settled){ if(!m.payment) m.payment={}; m.payment.paid=true; m.status='done'; await persistPatient(m); }
      renderPatients();
      if(open.length){
        const names=open.map(m=> m.firstname? (m.name+', '+m.firstname) : m.name).join(', ');
        await uiAlert(LX('Gruppe „'+cur.group+'": noch nicht alle abgerechnet. Bitte auch abrechnen und abschließen: '+names,'Group “'+cur.group+'”: not everyone billed yet. Please also bill and complete: '+names));
      }
    } else {
      // Behandlung → Kasse: ganze Gruppe zusammen weiterreichen.
      const mates=patients.filter(p=>patientDay(p)===listDay && (p.group||'').trim().toLowerCase()===grp && p.status!==target);
      for(const m of mates){ m.status=target; await persistPatient(m); }
      renderPatients();
    }
  }
}
async function assignGroup(id){
  closeCardMenus();
  const p=patients.find(x=>x.id===id);if(!p)return;
  const g=await uiPrompt(LX('Gruppen-/Familienname (leer = Gruppe entfernen):','Group/family name (empty = remove):'),{title:LX('Gruppe','Group'),def:p.group||''});
  if(g===null)return; p.group=g.trim();
  await persistPatient(p); renderPatients();
}
// Drag&Drop: auf eine Spalte = Status ändern; auf einen anderen Patienten = gruppieren
async function ungroup(id){
  const p=patients.find(x=>x.id===id);if(!p)return;
  const gl=(p.group||'').trim().toLowerCase();
  p.group='';
  await persistPatient(p);
  // Bleibt nur noch eine Person in der Gruppe übrig, wird auch diese automatisch entgruppiert
  if(gl){
    const rest=patients.filter(x=>patientDay(x)===listDay && x.id!==id && !x.deleted && (x.group||'').trim().toLowerCase()===gl);
    if(rest.length===1){ rest[0].group=''; await persistPatient(rest[0]); }
  }
  renderPatients();
}
// Ganze Gruppe auflösen (alle Mitglieder des Tages) – über den Button im Gruppenkopf
async function dissolveGroup(g){
  const gl=(g||'').trim().toLowerCase(); if(!gl)return;
  const mates=patients.filter(x=>patientDay(x)===listDay && !x.deleted && (x.group||'').trim().toLowerCase()===gl);
  if(!mates.length)return;
  if(typeof uiConfirm==='function'){
    const ok=await uiConfirm(LX('Gruppe „'+g+'" auflösen? Die Patienten bleiben einzeln in der Liste.','Dissolve group “'+g+'”? The patients remain individually in the list.'),{title:LX('Gruppe auflösen','Dissolve group'),ok:LX('Auflösen','Dissolve')});
    if(!ok)return;
  }
  for(const p of mates){ p.group=''; await persistPatient(p); }
  renderPatients();
}
let _dragPid=null, _dragGroup=null;
document.addEventListener('dragend', () => {
  document.querySelectorAll('.drag-over, .group-target').forEach(el => el.classList.remove('drag-over', 'group-target'));
  hideTpTooltip();
});
function pDragStart(e,id){hideTpTooltip();_dragPid=id;_dragGroup=null;document.body.classList.add('amb-dragging');try{e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',id);}catch(_){}}
function gDragStart(e,g){ if(e.target.closest('.patient-item'))return; _dragGroup=g;_dragPid=null;document.body.classList.add('amb-dragging');try{e.dataTransfer.effectAllowed='move';}catch(_){}}
function pDragEnd(e){ document.body.classList.remove('amb-dragging'); const tz=el('amb-trash'); if(tz)tz.classList.remove('over'); }
// Löschzone (untere Zeile): erscheint beim Ziehen; Ablegen löscht nach Rückfrage
function trashOver(e){ e.preventDefault(); e.currentTarget.classList.add('over'); try{e.dataTransfer.dropEffect='move';}catch(_){} }
function trashLeave(e){ e.currentTarget.classList.remove('over'); }
async function trashDrop(e){
  e.preventDefault(); e.currentTarget.classList.remove('over');
  const grp=_dragGroup; let id=_dragPid;
  if(!id && !grp){ try{ id=e.dataTransfer.getData('text/plain'); }catch(_){} }
  _dragPid=null; _dragGroup=null; document.body.classList.remove('amb-dragging');
  const who=((CURRENT_PROFILE&&CURRENT_PROFILE.title?CURRENT_PROFILE.title+' ':'')+((CURRENT_PROFILE&&CURRENT_PROFILE.full_name)||'')).trim()||myUserKey();
  const stamp=()=>({ts:new Date().toISOString(), who, role:(CURRENT_PROFILE&&CURRENT_PROFILE.role)||''});
  if(grp){
    const gl=grp.trim().toLowerCase();
    const members=patients.filter(p=>patientDay(p)===listDay && !p.deleted && (p.group||'').trim().toLowerCase()===gl);
    if(!members.length) return;
    if(!(await uiConfirm((LANG==='de'?('Ganze Gruppe „'+grp+'" ('+members.length+' Patienten) löschen?'):(LANG==='fr'?('Supprimer tout le groupe « '+grp+' » ('+members.length+' patients) ?'):('Delete whole group "'+grp+'" ('+members.length+' patients)?'))),{title:LX('Löschen','Delete'),ok:LX('Löschen','Delete'),danger:true}))) return;
    for(const m of members){ m.deleted=stamp(); await persistPatient(m); if(editingId===m.id) cancelEdit(); }
    if(USE_DB && roleSeesClinic((CURRENT_PROFILE||{}).role)) await loadPatientsFromDB();
    renderPatients();
  } else if(id){
    const p=patients.find(x=>x.id===id); if(!p) return;
    const nm=(p.firstname?p.name+', '+p.firstname:p.name);
    if(!(await uiConfirm((LANG==='de'?('„'+nm+'" wirklich löschen?'):(LANG==='fr'?('Supprimer vraiment « '+nm+' » ?'):('Really delete "'+nm+'"?'))),{title:LX('Patient löschen','Delete patient'),ok:LX('Löschen','Delete'),danger:true}))) return;
    p.deleted=stamp(); const ok=await persistPatient(p); if(!ok) return;
    if(editingId===id) cancelEdit();
    if(USE_DB && roleSeesClinic((CURRENT_PROFILE||{}).role)) await loadPatientsFromDB();
    renderPatients();
  }
}
document.addEventListener('dragend',function(){ document.body.classList.remove('amb-dragging'); const tz=el('amb-trash'); if(tz)tz.classList.remove('over'); });
function pDragOver(e){e.preventDefault();e.currentTarget.classList.add('drag-over');const sec=e.currentTarget.closest('.amb-section');if(sec)sec.classList.remove('collapsed');}
function pDragLeave(e){e.currentTarget.classList.remove('drag-over');}
function pDrop(e,status,type){
  // Drag&Drop in „In Behandlung" übernimmt den Patienten in die eigene Behandlung (claim=true).
  e.preventDefault();e.currentTarget.classList.remove('drag-over');
  let id=_dragPid;if(!id){try{id=e.dataTransfer.getData('text/plain');}catch(_){}}
  // Typ aus dem gezogenen Patienten/der Gruppe ableiten, wenn die Spalte keinen Typ vorgibt (Fluss-Board)
  if(!type){
    if(_dragGroup){ const first=patients.find(p=>patientDay(p)===listDay && (p.group||'').trim().toLowerCase()===_dragGroup.trim().toLowerCase()); if(first) type=patientTreatType(first); }
    else if(id){ const dp=patients.find(x=>x.id===id); if(dp) type=patientTreatType(dp); }
  }
  // Kasse darf niemanden in „In Behandlung" ziehen (nur ins Wartezimmer)
  if(status==='treatment' && roleIsKasse()){ _dragGroup=null;_dragPid=null; uiAlert(kasseNoTreatMsg()); return; }
  // MFA darf niemanden in „Beratung · In Behandlung" ziehen (keine Beratung durch MFA)
  if(status==='treatment' && !canTreatType(type)){ _dragGroup=null;_dragPid=null; uiAlert(LX('Als MFA können Sie keine Beratung übernehmen. Nur Ärztinnen/Ärzte führen Beratungen durch.','As MFA you cannot take a consultation; only physicians consult.')); return; }
  if(_dragGroup){ const g=_dragGroup;_dragGroup=null;_dragPid=null;moveGroupStatus(g,status,type,true);return; }
  _dragPid=null;if(id)setPatientStatus(id,status,type,true);
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
  if(!(await uiConfirm((LANG==='de'?'„'+nm(src)+'" zur Gruppe „'+(tgt.name||'')+'" hinzufügen?':(LANG==='fr'?'Ajouter « '+nm(src)+' » au groupe « '+(tgt.name||'')+' » ?':'Add "'+nm(src)+'" to group "'+(tgt.name||'')+'"?')),{title:LX('Gruppieren','Group')})))return;
  const grp=(tgt.name||'Gruppe').trim();   // Gruppenname = Nachname des Ziels
  src.group=grp; tgt.group=grp;
  await persistPatient(tgt); await persistPatient(src); renderPatients();
}
// Rechter Pfeil: Patient in die eigene Behandlung nehmen. Nur für Wartend/In Behandlung.
function arrowBtn(id){ if(roleIsKasse()) return ''; return '<button class="amb-arrow" onclick="event.stopPropagation();takeIntoTreatment(\''+id+'\')" title="'+(LX('In Behandlung nehmen','Take into treatment'))+'">→</button>'; }
function groupArrowBtn(gesc){ return '<button class="amb-arrow" onclick="event.stopPropagation();takeGroupIntoTreatment(\''+gesc+'\')" title="'+(LX('Gruppe in Behandlung nehmen','Take group into treatment'))+'">→</button>'; }
function elapsedStr(iso){ if(!iso)return''; const min=Math.max(0,Math.round((Date.now()-new Date(iso).getTime())/60000)); if(isNaN(min))return''; if(min<1)return LX('gerade eben','just now'); if(min<60)return min+' min'; const h=Math.floor(min/60),m=min%60; return h+' h'+(m?' '+m:'')+(m?' min':''); }
function initials(name){ if(!name)return '?'; const parts=String(name).trim().split(/\s+/).filter(Boolean); if(!parts.length)return '?'; if(parts.length===1)return parts[0].slice(0,2).toUpperCase(); return (parts[0][0]+parts[parts.length-1][0]).toUpperCase(); }
function roleColor(role){ switch(role){ case 'arzt':return '#2563eb'; case 'mfa':return '#0e9e8e'; case 'admin':return '#111827'; case 'kasse':return '#b45309'; case 'patient':return '#6b7280'; default:return '#6b7280'; } }
function formatRoleTitle(role, gender){
  if(role==='arzt'){
    if(gender==='m') return LX('Arzt','Doctor');
    if(gender==='w') return LX('Ärztin','Doctor');
    return LX('Arzt / Ärztin','Doctor');
  }
  if(role==='mfa') return 'MFA';
  if(role==='admin') return 'Admin';
  if(role==='kasse') return LX('Kasse','Reception');
  return role||'';
}
function initialsCircle(name,role,gender){ const rTitle=formatRoleTitle(role,gender); return '<span class="ini-circle" style="background:'+roleColor(role)+'" title="'+_esc(name||'')+(rTitle?' · '+rTitle:'')+'">'+_esc(initials(name))+'</span>'; }
function toggleCardMenu(id){ const m=el('cm-'+id); const open=m&&m.style.display==='block'; closeCardMenus(); if(m&&!open)m.style.display='block'; }
function closeCardMenus(){ document.querySelectorAll('.card-menu').forEach(m=>m.style.display='none'); }
document.addEventListener('click',function(e){ if(!e.target.closest('.card-menu')&&!e.target.closest('.menu-btn')) closeCardMenus(); });
let AMB_TIMER=null;
function startAmbRefresh(){ if(AMB_TIMER)return; AMB_TIMER=setInterval(()=>{ if(USE_DB && typeof roleSeesClinic==='function' && roleSeesClinic((CURRENT_PROFILE||{}).role)){ loadPatientsFromDB(); if(typeof loadShiftToday==='function') loadShiftToday(); } },5000); }
function renderPatients(){
  const listEl=el('patient-list');if(!listEl)return;
  const di=el('list-date');if(di&&di.value!==listDay)di.value=listDay;
  const dayPats=patients.filter(p=>patientDay(p)===listDay);
  const q=listSearch;
  const filt=q?dayPats.filter(p=>((p.name||'')+' '+(p.firstname||'')).toLowerCase().includes(q)||((p.firstname||'')+' '+(p.name||'')).toLowerCase().includes(q)):dayPats;
  // Offene Schnellansichten merken, damit sie beim Neu-Rendern (Auto-Refresh) nicht zuklappen
  const openIds=Array.from(listEl.querySelectorAll('.patient-item.open')).map(e=>e.dataset.pid);
  hideTpTooltip();
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
    h+='<div class="amb-sec-h"'+clickAttr+' ondragover="pDragOver(event)" ondragleave="pDragLeave(event)" ondrop="pDrop(event,\''+s.status+'\','+typeArg+')"><span>'+(LANG==='de'?s.de:(LANG==='fr'?(s.fr||s.en):s.en))+' <span class="count-pill">'+inSec.length+'</span></span>'+toggleArrow+'</div>';
    h+='<div class="patient-list drop-zone" '+dropAttr+' ondragover="pDragOver(event)" ondragleave="pDragLeave(event)" ondrop="pDrop(event,\''+s.status+'\','+typeArg+')">';
    h+= inSec.length ? renderSectionCards(inSec) : '<div class="amb-empty">'+(LX('Hierher ziehen …','Drop here …'))+'</div>';
    h+='</div></div>';
    return h;
  };
  // Fluss-Board: eine durchgehende Reihe entlang des Patientenwegs (mit Stufen-Icons)
  const SI={
    waiting:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    treatment:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v6a4 4 0 0 0 8 0V3"/><path d="M10 17v2a3 3 0 0 0 6 0v-3"/><circle cx="18" cy="13" r="2.2"/></svg>',
    kasse:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="6" width="19" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6 9v6M18 9v6"/></svg>',
    done:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5L20 6.5"/></svg>'
  };
  const STAGES=[
    {status:'waiting',   de:'Wartend',       en:'Waiting',      fr:'En attente'},
    {status:'treatment', de:'In Behandlung', en:'In treatment', fr:'En traitement'},
    {status:'kasse',     de:'Kasse',         en:'Billing',      fr:'Caisse'},
    {status:'done',      de:'Behandelt',     en:'Treated',      fr:'Traité'}
  ];
  const tf=listTypeFilter||'all';
  const filtT=(tf==='all')?filt:filt.filter(p=>patientTreatType(p)===tf);
  let cols='';
  STAGES.forEach(s=>{
    let inSec=filtT.filter(p=>!p.deleted && patientStatus(p)===s.status);
    // Wartend nach Wartezeit sortieren: längste Wartezeit (ältestes savedAt) oben.
    if(s.status==='waiting'){ inSec=inSec.slice().sort((a,b)=>{ const av=a.savedAt||'', bv=b.savedAt||''; return av<bv?-1:(av>bv?1:0); }); }
    const title=(LANG==='de'?s.de:(LANG==='fr'?s.fr:s.en));
    cols+='<div class="amb-col amb-col-'+s.status+'"><div class="amb-col-h"><span class="amb-col-title"><span class="amb-col-ic">'+(SI[s.status]||'')+'</span>'+title+'</span><span class="count-pill">'+inSec.length+'</span></div>';
    cols+='<div class="patient-list drop-zone" data-status="'+s.status+'" ondragover="pDragOver(event)" ondragleave="pDragLeave(event)" ondrop="pDrop(event,\''+s.status+'\',null)">';
    cols+= inSec.length ? renderSectionCards(inSec) : '<div class="amb-empty">'+(LX('Hierher ziehen …','Drop here …'))+'</div>';
    cols+='</div></div>';
  });
  const fchip=(v,lbl)=>'<button class="amb-filter'+(tf===v?' active':'')+'" onclick="setTypeFilter(\''+v+'\')">'+lbl+'</button>';
  const slot=el('amb-filter-slot'); if(slot) slot.innerHTML=fchip('all',LX('Alle','All'))+fchip('beratung',LX('Beratung','Consultation'))+fchip('folgeimpfung',LX('Folgeimpfung','Follow-up'));
  let html='<div class="amb-flow">'+cols+'</div>';
  html+='<div class="amb-shift-row">'+shiftRowHtml()+'</div>';   // „Im Dienst" als Zeile unter dem Board
  // Löschzone – nur beim Ziehen sichtbar (untere Zeile)
  html+='<div class="amb-trash-zone" id="amb-trash" ondragover="trashOver(event)" ondragleave="trashLeave(event)" ondrop="trashDrop(event)"><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg><span>'+(LX('Zum Löschen hierher ziehen','Drag here to delete'))+'</span></div>';
  // Gelöschte Patienten – nur für Admin sichtbar, klar als gelöscht markiert
  // Gelöschte Patienten erscheinen NICHT mehr im Board – siehe Einstellungen (Gelöschte Patienten).
  const scrollTops = {};
  if(listEl) listEl.querySelectorAll('.drop-zone').forEach(z => {
    const key = z.dataset.status + '|' + z.dataset.type;
    scrollTops[key] = z.scrollTop;
  });
  listEl.innerHTML=html;
  listEl.querySelectorAll('.drop-zone').forEach(z => {
    const key = z.dataset.status + '|' + z.dataset.type;
    if (scrollTops[key]) z.scrollTop = scrollTops[key];
  });
  openIds.forEach(id=>{ const e=el('pi-'+id); if(e) e.classList.add('open'); });   // Schnellansichten wiederherstellen
  renderTreatPanel();
}
function secKey(s){ return s.status+(s.type?'·'+s.type:''); }
function toggleSection(key,hdr){ const sec=hdr.parentNode; sec.classList.toggle('collapsed'); SEC_COLLAPSE[key]=sec.classList.contains('collapsed'); saveSecCollapse(); }

function tpTooltipHTML(p) {
  const dest=(p.destinations||[]).map(c=>CBY[c]?cName(CBY[c]):c).join(', ')||'—';
  const durLbl={'<1w':'< 1 '+(LX('Woche','week')),'1-2w':'1–2 '+(LX('Wochen','weeks')),'<2w':'< 2 '+(LX('Wochen','weeks')),'2-4w':'2–4 '+(LX('Wochen','weeks')),'0-7':'0–7 d','7-14':'7–14 d','14-21':'14–21 d','21-28':'21–28 d','1-3m':'1–3 '+(LX('Mon','mo')),'3-6m':'3–6 '+(LX('Mon','mo')),'>6m':'>6 '+(LX('Mon','mo'))}[p.duration]||p.duration||'—';
  const preg = p.pregnant==='pregnant'?(LX('Ja','Yes')):(p.pregnant==='breastfeeding'?(LX('Stillend','Breastfeeding')):(p.pregnant==='planned'?(LX('Geplant','Planned')):(LX('Nein','No'))));
  const fld=(lbl,val)=>'<div class="pb-field"><span class="pb-lbl">'+lbl+'</span><span class="pb-val">'+val+'</span></div>';
  return fld(LX('Reisedauer','Duration'), durLbl) +
         fld(LX('Reiseziel(e)','Destination(s)'), dest) +
         fld(LX('Allergien','Allergies'), _esc(p.allergy||'—')) +
         fld(LX('Schwangerschaft','Pregnancy'), preg) +
         fld(LX('Chron. Erkrankung','Chronic Illness'), _esc(p.chronicText||'—')) +
         fld(LX('Medikamente','Medication'), _esc(p.meds&&p.meds.length?p.meds.join(', '):'—'));
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
function tpItemDone(p){ const nm=(p.firstname?p.name+', '+p.firstname:p.name); const act=(p.id===editingId)?' active':''; const doc=p.claimedByName?initialsCircle(p.claimedByName,p.claimedByRole||'arzt',p.claimedByGender||''):''; const icons=payBadge(p)+doc; return '<div class="tp-item tp-done'+act+'" tabindex="0" onmouseenter="showTpTooltip(event,\''+p.id+'\')" onmouseleave="hideTpTooltip()" draggable="true" ondragstart="pDragStart(event,\''+p.id+'\')" onclick="tpSwitch(\''+p.id+'\')"><span class="tp-nm" style="font-weight:400;color:var(--grey)">'+_esc(nm)+'</span>'+(icons?'<span class="tp-icons">'+icons+'</span>':'')+'</div>'; }
// Patient im Behandlungsfeld wechseln – aktuelle Eingaben vorher zwischenspeichern (ohne Abschluss)
async function tpSwitch(id){ if(id===editingId){ if(document.body.classList.contains('clinic-idle')) enterPatient(); return; } if(editingId){ try{ await savePatient(false); }catch(_){} } loadPatient(id); }
function tpItemStatic(p){ const nm=(p.firstname?p.name+', '+p.firstname:p.name); return '<div class="tp-item tp-static" tabindex="0" onmouseenter="showTpTooltip(event,\''+p.id+'\')" onmouseleave="hideTpTooltip()"><span class="tp-nm">'+_esc(nm)+'</span></div>'; }
function renderTreatPanel(){
  const box=el('treat-panel'); if(!box) return;
  const clinic=document.body.classList.contains('clinic');
  const editing=!!editingId && !document.body.classList.contains('clinic-idle');
  // In der Listenansicht (idle) kein linkes Panel – das Fluss-Board nimmt die volle Breite ein.
  // Nur während der Behandlung eines Patienten erscheint links die Sektions-Navigation.
  if(!clinic || !editing){ box.innerHTML=''; box.classList.remove('show'); return; }
  const kasse=roleIsKasse();
  const docName=(CURRENT_PROFILE&&CURRENT_PROFILE.full_name)||'';
  const docRole=(CURRENT_PROFILE&&CURRENT_PROFILE.role)||'';
  const kassePats=patients.filter(p=>patientDay(p)===listDay && patientStatus(p)==='kasse' && !p.deleted);
  const donePats=patients.filter(p=>patientDay(p)===listDay && patientStatus(p)==='done' && !p.deleted);
  let h='';

  if(kasse){
    // Rolle Kasse: oben die Warteschlange „Kasse" (klickbar), unten „Behandelt"
    h+='<div class="tp-head"><span class="tp-title">'+L2(I18N.kasseSection)+' <span class="count-pill">'+kassePats.length+'</span></span>'+(docName?initialsCircle(docName,docRole,CURRENT_PROFILE?CURRENT_PROFILE.gender:''):'')+'</div>';
    if(editing) h+='<button class="tp-home" onclick="showList()" style="margin-top:8px;">&larr; '+(LX('Ambulanzliste','Clinic list'))+'</button>';
    h+='<div class="tp-list drop-zone tp-kasse-list" data-status="kasse" ondragover="pDragOver(event)" ondragleave="pDragLeave(event)" ondrop="pDrop(event,\'kasse\',null)">'+(kassePats.length?kassePats.map(tpItem).join(''):'<div class="tp-empty">'+L2(I18N.kasseNoItems)+'</div>')+'</div>';
    if(!editing) h+='<div class="tp-shift-zone" style="margin-top:auto;">'+shiftPanelHtml()+'</div>';
    if(editing) h+='<div class="tp-sep"></div><div class="tp-sections">'+secNavHtml()+'</div>';
    box.innerHTML=h; box.classList.add('show'); updateSecNav(); return;
  }

  // Medizin-Personal (Arzt/MFA/Admin)
  const mine=patients.filter(p=>patientDay(p)===listDay && patientStatus(p)==='treatment' && p.claimedBy===myUserKey());
  // Wird ein wartender Patient geöffnet (Patientenansicht), ist noch niemand Behandler → kein „In Behandlung", kein Behandler-Icon
  const _curEdit=patients.find(p=>p.id===editingId);
  const _waitingView=editing && _curEdit && patientStatus(_curEdit)==='waiting';
  const _kasseStage=editing && _curEdit && patientStatus(_curEdit)==='kasse';
  const _headTitle=_waitingView ? LX('Patient','Patient') : (_kasseStage ? LX('Kasse','Billing') : LX('In Behandlung','In treatment'));
  const _headAvatar=_waitingView ? '' : (docName?initialsCircle(docName,docRole,CURRENT_PROFILE?CURRENT_PROFILE.gender:''):'');
  h+='<div class="tp-head"><span class="tp-title">'+_headTitle+'</span>'+_headAvatar+'</div>';
  if(editing) h+='<button class="tp-home" onclick="showList()" style="margin-top: 8px;">&larr; '+(LX('Ambulanzliste','Clinic list'))+'</button>';
  if(mine.length){
    const groups={},order=[];
    mine.forEach(p=>{const g=(p.group||'').trim();const k=g?('g:'+g.toLowerCase()):('p:'+p.id);if(!groups[k]){groups[k]={g:g,items:[]};order.push(k);}groups[k].items.push(p);});
    h+='<div class="tp-list">';
    order.forEach(k=>{const grp=groups[k];
      if(grp.g&&grp.items.length>1) h+='<div class="tp-group"><div class="tp-gname">'+(LX('Gruppe: ','Group: '))+_esc(grp.g)+'</div>'+grp.items.map(tpItem).join('')+'</div>';
      else h+=grp.items.map(tpItem).join('');
    });
    h+='</div>';
  } else {
    h+='<div class="tp-empty">'+(LX('Kein Patient in Behandlung.','No patient in treatment.'))+'</div>';
  }

  // Kasse & Behandelt stehen jetzt im zentralen Fluss-Board – die linke Spalte zeigt nur
  // die eigenen laufenden Behandlungen und „Im Dienst".
  if(!editing) h+='<div class="tp-shift-zone" style="margin-top:auto;">'+shiftPanelHtml()+'</div>';

  if(editing) h+='<div class="tp-sep"></div><div class="tp-sections">'+secNavHtml()+'</div>';
  box.innerHTML=h; box.classList.add('show');
  updateSecNav();
}
// „Im Dienst": wer ist heute da (aus Behandlern/Abrechnungen des Tages + aktueller Nutzer), Admin ausgenommen.
// Wird unten in die linke Spalte eingehängt (kein rechtes Panel mehr).
let SHIFT_TODAY={};   // wer war heute eingeloggt (aus audit_logs 'shift_login')
async function loadShiftToday(){
  if(typeof dbListAuditToday!=='function') return;
  try{
    const { data, error } = await dbListAuditToday();
    if(error || !data) return;
    const m={};
    data.forEach(r=>{ if(r.action!=='shift_login') return; const role=r.user_role; if(!role||role==='admin') return; const d=r.details||{}; const name=d.name||''; if(!name) return; m[(role+'|'+name).toLowerCase()]={name:name,role:role,gender:d.gender||''}; });
    SHIFT_TODAY=m;
    if(typeof renderTreatPanel==='function') renderTreatPanel();
  }catch(_){}
}
function gatherShiftPeople(){
  const people={};
  const add=(name,role,gender)=>{ if(!name||!role||role==='admin') return; const k=(role+'|'+name).toLowerCase(); if(!people[k]) people[k]={name:name,role:role,gender:gender||''}; };
  Object.values(SHIFT_TODAY).forEach(p=>add(p.name,p.role,p.gender));           // heute eingeloggte Profile
  patients.filter(p=>patientDay(p)===listDay && !p.deleted).forEach(p=>{         // + aus heutigen Behandlungen/Abrechnungen
    (p.handlers||[]).forEach(h=>add(h.name,h.role,h.gender));
    if(p.billedBy && p.billedBy.name) add(p.billedBy.name, p.billedBy.role||'kasse', '');   // wer abgerechnet hat (mit tatsächlicher Rolle; Admin wird in add() ausgeschlossen)
  });
  if(CURRENT_PROFILE && CURRENT_PROFILE.role && CURRENT_PROFILE.role!=='admin') add(CURRENT_PROFILE.full_name,CURRENT_PROFILE.role,CURRENT_PROFILE.gender);
  return people;
}
// „Im Dienst" als horizontale Zeile unter dem Fluss-Board
function shiftRowHtml(){
  const people=gatherShiftPeople(); const lang=(LANG==='de'?'de':'en');
  let h='<span class="shift-row-title">'+L2(I18N.shiftTitle)+'</span>';
  ['arzt','mfa','kasse'].forEach(r=>{
    const list=Object.values(people).filter(pp=>pp.role===r);
    h+='<span class="shift-row-group"><span class="shift-row-role">'+_esc(roleLabel(r,lang))+'</span>';
    h+= list.length ? list.map(pp=>'<span class="shift-row-person">'+initialsCircle(pp.name,pp.role,pp.gender)+'<span class="shift-row-nm">'+_esc(pp.name)+'</span></span>').join('') : '<span class="shift-row-empty">—</span>';
    h+='</span>';
  });
  return h;
}
function shiftPanelHtml(){
  const people=gatherShiftPeople(); const lang=(LANG==='de'?'de':'en');
  let h='<div class="tp-head"><span class="tp-title">'+L2(I18N.shiftTitle)+'</span></div>';
  ['arzt','mfa','kasse'].forEach(r=>{
    const list=Object.values(people).filter(pp=>pp.role===r);
    h+='<div class="shift-group"><div class="shift-role">'+_esc(roleLabel(r,lang))+'</div>';
    h+= list.length ? list.map(pp=>'<div class="shift-person">'+initialsCircle(pp.name,pp.role,pp.gender)+'<span class="shift-nm">'+_esc(pp.name)+'</span></div>').join('') : '<div class="shift-empty">—</div>';
    h+='</div>';
  });
  return h;
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
      const ungroupBtn=(st!=='done')?'<button class="amb-ungroup" title="'+LX('Gruppe auflösen','Dissolve group')+'" aria-label="'+LX('Gruppe auflösen','Dissolve group')+'" onclick="event.stopPropagation();dissolveGroup(\''+gesc+'\')"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 17H7A5 5 0 0 1 7 7h2M15 7h2a5 5 0 0 1 4 7.9M8 12h4M3 3l18 18"/></svg></button>':'';
      h+='<div class="amb-group" draggable="true" ondragstart="gDragStart(event,\''+gesc+'\')"><div class="amb-group-h"><span class="amb-group-nm">'+(LX('Gruppe: ','Group: '))+_esc(grp.g)+'</span><span class="amb-group-act">'+ungroupBtn+gIcon+'</span></div>'+grp.items.map(p=>renderPatientCard(p,true)).join('')+'</div>';
    }
    else h+=grp.items.map(p=>renderPatientCard(p,false)).join('');
  });
  return h;
}
function renderPatientCard(p,inGroup){
    const dest=(p.destinations||[]).map(c=>CBY[c]?cName(CBY[c]):c).join(', ')||'—';
    const durLbl={'<1w':'< 1 '+(LX('Woche','week')),'1-2w':'1–2 '+(LX('Wochen','weeks')),'<2w':'< 2 '+(LX('Wochen','weeks')),'2-4w':'2–4 '+(LX('Wochen','weeks')),'0-7':'0–7 d','7-14':'7–14 d','14-21':'14–21 d','21-28':'21–28 d','1-3m':'1–3 '+(LX('Mon','mo')),'3-6m':'3–6 '+(LX('Mon','mo')),'>6m':'>6 '+(LX('Mon','mo'))}[p.duration]||p.duration||'—';
    const vax=p.vax||{};
    // Impfstatus (Sektion 3)
    let statusHTML = '<div style="font-size:12px;font-weight:700;margin-top:12px;margin-bottom:6px;">' + (LX('Impfstatus','Vaccination Status')) + '</div><div style="display:flex;flex-wrap:wrap;gap:6px;">';
    let hasStatus = false;
    VACCINES.forEach(sv => {
       const svSt = vax[sv.k];
       if (!svSt) return;
       if (sv.tdap_polio && svSt.comps) {
         hasStatus = true;
         ['T','D','aP','IPV'].forEach(c => {
             statusHTML += `<span class="comp ${svSt.comps[c]||'grey'}">${c}</span>`;
         });
      } else if (['green','red','yellow','blue','violet'].includes(svSt.status)) {
         hasStatus = true;
         let name = vName(sv);
         if(sv.hep && (svSt.plannedA || (svSt.done && svSt.done.includes('A')))) name = 'Hepatitis A';
         statusHTML += `<span class="badge ${svSt.status}">${name}</span>`;
      }
    });
    statusHTML += '</div>';
    if (!hasStatus) statusHTML = '<div style="margin-top:10px;" class="mini-note">'+(LX('Kein Impfstatus erfasst.','No vaccination status recorded.'))+'</div>';

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
        if (svSt.planned) savedPlanned.push(vName(sv));
        if (svSt.planned_ipv) savedPlanned.push('Polio (IPV)');
      } else if (svSt.planned) {
        savedPlanned.push(vName(sv));
      }
    });

    if (p.customSchedule && p.customSchedule.length > 0) {
      schedHTML = '<div style="font-size:12px;font-weight:700;margin-top:12px;margin-bottom:6px;">'+(LX('Geplante Impfungen','Planned vaccinations'))+'</div><div style="display:flex;flex-direction:column;gap:8px;">';
      p.customSchedule.forEach((b, idx) => {
         let title = (LANG === 'de' ? 'Termin ' : 'Appt ') + (idx + 1);
         if (b.isExternal) title += (LANG === 'de' ? ' (Extern)' : ' (External)');
         let offset = b.offset;
         let subtitle = '';
         if (offset === 0) subtitle = LANG === 'de' ? 'Heute' : 'Today';
         else if (b._isIndependent) subtitle = LANG === 'de' ? 'Unabhängig' : 'Independent';
         else if (offset % 7 === 0) subtitle = `~${offset/7} ${LX('Wochen','weeks')}`;
         else subtitle = `~${Math.round(offset/7)} ${LX('Wochen','weeks')}`;
         
         let itemsHtml = b.items.length ? b.items.map(it => {
            let n = it.displayName || it.name;
            return `<div style="background:#fff;border:1px solid var(--line);border-radius:4px;padding:4px 8px;margin-bottom:4px;display:flex;justify-content:space-between;align-items:center;">
               <div style="font-size:11.5px;"><b>${n}</b> ${it.live ? '<span class="live-dot" title="Lebendimpfstoff">L</span>' : ''}</div>
            </div>`;
         }).join('') : '<div style="color:var(--grey);font-size:11px;font-style:italic;padding:4px;">'+(LX('Keine Impfungen','No vaccinations'))+'</div>';

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
      schedHTML = '<div style="font-size:12px;font-weight:700;margin-top:12px;margin-bottom:6px;">'+(LX('Geplante Impfungen','Planned vaccinations'))+'</div><div style="display:flex;flex-direction:column;gap:4px;">';
      savedPlanned.forEach(sp => {
          schedHTML += `<div style="background:#fff;border:1px solid var(--line);border-radius:4px;padding:4px 8px;font-size:11.5px;"><b>${sp}</b></div>`;
      });
      schedHTML += '</div>';
    }
    
    const schedBlock=schedHTML?('<div style="margin-top:10px;">'+schedHTML+'</div>'):('<div style="margin-top:10px;" class="mini-note">'+(LX('Keine Impfungen geplant.','No vaccinations planned.'))+'</div>');
    const cmt=p.comment?'<div class="pb-comment"><span class="pb-lbl">'+(LX('Kommentar','Comment'))+'</span><span class="pb-val">'+_esc(p.comment)+'</span></div>':'';
    const upd=(p.updatedAt&&p.updatedAt!==p.savedAt)?' · '+(LX('geändert','edited'))+' '+fmtDateTime(p.updatedAt):'';
    const stampTxt=t('savedStamp')+': '+fmtDateTime(p.savedAt)+upd+' · '+t('physicianLbl')+': '+_esc(p.physician||'—');
    const dobStr=p.dob?fmtDate(new Date(p.dob)):'—';const ageParen=(p.age!==null&&p.age!==undefined)?' ('+p.age+' '+(LX('J.','yrs'))+')':'';
    const dispName=_esc(p.firstname?p.name+', '+p.firstname:p.name);
    const grpBadge=(p.group&&!inGroup)?' <span class="grp-badge">'+_esc(p.group)+'</span>':'';
    const s=patientStatus(p); const mine=p.claimedBy&&p.claimedBy===myUserKey();
    let timeMeta='';
    if(s==='waiting') timeMeta=' · '+(LX('wartet ','waiting '))+elapsedStr(p.savedAt);
    else if(s==='treatment') timeMeta=(mine?' · '+(LX('von mir','by me')):'')+(p.treatmentAt?' · '+elapsedStr(p.treatmentAt):'');
    // Behandler-Icon in der Liste (damit anderes Personal sieht, wer behandelt) – bei Gruppen nur im Gruppenkopf
    let ini = '';
    if (!inGroup) {
      if (p.handlers && p.handlers.length > 0) {
        ini = '<div class="handlers-circles">' + p.handlers.map(h => initialsCircle(h.name, h.role, h.gender)).join('') + '</div>';
      } else if ((s==='treatment'||s==='kasse'||s==='done')&&p.claimedByName) {
        ini = initialsCircle(p.claimedByName, p.claimedByRole, p.claimedByGender);
      }
    }
    // „Behandeln"-Button bei wartenden Einzelpatienten → in eigene Behandlung übernehmen
    const behandeln=(!inGroup&&s==='waiting'&&canTreatType(patientTreatType(p)))?'<button class="btn sm amb-behandeln" onclick="event.stopPropagation();takeIntoTreatment(\''+p.id+'\')">'+(LX('Behandeln','Treat'))+'</button>':'';
    const tt=patientTreatType(p);
    const typeBadge='<span class="type-badge '+tt+'" title="'+(tt==='folgeimpfung'?'Folgeimpfung':'Beratung')+'">'+(tt==='folgeimpfung'?'F':'B')+'</span>';
    const actionsBtns=(p.group?'<button class="btn sec sm" onclick="event.stopPropagation();ungroup(\''+p.id+'\')">'+(LX('Entgruppieren','Ungroup'))+'</button>':'')+'<button class="btn danger sm" onclick="event.stopPropagation();deletePatient(\''+p.id+'\')">'+(LX('Löschen','Delete'))+'</button>';
    const fld=(lbl,val)=>'<div class="pb-field"><span class="pb-lbl">'+lbl+'</span><span class="pb-val">'+val+'</span></div>';
    const body='<div class="patient-body">'
      +'<div class="pb-grid">'
        +fld(LX('Reisedauer','Duration'), durLbl)
        +fld(LX('Reiseziel(e)','Destination(s)'), dest)
        +fld(LX('Allergien','Allergies'), _esc(p.allergy||'—'))
        +fld(LX('Schwangerschaft','Pregnancy'), p.pregnant==='pregnant'?(LX('Ja','Yes')):(p.pregnant==='breastfeeding'?(LX('Stillend','Breastfeeding')):(p.pregnant==='planned'?(LX('Geplant','Planned')):(LX('Nein','No')))))
        +fld(LX('Chron. Erkrankung','Chronic Illness'), _esc(p.chronicText||'—'))
        +fld(LX('Medikamente','Medication'), _esc(p.meds&&p.meds.length?p.meds.join(', '):'—'))
      +'</div>'
      +'<div class="pb-footer"><div class="pb-stamp">'+stampTxt+'</div><div class="pb-actions">'+actionsBtns+'</div></div>'
      +'</div>';
    const timeTxt = timeMeta ? timeMeta.replace(/^\s*·\s*/,'') : '';
    const ageTxt = (ageParen||'').replace(/[()]/g,'').trim();   // nur Alter, kein volles Geburtsdatum
    const clockSvg='<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7.5v5l3 2"/></svg>';
    const priceTxt = (p.billing && typeof p.billing.total==='number' && (s==='kasse'||s==='done')) ? (eur(p.billing.total)+(p.billing.hasUnpriced?' +':'')) : '';
    const rightIcons = (s==='done'?payBadge(p):'') + (((s==='treatment'||s==='kasse'||s==='done')&&ini)?ini:'');
    return '<div class="patient-item pi-'+tt+(mine&&s==='treatment'?' mine':'')+'" id="pi-'+p.id+'" data-pid="'+p.id+'" draggable="true" ondragstart="pDragStart(event,\''+p.id+'\')" ondragend="pDragEnd(event)" ondragover="pCardOver(event)" ondragleave="pCardLeave(event)" ondrop="pCardDrop(event)">'
      +'<div class="patient-head" onclick="openPatientCard(\''+p.id+'\')">'
        +'<div class="ph-row1"><span class="pl-name">'+dispName+grpBadge+'</span>'+(ageTxt?'<span class="pl-age">'+ageTxt+'</span>':'')+'<span class="pl-spacer"></span>'+rightIcons+'</div>'
        +'<div class="ph-row2">'+typeBadge+'<span class="ph-meta">'+dest+'</span><span class="ph-spacer"></span>'+(timeTxt?'<span class="ph-time">'+clockSvg+'<span>'+timeTxt+'</span></span>':'')+(priceTxt?'<span class="ph-price">'+priceTxt+'</span>':'')+'</div>'
      +'</div></div>';
}
// Klick auf eine Karte im Fluss-Board öffnet den Patienten passend zur Stufe/Rolle
function openPatientCard(id){
  // Jede Rolle kann einen Patienten öffnen. Wartend → Patientenansicht (nur Abschnitte 1–3, kein Claim).
  // Übernahme in die eigene Behandlung geschieht ausschließlich per Drag&Drop in „In Behandlung".
  const p=patients.find(x=>x.id===id); if(!p) return;
  // Kasse darf Patienten überall öffnen – NUR während der Behandlung (Spalte „In Behandlung") nicht.
  if(roleIsKasse() && patientStatus(p)==='treatment') return;
  loadPatient(id);   // Anspruchsprüfung (bereits in Behandlung durch andere) erfolgt in loadPatient
}

function fmtDate(d){return String(d.getDate()).padStart(2,'0')+'.'+String(d.getMonth()+1).padStart(2,'0')+'.'+d.getFullYear();}
function fmtDateTime(iso){if(!iso)return '';const d=new Date(iso);return fmtDate(d)+', '+String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')+' '+(LX('Uhr',''));}
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
  const ageStr = det ? (det.y<5 ? (det.y<1 ? det.m+' '+(LX('Mon.','mo'))+' '+det.d+' '+(LX('Tage','d')) : det.y+' '+(LX('J.','yr'))+' '+det.m+' '+(LX('Mon.','mo'))) : det.y+' '+(LX('Jahre','yrs'))) : '';
  
  const css = 'body{font-family:Helvetica,Arial,sans-serif;color:#111;margin:32px;} h1{font-size:20px;border-bottom:2px solid #000;padding-bottom:8px;} h2{font-size:14px;margin-top:20px;padding:6px 10px;background:#eef5fc;border:1px solid #bcd6f2;border-radius:4px;color:#000;} .gap{font-weight:400;font-size:12px;opacity:.8;margin-left:6px;} .prov{margin:5px 0 0 10px;font-size:13px;} .prov b{display:inline-block;min-width:150px;} .meta{color:#555;font-size:13px;margin-top:6px;} .box{margin-top:14px;padding:10px 14px;border:1px solid #bcd6f2;background:#eef5fc;border-radius:8px;font-size:12.5px;} .foot{margin-top:26px;font-size:11px;color:#888;}';
  
  let h = '<html><head><meta charset="utf-8"><title>'+t('printTitle')+'</title><style>'+css+'</style></head><body>';
  h += '<h1>Charité · Reisemedizinische Ambulanz · '+t('printTitle')+'</h1><div class="meta"><strong>'+name+'</strong>'+(ageStr?' · '+ageStr:'')+(dob?' ('+(LX('geb.','b.'))+' '+fmtDate(new Date(dob))+')':'')+'<br>'+(LX('Reiseziel(e)','Destination(s)'))+': '+dest+(dep?'<br>'+(LX('Abreise','Departure'))+': '+fmtDate(new Date(dep)):'')+'<br>'+(LX('Erstellt','Created'))+': '+fmtDateTime(base.toISOString())+'</div>';

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
      
      let provNameStr = b.isExternal ? (LX('Hausarzt/Extern','External provider')) : 'Charité';
      if (b.items && b.items.length) {
          let names = b.items.map(it => it.name).join(', ');
          h += '<div class="prov"><b>' + provNameStr + ':</b> ' + names + '</div>';
      } else {
          h += '<div class="prov"><b>' + provNameStr + ':</b> <i>' + (LX('Keine Impfungen zugeordnet','No vaccinations assigned')) + '</i></div>';
      }
    });

    const lives = planned.filter(p => p.live);
    if (lives.length >= 2) {
      h += '<div class="box" style="border-color:#f5c2c2;background:#fdecec"><strong>'+(LANG==='de'?'Bei Lebendimpfstoffen (z.B. '+lives.map(l=>l.name).join(', ')+') gilt: Entweder am selben Tag impfen oder mind. 4 Wochen Abstand einhalten.':(LANG==='fr'?'Pour les vaccins vivants (p. ex. '+lives.map(l=>l.name).join(', ')+') : soit le même jour, soit un intervalle d\'au moins 4 semaines.':'Live vaccines must be given on the same day or ≥4 weeks apart.'))+'</strong></div>';
    }

    h += '<div class="box"><strong>'+(LANG==='de'?'Benötigte Zeit vor Ort (ohne späteren Termin): ca. '+nearDays+' Tage.':(LANG==='fr'?'Temps nécessaire sur place (hors rendez-vous ultérieur) : env. '+nearDays+' jours.':'Time needed on site (excl. later appt): ~'+nearDays+' days.'))+'</strong>'+(daysDep!==null?' '+(LANG==='de'?'Tage bis Abreise: '+daysDep+'.':(LANG==='fr'?'Jours avant le départ : '+daysDep+'.':'Days to departure: '+daysDep+'.'))+(daysDep<nearDays?' <span style="color:#b00">'+(LX('Zeit reicht evtl. nicht – Schnellschema/Priorisierung prüfen.','May be insufficient — consider rapid schedule.'))+'</span>':''):'')+'</div>';
  }

  if (childhoodOn && childhoodOn()) h += '<div class="box"><strong>'+t('provPaed')+':</strong> '+t('printChildhood')+'</div>';
  if (comment) h += '<div class="box"><strong>'+(LX('Kommentar','Comment'))+':</strong> '+comment+'</div>';
  h += '<div class="box">'+t('printCharite')+'<br><strong>'+t('printDoctolib')+'</strong></div>';
  h+='<div class="foot">'+(LX('Angegeben sind Mindestabstände, keine festen Termine. Bitte Folgetermine selbst über Doctolib buchen.','Minimum intervals shown, not fixed dates. Please book follow-ups via Doctolib.'))+'</div></body></html>';
  const w=window.open('','_blank');if(!w){uiAlert(LX('Bitte Pop-ups erlauben, um den Impfplan zu drucken.','Please allow pop-ups to print.'));return;}
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
  resetMalariaState(); if(typeof renderMalaria==='function') renderMalaria();
  if(typeof kioskUpdateView === 'function'){ kioskStep=1; kioskUpdateView(); }
  // Leistungen zurücksetzen; MFA startet mit „Keine Beratung"
  const bDefault=((CURRENT_PROFILE||{}).role==='mfa')?'none':'1';
  const bRad=document.querySelector('input[name="leistung_beratung"][value="'+bDefault+'"]'); if(bRad) bRad.checked=true;
  ['leistung_folge','leistung_bescheinigung'].forEach(id=>_sc(id,false));
  _loadedPayment=''; _loadedPaid=''; clearFolds();
  const kb=el('kasse-billing'); if(kb) kb.innerHTML='';
  renderDestChips();recompute();
}

/* ---------- LANGUAGE ---------- */
function setLang(l){
  LANG=l;document.documentElement.lang=l;
  ['de','en','fr'].forEach(x=>{const b=el('lang-'+x);if(b)b.classList.toggle('active',l===x);});
  document.querySelectorAll('[data-i18n]').forEach(e=>{const k=e.getAttribute('data-i18n');if(I18N[k])e.textContent=(I18N[k][l]||I18N[k].en||I18N[k].de);});
  document.querySelectorAll('[data-i18n-ph]').forEach(e=>{const k=e.getAttribute('data-i18n-ph');if(I18N[k])e.placeholder=(I18N[k][l]||I18N[k].en||I18N[k].de);});
  const dTag=(l==='de'?'Tage':l==='fr'?'jours':'days'), mTag=(l==='de'?'Monate':l==='fr'?'mois':'months');
  const durLabels={'0-7':'0–7 '+dTag,'7-14':'7–14 '+dTag,'14-21':'14–21 '+dTag,'21-28':'21–28 '+dTag,'1-3m':'1–3 '+mTag,'3-6m':'3–6 '+mTag,'>6m':'>6 '+mTag};
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
  document.body.classList.toggle('role-kasse', role==='kasse');
  const npb=el('new-patient-btn'); if(npb) npb.style.display=(role==='kasse')?'none':'inline-block';   // Kasse nimmt keine Patienten auf
  const tm=el('treatmode-sec'); if(tm) tm.style.display=(role==='arzt')?'':'none';   // Standard-Behandlungsart nur für Arzt/Ärztin
  loadSecCollapse();   // gemerkten Auf-/Zuklapp-Zustand wiederherstellen (bleibt auch bei manuellem Refresh)
  moveListToTop();
  if(USE_DB){ loadPatientsFromDB(); startAmbRefresh(); } else renderPatients();
  renderTreatPanel();
  // „Im Dienst": eigenen Login des Tages festhalten (außer Admin – unsichtbar) und die Tagesliste laden
  if(USE_DB && role!=='admin' && typeof dbAuditLog==='function'){ try{ dbAuditLog('shift_login', {name:CURRENT_PROFILE.full_name, gender:CURRENT_PROFILE.gender||'', role:role}); }catch(_){} }
  if(USE_DB) loadShiftToday();
}
function moveListToTop(){
  const main=document.querySelector('main'); const lc=el('list-card'), s1=el('step1'), eb=el('editing-banner');
  if(main&&lc&&s1){ try{ main.insertBefore(lc, s1); if(eb) main.insertBefore(eb, s1); }catch(e){} }
}
function enterPatient(){
  document.body.classList.remove('clinic-idle');
  try{ el('step1').scrollIntoView({behavior:'smooth',block:'start'}); }catch(e){}
  renderTreatPanel();
  // Malaria-Sektion ist an den Behandlungsmodus (nicht clinic-idle) gekoppelt und muss nach dem
  // Betreten des Patienten neu gerendert werden – sonst bleibt der Inhalt leer, obwohl Risiko besteht.
  if(typeof renderMalaria==='function') renderMalaria();
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

/* ---------- Bearbeitungssperre + Änderungsprotokoll ---------- */
const LOCK_SECTIONS=['step1','step2','step3','step4','step5','step6'];
// Welche Abschnitte für die aktuelle Rolle gesperrt (grau, Stift) werden:
// Medizin-Personal → 1–3; Kasse → 1–6 (Arzt/MFA haben 4–6 bereits abgeschlossen)
function lockedSectionsForRole(){ return roleIsKasse() ? ['step1','step2','step3','step4','step5','step6'] : ['step1','step2','step3']; }
const SECTION_TITLES={step1:{de:'Stammdaten',en:'Master data',fr:'Données personnelles'},step2:{de:'Reise',en:'Travel',fr:'Voyage'},step3:{de:'Immunstatus',en:'Immune status',fr:'Statut immunitaire'},step4:{de:'Impfstatus',en:'Vaccination status',fr:'Statut vaccinal'},step5:{de:'Geplante Impfungen',en:'Planned vaccinations',fr:'Vaccins planifiés'},step6:{de:'Leistungen',en:'Services',fr:'Prestations'}};
let SECTION_LOCKED={}, SECTION_EDIT={}, LOCK_LISTENERS=false;
function isStaff(){ return (typeof roleSeesClinic==='function') && roleSeesClinic((CURRENT_PROFILE||{}).role); }
// Wartende Patienten (Patientenansicht): nur Abschnitte 1–3. Ab „In Behandlung" existieren 4–6.
function applySectionVisibility(p){
  if(!isStaff()) return;   // Kiosk-/Patientenansicht nicht anfassen (eigene Layout-Logik)
  const waiting = p && patientStatus(p)==='waiting';
  ['step4','step5','stepM','step6'].forEach(id=>{ const s=el(id); if(s) s.style.display = waiting ? 'none' : ''; });
}
// Patient an der Kasse? (steuert, ob der Abrechnungsblock/Zahlung erscheint – auch für vertretendes Personal)
function isBillingStage(){ const p=patients.find(x=>x.id===editingId); return !!p && patientStatus(p)==='kasse'; }
function canBill(){ return isStaff() && document.body.classList.contains('clinic') && isBillingStage(); }
function lockAllSections(){ lockedSectionsForRole().forEach(id=>{SECTION_LOCKED[id]=true;SECTION_EDIT[id]=false;}); applyLocks(); }
function unlockAllSections(){ LOCK_SECTIONS.forEach(id=>{SECTION_LOCKED[id]=false;SECTION_EDIT[id]=false;}); applyLocks(); }
async function toggleLock(id){
  const wasEditing = SECTION_LOCKED[id]===false;   // Abschnitt war offen (in Bearbeitung)
  SECTION_LOCKED[id]=!(SECTION_LOCKED[id]!==false);
  applyLocks();
  // Beim Zuklappen (Bearbeitung abgeschlossen) speichern → Änderungen + Protokoll erscheinen sofort
  if(wasEditing && SECTION_LOCKED[id]===true && editingId && isStaff()){
    try{ await savePatient(false); }catch(_){}
  }
}
function applyLocks(){
  const staff=isStaff();
  const lockSet=lockedSectionsForRole();
  LOCK_SECTIONS.forEach(id=>{
    const sec=el(id); if(!sec)return;
    const inSet=lockSet.includes(id);
    const locked = staff && inSet && SECTION_LOCKED[id]!==false;   // Patienten (Kiosk): nie gesperrt
    sec.classList.toggle('locked', locked);
    const btn=el('lock-'+id);
    if(btn){
      btn.style.display = inSet ? '' : 'none';   // Stift nur an den für die Rolle sperrbaren Abschnitten
      btn.classList.toggle('active', !locked);
      btn.title=locked?(LX('Bearbeiten','Edit')):(LX('Bearbeitung aktiv','Editing'));
    }
  });
  if(!LOCK_LISTENERS){
    LOCK_SECTIONS.forEach(id=>{ const sec=el(id); if(sec) sec.addEventListener('input',()=>{ if(SECTION_LOCKED[id]===false) SECTION_EDIT[id]=true; }); });
    LOCK_LISTENERS=true;
  }
}
/* ---------- Ein-/Ausklappen von Abschnitten (v.a. Kasse-Ansicht) ---------- */
let FOLD_LISTENERS=false;
function toggleFold(id){ const s=el(id); if(s && s.classList.contains('foldable')) s.classList.toggle('folded'); }
function wireFoldHeaders(){
  if(FOLD_LISTENERS) return;
  ['step1','step2','step3','step4','step5'].forEach(id=>{   // step6 (Leistungen) bewusst NICHT – nie einklappbar
    const s=el(id); if(!s) return; const h=s.querySelector('h2'); if(!h) return;
    h.addEventListener('click',(e)=>{ if(e.target.closest('.lock-btn')) return; toggleFold(id); });
  });
  FOLD_LISTENERS=true;
}
// Kasse-Ansicht: Abschnitte faltbar machen, 2–5 einklappen, 1 offen.
// Leistungen (step6) wird NIE eingeklappt/faltbar – der Abrechnungsblock bleibt immer offen.
function setupKasseFolds(){
  wireFoldHeaders();
  ['step1','step2','step3','step4','step5'].forEach(id=>{ const s=el(id); if(s) s.classList.add('foldable'); });
  ['step2','step3','step4','step5'].forEach(id=>{ const s=el(id); if(s) s.classList.add('folded'); });
  ['step1'].forEach(id=>{ const s=el(id); if(s) s.classList.remove('folded'); });
  const l=el('step6'); if(l) l.classList.remove('foldable','folded');   // Leistungen immer offen
}
function clearFolds(){ ['step1','step2','step3','step4','step5','step6'].forEach(id=>{ const s=el(id); if(s) s.classList.remove('foldable','folded'); }); }
function editLogHtml(p){
  const log=(p.editLog||[]).slice().reverse();
  const del=p.deleted;
  if(!log.length && !del) return '';
  let h='<div class="pb-log"><div class="pb-lbl">'+(LX('Änderungsprotokoll','Change log'))+'</div>';
  if(del) h+='<div class="pb-log-row del"><b>'+(LX('Gelöscht','Deleted'))+'</b> · '+_esc(del.who||'—')+' · '+fmtDateTime(del.ts)+'</div>';
  log.slice(0,12).forEach(e=>{ const sn=SECTION_TITLES[e.section]?(L2(SECTION_TITLES[e.section])):e.section; const flds=(e.fields&&e.fields.length)?' · '+e.fields.join(', '):''; h+='<div class="pb-log-row">'+fmtDateTime(e.ts)+' · '+_esc(e.who||'—')+' · '+_esc(sn)+_esc(flds)+'</div>'; });
  return h+'</div>';
}
function startNewPatient(){ resetForm(); unlockAllSections(); const et=el('editing-text'); if(et) et.textContent=(LX('Neuer Patient','New patient')); enterPatient(); setTimeout(function(){ const f=el('p-firstname')||el('p-name'); if(f){ try{ f.focus(); }catch(_){} } },140); }
async function cancelEditConfirm(){
  if(!(await uiConfirm(LX('Bearbeitung wirklich abbrechen? Nicht gespeicherte Änderungen gehen verloren.','Really cancel editing? Unsaved changes will be lost.'),{title:LX('Bearbeitung abbrechen','Cancel editing'),ok:LX('Verwerfen','Discard'),danger:true}))) return;
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
  cancelBtn.textContent=opts.cancel||(LX('Abbrechen','Cancel'));
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
function uiConfirm(msg,o){ o=o||{}; return new Promise(r=>openDialog({title:o.title||(LX('Bestätigen','Confirm')),msg,ok:o.ok||(LX('Bestätigen','Confirm')),cancel:o.cancel,danger:o.danger},v=>r(v!==null))); }
function uiPrompt(msg,o){ o=o||{}; return new Promise(r=>openDialog({title:o.title||'',msg,def:o.def||'',input:true,ok:o.ok||'OK',cancel:o.cancel},v=>r(v))); }
function uiAlert(msg,o){ o=o||{}; return new Promise(r=>openDialog({title:o.title||(LX('Hinweis','Notice')),msg,cancel:null,ok:o.ok||'OK'},()=>r())); }

/* ---------- Sektions-Navigation (im linken Behandlungsfeld) ---------- */
const SEC_NAV_ITEMS=[
  {id:'step1',label:'1',de:'Stammdaten',en:'Master data',fr:'Données de base'},
  {id:'step2',label:'2',de:'Reise',en:'Travel',fr:'Voyage'},
  {id:'step3',label:'3',de:'Immunstatus',en:'Immune status',fr:'Statut immunitaire'},
  {id:'step4',label:'4',de:'Impfstatus',en:'Vaccination status',fr:'Statut vaccinal'},
  {id:'step5',label:'5',de:'Geplante Impfungen',en:'Planned',fr:'Vaccins planifiés'},
  {id:'stepM',label:'6',de:'Malaria',en:'Malaria',fr:'Paludisme'},
  {id:'step6',label:'7',de:'Leistungen',en:'Services',fr:'Prestations'}
];
function secNavHtml(){
  const vis=SEC_NAV_ITEMS.filter(it=>{const e=el(it.id); return e && e.offsetParent!==null;});
  return vis.map(it=>'<button type="button" data-target="'+it.id+'" onclick="secNavJump(\''+it.id+'\')"><span class="sn-dot">'+it.label+'</span><span class="sn-lbl">'+L2(it)+'</span></button>').join('');
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
    await uiAlert(LX('Vielen Dank! Ihre Angaben wurden übermittelt.','Thank you! Your data has been submitted.'),{title:LX('Übermittelt','Submitted')});
    showIntakeChoice();   // für den nächsten Patienten wieder die Auswahl zeigen
  }
}

/* ================= ADMIN-PANEL ================= */
function _fillSelect(id, items, valfn, labfn, sel){
  const e=el(id); if(!e) return;
  e.innerHTML = items.map(it=>'<option value="'+valfn(it)+'"'+(sel===valfn(it)?' selected':'')+'>'+labfn(it)+'</option>').join('');
}
/* ================= STATISTIK (Kasse & Admin) ================= */
function statDurLabel(d){ return ({'<1w':'< 1 Wo','1-2w':'1–2 Wo','<2w':'< 2 Wo','2-4w':'2–4 Wo','0-7':'0–7 d','7-14':'7–14 d','14-21':'14–21 d','21-28':'21–28 d','1-3m':'1–3 Mon','3-6m':'3–6 Mon','>6m':'>6 Mon'})[d]||d||'—'; }
function statDayOf(p){ if(p.billing&&p.billing.at){ try{ return ymd(new Date(p.billing.at)); }catch(e){} } return patientDay(p); }
function statDateOf(p){ if(p.billing&&p.billing.at){ try{ return new Date(p.billing.at); }catch(e){} } const s=p.savedAt||p.updatedAt; return s?new Date(s):new Date(); }
function statDonePatients(){ return patients.filter(p=>!p.deleted && patientStatus(p)==='done'); }
function statVaxList(p){ const out=[]; const vax=p.vax||{}; VACCINES.forEach(sv=>{ const st=vax[sv.k]; if(!st)return; if(sv.hep){ if(st.plannedA)out.push('Hepatitis A'); if(st.plannedB)out.push('Hepatitis B'); if(st.plannedAB)out.push('Twinrix'); } else if(sv.tdap_polio){ if(st.planned)out.push(vName(sv)); if(st.planned_ipv)out.push('Polio (IPV)'); } else if(st.planned){ out.push(vName(sv)); } }); return out; }
function statLeistList(p){ const L=p.leistungen||{}; const out=[]; if(L.beratung && L.beratung!=='none' && BERAT_LABEL[L.beratung]) out.push(L2(BERAT_LABEL[L.beratung])); if(L.folge) out.push(L2(I18N.leistFolge)); if(L.bescheinigung) out.push(L2(I18N.leistBescheinigung)); if(statVaxList(p).length) out.push(L2(I18N.leistImpf)); return out; }
function statAdd(acc,arr){ arr.forEach(x=>{ acc[x]=(acc[x]||0)+1; }); }
function computeStats(){
  const today=ymd(new Date());
  const done=statDonePatients();
  const doneToday=done.filter(p=>statDayOf(p)===today);
  const revToday=doneToday.reduce((s,p)=>s+((p.billing&&+p.billing.total)||0),0);
  const vaxCounts={}, leistCounts={};
  doneToday.forEach(p=>{ statAdd(vaxCounts,statVaxList(p)); statAdd(leistCounts,statLeistList(p)); });
  return {today, done, doneToday, revToday, vaxCounts, leistCounts};
}
function stKpi(label,val){ return '<div class="st-kpi"><div class="st-kpi-v">'+val+'</div><div class="st-kpi-l">'+label+'</div></div>'; }
function stCountBox(title,counts){ const ents=Object.entries(counts).sort((a,b)=>b[1]-a[1]); let h='<div class="st-box"><div class="st-box-h">'+title+'</div>'; h+= ents.length ? ('<div class="st-rows">'+ents.map(e=>'<div class="st-row"><span>'+_esc(e[0])+'</span><span class="st-num">'+e[1]+'</span></div>').join('')+'</div>') : '<div class="st-empty">—</div>'; return h+'</div>'; }
function stNiceCeil(v){ if(v<=0)return 100; const p=Math.pow(10,Math.floor(Math.log10(v))); const n=v/p; let m; if(n<=1)m=1;else if(n<=2)m=2;else if(n<=5)m=5;else m=10; return m*p; }
let stRevOffset=0;   // 0 = aktueller Monat, -1 = Vormonat, …
function stRevStep(d){ stRevOffset=Math.min(0, stRevOffset+d); renderStats(); }
function stRevenueChart(){
  const done=statDonePatients(); const byDay={};
  done.forEach(p=>{ const d=statDayOf(p); byDay[d]=(byDay[d]||0)+((p.billing&&+p.billing.total)||0); });
  const now=new Date(); let tm=now.getMonth()+stRevOffset, tyr=now.getFullYear();
  while(tm<0){ tm+=12; tyr--; }
  const mNames=(LANG==='de')?['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember']
    :['January','February','March','April','May','June','July','August','September','October','November','December'];
  const label=mNames[tm]+' '+tyr;
  const daysInMonth=new Date(tyr,tm+1,0).getDate();
  const days=[]; for(let d=1;d<=daysInMonth;d++){ days.push(new Date(tyr,tm,d)); }
  const vals=days.map(dt=>byDay[ymd(dt)]||0);
  const monthTotal=vals.reduce((a,b)=>a+b,0);
  const niceMax=stNiceCeil(Math.max(1,...vals));
  const bars=days.map((dt,i)=>{ const v=vals[i]; const sun=dt.getDay()===0; const hpct=v>0?Math.max(2,Math.round(v/niceMax*100)):0;
    return '<div class="st-bar'+(sun?' st-bar-sun':'')+'" title="'+ymd(dt)+': '+eur(v)+'"><div class="st-bar-fill" style="height:'+hpct+'%"></div><div class="st-bar-x">'+dt.getDate()+'</div></div>'; }).join('');
  const ticks=[1,0.75,0.5,0.25,0].map(f=>'<div class="st-yt">'+eur(Math.round(niceMax*f))+'</div>').join('');
  const nav='<span class="st-navrow"><button class="st-nav" onclick="stRevStep(-1)" title="'+LX('Voriger Monat','Previous month')+'" aria-label="'+LX('Voriger Monat','Previous month')+'">‹</button><span class="st-navlbl">'+label+'</span><button class="st-nav" onclick="stRevStep(1)"'+(stRevOffset<0?'':' disabled')+' title="'+LX('Nächster Monat','Next month')+'" aria-label="'+LX('Nächster Monat','Next month')+'">›</button></span>';
  const sub=LX('Tagesumsatz (Mo–Sa) im angezeigten Monat. Mit den Pfeilen zu früheren Monaten wechseln. Monatssumme: ','Daily revenue (Mon–Sat) for the shown month. Use the arrows to switch to earlier months. Month total: ')+'<strong>'+eur(monthTotal)+'</strong>';
  return '<div class="st-box st-wide"><div class="st-box-h st-box-h-nav"><span>'+LX('Umsatz pro Tag','Daily revenue')+'</span>'+nav+'</div>'+
    '<div class="st-sub2">'+sub+'</div>'+
    '<div class="st-chart-wrap"><div class="st-yaxis">'+ticks+'</div><div class="st-chart st-chart-grid">'+bars+'</div></div></div>';
}
function stTopCountries(){
  const done=statDonePatients(); const c={};
  done.forEach(p=>(p.destinations||[]).forEach(code=>{ const nm=CBY[code]?cName(CBY[code]):code; c[nm]=(c[nm]||0)+1; }));
  const top=Object.entries(c).sort((a,b)=>b[1]-a[1]).slice(0,5); const max=Math.max(1,...top.map(t=>t[1]));
  const rows=top.length?top.map(t=>'<div class="st-hrow"><span class="st-hlbl">'+_esc(t[0])+'</span><span class="st-hbar"><span style="width:'+Math.round(t[1]/max*100)+'%"></span></span><span class="st-num">'+t[1]+'</span></div>').join(''):'<div class="st-empty">—</div>';
  return '<div class="st-box"><div class="st-box-h">'+LX('Top 5 Reiseländer','Top 5 destinations')+'</div>'+rows+'</div>';
}
const ST_PALETTE=['#1565c0','#0e9e8e','#c98a00','#6a1b9a','#d32f2f','#2e7d32','#00838f','#ad1457','#5d4037','#455a64','#f57c00','#3949ab','#00695c','#7b1fa2'];
function stMonthlyTop3(){
  const yr=new Date().getFullYear(); const done=statDonePatients(); const months={};
  done.forEach(p=>{ const dt=statDateOf(p); if(dt.getFullYear()!==yr)return; const m=dt.getMonth(); (p.destinations||[]).forEach(code=>{ const nm=CBY[code]?cName(CBY[code]):code; months[m]=months[m]||{}; months[m][nm]=(months[m][nm]||0)+1; }); });
  const mn=(LANG==='de')?['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez']:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const colorOf={}; let ci=0; let gmax=1; const tops=[];
  for(let m=0;m<12;m++){ const data=months[m]; const top=data?Object.entries(data).sort((a,b)=>b[1]-a[1]).slice(0,3):[]; top.forEach(t=>{ if(!(t[0] in colorOf)){ colorOf[t[0]]=ST_PALETTE[ci%ST_PALETTE.length]; ci++; } gmax=Math.max(gmax,t[1]); }); tops[m]=top; }
  // 12 Monats-Gruppen mit je 3 schlanken, farbigen Balken (ein Farbton pro Land)
  let groups='';
  for(let m=0;m<12;m++){ const top=tops[m]; let bars=''; for(let i=0;i<3;i++){ const t=top[i]; if(t){ const hp=Math.max(6,Math.round(t[1]/gmax*100)); bars+='<div class="st-gbar" style="height:'+hp+'%;background:'+colorOf[t[0]]+'" title="'+_esc(t[0])+': '+t[1]+'"></div>'; } else { bars+='<div class="st-gbar st-gbar-x"></div>'; } } groups+='<div class="st-gcol"><div class="st-gbars">'+bars+'</div><div class="st-bar-x">'+mn[m][0]+'</div></div>'; }
  const legend=Object.keys(colorOf).map(c=>'<span class="st-leg"><span class="st-leg-dot" style="background:'+colorOf[c]+'"></span>'+_esc(c)+'</span>').join('') || '<span class="st-empty">—</span>';
  let rows='';
  for(let m=0;m<12;m++){ const top=tops[m]; if(!top.length)continue; rows+='<tr><td>'+mn[m]+'</td>'+[0,1,2].map(i=>'<td>'+(top[i]?'<span class="st-leg-dot" style="background:'+colorOf[top[i][0]]+'"></span>'+_esc(top[i][0])+' <span class="st-num">('+top[i][1]+')</span>':'—')+'</td>').join('')+'</tr>'; }
  if(!rows) rows='<tr><td colspan="4" class="st-empty">—</td></tr>';
  return '<div class="st-box st-wide"><div class="st-box-h">'+LX('Top-3 Länder pro Monat','Top-3 countries per month')+' ('+yr+')</div>'+
    '<div class="st-groups">'+groups+'</div>'+
    '<div class="st-legend">'+legend+'</div>'+
    '<table class="st-table"><thead><tr><th>'+LX('Monat','Month')+'</th><th>1.</th><th>2.</th><th>3.</th></tr></thead><tbody>'+rows+'</tbody></table></div>';
}
function statResearchRows(){
  const done=statDonePatients(); const map={};
  done.forEach(p=>{ const d=statDayOf(p); const dur=statDurLabel(p.duration); (p.destinations||[]).forEach(code=>{ const nm=CBY[code]?(LANG==='de'?CBY[code].de:CBY[code].en):code; const k=d+'|'+nm+'|'+dur; map[k]=(map[k]||0)+1; }); });
  return map;
}
function stResearchTable(){
  const map=statResearchRows(); const keys=Object.keys(map).sort().reverse().slice(0,40);
  let rows=keys.map(k=>{ const parts=k.split('|'); return '<tr><td>'+parts[0]+'</td><td>'+_esc(parts[1])+'</td><td>'+_esc(parts[2])+'</td><td class="st-num">'+map[k]+'</td></tr>'; }).join('');
  if(!rows) rows='<tr><td colspan="4" class="st-empty">—</td></tr>';
  return '<div class="st-box st-wide"><div class="st-box-h">'+LX('Forschungsarchiv (anonymisiert)','Research archive (anonymised)')+' <span class="st-sub">'+LX('neueste 40','latest 40')+'</span></div><table class="st-table"><thead><tr><th>'+LX('Datum','Date')+'</th><th>'+LX('Land','Country')+'</th><th>'+LX('Dauer','Duration')+'</th><th>'+LX('Anzahl','Count')+'</th></tr></thead><tbody>'+rows+'</tbody></table></div>';
}
function exportResearchCsv(){
  const map=statResearchRows();
  const rows=[[LX('Datum','Date'),LX('Land','Country'),LX('Reisedauer','Duration'),LX('Anzahl','Count')]];
  Object.keys(map).sort().forEach(k=>{ const p=k.split('|'); rows.push([p[0],p[1],p[2],map[k]]); });
  const csv=rows.map(r=>r.map(x=>'"'+String(x).replace(/"/g,'""')+'"').join(',')).join('\r\n');
  const blob=new Blob(['﻿'+csv],{type:'text/csv;charset=utf-8;'});
  const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='reise-statistik_'+ymd(new Date())+'.csv';
  document.body.appendChild(a); a.click(); document.body.removeChild(a); setTimeout(()=>URL.revokeObjectURL(url),1500);
}
// Langfrist-Kennzahlen (rollierende 30 Tage): Patienten, Umsatz, Ø Umsatz/Pat., Ø Impfungen/Pat.
function stLongKpis(done){
  const cut=new Date(Date.now()-30*86400000);
  const rec=done.filter(p=>{ try{ return statDateOf(p)>=cut; }catch(e){ return false; } });
  const rev=rec.reduce((a,p)=>a+((p.billing&&+p.billing.total)||0),0);
  const vaxN=rec.reduce((a,p)=>a+statVaxList(p).length,0);
  return stKpi(LX('Patienten (30 T)','Patients (30 d)'),rec.length)
    +stKpi(LX('Umsatz (30 T)','Revenue (30 d)'),eur(rev))
    +stKpi(LX('Ø Umsatz / Patient','Avg revenue / patient'),eur(rec.length?rev/rec.length:0))
    +stKpi(LX('Ø Impfungen / Patient','Avg vaccinations / patient'),(rec.length?vaxN/rec.length:0).toFixed(1));
}
// wiederverwendbare Balkenliste (wie Top-Reiseländer)
function stHbars(title, entries){
  const max=Math.max(1,...entries.map(e=>e[1]));
  const rows=entries.length?entries.map(e=>'<div class="st-hrow"><span class="st-hlbl">'+_esc(e[0])+'</span><span class="st-hbar"><span style="width:'+Math.round(e[1]/max*100)+'%"></span></span><span class="st-num">'+e[1]+'</span></div>').join(''):'<div class="st-empty">—</div>';
  return '<div class="st-box"><div class="st-box-h">'+title+'</div>'+rows+'</div>';
}
function stTreatmentSplit(done){
  let b=0,f=0; done.forEach(p=>{ if(p.treatmentType==='folgeimpfung') f++; else b++; });
  return stHbars(LX('Behandlungsart (gesamt)','Treatment type (total)'),[[LX('Beratung','Consultation'),b],[LX('Folgeimpfung','Follow-up'),f]]);
}
function stTopVaccines(done){
  const c={}; done.forEach(p=>statVaxList(p).forEach(v=>{ c[v]=(c[v]||0)+1; }));
  const top=Object.entries(c).sort((a,b)=>b[1]-a[1]).slice(0,6);
  return stHbars(LX('Top Impfstoffe (gesamt)','Top vaccines (total)'),top);
}
function renderStats(){
  const box=el('stats-body'); if(!box) return;
  const isAdmin=(CURRENT_PROFILE||{}).role==='admin';
  const s=computeStats();
  const totalVaxToday=Object.values(s.vaxCounts).reduce((a,b)=>a+b,0);
  let h='<div class="st-head"><h2>'+LX('Statistik','Statistics')+'</h2><button class="btn sec sm" onclick="exportResearchCsv()">'+LX('Forschungsdaten (CSV)','Research data (CSV)')+'</button></div>';
  // Block 1: HEUTE
  h+='<div class="st-section-lbl">'+LX('Heute','Today')+'</div>';
  h+='<div class="st-kpis">'+stKpi(LX('Patienten heute','Patients today'),s.doneToday.length)+stKpi(LX('Umsatz heute','Revenue today'),eur(s.revToday))+stKpi(LX('Impfungen heute','Vaccinations today'),totalVaxToday)+'</div>';
  h+='<div class="st-grid">'+stCountBox(LX('Impfungen heute','Vaccinations today'),s.vaxCounts)+stCountBox(LX('Leistungen heute','Services today'),s.leistCounts)+'</div>';
  // Block 2: LANGFRISTIG / GESAMT
  h+='<div class="st-section-lbl st-sep">'+LX('Gesamt & Langfristig','Overall & long-term')+'</div>';
  h+='<div class="st-kpis">'+stLongKpis(s.done)+'</div>';
  h+='<div class="st-grid">';
  h+=stRevenueChart();
  h+=stTopCountries();
  h+=stTreatmentSplit(s.done);
  h+=stTopVaccines(s.done);
  if(isAdmin){ h+=stMonthlyTop3(); }
  h+='</div>';
  box.innerHTML=h;
}
/* ================= MALARIA-ENGINE + DATEN (inline; getrennt von der Impf-Logik) =================
   Inline eingebettet, damit die Sektion nicht von separaten Dateien abhängt (Deploy-Sicherheit).
   Quelle: DTG-Ländertabelle 2025. Fällt zurück, falls externe malaria_*.js bereits geladen sind. */
if (typeof MALARIA_DATA === 'undefined') {
  window.MALARIA_STAND = "DTG-Ländertabelle 2025 (Stand Juni 2025)";
  window.MALARIA_DATA = {
    "AF":{"s":"P","sp":"P. vivax, P. falciparum","se":"Ganzjährig"},"AO":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"BD":{"s":"P","sp":"P. falciparum, P. vivax","se":"Ganzjährig"},"BF":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"BI":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"BJ":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"BN":{"s":"EP","sp":"P. knowlesi","se":"Ganzjährig"},"BO":{"s":"P","sp":"P. vivax, P. falciparum","se":"Ganzjährig"},"BR":{"s":"P","sp":"P. vivax, P. falciparum","se":"Ganzjährig"},"BT":{"s":"EP","sp":"P. vivax, P. falciparum","se":"Ganzjährig"},"BW":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"BZ":{"s":"EP","sp":"","se":"Ganzjährig"},"CD":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"CF":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"CG":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"CI":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"CM":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"CO":{"s":"P","sp":"P. falciparum, P. vivax","se":"Ganzjährig"},"CR":{"s":"NSB","sp":"P. falciparum, P. vivax","se":"Ganzjährig"},"DJ":{"s":"P","sp":"P. falciparum, P. vivax","se":"Ganzjährig"},"DO":{"s":"NSB","sp":"P. falciparum","se":"Ganzjährig"},"EC":{"s":"NSB","sp":"P. vivax, P. falciparum","se":"Ganzjährig"},"EH":{"s":"EP","sp":"","se":"Ganzjährig"},"ER":{"s":"P","sp":"P. falciparum, P. vivax","se":"Ganzjährig"},"ET":{"s":"P","sp":"P. falciparum, P. vivax","se":"Ganzjährig"},"GA":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"GF":{"s":"NSB","sp":"P. vivax, P. falciparum","se":"Ganzjährig"},"GH":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"GM":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"GN":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"GQ":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"GT":{"s":"EP","sp":"P. vivax, P. falciparum","se":"Ganzjährig"},"GW":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"GY":{"s":"P","sp":"P. vivax, P. falciparum","se":"Ganzjährig"},"HN":{"s":"P","sp":"P. vivax, P. falciparum","se":"Ganzjährig"},"HT":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"ID":{"s":"P","sp":"P. falciparum, P. vivax, P. knowlesi","se":"Ganzjährig"},"IN":{"s":"P","sp":"P. falciparum, P. vivax","se":"Ganzjährig"},"IQ":{"s":"EP","sp":"","se":"Mai–November"},"IR":{"s":"NSB","sp":"P. falciparum, P. vivax","se":"Ganzjährig"},"KE":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"KH":{"s":"NSB","sp":"P. falciparum, P. vivax, P. knowlesi","se":"Ganzjährig"},"KM":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"KP":{"s":"EP","sp":"P. vivax","se":"Malariasaison"},"KR":{"s":"EP","sp":"P. vivax","se":"Januar–Februar"},"LA":{"s":"NSB","sp":"P. vivax, P. falciparum, P. knowlesi","se":"Ganzjährig"},"LR":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"MG":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"ML":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"MM":{"s":"NSB","sp":"P. vivax, P. falciparum, P. knowlesi","se":"Ganzjährig"},"MR":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"MW":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"MX":{"s":"EP","sp":"P. vivax","se":"Ganzjährig"},"MY":{"s":"NSB","sp":"P. knowlesi","se":"Ganzjährig"},"MZ":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"NA":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"NE":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"NG":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"NI":{"s":"P","sp":"P. falciparum, P. vivax","se":"Ganzjährig"},"NP":{"s":"EP","sp":"P. vivax, P. falciparum","se":"Ganzjährig"},"PA":{"s":"NSB","sp":"P. vivax, P. falciparum","se":"Ganzjährig"},"PE":{"s":"P","sp":"P. falciparum, P. vivax","se":"Ganzjährig"},"PG":{"s":"P","sp":"P. falciparum, P. vivax","se":"Ganzjährig"},"PH":{"s":"P","sp":"P. falciparum, P. vivax, P. knowlesi","se":"Ganzjährig"},"PK":{"s":"P","sp":"P. vivax, P. falciparum","se":"Ganzjährig"},"RW":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"SB":{"s":"P","sp":"P. vivax, P. falciparum","se":"Ganzjährig"},"SD":{"s":"P","sp":"P. falciparum, P. vivax","se":"Ganzjährig"},"SL":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"SN":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"SO":{"s":"P","sp":"P. falciparum, P. vivax","se":"Ganzjährig"},"SS":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"ST":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"SY":{"s":"EP","sp":"P. vivax","se":"Mai–Oktober"},"SZ":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"TD":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"TG":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"TH":{"s":"NSB","sp":"P. vivax, P. falciparum, P. knowlesi","se":"Ganzjährig"},"TZ":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"UG":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"VE":{"s":"P","sp":"P. vivax, P. falciparum","se":"Ganzjährig"},"VN":{"s":"EP","sp":"P. vivax, P. falciparum, P. knowlesi","se":"Ganzjährig"},"VU":{"s":"NSB","sp":"P. vivax","se":"Ganzjährig"},"YE":{"s":"P","sp":"P. falciparum, P. vivax","se":"Ganzjährig"},"YT":{"s":"EP","sp":"P. falciparum","se":"Ganzjährig"},"ZA":{"s":"NSB","sp":"P. falciparum","se":"Ganzjährig"},"ZM":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"},"ZW":{"s":"P","sp":"P. falciparum","se":"Ganzjährig"}
  };
  window.MAL_STRAT_RANK = { none:0, EP:1, NSB:2, P:3 };
  window.malariaAssess = function(codes){ const list=[]; let best='none'; (codes||[]).forEach(function(c){ const d=(typeof MALARIA_DATA!=='undefined')?MALARIA_DATA[c]:null; if(d){ list.push({code:c,strategy:d.s,species:d.sp||'',season:d.se||''}); if(MAL_STRAT_RANK[d.s]>MAL_STRAT_RANK[best])best=d.s; } }); return {strategy:best,countries:list,any:list.length>0}; };
  window.malaroneTabsPerDay = function(kg){ if(kg==null||isNaN(kg))return{tabs:1,ped:false,label:'1 Tbl. (250/100 mg)'}; if(kg<5)return{tabs:0,ped:true,label:'nicht zugelassen (< 5 kg)'}; if(kg<=8)return{tabs:0.5,ped:true,label:'½ Junior-Tbl.'}; if(kg<=10)return{tabs:0.75,ped:true,label:'¾ Junior-Tbl.'}; if(kg<=20)return{tabs:1,ped:true,label:'1 Junior-Tbl.'}; if(kg<=30)return{tabs:2,ped:true,label:'2 Junior-Tbl.'}; if(kg<=40)return{tabs:3,ped:true,label:'3 Junior-Tbl.'}; return{tabs:1,ped:false,label:'1 Tbl. (250/100 mg)'}; };
  window.malaroneCalc = function(kg,daysInRisk){ const t=malaroneTabsPerDay(kg); const days=Math.max(0,Math.round(+daysInRisk||0))+8; const tablets=Math.ceil(t.tabs*days); const packs=Math.max(1,Math.ceil(tablets/12)); return {tabsPerDay:t.tabs,tabLabel:t.label,ped:t.ped,days:days,tablets:tablets,packs:packs}; };
  window.MAL_DRUGS = {
    malarone:{ name:'Atovaquon-Proguanil (Malarone)', tag:{de:'täglich · Standard',en:'daily · standard'}, dose:{de:'Erwachsene / ≥ 40 kg: 1 Tbl. (250/100 mg) täglich. Kinder gewichtsabhängig (Junior 62,5/25 mg).',en:'Adults / ≥ 40 kg: 1 tab (250/100 mg) daily. Children weight-based (Junior 62.5/25 mg).'}, schedule:{de:'1 Tag davor · täglich · 7 Tage danach',en:'1 day before · daily · 7 days after'}, intake:{de:'Zu einer Mahlzeit oder mit einem milchhaltigen Getränk einnehmen (bessere Aufnahme), täglich zur gleichen Zeit. Bei Erbrechen innerhalb 1 Stunde erneut einnehmen.',en:'Take with food or a milky drink (better absorption), same time each day. If vomiting within 1 h, repeat the dose.'}, cave:{de:'Nicht bei schwerer Niereninsuffizienz (GFR < 30 ml/min).',en:'Avoid in severe renal impairment (GFR < 30 ml/min).'}, pack:'12 Tbl.' },
    mefloquin:{ name:'Mefloquin (Lariam)', tag:{de:'wöchentlich',en:'weekly'}, dose:{de:'Erwachsene: 1 Tbl. (250 mg) 1× wöchentlich.',en:'Adults: 1 tab (250 mg) once weekly.'}, schedule:{de:'2–3 Wochen vor Abreise beginnen · wöchentlich (gleicher Wochentag) · bis 4 Wochen danach.',en:'2–3 weeks before departure · weekly (same weekday) · until 4 weeks after.'}, intake:{de:'Wöchentlich zu oder nach einer Mahlzeit mit reichlich Flüssigkeit, immer am selben Wochentag.',en:'Weekly with or after a meal and plenty of fluid, always the same weekday.'}, cave:{de:'Nicht bei neuropsychiatrischer Vorgeschichte, Krampfleiden oder relevanten Herzrhythmusstörungen.',en:'Avoid with neuropsychiatric history, seizure disorder or relevant cardiac arrhythmia.'}, pack:'' },
    doxycyclin:{ name:'Doxycyclin', tag:{de:'täglich',en:'daily'}, dose:{de:'Erwachsene: 1 Tbl. (100 mg) täglich.',en:'Adults: 1 tab (100 mg) daily.'}, schedule:{de:'1–2 Tage vor Einreise · täglich · bis 4 Wochen danach.',en:'1–2 days before entry · daily · until 4 weeks after.'}, intake:{de:'Mit reichlich Wasser im Sitzen oder Stehen einnehmen, nicht direkt vor dem Hinlegen (Speiseröhrenreizung), zu einer Mahlzeit.',en:'Take with plenty of water sitting or standing, not right before lying down (oesophageal irritation), with a meal.'}, cave:{de:'Photosensibilität (Sonnenschutz); nicht in Schwangerschaft/Stillzeit; nicht bei Kindern < 8 Jahre.',en:'Photosensitivity (sun protection); not in pregnancy/breastfeeding; not in children < 8 years.'}, pack:'' }
  };
  window.MAL_EXPO = { de:'Konsequenter Mückenschutz: Repellent mit DEET (30–50 %) oder Icaridin (20 %) auf unbedeckte Haut (Anopheles v. a. dämmerungs- und nachtaktiv), lange helle Kleidung, imprägniertes Moskitonetz, klimatisierte oder vergitterte Räume.', en:'Consistent bite protection: repellent with DEET (30–50 %) or Icaridin (20 %) on exposed skin (Anopheles bite mainly at dusk and night), long light-coloured clothing, an impregnated bed net, air-conditioned or screened rooms.' };
  window.MAL_STANDBY = { de:'Notfallselbstbehandlung (Standby): keine Dauerprophylaxe – stattdessen Malarone als Notfallmedikament mitgeben. Bei Fieber (≥ 38,5 °C) und wenn nicht innerhalb von 24 h ärztliche Hilfe erreichbar ist, Malarone als <strong>Behandlung</strong> (nicht als Prophylaxe) einnehmen und danach umgehend ärztliche Abklärung suchen.', en:'Emergency standby treatment: no continuous prophylaxis – instead provide Malarone as a standby medication. If fever (≥ 38.5 °C) occurs and no medical help is reachable within 24 h, take Malarone as <strong>treatment</strong> (not prophylaxis) and seek medical care as soon as possible afterwards.' };
  // Therapeutische (Notfall-)Dosis Atovaquon-Proguanil: 1× täglich über 3 Tage, gewichtsabhängig.
  window.malaroneTreatTabs = function(kg){
    if(kg==null||isNaN(kg)) return {tabs:4,label:'4 Tbl. (250/100 mg)',ped:false};
    if(kg<5)  return {tabs:0,label:'nicht zugelassen (< 5 kg)',ped:true};
    if(kg<=8) return {tabs:2,label:'2 Junior-Tbl. (62,5/25 mg)',ped:true};
    if(kg<=10)return {tabs:3,label:'3 Junior-Tbl. (62,5/25 mg)',ped:true};
    if(kg<=20)return {tabs:1,label:'1 Tbl. (250/100 mg)',ped:true};
    if(kg<=30)return {tabs:2,label:'2 Tbl. (250/100 mg)',ped:true};
    if(kg<=40)return {tabs:3,label:'3 Tbl. (250/100 mg)',ped:true};
    return {tabs:4,label:'4 Tbl. (250/100 mg)',ped:false};
  };
  window.malaroneTreatCalc = function(kg){ const t=malaroneTreatTabs(kg); const tablets=Math.ceil(t.tabs*3); const packs=Math.max(1,Math.ceil(tablets/12)); return {tabsPerDay:t.tabs,tabLabel:t.label,ped:t.ped,days:3,tablets:tablets,packs:packs}; };
}
/* ================= MALARIA-SEKTION (UI) ================= */
let malariaState = { days:null, weight:null, drug:'malarone', mode:null };
let malIsChild = false;
let malFoldPatient = null;   // merkt sich, für welchen Patienten bereits automatisch ein-/ausgeklappt wurde
function resetMalariaState(){ malariaState = { days:null, weight:null, drug:'malarone', mode:null }; malIsChild=false; }
// Zahlen-Stepper (− / Eingabe / +) für Aufenthaltsdauer und Kindergewicht
function malStepper(id,val,stepFn,setFn,unit,min,max){
  return '<div class="mal-step"><button type="button" class="mal-step-btn" onclick="'+stepFn+'(-1)" aria-label="minus">−</button>'+
    '<input type="number" id="'+id+'" min="'+min+'" max="'+max+'" value="'+(val!=null?val:'')+'" oninput="'+setFn+'(this.value)">'+
    '<button type="button" class="mal-step-btn" onclick="'+stepFn+'(1)" aria-label="plus">+</button>'+
    (unit?'<span class="mal-step-unit">'+unit+'</span>':'')+'</div>';
}
function malDaysStep(d){ malariaState.days=Math.max(0,(malariaState.days||0)+d); const i=el('mal-days-in'); if(i)i.value=malariaState.days; malRecUpdate(); }
function malWeightStep(d){ let w=(malariaState.weight!=null?malariaState.weight:20)+d; w=Math.max(5,Math.min(150,w)); malariaState.weight=w; const i=el('mal-wt-in'); if(i)i.value=w; malRecUpdate(); }
function malDefaultDays(){
  const b=(el('p-duration')&&el('p-duration').value)||'';
  const m={'<1w':5,'1-2w':10,'<2w':10,'2-4w':21,'0-7':5,'7-14':10,'14-21':17,'21-28':24,'1-3m':45,'3-6m':120,'>6m':180};
  return m[b]||10;
}
function malariaRelevant(){ return (typeof malariaAssess==='function') && malariaAssess(destinations||[]).any; }
function renderMalaria(){
  const sec=el('stepM'), box=el('malaria-body'); if(!sec||!box||typeof malariaAssess!=='function') return;
  const editingP=patients.find(p=>p.id===editingId);
  const waiting=editingP && patientStatus(editingP)==='waiting';
  // Nur während der aktiven Behandlung eines Patienten – niemals in der Ambulanzliste (idle)
  const editing = !!editingId && document.body.classList.contains('clinic') && !document.body.classList.contains('clinic-idle');
  const showable = editing && isStaff() && !waiting;   // Sektion 6 ist immer vorhanden (ohne Risiko eingeklappt)
  if(!showable){ sec.style.display='none'; box.innerHTML=''; if(typeof updateSecNav==='function') updateSecNav(); return; }
  // Sektion ist während der Behandlung IMMER vollständig sichtbar (kein Ein-/Ausklappen mehr).
  sec.style.display='';
  sec.classList.remove('foldable','folded');
  const a=malariaAssess(destinations||[]);
  if(!a.any){
    box.innerHTML='<div class="mal-none"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-right:6px"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg>'+LX('Kein Malariarisiko im ausgewählten Reiseziel.','No malaria risk for the selected destination.')+'</div>'
      + '<div class="mal-expo"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 4v5c0 4-3 7-7 9-4-2-7-5-7-9V7z"/><path d="M9 12l2 2 4-4"/></svg><span>'+L2(MAL_EXPO)+'</span></div>';
    if(typeof updateSecNav==='function') updateSecNav();
    return;
  }
  if(malariaState.days==null) malariaState.days=malDefaultDays();
  // Gewichtsfeld nur für Kinder (< 15 J.); Erwachsene erhalten die Standarddosis
  const dobVal=(el('p-dob')&&el('p-dob').value)||'';
  const age=(dobVal && typeof ageYears==='function')?ageYears(dobVal):null;
  malIsChild=(age!=null && age<15);
  if(malIsChild){ if(malariaState.weight==null) malariaState.weight=Math.max(5,Math.round(2*age+8)); } else { malariaState.weight=null; }
  const strat=a.strategy;
  const stratBadge = strat==='P' ? '<span class="mal-badge high">'+LX('Chemoprophylaxe-Gebiet','Chemoprophylaxis area')+'</span>'
    : strat==='NSB' ? '<span class="mal-badge mid">'+LX('Standby-Gebiet','Standby area')+'</span>'
    : '<span class="mal-badge low">'+LX('nur Expositionsprophylaxe','bite prevention only')+'</span>';
  const dests=a.countries.map(c=>{ const nm=CBY[c.code]?cName(CBY[c.code]):c.code; return '<span class="mal-dest">'+_esc(nm)+(c.species?' · '+_esc(c.species):'')+'</span>'; }).join('');
  let h='';
  h+='<div class="mal-summary"><div class="mal-sum-head">'+stratBadge+'<span class="mal-sum-note">'+LX('Regionale Unterschiede werden mit dem Patienten geklärt.','Regional differences are clarified with the patient.')+'</span></div><div class="mal-dests">'+dests+'</div></div>';
  h+='<div class="mal-row"><label class="mal-lbl">'+LX('Aufenthalt im Risikogebiet','Stay in risk area')+'</label>'+malStepper('mal-days-in',malariaState.days,'malDaysStep','malSetDays',LX('Tage','days'),0,365)+'</div>';
  h+='<div class="mal-rec" id="mal-rec"></div>';
  if(strat==='P'||strat==='NSB'){
    // Modus (Chemoprophylaxe / Notfallselbstbehandlung) ist immer umschaltbar.
    if(malariaState.mode==null) malariaState.mode = (strat==='P' ? 'prophylaxis' : 'standby');
    const mode=malariaState.mode;
    h+='<div class="mal-mode-toggle" role="group">'
      +'<button type="button" class="mal-mode'+(mode==='prophylaxis'?' active':'')+'" onclick="malSetMode(\'prophylaxis\')">'+LX('Chemoprophylaxe','Chemoprophylaxis')+'</button>'
      +'<button type="button" class="mal-mode'+(mode==='standby'?' active':'')+'" onclick="malSetMode(\'standby\')">'+LX('Notfallselbstbehandlung','Standby treatment')+'</button>'
      +'</div>';
    if(mode==='standby'){
      h+='<div class="mal-standby"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h18v13H3zM8 7V4h8v3"/></svg><span>'+L2(MAL_STANDBY)+'</span></div>';
      h+='<div class="mal-drug-h">'+LX('Notfallmedikament','Standby medication')+'</div><div class="mal-drugs">'+malSbetCard()+'</div>';
    } else {
      h+='<div class="mal-drug-h">'+LX('Medikament','Medication')+'</div><div class="mal-drugs">';
      ['malarone','mefloquin','doxycyclin'].forEach(k=>{ h+=malDrugCard(k); });
      h+='</div>';
    }
  }
  h+='<div class="mal-expo"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 4v5c0 4-3 7-7 9-4-2-7-5-7-9V7z"/><path d="M9 12l2 2 4-4"/></svg><span>'+L2(MAL_EXPO)+'</span></div>';
  box.innerHTML=h;
  malRecUpdate();
  if(typeof updateSecNav==='function') updateSecNav();
}
function malDrugCard(k){
  const d=MAL_DRUGS[k]; const sel=malariaState.drug===k;
  let h='<div class="mal-drug'+(sel?' sel':'')+'" onclick="malSelectDrug(\''+k+'\')">';
  h+='<div class="mal-drug-top">'+(sel?'<svg class="mal-chk" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5L20 6.5"/></svg>':'')+'<span class="mal-drug-nm">'+_esc(d.name)+'</span><span class="mal-drug-tag">'+L2(d.tag)+'</span>'+(k==='malarone'?'<span class="mal-badge std">'+LX('Standard','Default')+'</span>':'')+'</div>';
  if(sel){
    h+='<div class="mal-drug-body">';
    h+='<div class="mal-fld"><span class="mal-fld-l">'+LX('Dosis','Dose')+'</span>'+L2(d.dose)+'</div>';
    h+='<div class="mal-fld"><span class="mal-fld-l">'+LX('Schema','Schedule')+'</span>'+L2(d.schedule)+'</div>';
    h+='<div class="mal-fld"><span class="mal-fld-l">'+LX('Einnahme','How to take')+'</span>'+L2(d.intake)+'</div>';
    h+='<div class="mal-fld cave"><span class="mal-fld-l">'+LX('Cave','Caution')+'</span>'+L2(d.cave)+'</div>';
    if(k==='malarone') h+=malCalcHtml();
    h+='</div>';
  }
  return h+'</div>';
}
// Malarone als Notfallselbstbehandlung (therapeutische Dosis, keine Prophylaxe-Menge)
function malSbetCard(){
  const d=MAL_DRUGS.malarone;
  let h='<div class="mal-drug sel sbet">';
  h+='<div class="mal-drug-top"><svg class="mal-chk" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5L20 6.5"/></svg><span class="mal-drug-nm">'+_esc(d.name)+'</span><span class="mal-drug-tag">'+LX('Notfallbehandlung','standby treatment')+'</span></div>';
  h+='<div class="mal-drug-body">';
  h+='<div class="mal-fld"><span class="mal-fld-l">'+LX('Dosis','Dose')+'</span>'+LX('Erwachsene / ≥ 40 kg: 4 Tbl. (250/100 mg) auf einmal, 1× täglich. Kinder gewichtsabhängig.','Adults / ≥ 40 kg: 4 tabs (250/100 mg) together, once daily. Children weight-based.')+'</div>';
  h+='<div class="mal-fld"><span class="mal-fld-l">'+LX('Schema','Schedule')+'</span>'+LX('1× täglich an <strong>3 aufeinanderfolgenden Tagen</strong> – nur im Notfall, nicht als Dauerprophylaxe.','once daily on <strong>3 consecutive days</strong> – only in an emergency, not as continuous prophylaxis.')+'</div>';
  h+='<div class="mal-fld"><span class="mal-fld-l">'+LX('Einnahme','How to take')+'</span>'+L2(d.intake)+'</div>';
  h+='<div class="mal-fld cave"><span class="mal-fld-l">'+LX('Cave','Caution')+'</span>'+L2(d.cave)+'</div>';
  h+=malCalcHtml();
  h+='</div></div>';
  return h;
}
function malCalcHtml(){
  const wRow = malIsChild ? ('<div class="mal-calc-row"><label>'+LX('Körpergewicht (Kind)','Body weight (child)')+'</label>'+malStepper('mal-wt-in',malariaState.weight,'malWeightStep','malSetWeight','kg',5,150)+'</div>') : '';
  return '<div class="mal-calc">'+wRow+
    '<div class="mal-calc-grid"><div><div class="mal-calc-l">'+LX('Dosis / Tag','Dose / day')+'</div><div class="mal-calc-v" id="mal-dose">–</div></div>'+
    '<div><div class="mal-calc-l">'+LX('Einnahmedauer','Duration')+'</div><div class="mal-calc-v" id="mal-daysv">–</div></div>'+
    '<div><div class="mal-calc-l">'+LX('Packungen à 12','Packs of 12')+'</div><div class="mal-calc-v" id="mal-packs">–</div></div></div>'+
    '<div class="mal-calc-note" id="mal-tot"></div></div>';
}
function malRecUpdate(){
  if(typeof malariaAssess!=='function') return;
  const a=malariaAssess(destinations||[]); const strat=a.strategy; const days=malariaState.days||0;
  const rec=el('mal-rec');
  if(rec){
    let cls,title,sub;
    if(strat==='P'){ cls='high'; title=LX('Chemoprophylaxe empfohlen','Chemoprophylaxis recommended'); sub = days<3 ? LX('Nur kurzer/kein Aufenthalt im Hochrisikogebiet – ggf. Standby statt Dauerprophylaxe (mit Patient klären).','Short/no stay in high-risk area – standby may suffice instead of continuous prophylaxis (clarify with the patient).') : LX('Durchgehende Prophylaxe für den Aufenthalt im Hochrisikogebiet.','Continuous prophylaxis for the stay in the high-risk area.'); }
    else if(strat==='NSB'){ cls='mid'; title=LX('Notfallselbstbehandlung (Standby)','Emergency standby treatment'); sub=LX('Standby-Medikament mitgeben; Chemoprophylaxe nur bei intensiver Exposition.','Provide a standby medication; chemoprophylaxis only for intense exposure.'); }
    else { cls='low'; title=LX('Nur Expositionsprophylaxe','Bite prevention only'); sub=LX('Kein Chemoprophylaxe-Gebiet – konsequenter Mückenschutz genügt.','No chemoprophylaxis area – consistent bite protection is sufficient.'); }
    const ic = strat==='P' ? '<path d="M10.5 20.5a5 5 0 0 1-7-7l6-6a5 5 0 0 1 7 7l-6 6z"/><path d="M8 8l8 8"/>'
      : strat==='NSB' ? '<path d="M3 7h18v13H3z"/><path d="M8 7V4h8v3"/>'
      : '<path d="M12 3l7 4v5c0 4-3 7-7 9-4-2-7-5-7-9V7z"/>';
    rec.className='mal-rec '+cls;
    rec.innerHTML='<svg class="mal-rec-ic" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+ic+'</svg><div class="mal-rec-txt"><div class="mal-rec-t">'+title+'</div><div class="mal-rec-s">'+sub+'</div></div>';
  }
  if(el('mal-dose')){
    const sbet = (malariaState.mode==='standby');
    const c = (sbet && typeof malaroneTreatCalc==='function') ? malaroneTreatCalc(malariaState.weight)
            : (typeof malaroneCalc==='function' ? malaroneCalc(malariaState.weight, malariaState.days) : null);
    if(c){
      el('mal-dose').textContent=c.tabLabel;
      el('mal-daysv').textContent = sbet ? LX('3 Tage (Behandlung)','3 days (treatment)') : (c.days+' '+LX('Tage','days'));
      el('mal-packs').textContent=c.packs;
      el('mal-tot').textContent=LX('Gesamt ','Total ')+c.tablets+' '+LX('Tabletten','tablets')+' · '+LX('1 Packung = 12 Tbl.','1 pack = 12 tabs')+(c.ped?' · '+LX('Kinderdosis','paediatric dose'):'');
    }
  }
}
function malSetDays(v){ malariaState.days=Math.max(0,parseInt(v,10)||0); malRecUpdate(); }
function malSetWeight(v){ const n=parseFloat(v); malariaState.weight=isNaN(n)?null:n; malRecUpdate(); }
function malSelectDrug(k){ if(!MAL_DRUGS[k])return; malariaState.drug=k; renderMalaria(); }
function malSetMode(m){ if(m!=='prophylaxis'&&m!=='standby')return; malariaState.mode=m; if(m==='standby') malariaState.drug='malarone'; renderMalaria(); }
// Malaria-Sektion ein-/ausklappen (auch ohne Risiko immer möglich)
function malToggleFold(e){ if(e && e.target && e.target.closest && e.target.closest('.mal-map-btn')) return; const s=el('stepM'); if(!s) return; s.classList.add('foldable'); s.classList.toggle('folded'); }
// Malaria-Karten (DTG/EKRM, Thieme) – lokal eingebettet. Regionalzuordnung je Reiseland.
const MAL_REGION_FILES = {
  afrika:{file:'malaria_afrika.png', de:'Afrika (Übersicht)', en:'Africa (overview)'},
  westafrika:{file:'malaria_westafrika.png', de:'Westafrika (Senegal–Tschad)', en:'West Africa (Senegal–Chad)'},
  ostafrika:{file:'malaria_ostafrika.png', de:'Ostafrika / Horn (Äthiopien–Kenia)', en:'East Africa / Horn (Ethiopia–Kenya)'},
  tansania_madagaskar:{file:'malaria_tansania_madagaskar.png', de:'Tansania & Madagaskar', en:'Tanzania & Madagascar'},
  suedafrika:{file:'malaria_suedafrika.png', de:'Südliches Afrika', en:'Southern Africa'},
  suedamerika:{file:'malaria_suedamerika.png', de:'Südamerika', en:'South America'},
  mittelamerika:{file:'malaria_mittelamerika.png', de:'Mittelamerika & Karibik', en:'Central America & Caribbean'},
  suedasien:{file:'malaria_suedasien.png', de:'Südasien', en:'South Asia'},
  suedostasien:{file:'malaria_suedostasien.png', de:'Südostasien', en:'Southeast Asia'},
  malaiischer_archipel:{file:'malaria_malaiischer_archipel.png', de:'Malaiischer Archipel', en:'Malay Archipelago'},
  ozeanien:{file:'malaria_ozeanien.png', de:'Ozeanien', en:'Oceania'}
};
// ISO2 → Regionalkarte
const MAL_REGION = {
  AF:'suedasien', PK:'suedasien', IN:'suedasien', BD:'suedasien', NP:'suedasien', BT:'suedasien', IR:'suedasien',
  TH:'suedostasien', KH:'suedostasien', LA:'suedostasien', MM:'suedostasien', VN:'suedostasien',
  ID:'malaiischer_archipel', MY:'malaiischer_archipel', PH:'malaiischer_archipel', BN:'malaiischer_archipel',
  PG:'ozeanien', SB:'ozeanien', VU:'ozeanien',
  BR:'suedamerika', PE:'suedamerika', CO:'suedamerika', VE:'suedamerika', EC:'suedamerika', BO:'suedamerika', GY:'suedamerika', GF:'suedamerika',
  PA:'mittelamerika', CR:'mittelamerika', NI:'mittelamerika', HN:'mittelamerika', GT:'mittelamerika', BZ:'mittelamerika', MX:'mittelamerika', HT:'mittelamerika', DO:'mittelamerika',
  SN:'westafrika', GM:'westafrika', GW:'westafrika', GN:'westafrika', SL:'westafrika', LR:'westafrika', CI:'westafrika', ML:'westafrika', BF:'westafrika', GH:'westafrika', TG:'westafrika', BJ:'westafrika', NE:'westafrika', NG:'westafrika', TD:'westafrika', MR:'westafrika', CM:'westafrika',
  ET:'ostafrika', ER:'ostafrika', DJ:'ostafrika', SO:'ostafrika', SS:'ostafrika', SD:'ostafrika', KE:'ostafrika', UG:'ostafrika', RW:'ostafrika', BI:'ostafrika',
  TZ:'tansania_madagaskar', MG:'tansania_madagaskar', KM:'tansania_madagaskar', YT:'tansania_madagaskar',
  ZA:'suedafrika', NA:'suedafrika', BW:'suedafrika', ZW:'suedafrika', ZM:'suedafrika', MW:'suedafrika', MZ:'suedafrika', SZ:'suedafrika', AO:'suedafrika',
  CD:'afrika', CG:'afrika', CF:'afrika', GA:'afrika', GQ:'afrika', ST:'afrika', YE:'afrika', EH:'afrika'
};
const MAL_MAP_SRC = {de:'Quelle: DTG/EKRM, „Malaria 2025" (Thieme, Flug u. Reisemed. 2025). Zur klinischen Verwendung in der Charité-Ambulanz.',
  en:'Source: DTG/EKRM, "Malaria 2025" (Thieme, Flug u. Reisemed. 2025). For clinical use in the Charité clinic.'};
function malMapImg(file, cap){
  return '<figure class="mal-map-fig"><figcaption class="mal-map-cap">'+cap+'</figcaption>'+
    '<img src="assets/karten/'+file+'?v=55" alt="'+_esc(cap)+'" class="map-full" loading="lazy" '+
    'onerror="this.outerHTML=\'<div class=&quot;map-missing&quot;>'+LX('Karte noch nicht hinterlegt.','Map not yet available.')+'</div>\'"></figure>';
}
function showMalariaMaps(){
  const bg=el('map-bg'); if(!bg || typeof malariaAssess!=='function') return;
  const a=malariaAssess(destinations||[]);
  // relevante Regionen aus den Reisezielen (dedupliziert, Reihenfolge stabil)
  const regions=[]; (a.countries||[]).forEach(c=>{ const r=MAL_REGION[c.code]; if(r && regions.indexOf(r)<0) regions.push(r); });
  let imgs = malMapImg('malaria.png', LX('Weltübersicht – Malaria 2025','World overview – Malaria 2025'));
  regions.forEach(r=>{ const m=MAL_REGION_FILES[r]; if(m) imgs+=malMapImg(m.file, LANG==='de'?m.de:m.en); });
  const sub = a.any
    ? LX('Weltkarte + passende Regionalkarte(n) zum Reiseziel. Regionale Unterschiede mit dem Patienten klären.','World map + matching regional map(s) for the destination. Clarify regional differences with the patient.')
    : LX('Kein Malariarisiko im ausgewählten Reiseziel – Weltübersicht zur Orientierung.','No malaria risk for the selected destination – world overview for reference.');
  bg.innerHTML='<button class="map-close" onclick="closeMap()" title="Schließen">×</button>'+
    '<div class="map-inner mal-map-scroll">'+
      '<div class="map-head">'+LX('Malaria-Karten','Malaria maps')+'</div>'+
      '<div class="m-sub" style="margin-bottom:10px">'+sub+'</div>'+
      imgs+
      '<div class="map-foot">'+(LANG==='de'?MAL_MAP_SRC.de:MAL_MAP_SRC.en)+'</div>'+
    '</div>';
  bg.classList.add('show');
}

/* ================= VERWENDETE QUELLEN (Settings) ================= */
const USED_SOURCES=[
  { aspect:{de:'Impfempfehlungen (STIKO · RKI · DTG)',en:'Vaccination recommendations (STIKO · RKI · DTG)'}, status:'active', items:[
    {name:'RKI/STIKO – Empfehlungen 2026', use:{de:'Standardimpfempfehlungen, Indikationen, Altersfreigaben',en:'Standard recommendations, indications, age limits'}, url:'https://www.rki.de/DE/Themen/Infektionskrankheiten/Impfen/STIKO-Empfehlungen/stiko-empfehlungen_node.html', stand:'2026'},
    {name:'RKI/STIKO – Impfkalender 2026 (DE/EN)', use:{de:'Grundimmunisierung und Auffrischschema',en:'Primary and booster schedule'}, url:'https://www.rki.de/DE/Themen/Infektionskrankheiten/Impfen/Impfkalender/impfkalender_node.html', stand:'2026'},
    {name:'STIKO/DTG – Reisemedizinische Impfempfehlungen 2026', use:{de:'Reiseimpf-Empfehlungen und Ländertabellen',en:'Travel vaccine recommendations and country tables'}, url:'https://www.rki.de/DE/Themen/Infektionskrankheiten/Impfen/Reiseimpfungen/reiseimpfungen_node.html', stand:'2026'},
    {name:'DTG-StAR – Reiseimpfempfehlungen', use:{de:'Empfehlungen der Fachgesellschaft (2022 und 2026)',en:'Expert-society recommendations (2022 and 2026)'}, url:'https://www.dtg.org/empfehlungen-und-leitlinien/empfehlungen/reiseimpfungen.html', stand:'2026'},
    {name:'STIKO – Qdenga (Dengue) 2023', use:{de:'Empfehlung zur Dengue-Impfung',en:'Recommendation on dengue vaccination'}, url:'https://www.rki.de/DE/Themen/Infektionskrankheiten/Impfen/STIKO-Empfehlungen/stiko-empfehlungen_node.html', stand:'2023'}
  ]},
  { aspect:{de:'Länder- & Reiseinformationen',en:'Country & travel information'}, status:'active', items:[
    {name:'RKI/STIKO/DTG – Ländertabellen 2026', use:{de:'Länderspezifische Impf- und Reiseempfehlungen',en:'Country-specific vaccine and travel recommendations'}, url:'https://www.rki.de/DE/Themen/Infektionskrankheiten/Impfen/Reiseimpfungen/reiseimpfungen_node.html', stand:'2026'},
    {name:'WHO – International Travel and Health', use:{de:'Impf- und Einreiseanforderungen je Land',en:'Vaccine and entry requirements per country'}, url:'https://www.who.int/health-topics/travel-and-health', stand:'2022'},
    {name:'Auswärtiges Amt', use:{de:'Reise- und Gesundheitshinweise',en:'Travel and health notices'}, url:'https://www.auswaertiges-amt.de/de/ReiseUndSicherheit/reise-und-sicherheitshinweise', stand:'laufend'}
  ]},
  { aspect:{de:'Verbreitungskarten & Epidemiologie',en:'Distribution maps & epidemiology'}, status:'active', items:[
    {name:'RKI – Epidemiologisches Bulletin', use:{de:'Geografische Verbreitung der Erkrankungen (Karten-Button)',en:'Geographic distribution of diseases (map button)'}, url:'https://www.rki.de/DE/Aktuelles/Publikationen/Epidemiologisches-Bulletin/epid_bull_node.html', stand:'14/2025'},
    {name:'RKI – Infektionsepidemiologisches Jahrbuch', use:{de:'Statistik meldepflichtiger Infektionskrankheiten',en:'Statistics of notifiable infectious diseases'}, url:'https://www.rki.de/DE/Aktuelles/Publikationen/Infektionsepidemiologisches-Jahrbuch/jahrbuch_node.html', stand:'2026'}
  ]},
  { aspect:{de:'Gelbfieber',en:'Yellow fever'}, status:'active', items:[
    {name:'WHO – Gelbfieber (Endemiegebiete & Impfpflicht)', use:{de:'Impfpflicht bei Einreise und Endemiegebiete (Reiselogik)',en:'Mandatory-on-entry rules and endemic areas (travel logic)'}, url:'https://www.who.int/health-topics/yellow-fever', stand:'2025'},
    {name:'DTG – Aufklärungsbogen Gelbfieber (STAR)', use:{de:'Patienten-Aufklärungsbogen zum Ausdruck',en:'Printable patient consent form'}, url:'https://www.dtg.org/images/Bilder_und_Grafiken/STAR/Aufklaerungsboegen/Gelbfieber-Aufklaerung-DTG_STAR.pdf', stand:'STAR 03.18'}
  ]},
  { aspect:{de:'Malaria & Expositionsprophylaxe',en:'Malaria & bite prevention'}, status:'active', items:[
    {name:'DTG – Malaria-Leitlinie / Chemoprophylaxe', use:{de:'Prophylaxe-Strategien und Standardschemata',en:'Prophylaxis strategies and standard regimens'}, url:'https://www.dtg.org/empfehlungen-und-leitlinien/empfehlungen/malaria.html?view=article&id=273:chemoprophylaxe&catid=30:leitlinien', stand:'2025'},
    {name:'DTG – Ländertabelle Malaria 2025', use:{de:'Risiko, Erreger, Saison und Prophylaxe je Land (Engine-Datenbasis)',en:'Risk, species, season and prophylaxis per country (engine data)'}, url:'https://www.dtg.org/empfehlungen-und-leitlinien/empfehlungen/malaria.html', stand:'Juni 2025'},
    {name:'DTG – Weltkarte Malaria 2025', use:{de:'Regionale Verbreitung (World Malaria Reports 2020–2024)',en:'Regional distribution (World Malaria Reports 2020–2024)'}, url:'https://www.dtg.org/empfehlungen-und-leitlinien/empfehlungen/malaria.html', stand:'2025'},
    {name:'RKI-Ratgeber Malaria', use:{de:'Nationale Empfehlungen und Standardregime',en:'National recommendations and standard regimens'}, url:'https://www.rki.de/DE/Aktuelles/Publikationen/RKI-Ratgeber/Ratgeber/Ratgeber_Malaria.html', stand:'2024'},
    {name:'Auswärtiges Amt – Malaria-Daten', use:{de:'Länderbezogene Risiko-Gegenkontrolle',en:'Country-level risk cross-check'}, url:'https://accra.diplo.de/resource/blob/1118318/46816e74f6abff0f8cdd044b94221e79/malaria-data.pdf', stand:'2025'},
    {name:'CDC – Malaria: Drugs', use:{de:'Dosierung inkl. Gewichtsklassen (Malarone-Rechner)',en:'Dosing incl. weight bands (Malarone calculator)'}, url:'https://www.cdc.gov/malaria/hcp/drug-malaria/index.html', stand:'2025'},
    {name:'CDC – Malaria: Prevention', use:{de:'Expositionsprophylaxe / Mückenschutz',en:'Bite prevention'}, url:'https://www.cdc.gov/malaria/prevention/index.html', stand:'2025'},
    {name:'Lupi, Hatz, Schlagenhauf 2013 (PMID 24201040)', use:{de:'Wirksamkeit von Repellents (DEET, Icaridin, IR3535, PMD)',en:'Efficacy of repellents (DEET, Icaridin, IR3535, PMD)'}, url:'https://doi.org/10.1016/j.tmaid.2013.10.005', stand:'Travel Med Infect Dis 2013'}
  ]},
  { aspect:{de:'Fachinformationen (SmPC)',en:'Product information (SmPC)'}, status:'active', items:[
    {name:'Fachinformationen der eingesetzten Impfstoffe', use:{de:'Dosierung, Altersgrenzen und Kontraindikationen je Präparat (u. a. STAMARIL, Rabipur, Priorix, Twinrix, IXIARO, GARDASIL 9, Dukoral)',en:'Dosing, age limits and contraindications per product (e.g. STAMARIL, Rabipur, Priorix, Twinrix, IXIARO, GARDASIL 9, Dukoral)'}, url:'https://www.fachinfo.de/', stand:'Herstellerstand'}
  ]},
  { aspect:{de:'Charité – Reisemedizinische Ambulanz',en:'Charité – Travel Medicine Clinic'}, status:'active', items:[
    {name:'Verfügbare Impfstoffe 2025', use:{de:'Vor Ort vorrätige Impfstoffe',en:'Vaccines stocked on site'}, url:'https://reisemedizin.charite.de/', stand:'2025'},
    {name:'Preisliste', use:{de:'Preise der Impfungen und Leistungen',en:'Prices of vaccinations and services'}, url:'https://reisemedizin.charite.de/', stand:'22.05.2026'},
    {name:'Anmeldebogen & Impfplan', use:{de:'Formulargrundlage für Stammdaten und Impfplan',en:'Form basis for master data and vaccination plan'}, url:'https://reisemedizin.charite.de/', stand:'2025'}
  ]}
];
function renderSources(){
  const box=el('sources-body'); if(!box) return;
  const extSvg='<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;margin-left:3px"><path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>';
  const badge=(st)=> st==='planned'
    ? '<span class="src-badge planned">'+LX('In Vorbereitung','In preparation')+'</span>'
    : '<span class="src-badge active">'+LX('Aktiv','Active')+'</span>';
  let h='<div class="st-head"><h2>'+LX('Verwendete Quellen','Sources used')+'</h2></div>';
  h+='<div class="src-groups">';
  USED_SOURCES.forEach(g=>{
    h+='<div class="src-group"><div class="src-group-h"><span>'+L2(g.aspect)+'</span>'+badge(g.status)+'</div>';
    g.items.forEach(it=>{
      const nm=_esc(it.name);
      const link = it.url ? '<a href="'+it.url+'" target="_blank" rel="noopener" class="src-link">'+nm+extSvg+'</a>' : '<span class="src-name">'+nm+'</span>';
      h+='<div class="src-row"><div class="src-main">'+link+'<div class="src-use">'+L2(it.use)+'</div></div>'+(it.stand?'<div class="src-stand">'+(it.stand==='—'?'':LX('Stand ','')+_esc(it.stand))+'</div>':'')+'</div>';
    });
    h+='</div>';
  });
  h+='</div>';
  box.innerHTML=h;
}
/* ================= TESTDATEN – Patienten-Generator (nur Admin) ================= */
const TG_POOLS={
  afrika:['KE','TZ','GH','NG','CM','SN','ET','UG','ZM','MZ','ML','CI','ZA','MW','RW','AO','BJ','BF','MG'],
  suedamerika:['BR','PE','CO','BO','EC','VE','GY','AR','CL','PY'],
  asien:['TH','VN','IN','ID','KH','LK','NP','PH','MM','LA','BD','MY','CN'],
  mittelamerika:['MX','GT','HN','NI','CR','PA','DO','CU','HT'],
  nahost:['EG','MA','TR','AE','JO','TN','OM','SA','IL']
};
TG_POOLS.any=[].concat(TG_POOLS.afrika,TG_POOLS.suedamerika,TG_POOLS.asien,TG_POOLS.mittelamerika,TG_POOLS.nahost,['ES','IT','GR','US','TH']);
const TG_FN_F=['Anna','Lena','Sofia','Marie','Julia','Emma','Laura','Clara','Fatima','Aylin','Giulia','Ana','Nora','Mia'];
const TG_FN_M=['Jonas','Lukas','David','Max','Paul','Felix','Noah','Ben','Ahmed','Luca','Hans','Tom','Elias','Karim'];
const TG_SUR=['Müller','Schmidt','Fischer','Weber','Meyer','Wagner','Becker','Hoffmann','Schäfer','Koch','Bauer','Richter','Klein','Wolf','Neumann','Braun','Nguyen','Yilmaz','Rossi','Okonkwo','Almeida','Popescu'];
const TG_CITY=['Berlin','Potsdam','Leipzig','Hamburg','Dresden','Cottbus'];
const TG_MEDS=['Ramipril','Metformin','L-Thyroxin','Bisoprolol','Sertralin','ASS 100','Pantoprazol','Simvastatin'];
const TG_IMMUNO=['Methotrexat','Adalimumab','Prednisolon 20 mg','Azathioprin','Ciclosporin'];
const TG_CHRON=['Diabetes mellitus Typ 2','COPD','Chronische Niereninsuffizienz','Rheumatoide Arthritis','Arterielle Hypertonie'];
const TG_DUR=['<1w','1-2w','2-4w','1-3m','3-6m','>6m'];
const TG_INS=['AOK Nordost','Techniker Krankenkasse','Barmer','DAK-Gesundheit','IKK Brandenburg u. Berlin','Knappschaft','mhplus BKK','HEK','Privat: Debeka','Privat: Allianz','Selbstzahler'];
const TG_STREET=['Luisenstraße','Chausseestraße','Invalidenstraße','Müllerstraße','Seestraße','Turmstraße','Sonnenallee','Karl-Marx-Straße','Frankfurter Allee','Prenzlauer Allee','Schönhauser Allee','Kantstraße','Bornholmer Straße','Danziger Straße'];
const TG_ZIP=['10115','13353','10999','12043','10405','10437','13405','10247','10585','12099'];
function tgRand(a){ return a[Math.floor(Math.random()*a.length)]; }
function tgShuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); const t=a[i];a[i]=a[j];a[j]=t; } return a; }
function tgY(){ return new Date().getFullYear(); }
function tgYr(maxAgo,minAgo){ minAgo=minAgo||0; return String(tgY()-(minAgo+Math.floor(Math.random()*(maxAgo-minAgo+1)))); }
// Impfstatus-Profile: als wäre ein elektronischer Impfausweis hinterlegt (wird beim Öffnen vorbefüllt)
function tgVax(profile, age){
  if(profile==='nodata') return {};
  if(profile==='mixed') profile=tgRand(['age','travel','thorough']);
  const v={}; const by=tgY()-age;
  v.tdap_polio={ gi_tdap:true, gi_ipv:true, y_td:tgYr(9), y_ap:tgYr(9), y_ipv:tgYr(9) };
  if(age<55) v.mmr={ done:'2', year:String(Math.min(tgY(), by+2)) };
  if(age<=16) v.varicella={ done:'2', year:String(by+1) }; else if(tgChance(0.85)) v.varicella={ disease:true };
  if(age<=30) v.hepatitis={ bMono:'3', bYear:String(by+1) };
  if(age>=60){ v.influenza={ done:'1', year:String(tgY()) }; v.pneumo={ done:'1', year:tgYr(3) }; if(tgChance(0.5)) v.zoster={ done:'2', year:tgYr(3) }; }
  if(age>=9 && age<=30) v.hpv={ done:'2', year:tgYr(Math.max(1,age-11)) };
  if(tgChance(0.8)) v.covid={ done:String(2+Math.floor(Math.random()*3)), year:tgYr(2) };
  if(profile==='age') return v;
  const base=['hepatitis','typhoid','yellowfever','tbe','rabies'];
  const pick = (profile==='thorough') ? base.concat(['jev','menacwy','cholera']) : tgShuffle(base).slice(0, 2+Math.floor(Math.random()*2));
  pick.forEach(k=>{
    if(k==='hepatitis') v.hepatitis=Object.assign(v.hepatitis||{}, { aMono:'2', aYear:tgYr(4), bMono:'3', bYear:(v.hepatitis&&v.hepatitis.bYear)||tgYr(6) });
    else if(k==='menacwy') v.menacwy={ done:'1', type:'acwy', year:tgYr(4) };
    else if(k==='tbe') v.tbe={ done:'3', year:tgYr(4) };
    else if(k==='rabies') v.rabies={ done:'3', year:tgYr(4) };
    else if(k==='jev') v.jev={ done:'2', year:tgYr(3) };
    else if(k==='typhoid') v.typhoid={ done:'1', year:tgYr(2) };
    else if(k==='yellowfever') v.yellowfever={ done:'1', year:tgYr(8) };
    else if(k==='cholera') v.cholera={ done:'2', year:tgYr(2) };
  });
  return v;
}
function tgChance(p){ return Math.random()<p; }
function tgUuid(){ return (window.crypto&&crypto.randomUUID)?crypto.randomUUID():String(Date.now())+Math.random().toString(16).slice(2); }
function tgStep(d){ const i=el('tg-n'); if(i) i.value=Math.max(1,Math.min(10,(parseInt(i.value,10)||1)+d)); }
function tgAgeRange(m){ if(m==='kind')return[0,12]; if(m==='jugend')return[13,17]; if(m==='erw')return[18,64]; if(m==='senior')return[65,88]; return[1,80]; }
function tgDob(age){ const y=new Date().getFullYear()-age; const mo=1+Math.floor(Math.random()*12); const d=1+Math.floor(Math.random()*28); return y+'-'+String(mo).padStart(2,'0')+'-'+String(d).padStart(2,'0'); }
function tgMake(opts,idx){
  const [amin,amax]=tgAgeRange(opts.age); const age=amin+Math.floor(Math.random()*(amax-amin+1));
  const female=tgChance(0.5); const firstname=female?tgRand(TG_FN_F):tgRand(TG_FN_M); const name=tgRand(TG_SUR);
  const pool=TG_POOLS[opts.region]||TG_POOLS.any; const dests=[tgRand(pool)]; if(tgChance(0.25)){ const d2=tgRand(pool); if(d2!==dests[0]) dests.push(d2); }
  let meds=[], immuno='', immunodef=false, pregnant='no', chronicText='', chronic=false;
  if(opts.med && tgChance(0.55)) meds.push(tgRand(TG_MEDS));
  if(opts.exo && tgChance(0.5)){ const k=Math.floor(Math.random()*3);
    if(k===0){ const im=tgRand(TG_IMMUNO); meds.push(im); immuno=im; immunodef=true; }
    else if(k===1 && female && age>=18 && age<=45){ pregnant='pregnant'; }
    else { chronicText=tgRand(TG_CHRON); chronic=true; } }
  let tt=opts.type||'beratung'; if(tt==='mix') tt=tgChance(0.5)?'beratung':'folgeimpfung';
  const savedAt=new Date(Date.now()-idx*13*60000).toISOString();
  return { id:tgUuid(), name:name, firstname:firstname, dob:tgDob(age), age:age, sex:female?'f':'m',
    phone:'0'+(150+Math.floor(Math.random()*20))+' '+(1000000+Math.floor(Math.random()*8999999)), email:'', insurance:tgRand(TG_INS), profession:'', address:tgRand(TG_STREET)+' '+(1+Math.floor(Math.random()*120)), zip:tgRand(TG_ZIP), city:tgRand(TG_CITY),
    duration:tgRand(TG_DUR), departure:(function(){ const d=new Date(); d.setDate(d.getDate()+14+Math.floor(Math.random()*77)); return d.toISOString().slice(0,10); })(), destinations:dests,
    pregnant:pregnant, allergy:tgChance(0.15)?'Penicillin':'', meds:meds, immuno:immuno, recentVax:'',
    conds:[], acute:false, chronicText:chronicText, chronic:chronic, immunodef:immunodef, thrombosis:false, faint:false,
    serology:{measles:false,vzv:false,hbs:false}, childhood:false,
    comment:'Testpatient (Generator)', physician:'', vax:tgVax(opts.vax||'nodata', age), customSchedule:null,
    status:'waiting', group:'', treatmentType:tt,
    claimedBy:null, claimedByName:'', claimedByRole:'', treatmentAt:null,
    editLog:[], savedAt:savedAt, updatedAt:savedAt };
}
async function genTestPatients(){
  const logEl=el('tg-log'); if(logEl) logEl.innerHTML='';
  const tlog=(m,c)=>{ if(!logEl)return; const d=document.createElement('div'); if(c)d.className=c; d.textContent=m; logEl.appendChild(d); logEl.scrollTop=logEl.scrollHeight; };
  if(typeof dbInsertPatient!=='function' || !USE_DB){ tlog('Nicht mit der Datenbank verbunden.','tg-err'); return; }
  const n=Math.max(1,Math.min(10,parseInt((el('tg-n')||{}).value,10)||1));
  const opts={ region:(el('tg-region')||{}).value||'any', age:(el('tg-age')||{}).value||'mix', type:(el('tg-type')||{}).value||'beratung', vax:(el('tg-vax')||{}).value||'nodata', grp:!!(el('tg-grp')&&el('tg-grp').checked), med:!!(el('tg-med')&&el('tg-med').checked), exo:!!(el('tg-exo')&&el('tg-exo').checked) };
  const list=[]; for(let i=0;i<n;i++) list.push(tgMake(opts,i));
  if(opts.grp && n>=2){ const sur=tgRand(TG_SUR); const sz=(n>=4&&tgChance(0.5))?3:2; const city=tgRand(TG_CITY); for(let i=0;i<sz;i++){ list[i].name=sur; list[i].group=sur; list[i].city=city; } }
  let ok=0;
  for(const rec of list){
    try{ const res=await dbInsertPatient(rec); if(res&&res.error){ tlog('✗ '+rec.name+', '+rec.firstname+' – '+(res.error.message||res.error),'tg-err'); } else { ok++; const extra=[rec.group?'Gruppe '+rec.group:'',rec.immunodef?'immunsupprimiert':'',rec.pregnant==='pregnant'?'schwanger':'',rec.chronic?'chron. Erkrankung':'',(rec.meds&&rec.meds.length)?'Medikation':''].filter(Boolean).join(', '); tlog('✓ '+rec.name+', '+rec.firstname+' ('+rec.age+' J. · '+rec.destinations.join(', ')+(extra?' · '+extra:'')+')','tg-ok'); } }
    catch(e){ tlog('✗ '+(e&&e.message?e.message:e),'tg-err'); }
  }
  tlog(ok+' von '+list.length+' Patienten angelegt.', ok===list.length?'tg-ok':'tg-err');
  if(typeof loadPatientsFromDB==='function') await loadPatientsFromDB();
}
// Gelöschte Patienten (Archiv) – nur Admin; im Board nicht mehr sichtbar
function renderDeletedPatients(){
  const box=el('deleted-body'); if(!box) return;
  const del=patients.filter(p=>p.deleted).sort((a,b)=>{ const ta=(a.deleted&&a.deleted.ts)||''; const tb=(b.deleted&&b.deleted.ts)||''; return tb<ta?-1:(tb>ta?1:0); });
  let h='<div class="del-head"><h2>'+LX('Gelöschte Patienten','Deleted patients')+'</h2></div>';
  h+='<div class="card-desc">'+LX('Gelöschte Datensätze bleiben 30 Tage erhalten und können wiederhergestellt werden. „Endgültig löschen" entfernt sie sofort und unwiderruflich aus der Datenbank.','Deleted records are kept for 30 days and can be restored. "Delete permanently" removes them from the database immediately and irreversibly.')+'</div>';
  if(!del.length){ box.innerHTML=h+'<div class="del-empty">'+LX('Keine gelöschten Patienten.','No deleted patients.')+'</div>'; return; }
  h+='<div class="del-list">'+del.map(p=>{
    const nm=(p.firstname?p.name+', '+p.firstname:p.name);
    const d=p.deleted||{};
    const dest=(p.destinations&&p.destinations.length)?' · '+p.destinations.map(c=>CBY[c]?cName(CBY[c]):c).join(', '):'';
    return '<div class="del-row"><div class="del-main"><div class="del-name">'+_esc(nm)+'</div><div class="del-sub">'+(LX('gelöscht von ','deleted by '))+_esc(d.who||'—')+' · '+fmtDateTime(d.ts)+dest+'</div></div><button class="btn sec sm" onclick="restorePatient(\''+p.id+'\')">'+(LX('Wiederherstellen','Restore'))+'</button></div>';
  }).join('')+'</div>';
  h+='<div class="del-foot"><button class="btn-purge" onclick="purgeAllDeleted()"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg>'+LX('Alle endgültig löschen','Delete all permanently')+'</button></div>';
  box.innerHTML=h;
}
// Endgültiges (unwiderrufliches) Löschen aus der Datenbank – nur Admin, mit Bestätigung.
async function purgePatient(id){
  const p=patients.find(x=>x.id===id); const nm=p?(p.firstname?p.name+', '+p.firstname:p.name):'';
  if(!(await uiConfirm(LX('Patient endgültig und unwiderruflich aus der Datenbank löschen?','Permanently and irreversibly delete this patient from the database?')+'\n\n'+nm,{title:LX('Endgültig löschen','Delete permanently'),ok:LX('Endgültig löschen','Delete permanently'),danger:true}))) return;
  try{ if(typeof dbDeletePatient==='function') await dbDeletePatient(id); }catch(e){}
  patients=patients.filter(x=>x.id!==id);
  renderDeletedPatients(); if(typeof renderPatients==='function') renderPatients();
}
async function purgeAllDeleted(){
  const del=patients.filter(p=>p.deleted); if(!del.length) return;
  if(!(await uiConfirm(LX('Alle '+del.length+' gelöschten Patienten endgültig und unwiderruflich aus der Datenbank entfernen?','Permanently and irreversibly remove all '+del.length+' deleted patients from the database?'),{title:LX('Alle endgültig löschen','Delete all permanently'),ok:LX('Alle löschen','Delete all'),danger:true}))) return;
  for(const p of del){ try{ if(typeof dbDeletePatient==='function') await dbDeletePatient(p.id); }catch(e){} }
  const ids=new Set(del.map(p=>p.id)); patients=patients.filter(x=>!ids.has(x.id));
  renderDeletedPatients(); if(typeof renderPatients==='function') renderPatients();
}
function openAdminPanel(){
  const p=el('admin-panel'); if(!p) return;
  const mode=myTreatmentMode(); document.querySelectorAll('input[name=treatmode]').forEach(r=>{r.checked=(r.value===mode);});
  const role=(CURRENT_PROFILE||{}).role;
  const isAdmin=role==='admin';
  const ao=el('admin-only'); if(ao) ao.style.display=isAdmin?'':'none';
  if(isAdmin){ renderAdminUsers(); renderDeletedPatients(); renderTabletLock(); }
  const ss=el('stats-sec'); const showStats=(role==='admin'||role==='kasse');
  if(ss){ ss.style.display=showStats?'':'none'; if(showStats) renderStats(); }
  renderSources();
  // Einstellungs-Reiter nur für Admin (Nutzerverwaltung / Statistik / Testing / Quellen)
  const tabs=el('admin-tabs'); if(tabs) tabs.style.display=isAdmin?'':'none';
  if(isAdmin) adminTab('users');
  p.classList.add('show');
  p.scrollTop=0;   // immer oben öffnen, damit die Reiter-Leiste nicht hinter der Kopfzeile liegt
}
// Reiter-Umschaltung im Admin-Einstellungsmenü
function adminTab(name){
  const bar=el('admin-tabs'); if(bar) bar.querySelectorAll('button').forEach(b=>b.classList.toggle('active', b.dataset.atab===name));
  // nur die Sektions-Karten umschalten – nicht die Reiter-Buttons (die tragen ebenfalls data-atab)
  document.querySelectorAll('#admin-panel section[data-atab]').forEach(sec=>{ sec.style.display=(sec.dataset.atab===name)?'':'none'; });
}
function openSettings(){ openAdminPanel(); }
// Patienteneingabe am Tablet sperren/entsperren (nur Admin)
let _tabletLocked=false;
async function renderTabletLock(){
  const btn=el('tablet-lock-btn'), st=el('tablet-lock-status'); if(!btn||!st) return;
  try{ _tabletLocked = await isPatientInputLocked(); }catch(e){ _tabletLocked=false; }
  if(_tabletLocked){
    st.textContent=LX('Gesperrt – Patienten können sich nicht anmelden','Locked — patients cannot register');
    st.className='lock-status locked';
    btn.textContent=LX('Eingabe entsperren','Unlock input');
    btn.classList.remove('btn-lock'); btn.classList.add('btn-unlock');
  } else {
    st.textContent=LX('Freigegeben – Selbstanmeldung möglich','Open — self-registration possible');
    st.className='lock-status open';
    btn.textContent=LX('Eingabe sperren','Lock input');
    btn.classList.remove('btn-unlock'); btn.classList.add('btn-lock');
  }
}
async function togglePatientInputLock(){
  const btn=el('tablet-lock-btn'); if(btn) btn.disabled=true;
  try{
    const next=!_tabletLocked;
    const { error } = await setPatientInputLocked(next);
    if(error){ adminMsg((LX('Konnte Sperre nicht speichern: ','Could not save lock: '))+(error.message||error),'err'); }
    else { _tabletLocked=next; if(typeof dbAuditLog==='function') dbAuditLog('patient_input_lock', next?'locked':'unlocked'); }
  }catch(e){ adminMsg(String(e&&e.message||e),'err'); }
  if(btn) btn.disabled=false;
  renderTabletLock();
}
function closeAdminPanel(){ const p=el('admin-panel'); if(p) p.classList.remove('show'); }
function adminMsg(text,type){ const e=el('admin-msg'); if(e) e.innerHTML = text?('<div class="msg '+(type||'err')+'">'+text+'</div>'):''; }

// Nutzer-Board: Spalten „Pending" + Rollen; Freischalten per Drag&Drop
const ADMIN_BOARD=[
  {role:'', de:'Wartet auf Freischaltung', en:'Awaiting approval', fr:'En attente d\'activation'},
  {role:'admin', de:'Admin', en:'Admin', fr:'Admin'},
  {role:'arzt', de:'Arzt / Ärztin', en:'Doctor', fr:'Médecin'},
  {role:'mfa', de:'MFA', en:'MFA', fr:'Assistant(e) médical(e)'},
  {role:'kasse', de:'Kasse', en:'Reception', fr:'Accueil'}
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
    html+='<div class="ab-sec-h">'+L2(col)+' <span class="count-pill">'+list.length+'</span></div>';
    html+='<div class="ab-rows">';
    if(!list.length){ html+='<div class="ab-empty">'+(pending?(LX('Keine offenen Registrierungen','None')):(LX('Person hierher ziehen …','Drop person here …')))+'</div>'; }
    list.forEach(u=>{
      const nm=((u.title?u.title+' ':'')+(u.full_name||'—')).trim();
      const gl=genderLabel(u.gender,'de');
      html+='<div class="ab-row" draggable="true" data-uid="'+u.id+'" ondragstart="adminUserDragStart(event,\''+u.id+'\')">'+initialsCircle(u.full_name||u.email,u.role,u.gender)+'<div class="ab-main"><div class="ab-name">'+_esc(nm)+'</div><div class="ab-sub">'+_esc(u.email||'')+(gl?' · '+gl:'')+'</div></div><span class="icon-btn del" title="Zugang deaktivieren" onclick="adminSoftDeleteUI(\''+u.id+'\')">✕</span></div>';
    });
    html+='</div></div>';
  });
  if(deletedUsers.length > 0) {
    html+='<div class="ab-sec ab-deleted">';
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