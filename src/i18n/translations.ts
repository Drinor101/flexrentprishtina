export type Language = 'en' | 'sq' | 'de' | 'fr' | 'it';

export interface Translations {
  hero: {
    title: string;
    subtitle: string;
    whyChooseUs: string;
    benefit1: string;
    benefit2: string;
    benefit3: string;
    contactBtn: string;
  };
  cars: {
    title: string;
    subtitle: string;
    allFilter: string;
    sedanFilter: string;
    suvFilter: string;
    luxuryFilter: string;
    electricFilter: string;
    premiumService: string;
    premiumServiceDesc: string;
    businessReady: string;
    businessReadyDesc: string;
    quickBooking: string;
    quickBookingDesc: string;
    bookBtn: string;
  };
  location: {
    title: string;
    subtitle: string;
    address: string;
    hours: string;
    phone: string;
    email: string;
    mondayFriday: string;
    saturday: string;
    sunday: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    emailLabel: string;
    phoneLabel: string;
    date: string;
    message: string;
    submit: string;
    success: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    services: string;
    followUs: string;
    about: string;
    fleet: string;
    servicesLink: string;
    contactLink: string;
    dailyRentals: string;
    corporatePackages: string;
    airportTransfer: string;
    chauffeurService: string;
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    hero: {
      title: 'Flex Rent Prishtina',
      subtitle: 'Elevate your travel experience with our meticulously maintained premium fleet. Where luxury meets reliability, your journey begins.',
      whyChooseUs: 'Why Choose Us?',
      benefit1: 'Impeccably maintained premium vehicles with the latest safety features',
      benefit2: 'Flexible rental terms with transparent, competitive pricing tailored to your needs',
      benefit3: 'Round-the-clock customer support and comprehensive roadside assistance',
      contactBtn: 'Reserve Your Vehicle',
    },
    cars: {
      title: 'Our Premium Fleet',
      subtitle: 'Discover our handpicked selection of luxury vehicles, each meticulously maintained to ensure your comfort and safety',
      allFilter: 'All Vehicles',
      sedanFilter: 'Sedan',
      suvFilter: 'SUV',
      luxuryFilter: 'Luxury',
      electricFilter: 'Electric',
      premiumService: 'Premium Service',
      premiumServiceDesc: 'Dedicated concierge support ensuring a seamless, personalized experience from booking to return',
      businessReady: 'Business Ready',
      businessReadyDesc: 'Professional fleet solutions designed for corporate travel, events, and executive transportation needs',
      quickBooking: 'Instant Booking',
      quickBookingDesc: 'Streamlined reservation process with instant confirmation and flexible payment options',
      bookBtn: 'Book Now',
    },
    location: {
      title: 'Visit Our Location',
      subtitle: 'Conveniently located in the heart of the city, we\'re here to serve you',
      address: 'Address',
      hours: 'Business Hours',
      phone: 'Phone',
      email: 'Email',
      mondayFriday: 'Monday - Friday: 8:00 AM - 8:00 PM',
      saturday: 'Saturday: 9:00 AM - 6:00 PM',
      sunday: 'Sunday: 10:00 AM - 4:00 PM',
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Have questions or ready to book? Complete the form below and our team will respond within 24 hours',
      name: 'Full Name',
      emailLabel: 'Email Address',
      phoneLabel: 'Phone Number',
      date: 'Preferred Rental Date',
      message: 'Additional Details or Special Requests',
      submit: 'Submit Inquiry',
      success: 'Thank you for your inquiry! Our team will contact you within 24 hours to confirm your reservation.',
    },
    footer: {
      description: 'Your trusted partner for premium vehicle rentals. Experience unparalleled luxury, reliability, and service excellence.',
      quickLinks: 'Quick Links',
      services: 'Services',
      followUs: 'Follow Us',
      about: 'About Us',
      fleet: 'Our Fleet',
      servicesLink: 'Services',
      contactLink: 'Contact',
      dailyRentals: 'Daily Rentals',
      corporatePackages: 'Corporate Packages',
      airportTransfer: 'Airport Transfer',
      chauffeurService: 'Chauffeur Service',
      copyright: '© 2025 Flex Rent Prishtina. All rights reserved.',
    },
  },
  sq: {
    hero: {
      title: 'Flex Rent Prishtina',
      subtitle: 'Ngritni përvojën tuaj të udhëtimit me flotën tonë premium të mirëmbajtur me kujdes. Ku luksi takohet me besueshmërinë, udhëtimi juaj fillon.',
      whyChooseUs: 'Pse Të Zgjedhni Ne?',
      benefit1: 'Automjete premium të mirëmbajtura në përfeksion me karakteristika të fundit të sigurisë',
      benefit2: 'Kushte fleksibël qiraje me çmime transparente dhe konkurruese të përshtatura me nevojat tuaja',
      benefit3: 'Mbështetje klienti 24/7 dhe asistencë gjithëpërfshirëse në rrugë',
      contactBtn: 'Rezervoni Automjetin Tuaj',
    },
    cars: {
      title: 'Flota Jonë Premium',
      subtitle: 'Zbuloni përzgjedhjen tonë të zgjedhur me dorë të automjeteve luksoze, secili i mirëmbajtur me kujdes për të siguruar komoditetin dhe sigurinë tuaj',
      allFilter: 'Të Gjitha Automjetet',
      sedanFilter: 'Sedan',
      suvFilter: 'SUV',
      luxuryFilter: 'Luksi',
      electricFilter: 'Elektrik',
      premiumService: 'Shërbim Premium',
      premiumServiceDesc: 'Mbështetje portieri e dedikuar që siguron një përvojë të qetë dhe personalizuar nga rezervimi deri në kthim',
      businessReady: 'Gati për Biznes',
      businessReadyDesc: 'Zgjidhje profesionale flote të dizajnuara për udhëtime korporative, ngjarje dhe nevojat e transportit ekzekutiv',
      quickBooking: 'Rezervim i Menjëhershëm',
      quickBookingDesc: 'Proces i thjeshtuar rezervimi me konfirmim të menjëhershëm dhe opsione pagese fleksibël',
      bookBtn: 'Rezervo Tani',
    },
    location: {
      title: 'Vizitoni Vendndodhjen Tonë',
      subtitle: 'Na gjeni në lokacionin e përshëndetshem',
      address: 'Adresa',
      hours: 'Orari i Punës',
      phone: 'Telefon',
      email: 'Email',
      mondayFriday: 'E hënë - E premte: 08:00 - 20:00',
      saturday: 'E shtunë: 09:00 - 18:00',
      sunday: 'E diel: 10:00 - 16:00',
    },
    contact: {
      title: 'Lidhuni me Ne',
      subtitle: 'Keni pyetje ose jeni gati të rezervoni? Plotësoni formularin më poshtë dhe ekipi ynë do të përgjigjet brenda 24 orëve',
      name: 'Emri i Plotë',
      emailLabel: 'Adresa Email',
      phoneLabel: 'Numri i Telefonit',
      date: 'Data e Preferuar e Qirasë',
      message: 'Detaje Shtesë ose Kërkesa Speciale',
      submit: 'Dërgoni Kërkesën',
      success: 'Faleminderit për kërkesën tuaj! Ekipi ynë do t\'ju kontaktojë brenda 24 orëve për të konfirmuar rezervimin tuaj.',
    },
    footer: {
      description: 'Partneri juaj i besuar për qira automjetesh premium. Përjetoni luksin e paparë, besueshmërinë dhe ekselencën e shërbimit.',
      quickLinks: 'Lidhje të Shpejta',
      services: 'Shërbime',
      followUs: 'Ndiqni Ne',
      about: 'Rreth Nesh',
      fleet: 'Flota Jonë',
      servicesLink: 'Shërbime',
      contactLink: 'Kontakt',
      dailyRentals: 'Qira të Përditshme',
      corporatePackages: 'Paketa Korporative',
      airportTransfer: 'Transferim Aeroporti',
      chauffeurService: 'Shërbim Shofer',
      copyright: '© 2025 Flex Rent Prishtina. Të gjitha të drejtat e rezervuara.',
    },
  },
  de: {
    hero: {
      title: 'Flex Rent Prishtina',
      subtitle: 'Erhöhen Sie Ihr Reiseerlebnis mit unserer sorgfältig gewarteten Premium-Flotte. Wo Luxus auf Zuverlässigkeit trifft, beginnt Ihre Reise.',
      whyChooseUs: 'Warum Uns Wählen?',
      benefit1: 'Makellos gewartete Premium-Fahrzeuge mit neuesten Sicherheitsfeatures',
      benefit2: 'Flexible Mietbedingungen mit transparenten, wettbewerbsfähigen Preisen, die auf Ihre Bedürfnisse zugeschnitten sind',
      benefit3: 'Rund-um-die-Uhr-Kundenunterstützung und umfassende Pannenhilfe',
      contactBtn: 'Fahrzeug Reservieren',
    },
    cars: {
      title: 'Unsere Premium-Flotte',
      subtitle: 'Entdecken Sie unsere handverlesene Auswahl an Luxusfahrzeugen, jedes sorgfältig gewartet, um Ihren Komfort und Ihre Sicherheit zu gewährleisten',
      allFilter: 'Alle Fahrzeuge',
      sedanFilter: 'Limousine',
      suvFilter: 'SUV',
      luxuryFilter: 'Luxus',
      electricFilter: 'Elektrisch',
      premiumService: 'Premium-Service',
      premiumServiceDesc: 'Dedizierte Concierge-Unterstützung für ein nahtloses, personalisiertes Erlebnis von der Buchung bis zur Rückgabe',
      businessReady: 'Geschäftsbereit',
      businessReadyDesc: 'Professionelle Flottenlösungen für Geschäftsreisen, Veranstaltungen und Executive-Transportbedürfnisse',
      quickBooking: 'Sofortige Buchung',
      quickBookingDesc: 'Optimierter Buchungsprozess mit sofortiger Bestätigung und flexiblen Zahlungsoptionen',
      bookBtn: 'Jetzt Buchen',
    },
    location: {
      title: 'Besuchen Sie Unseren Standort',
      subtitle: 'Finden Sie uns an unserer günstigen Lage',
      address: 'Adresse',
      hours: 'Öffnungszeiten',
      phone: 'Telefon',
      email: 'Email',
      mondayFriday: 'Montag - Freitag: 8:00 - 20:00 Uhr',
      saturday: 'Samstag: 9:00 - 18:00 Uhr',
      sunday: 'Sonntag: 10:00 - 16:00 Uhr',
    },
    contact: {
      title: 'Kontaktieren Sie Uns',
      subtitle: 'Haben Sie Fragen oder sind Sie bereit zu buchen? Füllen Sie das untenstehende Formular aus und unser Team wird innerhalb von 24 Stunden antworten',
      name: 'Vollständiger Name',
      emailLabel: 'Email-Adresse',
      phoneLabel: 'Telefonnummer',
      date: 'Bevorzugtes Mietdatum',
      message: 'Zusätzliche Details oder Sonderwünsche',
      submit: 'Anfrage Senden',
      success: 'Vielen Dank für Ihre Anfrage! Unser Team wird Sie innerhalb von 24 Stunden kontaktieren, um Ihre Reservierung zu bestätigen.',
    },
    footer: {
      description: 'Ihr vertrauenswürdiger Partner für Premium-Fahrzeugvermietungen. Erleben Sie unvergleichlichen Luxus, Zuverlässigkeit und Service-Exzellenz.',
      quickLinks: 'Schnelllinks',
      services: 'Dienstleistungen',
      followUs: 'Folgen Sie Uns',
      about: 'Über Uns',
      fleet: 'Unsere Flotte',
      servicesLink: 'Dienstleistungen',
      contactLink: 'Kontakt',
      dailyRentals: 'Tägliche Vermietungen',
      corporatePackages: 'Unternehmenspaket',
      airportTransfer: 'Flughafentransfer',
      chauffeurService: 'Fahrerservice',
      copyright: '© 2025 Flex Rent Prishtina. Alle Rechte vorbehalten.',
    },
  },
  fr: {
      hero: {
        title: 'Flex Rent Prishtina',
      subtitle: 'Élevez votre expérience de voyage avec notre flotte premium méticuleusement entretenue. Où le luxe rencontre la fiabilité, votre voyage commence.',
      whyChooseUs: 'Pourquoi Nous Choisir?',
      benefit1: 'Véhicules premium entretenus à la perfection avec les dernières fonctionnalités de sécurité',
      benefit2: 'Conditions de location flexibles avec tarification transparente et compétitive adaptée à vos besoins',
      benefit3: 'Support client 24/7 et assistance routière complète',
      contactBtn: 'Réserver Votre Véhicule',
    },
    cars: {
      title: 'Notre Flotte Premium',
      subtitle: 'Découvrez notre sélection soigneusement choisie de véhicules de luxe, chacun méticuleusement entretenu pour assurer votre confort et votre sécurité',
      allFilter: 'Tous les Véhicules',
      sedanFilter: 'Berline',
      suvFilter: 'SUV',
      luxuryFilter: 'Luxe',
      electricFilter: 'Électrique',
      premiumService: 'Service Premium',
      premiumServiceDesc: 'Support conciergerie dédié garantissant une expérience fluide et personnalisée de la réservation au retour',
      businessReady: 'Prêt pour les Affaires',
      businessReadyDesc: 'Solutions de flotte professionnelles conçues pour les voyages d\'affaires, événements et besoins de transport exécutif',
      quickBooking: 'Réservation Instantanée',
      quickBookingDesc: 'Processus de réservation rationalisé avec confirmation instantanée et options de paiement flexibles',
      bookBtn: 'Réserver Maintenant',
    },
    location: {
      title: 'Visitez Notre Localisation',
      subtitle: 'Trouvez-nous à notre emplacement pratique',
      address: 'Adresse',
      hours: 'Heures d\'Ouverture',
      phone: 'Téléphone',
      email: 'Email',
      mondayFriday: 'Lundi - Vendredi: 8:00 - 20:00',
      saturday: 'Samedi: 9:00 - 18:00',
      sunday: 'Dimanche: 10:00 - 16:00',
    },
    contact: {
      title: 'Nous Contacter',
      subtitle: 'Avez-vous des questions ou êtes-vous prêt à réserver? Remplissez le formulaire ci-dessous et notre équipe répondra dans les 24 heures',
      name: 'Nom Complet',
      emailLabel: 'Adresse Email',
      phoneLabel: 'Numéro de Téléphone',
      date: 'Date de Location Préférée',
      message: 'Détails Supplémentaires ou Demandes Spéciales',
      submit: 'Envoyer la Demande',
      success: 'Merci pour votre demande! Notre équipe vous contactera dans les 24 heures pour confirmer votre réservation.',
    },
    footer: {
      description: 'Votre partenaire de confiance pour la location de véhicules premium. Découvrez un luxe inégalé, une fiabilité et une excellence de service.',
      quickLinks: 'Liens Rapides',
      services: 'Services',
      followUs: 'Nous Suivre',
      about: 'À Propos de Nous',
      fleet: 'Notre Flotte',
      servicesLink: 'Services',
      contactLink: 'Contact',
      dailyRentals: 'Locations Quotidiennes',
      corporatePackages: 'Forfaits Corporatifs',
      airportTransfer: 'Transfert Aéroport',
      chauffeurService: 'Service de Chauffeur',
      copyright: '© 2025 Flex Rent Prishtina. Tous droits réservés.',
    },
  },
  it: {
    hero: {
      title: 'Flex Rent Prishtina',
      subtitle: 'Eleva la tua esperienza di viaggio con la nostra flotta premium meticolosamente mantenuta. Dove il lusso incontra l\'affidabilità, inizia il tuo viaggio.',
      whyChooseUs: 'Perché Sceglierci?',
      benefit1: 'Veicoli premium mantenuti in modo impeccabile con le ultime caratteristiche di sicurezza',
      benefit2: 'Termini di noleggio flessibili con prezzi trasparenti e competitivi su misura per le tue esigenze',
      benefit3: 'Supporto clienti 24/7 e assistenza stradale completa',
      contactBtn: 'Prenota il Tuo Veicolo',
    },
    cars: {
      title: 'La Nostra Flotta Premium',
      subtitle: 'Scopri la nostra selezione accurata di veicoli di lusso, ognuno meticolosamente mantenuto per garantire il tuo comfort e la tua sicurezza',
      allFilter: 'Tutti i Veicoli',
      sedanFilter: 'Berlina',
      suvFilter: 'SUV',
      luxuryFilter: 'Lusso',
      electricFilter: 'Elettrico',
      premiumService: 'Servizio Premium',
      premiumServiceDesc: 'Supporto concierge dedicato che garantisce un\'esperienza fluida e personalizzata dalla prenotazione al ritorno',
      businessReady: 'Pronto per il Business',
      businessReadyDesc: 'Soluzioni flotta professionali progettate per viaggi aziendali, eventi e esigenze di trasporto esecutivo',
      quickBooking: 'Prenotazione Istantanea',
      quickBookingDesc: 'Processo di prenotazione semplificato con conferma immediata e opzioni di pagamento flessibili',
      bookBtn: 'Prenota Ora',
    },
    location: {
      title: 'Visita la Nostra Sede',
      subtitle: 'Convenientemente situati nel cuore della città, siamo qui per servirti',
      address: 'Indirizzo',
      hours: 'Orari di Apertura',
      phone: 'Telefono',
      email: 'Email',
      mondayFriday: 'Lunedì - Venerdì: 8:00 - 20:00',
      saturday: 'Sabato: 9:00 - 18:00',
      sunday: 'Domenica: 10:00 - 16:00',
    },
    contact: {
      title: 'Contattaci',
      subtitle: 'Hai domande o sei pronto a prenotare? Compila il modulo qui sotto e il nostro team risponderà entro 24 ore',
      name: 'Nome Completo',
      emailLabel: 'Indirizzo Email',
      phoneLabel: 'Numero di Telefono',
      date: 'Data di Noleggio Preferita',
      message: 'Dettagli Aggiuntivi o Richieste Speciali',
      submit: 'Invia Richiesta',
      success: 'Grazie per la tua richiesta! Il nostro team ti contatterà entro 24 ore per confermare la tua prenotazione.',
    },
    footer: {
      description: 'Il tuo partner affidabile per il noleggio di veicoli premium. Sperimenta un lusso senza pari, affidabilità ed eccellenza del servizio.',
      quickLinks: 'Link Rapidi',
      services: 'Servizi',
      followUs: 'Seguici',
      about: 'Chi Siamo',
      fleet: 'La Nostra Flotta',
      servicesLink: 'Servizi',
      contactLink: 'Contatto',
      dailyRentals: 'Noleggi Giornalieri',
      corporatePackages: 'Pacchetti Aziendali',
      airportTransfer: 'Transfer Aeroporto',
      chauffeurService: 'Servizio Autista',
      copyright: '© 2025 Flex Rent Prishtina. Tutti i diritti riservati.',
    },
  },
};
