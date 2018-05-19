import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(
  	private http:HttpClient,
  	private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
    	tap(heroes => this.log('fetched heroes')
    		catchError(this.handleError('getHeroes', []))
    			);
     }
}