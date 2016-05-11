## OpenNMS Datasource for Grafana [![Build Status](https://travis-ci.org/OpenNMS/grafana-opennms-datasource.svg?branch=master)](https://travis-ci.org/OpenNMS/grafana-opennms-datasource)

This datasource enables users to query metrics collected and persisted by [OpenNMS](https://github.com/OpenNMS/opennms).

### Features

#### Storage engine agnostic

Retrieve metrics stored in any of the available persistence engines .i.e. rrdtool, JRobin and [Newts](https://github.com/OpenNMS/newts).

#### Template support

Populate template variables with all of the nodes belonging to a set of categories, or leverage the complete [filter grammar](https://www.opennms.org/wiki/Filters).

#### Trending and Forecasting

Remove outliers and perform trending or forecasting using the built-in series filters. Develop your own filters using Java or [R](https://www.r-project.org/).

Derive new series using
[JEXL](https://commons.apache.org/proper/commons-jexl/reference/syntax.html) expressions.

### Supports
 * OpenNMS Horizion v16.x or greater
 * OpenNMS Meridian v2016.1.0 or greater

### Changelog

##### 2.0.1 (05/11)

* Updated query editor to use the updated Grafana 3.0.0 styles. Fixes [#2](https://github.com/OpenNMS/grafana-opennms-datasource/issues/2)

##### 2.0.0 (04/16)

* Updated the datasource to be compatible with Grafana 3.0.0
* Added support for sub-attributes used by some of the poller modules (requires Horizon v17.x or greater)
* Added support for metric queries (requires Horizon v18.x or greater)
* Added support for using template variables in filter expression

#### 1.1.0 (09/15)

* Added support for both single-valued and multi-valued template variables
* Added support for testing the datasource, introduced in Grafana 2.1.0
* Help information is now available in the datasource editor
* Added support for filters (requires Horizon v17.x or greater)

#### 1.0.0-rc1 (06/15)

* Initial datasource implementation
