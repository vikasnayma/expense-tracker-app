import React, { useState, useEffect } from 'react'
import { useAddtransaction } from '../useAddtransaction'
import { useGetTransaction } from '../useGetTransaction'
import { useGetuserInfo } from '../useGetUserInfo'
import { useNavigate , Navigate } from "react-router-dom"
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
function Expensetracker() {

  const navigation = useNavigate();
  const { addTransaction } = useAddtransaction();
  const { isAuth } = useGetuserInfo();
  const { transactions, transactionTotals } = useGetTransaction();
  const { balance, incomes, expenses } = transactionTotals;

  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("expense");

  
  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction(
      {
        description,
        transactionAmount,
        transactionType
      }
    );
    setTransactionAmount(0);
    setDescription("");
  };

  const logout = () => {
    signOut(auth);
    try {
      console.log('User signed out');
      // Optionally, you can redirect the user to another page or show a message
    } catch (error) {
      console.log('Sign out error', error);
    };
    navigation("/");
  };

  return (
    <div className='bg-gray-100 flex flex-wrap justify-around min-h-screen'>
      <div className='bg-violet-200 flex flex-wrap justify-around m-8 p-4 rounded-xl'>
        <div className='bg-violet-300 rounded-xl shadow-sm p-4 m-4 text-gray-700 hover:scale-105 hover: duration-300'>
          <h3 className='text-lg font-semibold'>Total Balance:</h3>
          <h2 className='text-2xl font-bold hover:scale-105 hover: duration-300'>{balance}</h2>
          <h3 className='text-lg font-semibold mt-2'>Total Income:</h3>
          <h4 className='text-xl font-bold text-green-600 hover:scale-105 hover: duration-300'>{incomes}</h4>
          <h3 className='text-lg font-semibold mt-2'>Total Expense</h3>
          <h4 className='text-xl font-bold text-red-600 hover:scale-105 hover: duration-300'>{expenses}</h4>
        </div>

        <div className='flex flex-col justify-items-center'>
          <div className='font-bold text-lg text-gray-700 mx-12'>Add Transaction
          </div>
          <form className='p-2'>
            <input
              type="number"
              placeholder='Amount'
              onChange={(e) => { setTransactionAmount(e.target.value) }}
              value={transactionAmount}
              required
              className='m-2 rounded-md p-1'
            >
            </input>
            <br></br>
            <input
              type="text"
              placeholder='Description'
              onChange={(e) => { setDescription(e.target.value) }}
              value={description}
              required
              className='m-2 rounded-md p-1'
            >
            </input>
            <br></br>
            <input
              type='radio'
              id="expense"
              value="expense"
              checked={transactionType === "expense"}
              onChange={(e) => { setTransactionType(e.target.value) }}
              className='m-2 hover:scale-105 hover: duration-300 '
            >
            </input>
            <label htmlFor='expense'>expense</label>
            <br></br>
            <input
              type='radio'
              id="income"
              checked={transactionType === "income"}
              value="income"
              onChange={(e) => { setTransactionType(e.target.value) }}
              className='m-2 hover:scale-105 hover: duration-300'
            >
            </input>
            <label htmlFor='income'>income</label>
            <br></br>
            <button type='submit' onClick={onSubmit} className='bg-blue-900 text-white text-sm rounded-xl px-6 py-2 m-8 hover:scale-105 hover: duration-300'>Add Transaction</button>
          </form>

          <div>
            <button onClick={logout} className='bg-blue-900 text-white rounded-xl px-8 text-sm py-2 mx-12 mt-20 hover:scale-105 hover: duration-300'>Log Out</button>
          </div>
        </div>
      </div>

      <div className='bg-violet-200 m-8 h-auto px-6 min-w-96 rounded-xl'>
        <br></br>
        <div className='mb-4 mx-20 text-xl font-bold text-gray-700'>Transactions</div>
        <ul className='overflow-y-auto h-80 mt-10'>
          {transactions.map((transaction) => {
            const { description, transactionAmount, transactionType } =
              transaction;
            return (
              <div className='bg-violet-300 m-4 px-8 py-4 rounded-xl hover:scale-105 hover: duration-300'>
                <li className='text-sm list-disc'>
                  <p style={{ color: transactionType === "expense" ? "red" : "green" }} className='font-semibold text-lg'>Amount: Rs.{transactionAmount}</p>
                  <p>Description: {description}</p>
                  <p>Transaction Type: {transactionType}</p>
                  <p>Date: 20-09-2024</p>
                </li>
              </div>
            )
          })}
        </ul>
      </div>
    </div>

  )
}
export default Expensetracker
