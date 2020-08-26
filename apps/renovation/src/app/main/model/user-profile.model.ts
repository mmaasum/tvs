
export class UserProfileModel {
    userProfileId: number;
    userId: number;
    firstName: string;
    lastName: string;
    postCode: string;
    profilePicture:string;
    tradeLicence: string;
    mobilNo: string;
    address:string;
    isActiv: boolean;
// public ICollection<UserProfile> UserProfile { get; set; }

    constructor(userProfile?) {
        userProfile = userProfile || {};
        this.userProfileId = userProfile.userProfileId || 0;
        this.userId = userProfile.userId || 0;
        this.firstName = userProfile.firstName || '';
        this.lastName = userProfile.lastName || '';
        this.postCode = userProfile.postCode || '';

        this.profilePicture = userProfile.profilePicture || '';
        this.tradeLicence = userProfile.tradeLicence || '';
        this.mobilNo = userProfile.mobilNo || '';
        this.address = userProfile.address || '';

        this.isActiv = userProfile.isActiv || false;
      }
}

