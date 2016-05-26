/* Created by Lumpychen on 16/5/21.*/
import { removeStock,verifyState } from '../actions/CAPMaction';
import { connect } from 'react-redux';

const mapStateToProps = ({ stocks }) => ({
    stocks,
});

const mapDispatchToProps = dispatch => ({
    removeStock:id => dispatch(removeStock(id)),
    verifyState: rf => dispatch(verifyState(undefined,rf))
})

class StockList extends React.Component {
    constructor(props){
        super();
    }
    handleClick(e,id){
        e.preventDefault();
        this.props.removeStock(id)
        this.props.updateFather();
    }
    render(){
        return(
            <div>
                <table className="table table-hover">
                    <caption>行业股票列表 </caption>
                    <thead>
                    <tr>
                        <th>时间节点</th>
                        <th>股票收益率</th>
                        <th>市场收益率</th>
                        <th>删除</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.stocks.map((stock,id)=>
                            <tr key={id} >
                                <td>{id+1}</td>
                                <td>{parseFloat(stock.data.yieldStk).toFixed(2)}</td>
                                <td>{parseFloat(stock.data.yieldMkt).toFixed(2)}</td>
                                <td>
                                    <button className="btn btn-xs btn-danger" onClick = {(e)=>this.handleClick(e,stock.id)}>删除</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(StockList)