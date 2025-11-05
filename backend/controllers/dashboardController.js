const Income = require("../models/Income");
const Expense = require("../models/Expense");

const { isValidObjectId,Types } = require("mongoose");

// dashboard data
exports.getDashboardData = async (req, res) => {
try{
    const userId = req.user.id;
    // console.log("User ID : ", userId);
    
    const userObjectId = new Types.ObjectId(String(userId));

    // fetch total income using aggregation
    const totalIncome = await Income.aggregate([
        { $match: { userId: userObjectId } },
        { $group: { _id: null, total: { $sum: "$amount" } } }
    ]);
    console.log("totalIncome",{totalIncome,userId:isValidObjectId(userId)});
     
    const totalExpense= await Expense.aggregate([
        { $match: { userId: userObjectId } },
        { $group: { _id: null, total: { $sum: "$amount" } } }
    ]);
    // get income transactions in the last 6- days

  const last60DaysIncomeTransactions = await Income.find({
    userId,
    date: { $gte: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000) } // last 60 days
  }).sort({ date: -1 });
    
  // get total income for last 60 days
  const incomeLast60Days= last60DaysIncomeTransactions.reduce((sum, transaction) => sum + transaction.amount, 0);
   
  // get expense transactions in the last 30 days
  const last30DaysExpenseTransactions = await Expense.find({
    userId,
    date: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } // last 30 days
  }).sort({ date: -1 });

  // get total expense for last 30 days
    const expenseLast30Days= last30DaysExpenseTransactions.reduce((sum, transaction) => sum + transaction.amount, 0);
    // console.log("last 30 days transactions : ", expenseLast30Days);
    
    // fetch last 5  transactions (income + expense)

    const lastTransactions = [
        ...(await Income.find({ userId }).sort({ date: -1 }).limit(5)).map(
            (txn)=>({
                ...txn.toObject(),
                 type: "income"
                })
            ),
            ...(await Expense.find({ userId }).sort({ date: -1 }).limit(5)).map(
                (txn)=>({
                    ...txn.toObject(),  
                        type: "expense"
                    })      
                ),
    ].sort((a, b) => b.date - a.date);



        // final response
    res.json({
        totalBalance: (totalIncome[0]?.total || 0) - (totalExpense[0]?.total || 0),
        totalIncome: totalIncome[0]?.total ||  0,
        totalExpense: totalExpense[0]?.total || 0,
        last30DaysExpenses:{
            total:expenseLast30Days,
            transactions:last30DaysExpenseTransactions,
        },
        last60DaysIncome:{
            total:incomeLast60Days,
            transactions:last60DaysIncomeTransactions,  
        },
        recentTransactions: lastTransactions, // limit to 5 transactions
    });
}catch(error){
    res.status(500).json({message:"Server Error",error: error.message});

}
};



// exports.getDashboardData = async (req, res) => {
//   try {
//     const userId = req.user.id;
//     // ensure object id used for all queries
//     const userObjectId = new Types.ObjectId(String(userId));

//     // cutoff dates
//     const now = Date.now();
//     const cutoff60 = new Date(now - 60 * 24 * 60 * 60 * 1000); // last 60 days
//     const cutoff30 = new Date(now - 30 * 24 * 60 * 60 * 1000); // last 30 days

//     // fetch total income using aggregation (keep using object id)
//     const totalIncome = await Income.aggregate([
//       { $match: { userId: userObjectId } },
//       { $group: { _id: null, total: { $sum: "$amount" } } },
//     ]);

//     const totalExpense = await Expense.aggregate([
//       { $match: { userId: userObjectId } },
//       { $group: { _id: null, total: { $sum: "$amount" } } },
//     ]);

//     // use userObjectId in find() queries and Date objects for cutoffs
//     const last60DaysIncomeTransactions = await Income.find({
//       userId: userObjectId,
//       date: { $gte: cutoff60 },
//     }).sort({ date: -1 });

//     const incomeLast60Days = last60DaysIncomeTransactions.reduce(
//       (sum, transaction) => sum + (transaction.amount || 0),
//       0
//     );

//     const last30DaysExpenseTransactions = await Expense.find({
//       userId: userObjectId,
//       date: { $gte: cutoff30 },
//     }).sort({ date: -1 });

//     const expenseLast30Days = last30DaysExpenseTransactions.reduce(
//       (sum, transaction) => sum + (transaction.amount || 0),
//       0
//     );

//     // last 5 combined
//     const incomeRecent = await Income.find({ userId: userObjectId })
//       .sort({ date: -1 })
//       .limit(5);
//     const expenseRecent = await Expense.find({ userId: userObjectId })
//       .sort({ date: -1 })
//       .limit(5);

//     const lastTransactions = [
//       ...incomeRecent.map((txn) => ({ ...txn.toObject(), type: "income" })),
//       ...expenseRecent.map((txn) => ({ ...txn.toObject(), type: "expense" })),
//     ].sort((a, b) => new Date(b.date) - new Date(a.date));

//     // final response
//     res.json({
//       totalBalance: (totalIncome[0]?.total || 0) - (totalExpense[0]?.total || 0),
//       totalIncome: totalIncome[0]?.total || 0,
//       totalExpense: totalExpense[0]?.total || 0,
//       last30DaysExpenses: {
//         total: expenseLast30Days,
//         transactions: last30DaysExpenseTransactions,
//       },
//       last60DaysIncome: {
//         total: incomeLast60Days,
//         transactions: last60DaysIncomeTransactions,
//       },
//       recentTransactions: lastTransactions,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Server Error", error: error.message });
//   }
// };