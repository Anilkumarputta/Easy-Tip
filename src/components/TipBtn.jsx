import { useContext} from 'react'

import Contexts from '../contexts/Contexts';

const TipBtn = ({ tipvalue }) => {

    const { tip, setTip } = useContext(Contexts);

    return (
        <button
            className={
                tip === tipvalue
                    ? 'bg-strong-cyan text-center text-white rounded-md h-8 w-16 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-strong-cyan'
                    : 'bg-white dark:bg-dark-cyan text-dark-cyan dark:text-white text-center rounded-md h-8 w-16 hover:bg-light-grayish-cyan/80 dark:hover:bg-dark-cyan/90 focus:outline-none focus:ring-2 focus:ring-strong-cyan'
            }
            style={{ margin: '0 4px', minWidth: '48px' }}
            onClick={() => {
                setTip(tipvalue)
            }}
        >
            {tipvalue}%
        </button>
    )
}

export default TipBtn