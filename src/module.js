import {OpenNMSDatasource} from './datasource';
import {OpenNMSQueryCtrl} from './query_ctrl';
import {loadPluginCss} from 'app/plugins/sdk';

class GenericConfigCtrl {}
GenericConfigCtrl.templateUrl = 'partials/config.html';

class GenericQueryOptionsCtrl {}
GenericQueryOptionsCtrl.templateUrl = 'partials/query.options.html';

loadPluginCss({
  dark: 'plugins/grafana-opennms-datasource/css/opennms.dark.css',
  light: 'plugins/grafana-opennms-datasource/css/opennms.light.css'
});

export {
  OpenNMSDatasource as Datasource,
  OpenNMSQueryCtrl as QueryCtrl,
  GenericConfigCtrl as ConfigCtrl,
  GenericQueryOptionsCtrl as QueryOptionsCtrl
};
