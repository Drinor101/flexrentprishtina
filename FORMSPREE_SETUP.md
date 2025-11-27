# Formspree Setup Instructions

## Si të konfigurosh Formspree për formën e kontaktit

### Hapi 1: Krijoni një llogari në Formspree
1. Shkoni në [https://formspree.io](https://formspree.io)
2. Klikoni "Sign Up" dhe krijoni një llogari falas
3. Ose identifikohuni nëse keni një llogari

### Hapi 2: Krijoni një formë të re
1. Pas identifikimit, klikoni "New Form"
2. Jepni një emër formës (p.sh. "Flex Rent Contact Form")
3. Formspree do t'ju japë një Form ID (p.sh. `xvgkqjpn`)

### Hapi 3: Përditësoni kodin
1. Hapni `project/src/components/ContactForm.tsx`
2. Gjeni këtë linjë:
   ```typescript
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORMSPREE_ID';
   ```
3. Zëvendësoni `YOUR_FORMSPREE_ID` me ID-në tuaj nga Formspree
   P.sh.:
   ```typescript
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvgkqjpn';
   ```

### Hapi 4: Testoni formën
1. Ekzekutoni aplikacionin
2. Plotësoni formën dhe dërgoni
3. Kontrolloni email-in tuaj për mesazhin e ri nga Formspree

### Shënime:
- Plani falas i Formspree lejon deri në 50 dërgesa në muaj
- Të gjitha dërgesat do të shkojnë në email-in që keni përdorur për regjistrim
- Mund të konfiguroni email-e shtesë në dashboard-in e Formspree

### Alternativë: Përdorimi i environment variable
Nëse dëshironi ta bëni më të sigurt, mund të përdorni një environment variable:

1. Krijo një skedar `.env` në rrënjë të projektit:
   ```
   VITE_FORMSPREE_ID=xvgkqjpn
   ```

2. Përditësoni `ContactForm.tsx`:
   ```typescript
   const FORMSPREE_ENDPOINT = `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`;
   ```

3. Shtoni `.env` në `.gitignore` për të mos e publikuar ID-në tuaj

