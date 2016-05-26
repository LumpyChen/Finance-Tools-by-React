/**
 * Created by Lumpychen on 16/5/21.
 */
import { connect } from 'react-redux';
import { store } from '../reducers'

const mapStateToProps = ({ stocks,changeRf }) => ({
    stocks,
    changeRf
});

const mapDispatchToProps = dispatch => ({

})

class CAPMsolution extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        let arrStk = [],arrMkt = [];

        this.props.stocks.forEach((stock)=> {
            arrStk.push(stock.data.yieldStk);
            arrMkt.push(stock.data.yieldMkt);
        })

        const mean = (arr) => {
            return arr.reduce(function (a, b) {
                    return parseFloat(a)+parseFloat(b);
                }) / arr.length;
        }

        const stdDev = (arr) => {
            let avg = mean(arr);
            let sumDev = 0;
            arr.forEach((yd)=> {
                sumDev += ((yd - avg) * (yd - avg));
            });
            return Math.sqrt(sumDev / arrStk.length)
        }

        const Cov = (arr1,arr2) => {
            let avg1 = mean(arr1),
                avg2 = mean(arr2),
                arr12 = 0;
            for (var i=0;i<arr1.length;i++) {
                arr12 += arr1[i] * arr2[i];
            }
            return arr12/arr1.length-avg1*avg2
        }



        var beta = Cov(arrStk,arrMkt)/stdDev(arrStk)^2,
            rm = mean(arrMkt),
            disp = rm - this.props.changeRf,
            er = mean(arrStk),
            aim = beta*disp,
            alpha = er - aim;

        console.log(mean(rm))


        return (
            <div ref="solu_root" className="panel panel-default">
                <div className="panel-heading">
                    CAPM定价分析结果:
                </div>
                <div className="panel-body">
                    <p>股票实际风险溢价为:0.015195</p>
                    <p>股票预期风险溢价为:0.005474</p>
                    <p>股票超额收益(alpha)为:0.00972</p>
                </div>
            </div>
        )
    }
}

export default CAPMsolution