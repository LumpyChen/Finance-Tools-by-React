/**
 * Created by Lumpychen on 16/5/21.
 */
import { addStock,verify } from '../actions/CAPMaction'
import { connect } from 'react-redux'

const mapStateToProps = ({verify}) => ({
    verify
});
const mapDispatchToProps = dispatch => ({
    addStock: data => dispatch(addStock(data)),
    verify: (stk,rf) => dispatch(verify(stk,rf))
})

class AddStock extends React.Component {
    constructor(props){
        super();
    }
    componentWillReceiveProps(nexP){
        console.log(nexP)
        switch(nexP.verify[0]){
            case 'true':
                this.refs.info.className = 'text-muted';
                document.getElementById('addBtn').disabled = true;
                break;
            case 'error':
                this.refs.info.className = 'text-muted';
                document.getElementById('addBtn').disabled = true;
                break;
            case 'empty':
                this.refs.info.className = 'text-muted';
                document.getElementById('addBtn').disabled = true;
        }
    }
    handleInput(){
        if(!this.refs.yieldStk.value.trim()||!this.refs.yieldMkt.value.trim()){
            // 没有数据
            this.props.verify('empty');

        }else if (isNaN(this.refs.yieldStk.value)||isNaN(this.refs.yieldMkt.value)) {
            // 不是数字
            this.props.verify('error')

        }else {
            this.props.verify('true')

        }
    }
    handleClick(e){
        console.log(this.refs.yieldStk.value)
        //e.preventDefault();
        this.props.addStock({
            yieldStk:this.refs.yieldStk.value,
            yieldMkt:this.refs.yieldMkt.value
        })
    }
    render(){
        return(
            <div>
                <div className="row">
                    <div className="form-group" className="col-xs-10 col-xs-offset-1" >
                        <label htmlFor="stk">添加新的股票信息</label>
                        <div className="form-group">
                            <input type="text" ref="yieldStk" onChange={this.handleInput.bind(this)} className="form-control" id="stk" placeholder="请输入指定日期股票收益率。"/>
                        </div>
                        <div className="form-group">
                            <input type="text" ref="yieldMkt" onChange={this.handleInput.bind(this)} className="form-control" id="mkt" placeholder="请输入相应日期市场收益率(加权)。"/>
                        </div>
                        <p ref="info" className="text-muted">请输入股票信息。</p>
                    </div>
                </div>
                <button id="addBtn" type="reset" onClick={(e)=>{this.handleClick(e)}} className="btn col-xs-12 col-xs-offset-2 col-xs-8 btn-info text-center">
                    添加股票时间节点信息
                </button>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddStock)