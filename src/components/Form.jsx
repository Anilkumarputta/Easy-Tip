import { useContext, useEffect, useMemo, useState } from 'react';
import dolar from '../assets/img/icon-dollar.svg';
import person from '../assets/img/icon-person.svg';
import Contexts from '../contexts/Contexts';
import Subtitle from './Subtitle';
import TipBtn from './TipBtn';

const presetTips = [5, 10, 15, 25, 50];

const Form = () => {
    const {
        bill,
        tip,
        people,
        setpeople,
        setBill,
        setTip,
        currency,
        setCurrency,
        rounding,
        setRounding,
        profile,
        setProfile,
        profileDefaults,
    } = useContext(Contexts);
    const [customTip, setCustomTip] = useState('');

    const hasInput = Number(bill) > 0 || Number(tip) > 0 || Number(people) > 0;
    const showPeopleError = hasInput && Number(people) === 0;

    const activePreset = useMemo(() => presetTips.includes(Number(tip)), [tip]);

    const handleBill = (e) => {
        const { value } = e.target;
        setBill(Number(value));
    };

    const handlePeople = (e) => {
        setpeople(Number(e.target.value));
    };

    const handleCustomTip = (e) => {
        const { value } = e.target;
        setCustomTip(value);
        setTip(Number(value));
    };

    const handleProfile = (e) => {
        const selectedProfile = e.target.value;
        setProfile(selectedProfile);
        setTip(profileDefaults[selectedProfile]);
    };

    useEffect(() => {
        if (!activePreset && Number(tip) > 0) {
            setCustomTip(String(tip));
            return;
        }

        if (activePreset || Number(tip) === 0) {
            setCustomTip('');
        }
    }, [tip, activePreset]);

    const inputStyles =
        'h-12 w-full rounded-xl border border-transparent bg-light-purple px-4 text-right text-xl text-dark-purple shadow-sm transition-all duration-200 placeholder:text-grayish-purple/60 hover:border-strong-purple/30 focus:border-strong-purple focus:outline-none focus:ring-2 focus:ring-strong-purple/30';

    return (
        <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="sm:col-span-1">
                    <Subtitle text="Profile" />
                    <select
                        value={profile}
                        onChange={handleProfile}
                        className="mt-2 h-11 w-full rounded-lg border border-transparent bg-light-purple px-3 text-sm font-semibold text-dark-purple focus:border-strong-purple focus:outline-none focus:ring-2 focus:ring-strong-purple/20"
                    >
                        {Object.keys(profileDefaults).map((key) => (
                            <option key={key} value={key}>
                                {key} ({profileDefaults[key]}%)
                            </option>
                        ))}
                    </select>
                </div>

                <div className="sm:col-span-1">
                    <Subtitle text="Currency" />
                    <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="mt-2 h-11 w-full rounded-lg border border-transparent bg-light-purple px-3 text-sm font-semibold text-dark-purple focus:border-strong-purple focus:outline-none focus:ring-2 focus:ring-strong-purple/20"
                    >
                        <option value="USD">USD ($)</option>
                        <option value="INR">INR (₹)</option>
                        <option value="EUR">EUR (€)</option>
                    </select>
                </div>

                <div className="sm:col-span-1">
                    <Subtitle text="Round Total" />
                    <select
                        value={rounding}
                        onChange={(e) => setRounding(e.target.value)}
                        className="mt-2 h-11 w-full rounded-lg border border-transparent bg-light-purple px-3 text-sm font-semibold text-dark-purple focus:border-strong-purple focus:outline-none focus:ring-2 focus:ring-strong-purple/20"
                    >
                        <option value="none">No rounding</option>
                        <option value="half">Nearest 0.50</option>
                        <option value="one">Nearest 1.00</option>
                    </select>
                </div>
            </div>

            <label htmlFor="bill" className="block">
                <Subtitle text="Bill" />
            </label>
            <div className="relative mt-2">
                <img src={dolar} alt="dollar symbol" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                    id="bill"
                    min="0"
                    step="0.01"
                    type="number"
                    className={inputStyles}
                    placeholder="0"
                    value={bill || ''}
                    onChange={handleBill}
                />
            </div>

            <Subtitle text="Select Tip %" />
            <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <TipBtn tipvalue={5} />
                <TipBtn tipvalue={10} />
                <TipBtn tipvalue={15} />
                <TipBtn tipvalue={25} />
                <TipBtn tipvalue={50} />
                <input
                    min="0"
                    max="100"
                    type="number"
                    className="h-11 w-full rounded-lg border border-transparent bg-light-purple px-2 text-center text-sm font-semibold text-dark-purple transition-all duration-200 placeholder:text-grayish-purple/70 hover:border-strong-purple/30 focus:border-strong-purple focus:outline-none focus:ring-2 focus:ring-strong-purple/20"
                    placeholder="CUSTOM"
                    value={customTip}
                    onChange={handleCustomTip}
                    aria-label="Custom tip percentage"
                />
            </div>

            <div className="mt-1 min-h-[1.25rem] text-right text-xs font-semibold tracking-wide text-grayish-purple">
                Tip selected: {Number(tip) || 0}%
            </div>

            <label htmlFor="people" className="block">
                <Subtitle text="Number of People" />
            </label>
            <div className="relative mt-2">
                <img src={person} alt="person icon" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                    id="people"
                    min="0"
                    step="1"
                    type="number"
                    className={`${inputStyles} ${showPeopleError ? 'border-red-500 ring-2 ring-red-400/40' : ''}`}
                    placeholder="0"
                    value={people || ''}
                    onChange={handlePeople}
                    aria-invalid={showPeopleError}
                />
            </div>
            <p className={`mt-2 text-xs font-semibold ${showPeopleError ? 'text-red-600' : 'text-transparent'}`}>
                Please enter at least 1 person.
            </p>
        </div>
    );
};

export default Form;