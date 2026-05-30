import React, { Children, createContext, useState } from 'react';

export const FinanceContext = createContext();
export const FinanceProvider = ({ children }) => {


    const [theme, setTheme] = useState('dark'); // Começa no dark por padrão

const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
};
    const [initialBalance, setInitialBalance] = useState(5000.00);
    const [expenses, setExpenses] = useState([]);

    const [investments, setInvestments] = useState ([]);

    const addExpense = (newExpense) => {
        setExpenses((prev) => [...prev, { id: Date.now(), ...newExpense}])
    };

    const addInvestment = (newInvestment) => {
        setInvestments((prev) => [...prev, { id: Date.now(), ...newInvestment}])
    };

return (
    <FinanceContext.Provider value={{
        expenses,
        investments,
        initialBalance,
        addExpense,
        addInvestment
    }}>
        {children}
    </FinanceContext.Provider>
);
};

