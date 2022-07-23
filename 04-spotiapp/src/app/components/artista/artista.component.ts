import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  public artist: any = {};
  public topTracks: any[] = [];
  public loading: boolean;
  public artistId: string;

  constructor(private activatedRoute: ActivatedRoute
              , private spotifyService: SpotifyService) {

    this.loading = true;
    this.artistId = '';
    this.activatedRoute.params.subscribe(param => {
      this.artistId = param['id'];
      this.getArtistById(this.artistId);
      this.getTopTracksByArtistId(this.artistId);
    });
  }

  ngOnInit(): void {
  }

  getArtistById(artistId: string){
    this.spotifyService.getArtistById(artistId).subscribe(data =>{
      this.artist = data;
      //this.loading = false;
    });
  }

  getTopTracksByArtistId(artistId: string){
    this.spotifyService.getTopTracksByArtistId(artistId).subscribe(data =>{
      this.topTracks = data;
      console.log(this.topTracks);
      this.loading = false;
    });
  }

}
