Ext.define("SqliteDemo.view.EditPerson2", {
  extend: 'Ext.form.Panel',
  requires: ['Ext.form.FieldSet', 'Ext.field.Text'],
  xtype: 'sqlitedemo-editperson',
  
  config: {
    layout: 'vbox',
    items: [
    {
      xtype: 'fieldset',
      items: [
      {
        xtype: 'textfield',
        label: 'Nome',
        name: 'name'
      },
      {
        xtype: 'textfield',
        label: 'Nome',
        name: 'endereco'
      }
      ]
    },
    {
      xtype: 'button',
      ui: 'confirm',
      text: 'Salvar',
      itemId: 'saveBtn'
    }
    ]
  }
});
