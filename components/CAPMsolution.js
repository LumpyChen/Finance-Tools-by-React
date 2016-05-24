/**
 * Created by Lumpychen on 16/5/21.
 */
import ReactDOM from 'react-dom'

export default class CAMPsolution extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){

    }

    shouldComponentUpdate(nextprops,nextstate){


    }

    render(){


        return (
            <div ref="solu_root" className="panel panel-default">
                <div className="panel-heading">定价分析结果:</div>
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