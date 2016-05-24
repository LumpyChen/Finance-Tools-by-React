/**
 * Created by Lumpychen on 16/3/11.
 */
import { render } from 'react-dom';
import App from './components/App';


require('./bower_components/bootstrap/dist/js/bootstrap');
require('./bower_components/bootstrap/less/bootstrap.less');
require('./bower_components/font-awesome/less/font-awesome.less')

render(<App />,document.getElementById('root'));