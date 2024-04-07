import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18nSelect
  public name: string = 'Ronaldo';

  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient():void {
    this.name = 'Andrea';
    this.gender = 'female'
  }

  //i18Plural

  public clients: string[] = [
    'Maria',
    'Ronaldo',
    'Fernando',
    'Felipe',
    'Melissa'
  ]

  deleteClient(): void {
    this.clients.shift();
  }

  public clientsMap = {
    '=0': 'no tenemos clientes esperando. ¡Se el primero!',
    '=1': 'tenemos # cliente esperando',
    '=2': 'tenemos # clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  //KeyValue Pipe

  public person = {
    name: 'Ronaldo',
    age: '21',
    addres: 'Bogotá, Colombia'
  }

  //Async Pipe

  public myObservableTimer = interval(2000).pipe(
    tap( x => console.log('tap:', x))
    );


  public promiseValue: Promise<string> = new Promise (( resolve, reject) =>{
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
    }, 5000)
  })
}
