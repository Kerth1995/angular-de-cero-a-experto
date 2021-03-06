import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verArtistaOAlbum(item:any){
    //console.log(item);
    if(item.type === 'artist'){
      this.router.navigate(['/artist', item.id]);
    }
  }

}
