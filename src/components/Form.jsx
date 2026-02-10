import { useContext, useEffect } from 'react'

import Contexts from '../contexts/Contexts'
import dolar from "../assets/img/icon-dollar.svg";
import person from "../assets/img/icon-person.svg";
import Subtitle from './Subtitle';
import TipBtn from './TipBtn';


const Form = () => {
    const { bill, tip, people, setAmount, setpeople, setBill, setTip, settotal } = useContext(Contexts);

    const handleBill = (e) => {
        ''
        const { value } = e.target
        setBill(value)
    }

    const setValues = (e) => {
        setpeople(e.target.value)
    }

    useEffect(() => {
        if (people <= 0) {
            setAmount("00.00")
            settotal("00.00")
        } else {
            const gorjeta = ((bill * tip) / 100)
            const perPersonTip = parseFloat((gorjeta / people).toFixed(2))
            setAmount(perPersonTip)
            const pessoal = (parseFloat((bill / people) + (gorjeta / people))).toFixed(2)
            settotal(pessoal)
        }
    }, [people, bill, tip, setAmount, settotal]);

    return (
        <div className='md:w-[50%] mb-[2rem] w-full flex flex-col '>
            <Subtitle text="Bill" />
            <div className="relative">
                <i><img src={dolar} alt="dolar symbol" className="absolute p-3" /></i>
                <input type="number" className={`p-3 h-[2.8rem] w-full bg-light-grayish-cyan dark:bg-dark-cyan dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-strong-cyan text-right text-[24px] placeholder:text-gray-400 dark:placeholder:text-gray-300`} placeholder="0" onChange={handleBill} />
            </div>
            <Subtitle text="Select Tip %" />
            <div className="flex flex-row flex-wrap justify-center items-center gap-2 mt-2 mb-2">
                <TipBtn tipvalue={5} />
                <TipBtn tipvalue={10} />
                <TipBtn tipvalue={15} />
                <TipBtn tipvalue={25} />
                <TipBtn tipvalue={50} />
                <input type="number" className="p-2 w-16 h-8 bg-light-grayish-cyan dark:bg-dark-cyan dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-strong-cyan text-right text-[16px] placeholder:text-gray-400 dark:placeholder:text-gray-300 ml-2" placeholder="CUSTOM" onChange={(e) => setTip(e.target.value)} />
            </div>
            <Subtitle text="Number of People" />
            <div className="relative">
                <i><img src={person} alt="dolar symbol" className="absolute p-3" /></i>
                <input type="number" className={`p-3 h-[2.8rem] w-full bg-light-grayish-cyan dark:bg-dark-cyan dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-strong-cyan text-right text-[24px] placeholder:text-gray-400 dark:placeholder:text-gray-300`} placeholder="0" onChange={setValues} />
            </div>
        </div>
    )
}

export default Form