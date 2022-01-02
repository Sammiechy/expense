import { useEffect, useState } from "react";
import styled from "styled-components"
import OverviewComponent from "./OverviewComponent";
import TransactionComponent from "./TransactionComponent";

const Container = styled.div` 
display: flex;
font-family:Montserrat;
flex-direction: column;
margin : 30px 0 13px;
align-items: center;
font-size: 20px;
width: 360px;`;



const Home = (props) => {
    const [transactions, updatetransactions] = useState([])
    const [expense,   updateExpense]         = useState(0)
    const [income,   updateIncome]         = useState(0)

    // add transaction 
    const addTransaction = (payload) => {
        const transactionArray = [...transactions];
        transactionArray.push(payload);
        updatetransactions(transactionArray);
    };
// calculate balance
 
const calculateBalance = ()=>{
    let exp=0;
    let inc=0;
    transactions.map((payload)=>{
        payload.type==="EXPENSE"? (exp=exp+payload.amount) : (inc=inc+payload.amount);
    });
updateExpense(exp);
updateIncome(inc);
};

useEffect(()=> calculateBalance(),[transactions]
   
);
    return (
        <Container>

            <OverviewComponent addTransaction={addTransaction} expense={expense} income={income} />
            <TransactionComponent transactions={transactions} />
        </Container>
    )
}
export default Home;