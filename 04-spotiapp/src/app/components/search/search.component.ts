import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  listArstists : any[] = [];
  public loading: boolean;

  constructor(private spotifyService: SpotifyService) { 
    this.loading = false;
  }

  ngOnInit(): void {
  }

  buscarArtista(texto: string){
    this.loading = true;
    this.spotifyService.getArtists(texto)
      .subscribe((data: any) => {
      this.listArstists = data;
      this.loading = false;
      },
      error => {
        this.loading = false;
      }
    );
  }

}
