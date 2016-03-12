/**
 * Created by Lumpychen on 16/3/12.
 */

import ReactDOM from 'react-dom'
import ReactAdd from 'react/addons'
import App from './App'
import Loan from './Loan'

module.exports = class Mortgage extends ReactAdd.Component {

    constructor(props){
        super(props);
        this.state = {
            Loans:0,
            Rate:0,
            Times:12,
            Method:"a"
        };
    }

    handleClick(e){
        e.preventDefault();
        //console.log(e.target)
        this.setState({
            position:e.target.name
        });
        ReactDOM.render(<App />,document.getElementById('root'))
    }

    handleInput(e){
        e.preventDefault();
        let name = e.target.value
        this.setState({
             name:e.target.value
        })
    }

    handleRadio(e){
        //e.preventDefault();
    }
    handleSubmit(e){
        e.preventDefault();
        ReactDOM.render(<Loan />,document.getElementById('loan'))
    }
    handleSelect(e){
        e.preventDefault();
    }

    render(){
        return (
                <div className="row" id="menu">
                    <ul className="col-md-offset-2 col-md-8 row">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">
                                    <i className="fa fa-calculator"></i>&nbsp;&nbsp;Mortgage Loan's Calculator
                                </h3>
                            </div>
                            <div className="panel-body">
                                <form role="form"  action="">
                                    <div className="form-group">
                                        <label forHTML="sum" className="h5">Outstanding loans:</label>
                                        <input type="text" onChange={ (e) => this.handleInput(e) } className="form-control" name="Loan" id="" placeholder="Please enter your total outstanding loans, unit: RMB"/>
                                        <label forHTML="sum" className="h5">Interest Rate:</label>
                                        <input type="text" onChange={ (e) => this.handleInput(e) } className="form-control" name="Rate" id="" placeholder="Please enter your interest rate, unit: %"/>
                                        <label forHTML="times" className="h5">Times</label>
                                        <select onChange={ (e) => this.handleSelect(e) }  name="Times" className="form-control">
                                            <option value="1">1 years , 1 * 12 times</option>
                                            <option value="2">2 years , 2 * 12 times</option>
                                            <option value="3">3 years , 3 * 12 times</option>
                                            <option value="4">4 years , 4 * 12 times</option>
                                            <option value="5">5 years , 5 * 12 times</option>
                                            <option value="6">6 years , 6 * 12 times</option>
                                            <option value="7">7 years , 7 * 12 times</option>
                                            <option value="8">8 years , 8 * 12 times</option>
                                            <option value="9">9 years , 9 * 12 times</option>
                                            <option value="10">10 years , 10 * 12 times</option>
                                            <option value="11">11 years , 11 * 12 times</option>
                                            <option value="12">12 years , 12 * 12 times</option>
                                            <option value="13">13 years , 13 * 12 times</option>
                                            <option value="14">14 years , 14 * 12 times</option>
                                            <option value="15">15 years , 15 * 12 times</option>
                                            <option value="16">16 years , 16 * 12 times</option>
                                            <option value="17">17 years , 17 * 12 times</option>
                                            <option value="18">18 years , 18 * 12 times</option>
                                            <option value="19">19 years , 19 * 12 times</option>
                                            <option value="20">20 years , 20 * 12 times</option>
                                            <option value="25">25 years , 25 * 12 times</option>
                                            <option value="30">30 years , 30 * 12 times</option>
                                        </select>
                                        <div className="h4">
                                            <label className="checkbox-inline small">
                                                <input type="radio" onChange={ (e) => this.handleRadio(e) } name="Method" id="" defaultChecked value="a"/>&nbsp;&nbsp;&nbsp;Average capital
                                            </label>
                                            <label className="checkbox-inline small">
                                                <input type="radio" onChange={ (e) => this.handleRadio(e) } name="Method" id="" value="i"/>&nbsp;&nbsp;&nbsp;Average capital plus interest
                                            </label>
                                        </div>
                                        <p className="help-block">Please enter your financial data.</p>
                                    </div>

                                </form>
                                <button name="main" onClick={ (e) => {this.handleSubmit(e);}  } className="btn btn-block btn-success text-center">
                                    Calculate
                                </button>
                                <button name="main" onClick={ (e) => {this.handleClick(e);}  } className="btn btn-block btn-primary text-center">
                                    Back
                                </button>
                            </div>
                        </div>
                    </ul>
                    <div id="loan"></div>
                </div>
            )
    }
}