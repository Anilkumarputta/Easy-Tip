import { useContext} from 'react'

import Contexts from '../contexts/Contexts';

const TipBtn = ({ tipvalue }) => {

    const { tip, setTip } = useContext(Contexts);

    return (
        <button
            className={
                tip === tipvalue
                    ? 'bg-strong-purple text-center text-white rounded-md h-8 w-16 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-strong-purple'
                    : 'bg-white dark:bg-dark-purple text-dark-purple dark:text-white text-center rounded-md h-8 w-16 hover:bg-light-purple/80 dark:hover:bg-dark-purple/90 focus:outline-none focus:ring-2 focus:ring-strong-purple'
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