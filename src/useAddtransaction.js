import { serverTimestamp } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import {db , auth } from "./firebase";


export const useAddtransaction = () => {
    const transactionRef = collection(db, "transaction");
    // const { userId } = useGetuserInfo();
    const addTransaction = async (
          { description,
            transactionAmount, 
            transactionType,}) => {
        await addDoc(transactionRef, {
            userId:auth.currentUser.uid,
            description,
            transactionAmount,
            transactionType,
            createdAt: serverTimestamp(),
        });
    };

    return { addTransaction };

}