/**
 * Created by Lumpychen on 16/5/21.
 */
import { removeStock } from '../actions/CAPMaction';
import { connect } from 'react-redux';

const mapStateToProps = ({ stocks }) => ({
    stocks
});

const mapDispatchToProps = dispatch => ({
    removeStock:id => dispatch(removeStock(id))
})

class StockList extends React.Component {
    constructor(props){
        super();
    }
    handleClick(e,id){
        e.preventDefault();
        console.log(id)
        this.props.removeStock(id)
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
                                <td>{stock.data.yieldStk}</td>
                                <td>{stock.data.yieldMkt}</td>
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