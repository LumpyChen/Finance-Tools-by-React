/**
 * Created by Lumpychen on 16/3/12.
 */

import ReactDOM from 'react-dom'
import linkState from 'react-link-state';
import App from './App'
import Loan from './Loan'




export default class Mortgage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            Loans:"",
            Rate:4.9,
            Times:12,
            Method:'a',
            LoadMounted:false
        };

    }
    componentDidMount(){
        this.refs.cal.disabled = "disabled";
    }
    componentDidUpdate(){
        console.log(this.state.Method+'final');
        if(/^\d+$/.test(this.state.Loans)&&!(Number.isNaN(this.state.Rate))&&this.state.Loans!=""&&this.state.Rate!=""&&this.state.Rate<20&&this.state.Rate>0) {
            if (this.state.LoadMounted)
                ReactDOM.render(<Loan value={
                    {
                        Loans:this.state.Loans,
                        Rate:this.state.Rate,
                        Times:this.state.Times,
                        Method:this.state.Method
                    }

            }/>, document.getElementById('loan'));
        }
    }
    componentWillUpdate(){

        console.log(this.state.Method+'init');

        if(/^\d+$/.test(this.state.Loans)&&!(Number.isNaN(this.state.Rate))&&this.state.Loans!=""&&this.state.Rate!=""&&this.state.Rate<20&&this.state.Rate>0) {
            this.refs.message.className = 'text-success'
            this.refs.message.innerHTML = "Now your data is real."
            this.refs.cal.removeAttribute('disabled');

        } else if (this.state.Loans==""||this.state.Rate==""){
            this.refs.message.className = 'help-block'
            this.refs.message.innerHTML = "Please enter your financial data."
            this.refs.cal.disabled = "disabled";
        } else {
            this.refs.message.className = 'text-danger'
            this.refs.message.innerHTML = "There's something wrong with your financial data."
            this.refs.cal.disabled = "disabled";
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

    handleSelect(e){
        e.preventDefault();
        this.setState({
            Rate:e.target.value
        })
    }

    handleRadio(e){
        //e.preventDefault();
        this.setState({
            Method:e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        ReactDOM.render(<Loan value={
            {
                 Loans:this.state.Loans,
                 Rate:this.state.Rate,
                 Times:this.state.Times,
                 Method:this.state.Method,
                 icon:this.props.icon
            }

        } />,document.getElementById('loan'))
        this.setState({
            LoadMounted:true
        })
    }
    render(){



        return (
                <div className="row" id="menu">
                    <ul className=" col-md-5 row">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">
                                    <i className="fa fa-calculator"></i>&nbsp;&nbsp;Mortgage Loan's Calculator
                                </h3>
                            </div>
                            <div className="panel-body">
                                <form role="form"  action="">
                                    <div className="form-group">
                                        <label forHTML="Loans" className="h5">Outstanding loans:</label>
                                        <input type="text" valueLink={linkState(this,'Loans')} className="form-control" name="Loans" placeholder="Please enter your total outstanding loans, unit: RMB"/>
                                        <label forHTML="Rate" className="h5">Interest Rate:</label>
                                        <input type="text" ref="Rate" valueLink={linkState(this,'Rate')} className="form-control" name="Rate" placeholder="Please enter your interest rate which is under 20%, unit: %"/>
                                        <div className="place-holder" style={{margin:"10px"}}></div>
                                        <select name="Rate" onChange={(e) => {this.handleSelect(e)}} className="form-control" id="">
                                            <option value="4.9">2016 Benchmark interest rate</option>
                                            <option value="3.43">2016 Benchmark interest rate's floor(70%)</option>
                                            <option value="4.17">2016 Benchmark interest rate's floor(85%)</option>
                                            <option value="5.39">2016 Benchmark interest rate's ceiling(110%)</option>
                                        </select>
                                        <label forHTML="times" className="h5">Times</label>
                                        <select valueLink={linkState(this,'Times')}  name="Times" className="form-control">
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
                                                <input type="radio" defaultChecked  onChange={ (e) => {this.handleRadio(e)} } name="Method" id="" value="a"/>&nbsp;&nbsp;&nbsp;Average capital
                                            </label>
                                            <label className="checkbox-inline small">
                                                <input type="radio" name="Method"  onChange={ (e) => {this.handleRadio(e)} }  id="" value="i"/>&nbsp;&nbsp;&nbsp;Average capital plus interest
                                            </label>
                                        </div>
                                        <p ref="message" className="help-block">Please enter your financial data.</p>
                                    </div>

                                </form>
                                <button name="main"   onClick={ (e) => {this.handleSubmit(e);}  }  ref="cal"  className="btn btn-block btn-success text-center">
                                    Calculate
                                </button>
                                <button name="main" onClick={ (e) => {this.handleClick(e);}  } className="btn btn-block btn-primary text-center">
                                    Back
                                </button>
                            </div>
                        </div>
                    </ul>
                    <div className="col-md-6" id="loan"></div>
                </div>
            )
    }
}