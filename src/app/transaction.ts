
export class Transaction {

        transactionId: number;
        recieverId: number;
        senderId: number;
        receiverIBAN: string;
        senderIBAN: string;
        receiverName: string;
        senderName: string;
        amount: number;
        transactionCategory: string;
        message: string;
        accountBalanceBeforeTransaction: number;
        accountBalanceAfterTransaction: number;
        transactionDate: number;
}