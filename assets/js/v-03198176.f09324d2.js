"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[75348],{397634:(e,o,t)=>{t.r(o),t.d(o,{data:()=>i});const i=JSON.parse('{"key":"v-03198176","path":"/devices/PCT504.html","title":"OWON PCT504 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"OWON PCT504 control via MQTT","description":"Integrate your OWON PCT504 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-09-30T20:52:51.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Fan","slug":"fan","link":"#fan","children":[]},{"level":3,"title":"Programming operation mode (enum)","slug":"programming-operation-mode-enum","link":"#programming-operation-mode-enum","children":[]},{"level":3,"title":"Keypad lockout (enum)","slug":"keypad-lockout-enum","link":"#keypad-lockout-enum","children":[]},{"level":3,"title":"Max heat setpoint limit (numeric)","slug":"max-heat-setpoint-limit-numeric","link":"#max-heat-setpoint-limit-numeric","children":[]},{"level":3,"title":"Min heat setpoint limit (numeric)","slug":"min-heat-setpoint-limit-numeric","link":"#min-heat-setpoint-limit-numeric","children":[]},{"level":3,"title":"Max cool setpoint limit (numeric)","slug":"max-cool-setpoint-limit-numeric","link":"#max-cool-setpoint-limit-numeric","children":[]},{"level":3,"title":"Min cool setpoint limit (numeric)","slug":"min-cool-setpoint-limit-numeric","link":"#min-cool-setpoint-limit-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1721326626000},"filePathRelative":"devices/PCT504.md"}')},352112:(e,o,t)=>{t.r(o),t.d(o,{default:()=>p});var i=t(166252);const c=(0,i._)("h1",{id:"owon-pct504",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#owon-pct504","aria-hidden":"true"},"#"),(0,i.Uk)(" OWON PCT504")],-1),d=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),a=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"PCT504")],-1),n=(0,i._)("td",null,"Vendor",-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"HVAC fan coil")],-1),u=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"humidity, occupancy, climate (system_mode, local_temperature, running_mode, running_state, occupied_heating_setpoint, unoccupied_heating_setpoint, occupied_cooling_setpoint, unoccupied_cooling_setpoint), fan (state, mode), programming_operation_mode, keypad_lockout, max_heat_setpoint_limit, min_heat_setpoint_limit, max_cool_setpoint_limit, min_cool_setpoint_limit, linkquality")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/PCT504.png",alt:"OWON PCT504"})])],-1),r=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),h=(0,i.uE)('<ul><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></p></li><li><p><code>no_occupancy_since</code>: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a <code>{&quot;no_occupancy_since&quot;: 10}</code> will be send after 10 seconds and a <code>{&quot;no_occupancy_since&quot;: 60}</code> after 60 seconds. The value must be a list of [object Object].</p></li><li><p><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>system_mode</code>, <code>local_temperature</code>, <code>running_mode</code>, <code>running_state</code>, <code>occupied_heating_setpoint</code>, <code>unoccupied_heating_setpoint</code>, <code>occupied_cooling_setpoint</code>, <code>unoccupied_cooling_setpoint</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>occupied_cooling_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_cooling_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>7</code> and <code>35</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_cooling_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>, <code>cool</code>, <code>fan_only</code>, <code>sleep</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>, <code>cool</code>, <code>fan_only</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state&quot;: &quot;&quot;}</code>.</li></ul><h3 id="fan" tabindex="-1"><a class="header-anchor" href="#fan" aria-hidden="true">#</a> Fan</h3><p>The current state of this fan is in the published state under the <code>fan_state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this fan publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fan_state&quot;: &quot;ON&quot;}</code> or <code>{&quot;fan_state&quot;: &quot;OFF&quot;}</code>. To read the current state of this fan publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;fan_state&quot;: &quot;&quot;}</code>. To change the mode publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fan_mode&quot;: VALUE}</code> where <code>VALUE</code> can be: <code>low</code>, <code>medium</code>, <code>high</code>, <code>on</code>, <code>auto</code>.</p><h3 id="programming-operation-mode-enum" tabindex="-1"><a class="header-anchor" href="#programming-operation-mode-enum" aria-hidden="true">#</a> Programming operation mode (enum)</h3><p>Controls how programming affects the thermostat. Possible values: setpoint (only use specified setpoint), schedule (follow programmed setpoint schedule), schedule_with_preheat (follow programmed setpoint schedule with pre-heating). Changing this value does not clear programmed schedules.. Value can be found in the published state on the <code>programming_operation_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;programming_operation_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;programming_operation_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>setpoint</code>, <code>schedule</code>, <code>schedule_with_preheat</code>, <code>eco</code>.</p><h3 id="keypad-lockout-enum" tabindex="-1"><a class="header-anchor" href="#keypad-lockout-enum" aria-hidden="true">#</a> Keypad lockout (enum)</h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>keypad_lockout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;keypad_lockout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keypad_lockout&quot;: NEW_VALUE}</code>. The possible values are: <code>unlock</code>, <code>lock1</code>, <code>lock2</code>.</p><h3 id="max-heat-setpoint-limit-numeric" tabindex="-1"><a class="header-anchor" href="#max-heat-setpoint-limit-numeric" aria-hidden="true">#</a> Max heat setpoint limit (numeric)</h3><p>Maximum Heating set point limit. Value can be found in the published state on the <code>max_heat_setpoint_limit</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;max_heat_setpoint_limit&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_heat_setpoint_limit&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>30</code>. The unit of this value is <code>°C</code>.</p><h3 id="min-heat-setpoint-limit-numeric" tabindex="-1"><a class="header-anchor" href="#min-heat-setpoint-limit-numeric" aria-hidden="true">#</a> Min heat setpoint limit (numeric)</h3><p>Minimum Heating set point limit. Value can be found in the published state on the <code>min_heat_setpoint_limit</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;min_heat_setpoint_limit&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_heat_setpoint_limit&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>30</code>. The unit of this value is <code>°C</code>.</p><h3 id="max-cool-setpoint-limit-numeric" tabindex="-1"><a class="header-anchor" href="#max-cool-setpoint-limit-numeric" aria-hidden="true">#</a> Max cool setpoint limit (numeric)</h3><p>Maximum Cooling set point limit. Value can be found in the published state on the <code>max_cool_setpoint_limit</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;max_cool_setpoint_limit&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_cool_setpoint_limit&quot;: NEW_VALUE}</code>. The minimal value is <code>7</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="min-cool-setpoint-limit-numeric" tabindex="-1"><a class="header-anchor" href="#min-cool-setpoint-limit-numeric" aria-hidden="true">#</a> Min cool setpoint limit (numeric)</h3><p>Minimum Cooling point limit. Value can be found in the published state on the <code>min_cool_setpoint_limit</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;min_cool_setpoint_limit&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_cool_setpoint_limit&quot;: NEW_VALUE}</code>. The minimal value is <code>7</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',25),m={},p=(0,t(983744).Z)(m,[["render",function(e,o){const t=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),c,(0,i._)("table",null,[d,(0,i._)("tbody",null,[a,(0,i._)("tr",null,[n,(0,i._)("td",null,[(0,i.Wm)(t,{to:"/supported-devices/#v=OWON"},{default:(0,i.w5)((()=>[(0,i.Uk)("OWON")])),_:1})])]),l,u,s])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),r,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);