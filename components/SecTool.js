/**
 * Created by Lumpychen on 16/3/13.
 */

import ReactDOM from 'react-dom';
var Mortgage = require('./Mortgage')

export default class SecTool extends React.Component {
    constructor(props){
        super(props)
    }
    handleClick(e){
        e.preventDefault();
        //console.log(e.target)
        this.setState({
            position:e.target.name
        });
        console.log(eval(e.target.name))
        ReactDOM.render(React.createElement(eval(e.target.name).default), document.getElementById('root'))

    }
    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        <i className="fa fa-calculator"></i>&nbsp;&nbsp;Mortgage Loan's Calculator
                    </h3>
                </div>
                <div className="panel-body">
                    <blockquote>
                        Calculate your mortgage loan so you can
                        formulate a plan on your spending.
                    </blockquote>
                    <button name="Mortgage" onClick={ (e) => {this.handleClick(e);}  } className="btn btn-block btn-primary text-center">
                        Check
                    </button>
                </div>
            </div>
        );
    }
}

