
export class UserModel {
    userId: number;
    userName: string;
    email: string;
    password: string;
    tradesman:boolean;
    isActiv: boolean;
// public ICollection<UserProfile> UserProfile { get; set; }

    constructor(user?) {
        user = user || {};
        this.userId = user.userId || 0;
        this.userName = user.userName || '';
        this.email = user.email || '';
        this.password = user.password || '';
        this.tradesman = user.tradesman || false;
        this.isActiv = user.isActiv || false;
      }
}

