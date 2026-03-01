# 🏗️ Szop Budowalnik - Strona "Work in Progress"

Humorystyczna strona "Strona w Trakcie Budowy" z uroczym szopem-budowlańcem, który buduje tę stronę cegłę za cegłą.

## 🎯 Zawartość

- **Strona główna** (`index.html`) - Główna strona WIP z humor i ikonografią szopa-budowlańca
- **Polityka Prywatności** (`privacy.html`) - Pełna Polityka Prywatności (wymagana na Android Store)
- **Stylizacja** (`styles.css`) - Nowoczesny, jasny design z niebieskim akcentem
- **Grafika** (`assets/raccoon-builder.png`) - Uroczego szopa w stroju budowlańca

## 📋 Sekcje na stronie

### Strona główna (index.html)
- **Hero sekcja** - Humorystyczny tekst "Ta strona jest budowana przez zapracowanego szopa"
- **Grafika szopa** - Cartoon szopa budującego ścianę z cegieł
- **Kontakt ze szopem** - Trzy karty z email, LinkedIn i GitHub
- **Szacunkowy czas budowy** - Sekcja żartobliwa o postępie
- **Link do Privacy Policy** - Dostęp do pełnej polityki prywatności

### Strona Privacy (privacy.html)
- Ogólna Polityka Prywatności dla CTS Byte
- Zgodna z RODO/GDPR
- Zawiera wszystkie wymagane sekcje dla aplikacji na Android Store

### Strona Wayzza Privacy (wayzza-privacy.html)
- Dedykowana polityka prywatności dla aplikacji Wayzza
- Skupia się na zbieraniu danych lokalizacyjnych (GPS)
- Jasno wyjaśnia że wszystkie dane przechowywane są lokalnie na urządzeniu
- Minimalistyczne i przejrzyste dla użytkowników

## 🎨 Design

- **Kolorystyka**: Jasna, profesjonalna (białe tła, niebieski primary)
- **Responsywny**: Działa idealnie na urządzeniach mobilnych i desktopowych
- **Accessibility**: Dobrze czytany kontrast, semantyczne HTML

## 🚀 Jak uruchomić lokalnie

```bash
# Przejdź do folderu projektu
cd "/media/jw/Files Disk/JW-Files/4 Programowanie/1 Projekty/2026-02 - strona internetowa CTS"

# Uruchom lokalny serwer HTTP
python3 -m http.server 8000

# Otwórz w przeglądarce
# http://localhost:8000
```

## 📝 Jak edytować

### Zmiana kontaktu
Otwórz `index.html` i zamień:
- `kontakt@twojadomena.pl` - na Twój email
- `linkedin.com/in/twojprofil` - na Twój LinkedIn
- `github.com/twojprofil` - na Twój GitHub

### Zmiana tekstów
Wszystkie teksty znajdują się w `index.html` w HTML-u, łatwo je edytować.

### Zmiana kolorystyki
Otwórz `styles.css` i zmodyfikuj sekcję `:root` z zmiennymi CSS:
```css
:root {
  --primary: #0066cc; /* Główny kolor (niebieski) */
  --text: #1a1a1a; /* Kolor tekstu */
  /* itd... */
}
```

## 🌐 Hosting

Do wdrożenia strony na produkcję, używaj jednego z bezpłatnych hostingów statycznych:

- **Vercel** - Najlepszy dla statycznych stron
- **Netlify** - Prosty deploy z repozytorium
- **Cloudflare Pages** - Szybkie, globalne CDN
- **GitHub Pages** - Jeśli masz repozytorium

Wszystkie te platformy wspierają:
- Darmowe SSL
- Domeny niestandardowe
- Redirecty

## 📱 Android Store

Strona zawiera:
- ✅ Ogólną Politykę Prywatności (privacy.html) - dla aplikacji ogólnych
- ✅ Dedykowaną Politykę dla Wayzza (wayzza-privacy.html) - dla aplikacji Wayzza
- ✅ Kontakt/Support (sekcja kontaktu)
- ✅ Professional branding

Możesz teraz publikować aplikacje w Android Store z linkami do odpowiednich polityk prywatności.

## 📂 Struktura plików

```
2026-02 - strona internetowa CTS/
├── index.html              # Strona główna
├── privacy.html            # Ogólna polityka prywatności (CTS Byte)
├── wayzza-privacy.html     # Dedykowana polityka dla aplikacji Wayzza
├── styles.css              # Stylizacja
├── assets/
│   └── raccoon-builder.png # Grafika szopa
├── docs/                   # Dokumentacja
└── README.md               # Ten plik
```

## 🔗 Linki

- General Privacy Policy: `/privacy.html`
- Wayzza Privacy Policy: `/wayzza-privacy.html` - do użycia w aplikacji Wayzza
- Kontakt: `kontakt@twojadomena.pl`

## ⚖️ Licencja

Projekt jest własnością Szopa Budowlańca™ 🏗️

