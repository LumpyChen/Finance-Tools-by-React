/**
 * Created by Lumpychen on 16/3/11.
 */
import ReactDOM from 'react-dom';
import Mortgage from './Mortgage'

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            position:"main"
        };
    }
    handleClick(e){
        e.preventDefault();
        //console.log(e.target)
        this.setState({
           position:e.target.name
        });
        ReactDOM.render(<Mortgage />,document.getElementById('root'))
    }
    render(){
        return (
            <div className="row" id="menu">
                <ul className="col-md-offset-1 col-md-10 row">
                    <div className="col-lg-4 text-center">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">
                                    Mortgage Loan's Calculator
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
                    </div>
                </ul>
            </div>
        )
    }

}
