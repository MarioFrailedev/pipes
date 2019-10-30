import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalization'})
export class CapitalizationPipe implements PipeTransform {
    
    transform(value: string, all:boolean = true): string {
        
        value = value.toLocaleLowerCase();

        let fullName = value.split( " ");
        // tslint:disable-next-line: forin
        if( all) {
            for( let i in fullName ){
                fullName[i] = fullName[i][0].toUpperCase() + fullName[i].substr(1);      
            }
        }else {
            fullName[0] = fullName[0][0].toUpperCase() + fullName[0].substr(1);   
        }
        

        return fullName.join(" ");
    }
}