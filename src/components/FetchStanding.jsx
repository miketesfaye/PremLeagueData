import React, { Component } from 'react';
import axios from 'axios';

class FetchStanding extends Component {
    state = {
        posts: []
    }

   componentDidMount () {
       axios({
                url:'http://api.football-data.org/v2/competitions/2021/standings',
                method:'get',
                headers : {
                    'X-Auth-Token' : "6da71c4708c743a699e9c58c4505edfb"
                }
            })
            .then(response => { 
                this.setState({posts: response.data.standings[0].table});
                console.log(response);
            })
   }

   render () {
       let newData = this.state.posts;
       console.log(newData);

       let teamNames = [];
       Object.keys(newData).forEach(function(key) {
            teamNames.push(newData[key].team.name);
       });
       console.log(teamNames);

       let teamCrests = [];
       Object.keys(newData).forEach(function(key) {
            teamCrests.push(newData[key].team.crestUrl);
       });
       console.log(teamCrests);

       let teamWins = []
       Object.keys(newData).forEach(function(key) {
            teamWins.push(newData[key].won);
       });
       console.log(teamWins);

       let teamDraws = []
       Object.keys(newData).forEach(function(key) {
            teamDraws.push(newData[key].draw);
       });
       console.log(teamDraws);

       let teamLost = []
       Object.keys(newData).forEach(function(key) {
            teamLost.push(newData[key].lost);
       });
       console.log(teamLost);

       return (
           <div>
               <p>Hello</p>
           </div>
       )
   }
}
 
export default FetchStanding;