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
        }
    }
    componentWillUpdate(nexP,nexS){
        console.log('in'+this.state.verify)
        console.log(nexS.verify+'+')
        let arr = [
            this.state.first,
            this.state.second,
            this.state.third,
            this.state.fourth,
            this.state.fifth,
            this.state.sixth,
            this.state.seventh
        ]
        //console.log(arr);
        var that = this
        function changeMsg (ver){
            switch (ver) {
                case 'empty':
                    that.refs.message.className = 'col-md-offset-1 col-sm-offset-1 text-default'
                    that.refs.message.innerHTML = "请输入您的金融数据。"
                    document.getElementById('trans').disabled = true;
                    break;
                case 'error':
                    that.refs.message.className = 'col-md-offset-1 col-sm-offset-1 text-danger'
                    that.refs.message.innerHTML = "您输入的金融数据有误。"
                    document.getElementById('trans').disabled = true;
                    break;
                case 'pass':
                    that.refs.message.className = 'col-md-offset-1 col-sm-offset-1 text-success'
                    that.refs.message.innerHTML = "您输入的金融数据成立。"
                    document.getElementById('trans').disabled = false;
            }
        }
        let state = "";
        for (let i = 0;i<arr.length;i++) {
            if (!((this.state.gross>=0) && (!Number.isNaN(this.state.gross)) && (!Number.isNaN(arr[i])) && (arr[i] >= 0) && (20 > arr[i]) ))  {
                state = "error"
                //console.log('err');
            } else if ((arr[i] == "") || (this.state.gross == '')) {
                if (state!="error"){
                    state = "empty"
                    //console.log('empty');
                }
            }
            else {
                if((state!="error")&&(state!="empty")){
                    state = "pass"
                }
                //console.log('pass');
            }
        }
        window.verify = state;
        console.log('out'+state);
        changeMsg(state);

    }

    handleSubmit(e){
        this.setState({
            submit:true
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
        console.log(window.verify)
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
                                    <div className="">
                                        <label forHtml="gross" className="col-md-12 col-sm-12 ">请输入您今日在余额宝中的余额总额</label>
                                    </div>
                                    <div className="col-md-12 col-sm-12">
                                        <input id="gross" className="form-control" valueLink={linkState(this,'gross')} type="text" placeholder="请输入余额"/>
                                    </div>
                                </div>

                                <hr/>
                                <div className="form-group text-center">
                                    <label className=" col-md-12 col-sm-12" >请输入<a href="http://www.thfund.com.cn">天弘基金</a>过去七日的每万份收益以进行计算：</label>
                                    <label className=" col-md-12 col-sm-12" ><a href="http://fund.eastmoney.com/000198.html?spm=aladin">点击此处查询天弘基金的每万份收益</a></label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="first" className="col-md-3 control-label">前第一日:</label>
                                    <div className="col-md-9">
                                        <input id="first" name="firth" valueLink={linkState(this,'first')}  type="text" placeholder="天弘基金昨日每万份收益" className="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="second" className="col-md-3 control-label">前第二日:</label>
                                    <div className="col-md-9">
                                        <input name="second" id="second" valueLink={linkState(this,'second')} type="text" placeholder="天弘基金前日每万份收益" className="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="third" className="col-md-3 control-label">前第三日:</label>
                                    <div className="col-md-9">
                                        <input name="third" id="third" valueLink={linkState(this,'third')} type="text" placeholder="天弘基金前第三日每万份收益" className="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="fourth" className="col-md-3 control-label">前第四日:</label>
                                    <div className="col-md-9">
                                        <input name="fourth" id="fourth" valueLink={linkState(this,'fourth')} type="text" placeholder="天弘基金前第四日每万份收益" className="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="fifth" className="col-md-3 control-label">前第五日:</label>
                                    <div className="col-md-9">
                                        <input name="fifth" id="fifth" valueLink={linkState(this,'fifth')} type="text" placeholder="天弘基金前第五日每万份收益" className="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="sixth" className="col-md-3 control-label">前第六日:</label>
                                    <div className="col-md-9">
                                        <input name="sixth" id="sixth" type="text" valueLink={linkState(this,'sixth')} placeholder="天弘基金前第六日每万份收益" className="form-control"/>
                                    </div>
                                </div>


                                <div className="form-group">
                                    <label htmlFor="seventh" className="col-md-3 control-label">前第七日:</label>
                                    <div className="col-md-9">
                                        <input name="seventh" id="seventh" valueLink={linkState(this,'seventh')} type="text" placeholder="天弘基金前第七日每万份收益" className="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <p ref="message" className="col-md-offset-1 text-default col-sm-offset-1">请输入您的金融数据。</p>
                                </div>



                            </form>
                            <div className="row">
                                <button name="main" id="trans" onClick={ (e) => {this.handleSubmit(e);}  }  ref="cal"  className="btn col-sm-12 col-md-offset-1 col-md-4 btn-success  text-center">
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
                            linkState(this,'submit'),
                            {value:window.verify}
                        ]
                    }  />
                </div>
            </div>

        )
    }
}

