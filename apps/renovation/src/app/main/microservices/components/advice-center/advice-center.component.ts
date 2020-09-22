import { Component, OnInit } from '@angular/core';
import { AdviceCenterService } from '../../services/advicecenter.service';
import { AdviceCenterModel } from '../../../model/advicecenter.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdviceCenterPostCommentModel } from '../../../model/advice-center-post-comment.model';

@Component({
  selector: 'tvs-advice-center',
  templateUrl: './advice-center.component.html',
  styleUrls: ['./advice-center.component.scss']
})
export class AdviceCenterComponent implements OnInit {
  adviceCenterPost;
  adviceCenterTitleList: [];
  searchText: string;
  adviceCenterPostCommentModel: AdviceCenterPostCommentModel;
  postCommentEntryForm: FormGroup;


  constructor(private advicecenterService: AdviceCenterService,
    private _formBuilder: FormBuilder) { 
    this.adviceCenterPost = new  AdviceCenterModel();
  }


  ngOnInit(): void {
    alert('d');
    this.getAdviceCenterPosts();
   
    this.getAdviceCenterTitleList();

    this.adviceCenterPostCommentModel = new AdviceCenterPostCommentModel();

    this.postCommentEntryForm = this.createProductForm();
  }

  saveComment(){
    const data = this.postCommentEntryForm.getRawValue();
    this.advicecenterService.saveAdviceCenterPostComment(data);
  }
  createProductForm(): FormGroup
    {
        return this._formBuilder.group({
          adviceCenterId              : [this.adviceCenterPostCommentModel.adviceCenterId],
          adviceCenterPostCommentId   : [this.adviceCenterPostCommentModel.adviceCenterPostCommentId],
          comment                     : [this.adviceCenterPostCommentModel.comment],
          createDate                  : [this.adviceCenterPostCommentModel.createDate],
          isActiv                     : [this.adviceCenterPostCommentModel.isActiv]
        });
    }
    
  getAdviceCenterPost(adviceCenterId) {
    this.advicecenterService.getAdviceCenterPost(adviceCenterId)
    .subscribe(
      response => {
        this.adviceCenterPost =  response;
      },
      error => {
        console.log(error);
      }
    );
  }

  getAdviceCenterPosts(): void{
    this.advicecenterService.getAdviceCenterPosts()
    .subscribe(
      response => {
        this.adviceCenterPost =  response;
      },
      error => {
        console.log(error);
      }
    );
    
  }

  getAdviceCenterTitleList(): void{

    this.advicecenterService.getAdviceCenterTitleList()
    .subscribe(responce=>{
      this.adviceCenterTitleList = responce
    });
  }



}
