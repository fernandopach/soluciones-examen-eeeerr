
Ext.application({
   name:'exa-mensito',
   launch: function (){
       
     // Ext.Msg.confirm('Probar','Probando si todo lo hice bien');
      Ext.create('Ext.TabPanel',{   
        fullscreen:true,
        tabBarPosition:'bottom',
        items:[formulario1,
            {
                title:'Centigrados',
                iconCls:'user',
                html:'calcular de farenheit a centigrados'
            },
            {
               title:'Centigrados',
                iconCls:'home',
                html:'calcular de centigrados a farenheit'  
            }
        ]
      })
       }  
   
        });
        /*Panel de calculo de farentheit a centigradsos*/
        var formulario1={
            xtype:'fielset',
            title:'centigrados',
            iconCls:'user',
            items:[
                {
                    html:['<h1>calculo de farenheit a centigrados</h1',
                        '<br>',
                      '<p> introduce el valor de grados farenheit en el campo</p',
                      '</center>'].join('')
                  },
                  {
                      xtype:'textfield',
                      id:'textogrados',
                       placeHolder:'escribe aqui los grados'
                  },
                  {
                      xtype: 'button',
                     text:'hacer conversion',
                     ui:'confirm',
                     handler:function(){
                         var g= Ext.getCmp('textgrados').getValue();
                         var res=(g-32)/1.8
                         Ext.Msg.alert("resultado de la comversion"+res);
                     }
                  }
            ]
        }