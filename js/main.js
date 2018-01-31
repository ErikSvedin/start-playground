const dc = require('dc')
const d3 = require('d3')
const crossfilter = require('crossfilter')

const data = require('../data')

const ndx = crossfilter(data)

const applicationDateDimension = ndx.dimension(application => new Date(application.application))
const interviewDateDimension = ndx.dimension(application => new Date(application.interview))
const positionDimension = ndx.dimension(application => application.jobid)
const locationDimension = ndx.dimension(application => application.location)
const departmentDimension = ndx.dimension(application => application.department)

const applicationsGroup = ndx.groupAll().reduceSum(application => 1)

const barChart = dc.barChart("#chart")

barChart
  .width(800)
  .height(300)
  .x(d3.time.scale().domain([new Date('2016-05-01'), new Date()]))
  .xUnits(d3.time.days)
  .yAxisLabel("")
  .dimension(applicationDateDimension)
  .group(applicationsGroup)
  .colors("#457fca")
  .renderHorizontalGridLines(true)
  .render()
