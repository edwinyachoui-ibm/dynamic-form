export interface FormValues {
  name: string; // firstname, lastname format
  isOld: string; // `yes` if age > 50, otherwise `no
  isYoung: string; // `yes` if age < 20, otherwise `no`
  phoneNumber: string; // The phone number but with the international format
  country: string; // The country name selected .... but in english, whatever is the current lang
  province: string; // The country name selected .... but in english, whatever is the current lang
}
