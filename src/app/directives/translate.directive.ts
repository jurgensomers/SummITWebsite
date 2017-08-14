import { Directive, ElementRef, Input } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { TranslatedPage }  from '../services/translation.service';
@Directive({
  selector: '[translate]',

})
export class TranslateDirective {

  @Input() translate:string;
  
  constructor(private translationService : TranslationService, private el:ElementRef) { 
     
  }

  ngOnInit(){
         
    this.translationService.getAll()
    .subscribe(p => {
      var text = this.search(p);
      this.setLabel(text);
      });
    
  }

  getPageName(){
    if(this.translate === null || this.translate == undefined ) return "#translationKey#";
    
    return this.translate.split('.')[0]; 
  }

  getKeyName(){
    if(this.translate === null || this.translate == undefined ) return "#translationKey#";
    if(this.translate.split('.').length <= 1) return null;
    return this.translate.split('.')[1];
  }

  search(allTranslations:TranslatedPage[]){
    var pageName = this.getPageName();
    var keyName = this.getKeyName();

    if(pageName == null || keyName == null) return "#" + pageName + "." + keyName + "#";
    console.log("Searching for page : " + pageName + " and key : " + keyName);
   
    var pageResult = allTranslations.filter(x => x.page == pageName);
    if(pageResult != null && pageResult != undefined && pageResult.length > 0) {
      var keyResult = pageResult[0].labels.filter(x => x.key == keyName);
      if(keyResult != null && keyResult != undefined && keyResult.length > 0 ) {
        console.log('page ' + pageName + ' and key ' + keyName + ' : ' + keyResult[0].key + '/' + keyResult[0].value) 
        return keyResult[0].value;
      }
      else{
        return "#" + pageName + "." + keyName + "#";
      }
    }
  }
 

  setLabel(text:string){    
        this.el.nativeElement.textContent =  text ; 
        console.log("translated :" + text);
  }

}
