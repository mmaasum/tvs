export class AdviceCenterPostCommentModel {
    adviceCenterId: number;
    adviceCenterPostCommentId?: number;
    comment: string;
    createDate: string;
    userId: number;
    isActiv: boolean;


    constructor(adviceCenterComment?) {
        adviceCenterComment = adviceCenterComment || {};
        this.adviceCenterId = adviceCenterComment.adviceCenterId || 0;
        this.adviceCenterPostCommentId = adviceCenterComment.adviceCenterPostCommentId || 0;
        this.userId = adviceCenterComment.userId || 0;
        this.comment = adviceCenterComment.comment || '';
        this.createDate = adviceCenterComment.createDate || '';
        this.isActiv = adviceCenterComment.isActiv || false;
      }
}