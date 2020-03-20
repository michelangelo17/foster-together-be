exports.up = function(knex) {
  return knex.schema
    .alterTable('families', tbl => {
      tbl.dropColumn('email')
    })
    .alterTable('neighbors', tbl => {
      tbl.dropColumn('email')
    })
    .alterTable('admins', tbl => {
      tbl.dropColumn('email')
    })
}

exports.down = function(knex) {}
