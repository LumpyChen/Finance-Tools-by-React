/**
 * Created by Lumpychen on 16/3/14.
 */

import ReactDOM from 'react-dom'
import linkState from 'react-link-state';


export default class Yuebaosolution extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            yearVal:0,
            radio:0
        }

    }

    componentDidMount(){
        this.refs.solu_root.style.display = "none";
    }

    shouldComponentUpdate(nextprops,nextstate){
        console.log(nextprops.value[9].value);
        if (nextprops.value[8].value){
            //console.log(this.refs.solu_root.style.display)
            this.refs.solu_root.style.display = "block"
            //console.log(this.refs.solu_root.style.display)
        }
        else { this.refs.solu_root.style.display = "none"}
        if(nextprops.value[9].value=='pass'){
            let arr = nextprops.value.filter(function (ele, index) {
                return !(index == 0 || index == 8 || index == 9)
            })

            //console.log(arr)

            let arrVal = arr.map((ele)=>
                ele.value
            )

            //console.log(arrVal)

            let sum = arrVal.reduce(function (pre, cur) {
                //console.log('pre'+pre)
                return pre * (1 + (cur / 10000))
            }, 1)

            //console.log(sum)

            var yearVal = ((Math.pow(sum, 365 / 7) - 1) * 100).toFixed(2);
            var ratio = Math.pow(sum, 365 / 7);

            //console.log(yearVal)
            //console.log(ratio)

            this.state.yearVal = yearVal;
            this.state.ratio = ratio;

            return true;
        }else{
            return false;
        }

    }

    render(){


            return (
                <div ref="solu_root" className="panel panel-default">
                    <div className="panel-heading">结果</div>
                    <div className="panel-body">
                        <p>七日年化收益率为:{this.state.yearVal}%</p>
                        <p>按照您的目前在余额宝的本金,</p>
                        <p>如果天弘基金的收益和前七天的趋势相同,</p>
                        <p>那么一年后您余额宝里的金额为:</p>
                        <h1>{(this.props.value[0].value * this.state.ratio).toFixed(2)}</h1>
                    </div>
                </div>
            )
        }

}