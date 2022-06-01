import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './models/content';

@Pipe({
  name: 'biketype'
})
export class BiketypePipe implements PipeTransform {

  transform(BikeList: Content[], typeparameter ?: string):Content[]{
    if(typeparameter==null){
      return BikeList.filter(t=>t.type == null );
    }

    return BikeList.filter(t=>t.type == typeparameter );
  }
}