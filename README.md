## OpenNMS Datasource for Grafana [![Build Status](https://travis-ci.org/OpenNMS/grafana-opennms-datasource.svg?branch=master)](https://travis-ci.org/OpenNMS/grafana-opennms-datasource)

This datasource enables users to query metrics collected and persisted by [OpenNMS](https://github.com/OpenNMS/opennms).

### Features

#### Storage engine agnostic

Retrieve metrics stored in any of the available persistence engines i.e. rrdtool, JRobin and [Newts](https://github.com/OpenNMS/newts).

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

See [Changelog](https://github.com/OpenNMS/grafana-opennms-datasource/blob/master/CHANGELOG.md)


### Hacking

To make changes to this plugin, make sure you have a running instance of Grafana and that your current user has write access to the plugins directory.
The Gruntfile assumes that the plugins directory is located at `/var/lib/grafana/plugins`.

After checking out the source tree, run:

    npm install
    grunt
    grunt copy:deploy

Once succesfuly, you can make change and have those deployed automatically using:

    grunt watch:deploy
