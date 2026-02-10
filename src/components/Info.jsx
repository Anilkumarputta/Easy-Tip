import { useContext } from 'react';
import Contexts from '../contexts/Contexts';

const Info = ({ title, value }) => {
    const { formatCurrency } = useContext(Contexts);

    return (
        <div className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
            <div>
                <p className="text-sm font-medium text-white/95">{title}</p>
                <p className="text-xs text-white/70">/ person</p>
            </div>
            <p className="text-2xl font-semibold text-light-purple sm:text-3xl">{formatCurrency(value)}</p>
        </div>
    );
};

export default Info;