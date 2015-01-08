Ext.define("SqliteDemo.view.Main", {
  extend: 'Ext.NavigationView',
  requires: ['Ext.NavigationView', 'Ext.dataview.List'],
  xtype: 'sqlitedemo-main',
  
  config: {
    items: [
    {
      title: 'Lista de Pessoas',
      layout: 'fit',
      xtype: 'container',
      itemId: 'listContainer',
      items: [
      {
        xtype: 'list',
        store: 'People',
        itemTpl: '{name}',
        emptyText: 'No people added yet'
      },
      {
        xtype: 'container',
        docked: 'bottom',
        padding: '5px',
        items: [{ xtype: 'button',
         itemId: 'addBtn',
          text: 'Add Pessoas',
           ui: 'confirm' }]
      }
      ]
    }
    ]
  }
});
