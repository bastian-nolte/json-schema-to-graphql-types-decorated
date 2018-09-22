const {MappingBaseType} = require('./base')

// TODO: check if has any date format
function hasDateContraint(obj) {
  return false
}

function hasDateType(type) {
  return ['date', 'date-time', 'time'].find(t => t === type)
}

function isDate(obj) {
  return (obj.type === 'string' && hasDateContraint(obj)) || hasDateType(obj.type)
}

function toDate(obj) {
  return isDate(obj) && MappingDate.create(obj)
}

class MappingDate extends MappingBaseType {
  get baseType() {
    return this._types.date || 'Date'
  }

  is() {
    return 'scalar'
  }

  static create(obj) {
    return new MappingDate(obj)
  }
}

module.exports = {
  toDate,
  MappingDate
}
