export class MyTransaction  {
    transactionId: number;
    recieverId: number;
    senderId: number;
    senderIBAN: string;
    receiverIBAN: string;
    receiverName: string;
    amount: number;
    transactionCategory: string;
    message: string;
    transactionTimestamp: number;
    
public generateTransaction(
    transactionId: number,
    receiverId: number,
    senderId: number,
    senderIBAN: string,
    receiverIBAN: string,
    receiverName: string,
    amount: number,
    transactionCategory: string,
    message: string,
    transactionTimestamp: number
    ) 
    {

        this.transactionId = transactionId ;
        this.recieverId= receiverId ;
        this.senderId= senderId ;
        this.senderIBAN= senderIBAN ;
        this.receiverIBAN = receiverIBAN ;
        this.receiverName= receiverName;
        this.amount = amount ;
        this.transactionCategory=transactionCategory;
        this.message=message ;
        this.transactionTimestamp = transactionTimestamp ;

        return this;
    }
}

