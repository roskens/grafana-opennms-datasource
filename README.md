## OpenNMS Datasource for Grafana [![Build Status](https://travis-ci.org/OpenNMS/grafana-opennms-datasource.svg?branch=master)](https://travis-ci.org/OpenNMS/grafana-opennms-datasource)

Take a look at our [Wiki page](http://www.opennms.org/wiki/Grafana) for details on how to get started.

## Changelog

### v2.0.0

* Updated the datasource to be compatible with Grafan 3.0.0
* Added support for sub-attributes used by some of the poller modules
* Added support for metric queries
* Added support for template variables in filter expression

### v1.1.0

* Added support for both single-valued and multi-valued template variables
* Added support for testing the datasource, introduced in Grafana 2.1.0
* Help information is now available in the datasource editor
* Added support for filters, available in Horizon 17.0.0

### v1.0.0-rc1

* Initial datasource implementation
