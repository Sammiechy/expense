import { useEffect, useState } from "react";
import styled from "styled-components"

const Container = styled.div` 
display: flex;
font-family:Montserrat;
flex-direction: column;
margin : 30px 0 13px;
align-items: center;
font-size: 20px;
font-weight:bold;
width: 100%;
gap: 12px;
 
& input {
    padding: 9px 13px;
    border-radius:12px;
    background: #e6e8e9;
    border: 1px solid #e6e8e9;
    outline: none;
    width: 100%;}

}
`;

const Cell= styled.div`
 display: flex;
 flex-direction: row;
 padding: 15px 15px;
 font-size: 16px;
 border-radius: 2px;
 align-items: center;
 font-weight: normal;
 width:100%;
 justify-content: space-between;
 border: 1px solid #e6e8e9;
 border-right: 4px solid ${(props) => (props.isExpense ? "red" : "green")};

`;

const TransactionCell = (props)=>{
    return(
        <Cell isExpense={props.payload?.type === "EXPENSE"}>
            <span>{props.payload.desc}</span>
            <span> ${props.payload.amount}</span>
        </Cell>
    )
}



const TransactionComponent = (props) => {
    const [ searchText, updateSearchText] = useState("")
 const [ filteredTransaction, updateTxn] = useState(props.transactions);

 const filterData =(searchText)=> {
 if(!searchText || ! searchText.trim().length){
     updateTxn(props.transactions);
     return;
 }
 let txn = [...props.transactions];
 txn = txn.filter((payload)=>payload.desc.toLowerCase().includes(searchText.toLowerCase().trim()));
 updateTxn(txn)
 };

 useEffect(()=> filterData(searchText),[props.transactions]);
    return (
        <Container>
            Transaction
            <input placeholder="search" value={searchText} onChange={(e)=> {updateSearchText(e.target.value); filterData(e.target.value)}} />
          {filteredTransaction?.length?filteredTransaction.map((payload)=><TransactionCell payload ={payload}/>): ""}

        </Container>
    )
}
export default TransactionComponent;