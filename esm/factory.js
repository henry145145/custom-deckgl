function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inheritsLoose(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a.__proto__=b}/* eslint-disable react/jsx-handler-names */ /* eslint-disable react/destructuring-assignment */ /* eslint-disable react/sort-comp */ /* eslint-disable camelcase */ /* eslint-disable react/no-unsafe */ /* eslint-disable sort-keys */ /* eslint-disable react/no-unused-prop-types */ /* eslint-disable react/forbid-prop-types */ /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */import React from"react";import PropTypes from"prop-types";import{isEqual}from"lodash";import DeckGLContainer from"./DeckGLContainer";import CategoricalDeckGLContainer from"./CategoricalDeckGLContainer";import{fitViewport}from"./layers/common";var propTypes={formData:PropTypes.object.isRequired,payload:PropTypes.object.isRequired,setControlValue:PropTypes.func.isRequired,viewport:PropTypes.object.isRequired,onAddFilter:PropTypes.func,setTooltip:PropTypes.func},defaultProps={onAddFilter:function onAddFilter(){},setTooltip:function setTooltip(){}};export function createDeckGLComponent(a,b){// Higher order component
var bFuc = b;var c=/*#__PURE__*/function(c){function d(a){var d=c.call(this,a)||this;var e=a.viewport,f=a.formData.autozoom?fitViewport(e,b(a.payload.data.features)):e;console.log(f);return d.state={viewport:f,layer:d.computeLayer(a)},d.onViewportChange=d.onViewportChange.bind(_assertThisInitialized(d)),d}_inheritsLoose(d,c);var e=d.prototype;return e.UNSAFE_componentWillReceiveProps=function UNSAFE_componentWillReceiveProps(a){// Only recompute the layer if anything BUT the viewport has changed
var b=_extends({},a.formData,{viewport:null}),c=_extends({},this.props.formData,{viewport:null});isEqual(b,c)&&a.payload===this.props.payload||this.setState({layer:this.computeLayer(a)});console.log(c);console.log(b);var oldFilters=c.extra_filters; var newFilters=b.extra_filters; if(oldFilters.length !== newFilters.length){var e=a.viewport,f =a.formData.autozoom ? fitViewport(e, bFuc(a.payload.data.features)) : e;this.setState({viewport: f });}},e.onViewportChange=function onViewportChange(a){this.setState({viewport:a})},e.computeLayer=function computeLayer(b){console.log(b.formData);var c=b.formData,d=b.payload,e=b.onAddFilter,f=b.setTooltip;return a(c,d,e,f)},e.render=function render(){var a=this.props,b=a.formData,c=a.payload,d=a.setControlValue,e=this.state,f=e.layer,g=e.viewport;console.log(this.state);var z = a.formData.autozoom ? fitViewport(g, bFuc(a.payload.data.features)) : g;return React.createElement("div", null, React.createElement(DeckGLContainer,{mapboxApiAccessToken:c.data.mapboxApiKey,viewport:g,layers:[f],mapStyle:b.mapbox_style,setControlValue:d,onViewportChange:this.onViewportChange}))},d}(React.PureComponent);return c.propTypes=propTypes,c.defaultProps=defaultProps,c}export function createCategoricalDeckGLComponent(a,b){function c(c){var d=c.formData,e=c.payload,f=c.setControlValue,g=c.onAddFilter,h=c.setTooltip,i=c.viewport;return React.createElement(CategoricalDeckGLContainer,{formData:d,mapboxApiKey:e.data.mapboxApiKey,setControlValue:f,viewport:i,getLayer:a,payload:e,onAddFilter:g,setTooltip:h,getPoints:b})}return c.propTypes=propTypes,c.defaultProps=defaultProps,c}