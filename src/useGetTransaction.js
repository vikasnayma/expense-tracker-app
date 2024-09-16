import { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { db , auth } from "./firebase";

export const useGetTransaction = () => {

    const [transactions, setTransactions] = useState([]);
    const [transactionTotals , setTransactionTotals] = useState({
        balance:0,
        expenses:0,
        incomes:0,
    });
    const transactionRef = collection(db, "transaction");

    const getTransactions = async () => {
        try {
            const queryTransaction = query(
                transactionRef, 
                where("userId", "==", auth.currentUser.uid),
                orderBy("createdAt")
            );

            onSnapshot(queryTransaction, (snapshot) => {
                let docs = [];
                let totalExpenses = 0;
                let totalIncome = 0 ;

                snapshot.forEach((doc) => {
                    const data = doc.data();
                    const id = doc.id;
                    
                    docs.push({ ...data, id });
                    if(data.transactionType === "expense")
                    {
                        totalExpenses += Number(data.transactionAmount);
                    }else{
                        totalIncome += Number(data.transactionAmount)
                    }
                });

                setTransactions(docs);

                let balance = totalIncome - totalExpenses;

                setTransactionTotals({
                    balance,
                    expenses:totalExpenses,
                    incomes:totalIncome,
                })
            });

        } catch (error) {
            console.log("error", error);
        }

    };

    useEffect(() => {
        getTransactions();
    }, []);

    return { transactions , transactionTotals };
}

