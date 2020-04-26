const Service = require('@mesg/service')
const MESG = new Service()

MESG.listenTask({
  mandrill: require('./tasks/mandrill'),
})