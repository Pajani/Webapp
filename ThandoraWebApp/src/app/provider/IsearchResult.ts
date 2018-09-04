

export interface IsearchResult
{
  displayOrder: number,
  SenderID: number,
  SenderName: string,
  userType: string ,
  SenderContactNo_1: string ,
  ContactHide: number,
  cServiceType: string,
  ServiceDesc: string,
  logopath: string ,
  subscribeonoff: string,
  ReviewReceived: number,
  msgCommentsReceived: number,
  msgLikeReceived: number,
  msgTotpublished: number,
  msgReadBy: number,
  isFCMActive: string ,
  address: string ,
  postcode: string 

}

export interface IPosts
{

  MessageID: number,
  SenderID: number,
  SenderName: string,
  SenderContactNo_1: string,
  msgPublished: string,
  msgContent: string ,
  imagePath: string,
  msgDistributedto: string,
  msgDistributedPlace: string

}


export interface OTPResponse
{

    StatusID: number,
    StatusMsg: string ,
    returnID:number,
    DesctoDev:string ,
    userType: string ,
    OTP: number
}


export interface APIStatus
{
    StatusID: number,
    StatusMsg: string ,
    returnID:number,
    DesctoDev:string ,
    userType: string ,
    OTP: number
}