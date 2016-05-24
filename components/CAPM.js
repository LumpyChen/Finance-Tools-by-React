/**
 * Created by Lumpychen on 16/5/21.
 */
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux';
import StockList from './StockList';
import AddStock from './AddStock'
import store from '../reducers'
import { connect } from 'react-redux'
import { toggleOutput } from '../actions/CAPMaction'
import { changeRf } from '../actions/CAPMaction'
import { verify } from '../actions/CAPMaction'


export default class CAPM extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        };

    }
    handleChange(e){
        if(!e.target.value.trim()){
            // 没有数据
            store.dispatch(verify(undefined,'empty'))
            this.refs.tip.className = 'text-muted';
            this.refs.tip.innerHTML = '请输入无风险收益率(0,0.5)。'
            document.getElementById('trans').disabled = true;
        }else if (isNaN(e.target.value)||e.target.value<0||e.target.value>0.5) {
            // 不是数字
            store.dispatch(verify(undefined,'error'))
            this.refs.tip.className = 'text-danger';
            this.refs.tip.innerHTML = '您输入的无风险收益率有误。'
            document.getElementById('trans').disabled = true;
        }else {
            store.dispatch(verify(undefined,'true'))
            store.dispatch(changeRf(e.target.value.trim()));
            this.refs.tip.className = 'text-success';
            this.refs.tip.innerHTML = '您输入的无风险收益率正确。'
            document.getElementById('trans').disabled = false;
        }
    }
    handleClick(e){
        e.preventDefault();
        //console.log(e.target)
        this.setState({
            position:e.target.name
        });
        ReactDOM.render(<App />,document.getElementById('root'))
    }
    handleSubmit(e){
        e.preventDefault();

    }
    render(){
        return (
            <Provider store={store}>
                <div className="row" id="menu">
                    <ul className=" col-md-5 row">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">
                                    <i className="fa fa-line-chart"></i>&nbsp;&nbsp;CAMP pricing
                                </h3>
                            </div>
                            <div className="panel-body">
                                <form role="form" className="form-horizontal">
                                    <StockList />
                                    <AddStock />
                                    <div className="row">
                                        <div className="col-xs-10 col-xs-offset-1">
                                            <div className="form-group">
                                                <input onChange={(e)=>this.handleChange(e)} placeholder="请输入时间跨度内的平均无风险收益率(0,0.5)。" style={{marginTop:8+'px'}} className="form-control col-xs-10" type="text"/>
                                            </div>
                                            <p ref="tip" className="text-muted">请输入无风险收益率(0,0.5)。</p>
                                        </div>
                                    </div>
                                    <button disabled style={{marginTop:8+'px'}}  name="main" id="trans" onClick={ (e) => {this.handleSubmit(e);}  }  ref="cal"  className="btn col-xs-12 col-xs-offset-2 col-xs-8 btn-success  text-center">
                                        估值
                                    </button>
                                    <button style={{marginTop:8+'px'}} name="main" onClick={ (e) => {this.handleClick(e);}  } className="btn col-xs-offset-2 col-xs-12 col-xs-8 btn-primary text-center">
                                        返回
                                    </button>
                                </form>
                            </div>
                        </div>
                    </ul>
                </div>
            </Provider>
        )
    }
}
