/**
 * Created by Lumpychen on 16/3/11.
 */
import ReactDOM from 'react-dom';
import SecTool from './SecTool'

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            position:"main"
        };
    }
    render(){
        return (
            <div className="row" id="menu">
                <ul className="col-md-offset-1 col-md-10 row">

                        <SecTool comp="Mortgage" intro="Calculate your mortgage loan so you can
                        formulate a plan on your spending." cap="Mortgage Loan's Calculator" icon="calculator" />
                        <SecTool comp="Yuebao" intro="With Providing 7 days' interest rate of
                        Tianhong funds, you can know the actual proceeds ." cap="Get Yuebao's interest rate" icon="money" />

                </ul>
            </div>
        )
    }

}
