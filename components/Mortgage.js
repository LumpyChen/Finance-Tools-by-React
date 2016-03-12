/**
 * Created by Lumpychen on 16/3/12.
 */

module.exports = class Mortgage extends React.Component {

    handleClick(e){
        e.preventDefault();
        //console.log(e.target)
        this.setState({
            position:e.target.name
        });
        ReactDOM.render(<App />,document.getElementById('root'))
    }

    render(){
        return (
                <div className="row" id="menu">
                    <ul className="col-md-offset-2 col-md-8 row">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">
                                    Mortgage Loan's Calculator
                                </h3>
                            </div>
                            <div className="panel-body">
                                <form className="form-group" action="">

                                </form>
                                <button name="main" onClick={ (e) => {this.handleClick(e);}  } className="btn btn-block btn-primary text-center">
                                    Back
                                </button>
                            </div>
                        </div>
                    </ul>
                </div>
            )
    }
}