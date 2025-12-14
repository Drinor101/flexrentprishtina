export type Language = 'en' | 'sq' | 'de' | 'fr' | 'it';

export interface Translations {
  hero: {
    title: string;
    subtitle: string;
    whyChooseUs: string;
    benefit1: string;
    benefit2: string;
    benefit3: string;
    benefit4: string;
    benefit5: string;
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
    vipAirportDelivery: string;
    vipAirportDeliveryDesc: string;
    fullTank: string;
    fullTankDesc: string;
    paymentOnSite: string;
    paymentOnSiteDesc: string;
    bookBtn: string;
    photos: string;
    passenger: string;
    passengers: string;
    bag: string;
    bags: string;
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
  team: {
    title: string;
    subtitle: string;
  };
  about: {
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    emailLabel: string;
    phoneLabel: string;
    carLabel: string;
    dateFrom: string;
    dateTo: string;
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
      whyChooseUs: 'Why Choose Flex Rent Prishtina?',
      benefit1: 'Airport pickup service - We deliver and pick up your vehicle directly at Prishtina International Airport.',
      benefit2: 'Simple and fast booking - One message is enough — we confirm your reservation immediately.',
      benefit3: 'Transparent pricing - No hidden fees. You pay exactly what is advertised.',
      benefit4: 'Professional customer service - Personalized support and 7/7 availability.',
      benefit5: 'Wide choice of vehicles - From economical city cars to premium SUVs.',
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
      vipAirportDelivery: 'VIP Airport Delivery',
      vipAirportDeliveryDesc: 'Get your car directly at the exit of Prishtina airport. Fast, comfortable service without waiting.',
      fullTank: 'Full Tank',
      fullTankDesc: 'You get the car with a full tank. You return it with a full tank.',
      paymentOnSite: 'Payment on Site',
      paymentOnSiteDesc: 'Simple, fast and secure payment during car delivery.',
      bookBtn: 'Book Now',
      photos: 'Photos',
      passenger: 'Passenger',
      passengers: 'Passengers',
      bag: 'Bag',
      bags: 'Bags',
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
    team: {
      title: 'Our Team',
      subtitle: 'Meet our dedicated managers who are here to ensure your rental experience is exceptional',
    },
    about: {
      title: 'Flex Rent Prishtina',
      subtitle: 'Car Rental – Premium Service at Prishtina Airport',
      description1: 'At Flex Rent Prishtina, we provide you with recent, reliable, and carefully maintained vehicles to guarantee an exceptional driving experience.',
      description2: 'Whether you are on a business trip, vacation, or professional travel, we have the ideal car for you.',
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Have questions or ready to book? Complete the form below and our team will respond within 24 hours',
      name: 'Full Name',
      emailLabel: 'Email Address',
      phoneLabel: 'Phone Number',
      carLabel: 'Select Car',
      dateFrom: 'Rental Start Date',
      dateTo: 'Rental End Date',
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
      whyChooseUs: 'Pse Të Zgjedhni Flex Rent Prishtina?',
      benefit1: 'Shërbim marrjeje në aeroport - Ne dorëzojmë dhe marrim automjetin tuaj direkt në Aeroportin Ndërkombëtar të Prishtinës.',
      benefit2: 'Rezervim i thjeshtë dhe i shpejtë - Një mesazh mjafton — ne konfirmojmë rezervimin tuaj menjëherë.',
      benefit3: 'Çmime transparente - Asnjë tarifë e fshehur. Ju paguani saktësisht atë që është shpallur.',
      benefit4: 'Shërbim klienti profesional - Mbështetje e personalizuar dhe disponueshmëri 7/7.',
      benefit5: 'Zgjedhje e gjerë automjetesh - Nga makinat ekonomike urbane deri te SUV-et premium.',
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
      vipAirportDelivery: 'Dorëzim VIP në aeroport',
      vipAirportDeliveryDesc: 'Merrni veturën tuaj direkt në dalje të aeroportit te Prishtinës. Shërbim i shpejtë, i rehatshëm dhe pa pritje.',
      fullTank: 'Rezervuar i mbushur',
      fullTankDesc: 'E merrni veturën me rezervuar të mbushur. E ktheni me rezervuar të mbushur.',
      paymentOnSite: 'Pagesa në vend',
      paymentOnSiteDesc: 'Pagesë e thjeshtë, e shpejtë dhe e sigurt gjatë dorëzimit të veturës.',
      bookBtn: 'Rezervo Tani',
      photos: 'Foto',
      passenger: 'Pasagjer',
      passengers: 'Pasagjerë',
      bag: 'Çantë',
      bags: 'Çanta',
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
    team: {
      title: 'Ekipi Ynë',
      subtitle: 'Takohuni me menaxherët tanë të dedikuar që janë këtu për të siguruar që përvoja juaj e qirasë të jetë e jashtëzakonshme',
    },
    about: {
      title: 'Flex Rent Prishtina',
      subtitle: 'Qira Automjetesh – Shërbim Premium në Aeroportin e Prishtinës',
      description1: 'Tek Flex Rent Prishtina, ne ju ofrojmë automjete të reja, të besueshme dhe të mirëmbajtura me kujdes për të garantuar një përvojë drejtimi të jashtëzakonshme.',
      description2: 'Qoftë në një udhëtim biznesi, pushime ose udhëtim profesional, ne kemi makinën ideale për ju.',
    },
    contact: {
      title: 'Lidhuni me Ne',
      subtitle: 'Keni pyetje ose jeni gati të rezervoni? Plotësoni formularin më poshtë dhe ekipi ynë do të përgjigjet brenda 24 orëve',
      name: 'Emri i Plotë',
      emailLabel: 'Adresa Email',
      phoneLabel: 'Numri i Telefonit',
      carLabel: 'Zgjidhni Makinën',
      dateFrom: 'Data e Fillimit të Qirasë',
      dateTo: 'Data e Mbarimit të Qirasë',
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
      whyChooseUs: 'Warum Flex Rent Prishtina Wählen?',
      benefit1: 'Flughafen-Abholservice - Wir liefern und holen Ihr Fahrzeug direkt am Flughafen Prishtina ab.',
      benefit2: 'Einfache und schnelle Buchung - Eine Nachricht genügt — wir bestätigen Ihre Reservierung sofort.',
      benefit3: 'Transparente Preise - Keine versteckten Gebühren. Sie zahlen genau das, was angekündigt ist.',
      benefit4: 'Professioneller Kundenservice - Personalisierte Betreuung und 7/7 Verfügbarkeit.',
      benefit5: 'Große Auswahl an Fahrzeugen - Von wirtschaftlichen Stadtautos bis zu Premium-SUVs.',
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
      vipAirportDelivery: 'VIP Flughafenlieferung',
      vipAirportDeliveryDesc: 'Erhalten Sie Ihr Auto direkt am Ausgang des Flughafens Prishtina. Schneller, komfortabler Service ohne Wartezeit.',
      fullTank: 'Voller Tank',
      fullTankDesc: 'Sie erhalten das Auto mit vollem Tank. Sie geben es mit vollem Tank zurück.',
      paymentOnSite: 'Zahlung vor Ort',
      paymentOnSiteDesc: 'Einfache, schnelle und sichere Zahlung bei der Autolieferung.',
      bookBtn: 'Jetzt Buchen',
      photos: 'Fotos',
      passenger: 'Passagier',
      passengers: 'Passagiere',
      bag: 'Tasche',
      bags: 'Taschen',
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
    team: {
      title: 'Unser Team',
      subtitle: 'Lernen Sie unsere engagierten Manager kennen, die hier sind, um sicherzustellen, dass Ihr Miet-Erlebnis außergewöhnlich ist',
    },
    about: {
      title: 'Flex Rent Prishtina',
      subtitle: 'Autovermietung – Premium-Service am Flughafen Prishtina',
      description1: 'Bei Flex Rent Prishtina stellen wir Ihnen aktuelle, zuverlässige und sorgfältig gewartete Fahrzeuge zur Verfügung, um ein außergewöhnliches Fahrerlebnis zu gewährleisten.',
      description2: 'Ob Sie auf Geschäftsreise, im Urlaub oder auf Dienstreise sind, wir haben das ideale Auto für Sie.',
    },
    contact: {
      title: 'Kontaktieren Sie Uns',
      subtitle: 'Haben Sie Fragen oder sind Sie bereit zu buchen? Füllen Sie das untenstehende Formular aus und unser Team wird innerhalb von 24 Stunden antworten',
      name: 'Vollständiger Name',
      emailLabel: 'Email-Adresse',
      phoneLabel: 'Telefonnummer',
      carLabel: 'Auto Auswählen',
      dateFrom: 'Mietbeginn',
      dateTo: 'Mietende',
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
      whyChooseUs: 'Pourquoi choisir Flex Rent Prishtina ?',
      benefit1: 'Service de prise en charge à l\'aéroport - Nous livrons et récupérons votre véhicule directement à l\'Aéroport International de Prishtina.',
      benefit2: 'Réservation simple et rapide - Un message suffit — nous confirmons votre réservation immédiatement.',
      benefit3: 'Prix transparents - Aucun frais caché. Vous payez exactement ce qui est annoncé.',
      benefit4: 'Service client professionnel - Accompagnement personnalisé et disponibilité 7j/7.',
      benefit5: 'Large choix de véhicules - Des citadines économiques aux SUV premium.',
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
      vipAirportDelivery: 'Livraison VIP à l\'aéroport',
      vipAirportDeliveryDesc: 'Récupérez votre véhicule directement à la sortie de l\'aéroport de Prishtina. Un service rapide, confortable et sans attente.',
      fullTank: 'Plein de carburant inclus',
      fullTankDesc: 'Vous prenez le véhicule avec le plein, vous le rendez avec le plein.',
      paymentOnSite: 'Paiement sur place',
      paymentOnSiteDesc: 'Un règlement simple, rapide et sécurisé effectué lors de la remise du véhicule.',
      bookBtn: 'Réserver Maintenant',
      photos: 'Photos',
      passenger: 'Passager',
      passengers: 'Passagers',
      bag: 'Sac',
      bags: 'Sacs',
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
    team: {
      title: 'Notre Équipe',
      subtitle: 'Rencontrez nos gestionnaires dévoués qui sont là pour garantir que votre expérience de location soit exceptionnelle',
    },
    about: {
      title: 'Flex Rent Prishtina',
      subtitle: 'Location de voitures – Service premium à l\'aéroport de Prishtina',
      description1: 'Chez Flex Rent Prishtina, nous mettons à votre disposition des véhicules récents, fiables et soigneusement entretenus pour garantir une expérience de conduite exceptionnelle.',
      description2: 'Que vous soyez en voyage d\'affaires, en vacances ou en déplacement professionnel, nous avons la voiture idéale pour vous.',
    },
    contact: {
      title: 'Nous Contacter',
      subtitle: 'Avez-vous des questions ou êtes-vous prêt à réserver? Remplissez le formulaire ci-dessous et notre équipe répondra dans les 24 heures',
      name: 'Nom Complet',
      emailLabel: 'Adresse Email',
      phoneLabel: 'Numéro de Téléphone',
      carLabel: 'Sélectionner la Voiture',
      dateFrom: 'Date de Début de Location',
      dateTo: 'Date de Fin de Location',
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
      whyChooseUs: 'Perché Scegliere Flex Rent Prishtina?',
      benefit1: 'Servizio di ritiro in aeroporto - Consegniamo e ritiriamo il tuo veicolo direttamente all\'Aeroporto Internazionale di Prishtina.',
      benefit2: 'Prenotazione semplice e veloce - Un messaggio è sufficiente — confermiamo la tua prenotazione immediatamente.',
      benefit3: 'Prezzi trasparenti - Nessun costo nascosto. Paghi esattamente ciò che è pubblicizzato.',
      benefit4: 'Servizio clienti professionale - Supporto personalizzato e disponibilità 7/7.',
      benefit5: 'Ampia scelta di veicoli - Dalle auto cittadine economiche ai SUV premium.',
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
      vipAirportDelivery: 'Consegna VIP in aeroporto',
      vipAirportDeliveryDesc: 'Ritira la tua auto direttamente all\'uscita dell\'aeroporto di Prishtina. Servizio veloce, comodo e senza attese.',
      fullTank: 'Serbatoio pieno',
      fullTankDesc: 'Ricevi l\'auto con il serbatoio pieno. La restituisci con il serbatoio pieno.',
      paymentOnSite: 'Pagamento sul posto',
      paymentOnSiteDesc: 'Pagamento semplice, veloce e sicuro durante la consegna dell\'auto.',
      bookBtn: 'Prenota Ora',
      photos: 'Foto',
      passenger: 'Passeggero',
      passengers: 'Passeggeri',
      bag: 'Borsa',
      bags: 'Borse',
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
    team: {
      title: 'Il Nostro Team',
      subtitle: 'Incontra i nostri manager dedicati che sono qui per garantire che la tua esperienza di noleggio sia eccezionale',
    },
    about: {
      title: 'Flex Rent Prishtina',
      subtitle: 'Noleggio auto – Servizio premium all\'aeroporto di Prishtina',
      description1: 'Presso Flex Rent Prishtina, mettiamo a tua disposizione veicoli recenti, affidabili e accuratamente mantenuti per garantire un\'esperienza di guida eccezionale.',
      description2: 'Che tu sia in viaggio d\'affari, in vacanza o in trasferta professionale, abbiamo l\'auto ideale per te.',
    },
    contact: {
      title: 'Contattaci',
      subtitle: 'Hai domande o sei pronto a prenotare? Compila il modulo qui sotto e il nostro team risponderà entro 24 ore',
      name: 'Nome Completo',
      emailLabel: 'Indirizzo Email',
      phoneLabel: 'Numero di Telefono',
      carLabel: 'Seleziona Auto',
      dateFrom: 'Data di Inizio Noleggio',
      dateTo: 'Data di Fine Noleggio',
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
