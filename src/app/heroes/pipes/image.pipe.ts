import { Pipe, PipeTransform } from "@angular/core";

import { HeroeDto } from '../Interfaces/heroe.interface';

@Pipe({
    name: 'image'
})

export class ImagePipe implements PipeTransform{
    
    transform(value: HeroeDto) : string  {
        return `assets/heroes/${value.id}.jpg`;
    }
}