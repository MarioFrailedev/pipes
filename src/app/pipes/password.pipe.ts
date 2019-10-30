import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, active:boolean): string {

    if(!active){
      let show:string= "";
      for( let i=0; i< value.length; i++){
        show += "*";
      }
      return show;
    }else {
      return value;
    }
   
  }

}
