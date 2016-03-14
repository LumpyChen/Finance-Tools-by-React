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
                    <div className="col-lg-4 text-center">
                        <SecTool comp="Mortgage"   />
                    </div>
                </ul>
            </div>
        )
    }

}
