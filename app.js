const products = [
  {
    id: "camper-classic-1",
    type: "camper",
    title: { pl: "Przyczepa Classic 1", en: "Classic Caravan 1" },
    short: { pl: "Dla max 4 osób • Długość 5.2m", en: "For up to 4 guests • Length 5.2m" },
    description: {
      pl: "Bliźniacza przyczepa Classic idealna dla par lub rodzin 2+2. Posiada w pełni wyposażony aneks kuchenny, klimatyzację, ogrzewanie gazowe, osobną sypialnię oraz łazienkę z prysznicem.",
      en: "Classic twin caravan perfect for couples or 2+2 families. Features a fully equipped kitchenette, air conditioning, gas heating, separate bedroom, and a bathroom with shower."
    },
    image: "assets/caravan_1.jpg",
    tourImage: "assets/panorama_classic.png",
    priceLow: 250,
    priceHigh: 350,
    specs: {
      pl: ["4 Miejsca", "Klimatyzacja", "Ogrzewanie gazowe", "Aneks kuchenny", "Długość 5.2m", "DMC 1300 kg"],
      en: ["Sleeps 4", "Air Conditioning", "Gas Heating", "Kitchenette", "Length 5.2m", "GVWR 1300 kg"]
    }
  },
  {
    id: "camper-classic-2",
    type: "camper",
    title: { pl: "Przyczepa Classic 2", en: "Classic Caravan 2" },
    short: { pl: "Bliźniaczy model • Osobny kalendarz", en: "Twin caravan • Separate calendar" },
    description: {
      pl: "Druga z naszych bliźniaczych przyczep Classic. Oferuje ten sam wysoki standard wykończenia i przytulny układ wnętrza. Posiada oddzielny kalendarz rezerwacji dla Twojej wygody.",
      en: "The second of our twin Classic caravans. Offers the same high standard of finishing and cozy layout. Features a separate booking calendar for your convenience."
    },
    image: "assets/caravan_1.jpg",
    tourImage: "assets/panorama_classic.png",
    priceLow: 250,
    priceHigh: 350,
    specs: {
      pl: ["4 Miejsca", "Klimatyzacja", "Ogrzewanie gazowe", "Aneks kuchenny", "Długość 5.2m", "DMC 1300 kg"],
      en: ["Sleeps 4", "Air Conditioning", "Gas Heating", "Kitchenette", "Length 5.2m", "GVWR 1300 kg"]
    }
  },
  {
    id: "camper-family",
    type: "camper",
    title: { pl: "Przyczepa Family", en: "Family Caravan" },
    short: { pl: "Luksusowa • Dla max 6 osób • Ogrzewanie zimowe", en: "Luxury • For up to 6 guests • Alde heating" },
    description: {
      pl: "Przestronna przyczepa klasy premium przeznaczona dla większych rodzin. Wyposażona w zaawansowane ogrzewanie zimowe Alde, klimatyzację, piekarnik, przestronną lodówkę, zasilanie solarne oraz dużą markizę.",
      en: "Spacious premium-class caravan designed for larger families. Features advanced Alde winter heating, air conditioning, oven, large refrigerator, solar power, and a spacious awning."
    },
    image: "assets/caravan_2.jpg",
    tourImage: "assets/panorama_family.png",
    priceLow: 320,
    priceHigh: 450,
    specs: {
      pl: ["6 Miejsc", "Klimatyzacja", "Ogrzewanie Alde", "Kuchnia z piekarnikiem", "Długość 6.8m", "Panele solarne"],
      en: ["Sleeps 6", "Air Conditioning", "Alde Heating", "Oven & Kitchen", "Length 6.8m", "Solar Panels"]
    }
  },
  {
    id: "boat-1",
    type: "boat",
    title: { pl: "Łódź Motorowa Classic", en: "Classic Motorboat" },
    short: { pl: "Silnik 50 HP • Bez patentu • 6-osobowa", en: "50 HP Engine • No license • Sleeps 6" },
    description: {
      pl: "Wygodna łódź motorowa przeznaczona do rekreacyjnego pływania. Sterowanie jest intuicyjne i nie wymaga posiadania patentu motorowodnego. Wyposażona w echosondę i wygodne materace pokładowe.",
      en: "Comfortable motorboat designed for recreational cruising. Control is intuitive and does not require a motorboat license. Equipped with a fishfinder and comfortable deck mattresses."
    },
    image: "assets/boat_classic.png",
    priceLow: 450,
    priceHigh: 600,
    specs: {
      pl: ["Bez patentu", "Silnik 50 HP", "Max 6 osób", "Długość 5.5m", "Echosonda GPS", "Daszek Bimini"],
      en: ["No license required", "50 HP Engine", "Max 6 guests", "Length 5.5m", "GPS Fishfinder", "Bimini Top"]
    }
  },
  {
    id: "boat-2",
    type: "boat",
    title: { pl: "Łódź Motorowa Premium", en: "Premium Motorboat" },
    short: { pl: "Silnik 150 HP • Wymagany patent • Kabina", en: "150 HP Engine • License required • Cabin" },
    description: {
      pl: "Szybka i luksusowa łódź motorowa dla wymagających. Wyposażona w mocny silnik 150 HP, kabinę sypialną, lodówkę turystyczną, sprzęt audio oraz platformę kąpielową. Wymagany patent motorowodny.",
      en: "Fast and luxurious motorboat for demanding cruisers. Features a powerful 150 HP engine, sleeping cabin, travel cooler, sound system, and swim platform. Motorboat license required."
    },
    image: "assets/boat_premium.png",
    priceLow: 600,
    priceHigh: 800,
    specs: {
      pl: ["Patent wymagany", "Silnik 150 HP", "Max 8 osób", "Długość 7.2m", "Kabina 2-osobowa", "System audio BT"],
      en: ["License required", "150 HP Engine", "Max 8 guests", "Length 7.2m", "2-person Cabin", "BT Audio System"]
    }
  }
];

const news = [
  {
    date: { pl: "17 Czerwca 2026", en: "June 17, 2026" },
    title: { pl: "Nowe logo i wizerunek Eco Camp", en: "New logo and identity of Eco Camp" },
    text: {
      pl: "Z przyjemnością prezentujemy naszą nową identyfikację wizualną! Nowe logo łączy motyw leśny z bliskością wody i symbolem kempingu, odzwierciedlając ekologiczny i nowoczesny charakter naszej floty przyczep i łodzi.",
      en: "We are thrilled to present our new brand identity! The new logo blends forest motifs, proximity to water, and camping symbols, reflecting the eco-friendly and premium nature of our caravans and boats."
    },
    image: "assets/logo.png"
  },
  {
    date: { pl: "12 Czerwca 2026", en: "June 12, 2026" },
    title: { pl: "Interaktywne spacery 360° już online!", en: "Interactive 360° virtual tours now online!" },
    text: {
      pl: "Już teraz możesz wejść do wnętrza naszych przyczep Classic oraz Family bez wychodzenia z domu! Uruchom spacer 360° bezpośrednio w zakładce Spacery Wirtualne i zobacz każdy detal luksusowego wykończenia.",
      en: "You can now step inside our Classic and Family caravans without leaving your home! Launch the 360° virtual tour directly under Virtual Tours section and see every detail of our luxury finish."
    },
    image: "assets/news_tours.png"
  },
  {
    date: { pl: "01 Czerwca 2026", en: "June 1, 2026" },
    title: { pl: "Rozpoczęcie sezonu letniego 2026", en: "Summer Season 2026 officially open" },
    text: {
      pl: "Wszystkie przyczepy i łodzie są w pełni przygotowane, wyczyszczone i gotowe do odbioru. Kalendarze rezerwacji na czerwiec, lipiec i sierpień są już aktywne. Zapraszamy do rezerwacji wolnych terminów!",
      en: "All caravans and boats are fully prepared, detailed, and ready for pickup. Booking calendars for June, July, and August are now active. Book your vacation dates today!"
    },
    image: "assets/news_season.png"
  }
];

const faq = [
  {
    question: { pl: "Jak przebiega proces rezerwacji?", en: "How does the booking process work?" },
    answer: {
      pl: "Wybierasz sprzęt w kalendarzu, zaznaczasz zakres dat (od-do) i wypełniasz prosty formularz kontaktowy. Zapytanie trafia na nasz e-mail. Potwierdzamy dostępność ręcznie, a następnie przesyłamy dane do wpłaty zadatku (30%). Po zaksięgowaniu wpłaty, termin zostaje zablokowany jako zajęty.",
      en: "Select your equipment in the calendar, choose the date range (check-in/check-out) and fill in the request form. We confirm availability manually and send you bank details for a 30% deposit payment. Once paid, the dates are locked as booked."
    }
  },
  {
    question: { pl: "Ile wynosi zadatek i jak go opłacić?", en: "How much is the deposit and how do I pay it?" },
    answer: {
      pl: "Zadatek wynosi 30% całkowitej kwoty wynajmu (nasz kalkulator wylicza go automatycznie podczas zaznaczania dat). Wpłaty należy dokonać przelewem tradycyjnym lub BLIKiem na telefon w ciągu 24 godzin od otrzymania maila z potwierdzeniem rezerwacji.",
      en: "The deposit is 30% of the total rental cost (automatically calculated in the booking widget). Payment should be made via bank transfer or BLIK phone transfer within 24 hours of receiving the booking confirmation email."
    }
  },
  {
    question: { pl: "Czy do prowadzenia łodzi wymagane są uprawnienia?", en: "Do I need a license to drive the boats?" },
    answer: {
      pl: "Łódź Motorowa Classic (silnik 50 HP) może być prowadzona bez żadnego patentu motorowodnego – przed wypłynięciem przeprowadzamy krótkie szkolenie z obsługi. Do prowadzenia Łodzi Motorowej Premium (silnik 150 HP) wymagany jest ważny patent sternika motorowodnego.",
      en: "The Classic Motorboat (50 HP) can be operated without any license – we provide a quick operating tutorial before you set sail. To drive the Premium Motorboat (150 HP), a valid motorboat skipper license is required."
    }
  },
  {
    question: { pl: "Jaki jest minimalny okres wynajmu?", en: "What is the minimum rental period?" },
    answer: {
      pl: "Dla przyczep kempingowych minimalny okres wynajmu wynosi 3 doby. Łodzie motorowe wynajmujemy na dni (minimalny okres to 1 dzień, bez możliwości rezerwacji na godziny).",
      en: "For camper caravans, the minimum rental period is 3 nights. Motorboats are rented on a daily basis (minimum 1 full day, hourly booking is not available)."
    }
  },
  {
    question: { pl: "Czy pobierana jest kaucja zwrotna?", en: "Is there a refundable security deposit?" },
    answer: {
      pl: "Tak, przy odbiorze sprzętu pobierana jest kaucja zwrotna w gotówce na zabezpieczenie ewentualnych szkód. Wynosi ona 1000 zł dla przyczep Classic i łodzi Classic, oraz 1500 zł dla przyczepy Family i łodzi Premium. Kaucja jest zwracana w całości przy bezszkodowym zwrocie.",
      en: "Yes, a refundable security deposit is collected in cash upon pickup. It is 1000 PLN for Classic caravans and Classic boats, and 1500 PLN for Family caravans and Premium boats. It is fully refunded if everything is returned in order."
    }
  }
];

const translations = {
  pl: {
    skipLink: "Przejdź do treści",
    navOffer: "Oferta",
    navReservations: "Rezerwacje",
    navNews: "Aktualności",
    navFaq: "FAQ",
    navContact: "Kontakt",
    navAdmin: "Admin",
    fontToggle: "A+",
    contrastToggle: "Kontrast",
    heroEyebrow: "Eco Camp • Wynajem Przyczep & Łodzi",
    heroTitle: "Luksusowy wypoczynek nad wodą, na Twoich zasadach.",
    heroLead: "Wybierz luksusową przyczepę kempingową lub szybką łódź motorową na Mazurach. Zaznacz zakres dat na interaktywnym kalendarzu i prześlij zapytanie. Rezerwację potwierdzamy ręcznie, bez zbędnych pośredników i prowizji.",
    heroPrimary: "Zarezerwuj teraz",
    heroSecondary: "Zobacz ofertę",
    heroSearchBtn: "Sprawdź dostępność",
    statTrailers: "luksusowe przyczepy",
    statBoats: "łodzie motorowe",
    statTours: "spacery 360°",
    stepOneTitle: "1. Wybierz sprzęt",
    stepOneText: "Wybierz komfortową przyczepę dla rodziny lub zwrotną łódź motorową.",
    stepTwoTitle: "2. Zaznacz zakres dat",
    stepTwoText: "Kliknij na kalendarzu dzień początkowy (od) oraz końcowy (do).",
    stepThreeTitle: "3. Odbierz i wypoczywaj",
    stepThreeText: "Wpłać 30% zadatku przelewem, a my przygotujemy wszystko na Twój przyjazd.",
    offerEyebrow: "Nasza Flota",
    offerTitle: "Wybierz swój idealny sprzęt na wakacje",
    offerLead: "Prezentujemy 3 nowoczesne przyczepy kempingowe stacjonujące nad jeziorem oraz 2 szybkie łodzie motorowe gotowe do wodowania. Kliknij przycisk, aby wybrać sprzęt do kalendarza rezerwacji.",
    productImage: "Zdjęcie",
    reserveItem: "Wybierz do rezerwacji",
    toursEyebrow: "Wirtualne Zwiedzanie",
    toursTitle: "Wejdź do środka bez wychodzenia z domu",
    toursLead: "Uruchom interaktywny spacer 360° i rozejrzyj się po naszych przyczepach Classic i Family. Zobacz wysoki standard wyposażenia przed podjęciem decyzji.",
    tourClassic: "Przyczepy Classic (360°)",
    tourClassicText: "Wirtualny spacer po wnętrzu przyczepy Classic 1 & 2. Zobacz układ sypialni, aneksu i łazienki.",
    tourFamily: "Przyczepa Family (360°)",
    tourFamilyText: "Rozejrzyj się po naszej największej i najbardziej luksusowej przyczepie dla 6 osób.",
    tourPlayBtn: "Uruchom spacer 360°",
    reservationEyebrow: "Kalendarz i Formularz",
    reservationTitle: "Sprawdź dostępność i zarezerwuj",
    reservationLead: "Wybierz pozycję z listy, zaznacz zakres dat bezpośrednio na kalendarzu (dni wolne są białe, zajęte na czerwono), a formularz automatycznie wyliczy koszt wynajmu i kwotę zadatku.",
    fieldProduct: "Wybierz przyczepę lub łódź",
    fieldStartDate: "Data rozpoczęcia (Od)",
    fieldEndDate: "Data zakończenia (Do)",
    fieldName: "Imię i nazwisko",
    fieldEmail: "Adres e-mail",
    fieldPhone: "Numer telefonu",
    fieldGuests: "Liczba gości",
    fieldMessage: "Wiadomość / Pytania dodatkowe",
    privacyConsent: "Akceptuję regulamin wynajmu oraz wyrażam zgodę na przetwarzanie moich danych w celu realizacji zapytania rezerwacyjnego.",
    formNote: "*To jest zapytanie rezerwacyjne. Po weryfikacji dostępności wyślemy e-mail z potwierdzeniem oraz danymi do wpłaty zadatku.",
    sendRequest: "Wyślij zapytanie rezerwacyjne",
    formSent: "Dziękujemy! Zapytanie rezerwacyjne zostało wysłane. Sprawdź swoją skrzynkę e-mail w celu dalszych instrukcji.",
    bankHeading: "Dane do wpłaty zadatku (Wariant A)",
    bankText: "Eco Camp, Bank Spółdzielczy<br>Numer konta: <strong>84 1020 4902 0000 9202 1234 5678</strong><br>Tytuł przelewu: Zadatek za rezerwację [Twoje Imię i Nazwisko]<br>Kwota zadatku: 30% wartości rezerwacji.",
    legendAvailable: "Dostępne",
    legendBooked: "Zajęte",
    legendSelected: "Twój wybór",
    available: "Wolne",
    booked: "Zajęte",
    pricesEyebrow: "Przejrzysty Cennik",
    pricesTitle: "Ceny za dobę w zależności od sezonu",
    pricesText: "Sezon wysoki (High Season) obowiązuje w miesiącach czerwiec, lipiec i sierpień. Sezon niski (Low Season) obowiązuje w pozostałych miesiącach.",
    priceCamperType: "Przyczepy kempingowe",
    priceCamperText: "Classic: 250 zł (niski) / 350 zł (wysoki) za dobę.<br>Family: 320 zł (niski) / 450 zł (wysoki) za dobę.<br>Minimalny wynajem: 3 doby. Kaucja zwrotna.",
    priceDepositType: "Zadatek rezerwacyjny",
    priceDepositValue: "30% ceny pobytu",
    priceDepositText: "Płatny przelewem tradycyjnym lub BLIKiem na telefon w ciągu 24h od ręcznego potwierdzenia terminu.",
    priceBoatType: "Łodzie motorowe",
    priceBoatText: "Classic (50 HP): 450 zł (niski) / 600 zł (wysoki) za dzień.<br>Premium (150 HP): 600 zł (niski) / 800 zł (wysoki) za dzień.<br>Wynajem całodniowy. Kaucja zwrotna.",
    newsEyebrow: "Wiadomości",
    newsTitle: "Aktualności z przystani",
    faqEyebrow: "Pomoc",
    faqTitle: "Często zadawane pytania (FAQ)",
    rulesEyebrow: "Dokumenty prawne",
    rulesTitle: "Regulaminy i bezpieczeństwo danych",
    rulesLead: "Poniżej znajdziesz komplet dokumentów regulujących zasady wynajmu naszego sprzętu oraz politykę bezpieczeństwa danych osobowych (RODO).",
    rulesHeading: "Regulamin Wynajmu",
    rulesText: "Zasady rezerwacji, warunki odbioru i zwrotu, obowiązki najemcy, kwestie kaucji i ubezpieczenia sprzętu.",
    privacyHeading: "Polityka Prywatności",
    privacyText: "Informacje o administratorze danych osobowych, celach przetwarzania, plikach cookies oraz prawach użytkownika.",
    rodoHeading: "Klauzula RODO",
    rodoText: "Spełnienie obowiązku informacyjnego zgodnie z RODO przy wysyłaniu formularza kontaktowego i rezerwacyjnego.",
    contactEyebrow: "Napisz do nas",
    contactTitle: "Skontaktuj się z Eco Camp",
    contactText: "Masz pytania dotyczące sprzętu? Chcesz zarezerwować nietypowy termin? Zadzwoń do nas, napisz e-mail lub skontaktuj się przez nasz profil na Facebooku.",
    contactCta: "Zadzwoń: +48 501 234 567",
    facebookLink: "Odwiedź nas na Facebooku",
    mapPlaceholder: "Lokalizacja przystani (odbioru): Jezioro Kisajno, Giżycko, Mazury",
    adminEyebrow: "Panel Właściciela",
    adminTitle: "Zarządzanie dostępnością terminów",
    adminLead: "Zaloguj się kodem PIN, aby zablokować terminy wynajęte stacjonarnie lub odblokować odwołane rezerwacje.",
    adminDate: "Data",
    adminStatus: "Wybierz status",
    adminBooked: "Zajęte (Zablokuj)",
    adminAvailable: "Dostępne (Odblokuj)",
    saveAvailability: "Zapisz w kalendarzu",
    resetDemo: "Zresetuj dane (Przywróć demo)",
    adminSaved: "Dostępność została zaktualizowana pomyślnie.",
    demoReset: "Dane testowe zostały przywrócone.",
    footerText: "Eco Camp – Luksusowy wynajem przyczep kempingowych i łodzi motorowych na Mazurach.",
    pricePlaceholder: "Zaznacz zakres dat na kalendarzu powyżej, aby zobaczyć wycenę.",
    adminPinLabel: "Wpisz kod PIN właściciela (domyślny: 1234)",
    adminUnlockBtn: "Odblokuj Panel",
    adminIncorrectPin: "Nieprawidłowy kod PIN. Spróbuj ponownie.",
    adminLockedTitle: "Panel zablokowany",
    adminLockedLead: "Wpisz kod PIN, aby móc zarządzać dostępnością floty.",
    adminLockedLabel: "Zabezpieczone",
    adminLogOutBtn: "Wyloguj administratora",
    durationLabelNights: "Liczba nocy:",
    durationLabelDays: "Liczba dni:",
    totalCostLabel: "Całkowity koszt:",
    depositValLabel: "Wysokość zadatku (30%):",
    adminDateStart: "Data początkowa (Od)",
    adminDateEnd: "Data końcowa (Do)",
    selectProductFirst: "Wybierz najpierw pozycję z listy.",
    minNightsAlert: "Minimalny okres wynajmu przyczep wynosi 3 doby.",
    bookedDaysSelectedAlert: "Wybrany zakres dat zawiera dni, które są już zajęte. Wybierz inny termin.",
    adminCurrentBlocks: "Aktualnie zablokowane terminy:",
    adminNoBlocks: "Brak zablokowanych terminów stacjonarnie.",
    adminTableProduct: "Sprzęt / Przyczepa",
    adminTableDates: "Zakres zablokowanych dat",
    adminTableActions: "Akcja",
    adminDeleteBlock: "Odblokuj te dni",
    adminBlockDeleted: "Termin został odblokowany."
  },
  en: {
    skipLink: "Skip to content",
    navOffer: "Offer",
    navReservations: "Reservations",
    navNews: "News",
    navFaq: "FAQ",
    navContact: "Contact",
    navAdmin: "Admin",
    fontToggle: "A+",
    contrastToggle: "Contrast",
    heroEyebrow: "Eco Camp • Caravan & Boat Rental",
    heroTitle: "Luxury lakeside vacation, on your terms.",
    heroLead: "Choose a premium caravan or a fast motorboat in Masuria, Poland. Mark your dates on the interactive calendar and send a request. Bookings are confirmed manually, with zero agency fees or commissions.",
    heroPrimary: "Book Now",
    heroSecondary: "View Fleet",
    heroSearchBtn: "Check Availability",
    statTrailers: "luxury caravans",
    statBoats: "motorboats",
    statTours: "360° virtual tours",
    stepOneTitle: "1. Choose Equipment",
    stepOneText: "Pick a comfortable family caravan or a sporty motorboat.",
    stepTwoTitle: "2. Mark Dates on Calendar",
    stepTwoText: "Click the start date (check-in) and end date (check-out) on the grid.",
    stepThreeTitle: "3. Pick up & Enjoy",
    stepThreeText: "Pay a 30% deposit via bank transfer and we will prepare everything for you.",
    offerEyebrow: "Our Fleet",
    offerTitle: "Find your perfect summer equipment",
    offerLead: "Presenting 3 modern caravans parked by the lake and 2 fast motorboats ready to launch. Click a button to select an item for the reservation calendar.",
    productImage: "Photo",
    reserveItem: "Select for Booking",
    toursEyebrow: "Virtual Tours",
    toursTitle: "Step inside before booking",
    toursLead: "Launch our interactive 360° virtual tours and explore the interiors of Classic and Family caravans. Check the high standard of finishing from home.",
    tourClassic: "Classic Caravans (360°)",
    tourClassicText: "Explore the interior of Classic 1 & 2. Look around the bedroom, kitchen, and bathroom.",
    tourFamily: "Family Caravan (360°)",
    tourFamilyText: "Look around our largest and most luxury caravan designed to sleep up to 6 guests.",
    tourPlayBtn: "Launch 360° Tour",
    reservationEyebrow: "Calendar & Widget",
    reservationTitle: "Check availability & Request dates",
    reservationLead: "Select an item, click your start and end dates directly on the calendar (available days are white, booked days are red), and the form will automatically calculate costs.",
    fieldProduct: "Select caravan or boat",
    fieldStartDate: "Start Date (Check-in)",
    fieldEndDate: "End Date (Check-out)",
    fieldName: "Full Name",
    fieldEmail: "E-mail Address",
    fieldPhone: "Phone Number",
    fieldGuests: "Guests",
    fieldMessage: "Message / Special requests",
    privacyConsent: "I accept the rental terms and agree to the processing of my data for the booking request.",
    formNote: "*This is a booking inquiry. After verification, we will email you a confirmation and deposit details.",
    sendRequest: "Send Booking Request",
    formSent: "Thank you! Your booking request has been sent. Please check your email for further instructions.",
    bankHeading: "Deposit Payment Details (Variant A)",
    bankText: "Eco Camp, Co-operative Bank<br>Account number: <strong>84 1020 4902 0000 9202 1234 5678</strong><br>Transfer Title: Deposit for reservation [Your Name]<br>Deposit amount: 30% of total booking value.",
    legendAvailable: "Available",
    legendBooked: "Booked",
    legendSelected: "Your Choice",
    available: "Available",
    booked: "Booked",
    pricesEyebrow: "Transparent Pricing",
    pricesTitle: "Daily rates based on season",
    pricesText: "High Season applies during June, July, and August. Low Season applies during all other months.",
    priceCamperType: "Camper Caravans",
    priceCamperText: "Classic: 250 PLN (low) / 350 PLN (high) per night.<br>Family: 320 PLN (low) / 450 PLN (high) per night.<br>Minimum stay: 3 nights. Refundable security deposit.",
    priceDepositType: "Booking Deposit",
    priceDepositValue: "30% of total cost",
    priceDepositText: "Paid via bank transfer or BLIK within 24 hours after manual booking confirmation.",
    priceBoatType: "Motorboats",
    priceBoatText: "Classic (50 HP): 450 PLN (low) / 600 PLN (high) per day.<br>Premium (150 HP): 600 PLN (low) / 800 PLN (high) per day.<br>Full day rental. Refundable security deposit.",
    newsEyebrow: "News",
    newsTitle: "Latest updates from the marina",
    faqEyebrow: "Help",
    faqTitle: "Frequently asked questions (FAQ)",
    rulesEyebrow: "Legal Documents",
    rulesTitle: "Rental terms and data security",
    rulesLead: "Below you will find the complete legal terms governing equipment rentals and our data protection policy (GDPR).",
    rulesHeading: "Rental Terms & Conditions",
    rulesText: "Booking rules, pick up and return conditions, lessee responsibilities, security deposits, and insurance.",
    privacyHeading: "Privacy Policy",
    privacyText: "Information about the data controller, processing purposes, cookies, and your data privacy rights.",
    rodoHeading: "GDPR Clause",
    rodoText: "Fulfillment of informational duties under GDPR required for contact forms and inquiries.",
    contactEyebrow: "Write to us",
    contactTitle: "Get in touch with Eco Camp",
    contactText: "Have questions about the equipment? Need to book custom dates? Call us, send an email, or message us on Facebook.",
    contactCta: "Call us: +48 501 234 567",
    facebookLink: "Follow us on Facebook",
    mapPlaceholder: "Marina Location (Pick up): Kisajno Lake, Giżycko, Masuria, Poland",
    adminEyebrow: "Owner Dashboard",
    adminTitle: "Availability & date blocking",
    adminLead: "Log in with your PIN to block dates booked offline or release cancelled bookings.",
    adminDate: "Date",
    adminStatus: "Select status",
    adminBooked: "Booked (Block)",
    adminAvailable: "Available (Release)",
    saveAvailability: "Save to Calendar",
    resetDemo: "Reset Data (Restore Demo)",
    adminSaved: "Availability has been updated successfully.",
    demoReset: "Demo data has been restored.",
    footerText: "Eco Camp – Premium caravan & motorboat rental in Masuria, Poland.",
    pricePlaceholder: "Mark a date range on the calendar above to view pricing.",
    adminPinLabel: "Enter Owner PIN (default: 1234)",
    adminUnlockBtn: "Unlock Dashboard",
    adminIncorrectPin: "Incorrect PIN code. Please try again.",
    adminLockedTitle: "Dashboard Locked",
    adminLockedLead: "Enter the PIN to manage fleet availability.",
    adminLockedLabel: "Secured",
    adminLogOutBtn: "Log Out Administrator",
    durationLabelNights: "Number of nights:",
    durationLabelDays: "Number of days:",
    totalCostLabel: "Total cost:",
    depositValLabel: "Deposit amount (30%):",
    adminDateStart: "Start Date (From)",
    adminDateEnd: "End Date (To)",
    selectProductFirst: "Please select an item first.",
    minNightsAlert: "Minimum rental period for caravans is 3 nights.",
    bookedDaysSelectedAlert: "The selected date range contains dates that are already booked. Please choose other dates.",
    adminCurrentBlocks: "Currently blocked dates:",
    adminNoBlocks: "No custom blocked dates found.",
    adminTableProduct: "Caravan / Boat",
    adminTableDates: "Blocked Date Range",
    adminTableActions: "Action",
    adminDeleteBlock: "Unlock dates",
    adminBlockDeleted: "Dates unlocked successfully."
  }
};

const storageKey = "campBoatAvailability";
const today = new Date();
let currentLang = "pl";
let currentMonth = new Date(today.getFullYear(), today.getMonth(), 1);

let startDate = null;
let endDate = null;
let active360Viewers = {};

let availability = loadAvailability();
let isAdminUnlocked = sessionStorage.getItem("ecocampAdminUnlocked") === "true";

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseDate(dateKey) {
  if (!dateKey) return new Date(NaN);
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function getDemoAvailability() {
  const dates = {};
  products.forEach((product, index) => {
    dates[product.id] = {};
    // Let's block a few days in the current month for demo purposes
    [3 + index, 4 + index, 14 + index, 15 + index, 16 + index].forEach((offset) => {
      const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + offset);
      dates[product.id][formatDate(date)] = "booked";
    });
  });
  return dates;
}

function loadAvailability() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) return getDemoAvailability();

  try {
    return JSON.parse(saved);
  } catch {
    return getDemoAvailability();
  }
}

function saveAvailability() {
  localStorage.setItem(storageKey, JSON.stringify(availability));
}

function getSelectedProduct() {
  const select = document.querySelector("#reservation-product");
  return products.find((product) => product.id === select.value) || products[0];
}

function isBooked(productId, dateKey) {
  return availability[productId]?.[dateKey] === "booked";
}

function isHighSeason(date) {
  const month = date.getMonth(); // 5 = June, 6 = July, 7 = August
  return month === 5 || month === 6 || month === 7;
}

function calculateRangePrice(productId, startStr, endStr) {
  const product = products.find(p => p.id === productId);
  if (!product || !startStr || !endStr) return { total: 0, count: 0, deposit: 0 };
  
  const start = parseDate(startStr);
  const end = parseDate(endStr);
  
  if (isNaN(start) || isNaN(end) || start > end) return { total: 0, count: 0, deposit: 0 };
  
  let total = 0;
  let count = 0;
  
  const current = new Date(start);
  if (product.type === "boat") {
    // Daily rental - inclusive days (June 20 to June 20 is 1 day)
    while (current <= end) {
      const price = isHighSeason(current) ? product.priceHigh : product.priceLow;
      total += price;
      count++;
      current.setDate(current.getDate() + 1);
    }
  } else {
    // Nightly rental (June 20 to June 21 is 1 night)
    while (current < end) {
      const price = isHighSeason(current) ? product.priceHigh : product.priceLow;
      total += price;
      count++;
      current.setDate(current.getDate() + 1);
    }
  }
  
  const deposit = Math.round((total * 0.3) / 10) * 10;
  return { total, count, deposit };
}

function hasBookedDaysInRange(productId, startStr, endStr) {
  const start = parseDate(startStr);
  const end = parseDate(endStr);
  if (isNaN(start) || isNaN(end) || start > end) return false;
  
  const current = new Date(start);
  while (current <= end) {
    if (isBooked(productId, formatDate(current))) {
      return true;
    }
    current.setDate(current.getDate() + 1);
  }
  return false;
}

function translatePage() {
  document.documentElement.lang = currentLang;
  
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[currentLang][key]) {
      element.innerHTML = translations[currentLang][key];
    }
  });

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === currentLang);
  });

  // Re-render components that contain dynamic language text
  renderProducts();
  renderNews();
  renderFaq();
  populateSelects();
  renderSelectedProduct();
  updatePriceDisplay();
  renderAdminPanel();
  renderCalendar();
  
  // Translate calendar weekdays dynamically
  const weekdaysPl = ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Nd"];
  const weekdaysEn = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const weekdays = currentLang === "pl" ? weekdaysPl : weekdaysEn;
  document.querySelectorAll(".calendar-weekdays span").forEach((span, index) => {
    if (weekdays[index]) span.textContent = weekdays[index];
  });

  // Re-initialize Scroll Reveal to observe newly rendered dynamic cards
  initScrollReveal();
}

function getSpecIcon(spec) {
  const s = spec.toLowerCase();
  if (s.includes("miejsc") || s.includes("sleep") || s.includes("kabina") || s.includes("cabin")) {
    return `<svg class="spec-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2H3v6h2v-2h14v2h2v-6c0-2.2-1.8-4-4-4H9c-1.1 0-2 .9-2 2z"/></svg>`;
  }
  if (s.includes("klimat") || s.includes("air")) {
    return `<svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12h-3l2.5-2.5-1.4-1.4-3.6 3.6c-.3.3-.5.7-.5 1.3V16c0 .6.2 1 .5 1.3l3.6 3.6 1.4-1.4L16 17h3v-2h-3v-2h3zm-14 0h3L5.5 9.5l1.4-1.4 3.6 3.6c.3.3.5.7.5 1.3V16c0 .6-.2 1-.5 1.3L6.9 20.9l-1.4-1.4 2.5-2.5H5v-2h3v-2H5z"/></svg>`;
  }
  if (s.includes("ogrzew") || s.includes("heat")) {
    return `<svg class="spec-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2S8.5 6.5 8.5 9.5c0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5C15.5 6.5 12 2 12 2zm1 14.5c0-.8-.3-1.6-.8-2.2l-1.2-1.2v3.4c-1.1 0-2-.9-2-2v-.9c-.6.6-1 1.4-1 2.4 0 2.2 1.8 4 4 4s4-1.8 4-4z"/></svg>`;
  }
  if (s.includes("kuchn") || s.includes("stove") || s.includes("piekarnik") || s.includes("oven")) {
    return `<svg class="spec-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.2 1.8 4 4 4v9h2v-9c2.2 0 4-1.8 4-4V2h-2v7zm10-7h-4c-1.1 0-2 .9-2 2v9c0 1.7 1.3 3 3 3h1v5h2v-5h1c1.7 0 3-1.3 3-3V4c0-2.2-1.8-4-4-4z"/></svg>`;
  }
  if (s.includes("dług") || s.includes("length")) {
    return `<svg class="spec-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 10V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-3-2h-2v2h-1V8h-2v2h-1V8H9v2H8V8H6v2H5V6h14v2z"/></svg>`;
  }
  if (s.includes("dmc") || s.includes("gvwr")) {
    return `<svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>`;
  }
  if (s.includes("patent") || s.includes("licens")) {
    return `<svg class="spec-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 18c-3.9 0-7-3.1-7-7H2c0 5 4 9 9 9s9-4 9-9h-3c0 3.9-3.1 7-7 7zm5-7c0-2.8-2.2-5-5-5s-5 2.2-5 5h3c0-1.1.9-2 2-2s2 .9 2 2h3z"/></svg>`;
  }
  if (s.includes("silnik") || s.includes("engin") || s.includes("hp")) {
    return `<svg class="spec-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 11c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm0-13c-1.1 0-2 .9-2 2v4.2c.6-.1 1.2-.2 1.8-.2.2 0 .4 0 .6.1V4c0-.6.4-1 1-1s1 .4 1 1v4.3c.2-.1.4-.1.6-.1.6 0 1.2.1 1.8.2V4c0-1.1-.9-2-2-2zM4 12c0-1.1.9-2 2-2h4.2c-.1.6-.2 1.2-.2 1.8 0 .2 0 .4.1.6H6c-.6 0-1-.4-1-1zm14 0c0 .6-.4 1-1 1h-4.3c.1-.2.1-.4.1-.6 0-.6-.1-1.2-.2-1.8H18c1.1 0 2 .9 2 2zm-6 6c.6 0 1.2-.1 1.8-.2v4.4c0 1.1-.9 2-2 2s-2-.9-2-2v-4.4c.6.1 1.2.2 1.8.2z"/></svg>`;
  }
  if (s.includes("osób") || s.includes("guest") || s.includes("osobowa") || s.includes("miejsc")) {
    return `<svg class="spec-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`;
  }
  if (s.includes("echosond") || s.includes("sonar") || s.includes("gps")) {
    return `<svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>`;
  }
  if (s.includes("daszek") || s.includes("bimini") || s.includes("markiz")) {
    return `<svg class="spec-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2c1.1 0 2 .9 2 2v1h1c1.7 0 3 1.3 3 3v2h4v2h-4v7c0 1.7-1.3 3-3 3h-1v2c0 1.1-.9 2-2 2s-2-.9-2-2v-2h-1c-1.7 0-3-1.3-3-3v-7H2v-2h4V8c0-1.7 1.3-3 3-3h1V4c0-1.1.9-2 2-2z"/></svg>`;
  }
  if (s.includes("audio") || s.includes("głośnik") || s.includes("muzyka") || s.includes("system")) {
    return `<svg class="spec-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>`;
  }
  return `<svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`;
}

function renderProducts() {
  const list = document.querySelector("#product-list");
  list.innerHTML = products
    .map((product, index) => {
      const isCamper = product.type === "camper";
      const specsHtml = product.specs[currentLang]
        .map((spec) => `<li>${getSpecIcon(spec)} <span>${spec}</span></li>`)
        .join("");
        
      const delayClass = index % 3 === 0 ? "" : (index % 3 === 1 ? "delay-100" : "delay-200");
        
      return `
        <article class="product-card reveal ${delayClass}" id="card-${product.id}">
          <div class="product-image-container">
            <img class="product-image" src="${product.image}" alt="${translations[currentLang].productImage}: ${product.title[currentLang]}" loading="lazy">
            <span class="product-badge ${isCamper ? 'badge-camper' : 'badge-boat'}">
              ${isCamper ? (currentLang === 'pl' ? 'Przyczepa' : 'Caravan') : (currentLang === 'pl' ? 'Łódź' : 'Motorboat')}
            </span>
          </div>
          <div class="product-body">
            <p class="eyebrow">${product.short[currentLang]}</p>
            <h3>${product.title[currentLang]}</h3>
            <p class="product-desc">${product.description[currentLang]}</p>
            
            <div class="product-specs-title">${currentLang === 'pl' ? 'Specyfikacja:' : 'Specifications:'}</div>
            <ul class="product-meta">
              ${specsHtml}
            </ul>
            
            <div class="product-price-info">
              <div class="price-box">
                <span class="price-lbl">${currentLang === 'pl' ? 'Sezon niski' : 'Low Season'}</span>
                <span class="price-val">${product.priceLow} zł / ${isCamper ? (currentLang === 'pl' ? 'doba' : 'night') : (currentLang === 'pl' ? 'dzień' : 'day')}</span>
              </div>
              <div class="price-box">
                <span class="price-lbl">${currentLang === 'pl' ? 'Sezon wysoki' : 'High Season'}</span>
                <span class="price-val text-accent">${product.priceHigh} zł / ${isCamper ? (currentLang === 'pl' ? 'doba' : 'night') : (currentLang === 'pl' ? 'dzień' : 'day')}</span>
              </div>
            </div>
            
            <a class="button primary select-product-btn" href="#reservation" data-product-id="${product.id}">
              ${translations[currentLang].reserveItem}
            </a>
          </div>
        </article>
      `;
    })
    .join("");

  list.querySelectorAll("[data-product-id]").forEach((link) => {
    link.addEventListener("click", () => {
      const select = document.querySelector("#reservation-product");
      select.value = link.dataset.productId;
      startDate = null;
      endDate = null;
      document.querySelector("#start-date").value = "";
      document.querySelector("#end-date").value = "";
      
      renderSelectedProduct();
      updatePriceDisplay();
      renderCalendar();
    });
  });
}

function renderNews() {
  document.querySelector("#news-list").innerHTML = news
    .map(
      (item, index) => {
        const delayClass = index % 3 === 0 ? "" : (index % 3 === 1 ? "delay-100" : "delay-200");
        return `
          <article class="news-card reveal ${delayClass}">
          ${item.image ? `
            <div class="news-image-container">
              <img src="${item.image}" alt="${item.title[currentLang]}" loading="lazy">
            </div>
          ` : ""}
          <div class="news-content">
            <div class="news-meta-row">
              <span class="news-date">${item.date[currentLang]}</span>
            </div>
            <h3>${item.title[currentLang]}</h3>
            <p>${item.text[currentLang]}</p>
          </div>
        </article>
      `;
      }
    )
    .join("");
}

function renderFaq() {
  document.querySelector("#faq-list").innerHTML = faq
    .map(
      (item) => `
        <div class="faq-item-wrapper">
          <details class="faq-item">
            <summary>
              <span>${item.question[currentLang]}</span>
              <span class="faq-icon"></span>
            </summary>
            <div class="faq-content">
              <p>${item.answer[currentLang]}</p>
            </div>
          </details>
        </div>
      `
    )
    .join("");
}

function populateSelects() {
  const reservationSelect = document.querySelector("#reservation-product");
  const adminSelect = document.querySelector("#admin-product");
  const heroSelect = document.querySelector("#hero-select-product");

  const selectedReservation = reservationSelect?.value || products[0].id;
  const selectedAdmin = adminSelect?.value || products[0].id;
  const selectedHero = heroSelect?.value || products[0].id;
  const options = products.map((product) => `<option value="${product.id}">${product.title[currentLang]}</option>`).join("");

  if (reservationSelect) {
    reservationSelect.innerHTML = options;
    reservationSelect.value = selectedReservation;
  }
  if (adminSelect) {
    adminSelect.innerHTML = options;
    adminSelect.value = selectedAdmin;
  }
  if (heroSelect) {
    heroSelect.innerHTML = options;
    heroSelect.value = selectedHero;
  }
}

function renderSelectedProduct() {
  const product = getSelectedProduct();
  const card = document.querySelector("#selected-product-card");

  card.innerHTML = `
    <div class="selected-product-img">
      <img src="${product.image}" alt="${product.title[currentLang]}">
    </div>
    <div class="selected-product-info">
      <h3>${product.title[currentLang]}</h3>
      <p class="short-spec">${product.short[currentLang]}</p>
      <div class="seasonal-rates">
        <span>${currentLang === 'pl' ? 'Niski: ' : 'Low: '}<strong>${product.priceLow} zł</strong></span> | 
        <span>${currentLang === 'pl' ? 'Wysoki: ' : 'High: '}<strong class="text-accent">${product.priceHigh} zł</strong></span>
      </div>
    </div>
  `;
}

function updatePriceDisplay() {
  const product = getSelectedProduct();
  const container = document.querySelector("#price-calc-container");
  
  if (!startDate || !endDate) {
    container.innerHTML = `
      <div class="price-placeholder-box">
        <p>${translations[currentLang].pricePlaceholder}</p>
      </div>
    `;
    return;
  }

  const isCamper = product.type === "camper";
  const { total, count, deposit } = calculateRangePrice(product.id, startDate, endDate);
  
  const label = isCamper 
    ? (currentLang === 'pl' ? 'nocy' : 'nights')
    : (currentLang === 'pl' ? 'dni' : 'days');

  const durationLabel = isCamper
    ? translations[currentLang].durationLabelNights
    : translations[currentLang].durationLabelDays;

  container.innerHTML = `
    <div class="price-summary-card">
      <h4 class="summary-title">${currentLang === 'pl' ? 'Podsumowanie Kosztów' : 'Cost Summary'}</h4>
      <div class="summary-details">
        <div class="summary-row">
          <span>${durationLabel}</span>
          <strong>${count}</strong>
        </div>
        <div class="summary-row">
          <span>${translations[currentLang].totalCostLabel}</span>
          <strong class="total-price-text">${total} PLN</strong>
        </div>
        <div class="summary-row deposit-row">
          <span>${translations[currentLang].depositValLabel}</span>
          <strong class="deposit-price-text text-accent">${deposit} PLN</strong>
        </div>
      </div>
      <div class="deposit-explanation">
        <p>${currentLang === 'pl' 
          ? '*Zadatek 30% należy opłacić przelewem tradycyjnym w ciągu 24h po ręcznym potwierdzeniu rezerwacji przez właściciela.' 
          : '*The 30% deposit is payable via bank transfer within 24h after manual booking confirmation from the owner.'}</p>
      </div>
    </div>
  `;
}

function renderCalendar() {
  const product = getSelectedProduct();
  const grid = document.querySelector("#calendar-grid");
  const title = document.querySelector("#calendar-title");
  
  const monthFormatter = new Intl.DateTimeFormat(currentLang === "pl" ? "pl-PL" : "en-US", {
    month: "long",
    year: "numeric",
  });

  title.textContent = monthFormatter.format(currentMonth);

  const start = new Date(currentMonth);
  const mondayIndex = (start.getDay() + 6) % 7;
  start.setDate(start.getDate() - mondayIndex);

  const days = [];
  const startVal = startDate ? parseDate(startDate) : null;
  const endVal = endDate ? parseDate(endDate) : null;

  for (let index = 0; index < 42; index += 1) {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    const dateKey = formatDate(date);
    const outside = date.getMonth() !== currentMonth.getMonth();
    const booked = isBooked(product.id, dateKey);
    
    // Check range classes
    const currentVal = parseDate(dateKey);
    let selected = false;
    let inRange = false;
    let rangeStart = false;
    let rangeEnd = false;

    if (startDate && dateKey === startDate) {
      selected = true;
      rangeStart = true;
    }
    if (endDate && dateKey === endDate) {
      selected = true;
      rangeEnd = true;
    }
    if (startVal && endVal && currentVal > startVal && currentVal < endVal) {
      inRange = true;
    }

    const status = booked ? translations[currentLang].booked : translations[currentLang].available;
    const isPast = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1) < new Date();

    let dayClasses = "calendar-day";
    if (outside) dayClasses += " is-outside";
    if (booked) dayClasses += " is-booked";
    if (isPast) dayClasses += " is-past";
    if (selected) dayClasses += " is-selected";
    if (rangeStart) dayClasses += " range-start";
    if (rangeEnd) dayClasses += " range-end";
    if (inRange) dayClasses += " in-range";

    days.push(`
      <button
        class="${dayClasses}"
        type="button"
        data-date="${dateKey}"
        aria-pressed="${selected}"
        aria-label="${dateKey}: ${status}"
        ${isPast && !booked ? "disabled" : ""}
      >
        <span class="day-number">${date.getDate()}</span>
        <span class="day-status-label">${status}</span>
      </button>
    `);
  }

  grid.innerHTML = days.join("");
  grid.querySelectorAll(".calendar-day").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("is-booked") || button.classList.contains("is-past")) return;
      handleDayClick(button.dataset.date);
    });
  });
}

function handleDayClick(dateKey) {
  const product = getSelectedProduct();

  if (!startDate || (startDate && endDate)) {
    startDate = dateKey;
    endDate = null;
  } else if (startDate && !endDate) {
    const startVal = parseDate(startDate);
    const clickVal = parseDate(dateKey);

    if (clickVal < startVal) {
      startDate = dateKey;
    } else {
      // Validate camper minimum stay (3 nights)
      if (product.type === "camper") {
        const diffNights = Math.round((clickVal - startVal) / (1000 * 60 * 60 * 24));
        if (diffNights < 3) {
          alert(translations[currentLang].minNightsAlert);
          return;
        }
      }

      // Check for blocked days in range
      if (hasBookedDaysInRange(product.id, startDate, dateKey)) {
        alert(translations[currentLang].bookedDaysSelectedAlert);
        return;
      }
      
      endDate = dateKey;
    }
  }

  document.querySelector("#start-date").value = startDate || "";
  document.querySelector("#end-date").value = endDate || "";

  renderCalendar();
  updatePriceDisplay();
}

function loadTour(camperType) {
  const containerId = camperType === 'classic' ? 'tour-classic-viewer' : 'tour-family-viewer';
  const imgPath = camperType === 'classic' ? 'assets/panorama_classic.png' : 'assets/panorama_family.png';
  
  if (typeof pannellum === 'undefined') {
    alert("Pannellum loading failed. Please refresh the page.");
    return;
  }

  // Set loading state
  const container = document.getElementById(containerId);
  container.innerHTML = `
    <div style="display:grid; place-items:center; height:100%; color:white;">
      <span>Loading 360° Panorama...</span>
    </div>
  `;

  setTimeout(() => {
    container.innerHTML = ""; // Clear
    
    // Initialize pannellum viewer
    active360Viewers[camperType] = pannellum.viewer(containerId, {
      type: "equirectangular",
      panorama: imgPath,
      autoLoad: true,
      compass: false,
      mouseZoom: false,
      keyboardZoom: false,
      showControls: true
    });
  }, 300);
}

function getBlockedRanges(productId) {
  const productAvailability = availability[productId] || {};
  const bookedDates = Object.keys(productAvailability)
    .filter((dateKey) => productAvailability[dateKey] === "booked")
    .sort();
  
  if (bookedDates.length === 0) return [];

  const ranges = [];
  let rangeStart = bookedDates[0];
  let rangeEnd = bookedDates[0];

  for (let i = 1; i < bookedDates.length; i++) {
    const prevDate = parseDate(bookedDates[i - 1]);
    const currDate = parseDate(bookedDates[i]);
    
    const diffTime = Math.abs(currDate - prevDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      rangeEnd = bookedDates[i];
    } else {
      ranges.push({ start: rangeStart, end: rangeEnd });
      rangeStart = bookedDates[i];
      rangeEnd = bookedDates[i];
    }
  }
  ranges.push({ start: rangeStart, end: rangeEnd });
  return ranges;
}

function deleteRange(productId, startStr, endStr) {
  const start = parseDate(startStr);
  const end = parseDate(endStr);
  
  if (isNaN(start) || isNaN(end) || start > end) return;
  
  const current = new Date(start);
  while (current <= end) {
    const dateKey = formatDate(current);
    if (availability[productId]) {
      delete availability[productId][dateKey];
    }
    current.setDate(current.getDate() + 1);
  }
  
  saveAvailability();
  
  startDate = null;
  endDate = null;
  if (document.querySelector("#start-date")) document.querySelector("#start-date").value = "";
  if (document.querySelector("#end-date")) document.querySelector("#end-date").value = "";
  
  renderCalendar();
  updatePriceDisplay();
  renderAdminBlocksList();
}

function renderAdminBlocksList() {
  const tbody = document.querySelector("#admin-blocks-list");
  if (!tbody) return;

  let blocksHtml = "";
  let hasAnyBlocks = false;

  products.forEach((product) => {
    const ranges = getBlockedRanges(product.id);
    if (ranges.length > 0) {
      hasAnyBlocks = true;
      ranges.forEach((range) => {
        blocksHtml += `
          <tr>
            <td><strong>${product.title[currentLang]}</strong></td>
            <td><span class="block-dates-badge">${range.start} &rarr; ${range.end}</span></td>
            <td>
              <button class="button danger btn-small delete-block-btn" type="button" 
                data-product-id="${product.id}" 
                data-start="${range.start}" 
                data-end="${range.end}">
                ${translations[currentLang].adminDeleteBlock}
              </button>
            </td>
          </tr>
        `;
      });
    }
  });

  if (hasAnyBlocks) {
    tbody.innerHTML = blocksHtml;
    tbody.querySelectorAll(".delete-block-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const prodId = btn.dataset.productId;
        const start = btn.dataset.start;
        const end = btn.dataset.end;
        deleteRange(prodId, start, end);
      });
    });
  } else {
    tbody.innerHTML = `
      <tr>
        <td colspan="3" class="text-center text-muted" style="padding: 2rem 0;">${translations[currentLang].adminNoBlocks}</td>
      </tr>
    `;
  }
}

function renderAdminPanel() {
  const adminPanel = document.querySelector("#admin-section-wrapper");
  if (!adminPanel) return;

  if (!isAdminUnlocked) {
    adminPanel.innerHTML = `
      <div class="admin-lock-screen">
        <div class="lock-icon">🔒</div>
        <h3>${translations[currentLang].adminLockedTitle}</h3>
        <p>${translations[currentLang].adminLockedLead}</p>
        <form id="admin-login-form">
          <label>
            <span>${translations[currentLang].adminPinLabel}</span>
            <input type="password" id="admin-pin-input" maxLength="4" placeholder="••••" required autocomplete="current-password">
          </label>
          <button class="button primary" type="submit">${translations[currentLang].adminUnlockBtn}</button>
          <p class="status-message error" id="admin-pin-error" style="display:none;"></p>
        </form>
      </div>
    `;
    
    document.querySelector("#admin-login-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const pin = document.querySelector("#admin-pin-input").value;
      const errorEl = document.querySelector("#admin-pin-error");
      
      if (pin === "1234") {
        isAdminUnlocked = true;
        sessionStorage.setItem("ecocampAdminUnlocked", "true");
        renderAdminPanel();
      } else {
        errorEl.textContent = translations[currentLang].adminIncorrectPin;
        errorEl.style.display = "block";
      }
    });
  } else {
    adminPanel.innerHTML = `
      <div class="admin-dashboard">
        <div class="admin-dash-header">
          <h3>${translations[currentLang].adminTitle}</h3>
          <button class="button secondary btn-small" type="button" id="admin-logout-btn">${translations[currentLang].adminLogOutBtn}</button>
        </div>
        <p>${translations[currentLang].adminLead}</p>
        
        <form class="admin-form" id="admin-form">
          <div class="form-grid">
            <label>
              <span>${translations[currentLang].fieldProduct}</span>
              <select name="productId" id="admin-product" required></select>
            </label>
            <label>
              <span>${translations[currentLang].adminDateStart}</span>
              <input type="date" name="startDate" required>
            </label>
            <label>
              <span>${translations[currentLang].adminDateEnd}</span>
              <input type="date" name="endDate" required>
            </label>
            <label>
              <span>${translations[currentLang].adminStatus}</span>
              <select name="status" required>
                <option value="booked">${translations[currentLang].adminBooked}</option>
                <option value="available">${translations[currentLang].adminAvailable}</option>
              </select>
            </label>
          </div>
          <div class="admin-actions">
            <button class="button primary" type="submit">${translations[currentLang].saveAvailability}</button>
            <button class="button secondary" type="button" id="reset-demo">${translations[currentLang].resetDemo}</button>
          </div>
          <p class="status-message" id="admin-status" role="status"></p>
        </form>

        <div class="admin-blocks-section">
          <h4>${translations[currentLang].adminCurrentBlocks}</h4>
          <div class="admin-blocks-table-wrapper">
            <table class="admin-blocks-table">
              <thead>
                <tr>
                  <th>${translations[currentLang].adminTableProduct}</th>
                  <th>${translations[currentLang].adminTableDates}</th>
                  <th>${translations[currentLang].adminTableActions}</th>
                </tr>
              </thead>
              <tbody id="admin-blocks-list">
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;

    // Populate selects inside admin dashboard
    const adminProductSelect = document.querySelector("#admin-product");
    if (adminProductSelect) {
      adminProductSelect.innerHTML = products.map((product) => `<option value="${product.id}">${product.title[currentLang]}</option>`).join("");
    }

    // Render blocked list immediately
    renderAdminBlocksList();

    // Attach Admin Form submit handler
    document.querySelector("#admin-form")?.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const productId = formData.get("productId");
      const startStr = formData.get("startDate");
      const endStr = formData.get("endDate");
      const status = formData.get("status");

      const start = parseDate(startStr);
      const end = parseDate(endStr);

      if (isNaN(start) || isNaN(end) || start > end) {
        alert("Invalid dates.");
        return;
      }

      availability[productId] ||= {};
      const current = new Date(start);
      while (current <= end) {
        const dateKey = formatDate(current);
        if (status === "available") {
          delete availability[productId][dateKey];
        } else {
          availability[productId][dateKey] = "booked";
        }
        current.setDate(current.getDate() + 1);
      }

      saveAvailability();
      
      // Reset current selected range to prevent visual desync
      startDate = null;
      endDate = null;
      document.querySelector("#start-date").value = "";
      document.querySelector("#end-date").value = "";

      const statusMsg = document.querySelector("#admin-status");
      statusMsg.textContent = translations[currentLang].adminSaved;
      statusMsg.className = "status-message success";

      setTimeout(() => {
        statusMsg.textContent = "";
        statusMsg.className = "status-message";
      }, 3000);

      renderCalendar();
      updatePriceDisplay();
      renderAdminBlocksList();
    });

    // Attach Reset Demo handler
    document.querySelector("#reset-demo")?.addEventListener("click", () => {
      availability = getDemoAvailability();
      saveAvailability();
      
      startDate = null;
      endDate = null;
      document.querySelector("#start-date").value = "";
      document.querySelector("#end-date").value = "";

      const statusMsg = document.querySelector("#admin-status");
      statusMsg.textContent = translations[currentLang].demoReset;
      statusMsg.className = "status-message success";

      setTimeout(() => {
        statusMsg.textContent = "";
        statusMsg.className = "status-message";
      }, 3000);

      renderCalendar();
      updatePriceDisplay();
      renderAdminBlocksList();
    });

    // Logout handler
    document.querySelector("#admin-logout-btn")?.addEventListener("click", () => {
      isAdminUnlocked = false;
      sessionStorage.removeItem("ecocampAdminUnlocked");
      renderAdminPanel();
    });
  }
}

// Global hook for the HTML click triggers
window.loadTour = loadTour;

// Event Listeners for controls
document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => {
    currentLang = button.dataset.lang;
    translatePage();
  });
});

document.querySelector("#font-toggle").addEventListener("click", (event) => {
  document.body.classList.toggle("large-text");
  event.currentTarget.classList.toggle("is-active", document.body.classList.contains("large-text"));
});

document.querySelector("#contrast-toggle").addEventListener("click", (event) => {
  document.body.classList.toggle("high-contrast");
  event.currentTarget.classList.toggle("is-active", document.body.classList.contains("high-contrast"));
});

document.querySelector("#reservation-product").addEventListener("change", () => {
  startDate = null;
  endDate = null;
  document.querySelector("#start-date").value = "";
  document.querySelector("#end-date").value = "";
  renderSelectedProduct();
  updatePriceDisplay();
  renderCalendar();
});

document.querySelector("#start-date").addEventListener("change", (event) => {
  startDate = event.target.value;
  validateAndRenderDates();
});

document.querySelector("#end-date").addEventListener("change", (event) => {
  endDate = event.target.value;
  validateAndRenderDates();
});

function validateAndRenderDates() {
  const product = getSelectedProduct();
  if (startDate && endDate) {
    const startVal = parseDate(startDate);
    const endVal = parseDate(endDate);
    
    if (endVal < startVal) {
      endDate = startDate;
      document.querySelector("#end-date").value = endDate;
    }
    
    if (product.type === "camper") {
      const diffNights = Math.round((endVal - startVal) / (1000 * 60 * 60 * 24));
      if (diffNights < 3) {
        alert(translations[currentLang].minNightsAlert);
        endDate = null;
        document.querySelector("#end-date").value = "";
      }
    }

    if (endDate && hasBookedDaysInRange(product.id, startDate, endDate)) {
      alert(translations[currentLang].bookedDaysSelectedAlert);
      endDate = null;
      document.querySelector("#end-date").value = "";
    }
  }
  renderCalendar();
  updatePriceDisplay();
}

document.querySelector("#prev-month").addEventListener("click", () => {
  currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
  renderCalendar();
});

document.querySelector("#next-month").addEventListener("click", () => {
  currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
  renderCalendar();
});

document.querySelector("#reservation-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const statusEl = document.querySelector("#form-status");
  statusEl.textContent = translations[currentLang].formSent;
  statusEl.className = "status-message success";
  
  // Celebrate booking success!
  triggerConfetti();
  
  event.currentTarget.reset();
  
  startDate = null;
  endDate = null;
  
  setTimeout(() => {
    statusEl.textContent = "";
    statusEl.className = "status-message";
  }, 5000);
  
  renderSelectedProduct();
  updatePriceDisplay();
  renderCalendar();
});

// Hamburger menu toggle logic
const menuToggle = document.querySelector("#menu-toggle");
const mainNav = document.querySelector("#main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !expanded);
    mainNav.classList.toggle("is-open");
    menuToggle.classList.toggle("is-active");
  });

  // Close menu when clicking a link
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      mainNav.classList.remove("is-open");
      menuToggle.classList.remove("is-active");
    });
  });
}

// Link Hero Quick Booking bar to the main reservation form
document.querySelector("#hero-booking-search-btn")?.addEventListener("click", () => {
  const selectedProduct = document.querySelector("#hero-select-product")?.value;
  const startD = document.querySelector("#hero-start-date")?.value;
  const endD = document.querySelector("#hero-end-date")?.value;
  
  const mainSelect = document.querySelector("#reservation-product");
  if (mainSelect && selectedProduct) {
    mainSelect.value = selectedProduct;
    mainSelect.dispatchEvent(new Event("change"));
  }
  
  if (startD) {
    startDate = parseDate(startD);
    const mainStart = document.querySelector("#start-date");
    if (mainStart) mainStart.value = startD;
  }
  if (endD) {
    endDate = parseDate(endD);
    const mainEnd = document.querySelector("#end-date");
    if (mainEnd) mainEnd.value = endD;
  }
  
  renderCalendar();
  updatePriceDisplay();
  
  document.querySelector("#reservation")?.scrollIntoView({ behavior: "smooth" });
});

// Dynamic header scroll effect (transparent at top, glassmorphic/white when scrolled)
const header = document.querySelector(".site-header");
if (header) {
  const checkScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };
  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Check on load as well
}

// App Initialization
document.querySelector("#year").textContent = new Date().getFullYear();
translatePage();

// ==========================================================================
// Visual and UX Upgrades Functions
// ==========================================================================

function animateStats() {
  const statsElements = document.querySelectorAll(".hero-stats dt");
  statsElements.forEach((dt) => {
    // Avoid double-running animations
    if (dt.classList.contains("animating")) return;
    dt.classList.add("animating");

    const originalText = dt.textContent.trim();
    const targetValue = parseInt(originalText.replace(/[^0-9]/g, ""), 10);
    if (isNaN(targetValue)) {
      dt.classList.remove("animating");
      return;
    }
    
    const suffix = originalText.replace(/[0-9]/g, ""); // e.g. "°" or empty
    const duration = 2000; // 2 seconds
    const startTime = performance.now();
    
    function updateNumber(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      const currentValue = Math.floor(easeProgress * targetValue);
      
      dt.textContent = currentValue + suffix;
      
      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      } else {
        dt.textContent = originalText;
        dt.classList.remove("animating");
      }
    }
    
    requestAnimationFrame(updateNumber);
  });
}

function initScrollReveal() {
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -10% 0px", // Trigger when elements are 10% in view
    threshold: 0.05
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        
        // Trigger stats counter if this is the stats container
        if (entry.target.classList.contains("hero-stats")) {
          animateStats();
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
  });
}

function triggerConfetti() {
  const colors = ["#0c3a2e", "#d97706", "#f59e0b", "#e6f0ed", "#ffffff"];
  const particleCount = 80;
  const container = document.body;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "confetti-particle";
    
    const size = Math.random() * 8 + 6; // 6px to 14px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${-Math.random() * 20 - 10}px`;
    
    const duration = Math.random() * 1.5 + 1.5; // 1.5s to 3s
    const delay = Math.random() * 0.5; // 0s to 0.5s
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    
    const rotation = Math.random() * 360;
    const drift = Math.random() * 120 - 60; // -60px to 60px
    
    particle.style.transform = `rotate(${rotation}deg)`;
    particle.style.setProperty("--drift", `${drift}px`);
    
    container.appendChild(particle);
    
    setTimeout(() => {
      particle.remove();
    }, (duration + delay) * 1000);
  }
}
