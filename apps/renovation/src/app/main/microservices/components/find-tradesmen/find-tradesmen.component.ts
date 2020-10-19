import { Component, OnInit } from '@angular/core';
import { TradesmanModel } from '../../../model/tradesman.model';
import { TradesmanService } from '../../services/tradesman.service';
import { Router } from '@angular/router';
import { SignupModalService } from '../../login/registration';
import { SMSService } from '../../services/sms.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { LoadingBarService } from '@ngx-loading-bar/core';


@Component({
  selector: 'tvs-find-tradesmen',
  templateUrl: './find-tradesmen.component.html',
  styleUrls: ['./find-tradesmen.component.scss']
})
export class FindTradesmenComponent implements OnInit {

  // favorite:any;
  loader        = this.loadingBar.useRef();
  favoriteList: Array<TradesmanModel> = [];
  tradesman: [];
  isDisplay: boolean;
  selectedItemCategoryId;
  postcode = '';

  favoritList: Array<TradesmanModel>=[];
  favoritListCount: number;

  title = 'appBootstrap';
  
  closeResult: string;

  constructor(public tradesmanService: TradesmanService,
    private modalService2: NgbModal,
    private sMSService: SMSService,
    private modalService: SignupModalService,
    private loadingBar: LoadingBarService,
    private router: Router) {
    // this.tradesman = any[];
  }


  keyword = 'itemCategoryName';
  clickedCategory = '';

  data;
  parentData = [];
  chieldData = [];

  Name = '';
  uploadedFiles: Array < File > ;

  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }
// tslint:disable-next-line: member-ordering
fileToUpload: File = null;





  
  
  open(content) {
    console.log(content);
    this.modalService2.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }











sendSms(message, mobile){
  console.log(message);
  console.log(mobile);
  this.sMSService.sendSms(message, mobile)
  .subscribe(
    response => {
      this.tradesman =  response;
    },
    error => {
      console.log(error);
    }
  );
}
handleFileInput(files: any) {

  console.log(files);

  

  for (let i = 0; i < files.length; i++) {
    this.fileToUpload = files.item(i);
    
  }

  this.tradesmanService.importPostcods(this.fileToUpload)
    .subscribe(
      response => {
        this.tradesman =  response;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );

  // console.log(this.fileToUpload);

  
}

upload() {
    const formData = new FormData();
    for (let i = 0; i < this.uploadedFiles.length; i++) {
        formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    console.log(formData);
    // this.http.post('/api/upload', formData)
    //     .subscribe((response) => {
    //         console.log('response received is ', response);
    //     })
  }



  selectEvent(item) {
    
    this.selectedItemCategoryId = item.itemCategoryId;

  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
  }

  ngOnInit(): void {

    this.isDisplay = false;
    this.getTradesmanList();
    this.getItemcategoryList();
    this.getForSearchItemcategoryList();

  }

  searchCategory(Item:any){
    this.clickedCategory = Item.itemCategoryName;
    this.selectedItemCategoryId = Item.itemCategoryId;
   
  }

  addToFavorite(item: any){
    const favorite = new TradesmanModel();
    favorite.companyName = item.companyName;

    favorite.image = item.image;
    favorite.tradesmanId = item.tradesmanId;
    favorite.serviceDescription = item.serviceDescription;
    this.favoriteList.push(favorite);

    localStorage.setItem('favoriteList', JSON.stringify(this.favoriteList));

    this.favoritList = JSON.parse(localStorage.getItem('favoriteList'));
    this.favoritListCount = this.favoritList.length

    this.tradesmanService.changeMessage(this.favoritListCount)

    
  }

  getTradesmanList(): void{
    this.loader.start();
    this.tradesmanService.getTradesmanList()
    .subscribe(
      response => {
        this.tradesman =  response;
      },
      error => {
        console.log(error);
      }
      
    );
    this.loader.complete();
  }

  getForSearchItemcategoryList(): void{
     this.tradesmanService.getForSearchItemcategoryList()
    .subscribe(
      response => {
        this.data =  response;
      },
      error => {
        console.log(error);
      }
    );
    
  }

  getItemcategoryList(): void{
    this.tradesmanService.getItemcategoryList()
   .subscribe(
     response => {
      
       this.parentData = response;
      //  console.log(this.parentData);
     },
     error => {
       console.log(error);
     }
   );
   
 }
  getItemcategoryList2(): void{
    this.tradesmanService.getItemcategoryList()
   .subscribe(
     response => {
       this.data =  response;
       this.chieldData = this.data.filter(obj => obj.parentId === 29)
     },
     error => {
       console.log(error);
     }
   );
   
 }
  importPostcods(){
    // this.tradesmanService.importPostcods()
    // .subscribe(
    //   response => {
    //     this.tradesman =  response;
    //     console.log(response);
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
  }


  getSearchItemcategoryList(): void{
    if(!this.selectedItemCategoryId)
    {
      alert('Please enter a valid category name')
      return;
    }
    this.tradesmanService.getSearchItemcategoryList(this.selectedItemCategoryId, this.postcode)
    .subscribe(
      response => {
        this.tradesman =  response;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
    
  }

  showDetail(tradesmanId):void{
    this.router.navigate(['/tradesmen-detail'], { queryParams: { id: tradesmanId } });
  }

  seeAll(val){
  }




















}
