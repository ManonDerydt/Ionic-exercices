import { Component } from '@angular/core';
import {Task} from '../model/task';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  /**
   * Ici la propriété "task"
   *  est de type "Task"
   * C'est à dire qu'elle prendra comme
   * structure, comme référence
   * la table Task
   */
  task: Task = new Task();

  tasks: Task[] = [
    {id: 1, title: 'Faire la vaisselle', status: true},
    {id: 2, title: 'Sortir la poubelle', status: false},
    {id: 3, title: 'Promener le chien', status: false},
    {id: 4, title: 'Préparer le bois de la cheminée', status: true},
  ];

  constructor(){

  }
}
