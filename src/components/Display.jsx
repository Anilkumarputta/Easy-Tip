import { useContext, useEffect, useMemo, useState } from 'react';
import Contexts from '../contexts/Contexts';
import Info from './Info';

const Display = () => {
    const {
        total,
        amount,
        bill,
        people,
        tip,
        currency,
        rounding,
        formatCurrency,
        setAmount,
        setpeople,
        setTip,
        setBill,
        settotal,
    } = useContext(Contexts);
    const [copyStatus, setCopyStatus] = useState('');
    const [paidStatus, setPaidStatus] = useState([]);

    const hasValues = Number(bill) > 0 || Number(people) > 0 || Number(tip) > 0;
    const validPeopleCount = Math.max(0, Math.min(Number(people) || 0, 12));

    useEffect(() => {
        setPaidStatus((previous) => Array.from({ length: validPeopleCount }, (_, index) => previous[index] || false));
    }, [validPeopleCount]);

    const paidCount = paidStatus.filter(Boolean).length;
    const pendingCount = Math.max(validPeopleCount - paidCount, 0);
    const remainingAmount = pendingCount * (Number(total) || 0);

    const demoLinks = useMemo(
        () =>
            Array.from({ length: validPeopleCount }, (_, i) => {
                const index = i + 1;
                const reference = `EASYTIP-P${index}-${Date.now().toString().slice(-5)}`;
                const paymentLink = `https://demo.easytip.app/pay?person=${index}&amount=${Number(total).toFixed(2)}&currency=${currency}&ref=${reference}`;
                const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(paymentLink)}`;

                return { index, paymentLink, qrUrl };
            }),
        [validPeopleCount, total, currency],
    );

    const setZero = () => {
        setAmount(0);
        setpeople(0);
        setTip(0);
        setBill(0);
        settotal(0);
        setPaidStatus([]);
        setCopyStatus('');
    };

    const handleShare = async () => {
        const summary = `Split bill ${formatCurrency(bill)} | Tip ${Number(tip)}% | People ${Number(people)} | Tip/person ${formatCurrency(amount)} | Total/person ${formatCurrency(total)} | Currency ${currency} | Rounding ${rounding}`;

        try {
            await navigator.clipboard.writeText(summary);
            setCopyStatus('Copied to clipboard!');
        } catch (error) {
            setCopyStatus('Clipboard permission blocked on this browser.');
        }
    };

    const togglePaidStatus = (index) => {
        setPaidStatus((previous) => previous.map((value, currentIndex) => (currentIndex === index ? !value : value)));
    };

    return (
        <div className="w-full rounded-2xl bg-gradient-to-br from-dark-purple to-grayish-purple p-5 text-white shadow-xl sm:p-6 md:w-1/2 md:p-8">
            <div className="mb-4 rounded-lg bg-white/10 px-3 py-2 text-xs tracking-wide text-white/80">
                Split summary: {Number(people) || 0} people • {Number(tip) || 0}% tip • {currency}
            </div>
            <div className="flex flex-col gap-5">
                <Info title="Tip Amount" value={amount} />
                <Info title="Total" value={total} />
            </div>

            <div className="mt-4 rounded-lg bg-white/10 px-3 py-2 text-xs text-white/85">
                <p>
                    Paid: {paidCount}/{validPeopleCount || 0} • Remaining: {formatCurrency(remainingAmount)}
                </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                    className="h-12 w-full rounded-xl border border-white/30 bg-white/10 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60 disabled:cursor-not-allowed disabled:opacity-45"
                    onClick={handleShare}
                    disabled={!hasValues || Number(people) <= 0}
                >
                    SHARE SPLIT
                </button>
                <button
                    className="h-12 w-full rounded-xl bg-strong-purple text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white/60 disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0 disabled:hover:brightness-100"
                    onClick={setZero}
                    disabled={!hasValues}
                >
                    RESET
                </button>
            </div>
            <p className="mt-3 min-h-[1.25rem] text-right text-xs text-white/80">{copyStatus}</p>

            <div className="mt-5 rounded-xl border border-white/15 bg-white/5 p-3 sm:p-4">
                <h3 className="text-sm font-semibold tracking-wide text-white">Demo split payment QR cards</h3>
                <p className="mt-1 text-xs text-white/70">
                    Concept only: these QR codes are placeholders to showcase future Apple Pay / Google Pay style split payment UX.
                </p>

                {demoLinks.length > 0 ? (
                    <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                        {demoLinks.map((item, index) => (
                            <div key={item.index} className="rounded-lg bg-white/10 p-3 text-center">
                                <p className="text-xs font-semibold text-white/90">Customer {item.index}</p>
                                <p className="mb-2 text-xs text-white/70">Pay {formatCurrency(total)}</p>
                                <img
                                    src={item.qrUrl}
                                    alt={`Demo QR for customer ${item.index}`}
                                    className="mx-auto h-32 w-32 rounded-md border border-white/20 bg-white p-1"
                                />
                                <a
                                    className="mt-2 block truncate text-[11px] text-light-purple underline"
                                    href={item.paymentLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Open demo pay link
                                </a>
                                <label className="mt-3 flex items-center justify-center gap-2 text-xs text-white/90">
                                    <input type="checkbox" checked={paidStatus[index] || false} onChange={() => togglePaidStatus(index)} />
                                    Mark as paid
                                </label>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="mt-3 text-xs text-white/75">Enter bill, tip, and number of people to generate demo QR cards.</p>
                )}
            </div>
        </div>
    );
};

export default Display;