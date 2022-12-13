import { Pipe, PipeTransform } from "@angular/core";

import { HeroeDto } from '../Interfaces/heroe.interface';

@Pipe({
    name: 'image',
    pure: false
})

export class ImagePipe implements PipeTransform{
    
    transform(value: HeroeDto) : string  {

        if(!value.id && !value.image)
            return `assets/no-image.png`;
        else if(value.image)
            return value.image;
        else
            return `assets/heroes/${value.id}.jpg`;
    }
}