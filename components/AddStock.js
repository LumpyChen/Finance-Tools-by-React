/**
 * Created by Lumpychen on 16/5/21.
 */
import { addStock,verifyState } from '../actions/CAPMaction'
import { connect } from 'react-redux'

const mapStateToProps = ({ verify }) => ({
    verify
});
const mapDispatchToProps = dispatch => ({
    addStock: data => dispatch(addStock(data)),
    verifyState: (stk,rf) => dispatch(verifyState(stk,rf))
})

class AddStock extends React.Component {
    constructor(props){
        super();

    }
    componentDidMount(){
        document.getElementById('addBtn').disabled = true;
    }
    componentWillUpdate(nexP,nexS){
        switch(nexP.verify[0]){
            case 'true':
                this.refs.info.className = 'text-success';
                this.refs.info.innerHTML = '您输入的收益率正确。';
                document.getElementById('addBtn').disabled = false;
                break;
            case 'error':
                this.refs.info.className = 'text-danger';
                this.refs.info.innerHTML = '您输入的收益率有误。';
                document.getElementById('addBtn').disabled = true;
                break;
            case 'empty':
                this.refs.info.className = 'text-muted';
                this.refs.info.innerHTML = '请输入相应收益率。';
                document.getElementById('addBtn').disabled = true;
        }
    }
    handleInput(){
        if (isNaN(this.refs.yieldStk.value)||isNaN(this.refs.yieldMkt.value)||this.refs.yieldMkt.value>10||this.refs.yieldStk.value>10||this.refs.yieldMkt.value<-10||this.refs.yieldStk.value<-10) {
            // 不是数字
            this.props.verifyState('error')
        }else if(!this.refs.yieldStk.value.trim()||!this.refs.yieldMkt.value.trim()){
            // 没有数据
            this.props.verifyState('empty');
        }else {
            this.props.verifyState('true')
        }
    }
    handleClick(){
        this.props.addStock({
            yieldStk:this.refs.yieldStk.value,
            yieldMkt:this.refs.yieldMkt.value
        })
        this.refs.yieldStk.value = '';
        this.refs.yieldMkt.value = '';
        this.props.verifyState('empty');
        this.props.updateFather();
    }
    render(){
        return(
            <div>
                <div className="row">
                    <div className="form-group" className="col-xs-10 col-xs-offset-1" >
                        <label htmlFor="stk">添加新的股票信息</label>
                        <div className="form-group">
                            <input type="text" ref="yieldStk" onChange={this.handleInput.bind(this)} className="form-control" id="stk" placeholder="请输入指定日期股票收益率(0,10)。"/>
                        </div>
                        <div className="form-group">
                            <input type="text" ref="yieldMkt" onChange={this.handleInput.bind(this)} className="form-control" id="mkt" placeholder="请输入相应日期加权市场收益率(0,10)。"/>
                        </div>
                        <p ref="info" className="text-muted">请输入相应收益率。</p>
                    </div>
                </div>
                <button id="addBtn" type="reset" onClick={this.handleClick.bind(this) } className="btn col-xs-12 col-xs-offset-2 col-xs-8 btn-info text-center">
                    添加股票时间节点信息
                </button>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddStock)