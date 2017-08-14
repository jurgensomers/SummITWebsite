import { Directive, ElementRef, Input } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Directive({
  selector: '[translate]',

})
export class TranslateDirective {

  @Input() translate:string;
  
  constructor(private translationService : TranslationService, private el:ElementRef) { 
     
  }

   ngOnInit(){
         if(this.translate == undefined || this.translate == null){
      this.el.nativeElement.innerHtml = "#translationKeyMissing#";
      console.log('translation key is missing');
    }
    else {
      var translation = this.translationService.get(this.translate);
      this.el.nativeElement.innerHtml = '<span>' + translation + '</span>';
      console.log('translated ' + this.translate + ':' + translation);
    }
    }

}
