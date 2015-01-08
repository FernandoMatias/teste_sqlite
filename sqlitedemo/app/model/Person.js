Ext.define('SqliteDemo.model.Person', {
  extend: 'Ext.data.Model',
  
  config: {
    fields: [
    { name: 'id', type: 'int' }, // Every model must start with an id of type int
    { name: 'name', type: 'string' }, // bools, floats, objects and arrays also supported
    { name: 'endereco', type: 'string'}
    ],
    
    validations: [
    {
      name: 'name',
      type: 'length',
      min: 2,
      message: 'Person\'s name must be at least 2 characters long'
    }
    ],
    
    proxy: {
      type: 'sqlitestorage',
      dbConfig: {
        tablename: 'people',
        dbConn: SqliteDemo.util.InitSQLite.getConnection()
      }
  }
}
  
});