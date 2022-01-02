import { useState } from "react";
import styled from "styled-components"



const Container = styled.div` 
display: flex;
font-family:Montserrat;
flex-direction: column;
margin : 10px;
align-items: center;
font-size: 20px;
width: 100%;`;

const BalanceBox = styled.div`
display: flex;
font-size:18px;
width:100%;
font-weight: bold;
display: flex;
align-items:center;
flex-direction: row;
justify-content:space-between;`;

const AddTransaction = styled.button`
background:black;
color: white;
padding:5px 10px;
border-radius: 4px;
cursor:pointer;
font-weight: bold;
font-size: 15px;
align-items:center;
`;

const AddTransactionContainer = styled.div`
display: flex;
flex-direction: column;
padding : 15px 20px;
margin: 10px 20px;
gap: 10px;
width: 100%;
border : 1px solid black;
& input {
    outline: none;
    padding: 10px 12px;
    border-radius: 4px;

}

`;

const RadioBox = styled.div` 
display: flex;
flex-direction: row;
align-items: center;
width : 100%;
& input {
    width: unset;
    margin: 0 10px;
}
`;

const Expensecontainer = styled.div`
display: flex;
flex-direction: row;
gap: 12px;
margin: 20px;`;

const ExpenseBox = styled.div`
display: flex;
flex-direction: column;
border-radius: 4px;
border:  1px solid #e6e8e9;
padding: 15px 20px;
width:140px;
font-size: 16px;
& span{
    font-weight:bold;
    font-size:20px;
    color: ${(props)=>(props.isIncome ?"green":"blue")}

}
`;

const AddtransactionView = (props) => {

    const [amount, setAmount] = useState();
    const [desc, setDesc] = useState();
    const [type, setType] = useState("Expense");

    const addTransactions = () =>{
        props.addTransaction({ amount :Number(amount),desc,type , id:Date.now(),})
     console.log({amount,type,desc})
     
   
        
        props.toggleAddTxn();
    };

    return (
        <AddTransactionContainer>
            <input placeholder="Amount"  value ={amount} type ="number" onChange = {(e)=>setAmount(e.target.value)} />
            <input placeholder="Description" value={desc} onChange={ (e)=> setDesc(e.target.value)} />
            <RadioBox>
                <input type="radio" id=" expense" name="type"
                    value="EXPENSE"
                    checked={type === "EXPENSE"} 
                    onChange = {(e)=> setType(e.target.value)}
                    />
                <label htmlFor="expense"> Expense</label>

                <input type="radio" id=" income"
                    name="type"
                    value="INCOME"
                    checked={type === "INCOME"} 
                    onChange= {(e)=>setType(e.target.value)}
                    />
                <label htmlFor="income"> Income</label>
            </RadioBox>
            <AddTransaction onClick= {addTransactions}> Add Transaction</AddTransaction>

           
        </AddTransactionContainer>
    )
}


const OverviewComponent = (props) => {

    const [isAddTxnVisible, toggleAddTxn] = useState(false);

    return (
        <Container>
            <BalanceBox>
                Balance: $ {props.income-props.expense}<AddTransaction onClick={() => toggleAddTxn(!isAddTxnVisible)}> {isAddTxnVisible ? " Cancel" : "Add"} </AddTransaction>
            </BalanceBox>
            {isAddTxnVisible && <AddtransactionView  toggleAddTxn={toggleAddTxn} addTransaction ={props.addTransaction}/>}

            <Expensecontainer> 
                <ExpenseBox >
                    Expense <span>${props.expense}</span>
                </ExpenseBox>
                <ExpenseBox isIncome={true}>
                    Income <span>${props.income}</span>
                </ExpenseBox>
            </Expensecontainer>
        </Container>
    );
}
export default OverviewComponent;
