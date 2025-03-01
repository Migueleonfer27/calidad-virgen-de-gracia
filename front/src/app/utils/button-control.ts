import { Injectable } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Injectable()
export class ControlButton{

  constructor( private authService: AuthService){}

  shouldShowButton(abilityRequired:string):boolean{
    const idRol=3
    let isValid=false
    this.authService.getAbilitiesByRole(idRol).subscribe(result =>{
      const abilitiesUser=result.data.abilities.map(ability => ability.description);
      if(abilitiesUser.includes(abilityRequired)){
        isValid=true
      }
    })
    return isValid
  }
}

