import React from 'react'
import JSONPretty from 'react-json-pretty'
import * as theme from 'react-json-pretty/dist/monikai'

const JsonData = (props) => <JSONPretty data={props} theme={theme}></JSONPretty>

export default JsonData