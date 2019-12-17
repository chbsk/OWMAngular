import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Loginfo, Locations, Query } from '../types';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  locations: Observable<Locations>;
  constructor( private apollo: Apollo) { }

  ngOnInit() {
  }

  user: '';
  passw: '';

  log(user, passw) {
    this.user = user; 
    this.passw = passw;

    this.locations = this.apollo.watchQuery<Query>({
      query: gql`
        query getLocations{
          getLocations{
            id
            user
            cities
          }
        }
      `
    })
    .valueChanges
    .pipe(
      map( result => result.data.getLocations)
      );
    
    console.log(this.locations.id);
  }
}
