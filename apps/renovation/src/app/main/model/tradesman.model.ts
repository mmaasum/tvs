export class TradesmanModel {
    tradesmanId: number;
    tradesmanName: string;
    tradeLicence: string;
    postCode: string;
    image: string;
    tags: string;
    title: string;
    subtitle: string;
    features: string;
    lastUpdate: string;
    addtoCart: string;
    personsName: string;
    personsAddress: string;
    serviceDescription: string;
    mobilNo: string;
    sendSms: string;
    promoCode: string;
    companyName: string;
    memberSince: string;
    companyLogo: string;
    distance: string;
    description: string;
    active: boolean;
    rate: number;
  
    constructor(tradesman?) {
      tradesman = tradesman || {};
      this.tradesmanId = tradesman.tradesmanId || 0;
      this.tradesmanName = tradesman.tradesmanName || '';
      this.tradeLicence = tradesman.tradeLicence || '';
      this.postCode = tradesman.postCode || '';
      this.image = tradesman.image || [];
      this.tags = tradesman.tags || [];
      this.title = tradesman.title || [];
      this.features = tradesman.features || '';
      this.subtitle = tradesman.subtitle || '';
      this.companyName = tradesman.companyName || '';
      this.serviceDescription = tradesman.serviceDescription || '';
      this.active = tradesman.active || false;
      this.rate = tradesman.rate || 0;
    }
  }
  