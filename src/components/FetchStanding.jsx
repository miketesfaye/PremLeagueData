import React, { Component } from 'react';
import axios from 'axios';

class FetchStanding extends Component {
   componentDidMount () {
       axios({
                url:'http://api.football-data.org/v2/competitions/2021/standings',
                method:'get',
                headers : {
                    'X-Auth-Token' : "6da71c4708c743a699e9c58c4505edfb"
                }
            })
            .then(response => {
                console.log(response);
            })
   }

   render () {
       return (
           <div>
               <p>Hello</p>
           </div>
       )
   }
}
 
export default FetchStanding;