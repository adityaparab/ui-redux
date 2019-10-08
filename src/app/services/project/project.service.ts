import { Injectable } from '@angular/core';
import { Project } from '../../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private project: Project;

  constructor() { }


  public getProject(): Project {
    return this.project;
  }

  public setProject(project: Project) {
    this.project = project;
  }
}
