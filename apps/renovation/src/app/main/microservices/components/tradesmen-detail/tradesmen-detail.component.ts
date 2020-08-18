import { Component, OnInit } from '@angular/core';
import { TradesmanDetailService } from '../../services/tradesman-detail.service';
import { Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tvs-tradesmen-detail',
  templateUrl: './tradesmen-detail.component.html',
  styleUrls: ['./tradesmen-detail.component.css']
})
export class TradesmenDetailComponent implements OnInit {
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
