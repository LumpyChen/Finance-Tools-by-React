/**
 * Created by Lumpychen on 16/3/11.
 */

import App from './components/App';
import ReactDOM from 'react-dom';

require('./bower_components/bootstrap/dist/js/bootstrap');
require('./bower_components/bootstrap/less/bootstrap.less');
require('./bower_components/font-awesome/less/font-awesome.less')
ReactDOM.render(<App />,document.getElementById('root'));