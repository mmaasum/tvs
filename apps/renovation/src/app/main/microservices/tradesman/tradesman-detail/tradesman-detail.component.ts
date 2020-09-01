import { Component, OnInit } from '@angular/core';
import { TradesmanDetailService } from '../../services/tradesman-detail.service';
import { ActivatedRoute } from '@angular/router';

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';

@Component({
  selector: 'tvs-tradesman-detail',
  templateUrl: './tradesman-detail.component.html',
  styleUrls: ['./tradesman-detail.component.scss']
})
export class TradesmanDetailComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  tradesman;
  tradesmanId;
  constructor(private tradesmanDetailService: TradesmanDetailService,
    private router: ActivatedRoute ) {
      
      
      
      
      this.router.params.subscribe(params => {
        
        this.tradesmanId=(params['Id']);

        console.log(params['Id']);
        });
        



    }

  ngOnInit(): void {
    this.galleryOptions = [
      {
          width: '100%',
          height: '300px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
  ];

  this.galleryImages = [
      {
          small: 'assets/gallery/1-small.jpg',
          medium: 'assets/gallery/1-medium.jpg',
          big: 'assets/gallery/1-big.jpg'
      },
      {
          small: 'assets/gallery/2-small.jpg',
          medium: 'assets/gallery/2-medium.jpg',
          big: 'assets/gallery/2-big.jpg'
      },
      {
          small: 'assets/gallery/3-small.jpg',
          medium: 'assets/gallery/3-medium.jpg',
          big: 'assets/gallery/3-big.jpg'
      }
  ];
    
    this.getTradesmanDetail();
  }

  getTradesmanDetail(): void{
    this.tradesmanDetailService.getTradesmanDetail(this.tradesmanId)
    .subscribe(
      response => {
        this.tradesman =  response;
        console.log(this.tradesman);
      },
      error => {
        console.log(error);
      }
    );
    
  }
}
