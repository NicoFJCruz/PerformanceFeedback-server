const User = require('./User')
const Country = require('./Country')
const Office = require('./Office')
const Team = require('./Team')
const Position = require('./Position')

User.hasMany(User, { as: 'employee', foreignKey: 'parentId' })
User.belongsTo(User, { as: 'leader', foreignKey: 'parentId' })

Position.hasMany(User, { foreignKey: 'positionId' })
User.belongsTo(Position, { foreignKey: 'positionId' })

Country.hasMany(Office)
Office.belongsTo(Country)

Office.hasMany(User)
User.belongsTo(Office)

Team.hasMany(User)
User.belongsTo(Team)

module.exports = { User, Position }
