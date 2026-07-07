let products = [
  {
    id: "hobby-495-wfb",
    type: "camper",
    title: { pl: "Hobby 495 WFB", en: "Hobby 495 WFB" },
    short: { pl: "Hobby 495 WFB Excellent • funkcja coworkingowa", en: "Hobby 495 WFB Excellent • coworking setup" },
    description: {
      pl: "Komfortowa przyczepa Hobby 495 WFB Excellent dla 4 osób, z funkcją coworkingową do pracy zdalnej w trasie. Model 2026, długość 7,124 m, szerokość 2,300 m, DMC 1500 kg. Możliwy transport przyczepy do klienta.",
      en: "Comfortable Hobby 495 WFB Excellent caravan for 4 guests, with a coworking setup for remote work on the road. Model year 2026, length 7.124 m, width 2.300 m, GVWR 1,500 kg. Delivery to the customer is possible."
    },
    image: "assets/ecocamp/hobby-495-wfb/offer.png",
    gallery: [14, 10, 11, 8, 6, 3, 4, 5].map(n => `assets/ecocamp/hobby-495-wfb/gallery/${String(n).padStart(2, "0")}.jpg`),
    priceLow: 280,
    priceMedium: 320,
    priceHigh: 350,
    minNightsDefault: 5,
    minNightsHigh: 7,
    seasonPlan: "hobby495",
    specs: {
      pl: ["4 osoby", "funkcja coworkingowa", "router Wi-Fi z kartą SIM", "antena zewnętrzna", "miejsce na monitor", "dodatkowe gniazda USB", "fotowoltaika", "ogrzewanie i klimatyzacja", "markiza dachowa", "napęd manewrujący"],
      en: ["4 guests", "coworking setup", "Wi-Fi router with SIM card", "external antenna", "monitor workstation", "additional USB sockets", "solar panels", "heating and air conditioning", "roof awning", "mover"]
    }
  },
  {
    id: "hobby-545-kmf-1",
    type: "camper",
    title: { pl: "Hobby 545 KMF De Luxe", en: "Hobby 545 KMF De Luxe" },
    offerTitle: { pl: "Hobby 545 KMF De Luxe", en: "Hobby 545 KMF De Luxe" },
    short: { pl: "De Luxe • do 6 osób • 2025", en: "De Luxe • up to 6 guests • 2025" },
    offerShort: { pl: "De Luxe • do 6 osób • 2025", en: "De Luxe • up to 6 guests • 2025" },
    description: {
      pl: "Przyczepa Hobby 545 KMF De Luxe z 2025 roku, przeznaczona maksymalnie dla 6 osób. Wyposażona w panele fotowoltaiczne, ogrzewanie, klimatyzację, podgrzewaną podłogę, markizę dachową i pełne wyposażenie kuchenne.",
      en: "A 2025 Hobby 545 KMF De Luxe caravan for up to 6 guests. Equipped with solar panels, heating, air conditioning, heated floor, roof awning and full kitchen equipment."
    },
    offerDescription: {
      pl: "Rodzinna przyczepa Hobby 545 KMF De Luxe dla maksymalnie 6 osób. To standardowy egzemplarz rodzinny z fotowoltaiką, ogrzewaniem, klimatyzacją, podgrzewaną podłogą i pełnym wyposażeniem kuchennym.",
      en: "Family Hobby 545 KMF De Luxe caravan for up to 6 guests. This is the standard family unit with solar panels, heating, air conditioning, heated floor and full kitchen equipment."
    },
    image: "assets/ecocamp/hobby-545-kmf/offer-standard.png",
    gallery: [6, 7, 8, 5, 4, 10, 17].map(n => `assets/ecocamp/hobby-545-kmf/gallery/${String(n).padStart(2, "0")}.jpg`),
    priceLow: 290,
    priceMedium: 320,
    priceHigh: 350,
    minNightsDefault: 5,
    minNightsHigh: 7,
    seasonPlan: "hobby545",
    specs: {
      pl: ["do 6 osób", "panele fotowoltaiczne", "ogrzewanie i klimatyzacja", "podgrzewana podłoga", "markiza dachowa", "bagażnik na rowery", "pełne wyposażenie kuchenne", "oświetlenie LED"],
      en: ["up to 6 guests", "solar panels", "heating and air conditioning", "heated floor", "roof awning", "bike rack", "full kitchen equipment", "LED lighting"]
    }
  },
  {
    id: "hobby-545-kmf-2",
    type: "camper",
    title: { pl: "Hobby 545 KMF De Luxe Dostępna", en: "Hobby 545 KMF De Luxe Accessible" },
    offerTitle: { pl: "Hobby 545 KMF De Luxe Dostępna", en: "Hobby 545 KMF De Luxe Accessible" },
    short: { pl: "De Luxe • przystosowana • do 6 osób • 2025", en: "De Luxe • accessible unit • up to 6 guests • 2025" },
    description: {
      pl: "Osobny egzemplarz Hobby 545 KMF De Luxe z przystosowaniem dla osób z niepełnosprawnościami. Wyposażenie obejmuje rampę najazdową, uchwyty przy wejściu i w łazience, oznaczenia kontrastowe, zdalne sterowanie funkcjami przyczepy przez smartfon, składany stół, lustro uchylne, krzesło do kąpieli, pasy i mocowania oraz etykiety Braille'a.",
      en: "A separate Hobby 545 KMF De Luxe unit adapted for people with disabilities. Equipment includes an access ramp, grab handles at the entrance and in the bathroom, contrast markings, smartphone control of caravan functions, a folding table, tilting mirror, shower chair, belts and mounts, and Braille labels."
    },
    image: "assets/ecocamp/hobby-545-kmf/offer-accessible.png",
    gallery: [6, 7, 8, 5, 4, 10, 17].map(n => `assets/ecocamp/hobby-545-kmf/gallery/${String(n).padStart(2, "0")}.jpg`),
    priceLow: 290,
    priceMedium: 320,
    priceHigh: 350,
    minNightsDefault: 5,
    minNightsHigh: 7,
    seasonPlan: "hobby545",
    specs: {
      pl: ["do 6 osób", "rampa najazdowa", "uchwyty przy wejściu i w łazience", "oznaczenia kontrastowe", "mata antypoślizgowa", "sterowanie przez smartfon", "składany stół", "lustro uchylne", "krzesło do kąpieli", "etykiety Braille'a"],
      en: ["up to 6 guests", "access ramp", "grab handles at entrance and bathroom", "contrast markings", "anti-slip mat", "smartphone control", "folding table", "tilting mirror", "shower chair", "Braille labels"]
    }
  }
];

const videos = [
  {
    title: { pl: "Hobby 495 WFB - spacer wideo", en: "Hobby 495 WFB - video tour" },
    text: {
      pl: "Krótki materiał wideo prezentujący przyczepę Hobby 495 WFB.",
      en: "A short video showing the Hobby 495 WFB caravan."
    },
    src: "assets/ecocamp/videos/hobby-495-wfb-tour.mov",
    poster: "assets/ecocamp/hobby-495-wfb/gallery/12.jpg"
  },
  {
    title: { pl: "Hobby 545 KMF - spacer wideo", en: "Hobby 545 KMF - video tour" },
    text: {
      pl: "Materiał wideo z przyczepy Hobby 545 KMF Excellent Edition.",
      en: "A video tour of the Hobby 545 KMF Excellent Edition caravan."
    },
    src: "assets/ecocamp/videos/hobby-545-kmf-tour.mov",
    poster: "assets/ecocamp/hobby-545-kmf/gallery/02.jpg"
  }
];

const heroImages = [
  "assets/ecocamp/hobby-495-wfb/exterior.jpg",
  "assets/ecocamp/hobby-545-kmf/exterior.jpg",
  "assets/ecocamp/hobby-545-kmf/side.jpg",
  "assets/ecocamp/hobby-495-wfb/gallery/12.jpg",
  "assets/ecocamp/hobby-545-kmf/gallery/02.jpg",
  "assets/ecocamp/hobby-545-kmf/gallery/13.jpg"
];

let news = [
  {
    slug: "aktualnosci/rozwoj-firmy-eco-camp/",
    date: { pl: "03 Lutego 2025", en: "February 3, 2025" },
    title: { pl: "ECO CAMP realizuje projekt z dofinansowaniem UE", en: "ECO CAMP implements EU-funded project" },
    text: {
      pl: "Firma ECO CAMP otrzymała dofinansowanie z programu Fundusze Europejskie dla Warmii i Mazur 2021–2027 na realizację projektu pn. „Rozwój firmy ECO CAMP”. Wartość projektu i wydatków kwalifikowalnych: 799 330,72 zł. Wartość dofinansowania: 647 377,95 zł.",
      en: "ECO CAMP received funding from the European Funds for Warmia and Mazury 2021–2027 programme for the project ‘Development of ECO CAMP’. Project value and eligible expenditure: PLN 799,330.72. Funding value: PLN 647,377.95."
    },
    readMore: { pl: "Czytaj całość", en: "Read more" },
    image: null
  }
];

let faq = [
  {
    question: { pl: "Jak przebiega proces rezerwacji?", en: "How does the booking process work?" },
    answer: {
      pl: "Wybierasz sprzęt z listy, zaznaczasz zakres dat (od-do) na kalendarzu i wypełniasz prosty formularz kontaktowy. Zapytanie trafia na nasz e-mail, a dostępność oraz szczegóły płatności potwierdzamy ręcznie.",
      en: "Select equipment from the list, choose the date range (from-to) on the calendar, and fill in the simple contact form. The inquiry goes to our email, and availability plus payment details are confirmed manually."
    }
  },
  {
    question: { pl: "Jakie są kaucja i opłaty dodatkowe?", en: "What are the deposit and additional fees?" },
    answer: {
      pl: "Kaucja zwrotna wynosi 3000 zł. Opłata serwisowa wynosi 350 zł i obejmuje sprzątanie, chemię oraz gaz. Wyjazd przyczepą poza granice Polski oznacza dodatkową jednorazową opłatę eksploatacyjną 350 zł.",
      en: "The refundable security deposit is PLN 3,000. The service fee is PLN 350 and covers cleaning, chemicals and gas. Taking the caravan outside Poland adds a one-time operating fee of PLN 350."
    }
  },
  {
    question: { pl: "Jaki jest minimalny okres wynajmu?", en: "What is the minimum rental period?" },
    answer: {
      pl: "Dla przyczep Hobby 495 WFB i Hobby 545 KMF minimalny wynajem wynosi 5 dni w sezonie niskim i średnim oraz 7 dni w sezonie wysokim.",
      en: "For Hobby 495 WFB and Hobby 545 KMF caravans, the minimum rental period is 5 days in low and mid season and 7 days in high season."
    }
  },
  {
    question: { pl: "Czy ECO CAMP jest dostępny dla osób z niepełnosprawnościami?", en: "Is ECO CAMP accessible for people with disabilities?" },
    answer: {
      pl: "Tak! Jedna z naszych przyczep Family jest wyposażona w rozwiązania wspierające osoby z niepełnosprawnościami i seniorów: rampę najazdową, uchwyty, oznaczenia kontrastowe oraz dodatkowe udogodnienia. Nasza strona i platforma rezerwacyjna są przygotowywane zgodnie ze standardem WCAG 2.1 AA. Skontaktuj się z nami przed rezerwacją, jeśli potrzebujesz dodatkowego wsparcia.",
      en: "Yes! One of our Family caravans is equipped with solutions supporting people with disabilities and seniors: a ramp, grab handles, contrast markings, and additional amenities. Our website and booking platform are prepared in accordance with WCAG 2.1 AA. Contact us before booking if you need additional support."
    }
  },
  {
    question: { pl: "Czy pobierana jest kaucja zwrotna?", en: "Is there a refundable security deposit?" },
    answer: {
      pl: "Tak. Kaucja zwrotna wynosi 3000 zł. Dodatkowo obowiązuje opłata serwisowa 350 zł za sprzątanie, chemię i gaz. Przy wynajmie powyżej 14 dni opłata serwisowa jest gratis.",
      en: "Yes. The refundable security deposit is PLN 3,000. There is also a PLN 350 service fee for cleaning, chemicals and gas. For rentals over 14 days, the service fee is included."
    }
  }
];

const contentOverridesKey = "ecoCampContentOverrides";
const defaultProducts = JSON.parse(JSON.stringify(products));
const defaultNews = JSON.parse(JSON.stringify(news));
const defaultFaq = JSON.parse(JSON.stringify(faq));

function mergeContentObject(base, overrides) {
  if (!overrides || typeof overrides !== "object") return base;

  return Object.entries(overrides).reduce((merged, [key, value]) => {
    if (
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      merged[key] &&
      typeof merged[key] === "object" &&
      !Array.isArray(merged[key])
    ) {
      merged[key] = mergeContentObject(merged[key], value);
    } else {
      merged[key] = value;
    }
    return merged;
  }, { ...base });
}

function normalizeProducts(nextProducts) {
  return nextProducts.map((product) => {
    const fallback = defaultProducts.find((item) => item.id === product.id);
    if (!fallback) return product;

    return {
      ...product,
      gallery: Array.isArray(product.gallery) && product.gallery.length ? product.gallery : fallback.gallery,
      image: product.image || fallback.image,
      title: product.title || fallback.title,
      short: product.short || fallback.short,
      description: product.description || fallback.description,
      specs: product.specs || fallback.specs
    };
  });
}

function mergeProductList(savedProducts) {
  const mergedDefaults = defaultProducts.map((fallback) => {
    const override = savedProducts.find((product) => product?.id === fallback.id);
    return override ? mergeContentObject(fallback, override) : fallback;
  });

  const customProducts = savedProducts.filter((product) => {
    return product?.id && !defaultProducts.some((fallback) => fallback.id === product.id);
  });

  return normalizeProducts([...mergedDefaults, ...customProducts]);
}

function normalizeNews(nextNews) {
  const normalized = nextNews
    .filter((item) => item && typeof item === "object")
    .map((item, index) => mergeContentObject(defaultNews[index] || defaultNews[0] || {}, item))
    .filter((item) => item?.title?.pl || item?.title?.en);

  return normalized.length ? normalized : JSON.parse(JSON.stringify(defaultNews));
}

function loadContentOverrides() {
  try {
    const saved = JSON.parse(localStorage.getItem(contentOverridesKey) || "{}");
    applyContentOverrides(saved);
  } catch (error) {
    console.warn("Nie udało się wczytać nadpisanych treści panelu admina:", error);
  }
}

function applyContentOverrides(saved = {}) {
  products = JSON.parse(JSON.stringify(defaultProducts));
  news = JSON.parse(JSON.stringify(defaultNews));
  faq = JSON.parse(JSON.stringify(defaultFaq));

  if (saved.productOverrides && typeof saved.productOverrides === "object") {
    products = products.map((product) => mergeContentObject(product, saved.productOverrides[product.id]));
    products = normalizeProducts(products);
  }
  if (Array.isArray(saved.products) && saved.products.length) products = mergeProductList(saved.products);
  if (Array.isArray(saved.news) && saved.news.length) news = normalizeNews(saved.news);
  if (Array.isArray(saved.faq) && saved.faq.length) faq = saved.faq;
}

loadContentOverrides();

const translations = {
  pl: {
    skipLink: "Przejdź do treści",
    navAbout: "O ECO CAMP",
    navOffer: "Oferta",
    navGallery: "Galeria",
    navReservations: "Rezerwacje",
    navTours: "Wirtualny spacer",
    navNews: "Aktualności",
    navFaq: "FAQ",
    navContact: "Kontakt",
    navEuProject: "Projekt UE",
    navAdmin: "Admin",
    fontToggle: "A+",
    contrastToggle: "Kontrast",
    heroEyebrow: "ECO CAMP • Braniewo • Warmia i Mazury",
    heroTitle: "Wynajem przyczep kempingowych na Warmii i Mazurach.",
    heroLead: "Wybierz komfortową przyczepę Hobby 495 WFB lub Hobby 545 KMF w Braniewie. Sprawdź zdjęcia, cennik i dostępność, a następnie wyślij zapytanie rezerwacyjne online.",
    heroPrimary: "Zarezerwuj teraz",
    heroSecondary: "Zobacz ofertę",
    heroSearchBtn: "Sprawdź dostępność",
    aboutEyebrow: "O ECO CAMP",
    aboutTitle: "Nowoczesna turystyka blisko natury",
    aboutLead: "ECO CAMP to lokalna marka z Warmii i Mazur, która łączy komfort podróżowania z rozwiązaniami przyjaznymi środowisku. Rozwijamy ofertę przyczep kempingowych, mobilnej przestrzeni coworkingowej i ekologicznego sprzętu wodnego.",
    aboutText: "W projekcie stawiamy na dostępność, cyfrową rezerwację, materiały wideo, wirtualne zwiedzanie oraz rozwiązania wspierające zrównoważony wypoczynek. Chcemy, aby wyjazd z ECO CAMP był wygodny, odpowiedzialny i dobrze dopasowany do różnych stylów podróżowania.",
    aboutInnovationTitle: "Innowacyjna oferta",
    aboutInnovationText: "Przyczepy z fotowoltaiką, funkcją coworkingową oraz rozwijany ekologiczny sprzęt wodny.",
    aboutAccessTitle: "Dostępność",
    aboutAccessText: "Udogodnienia dla osób z niepełnosprawnościami, seniorów i rodzin potrzebujących większego komfortu.",
    aboutDigitalTitle: "Rezerwacja online",
    aboutDigitalText: "Formularz zapytań, kalendarz dostępności, galeria zdjęć oraz materiały wideo pomagające wybrać właściwą przyczepę.",
    stepOneTitle: "1. Wybierz sprzęt",
    stepOneText: "Wybierz przyczepę kempingową z oferty.",
    stepTwoTitle: "2. Zaznacz zakres dat",
    stepTwoText: "Kliknij na kalendarzu dzień początkowy (od) oraz końcowy (do).",
    stepThreeTitle: "3. Wyślij zapytanie",
    stepThreeText: "Po potwierdzeniu dostępności otrzymasz szczegóły rezerwacji i płatności.",
    offerEyebrow: "Nasza Oferta",
    offerTitle: "Przyczepy kempingowe",
    offerLead: "Trzy pozycje rezerwacyjne: Hobby 495 WFB z funkcją coworkingową oraz dwa egzemplarze Hobby 545 KMF De Luxe, w tym jeden przystosowany dla osób z niepełnosprawnościami.",
    productImage: "Zdjęcie",
    reserveItem: "Wybierz do rezerwacji",
    waterEyebrow: "Sprzęt wodny",
    waterTitle: "Sprzęt wodny w projekcie",
    waterLead: "W projekcie są dwa różne elementy sprzętu wodnego: łódź elektryczna Quicksilver 525 Axess dla 6 osób oraz innowacyjna dmuchana łódź solarno-elektryczna. Szczegóły dostępności zostaną uzupełnione po wdrożeniu.",
    comingSoon: "Wkrótce",
    detailsLater: "Szczegóły w późniejszym terminie",
    quicksilverTitle: "Quicksilver 525 Axess",
    quicksilverText: "Łódź elektryczna dla 6 osób z silnikiem Mercury Avator E35 XLRC, dwiema bateriami litowo-jonowymi 48 V, sterowaniem hydraulicznym oraz udogodnieniami dostępnościowymi: uchwytami wejściowymi, oznaczeniami kontrastowymi i piktogramami.",
    quicksilverSpecPeople: "6 osób",
    quicksilverSpecMotor: "Silnik 3700 W",
    quicksilverSpecBatteries: "2 baterie 2,3 kWh",
    quicksilverSpecWeight: "Waga 730 kg",
    quicksilverSpecAccess: "Udogodnienia dostępnościowe",
    solarBoatTitle: "Dmuchana łódź solarno-elektryczna",
    solarBoatText: "Osobny produkt projektowy: innowacyjna łódź dmuchana z technologią Drop-Stitch, napędem elektrycznym i zasilaniem panelami fotowoltaicznymi. Po spuszczeniu powietrza ma mieć kompaktowy rozmiar 122 x 61 x 61 cm.",
    solarBoatSpecDrive: "Technologia Drop-Stitch",
    solarBoatSpecSolar: "Panele fotowoltaiczne",
    solarBoatSpecRange: "Minimum 6 godzin pracy",
    solarBoatSpecSize: "122 x 61 x 61 cm po złożeniu",
    galleryEyebrow: "Zdjęcia Przyczep",
    galleryTitle: "Galeria ECO CAMP",
    galleryLead: "Zdjęcia przyczep Hobby 495 WFB oraz Hobby 545 KMF: wnętrza, układy spania, łazienki, kuchnie i ujęcia zewnętrzne.",
    galleryOpen: "Powiększ zdjęcie",
    galleryClose: "Zamknij galerię",
    toursEyebrow: "Wideo",
    toursTitle: "Zobacz przyczepy przed rezerwacją",
    toursLead: "Materiały wideo z przyczep pomagają obejrzeć układ i wyposażenie przed wysłaniem zapytania.",
    virtualWalksEyebrow: "Spacery 360°",
    virtualWalksTitle: "Wejdź do środka online",
    virtualWalksText: "Oficjalne spacery 360° Hobby pozwalają obejrzeć układ wnętrza przyczep 495 WFB oraz 545 KMF przed wysłaniem zapytania.",
    virtualWalkOpen: "Otwórz spacer 360° w nowej karcie",
    reservationEyebrow: "Kalendarz i Formularz",
    reservationTitle: "Sprawdź dostępność i zarezerwuj",
    reservationLead: "Wybierz pozycję z listy, zaznacz zakres dat bezpośrednio na kalendarzu i wyślij zapytanie. Obowiązuje cennik sezonowy. Potwierdzenie wysyłamy na adres mailowy.",
    fieldProduct: "Wybierz przyczepę lub łódź",
    fieldStartDate: "Data rozpoczęcia (Od)",
    fieldEndDate: "Data zakończenia (Do)",
    fieldName: "Imię i nazwisko",
    fieldEmail: "Adres e-mail",
    fieldPhone: "Numer telefonu",
    fieldGuests: "Liczba gości",
    fieldMessage: "Wiadomość / Pytania dodatkowe",
    privacyConsent: "Akceptuję regulamin wynajmu oraz wyrażam zgodę na przetwarzanie moich danych w celu realizacji zapytania rezerwacyjnego.",
    formNote: "*To jest zapytanie rezerwacyjne. Po weryfikacji dostępności wyślemy e-mail z potwierdzeniem oraz szczegółami rezerwacji.",
    sendRequest: "Wyślij zapytanie rezerwacyjne",
    formSent: "Dziękujemy! Przygotowaliśmy wiadomość e-mail z zapytaniem rezerwacyjnym. Wyślij ją ze swojego programu pocztowego, aby trafiła do ECO CAMP.",
    formBotRejected: "Nie udało się wysłać formularza. Odśwież stronę i spróbuj ponownie.",
    formRateLimited: "Poczekaj chwilę przed kolejną próbą wysłania formularza.",
    bankHeading: "Kaucja i opłaty dodatkowe",
    bankText: "Kaucja zwrotna: 3000 zł. Serwis: 350 zł (sprzątanie, chemia, gaz). Wyjazd poza granice Polski: dodatkowa jednorazowa opłata eksploatacyjna 350 zł.",
    legendAvailable: "Dostępne",
    legendSelected: "Twój wybór",
    available: "Wolne",
    booked: "Zajęte",
    pricesEyebrow: "Przejrzysty Cennik",
    pricesTitle: "Ceny za dobę w zależności od sezonu",
    pricesText: "Ceny różnią się w zależności od modelu i terminu. Poniżej znajdziesz konkretne stawki, zakresy dat, minimalny czas wynajmu oraz opłaty dodatkowe.",
    pricingTableEyebrow: "Stawki dzienne",
    pricingTableTitle: "Cennik przyczep",
    pricingColModel: "Przyczepa",
    pricingColSeason: "Sezon",
    pricingColDates: "Termin",
    pricingColMin: "Minimum",
    pricingColPrice: "Cena",
    pricing495Note: "4–5 osób",
    pricing545Note: "2 sztuki • 5–6 osób",
    seasonLow: "Sezon niski",
    seasonMid: "Sezon średni",
    seasonHigh: "Sezon wysoki",
    pricing495LowDates: "1 października – 31 marca",
    pricing495MidDates: "1 kwietnia – 31 maja (Majówka: sezon wysoki)",
    pricing495HighDates: "25 kwietnia – 5 maja oraz 1 czerwca – 30 września",
    pricing545LowDates: "1 października – 31 marca",
    pricing545MidDates: "1 kwietnia – 24 kwietnia, 6 maja – 30 maja, 13 września – 30 września",
    pricing545HighDates: "25 kwietnia – 5 maja oraz 31 maja – 12 września",
    pricingMin5: "min. 5 dni",
    pricingMin7: "min. 7 dni",
    pricingPerNight: "/ doba",
    pricingFeesEyebrow: "Opłaty dodatkowe",
    pricingFeesTitle: "Kaucja, serwis i rabaty",
    pricingDepositLabel: "Kaucja zwrotna",
    pricingServiceLabel: "Opłata serwisowa",
    pricingServiceText: "Sprzątanie, chemia i gaz. Przy wynajmie powyżej 14 dni: gratis.",
    pricingAbroadLabel: "Wyjazd poza Polskę",
    pricingAbroadText: "Jednorazowa opłata eksploatacyjna.",
    pricingDiscountLabel: "Rabat długoterminowy",
    pricingDiscountText: "Przy wynajmie powyżej 21 dni.",
    communityEyebrow: "Współpraca i społeczność",
    communityTitle: "ECO CAMP blisko regionu i klientów",
    communityLead: "Rozwijamy ofertę nie tylko jako wypożyczalnię przyczep, ale też jako lokalną markę turystyczną z Warmii i Mazur. To miejsce na program lojalnościowy, współprace i działania społeczne.",
    communityLoyaltyTitle: "Program lojalnościowy",
    communityLoyaltyText: "Program korzyści obejmuje dłuższe wynajmy, powracających klientów i rezerwacje kilku przyczep. Szczegółowe rabaty potwierdzamy przy rezerwacji.",
    communityLoyaltyService: "Wynajem powyżej 14 dni: opłata serwisowa 350 zł gratis.",
    communityLoyaltyLong: "Wynajem powyżej 21 dni: 5% rabatu zgodnie z cennikiem.",
    communityLoyaltyReturn: "Powracający klienci oraz drugi wynajem w sezonie: możliwość rabatu indywidualnego.",
    communityLoyaltyGroup: "Wynajem dwóch przyczep jednocześnie poza sezonem: rabat ustalany przy rezerwacji.",
    communityPartnersTitle: "Współpraca",
    communityPartnersText: "ECO CAMP rozwija współpracę z lokalnymi instytucjami, organizatorami wydarzeń, miejscami wypoczynku oraz partnerami usług turystycznych.",
    partnerSds: "Środowiskowy Dom Samopomocy w Żelaznej Górze",
    partnerTolkmicko: "Kultura Tolkmicko",
    partnerBartoszyce: "Bartoszycki Dom Kultury",
    partnerOsada: "oSADa nad Zalewem",
    partnerAlejazda: "ALEJAZDA - serwis i wypożyczalnia rowerów",
    partnerGmina: "Gmina Braniewo",
    partnerBck: "Braniewskie Centrum Kultury",
    communitySocialTitle: "Kampanie społeczne i ekologiczne",
    communitySocialText: "ECO CAMP może włączać się lokalnie w rozpoznawalne inicjatywy promujące odpowiedzialną turystykę, edukację ekologiczną i ochronę przyrody.",
    communityCampaignEarthHour: "Godzina dla Ziemi WWF",
    communityCampaignCleanup: "Sprzątanie Świata Polska",
    communityCampaignEarthDay: "Międzynarodowy Dzień Ziemi",
    communityCampaignLeaveNoTrace: "Leave No Trace",
    projectEquipmentEyebrow: "Rozwój oferty",
    projectEquipmentTitle: "Ekologiczny sprzęt wodny w projekcie ECO CAMP",
    projectEquipmentText: "Projekt obejmuje wdrożenie ekologicznego sprzętu wodnego: łodzi elektrycznej oraz dmuchanej łodzi solarno-elektrycznej z napędem elektrycznym. Szczegóły udostępnienia sprzętu zostaną podane po zakończeniu etapu wdrożenia.",
    newsEyebrow: "Wiadomości",
    newsTitle: "Aktualności ECO CAMP",
    newsLead: "Sprawdź co słychać w ECO CAMP, przeczytaj o nowych udogodnieniach oraz dowiedz się więcej o projekcie dofinansowanym z funduszy UE.",
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
    contactTitle: "Skontaktuj się z ECO CAMP",
    contactText: "Masz pytania dotyczące sprzętu? Chcesz zarezerwować konkretny termin lub potrzebujesz indywidualnych udogodnień? Napisz e-mail lub skontaktuj się przez nasz profil na Facebooku.",
    contactPhoneLabel: "Telefon",
    contactEmailLabel: "E-mail",
    contactLocationLabel: "Lokalizacja",
    facebookLink: "Odwiedź nas na Facebooku",
    mapPlaceholder: "Lokalizacja ECO CAMP: Braniewo, 14-500, Polska",
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
    footerText: "ECO CAMP – Wypożyczalnia przyczep kempingowych na Warmii i Mazurach.",
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
    depositValLabel: "Kaucja:",
    adminDateStart: "Data początkowa (Od)",
    adminDateEnd: "Data końcowa (Do)",
    selectProductFirst: "Wybierz najpierw pozycję z listy.",
    minNightsAlert: "Wybrany termin nie spełnia minimalnego okresu wynajmu dla tego sezonu.",
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
    navAbout: "About ECO CAMP",
    navOffer: "Offer",
    navGallery: "Gallery",
    navReservations: "Reservations",
    navTours: "Virtual tour",
    navNews: "News",
    navFaq: "FAQ",
    navContact: "Contact",
    navEuProject: "EU Project",
    navAdmin: "Admin",
    fontToggle: "A+",
    contrastToggle: "Contrast",
    heroEyebrow: "ECO CAMP • Braniewo • Warmia & Masuria",
    heroTitle: "Camping caravan rental in Warmia and Masuria.",
    heroLead: "Choose a comfortable Hobby 495 WFB or Hobby 545 KMF caravan in Braniewo. View photos, pricing and availability, then send your booking request online.",
    heroPrimary: "Book Now",
    heroSecondary: "View Offer",
    heroSearchBtn: "Check Availability",
    aboutEyebrow: "About ECO CAMP",
    aboutTitle: "Modern tourism close to nature",
    aboutLead: "ECO CAMP is a local Warmia and Masuria brand combining travel comfort with environmentally friendly solutions. We are developing caravan rental, a mobile coworking space and eco-friendly water equipment.",
    aboutText: "The project focuses on accessibility, online booking, video materials, virtual tours and solutions supporting sustainable leisure. We want every ECO CAMP trip to be comfortable, responsible and suited to different travel styles.",
    aboutInnovationTitle: "Innovative offer",
    aboutInnovationText: "Caravans with solar panels, a coworking setup and eco-friendly water equipment in development.",
    aboutAccessTitle: "Accessibility",
    aboutAccessText: "Amenities for people with disabilities, seniors and families needing extra comfort.",
    aboutDigitalTitle: "Online booking",
    aboutDigitalText: "Inquiry form, availability calendar, photo gallery and video materials that help choose the right caravan.",
    stepOneTitle: "1. Choose Equipment",
    stepOneText: "Choose a camping trailer from the offer.",
    stepTwoTitle: "2. Mark Dates on Calendar",
    stepTwoText: "Click the start date (from) and end date (to) on the calendar.",
    stepThreeTitle: "3. Send a Request",
    stepThreeText: "After availability is confirmed, you will receive booking and payment details.",
    offerEyebrow: "Our Offer",
    offerTitle: "Camping Caravans",
    offerLead: "Three booking items: Hobby 495 WFB with a coworking setup and two Hobby 545 KMF De Luxe units, including one adapted for people with disabilities.",
    productImage: "Photo",
    reserveItem: "Select for Booking",
    waterEyebrow: "Water equipment",
    waterTitle: "Water equipment in the project",
    waterLead: "The project includes two different water equipment items: the Quicksilver 525 Axess electric boat for 6 people and an innovative inflatable solar-electric boat. Availability details will be added after implementation.",
    comingSoon: "Coming soon",
    detailsLater: "Details to follow",
    quicksilverTitle: "Quicksilver 525 Axess",
    quicksilverText: "An electric boat for 6 people with a Mercury Avator E35 XLRC motor, two 48 V lithium-ion batteries, hydraulic steering and accessibility features: boarding handles, contrast markings and pictograms.",
    quicksilverSpecPeople: "6 people",
    quicksilverSpecMotor: "3700 W motor",
    quicksilverSpecBatteries: "2 batteries 2.3 kWh",
    quicksilverSpecWeight: "730 kg weight",
    quicksilverSpecAccess: "Accessibility features",
    solarBoatTitle: "Inflatable solar-electric boat",
    solarBoatText: "A separate project product: an innovative inflatable boat with Drop-Stitch technology, electric propulsion and photovoltaic panel power. After deflation it is planned to have a compact size of 122 x 61 x 61 cm.",
    solarBoatSpecDrive: "Drop-Stitch technology",
    solarBoatSpecSolar: "Photovoltaic panels",
    solarBoatSpecRange: "Minimum 6 hours of operation",
    solarBoatSpecSize: "122 x 61 x 61 cm when packed",
    galleryEyebrow: "Caravan Photos",
    galleryTitle: "ECO CAMP Gallery",
    galleryLead: "Photos of Hobby 495 WFB and Hobby 545 KMF caravans: interiors, sleeping layouts, bathrooms, kitchens and exterior views.",
    galleryOpen: "Open photo",
    galleryClose: "Close gallery",
    toursEyebrow: "Video tours",
    toursTitle: "View the caravans before booking",
    toursLead: "Video materials help preview each caravan layout and equipment before sending a request.",
    virtualWalksEyebrow: "360° virtual tours",
    virtualWalksTitle: "Step inside online",
    virtualWalksText: "Official Hobby 360° virtual tours let you preview the interior layouts of the 495 WFB and 545 KMF caravans before sending a request.",
    virtualWalkOpen: "Open the 360° tour in a new tab",
    reservationEyebrow: "Calendar & Widget",
    reservationTitle: "Check availability & Request dates",
    reservationLead: "Select an item, mark your date range directly on the calendar and send a request. The caravans use the seasonal price lists provided by the client; booking details are confirmed manually.",
    fieldProduct: "Select caravan",
    fieldStartDate: "Start Date (Check-in)",
    fieldEndDate: "End Date (Check-out)",
    fieldName: "Full Name",
    fieldEmail: "E-mail Address",
    fieldPhone: "Phone Number",
    fieldGuests: "Guests",
    fieldMessage: "Message / Special requests",
    privacyConsent: "I accept the rental terms and agree to the processing of my data for the booking request.",
    formNote: "*This is a booking inquiry. After verification, we will email you a confirmation and booking details.",
    sendRequest: "Send Booking Request",
    formSent: "Thank you! We prepared an e-mail with your booking request. Send it from your mail app so it reaches ECO CAMP.",
    formBotRejected: "The form could not be submitted. Refresh the page and try again.",
    formRateLimited: "Please wait a moment before submitting the form again.",
    bankHeading: "Security deposit and additional fees",
    bankText: "Refundable security deposit: PLN 3,000. Service fee: PLN 350 (cleaning, chemicals, gas). Trips outside Poland: one-time additional operating fee of PLN 350.",
    legendAvailable: "Available",
    legendSelected: "Your Choice",
    available: "Available",
    booked: "Booked",
    pricesEyebrow: "Transparent Pricing",
    pricesTitle: "Daily rates based on season",
    pricesText: "Prices vary by model and date. Below you will find exact rates, date ranges, minimum rental periods and additional fees.",
    pricingTableEyebrow: "Daily rates",
    pricingTableTitle: "Caravan pricing",
    pricingColModel: "Caravan",
    pricingColSeason: "Season",
    pricingColDates: "Dates",
    pricingColMin: "Minimum",
    pricingColPrice: "Price",
    pricing495Note: "4–5 guests",
    pricing545Note: "2 units • 5–6 guests",
    seasonLow: "Low season",
    seasonMid: "Mid season",
    seasonHigh: "High season",
    pricing495LowDates: "October 1 – March 31",
    pricing495MidDates: "April 1 – May 31 (May weekend: high season)",
    pricing495HighDates: "April 25 – May 5 and June 1 – September 30",
    pricing545LowDates: "October 1 – March 31",
    pricing545MidDates: "April 1 – April 24, May 6 – May 30, September 13 – September 30",
    pricing545HighDates: "April 25 – May 5 and May 31 – September 12",
    pricingMin5: "min. 5 days",
    pricingMin7: "min. 7 days",
    pricingPerNight: "/ night",
    pricingFeesEyebrow: "Additional fees",
    pricingFeesTitle: "Deposit, service and discounts",
    pricingDepositLabel: "Refundable deposit",
    pricingServiceLabel: "Service fee",
    pricingServiceText: "Cleaning, chemicals and gas. Free for rentals over 14 days.",
    pricingAbroadLabel: "Trips outside Poland",
    pricingAbroadText: "One-time operating fee.",
    pricingDiscountLabel: "Long-stay discount",
    pricingDiscountText: "For rentals over 21 days.",
    communityEyebrow: "Partnerships & community",
    communityTitle: "ECO CAMP close to the region and its guests",
    communityLead: "We are developing ECO CAMP not only as a caravan rental business, but also as a local tourism brand from Warmia and Masuria. This section covers loyalty, partnerships and community initiatives.",
    communityLoyaltyTitle: "Loyalty programme",
    communityLoyaltyText: "The benefits programme covers longer rentals, returning guests and multi-caravan bookings. Final discounts are confirmed during booking.",
    communityLoyaltyService: "Rentals over 14 days: PLN 350 service fee included.",
    communityLoyaltyLong: "Rentals over 21 days: 5% discount according to the price list.",
    communityLoyaltyReturn: "Returning guests and a second rental in the same season: individual discount possible.",
    communityLoyaltyGroup: "Two caravans rented at the same time outside high season: discount confirmed during booking.",
    communityPartnersTitle: "Partnerships",
    communityPartnersText: "ECO CAMP is developing cooperation with local institutions, event organisers, leisure venues and tourism service partners.",
    partnerSds: "Community Self-Help Centre in Żelazna Góra",
    partnerTolkmicko: "Kultura Tolkmicko",
    partnerBartoszyce: "Bartoszyce Cultural Centre",
    partnerOsada: "oSADa nad Zalewem",
    partnerAlejazda: "ALEJAZDA - bicycle service and rental",
    partnerGmina: "Braniewo Commune",
    partnerBck: "Braniewo Cultural Centre",
    communitySocialTitle: "Social and environmental campaigns",
    communitySocialText: "ECO CAMP can join recognised initiatives locally to promote responsible tourism, environmental education and nature protection.",
    communityCampaignEarthHour: "WWF Earth Hour",
    communityCampaignCleanup: "Clean Up the World Poland",
    communityCampaignEarthDay: "International Earth Day",
    communityCampaignLeaveNoTrace: "Leave No Trace",
    projectEquipmentEyebrow: "Offer development",
    projectEquipmentTitle: "Eco-friendly water equipment in the ECO CAMP project",
    projectEquipmentText: "The project includes the implementation of eco-friendly water equipment: an electric boat and an inflatable solar-electric boat with electric propulsion. Availability details will be published after the implementation stage is completed.",
    newsEyebrow: "News",
    newsTitle: "Latest ECO CAMP news",
    newsLead: "See what is happening at ECO CAMP, read about new amenities and learn more about the EU-funded project.",
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
    contactTitle: "Get in touch with ECO CAMP",
    contactText: "Have questions about our equipment? Need to book specific dates or require individual accessibility arrangements? Send us an e-mail or message us on Facebook.",
    contactPhoneLabel: "Phone",
    contactEmailLabel: "E-mail",
    contactLocationLabel: "Location",
    facebookLink: "Follow us on Facebook",
    mapPlaceholder: "ECO CAMP location: Braniewo, 14-500, Poland",
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
    footerText: "ECO CAMP – Camping caravan rental in Warmia and Masuria, Poland.",
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
    depositValLabel: "Security deposit:",
    adminDateStart: "Start Date (From)",
    adminDateEnd: "End Date (To)",
    selectProductFirst: "Please select an item first.",
    minNightsAlert: "The selected dates do not meet the minimum rental period for this season.",
    bookedDaysSelectedAlert: "The selected date range contains dates that are already booked. Please choose other dates.",
    adminCurrentBlocks: "Currently blocked dates:",
    adminNoBlocks: "No custom blocked dates found.",
    adminTableProduct: "Caravan",
    adminTableDates: "Blocked Date Range",
    adminTableActions: "Action",
    adminDeleteBlock: "Unlock dates",
    adminBlockDeleted: "Dates unlocked successfully."
  }
};

const storageKey = "ecoCampAvailabilityNoDemoBlocks";
const reservationRecipient = "ecocamp.pl@gmail.com";
const minReservationFormTimeMs = 3500;
let lastReservationSubmitAt = 0;
const today = new Date();
let currentLang = "pl";
let currentMonth = new Date(today.getFullYear(), today.getMonth(), 1);

let startDate = null;
let endDate = null;
let activeGalleryItems = [];
let activeGalleryIndex = 0;

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
  products.forEach((product) => {
    dates[product.id] = {};
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

async function fetchRemoteContent() {
  try {
    const response = await fetch("/api/content", { headers: { accept: "application/json" } });
    if (!response.ok) return;

    const data = await response.json();
    if (!data?.configured || !data.content) return;

    applyContentOverrides(data.content);
    translatePage();
    populateSelects();
    renderSelectedProduct();
    renderGallery();
    renderVideos();
    renderNews();
    renderFaq();
    updatePriceDisplay();
  } catch (error) {
    console.warn("Zdalne treści są chwilowo niedostępne:", error);
  }
}

async function fetchRemoteAvailability() {
  try {
    const response = await fetch("/api/availability", { headers: { accept: "application/json" } });
    if (!response.ok) return;

    const data = await response.json();
    if (!data?.configured || !data.availability) return;

    availability = { ...getDemoAvailability(), ...data.availability };
    renderCalendar();
    renderAdminBlocksList();
  } catch (error) {
    console.warn("Zdalna dostępność jest chwilowo niedostępna:", error);
  }
}

function getSelectedProduct() {
  const select = document.querySelector("#reservation-product");
  return products.find((product) => product.id === select.value) || products[0];
}

function isBooked(productId, dateKey) {
  return availability[productId]?.[dateKey] === "booked";
}

function isDateInRange(date, startMonth, startDay, endMonth, endDay) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const value = month * 100 + day;
  return value >= startMonth * 100 + startDay && value <= endMonth * 100 + endDay;
}

function getSeasonKey(product, date) {
  if (product?.seasonPlan === "hobby495") {
    if (isDateInRange(date, 4, 25, 5, 5) || isDateInRange(date, 6, 1, 9, 30)) {
      return "high";
    }

    if (isDateInRange(date, 4, 1, 5, 31)) {
      return "medium";
    }

    return "low";
  }

  if (isDateInRange(date, 4, 25, 5, 5) || isDateInRange(date, 5, 31, 9, 12)) {
    return "high";
  }

  if (isDateInRange(date, 4, 1, 4, 24) || isDateInRange(date, 5, 6, 5, 30) || isDateInRange(date, 9, 13, 9, 30)) {
    return "medium";
  }

  return "low";
}

function getSeasonRate(product, date) {
  const season = getSeasonKey(product, date);
  if (season === "high") return product.priceHigh;
  if (season === "medium") return product.priceMedium ?? product.priceLow;
  return product.priceLow;
}

function getMinNightsForRange(product, startStr, endStr) {
  if (!product || !startStr || !endStr) return product?.minNightsDefault || 3;
  const start = parseDate(startStr);
  const end = parseDate(endStr);
  if (isNaN(start) || isNaN(end) || start >= end) return product.minNightsDefault || 3;

  const current = new Date(start);
  while (current < end) {
    if (getSeasonKey(product, current) === "high") {
      return product.minNightsHigh || product.minNightsDefault || 3;
    }
    current.setDate(current.getDate() + 1);
  }

  return product.minNightsDefault || 3;
}

function calculateRangePrice(productId, startStr, endStr) {
  const product = products.find(p => p.id === productId);
  if (!product || !startStr || !endStr) return { total: null, subtotal: null, count: 0, discount: 0 };
  if (product.priceLow === null || product.priceHigh === null) return { total: null, subtotal: null, count: 0, discount: 0 };
  
  const start = parseDate(startStr);
  const end = parseDate(endStr);
  
  if (isNaN(start) || isNaN(end) || start > end) return { total: null, subtotal: null, count: 0, discount: 0 };
  
  let total = 0;
  let count = 0;
  
  const current = new Date(start);
  // Nightly rental (June 20 to June 21 is 1 night)
  while (current < end) {
    const price = getSeasonRate(product, current);
    total += price;
    count++;
    current.setDate(current.getDate() + 1);
  }
  
  const subtotal = total;
  const discount = count > 21 ? Math.round(subtotal * 0.05) : 0;
  total = subtotal - discount;
  return { total, subtotal, count, discount };
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

function getMinNightsAlert(product, startStr, endStr) {
  const minNights = getMinNightsForRange(product, startStr, endStr);
  return currentLang === "pl"
    ? `Minimalny okres wynajmu dla wybranego terminu wynosi ${minNights} ${minNights === 1 ? "dobę" : "dób"}.`
    : `The minimum rental period for the selected dates is ${minNights} ${minNights === 1 ? "night" : "nights"}.`;
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
  renderGallery();
  renderVideos();
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

  // Fix orphans for dynamically rendered texts
  if (typeof fixOrphans === 'function') {
    fixOrphans();
  }
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
  if (!list) return;

  list.innerHTML = products
    .filter((product) => product.showInOffer !== false)
    .map((product, index) => {
      const isCamper = product.type === "camper";
      const displayTitle = product.offerTitle?.[currentLang] || product.title[currentLang];
      const displayShort = product.offerShort?.[currentLang] || product.short[currentLang];
      const displayDescription = product.offerDescription?.[currentLang] || product.description[currentLang];
      const unitLabel = isCamper ? (currentLang === 'pl' ? 'doba' : 'night') : (currentLang === 'pl' ? 'dzień' : 'day');
      const specsHtml = product.specs[currentLang]
        .map((spec) => `<li>${getSpecIcon(spec)} <span>${spec}</span></li>`)
        .join("");
      const priceBoxes = [
        { label: currentLang === 'pl' ? 'Sezon niski' : 'Low season', value: product.priceLow },
        ...(product.priceMedium !== undefined ? [{ label: currentLang === 'pl' ? 'Sezon średni' : 'Mid season', value: product.priceMedium }] : []),
        { label: currentLang === 'pl' ? 'Sezon wysoki' : 'High season', value: product.priceHigh, accent: true }
      ].map((price) => `
        <div class="price-box">
          <span class="price-lbl">${price.label}</span>
          <span class="price-val ${price.accent ? 'text-accent' : ''}">
            ${price.value !== null && price.value !== undefined ? price.value + ' zł / ' + unitLabel : (currentLang === 'pl' ? 'do uzupełnienia' : 'TBD')}
          </span>
        </div>
      `).join("");
        
      const delayClass = index % 3 === 0 ? "" : (index % 3 === 1 ? "delay-100" : "delay-200");
        
      return `
        <article class="product-card reveal revealed ${delayClass}" id="card-${product.id}">
          <div class="product-image-container">
            <img class="product-image" src="${product.image}" alt="${translations[currentLang].productImage}: ${displayTitle}" loading="lazy">
            <span class="product-badge badge-camper">
              ${currentLang === 'pl' ? 'Przyczepa' : 'Caravan'}
            </span>
          </div>
          <div class="product-body">
            <p class="eyebrow">${displayShort}</p>
            <h3>${displayTitle}</h3>
            <p class="product-desc">${displayDescription}</p>
            
            <div class="product-specs-title">${currentLang === 'pl' ? 'Specyfikacja:' : 'Specifications:'}</div>
            <ul class="product-meta">
              ${specsHtml}
            </ul>
            
            <div class="product-price-info">
              ${priceBoxes}
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
      if (select) select.value = link.dataset.productId;
      startDate = null;
      endDate = null;
      const startInput = document.querySelector("#start-date");
      const endInput = document.querySelector("#end-date");
      if (startInput) startInput.value = "";
      if (endInput) endInput.value = "";
      
      renderSelectedProduct();
      updatePriceDisplay();
      renderCalendar();
    });
  });
}

function renderNews() {
  const newsList = document.querySelector("#news-list");
  if (!newsList) return;

  const items = Array.isArray(news) && news.length ? news : defaultNews;
  newsList.innerHTML = items
    .map(
      (item, index) => {
        const delayClass = index % 3 === 0 ? "" : (index % 3 === 1 ? "delay-100" : "delay-200");
        const title = item.title?.[currentLang] || item.title?.pl || item.title?.en || "";
        const text = item.text?.[currentLang] || item.text?.pl || item.text?.en || "";
        const date = item.date?.[currentLang] || item.date?.pl || item.date?.en || "";
        const readMore = item.readMore?.[currentLang] || item.readMore?.pl || item.readMore?.en || (currentLang === "pl" ? "Czytaj całość" : "Read more");
        const slug = item.slug || "#news";
        return `
          <article class="news-card reveal revealed ${delayClass}">
          <a class="news-card-link" href="${slug}" aria-label="${readMore}: ${title}">
          ${item.image ? `
            <div class="news-image-container">
              <img src="${item.image}" alt="${title}" loading="lazy">
            </div>
          ` : ""}
          <div class="news-content">
            <div class="news-meta-row">
              <span class="news-date">${date}</span>
            </div>
            <h3>${title}</h3>
            <p>${text}</p>
            <span class="news-read-more">${readMore}</span>
          </div>
          </a>
        </article>
      `;
      }
    )
    .join("");
}

function renderGallery() {
  const galleryList = document.querySelector("#gallery-list");
  if (!galleryList) return;

  const galleryGroups = [
    products.find((product) => product.id === "hobby-495-wfb"),
    products.find((product) => product.id === "hobby-545-kmf-1")
  ].filter(Boolean);

  galleryList.innerHTML = galleryGroups.map((product, groupIndex) => {
    const photos = product.gallery || [];
    return `
      <article class="gallery-group reveal revealed ${groupIndex === 1 ? "delay-100" : ""}">
        <div class="gallery-group-heading">
          <p class="eyebrow">${product.short[currentLang]}</p>
          <h3>${product.title[currentLang]}</h3>
        </div>
          <div class="gallery-strip">
          ${photos.map((photo, index) => `
            <button class="gallery-thumb" type="button" data-gallery-group="${product.id}" data-gallery-index="${index}" data-gallery-src="${photo}" data-gallery-alt="${product.title[currentLang]} - ${index + 1}" aria-label="${translations[currentLang].galleryOpen}: ${product.title[currentLang]} ${index + 1}">
              <img src="${photo}" alt="${product.title[currentLang]} - ${index + 1}" loading="lazy">
            </button>
          `).join("")}
        </div>
      </article>
    `;
  }).join("");

  galleryList.querySelectorAll("[data-gallery-src]").forEach((button) => {
    button.addEventListener("click", () => {
      const product = galleryGroups.find((item) => item.id === button.dataset.galleryGroup);
      const photos = product?.gallery || [button.dataset.gallerySrc];
      const items = photos.map((photo, index) => ({
        src: photo,
        alt: `${product?.title?.[currentLang] || ""} - ${index + 1}`.trim()
      }));
      openGalleryLightbox(items, Number(button.dataset.galleryIndex || 0));
    });
  });
}

function renderVideos() {
  const videoList = document.querySelector("#video-list");
  if (!videoList) return;

  videoList.innerHTML = videos.map((video, index) => `
    <article class="video-card reveal revealed ${index === 1 ? "delay-100" : ""}">
      <video controls preload="metadata" playsinline poster="${video.poster}">
        <source src="${video.src}">
      </video>
      <div class="video-card-body">
        <h3>${video.title[currentLang]}</h3>
        <p>${video.text[currentLang]}</p>
      </div>
    </article>
  `).join("");
}

function updateGalleryLightboxImage() {
  const image = document.querySelector("#gallery-lightbox-img");
  const counter = document.querySelector("#gallery-lightbox-counter");
  if (!image || activeGalleryItems.length === 0) return;

  const item = activeGalleryItems[activeGalleryIndex];
  image.src = item.src;
  image.alt = item.alt || "";
  if (counter) {
    counter.textContent = `${activeGalleryIndex + 1} / ${activeGalleryItems.length}`;
  }
}

function navigateGalleryLightbox(direction) {
  if (activeGalleryItems.length <= 1) return;
  activeGalleryIndex = (activeGalleryIndex + direction + activeGalleryItems.length) % activeGalleryItems.length;
  updateGalleryLightboxImage();
}

function openGalleryLightbox(items, index = 0) {
  const lightbox = document.querySelector("#gallery-lightbox");
  if (!lightbox || !items?.length) return;

  activeGalleryItems = items;
  activeGalleryIndex = Math.max(0, Math.min(index, activeGalleryItems.length - 1));
  updateGalleryLightboxImage();
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
  document.querySelector("#gallery-lightbox-next")?.focus();
}

function closeGalleryLightbox() {
  const lightbox = document.querySelector("#gallery-lightbox");
  const image = document.querySelector("#gallery-lightbox-img");
  if (!lightbox || !image) return;

  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
  image.src = "";
  activeGalleryItems = [];
  activeGalleryIndex = 0;
}

function initHeroSlideshow() {
  const slides = Array.from(document.querySelectorAll(".hero-slide"));
  if (slides.length < 2 || heroImages.length === 0) return;

  slides[0].style.setProperty("--hero-image", `url("${heroImages[0]}")`);
  slides[1].style.setProperty("--hero-image", `url("${heroImages[1] || heroImages[0]}")`);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || heroImages.length < 2) {
    return;
  }

  let activeSlide = 0;
  let imageIndex = 0;

  window.setInterval(() => {
    const nextSlide = activeSlide === 0 ? 1 : 0;
    imageIndex = (imageIndex + 1) % heroImages.length;
    slides[nextSlide].style.setProperty("--hero-image", `url("${heroImages[imageIndex]}")`);
    slides[nextSlide].classList.add("is-active");
    slides[activeSlide].classList.remove("is-active");
    activeSlide = nextSlide;
  }, 6500);
}

function renderFaq() {
  const faqList = document.querySelector("#faq-list");
  if (!faqList) return;

  faqList.innerHTML = faq
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
  if (!card) return;

  const rates = [
    `${currentLang === 'pl' ? 'Niski' : 'Low'}: <strong>${product.priceLow !== null ? product.priceLow + ' zł' : (currentLang === 'pl' ? 'do uzupełnienia' : 'TBD')}</strong>`,
    ...(product.priceMedium !== undefined ? [`${currentLang === 'pl' ? 'Średni' : 'Mid'}: <strong>${product.priceMedium} zł</strong>`] : []),
    `${currentLang === 'pl' ? 'Wysoki' : 'High'}: <strong class="text-accent">${product.priceHigh !== null ? product.priceHigh + ' zł' : (currentLang === 'pl' ? 'do uzupełnienia' : 'TBD')}</strong>`
  ].join(" | ");

  card.innerHTML = `
    <div class="selected-product-img">
      <img src="${product.image}" alt="${product.title[currentLang]}">
    </div>
    <div class="selected-product-info">
      <h3>${product.title[currentLang]}</h3>
      <p class="short-spec">${product.short[currentLang]}</p>
      <div class="seasonal-rates">
        ${rates}
      </div>
    </div>
  `;
}

function updatePriceDisplay() {
  const product = getSelectedProduct();
  const container = document.querySelector("#price-calc-container");
  if (!container) return;
  
  if (!startDate || !endDate) {
    container.innerHTML = `
      <div class="price-placeholder-box">
        <p>${translations[currentLang].pricePlaceholder}</p>
      </div>
    `;
    return;
  }

  const isCamper = product.type === "camper";
  
  // If product has no price yet, show placeholder
  if (product.priceLow === null || product.priceHigh === null) {
    const { count } = (() => {
      const start = parseDate(startDate);
      const end = parseDate(endDate);
      if (isNaN(start) || isNaN(end)) return { count: 0 };
      let c = 0;
      const cur = new Date(start);
      if (isCamper) { while (cur < end) { c++; cur.setDate(cur.getDate() + 1); } }
      else { while (cur <= end) { c++; cur.setDate(cur.getDate() + 1); } }
      return { count: c };
    })();
    const durationLabel = isCamper ? translations[currentLang].durationLabelNights : translations[currentLang].durationLabelDays;
    container.innerHTML = `
      <div class="price-summary-card">
        <h4 class="summary-title">${currentLang === 'pl' ? 'Podsumowanie' : 'Summary'}</h4>
        <div class="summary-details">
          <div class="summary-row">
            <span>${durationLabel}</span>
            <strong>${count}</strong>
          </div>
          <div class="summary-row">
            <span>${translations[currentLang].totalCostLabel}</span>
            <strong class="total-price-text" style="color:var(--accent)">${currentLang === 'pl' ? 'do uzupełnienia' : 'TBD'}</strong>
          </div>
          <div class="summary-row deposit-row">
            <span>${translations[currentLang].depositValLabel}</span>
            <strong class="deposit-price-text text-accent">${currentLang === 'pl' ? 'do uzupełnienia' : 'TBD'}</strong>
          </div>
        </div>
        <div class="deposit-explanation">
          <p>${currentLang === 'pl' ? 'Cennik dla tego produktu jest w trakcie uzupełniania. Skontaktuj się z nami, aby uzyskać wycenę.' : 'Pricing for this product is being finalized. Please contact us for a quote.'}</p>
        </div>
      </div>
    `;
    return;
  }

  const { total, count, discount } = calculateRangePrice(product.id, startDate, endDate);
  
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
        ${discount > 0 ? `
          <div class="summary-row">
            <span>${currentLang === 'pl' ? 'Rabat za wynajem powyżej 21 dni' : 'Discount for rentals over 21 days'}</span>
            <strong class="text-accent">-${discount} PLN</strong>
          </div>
        ` : ""}
        <div class="summary-row">
          <span>${translations[currentLang].totalCostLabel}</span>
          <strong class="total-price-text">${total} PLN</strong>
        </div>
      </div>
      <div class="deposit-explanation">
        <p>${currentLang === 'pl' 
          ? `${count > 14 ? 'Przy wynajmie powyżej 14 dni opłata serwisowa gratis. Do ceny doliczana jest kaucja zwrotna 3000 zł. ' : 'Do ceny doliczana jest kaucja zwrotna 3000 zł oraz serwis 350 zł, chyba że warunki wynajmu stanowią inaczej. '}Wyjazd poza Polskę: dodatkowe 350 zł.` 
          : `${count > 14 ? 'For rentals over 14 days, the service fee is included. A refundable PLN 3,000 deposit is added. ' : 'A refundable PLN 3,000 deposit and PLN 350 service fee are added unless rental terms state otherwise. '}Trips outside Poland: additional PLN 350.`}</p>
      </div>
    </div>
  `;
}

function renderCalendar() {
  const product = getSelectedProduct();
  const grid = document.querySelector("#calendar-grid");
  const title = document.querySelector("#calendar-title");
  if (!grid || !title) return;
  
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
      // Validate camper minimum stay for the selected season.
      if (product.type === "camper") {
        const diffNights = Math.round((clickVal - startVal) / (1000 * 60 * 60 * 24));
        const minNights = getMinNightsForRange(product, startDate, dateKey);
        if (diffNights < minNights) {
          alert(getMinNightsAlert(product, startDate, dateKey));
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

  const startInput = document.querySelector("#start-date");
  const endInput = document.querySelector("#end-date");
  if (startInput) startInput.value = startDate || "";
  if (endInput) endInput.value = endDate || "";

  renderCalendar();
  updatePriceDisplay();
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
  const startInput = document.querySelector("#start-date");
  const endInput = document.querySelector("#end-date");
  if (startInput) startInput.value = "";
  if (endInput) endInput.value = "";
  
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

// Admin panel moved to admin.html — no longer rendered on main page
function renderAdminPanel() { /* noop — panel at /admin.html */ }


// Language switcher — handles both classic buttons and the dropdown variant
function setLang(lang) {
  currentLang = lang;
  translatePage();
  // Update the dropdown trigger label if present
  const trigger = document.querySelector(".lang-current");
  if (trigger) {
    trigger.dataset.lang = lang;
    trigger.innerHTML = lang.toUpperCase() + ' <span class="lang-arrow">▾</span>';
  }
}

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => setLang(button.dataset.lang));
});

document.querySelectorAll(".lang-option").forEach((button) => {
  button.addEventListener("click", () => setLang(button.dataset.lang));
});

const accessibilityPrefsKey = "ecoCampAccessibilityPrefs";
const fontToggle = document.querySelector("#font-toggle");
const contrastToggle = document.querySelector("#contrast-toggle");
const fontToggles = document.querySelectorAll("#font-toggle, [data-accessibility-toggle='font']");
const contrastToggles = document.querySelectorAll("#contrast-toggle, [data-accessibility-toggle='contrast']");

function getAccessibilityPrefs() {
  try {
    return JSON.parse(localStorage.getItem(accessibilityPrefsKey)) || {};
  } catch {
    return {};
  }
}

function saveAccessibilityPrefs(prefs) {
  localStorage.setItem(accessibilityPrefsKey, JSON.stringify(prefs));
}

function applyAccessibilityPrefs() {
  const prefs = getAccessibilityPrefs();
  document.documentElement.classList.toggle("large-text", Boolean(prefs.largeText));
  document.body.classList.toggle("high-contrast", Boolean(prefs.highContrast));

  fontToggles.forEach((button) => {
    button.classList.toggle("is-active", Boolean(prefs.largeText));
    button.setAttribute("aria-pressed", String(Boolean(prefs.largeText)));
  });
  contrastToggles.forEach((button) => {
    button.classList.toggle("is-active", Boolean(prefs.highContrast));
    button.setAttribute("aria-pressed", String(Boolean(prefs.highContrast)));
  });
}

fontToggles.forEach((button) => button.addEventListener("click", () => {
  const prefs = getAccessibilityPrefs();
  prefs.largeText = !prefs.largeText;
  saveAccessibilityPrefs(prefs);
  applyAccessibilityPrefs();
}));

contrastToggles.forEach((button) => button.addEventListener("click", () => {
  const prefs = getAccessibilityPrefs();
  prefs.highContrast = !prefs.highContrast;
  saveAccessibilityPrefs(prefs);
  applyAccessibilityPrefs();
}));

document.querySelector("#gallery-lightbox-close")?.addEventListener("click", closeGalleryLightbox);
document.querySelector("#gallery-lightbox-prev")?.addEventListener("click", () => navigateGalleryLightbox(-1));
document.querySelector("#gallery-lightbox-next")?.addEventListener("click", () => navigateGalleryLightbox(1));
document.querySelector("#gallery-lightbox")?.addEventListener("click", (event) => {
  if (event.target.id === "gallery-lightbox") {
    closeGalleryLightbox();
  }
});
document.addEventListener("keydown", (event) => {
  const isLightboxOpen = document.querySelector("#gallery-lightbox")?.classList.contains("is-open");
  if (!isLightboxOpen) return;

  if (event.key === "Escape") {
    closeGalleryLightbox();
  }
  if (event.key === "ArrowLeft") {
    navigateGalleryLightbox(-1);
  }
  if (event.key === "ArrowRight") {
    navigateGalleryLightbox(1);
  }
});

document.querySelector("#reservation-product")?.addEventListener("change", () => {
  startDate = null;
  endDate = null;
  const startInput = document.querySelector("#start-date");
  const endInput = document.querySelector("#end-date");
  if (startInput) startInput.value = "";
  if (endInput) endInput.value = "";
  renderSelectedProduct();
  updatePriceDisplay();
  renderCalendar();
});

document.querySelector("#start-date")?.addEventListener("change", (event) => {
  startDate = event.target.value;
  validateAndRenderDates();
});

document.querySelector("#end-date")?.addEventListener("change", (event) => {
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
      const endInput = document.querySelector("#end-date");
      if (endInput) endInput.value = endDate;
    }
    
    if (product.type === "camper") {
      const diffNights = Math.round((endVal - startVal) / (1000 * 60 * 60 * 24));
      const minNights = getMinNightsForRange(product, startDate, endDate);
      if (diffNights < minNights) {
        alert(getMinNightsAlert(product, startDate, endDate));
        endDate = null;
        const endInput = document.querySelector("#end-date");
        if (endInput) endInput.value = "";
      }
    }

    if (endDate && hasBookedDaysInRange(product.id, startDate, endDate)) {
      alert(translations[currentLang].bookedDaysSelectedAlert);
      endDate = null;
      const endInput = document.querySelector("#end-date");
      if (endInput) endInput.value = "";
    }
  }
  renderCalendar();
  updatePriceDisplay();
}

document.querySelector("#prev-month")?.addEventListener("click", () => {
  currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
  renderCalendar();
});

document.querySelector("#next-month")?.addEventListener("click", () => {
  currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
  renderCalendar();
});

function buildReservationMailto(product, formData) {
  const productName = product?.title?.[currentLang] || product?.title?.pl || "ECO CAMP";
  const { total, count, discount } = product && startDate && endDate
    ? calculateRangePrice(product.id, startDate, endDate)
    : { total: null, count: null, discount: 0 };
  const subject = `Zapytanie rezerwacyjne ECO CAMP - ${productName}`;
  const lines = [
    "Dzien dobry,",
    "",
    "Prosze o potwierdzenie dostepnosci i warunkow rezerwacji.",
    "",
    `Sprzet: ${productName}`,
    `Termin: ${startDate || "-"} - ${endDate || "-"}`,
    `Liczba nocy: ${count || "-"}`,
    total ? `Wycena z kalkulatora: ${total} PLN${discount ? ` (rabat: ${discount} PLN)` : ""}` : "Wycena z kalkulatora: -",
    "",
    `Imie i nazwisko: ${formData.get("name") || "-"}`,
    `E-mail: ${formData.get("email") || "-"}`,
    `Telefon: ${formData.get("phone") || "-"}`,
    `Liczba gosci: ${formData.get("guests") || "-"}`,
    "",
    "Wiadomosc:",
    formData.get("message") || "-",
    "",
    "Wyslano z formularza ECO CAMP."
  ];

  return `mailto:${reservationRecipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

function resetReservationBotTimer() {
  const startedAt = document.querySelector("#form-started-at");
  if (startedAt) startedAt.value = String(Date.now());
}

document.querySelector("#reservation-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const statusEl = document.querySelector("#form-status");
  const form = event.currentTarget;
  const formData = new FormData(form);
  const product = getSelectedProduct();
  const now = Date.now();
  const startedAt = Number(formData.get("formStartedAt") || 0);

  if (formData.get("website") || !startedAt || now - startedAt < minReservationFormTimeMs) {
    statusEl.textContent = translations[currentLang].formBotRejected;
    statusEl.className = "status-message error";
    resetReservationBotTimer();
    return;
  }

  if (now - lastReservationSubmitAt < 15000) {
    statusEl.textContent = translations[currentLang].formRateLimited;
    statusEl.className = "status-message error";
    return;
  }

  lastReservationSubmitAt = now;
  const mailtoHref = buildReservationMailto(product, formData);

  // Save to Supabase if connected
  if (
    typeof supabase !== 'undefined' &&
    typeof SUPABASE_URL !== 'undefined' &&
    SUPABASE_URL !== 'YOUR_SUPABASE_URL_HERE'
  ) {
    try {
      const db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      await db.from('reservations').insert({
        product_id: product?.id || null,
        product_name: product?.title?.[currentLang] || null,
        name: formData.get('name') || null,
        email: formData.get('email') || null,
        phone: formData.get('phone') || null,
        guests: parseInt(formData.get('guests')) || null,
        start_date: startDate || null,
        end_date: endDate || null,
        message: formData.get('message') || null,
        status: 'new',
      });
    } catch (err) {
      console.warn('Supabase save failed (form still submitted):', err);
    }
  }

  statusEl.textContent = translations[currentLang].formSent;
  statusEl.className = "status-message success";
  triggerConfetti();
  window.location.href = mailtoHref;
  form.reset();
  resetReservationBotTimer();
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
const yearElement = document.querySelector("#year");
if (yearElement) yearElement.textContent = new Date().getFullYear();
applyAccessibilityPrefs();
translatePage();
resetReservationBotTimer();
initHeroSlideshow();
fetchRemoteContent();
fetchRemoteAvailability();

// ==========================================================================
// Visual and UX Upgrades Functions
// ==========================================================================

function initScrollReveal() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("revealed"));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -10% 0px", // Trigger when elements are 10% in view
    threshold: 0.05
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".reveal").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add("revealed");
    }
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

// Fix orphans (wiszące spójniki)
function fixOrphans() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let node;
  const orphanRegex = /(^|\s)([a-zA-ZzżźćńółęąśŻŹĆĄŚĘŁÓŃ])\s/g;
  while ((node = walker.nextNode())) {
    if (node.parentElement && !['SCRIPT', 'STYLE'].includes(node.parentElement.tagName)) {
      if (orphanRegex.test(node.nodeValue)) {
        // Run replace twice to handle consecutive orphans (e.g., " i z ")
        node.nodeValue = node.nodeValue
          .replace(orphanRegex, '$1$2\u00A0')
          .replace(orphanRegex, '$1$2\u00A0');
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', fixOrphans);
