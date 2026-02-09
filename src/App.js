import Card from './components/Card';
import Contexts from './contexts/Contexts'
// ...existing code...

import { useState } from 'react'
import Footer from './components/Footer';

function App() {

  const [amount, setAmount] = useState(0);
  const [people, setpeople] = useState(0);
  const [tip, setTip] = useState(0);
  const [bill, setBill] = useState(0);
  const [total, settotal] = useState(0);
  
  // Note: theme toggle removed — app will use default (light) styles.

  return (
    <>
      <Contexts.Provider value={{ amount, setAmount, people, setpeople, tip, setTip, bill, setBill, total, settotal}}>
        <div className="w-screen h-screen overflow-hidden flex flex-col justify-between items-center bg-light-cyan dark:bg-dark-cyan">
          <header className="w-full flex items-center py-4 px-4">
            <span className="text-2xl font-bold text-dark-cyan bg-light-cyan rounded-lg px-4 py-2 shadow-sm">Easy Bill</span>
          </header>
          <main className="flex-1 flex items-center justify-center w-full">
            <div className="bg-white dark:bg-dark-cyan p-6 rounded-lg shadow-md w-full max-w-xl">
              <Card />
            </div>
          </main>
          <Footer />
        </div>
      </Contexts.Provider>
    </>
  );
}

export default App;