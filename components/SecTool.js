/**
 * Created by Lumpychen on 16/3/13.
 */

import ReactDOM from 'react-dom';
var Mortgage = require('./Mortgage')
var Yuebao = require('./Yuebao')

export default class SecTool extends React.Component {
    constructor(props){

        super(props)
    }

    componentDidMount(){
        this.refs['icon'].className = 'fa fa-' + this.props.icon
    }

    handleClick(e){
        e.preventDefault();
        //console.log(e.target)
        this.setState({
            position:e.target.name
        });
        //console.log(eval(e.target.name))
        ReactDOM.render(React.createElement(eval(e.target.name).default,this.props.icon), document.getElementById('root'))

    }
    render(){
        return (
            <div className="col-lg-4 text-center">
                <div className="panel panel-default ">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            <i ref="icon" ></i>&nbsp;&nbsp;{ this.props.cap }
                        </h3>
                    </div>
                    <div className="panel-body">
                        <blockquote>
                            { this.props.intro }
                        </blockquote>
                        <button name={this.props.comp} onClick={ (e) => {this.handleClick(e);}  } className="btn btn-block btn-primary text-center">
                            Check
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

