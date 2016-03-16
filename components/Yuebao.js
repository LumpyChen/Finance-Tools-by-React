/**
 * Created by Lumpychen on 16/3/13.
 */

import ReactDOM from 'react-dom'
import linkState from 'react-link-state';
import App from './App'
import Loan from './Loan'
import Solution from './Yuebaosolution'

export default class Yuebao extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            gross: "",
            first :"",
            second:"",
            third:"",
            fourth:"",
            fifth:"",
            sixth:"",
            seventh:"",
            submit:false,
            verify:"empty"
        }
    }
    componentDidMount(){
        this.refs.cal.disabled = "disabled";
    }
    componentDidUpdate(){
        let arr = [
            this.state.first,
            this.state.second,
            this.state.third,
            this.state.fourth,
            this.state.fifth,
            this.state.sixth,
            this.state.seventh
        ]
        let empty = true;
        var that = this
        function changeMsg (ver){
            switch (ver) {
                case 'empty':
                    that.refs.message.className = 'col-md-offset-1 col-sm-offset-1 help-block'
                    that.refs.message.innerHTML = "请输入您的金融数据。"
                    break;
                case 'error':
                    that.refs.message.className = 'col-md-offset-1 col-sm-offset-1 text-danger'
                    that.refs.message.innerHTML = "您输入的金融数据有误。"
                    break;
                case 'pass':
                    that.refs.message.className = 'col-md-offset-1 col-sm-offset-1 text-success'
                    that.refs.message.innerHTML = "您输入的金融数据成立。"
            }
        }

        for (let i = 0;i<arr.length;i++) {
            if (arr[i] == "") {
                this.state.verify = "empty"
                console.log(this.refs.message)
                break;
            } else if (!(!Number.isNaN(arr[i]) && (arr[i] >= 0) && (20 > arr[i])))  {
                this.state.verify = "error"
                break;
            } else {
                this.state.verify = "pass"
                this.state.submit = true;
            }
        }

        changeMsg(this.state.verify)
    }

    handleSubmit(e){
        this.setState({
            submit:!this.state.submit
        })
        console.log(this.state.submit)
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
                                    <div className="col-md-10 col-sm-offset-1 col-sm-10">
                                        <div className="form-group">请输入您今日在余额宝中的余额总额</div>
                                    </div>
                                    <div className="col-md-10 col-sm-offset-1 col-sm-10">
                                        <input className="form-control" valueLink={linkState(this,'gross')} type="text" placeholder="请输入余额"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-offset-1 help-block" >请输入<a href="">天弘基金</a>过去七日的每万份收益以进行计算：</div>
                                    <div className="col-sm-offset-1 help-block" ><a href="">点击此处查询天弘基金的每万份收益</a></div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="first" className="col-md-3 control-label">前第一日:</label>
                                    <div className="col-md-8">
                                        <input id="first" name="firth" valueLink={linkState(this,'first')}  type="text" placeholder="天弘基金昨日每万份收益" className="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="second" className="col-md-3 control-label">前第二日:</label>
                                    <div className="col-md-8">
                                        <input name="second" id="second" valueLink={linkState(this,'second')} type="text" placeholder="天弘基金前日每万份收益" className="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="third" className="col-md-3 control-label">前第三日:</label>
                                    <div className="col-md-8">
                                        <input name="third" id="third" valueLink={linkState(this,'third')} type="text" placeholder="天弘基金前第三日每万份收益" className="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="fourth" className="col-md-3 control-label">前第四日:</label>
                                    <div className="col-md-8">
                                        <input name="fourth" id="fourth" valueLink={linkState(this,'fourth')} type="text" placeholder="天弘基金前第四日每万份收益" className="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="fifth" className="col-md-3 control-label">前第五日:</label>
                                    <div className="col-md-8">
                                        <input name="fifth" id="fifth" valueLink={linkState(this,'fifth')} type="text" placeholder="天弘基金前第五日每万份收益" className="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="sixth" className="col-md-3 control-label">前第六日:</label>
                                    <div className="col-md-8">
                                        <input name="sixth" id="sixth" type="text" valueLink={linkState(this,'sixth')} placeholder="天弘基金前第六日每万份收益" className="form-control"/>
                                    </div>
                                </div>


                                <div className="form-group">
                                    <label htmlFor="seventh" className="col-md-3 control-label">前第七日:</label>
                                    <div className="col-md-8">
                                        <input name="seventh" id="seventh" valueLink={linkState(this,'seventh')} type="text" placeholder="天弘基金前第七日每万份收益" className="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <p ref="message" className="col-md-offset-1 help-block col-sm-offset-1">请输入您的金融数据。</p>
                                </div>



                            </form>
                            <div className="row">
                                <button name="main" ref="cal" onClick={ (e) => {this.handleSubmit(e);}  }  ref="cal"  className="btn col-sm-12 col-md-offset-1 col-md-4 btn-success  text-center">
                                    Translate
                                </button>
                                <button name="main" onClick={ (e) => {this.handleClick(e);}  } className="btn col-md-offset-2 col-sm-12 col-md-4 btn-primary text-center">
                                    Back
                                </button>
                            </div>
                        </div>
                    </div>
                </ul>
                <div className="col-md-6">
                    <Solution value={
                        [
                            linkState(this,"gross"),
                            linkState(this,'first'),
                            linkState(this,'second'),
                            linkState(this,'third'),
                            linkState(this,'fourth'),
                            linkState(this,'fifth'),
                            linkState(this,'sixth'),
                            linkState(this,'seventh'),
                            linkState(this,'submit')
                        ]
                    }  />
                </div>
            </div>

        )
    }
}