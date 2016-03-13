/**
 * Created by Lumpychen on 16/3/12.
 */
import ReactDOM from 'react-dom';
import linkState from 'react-link-state';


export default class Loan extends React.Component {


    constructor(props){
        super(props);
    }




    render() {
        var [Times,Loans,Method,Rate] = [this.props.value.Times,this.props.value.Loans,this.props.value.Method,this.props.value.Rate]
        var arr = [];
        console.log(Method);

        arr.push({
            begin:Loans,
            remain:Loans
        })

        if(Method=='a') {

            for(let i=0;i<Times*12;i++) {
                arr.push({
                    begin: arr[i].remain,
                    InterestPaid: arr[i].remain * (Rate / 12 * 0.01),
                    PrinciplePaid: Loans / Times / 12,
                    TotalPaid: arr[i].remain * (Rate / 12 * 0.01) + Loans / Times / 12,
                    remain: arr[i].remain - Loans / Times / 12
                })
            }
        }else{
            for(let i=0;i<Times*12;i++) {
                let rau = 1/(1+Rate/12*0.01);
                arr.push({
                    begin: arr[i].remain,
                    InterestPaid: arr[i].remain*(Rate/12*0.01),//true
                    PrinciplePaid:Loans/((rau)*((1-Math.pow(rau,Times*12))/(1-rau)))-arr[i].remain*(Rate/12*0.01),
                    TotalPaid:Loans/((rau)*((1-Math.pow(rau,Times*12))/(1-rau))),
                    remain:arr[i].remain - Loans/((rau)*((1-Math.pow(rau,Times*12))/(1-rau))) + arr[i].remain*(Rate/12*0.01)
                })
            }
        }
        arr.shift()


        return (
            <div className=" col-md-offset-1 col-md-6 row container">
                <table className="table table-striped text-center">
                    <caption className=" text-center h4">Loans' repayment monthly<span> with the rate of: { this.props.value.Rate }%</span>
                    </caption>
                    <thead className=" text-center">
                    <tr>
                        <th className=" text-center">Month</th>
                        <th className=" text-center">Beginning Balance</th>
                        <th className=" text-center">Total Payment</th>
                        <th className=" text-center">Interest Paid</th>
                        <th className=" text-center">Principle Paid</th>
                        <th className=" text-center">Remaining Balance</th>
                    </tr>
                    </thead>
                    <tbody>
                            {
                                arr.map((ele,index)=>
                                    <tr>
                                        <td>{ index+1 }</td>
                                        <td>{ Math.round(ele.begin*100)/100 }&nbsp;<i className="fa fa-rmb"></i></td>
                                        <td>{ Math.round(ele.TotalPaid*100)/100 }&nbsp;<i className="fa fa-rmb"></i></td>
                                        <td>{ Math.round(ele.InterestPaid*100)/100 }&nbsp;<i className="fa fa-rmb"></i></td>
                                        <td>{ Math.round(ele.PrinciplePaid*100)/100 }&nbsp;<i className="fa fa-rmb"></i></td>
                                        <td>{ Math.round(ele.remain*100)/100 }&nbsp;<i className="fa fa-rmb"></i></td>
                                    </tr>
                                )
                            }
                    </tbody>
                </table>
            </div>
        )
    }
}
