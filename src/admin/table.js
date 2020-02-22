import React from 'react';

import $ from 'jquery';
$.DataTable=require('datatables.net')
class Mytable extends React.Component
{

    componentDidMount()
         {
           this.$el=$(this.refs.el);
            this.$el.DataTable({
                data: this.props.data,
                columns: [
                    { "data": "pid" },
                    { "data": "title" },
                    { "data": "body" },
                    { "data": "date_created" },
                    { "data": "likes" },
                    { "data": "userid" },
                    { "data": "category" }

                ] 
            } )
         }

        
    render()
    {
         
         return(<div>
                
                <table id="example" class="display" width="100%" ref="el"></table>

         </div>)
    }
}

 export default Mytable;