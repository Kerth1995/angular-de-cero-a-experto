import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  MAIN_PATH = 'https://api.spotify.com/v1';
  TOKEN = 'Bearer BQCMr7pzh45VXH2jeJovX1m2SaPaNKIHwCu9UwwiKFW2BVYDx_rb_boM0am7OVPfP2eX99-9L_0y96LVWjwM4Mhn-QA8ZEUg4d6IUbBELEx-nMmGhrQ';
  


  constructor(private httpClient: HttpClient) { }

  getHeader(){
    const headers = new HttpHeaders({
      'Authorization': this.TOKEN
    });
    return headers;
  }

  getNewReleases(){
    const URL = `${this.MAIN_PATH}/browse/new-releases?offset=0&limit=50`;
    const headers = this.getHeader();    
    return this.httpClient.get(URL, {headers})
              .pipe(map((data: any) => {
                return data.albums.items;
              }));
  }

  getArtists(terminoBusqueda: string){
    const URL = `${this.MAIN_PATH}/search?q=${terminoBusqueda}&type=artist&limit=40`;
    const headers = this.getHeader();  
    
    return this.httpClient.get(URL, {headers})
            .pipe(map((data: any) => {
              return data.artists.items;
            }));
  }

  getArtistById(idArtist: string){
    const URL = `https://api.spotify.com/v1/artists/${idArtist}`;
    const headers = this.getHeader();  
    
    return this.httpClient.get(URL, {headers})
            .pipe(map((data: any) => {
              return data;
            }));
  }

  getTopTracksByArtistId(idArtist: string){
    const URL = `https://api.spotify.com/v1/artists/${idArtist}/top-tracks?market=us`;
    const headers = this.getHeader();  
    
    return this.httpClient.get(URL, {headers})
            .pipe(map((data: any) => {
              return data.tracks;
            }));
  }
}
