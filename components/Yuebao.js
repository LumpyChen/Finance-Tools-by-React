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
                <ul className=" col-md-offset-1 col-md-5 row">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">
                                <i className="fa fa-money"></i>&nbsp;&nbsp;余额宝收益率转换器
                            </h3>
                        </div>
                        <div className="panel-body ">
                            <form role="form" className="form-horizontal" action="">
                                <div className="form-group">
                                    <div className="col-md-10 col-md-offset-1">
                                        <input className="form-control" type="text" placeholder="请输入您今日在余额宝中的余额总额"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-offset-1 help-block" >请输入<a href="">天弘基金</a>七日年化收益率以计算今日收益：</div>
                                    <div className="col-md-offset-1 help-block" ><a href="">点击此处查询日期的收益率</a></div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="first" className="col-md-3 control-label">前第一日:</label>
                                    <div className="col-md-8">
                                        <input id="first" type="text" placeholder="天弘基金昨日收益率" className="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="first" className="col-md-3 control-label">前第二日:</label>
                                    <div className="col-md-8">
                                        <input name="first" type="text" placeholder="天弘基金前日收益率" className="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="first" className="col-md-3 control-label">前第三日:</label>
                                    <div className="col-md-8">
                                        <input name="first" type="text" placeholder="天弘基金前第三日收益率" className="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="first" className="col-md-3 control-label">前第四日:</label>
                                    <div className="col-md-8">
                                        <input name="first" type="text" placeholder="天弘基金前第四日收益率" className="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="first" className="col-md-3 control-label">前第五日:</label>
                                    <div className="col-md-8">
                                        <input name="first" type="text" placeholder="天弘基金前第五日收益率" className="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="first" className="col-md-3 control-label">前第六日:</label>
                                    <div className="col-md-8">
                                        <input name="first" type="text" placeholder="天弘基金前第六日收益率" className="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="first" className="col-md-3 control-label">前第七日:</label>
                                    <div className="col-md-8">
                                        <input name="first" type="text" placeholder="天弘基金前第七日收益率" className="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <p ref="message" className="col-md-offset-1 help-block">请输入您的金融数据。</p>
                                </div>

                            </form>
                            <div className="row">
                                <button name="main"   onClick={ (e) => {this.handleSubmit(e);}  }  ref="cal"  className="btn col-md-offset-1 col-md-4 btn-success  text-center">
                                    Translate
                                </button>
                                <button name="main" onClick={ (e) => {this.handleClick(e);}  } className="btn col-md-offset-2 col-md-4 btn-primary text-center">
                                    Back
                                </button>
                            </div>
                        </div>
                    </div>
                </ul>
                <div className="col-md-6"></div>
            </div>

        )
    }
}