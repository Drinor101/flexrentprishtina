import { createContext, useCallback, useContext, useMemo, useState, ReactNode } from 'react';

export type ConsentStatus = 'unset' | 'accepted' | 'rejected';

interface CookieConsentContextType {
  status: ConsentStatus;
  bannerOpen: boolean;
  accept: () => void;
  reject: () => void;
  openSettings: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

const STORAGE_KEY = 'flexrent-cookie-consent';
// Ask again after a year so the choice never goes stale
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

function readStoredConsent(): ConsentStatus {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return 'unset';
    const stored = JSON.parse(raw) as { status?: string; savedAt?: number };
    const fresh = typeof stored.savedAt === 'number' && Date.now() - stored.savedAt < MAX_AGE_MS;
    if (fresh && (stored.status === 'accepted' || stored.status === 'rejected')) {
      return stored.status;
    }
  } catch {
    // unreadable value or storage blocked: treat as no decision yet
  }
  return 'unset';
}

function storeConsent(status: ConsentStatus) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ status, savedAt: Date.now() }));
  } catch {
    // decision applies for this visit only
  }
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<ConsentStatus>(readStoredConsent);
  const [reopened, setReopened] = useState(false);

  const decide = useCallback((next: ConsentStatus) => {
    storeConsent(next);
    setStatus(next);
    setReopened(false);
  }, []);

  const accept = useCallback(() => decide('accepted'), [decide]);
  const reject = useCallback(() => decide('rejected'), [decide]);
  const openSettings = useCallback(() => setReopened(true), []);

  const value = useMemo(
    () => ({ status, bannerOpen: status === 'unset' || reopened, accept, reject, openSettings }),
    [status, reopened, accept, reject, openSettings]
  );

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>;
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within CookieConsentProvider');
  }
  return context;
}
