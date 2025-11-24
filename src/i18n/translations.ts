export type Language = 'en' | 'sq' | 'de' | 'fr';

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
      title: 'Premium Car Rental',
      subtitle: 'Experience luxury and comfort with our premium fleet. Your journey begins here.',
      whyChooseUs: 'Why Choose Us?',
      benefit1: 'Premium vehicles maintained to perfection',
      benefit2: 'Flexible rental periods and competitive pricing',
      benefit3: '24/7 customer support and roadside assistance',
      contactBtn: 'Contact Us Now',
    },
    cars: {
      title: 'Our Premium Fleet',
      subtitle: 'Choose from our carefully curated collection of luxury vehicles',
      allFilter: 'All',
      sedanFilter: 'Sedan',
      suvFilter: 'SUV',
      luxuryFilter: 'Luxury',
      electricFilter: 'Electric',
      premiumService: 'Premium Service',
      premiumServiceDesc: 'Personalized experience with dedicated support',
      businessReady: 'Business Ready',
      businessReadyDesc: 'Perfect for corporate events and business travel',
      quickBooking: 'Quick Booking',
      quickBookingDesc: 'Fast and easy reservation process',
      bookBtn: 'Book Now',
    },
    location: {
      title: 'Visit Our Location',
      subtitle: 'Find us at our convenient location',
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
      subtitle: 'Fill out the form below and we\'ll get back to you as soon as possible',
      name: 'Full Name',
      emailLabel: 'Email Address',
      phoneLabel: 'Phone Number',
      date: 'Rental Date',
      message: 'Your Message',
      submit: 'Send Message',
      success: 'Thank you for your inquiry! We will contact you shortly.',
    },
    footer: {
      description: 'Experience luxury and comfort with our premium fleet of vehicles.',
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
      copyright: '© 2024 Premium Car Rental. All rights reserved.',
    },
  },
  sq: {
    hero: {
      title: 'Qira Premium e Makinave',
      subtitle: 'Përjetoni luksin dhe komoditetin me flotën tonë premium. Udhëtimi juaj fillon këtu.',
      whyChooseUs: 'Pse Të Zgjedhni Ne?',
      benefit1: 'Automjete premium të mirëmbajturat në përfeksion',
      benefit2: 'Periudha fleksibël qiraje dhe çmimet konkurruese',
      benefit3: 'Mbështetje 24/7 dhe asistencë në rrugë',
      contactBtn: 'Na Kontaktoni Tani',
    },
    cars: {
      title: 'Flota Jonë Premium',
      subtitle: 'Zgjidhni nga koleksioni ynë i kujdesshëm i automjeteve luksoze',
      allFilter: 'Të Gjitha',
      sedanFilter: 'Sedan',
      suvFilter: 'SUV',
      luxuryFilter: 'Luksi',
      electricFilter: 'Elektrik',
      premiumService: 'Shërbim Premium',
      premiumServiceDesc: 'Përvojë personalizuar me mbështetje të dedikuar',
      businessReady: 'Gati për Biznes',
      businessReadyDesc: 'E përsosur për ngjarjet korporative dhe udhëtime biznesi',
      quickBooking: 'Rezervim i Shpejtë',
      quickBookingDesc: 'Proces rezervimi i shpejtë dhe i lehtë',
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
      subtitle: 'Plotësoni formularin më poshtë dhe ne do t\'ju kontaktojmë sa më shpejt të jetë e mundur',
      name: 'Emri i Plotë',
      emailLabel: 'Adresa Email',
      phoneLabel: 'Numri i Telefonit',
      date: 'Data e Qirasë',
      message: 'Mesazhi Juaj',
      submit: 'Dërgoni Mesazhin',
      success: 'Faleminderit për kërkesën tuaj! Ne do t\'ju kontaktojmë në brenda pak kohësh.',
    },
    footer: {
      description: 'Përjetoni luksin dhe komoditetin me flotën tonë premium të automjeteve.',
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
      copyright: '© 2024 Qira Premium e Makinave. Të gjitha të drejtat e rezervuara.',
    },
  },
  de: {
    hero: {
      title: 'Premium-Autovermietung',
      subtitle: 'Erleben Sie Luxus und Komfort mit unserer Premium-Flotte. Ihre Reise beginnt hier.',
      whyChooseUs: 'Warum Uns Wählen?',
      benefit1: 'Premium-Fahrzeuge in perfektem Zustand gewartet',
      benefit2: 'Flexible Mietdauern und wettbewerbsfähige Preise',
      benefit3: '24/7-Kundenunterstützung und Pannenhilfe',
      contactBtn: 'Kontaktieren Sie Uns Jetzt',
    },
    cars: {
      title: 'Unsere Premium-Flotte',
      subtitle: 'Wählen Sie aus unserer sorgfältig zusammengestellten Sammlung von Luxusfahrzeugen',
      allFilter: 'Alle',
      sedanFilter: 'Limousine',
      suvFilter: 'SUV',
      luxuryFilter: 'Luxus',
      electricFilter: 'Elektrisch',
      premiumService: 'Premium-Service',
      premiumServiceDesc: 'Personalisierte Erfahrung mit dedizierter Unterstützung',
      businessReady: 'Geschäftsbereit',
      businessReadyDesc: 'Perfekt für Unternehmensveranstaltungen und Geschäftsreisen',
      quickBooking: 'Schnelle Buchung',
      quickBookingDesc: 'Schneller und einfacher Buchungsprozess',
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
      subtitle: 'Füllen Sie das untenstehende Formular aus und wir melden uns so bald wie möglich bei Ihnen',
      name: 'Vollständiger Name',
      emailLabel: 'Email-Adresse',
      phoneLabel: 'Telefonnummer',
      date: 'Mietdatum',
      message: 'Ihre Nachricht',
      submit: 'Nachricht Senden',
      success: 'Vielen Dank für Ihre Anfrage! Wir melden uns in Kürze bei Ihnen.',
    },
    footer: {
      description: 'Erleben Sie Luxus und Komfort mit unserer Premium-Fahrzeugflotte.',
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
      copyright: '© 2024 Premium-Autovermietung. Alle Rechte vorbehalten.',
    },
  },
  fr: {
    hero: {
      title: 'Location de Voitures Premium',
      subtitle: 'Découvrez le luxe et le confort avec notre flotte premium. Votre voyage commence ici.',
      whyChooseUs: 'Pourquoi Nous Choisir?',
      benefit1: 'Véhicules premium entretenus à la perfection',
      benefit2: 'Périodes de location flexibles et tarifs compétitifs',
      benefit3: 'Support client 24/7 et assistance routière',
      contactBtn: 'Nous Contacter Maintenant',
    },
    cars: {
      title: 'Notre Flotte Premium',
      subtitle: 'Choisissez parmi notre collection soigneusement sélectionnée de véhicules de luxe',
      allFilter: 'Tous',
      sedanFilter: 'Berline',
      suvFilter: 'SUV',
      luxuryFilter: 'Luxe',
      electricFilter: 'Électrique',
      premiumService: 'Service Premium',
      premiumServiceDesc: 'Expérience personnalisée avec support dédié',
      businessReady: 'Prêt pour les Affaires',
      businessReadyDesc: 'Parfait pour les événements d\'entreprise et les voyages d\'affaires',
      quickBooking: 'Réservation Rapide',
      quickBookingDesc: 'Processus de réservation rapide et facile',
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
      subtitle: 'Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible',
      name: 'Nom Complet',
      emailLabel: 'Adresse Email',
      phoneLabel: 'Numéro de Téléphone',
      date: 'Date de Location',
      message: 'Votre Message',
      submit: 'Envoyer le Message',
      success: 'Merci pour votre demande! Nous vous recontacterons bientôt.',
    },
    footer: {
      description: 'Découvrez le luxe et le confort avec notre flotte de véhicules premium.',
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
      copyright: '© 2024 Location de Voitures Premium. Tous droits réservés.',
    },
  },
};
