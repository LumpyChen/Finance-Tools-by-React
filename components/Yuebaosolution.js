/**
 * Created by Lumpychen on 16/3/14.
 */

import ReactDOM from 'react-dom'
import linkState from 'react-link-state';


export default class Yuebaosolution extends React.Component {
    constructor(props){
        super(props)

    }

    componentDidMount(){
        this.refs.solu_root.style.display = "none";
    }

    componentWillReceiveProps(nextprops){
        if (nextprops.value[8].value){
            //console.log(this.refs.solu_root.style.display)
            this.refs.solu_root.style.display = "block"
            //console.log(this.refs.solu_root.style.display)
        }
        else { this.refs.solu_root.style.display = "none"}
    }

    render(){

        //console.log(this.props.value[0])

        let arr = this.props.value.filter(function(ele,index){
            return !(index==(0||8||9))
        })

        //console.log(arr)

        let arrVal = arr.map((ele)=>
            Math.round(ele.value*1000)/1000
        )

        //console.log(arrVal)

        let sum = arrVal.reduce(function(pre,cur) {
            //console.log('pre'+pre)
            return pre*(1+cur/10000)
        },1)

        //console.log(sum)

        let yearVal = Math.round(Math.pow(sum,365/7)*1000)/1000
        console.log(Math.round(yearVal))



        return (
            <div ref="solu_root" >
                <p>七日年化收益率为:{yearVal}</p>
                <p>按照您的目前在余额宝的本金,如果天弘基金的收益和前七天的趋势相同,那么一年后您余额宝里的金额为:</p>
                <h1>{Math.round(this.props.value[0].value*yearVal*100)/100}</h1>
            </div>
        )
    }
}