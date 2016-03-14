/**
 * Created by Lumpychen on 16/3/13.
 */

import ReactDOM from 'react-dom'
import linkState from 'react-link-state';
import App from './App'
import Loan from './Loan'

export default class Yuebao extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div className="row" id="menu">
                <ul className=" col-md-5 row">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">
                                余额宝收益换算器
                            </h3>
                        </div>
                        <div className="panel-body">

                        </div>
                    </div>
                </ul>
            </div>

        )
    }
}