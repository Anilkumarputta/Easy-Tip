import { useContext} from 'react'

import Contexts from '../contexts/Contexts';

const TipBtn = ({ tipvalue }) => {
    const { tip, setTip } = useContext(Contexts);

    const isActive = Number(tip) === tipvalue;

    return (
        <button
            type="button"
            className={`h-11 w-full rounded-lg text-center text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-strong-purple/40 ${
                isActive
                    ? 'bg-strong-purple text-white shadow-md shadow-strong-purple/40'
                    : 'bg-dark-purple text-white hover:-translate-y-0.5 hover:bg-grayish-purple hover:shadow-md'
            }`}
            onClick={() => setTip(tipvalue)}
        >
            {tipvalue}%
        </button>
    );
};

export default TipBtn