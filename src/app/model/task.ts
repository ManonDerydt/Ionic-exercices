/**
 * Ici , je définni ce à quoi
 * correspond une tâche
 */
// Le ? signifie que que le duedate n'est pas obligatoire

export class Task{
    id: number = Date.now();
    title: string;
    status = false;
    duedate?: number;
}
