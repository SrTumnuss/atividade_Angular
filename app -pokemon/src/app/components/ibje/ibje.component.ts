import { Component } from '@angular/core';
import { ibge } from '../../interfaces/ibge';
import { ibgeService } from '../../services/ibge.service';

@Component({
  selector: 'app-rota',
  standalone: true,
  imports: [],
  templateUrl: './ibje.component.html',
  styleUrl: './ibje.component.css'
})
export class ibjeComponent {

  ibges:ibge[] = [];
  constructor(private ibgeServices:ibgeService) {


 }

 listar():void{
     this.ibgeServices.listar().subscribe((listaibge) => (this.ibges = listaibge));
 }

 ngOnInit():void{
   this.listar();
 }
}
