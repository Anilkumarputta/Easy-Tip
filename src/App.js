import { useEffect, useMemo, useState } from 'react';
import LogoIcon from './assets/LogoIcon';
import Card from './components/Card';
import Footer from './components/Footer';
import Contexts from './contexts/Contexts';
const STORAGE_KEY = 'easy-tip-preferences-v1';

const profileDefaults = {
  Dinner: 15,
  'Office Lunch': 10,
  NightOut: 20,
};

const defaultState = {
  bill: 0,
  people: 0,
  tip: 0,
  currency: 'USD',
  rounding: 'none',
  profile: 'Dinner',
};

const getInitialState = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return defaultState;
    }

    const parsed = JSON.parse(saved);
    return {
      ...defaultState,
      ...parsed,
    };
  } catch (error) {
    return defaultState;
  }
};

function App() {
  const [amount, setAmount] = useState(0);
  const [people, setpeople] = useState(0);
  const [tip, setTip] = useState(0);
  const [bill, setBill] = useState(0);
  const [total, settotal] = useState(0);
  const [currency, setCurrency] = useState('USD');
  const [rounding, setRounding] = useState('none');
  const [profile, setProfile] = useState('Dinner');

  useEffect(() => {
    const initial = getInitialState();
    setBill(Number(initial.bill) || 0);
    setpeople(Number(initial.people) || 0);
    setTip(Number(initial.tip) || 0);
    setCurrency(initial.currency || 'USD');
    setRounding(initial.rounding || 'none');
    setProfile(initial.profile || 'Dinner');
  }, []);

  useEffect(() => {
    if (!people || people <= 0) {
      setAmount(0);
      settotal(0);
      return;
    }

    const tipPerPerson = (bill * (tip / 100)) / people;
    let totalPerPerson = (bill + bill * (tip / 100)) / people;

    if (rounding === 'half') {
      totalPerPerson = Math.round(totalPerPerson / 0.5) * 0.5;
    }

    if (rounding === 'one') {
      totalPerPerson = Math.round(totalPerPerson);
    }

    setAmount(Number(tipPerPerson.toFixed(2)));
    settotal(Number(totalPerPerson.toFixed(2)));
  }, [people, bill, tip, rounding]);

  useEffect(() => {
    const toSave = { bill, people, tip, currency, rounding, profile };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  }, [bill, people, tip, currency, rounding, profile]);

  const formatCurrency = useMemo(
    () => (value) => {
      const numberValue = Number(value) || 0;
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        maximumFractionDigits: 2,
      }).format(numberValue);
    },
    [currency],
  );

  return (
    <Contexts.Provider
      value={{
        amount,
        setAmount,
        people,
        setpeople,
        tip,
        setTip,
        bill,
        setBill,
        total,
        settotal,
        currency,
        setCurrency,
        rounding,
        setRounding,
        profile,
        setProfile,
        profileDefaults,
        formatCurrency,
      }}
    >
      <div className="min-h-screen w-full bg-gradient-to-br from-dark-purple via-grayish-purple to-strong-purple px-3 py-5 sm:px-4 md:px-8">
        <div className="mx-auto flex min-h-[calc(100vh-2.5rem)] w-full max-w-6xl flex-col items-center justify-center gap-4 md:gap-6">
          <header className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-4 backdrop-blur-md sm:px-6">
            <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
              <div className="flex items-center gap-3">
                <LogoIcon className="h-12 w-12 rounded-2xl bg-white/10 p-1 shadow-lg" aria-label="EasyTip logo" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/70 sm:text-xs">Smart Tip Calculator</p>
                  <h1 className="text-2xl font-bold text-white sm:text-3xl">EasyTip</h1>
                </div>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-center text-xs text-white/85">
                Split bills beautifully with presets, currency tools, and QR demo cards.
              </div>
            </div>
          </header>

          <main className="w-full rounded-3xl border border-white/15 bg-white/90 p-4 shadow-2xl backdrop-blur-xl sm:p-5 md:p-8">
            <Card />
          </main>

          <Footer />
        </div>
      </div>
    </Contexts.Provider>
  );
}

export default App;