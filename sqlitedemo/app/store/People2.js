Ext.define('SqliteDemo.store.People2', {
  
  extend: 'Ext.data.Store',
  
  requires: ['SqliteDemo.model.Person'],
  
  config: {
    model: 'SqliteDemo.model.Person',
    autoLoad: true,
    storeId: 'People',
    pageSize: 1000
  }
});
