Ext.define('SqliteDemo.controller.Person2', {
  extend: 'Ext.app.Controller',
  
  config: {
    
    views: ['EditPerson2'],
    
    models: ['Person2'],
    
    stores: ['People2'],
    
    refs: {
      main: 'sqlitedemo-main',
      listContainer: 'sqlitedemo-main #listContainer',
      list: 'sqlitedemo-main #listContainer list',
      addBtn: 'sqlitedemo-main #listContainer #addBtn',
      editPerson: 'sqlitedemo-main sqlitedemo-editperson',
      editPersonBtn: 'sqlitedemo-main sqlitedemo-editperson #saveBtn'
    },
    
    control: {
      addBtn: {
        tap: 'newPerson'
      },
      editPersonBtn: {
        tap: 'savePerson'
      },
      list: {
        itemtap: 'editPerson'
      },
      listContainer: {
        activate: 'deselectList'
      }
    }
  },
  
  deselectList: function() {
    this.getList().deselectAll();
  },
  
  newPerson: function() {
    this.showEditPerson(Ext.create('SqliteDemo.model.Person2'));
  },
  
  editPerson: function() {
    this.showEditPerson(arguments[3]);
  },
  
  showEditPerson: function(record) {
    
    var title = 'Edit Person';
    if(record.phantom) {
      title = 'New Person';
    }
    var editPerson = Ext.create('SqliteDemo.view.EditPerson2', { title: title });
    
    editPerson.setRecord(record);
    
    this.getMain().push(editPerson);
  
  },
  
  savePerson: function() {
    
    var editPerson = this.getEditPerson(),
    record = this.getEditPerson().getRecord(),
    store = Ext.getStore('People'),
    errors;
    
    record.set(editPerson.getValues());
    
    // validate
    errors = record.validate();
    if(!errors.isValid()) {
      // output errors
      var msg = 'Please correct the following errors: <ul>';
      
      for(var i = 0; i < errors.items.length; i++)
        msg += '<li>' + errors.items[i].getMessage() + '</li>';
      msg += '</ul>';
      
      Ext.Msg.alert('Error', msg);
      return;
    }
    
    if(record.phantom) store.add(record);
    store.sync();
    this.getMain().pop();
  }
  
});